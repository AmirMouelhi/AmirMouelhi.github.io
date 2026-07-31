"use client";

import { useEffect, useState } from "react";
import { Text } from "@once-ui-system/core";

interface TextRotatorProps {
  items: string[];
  prefix?: string;
  interval?: number;
}

export function TextRotator({ items, prefix = "I am a", interval = 2500 }: TextRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
      <Text variant="heading-default-xl" onBackground="neutral-weak">
        {prefix}
      </Text>
      <div
        style={{
          height: "2.5rem",
          overflow: "hidden",
          position: "relative",
          minWidth: "200px",
        }}
      >
        <Text
          variant="heading-default-xl"
          onBackground="brand-medium"
          style={{
            transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
            opacity: isAnimating ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            display: "block",
          }}
        >
          {items[currentIndex]}
        </Text>
      </div>
    </div>
  );
}
