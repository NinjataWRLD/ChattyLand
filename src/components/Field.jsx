import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { set, ref, push } from 'firebase/database';
import { database } from '../firebase';
import { getCookie } from '../CookieManager';

function Field() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
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

        const messages = ref(database, 'messages/chat1');
        const { key } = push(messages);
        set(ref(database, `messages/chat1/message${key}`), {
            id: key,
            sender: sender,
            content: message,
        });

        setMessage('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <div className="flex justify-center items-center gap-x-2">
                    <input
                        id="message"
                        value={message}
                        onInput={(e) => setMessage(e.target.value)}
                        placeholder="Type a message...."
                        className="w-10/12 ps-6 pe-2 py-4 text-xl rounded-3xl bg-slate-50 text-slate-700 border-2 border-slate-400 focus:outline-none focus:border-slate-700"
                    />
                    <button type="submit" className="focus:outline-none">
                        <FontAwesomeIcon icon="circle-arrow-up" className="text-4xl text-slate-600" />
                    </button>
                </div>
            </form>
        </>
    );
}

export default Field;