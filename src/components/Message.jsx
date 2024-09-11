function Message({ sender, content, time }) {

    return (
        <div className="max-w-[90%] flex flex-wrap items-center gap-x-2 gap-y-1">
            <h2 className="basis-full text-slate-600">
                <span className="font-bold">{sender}</span>
            </h2>
            <div className="text-slate-700 max-w-fit inline-block bg-slate-200 px-2 py-2 border border-slate-500 rounded-md shadow-md shadow-slate-300">
                {content}
            </div>
            <time>{time}</time>
        </div>
    );
}

export default Message;