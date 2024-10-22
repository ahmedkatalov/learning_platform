import { FC, useState } from 'react';
import emailjs from 'emailjs-com';
import './Support.css';

const Support: FC = () => {
    const [emailUser, setEmailUser] = useState('');
    const [text, setText] = useState("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailUser(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!emailUser) return;
    
        const templateParams = {
            emailUser: emailUser,  // email, который вы хотите вставить в шаблон
            message: text, // Дополнительный параметр
        };
    
        // Отправка email с помощью EmailJS
        emailjs.send('service_hby7wge', 'template_fl1sbfi', templateParams, 'HYRJkuQm8-qoy22Ff')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Письмо успешно отправлено!');
                setEmailUser("")
                setText("")
            }, (error) => {
                console.error('Error sending email:', error);
                alert('Ошибка при отправке email');
            });
    };
    return (
        <div className='support-container'>
            <div className='support-content'>
                <h2 className='support-h2-text'>wow, it's rain of your tears</h2>
                <div className='support-cute-star'></div>
                <p className='support-p-text'>
                    Please leave your email and describe your problem. <br/>
                    We will answer your questions, as soon as possible.
                </p>
                <form className="support" onSubmit={handleSubmit}>
                        <div className='support-flex-box'>
                            <input
                                className="email-form_input"
                                type="email"
                                placeholder="Enter your Email"
                                value={emailUser}
                                onChange={handleEmailChange}
                                required
                            />
                            <button type="submit" className="register-btn">Send message</button>
                        </div>
                        
                        <textarea  className="support-text" name="" value={text} onChange={(e) => setText(e.target.value)}>input</textarea>
                </form>
                        
            </div>
        </div>
    )
};

export default Support;