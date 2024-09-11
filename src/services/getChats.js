import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

export default function getChat(setChats) {
    const chatsRef = ref(database, 'messages');

    onValue(chatsRef, (snapshot) => {
        const chats = snapshot.val();
        setChats(chats ? [...Object.keys(chats)] : []);
    });
}