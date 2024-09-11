import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../CookieManager';

function Field() {
    const [sender, setSender] = useState(getCookie('sender') || '');

    useEffect(() => {
        setCookie('sender', sender);
    }, [sender]);

    return (
        <div className="inline-flex justify-center items-center gap-x-2">
            <input
                id="message"
                value={sender}
                onInput={(e) => setSender(e.target.value)}
                className="px-5 py-2 text-lg font-bold rounded-2xl bg-slate-50 text-slate-700 border-2 border-slate-400 focus:outline-none focus:border-slate-700"
            />
        </div>
    );
}

export default Field;