"use client";

import React, { useState } from "react";
import DashboardPage from "./dashboard/page";
import Sidebar from "@/components/Sidebar";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function AdminHome() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 👉 OPEN CHAT + ADD WELCOME MESSAGE
  const openChat = () => {
    setOpen(true);

    // only add welcome message if chat is empty
    setMessages((prev) => {
      if (prev.length === 0) {
        return [
          {
            role: "bot",
            text: "Hi 👋 My name is Ruma. How can I assist you today?",
          },
        ];
      }
      return prev;
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        // "http://localhost:5678/webhook/1478c2c2-be0c-4836-8b51-2db2d867bf56/chat",

        "https://freebee-graph-starry.ngrok-free.dev/webhook/1478c2c2-be0c-4836-8b51-2db2d867bf56/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ chatInput: currentInput }),
          body: JSON.stringify({
            action: "sendMessage",
            sessionId: crypto.randomUUID(),
            chatInput: currentInput,
          }),
        },
      );

      const raw = await res.text();
      console.log("RAW RESPONSE FROM N8N:", raw);

      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        data = { output: raw };
      }

      const botMsg: Message = {
        role: "bot",
        text:
          data?.output ||
          data?.text ||
          data?.message ||
          raw ||
          "⚠️ No response from AI",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Cannot connect to backend (n8n not responding)",
        },
      ]);
    }

    setLoading(false);
  };

  const closeChat = () => {
    setOpen(false);
    setMessages([]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-200 relative">
      <Sidebar />

      <div className="flex-1 p-6">
        <DashboardPage />
      </div>

      {/* Chat Button */}
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        💬 AI Chat
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl flex flex-col">
          {/* HEADER */}
          <div className="p-3 border-b font-bold flex items-center justify-between">
            <span>AI Assistant</span>

            <button
              onClick={closeChat}
              className="text-xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div className="p-3 h-80 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-200 p-2 rounded-lg animate-pulse self-start">
                AI is typing...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded p-2"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
