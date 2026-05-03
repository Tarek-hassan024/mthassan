"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        setProgress((currentScroll / totalHeight) * 100);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top horizontal progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 md:h-1.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400"
          style={{ width: `${progress}%`, transition: "width 0.05s ease-out" }}
        />
      </div>
      
      {/* Right vertical progress bar */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-1 md:w-1.5 bg-transparent">
        <div
          className="w-full bg-gradient-to-b from-fuchsia-500 via-purple-500 to-cyan-400"
          style={{ height: `${progress}%`, transition: "height 0.05s ease-out" }}
        />
      </div>
    </>
  );
}
