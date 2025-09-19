"use client"
import type {
    Message
} from 'ai'
import ReactMarkdown from 'react-markdown'

interface ChatOutputProps {
    messages: Message[];
    status: string;
}

export default function ChatOutput({
    messages,
    status,
}: ChatOutputProps) {
    return (
        <>
           {messages.map((msg, index) => 
                msg.role === "user" ? (
                    <UserChat key={index} content={msg.content} />
                ) : (
                    <AssistantChat key={index} content={msg.content} />
                )
            )}
           {
            status === "submitted" && (
                <div className='text-muted-foreground animate-pulse flex items-center gap-2'>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating response...
                </div>
            )
           }
           {
            status === "error" && (
                <div className='text-red-500 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg'>An error occurred. Please try again.</div>
            )
           }
        </>
    )
}

const UserChat = ({ content }: {content : string }) => {
    return (
        <div className='bg-primary text-white rounded-2xl ml-auto max-w-[80%] w-fit px-5 py-3 mb-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01]'>
            {content}
        </div>
    )
}

const AssistantChat = ({ content }: {content: string}) => {
    return (
        <div className='pr-8 w-full mb-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
            <ReactMarkdown
                components={{
                    a: ({href, children}) => (
                        <a target="_blank" href={href} className="text-primary hover:underline font-medium">{children}</a>
                    ),
                    p: ({ children }) => (
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">{children}</p>
                    ),
                    h1: ({ children }) => (
                        <h1 className="text-xl font-bold text-slate-800 dark:text-white mt-4 mb-2">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white mt-3 mb-1">{children}</h2>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-3 text-slate-700 dark:text-slate-300">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-5 mb-3 text-slate-700 dark:text-slate-300">{children}</ol>
                    ),
                    code: ({ children }) => (
                        <code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800 dark:text-slate-200">{children}</code>
                    ),
                }}
            >{content}</ReactMarkdown>
        </div>
    )
}