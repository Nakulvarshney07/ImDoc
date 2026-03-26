"use client";
import { Plus, SendHorizontal } from 'lucide-react';

export default function ChatPage() {
  function handleSend(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    /* pl-64 pushes the entire chat area to the right of your sidebar */
    <div className="flex flex-col h-screen bg-white pl-64">
      
      {/* --- CHAT AREA --- */}
      {/* overflow-y-auto makes this part scrollable while the rest stays fixed */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 mb-32">
        {/* Messages will render here */}
      </div>

      {/* --- BOTTOM INPUT AREA --- */}
      {/* fixed bottom-0 left-64: Pins it to bottom, starting AFTER the sidebar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white p-4">
        <div className="max-w-5xl mx-auto px-4">
          <form 
            onSubmit={handleSend} 
            className="relative flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner"
          >
            <button type="button" className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
              <Plus size={20} />
            </button>
            
            <textarea
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend(e)}
              placeholder="Describe your task..."
              className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2 text-sm text-gray-800 outline-none max-h-32"
              rows={1}
            />

            <button 
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-sm"
            >
              <SendHorizontal size={20} />
            </button>
          </form>
          
          {/* The "mistakes" line */}
          <p className="text-[11px] text-center text-gray-400 mt-3 tracking-wide">
            ImDoc can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
} 