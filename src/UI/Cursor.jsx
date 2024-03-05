import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, isNormal: true });
  const curs = useRef(null);
  const textView = useRef(null);

  useEffect(() => {
    const handleLinkClick = () => {
      gsap.to(curs.current, { height: "15px", width: "15px", opacity: "1" });
    };

    const navLinks = document.querySelectorAll('.navCur');
    navLinks.forEach((link) => {
      link.addEventListener('mousedown', handleLinkClick);
    });

    const elementsWithEffect = document.querySelectorAll(".imagePrototype, .firmaEffect");
    const navCurElements = document.querySelectorAll(".navCur");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, { height: "56px", width: "56px", ease: "expo.inout", opacity: "1" })
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

    navCurElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        gsap.to(curs.current, { height: "25px", width: "25px", ease: "expo.inout", opacity: "1" });
      });

      element.addEventListener("mouseleave", function () {
        gsap.to(curs.current, { height: "15px", width: "15px", opacity: "1" });
      });
    });

    function moveCursor(e) {
      const maxX = window.innerWidth - curs.current.offsetWidth;
      const maxY = window.innerHeight - curs.current.offsetHeight;

      const newX = Math.min(Math.max(e.pageX, 0), maxX);
      const newY = Math.min(Math.max(e.pageY - window.scrollY, 0), maxY);

      setCursor((prevCursor) => ({ ...prevCursor, x: newX, y: newY }));
    }

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      navLinks.forEach((link) => {
        link.removeEventListener('mousedown', handleLinkClick);
      });
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
