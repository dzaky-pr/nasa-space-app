import NextImage from '@/components/NextImage';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';
import { ChatInput } from '@/components/ui/chat/chat-input';
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from '@/components/ui/chat/expandable-chat';
import { ChatMessageList } from '@/components/ui/chat/chat-message-list';

export default function ChatBot() {
  return (
    <div className="fixed z-20 right-0 top-[50vh] flex h-[64px] justify-end items-center">
      {/* <ExpandableChat size="md" position="bottom-right"> */}
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p>Ask any question for our AI to answer</p>
        <div className="flex gap-2 items-center pt-2">
          {/* <Button variant="secondary">New Chat</Button> */}
          {/* <Button variant="secondary">See FAQ</Button> */}
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList className="bg-muted/40">
          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage>Hey there</ChatBubbleMessage>
          </ChatBubble>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form className="flex relative gap-2">
          <ChatInput className="min-h-12 bg-background shadow-none " />
          {/* <Button className="absolute top-1/2 right-2 transform size-8 -translate-y-1/2" size="icon">
              <Send className="size-4" />
            </Button> */}
        </form>
      </ExpandableChatFooter>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <NextImage src="/mascot-neutrack.png" height={64} width={64} className="hover:animate-bounce -rotate-45" alt="Neutrack Mascot" />
          </TooltipTrigger>

          <TooltipContent className="absolute z-20 flex h-auto w-auto right-8 top-[50%]">
            <p className="text-white text-center">Ask Me!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* </ExpandableChat> */}
    </div>
  );
}
