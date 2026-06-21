import { useEffect, useState } from "react";

function TypingAnimation({
  texts = [],
  speed = 80,
}) {

  const [currentTextIndex, setCurrentTextIndex] =
    useState(0);

  const [displayedText, setDisplayedText] =
    useState("");

  const [charIndex, setCharIndex] =
    useState(0);

  useEffect(() => {

    if (!texts.length) return;

    const currentText =
      texts[currentTextIndex];

    if (charIndex < currentText.length) {

      const timeout = setTimeout(() => {

        setDisplayedText(
          (prev) =>
            prev + currentText[charIndex]
        );

        setCharIndex((prev) => prev + 1);

      }, speed);

      return () => clearTimeout(timeout);

    }

    else {

      const nextTimeout = setTimeout(() => {

        setDisplayedText("");

        setCharIndex(0);

        setCurrentTextIndex(
          (prev) =>
            (prev + 1) % texts.length
        );

      }, 2000);

      return () => clearTimeout(nextTimeout);

    }

  }, [
    charIndex,
    currentTextIndex,
    texts,
    speed,
  ]);

  return (
    <div
      className="
        text-cyan-400
        font-semibold
        text-lg
        md:text-xl
        min-h-[40px]
      "
    >

      {displayedText}

      <span
        className="
          animate-pulse
          ml-1
        "
      >
        |
      </span>

    </div>
  );
}

export default TypingAnimation;