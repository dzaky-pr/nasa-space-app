"use client";

import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat";
import { sendMessageToGemini } from "@/lib/geminiApi"; // Import API handler
import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatSupport() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, how can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await sendMessageToGemini(input);
      const botReply =
        response.contents[0].parts[0].text || "No response received";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error communicating with API." },
      ]);
    }
  };

  return (
    <ExpandableChat
      size="lg"
      position="bottom-right"
      className="bg-neutral-900 border-[0.5px] border-neutral-50 rounded-xl"
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl text-white font-semibold">
          Chat with our AI ✨
        </h1>
        <p className="text-white">Ask any question for our AI to answer</p>
        {/* <div className="flex gap-2 text-white items-center pt-2">
          <Button variant="secondary" className="text-white">
            New Chat
          </Button>
          <Button variant="secondary" className="text-white">
            See FAQ
          </Button>
        </div> */}
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((msg, idx) => (
            <ChatBubble
              key={idx}
              variant={msg.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                src={
                  msg.sender === "user"
                    ? "./images/circle-user.png"
                    : "./images/mascot-neutrack.png"
                }
              />
              <ChatBubbleMessage>{msg.text}</ChatBubbleMessage>
            </ChatBubble>
          ))}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="flex items-center gap-2">
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />

        <Button type="submit" size="icon" onClick={handleSendMessage}>
          <Send className="size-6 text-white" />
        </Button>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
