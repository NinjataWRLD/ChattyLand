import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../CookieManager';

function Field() {
    const [sender, setSender] = useState(getCookie('sender') || '');

    useEffect(() => {
        setCookie('sender', sender);
    }, [sender]);

    return (
        <input
            id="message"
            value={sender}
            onInput={(e) => setSender(e.target.value)}
            className="px-5 py-2 text-xl font-bold rounded-2xl bg-slate-50 text-slate-700 border-2 border-slate-400 focus:outline-none focus:border-slate-700"
        />
    );
}

export default Field;