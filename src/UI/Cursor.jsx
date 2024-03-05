import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, isNormal: true });
  const curs = useRef(null);
  const textView = useRef(null);

  useEffect(() => {
    const elementsWithEffect = document.querySelectorAll(".imagePrototype, .firmaEffect");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, { height: "56px", width: "56px", ease: "expo.inout", opacity: "1"})
      .to(textView.current, { opacity: 1, ease: "expo.inout" }, 0);

    elementsWithEffect.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        tl.play();
        setCursor((prevCursor) => ({ ...prevCursor, isNormal: false }));
      });

      element.addEventListener("mouseleave", function () {
        tl.reverse();
        tl.eventCallback("onReverseComplete", function () {
          gsap.set(curs.current, { height: "15px", width: "15px", opacity: "1" });
          gsap.set(textView.current, { opacity: 0 });
          setCursor((prevCursor) => ({ ...prevCursor, isNormal: true }));
        });
      });
    });

    function moveCursor(e) {
      setCursor((prevCursor) => ({ ...prevCursor, x: e.pageX, y: e.pageY - window.scrollY }));
    }

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y, isNormal } = cursor;

  const shouldRenderCursor = window.innerWidth > 768; 

  return shouldRenderCursor ? (
    <div
      ref={curs}
      className={`cursor-none stroke-none pointer-events-none fixed rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-primary h-3 w-3 ${isNormal ? "cursor-normal" : ""}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        position: "fixed",
        zIndex: "9999",
        mixBlendMode: isNormal ? "multiply" : "normal",
      }}
    >
      <div
        ref={textView}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#FCF9F9",
          fontSize: "18px",
          fontWeight: "600",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        View
      </div>
    </div>
  ) : null;
}
