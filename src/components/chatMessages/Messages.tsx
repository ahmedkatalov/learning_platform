import { addDoc, collection, Timestamp, orderBy, query, onSnapshot, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../fireBase/fireStore";
import { useSelector } from "react-redux";
import "./Message.css";
import { RootState } from "../../redux/store";

const ChatComponent: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<any[]>([]);
    const role = useSelector((state: RootState) => state.role.role)
    // Функция для отправки сообщений
    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() !== "") {
            try {
                await addDoc(collection(db, "messages"), {
                    text: message,
                    name: auth.currentUser?.displayName || "Anonymous",
                    uid: auth.currentUser?.uid,
                    createdAt: Timestamp.fromDate(new Date())
                });
                setMessage("");
            } catch (error) {
                console.error('Error sending message: ', error);
            }
        }
    };

    // Получение сообщений в реальном времени
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messagesArray: any[] = [];
            querySnapshot.forEach((doc) => {
                messagesArray.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messagesArray);
        });
        return () => unsubscribe();
    }, []);

    // Функция для очистки чата
    const clearChat = async () => {
        const messagesSnapshot = await getDocs(collection(db, "messages"));  // Получение всех сообщений
        try {
            messagesSnapshot.forEach(async (messageDoc) => {
                await deleteDoc(doc(db, "messages", messageDoc.id));  // Удаление каждого сообщения по id
            });
            console.log("Chat cleared successfully!");
        } catch (error) {
            console.error("Error clearing chat: ", error);
        }
    };

    return (
        <div className="chat-box">
            <div className="message-container">
                <div className="message-content">
                    <div className="message-list">
                        {messages.map((mes) => (
                            <div key={mes.id} className={`message ${mes.uid === auth.currentUser?.uid ? "message-right" : "message-left"}`}>
                                <strong className="name-user">{mes.name}</strong>
                                <p>{mes.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка очистки чата */}
                 
                    <form className="form-fixed" onSubmit={sendMessage}>
                        <input
                            className="message-input"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Напишите сообщение"
                        />
                        <button className="send-message" type="submit">Send</button>
                        {
                            role === "teacher" ?
                            <button className="clear-chat" onClick={clearChat}>Clear chat</button> :
                            ""
                        }

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
