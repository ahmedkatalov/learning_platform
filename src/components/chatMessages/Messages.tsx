<<<<<<< HEAD
import { addDoc, collection, Timestamp, orderBy, query, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../../fireBase/fireStore"
=======
import { addDoc, collection, Timestamp, orderBy, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../fireBase/fireStore";
>>>>>>> 3f1cf2f9f5d3e5607b91a550ea63d64f6fca68fe

import "./Message.css"

const ChatComponent: React.FC = () => {
    const [message, setMessage] = useState<string>("")
    const [messages, setMessages] = useState<any[]>([])
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
    }
   
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

  
    return (
        <div className="chat-box"> 
            <div className="message-container">
                <div className="message-content">
                    <div className="message-list">
                        {messages.map((mes) => (
                            <div key={mes.id}  className={`message ${mes.uid === auth.currentUser?.uid ? "message-right" : "message-left"}`} >
                                <strong className="name-user">{mes.name}</strong> 
                                <p>{mes.text}</p>
                            </div>
                        ))}
                    </div>
                    <form className="form-fixed" onSubmit={sendMessage}>
                        <input className="message-input"
                               type="text"
                               value={message}
                               onChange={(e) => setMessage(e.target.value)}
                               placeholder="Type your message"/>
                        <button className="send-message" type="submit">Send</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent;