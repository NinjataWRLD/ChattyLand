import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import Message from './Message';
import Field from './Field';
import Name from './Name';

function Body() {
    const [messages, setMessages] = useState([]);

    function fetchMessages() {
        const messagesRef = ref(database, 'messages/chat1');

        onValue(messagesRef, (snapshot) => {
            const chat = snapshot.val();
            setMessages([]);
            Object.values(chat).forEach(message => {
                setMessages(messages => [...messages, message]);
            });
        });
    }
    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="flex flex-col gap-y-8 my-4">
            <h1 className="text-3xl text-center text-slate-800 font-bold">Global Chat</h1>
            <span className="flex items-center justify-center gap-x-3">
                <span className="text-xl text-center font-bold italic">Your name is: </span>
                <span><Name /></span>
            </span>
            <div className="border border-slate-800 rounded-xl ps-6 pe-5 py-8 bg-slate-100">
                <ul className="flex flex-wrap justify-start items-center gap-y-6">
                    {messages.map(message =>
                        <li key={message.id} className="basis-full">
                            <Message {...message} />
                        </li>)}
                </ul>
            </div>
            <Field />
        </div>
    );
}

export default Body;