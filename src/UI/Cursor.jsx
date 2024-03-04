import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const curs = useRef(null);
  const textView = useRef(null);

  useEffect(() => {
    const images = document.querySelectorAll(".imagePrototype");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, { height: "56px", width: "56px", ease: "expo.inout" }).to(
      textView.current,
      { opacity: 1, ease: "expo.inout" },
      0
    );

    images.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        tl.play();
      });

      img.addEventListener("mouseleave", function () {
        tl.reverse();
        tl.eventCallback("onReverseComplete", function () {
          gsap.set(curs.current, { height: "12px", width: "12px" });
          gsap.set(textView.current, { opacity: 0 });
        });
      });
    });

    function moveCursor(e) {
      setCursor({ x: e.pageX, y: e.pageY - window.scrollY });
    }

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={curs}
      className="cursor-none stroke-none pointer-events-none fixed rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-primary h-3 w-3"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        position: "fixed", 
        zIndex: "9999", 
      }}
    >
      <div
        ref={textView}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "18px", 
          fontWeight: "300", 
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        View
      </div>
    </div>
  );
}