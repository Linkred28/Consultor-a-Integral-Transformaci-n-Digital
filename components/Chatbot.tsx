import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Chat } from '@google/genai';
import { initChat } from '../services/geminiService';
import { IconChat, IconClose, IconSend } from './Icons';
import Logo from './Logo';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeChat = async () => {
            const chatInstance = await initChat();
            setChat(chatInstance);
            setMessages([{
                role: 'model',
                text: 'Hola. Soy Metodiko AI. ¿En qué puedo ayudarte hoy?'
            }]);
        };
        initializeChat();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, isLoading]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userInput: Message = { role: 'user', text: input.trim() };
        setMessages(prev => [...prev, userInput]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: userInput.text });
            const modelResponse: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelResponse]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorResponse: Message = { role: 'model', text: 'Lo siento, he encontrado un problema. Por favor, inténtalo de nuevo más tarde.' };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                className="chatbot-fab"
                onClick={toggleChat}
                aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
                aria-expanded={isOpen}
            >
                {isOpen ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
            </button>

            <div className={`chatbot-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-labelledby="chatbot-title">
                <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
                    <div className="flex items-center gap-3">
                        <Logo className="w-8 h-8" />
                        <h2 id="chatbot-title" className="text-lg font-semibold text-brand-text">Metodiko AI</h2>
                    </div>
                    <button onClick={toggleChat} className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors" aria-label="Cerrar chat">
                        <IconClose className="h-5 w-5" />
                    </button>
                </header>

                <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message-bubble ${msg.role === 'user' ? 'message-user' : 'message-model'}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message-bubble message-model loading-dots">
                            <span className="inline-block w-2 h-2 bg-brand-text-secondary rounded-full"></span>
                            <span className="inline-block w-2 h-2 bg-brand-text-secondary rounded-full"></span>
                            <span className="inline-block w-2 h-2 bg-brand-text-secondary rounded-full"></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribe tu consulta..."
                        className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
                        disabled={isLoading}
                        aria-label="Mensaje para el chatbot"
                    />
                    <button
                        type="submit"
                        className="flex-shrink-0 button p-3"
                        disabled={isLoading || !input.trim()}
                        aria-label="Enviar mensaje"
                    >
                        <IconSend className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Chatbot;
