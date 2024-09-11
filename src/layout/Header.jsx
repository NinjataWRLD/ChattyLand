import addChat from '../services/addChat';

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900 rounded-b-2xl shadow-slate-600 shadow-lg">
            <nav className="mx-auto flex items-center justify-center p-6">
                <button onClick={() => addChat()}>
                    <img src="/logo.png " className="h-auto w-40" />
                </button>
            </nav>
        </header>
    )
}

export default Header;