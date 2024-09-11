function Footer() {
    const foundingYear = 2024;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="justify-self-end py-4 text-slate-200 border-t-2 border-slate-900 rounded-t-lg bg-slate-600 shadow-slate-800 shadow-[bg-white_0_0_1em_0]">
            <section>
                <header className="text-lg font-bold text-center">
                    &copy; {foundingYear + (currentYear === foundingYear ? '' : `-${currentYear}`)} -
                    <span className="font-extrabold hover:text-slate-200"> ChattyLand</span>
                </header>
            </section>
        </footer>
    );
}

export default Footer;