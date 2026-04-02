"use client";

import MessageArea from "@/components/common/Messages";
import InputArea from "@/components/common/bottomInputArea";

export default function ChatPage() {
  return (
    <>
      {/* HIDDEN INPUTS */}

      <div className="flex flex-col h-screen bg-white pl-64"></div>
      <div className="flex flex-col h-screen bg-white pl-64">
        <MessageArea />
        {/* --- BOTTOM INPUT AREA --- */}

        <InputArea />
      </div>
    </>
  );
}
