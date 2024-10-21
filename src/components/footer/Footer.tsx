import { FC, useState } from "react";
import emailjs from "emailjs-com"; // Импортируйте библиотеку
import "./Footer.css";

const Footer: FC = () => {
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
    <footer className="footer-container">
    
      <div className="footer-content">
        <div className="footer-section logo-description">
          <div className="footer-logo">
            <h4 className="foo-headline">SkillSprint</h4>
            <p className="foo-inspo">
              "Goal and self-discipline are the foundation <br />
              If you have this, you can achieve what you want."
            </p>
          </div>
          <h6 className="foo-h6">Follow Us</h6>
          <div className="social-icons">
            <a href="#" className="link-a social-link">
              <i className="social-link-i fab fa-facebook-f"></i>
            </a>
            <a href="#" className="link-a social-link">
              <i className="social-link-i fab fa-twitter"></i>
            </a>
            <a href="#" className="link-a social-link">
              <i className="social-link-i fab fa-instagram"></i>
            </a>
            <a href="#" className="link-a social-link">
              <i className="social-link-i fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section resources">
          <h6 className="foo-h6">Resources</h6>
          <ul>
            <li className="f-contact-li">
              <a className="link-a" href="#">
                Home
              </a>
            </li>
            <li className="f-contact-li">
              <a className="link-a" href="#">
                Courses
              </a>
            </li>
            <li className="f-contact-li">
              <a className="link-a" href="#">
                Blog
              </a>
            </li>
            <li className="f-contact-li">
              <a className="link-a" href="#">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h6 className="foo-h6">Contact</h6>
          <ul>
            <li className="f-contact-li">
              <i className="contact-li-i fas fa-phone-alt"></i> +7(928)783-68-00
            </li>
            <li className="f-contact-li">
              <i className="contact-li-i fas fa-envelope"></i>{" "}
              awesomeapp@gmail.com
            </li>
            <li className="f-contact-li">
              <i className="contact-li-i fas fa-map-marker-alt"></i> we are from
              Chechnya
            </li>
          </ul>
        </div>

        <div className="footer-section instructor">
          <h6 className="foo-h6">Become an Instructor</h6>
          <p className="foo-instructor">
            Practical-based learning platform to <br /> enhance skills
          </p>
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              className="email-form_input"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="register-btn">
              Register now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
