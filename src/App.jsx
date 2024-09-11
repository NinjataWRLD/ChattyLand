import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-300">
            <Header />
            <main className="basis-full grow self-stretch my-8 mx-16">
                <Chat />
            </main>
            <Footer />
        </div>
    );
}

export default App