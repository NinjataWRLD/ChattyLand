import { set, ref, push } from 'firebase/database';
import { database } from '../firebase';

export default async () => {
    const chats = ref(database, 'messages');
    const newChat = push(chats);

    const messages = ref(database, `messages/${newChat.key}`);
    const newMessage = push(messages);

    const format = (value) => {
        return value.toLocaleString('bg-BG', { minimumIntegerDigits: 2, useGrouping: false })
    };

    const date = new Date();
    await set(newMessage, {
        id: newChat.key,
        sender: 'SysAdmin',
        content: 'New Chat Created!',
        date: `${format(date.getDate())}/${format(date.getMonth())}/${date.getFullYear()}`,
        time: `${format(date.getHours())}:${format(date.getMinutes())}`,
    });

    return newChat.key;
};