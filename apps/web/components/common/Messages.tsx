import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { motion } from "framer-motion";

export default function MessageArea() {
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <div className="flex flex-col h-full overflow-y-auto p-4 gap-4 bg-[#0f172a]">
      
      {messages.map((msg:any) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2"
        >
          
          {/* USER MESSAGE */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white p-3 rounded-xl max-w-[70%]">
              
              {/* Images */}
              {msg.images && msg.images.length > 0 && (
                <div className="flex gap-2 mb-2 flex-wrap">
                  {msg.images.map((img:any, i:any) => (
                    <img
                      key={i}
                      src={img}
                      alt="upload"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              <p>{msg.prompt}</p>
            </div>
          </div>

          {/* AI RESPONSE */}
          {msg.response && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white p-3 rounded-xl max-w-[70%]">
                <p>{msg.response}</p>
              </div>
            </div>
          )}

          {/* LOADING */}
          {!msg.response && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white p-3 rounded-xl">
                <div className="flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-150">.</span>
                  <span className="animate-bounce delay-300">.</span>
                </div>
              </div>
            </div>
          )}

        </motion.div>
      ))}
    </div>
  );
}