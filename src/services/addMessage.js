import { set, ref, push } from 'firebase/database';
import { database } from '../firebase';

export default async (chatId, { sender, message }) => {
    const messages = ref(database, `messages/${chatId}`);
    const newMessage = push(messages);

    const format = (value) => {
        return value.toLocaleString('bg-BG', { minimumIntegerDigits: 2, useGrouping: false })
    };

    const date = new Date();
    await set(newMessage, {
        id: newMessage.key,
        sender: sender,
        content: message,
        date: `${format(date.getDate())}/${format(date.getMonth())}/${date.getFullYear()}`,
        time: `${format(date.getHours())}:${format(date.getMinutes())}`,
    });
};