"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    ArrowUp
} from "lucide-react"
interface ChatInputProps {
   input: string;
   handleInputChange: (e:any) => void;
   handleSubmit: (e:any) => void;
}

export default function ChatInput({
    input,
    handleInputChange,
    handleSubmit,
}: ChatInputProps) {
    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex gap-2 w-full px-1 sm:px-0 transition-all duration-300"
        >
            <Input 
                value={input}
                onChange={handleInputChange}
                placeholder="想知道什么关于电影？"
                className="rounded-full border-2 focus-visible:ring-primary transition-all duration-300 focus:border-primary focus:shadow-md flex-1 min-w-0"
                style={{ minWidth: '0' }} // 确保输入框可以根据内容和容器调整宽度
            />
            <Button 
                className="rounded-full transition-all duration-300 hover:bg-accent hover:shadow-lg active:scale-95 w-10 h-10 flex items-center justify-center shrink-0"
                type="submit"
                disabled={!input.trim()}
            >
                <ArrowUp className="w-5 h-5" />
                <span className="sr-only">Submit</span>
            </Button>
        </form>
    )
}