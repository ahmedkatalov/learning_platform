
import { FC, useState } from "react";
import emailjs from "emailjs-com"; // Импортируйте библиотеку
import './NewsLetter.css';

const NewsLetter: FC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (!email) return;
  
      // Подготовка параметров для отправки
      const templateParams = {
        to_email: email, // email, который вы хотите вставить в шаблон
        message: "Вы получили новое сообщение", // Дополнительный параметр
      };
  
      // Отправка email с помощью EmailJS
      emailjs
        .send(
          "service_hby7wge",
          "template_xaosooz",
          templateParams,
          "HYRJkuQm8-qoy22Ff"
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully:",
              response.status,
              response.text
            );
            alert("Письмо успешно отправлено!");
            setEmail("");
          },
          (error) => {
            console.error("Error sending email:", error);
            alert("Ошибка при отправке email");
          }
        );
    };
  
    return (
        <div className='news-container'>
            <div className='news-content'>
                <div className='news-cute-star3'></div>
                <div className='news-lighter-bg'>
                    <div className='news-first-box'>
                        <h2 className='news-subscribe'>Subscribe our NewsLetter</h2>
                        <p className='news-invitation'>Join our newsletter and receive a plethora of <br/>
                        captivating content delivered to your inbox every week
                        </p>
                    </div>

                    <div className='news-second-box'onSubmit={handleSubmit}>
                        <form className="news-form">
                            <input   value={email}
              onChange={handleEmailChange} className="news-form_input" type="email" placeholder="Enter your Email here" required />
                            <button type="submit" className="join-btn">Join</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;