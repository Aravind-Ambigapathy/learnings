"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  start?: boolean;
}

export default function CountUp({
  end,
  duration = 400,
  suffix = "",
  start = false,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <>
      {Number.isInteger(end)
        ? Math.floor(count)
        : count.toFixed(1)}
      {suffix}
    </>
  );
}