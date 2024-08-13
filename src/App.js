import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Confetti from "react-confetti";
import gsap from "gsap";
import "./App.css";

function App() {
  const messageRef = useRef();
  const pandaRef = useRef();
  const pandaHangRef = useRef();

  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      window.location.href = "tel:+919553901412";
    }, 3000);
  };

  useGSAP(() => {
    // gsap.fromTo(
    //   messageRef.current,
    //   { opacity: 0, y: -50 },
    //   { opacity: 1, y: 0, duration: 1 }
    // );

    gsap.fromTo(
      messageRef.current,
      { scale: 0.5, rotation: 15, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
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

    gsap.to(pandaHangRef.current, {
      y: 15,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <div className="container">
      {showConfetti && <Confetti />}
      <h1 ref={messageRef} className="apology-message">
        I'm Sorry!
        <br />
        PANDA
      </h1>
      <img
        src={
          "https://res.cloudinary.com/sunil013/image/upload/v1723541152/file1_gelu8w.png"
        }
        alt="panda-hanging"
        className="panda-hang"
        ref={pandaHangRef}
      />
      <img
        ref={pandaRef}
        src="https://res.cloudinary.com/sunil013/image/upload/v1723534777/5800_8_05_gopfyn.png"
        alt="Panda"
        className="panda-image"
      />
      <button onClick={triggerConfetti} className="accept-button">
        <span>🙃</span> Accept
      </button>
    </div>
  );
}

export default App;
