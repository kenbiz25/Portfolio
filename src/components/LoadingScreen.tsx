import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-600 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-slow">
          <span className="text-4xl font-bold text-white">KK</span>
        </div>
        <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-spin-slow" />
        <div className="absolute -inset-8 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-foreground mb-2 animate-fade-in">
        Keneth<span className="text-accent">.</span>
      </h1>
      <p className="text-sm text-muted-foreground mb-8 animate-fade-in animation-delay-200">
        Data • Digital Strategy • Impact
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <span className="mt-3 text-xs text-muted-foreground">
        {Math.min(Math.round(progress), 100)}%
      </span>
    </div>
  );
};
