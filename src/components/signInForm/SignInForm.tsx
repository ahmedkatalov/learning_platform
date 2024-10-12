import React, { useState, useRef, MouseEvent } from "react";

import './SignInForm.css';

interface StyleState {
  left: { [key: string]: string };
  right: { [key: string]: string };
}

const SignInForm: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [eyeStyle, setEyeStyle] = useState<StyleState>({
    left: { left: "0.7rem", top: "0.7rem" },
    right: { right: "0.7rem", top: "0.7rem" }
  });

  const [handStyle, setHandStyle] = useState<StyleState>({
    left: { height: "2.81rem", top: "8.4rem", left: "7.5rem", transform: "rotate(0deg)" },
    right: { height: "2.81rem", top: "8.4rem", right: "7.5rem", transform: "rotate(0deg)" }
  });

  const handleUsernameFocus = () => {
    setEyeStyle({
      left: { left: "0.75rem", top: "1.5rem" },
      right: { right: "0.75rem", top: "1.5rem" }
    });
    
    setHandStyle({
      left: { height: "2.81rem", top: "8.4rem", left: "7.5rem", transform: "rotate(0deg)" },
      right: { height: "2.81rem", top: "8.4rem", right: "7.5rem", transform: "rotate(0deg)" }
    });
  };

  const handlePasswordFocus = () => {
    console.log("Password input focused");
    setHandStyle({
      left: { height: "6.56rem", top: "3.87rem", left: "11.75rem", transform: "rotate(-155deg)" },
      right: { height: "6.56rem", top: "3.87rem", right: "11.75rem", transform: "rotate(155deg)" }
    });
    setEyeStyle({
      left: { right: "1rem", top: "1rem" },
      right: { right: "1rem", top: "1rem" }
    });
  };

  const handleBlur = (e: MouseEvent<HTMLDivElement>) => {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement !== usernameRef.current && clickedElement !== passwordRef.current) {
      setEyeStyle({
        left: { left: "0.8rem", top: "0.8rem" },
        right: { right: "0.8rem", top: "0.8rem" }
      });

      setHandStyle({
        left: { height: "2.81rem", top: "8.4rem", left: "7.5rem", transform: "rotate(0deg)" },
        right: { height: "2.81rem", top: "8.4rem", right: "7.5rem", transform: "rotate(0deg)" }
      });
    }
  };

  return (
    <div className="container" onClick={handleBlur}>
      <form className="panda-form">
        <label className="panda-form_label" htmlFor="username">Username:</label>
        <input
          className="panda-form_input"
          type="text"
          id="username"
          placeholder="Username here..."
          ref={usernameRef}
          onFocus={handleUsernameFocus}
        />
        <label className="panda-form_label" htmlFor="password">Password:</label>
        <input
          className="panda-form_input"
          type="password"
          id="password"
          placeholder="Password here..."
          ref={passwordRef}
          onFocus={handlePasswordFocus}
        />
        <button className="panda-form_btn" type="button">Sign in</button>
      </form>
      <div className="ear-l"></div>
      <div className="ear-r"></div>
      <div className="panda-face">
        <div className="blush-l"></div>
        <div className="blush-r"></div>
        <div className="eye-l">
          <div className="eyeball-l" style={eyeStyle.left}></div>
        </div>
        <div className="eye-r">
          <div className="eyeball-r" style={eyeStyle.right}></div>
        </div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div className="hand-l" style={handStyle.left}></div>
      <div className="hand-r" style={handStyle.right}></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
};

export default SignInForm;