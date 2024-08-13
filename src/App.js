import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";

function App() {
  const messageRef = useRef();
  const pandaRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.to(pandaRef.current, {
      x: "100vw",
      duration: 5,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        gsap.set(pandaRef.current, { x: "-200px" });
      },
    });
  }, []);

  return (
    <div className="container">
      <h1 ref={messageRef} className="apology-message">
        I'm Sorry! PANDA
      </h1>
      <img
        ref={pandaRef}
        src="https://res.cloudinary.com/sunil013/image/upload/v1723534777/5800_8_05_gopfyn.png"
        alt="Panda"
        className="panda-image"
      />
    </div>
  );
}

export default App;
