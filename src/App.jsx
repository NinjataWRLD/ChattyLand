import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getChats from './services/getChats';
import Header from './layout/Header';
import Name from './components/Name';
import Chat from './components/Chat';
import Field from './components/Field';
import Footer from './layout/Footer';

function App() {
    const [chatIndex, setChatIndex] = useState(0);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        getChats(setChats);
    }, []);

    const changeChat = (op) => {
        switch (op) {
            case 'prev':
                if (chatIndex !== 0) {
                    setChatIndex(prev => prev - 1);
                } else {
                    setChatIndex(chats.length - 1);
                }
                break;

            case 'next':
                if (chatIndex !== chats.length - 1) {
                    setChatIndex(prev => prev + 1);
                } else {
                    setChatIndex(0);
                }
                break;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-300">
            <Header />
            <main className="basis-full grow self-stretch flex flex-col justify-between gap-y-10 my-16 mx-16">
                <div className="flex flex-col gap-y-8">
                    <span className="flex flex-wrap items-center justify-evenly">
                        <button onClick={() => changeChat('prev')} className="text-3xl" disabled={chatIndex === 0}>
                            <FontAwesomeIcon icon="arrow-left" className={`${chatIndex === 0 ? 'opacity-40 ' : ''}`} />
                        </button>
                        <div className="flex items-center gap-x-3">
                            <span className="text-3xl text-center font-bold italic">Your name is: </span>
                            <Name />
                        </div>
                        <button onClick={() => changeChat('next')} className="text-3xl" disabled={chatIndex >= chats.length - 1}>
                            <FontAwesomeIcon icon="arrow-right" className={`${chatIndex >= chats.length - 1 ? 'opacity-40 ' : ''}`} />
                        </button>
                    </span>
                    <Chat chat={chats[chatIndex]} />
                </div>
                <Field chat={chats[chatIndex]} />
            </main>
            <Footer />
        </div>
    );
}

export default App