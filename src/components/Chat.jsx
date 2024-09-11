import { useState, useEffect, useRef } from 'react';
import getMessages from '../services/getMessages';
import Message from './Message';

function Chat({ chat }) {
    const [messages, setMessages] = useState([]);
    const containerRef = useRef(null);
    const messagesByDay = Object.groupBy(messages, ({ date }) => date);

    useEffect(() => {
        getMessages(chat, setMessages);
    }, [chat]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]); 


    return (
        <div ref={containerRef} className="border border-slate-800 rounded-s-xl ps-6 pe-5 py-8 bg-slate-100 h-80 overflow-y-scroll">
            <ul className="flex flex-wrap justify-start items-center gap-y-5 max-h-full">
                {Object.entries(messagesByDay).map(([day, dailyMessages]) => 
                    <li key={day} className="basis-full pb-10">
                        <h4 className="text-xl text-center">{day}</h4>
                        <ul className="flex flex-wrap justify-start items-center gap-y-6">
                            {dailyMessages.map(message => 
                                <li key={message.id} className="basis-full">
                                    <Message {...message} />
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Chat;