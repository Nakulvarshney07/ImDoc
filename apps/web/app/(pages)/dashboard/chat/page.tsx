"use client";

import MessageArea from "@/components/common/Messages";
import InputArea from "@/components/common/bottomInputArea";

export default function ChatPage() {
  return (
    <>
    
      <div className="flex flex-col h-screen bg-white pl-20">
     
        <MessageArea />
        

        <InputArea />
        </div>
      
    </>
  );
}
