import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

export default function getMessages(chatId, setChat) {
    const messagesRef = ref(database, `messages/${chatId}`);

    onValue(messagesRef, (snapshot) => {
        const messages = snapshot.val();
        setChat(messages ? [...Object.values(messages)] : []);
    });
}