import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCookie } from '../CookieManager';
import addMessage from '../services/addMessage';
import addChat from '../services/addChat';

function Field({ chat }) {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) {
            alert('Please type a message.');
            return;
        }

        const sender = getCookie('sender');
        if (!sender) {
            alert('Please share your name.');
            return;
        }

        if (!chat) {
            const chat = await addChat();
            addMessage(chat, { sender: sender, message: message });
            setMessage('');
            return;
        }

        addMessage(chat, { sender: sender, message: message });
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
            <div className="flex justify-center items-center gap-x-2">
                <input
                    id="message"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Type a message...."
                    className="w-10/12 ps-6 pe-2 py-4 text-xl rounded-3xl bg-slate-50 text-slate-700 border-2 border-slate-500 focus:outline-none focus:border-slate-700"
                />
                <button type="submit" className="flex justify-center items-center rounded-3xl bg-slate-500 w-10 aspect-square border border-slate-700 shadow-md shadow-slate-600 focus:outline-none">
                    <FontAwesomeIcon icon="arrow-up" className="text-2xl text-slate-300" />
                </button>
            </div>
        </form>
    );
}

export default Field;