import { useState } from "react";

export default function ShopAssistantDock({ userId, authToken }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]); // [{role:'user'|'assistant', content:string}]
  const [isLoading, setIsLoading] = useState(false);

  const send = async () => {
    const message = input.trim();
    if (!message) return;
    
    setInput("");
    const nextHistory = [...history, { role: "user", content: message }];
    setHistory(nextHistory);
    setIsLoading(true);

    try {
      const resp = await fetch("/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history: nextHistory, userId, authToken })
      }).then(r => r.json());

      setHistory(h => [...h, { role: "assistant", content: resp.reply }]);
    } catch (error) {
      console.error("Error sending message to assistant:", error);
      setHistory(h => [...h, { 
        role: "assistant", 
        content: "Sorry, I'm having trouble connecting to the server. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(v => !v)}
        className="rounded-full shadow-lg px-4 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
      >
        {open ? "✕" : "🛍️ Shop Assistant"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-96 max-h-[70vh] bg-white border shadow-xl rounded-2xl flex flex-col overflow-hidden">
          <div className="p-3 border-b font-semibold bg-gray-50">
            <div className="flex justify-between items-center">
              <span>Shop Assistant</span>
              <button 
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {history.length === 0 ? (
              <div className="text-center text-gray-500 p-4">
                <p>Hi there! I'm your shopping assistant. How can I help you today?</p>
                <p className="mt-2 text-xs">Try asking: "Find me summer dresses under $50" or "What's trending in shoes?"</p>
              </div>
            ) : (
              history.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div className={`inline-block px-3 py-2 rounded-xl max-w-[80%] ${m.role === "user" ? "bg-blue-100 text-blue-900" : "bg-gray-100"}`}>
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left">
                <div className="inline-block px-3 py-2 rounded-xl bg-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 border-t bg-gray-50">
            <div className="flex gap-2">
              <input
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Find pink floral dresses under $150…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !isLoading && send()}
                disabled={isLoading}
              />
              <button 
                onClick={send} 
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 disabled:opacity-50"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
