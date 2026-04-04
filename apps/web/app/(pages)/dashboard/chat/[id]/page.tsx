"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";

import MessageArea from "@/components/common/Messages";
import InputArea from "@/components/common/bottomInputArea";

import {
  setConversationId,
  clearMessages,
  addMessage,
} from "@/lib/redux/features/chatSlice";

export default function ChatByIdPage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  

  useEffect(() => {
    if (!id) return;

    const conversationId = id as string;
     dispatch(setConversationId(conversationId));
  
   

    
    dispatch(clearMessages());

    
    fetch(`http://localhost:3001/api/v1/chat/${conversationId}`) //abhi likhne ha issa
      .then((res) => res.json())
      .then((data) => {
        
        // data.messages = [{ role, content, images }]
        
        let tempPrompt = "";
        let tempImages: string[] = [];

        data.messages.forEach((msg: any) => {
          if (msg.role === "USER") {
            tempPrompt = msg.content;
            tempImages = msg.images?.map((img: any) => img.url) || [];
          } else {
            // ASSISTANT → pair with previous USER
            dispatch(
              addMessage({
                id: msg.id,
                prompt: tempPrompt,
                response: msg.content,
                images: tempImages,
              })
            );

            tempPrompt = "";
            tempImages = [];
          }
        });
      });
  }, [id]);

  return (
    <div className="flex flex-col h-screen bg-white pl-20">
      <MessageArea />
      <InputArea />
    </div>
  );
}