import './Contact.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const socket = io('http://localhost:8081');

export default function Contact() {

    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([]);

    const [username, setUsername] = useState('');

    const getUserStorage = localStorage.getItem('username') || null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        const newMessage = {
            body: message,
            from: username,
            type: 'Me'
        };

        socket.emit('message', message, newMessage.from);

        if(getUserStorage) {
            const messageDb = {
                username: getUserStorage,
                body: message
            };
    
            await axios.post('http://localhost:8081/api/chats/', messageDb);
        };

        setMessages([...messages, newMessage]);
        setMessage('');
    };

    useEffect(() => {
        const receiveMessage = (message) => {
            setMessages([...messages, message]);
        };

        socket.on('message', receiveMessage);
    });

    
    return(
        <section className='sectionContact'>
            <div className="divContact">
                <p className='pLeaveMessage'>Please leave us your message!</p>

                <div className="divAllMessages">
                    {messages.map((message, index) => (
                        <div className={message.type === 'Me' ? 'divMessageChatMe' : 'divMessageChat'} key={index}>
                            <p className={message.type === 'Me' ? 'pMessageChatMe' : 'pMessageChat'}><strong>{message.from}:</strong> {message.body}</p>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className='formContact'>
                    <input className='inputEnterName' onChange={(name) => setUsername(name.target.value)} value={username} type="text" placeholder='Enter your name' required />
                    <input className='inputEnterMessage' onChange={(msg) => setMessage(msg.target.value)} type="text" value={message} placeholder='Enter message' required />
                    <button type="submit" className='buttonFormContact'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill svgSendIcon" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                    </button>
                </form>
                
            </div>
        </section>
    )
};