'use client'

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    if (window.Cal) return; // already loaded

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal?.("init", { origin: "https://cal.com" });
      window.Cal?.("inline", {
        elementOrSelector: "#cal-inline",
        calLink,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, [calLink]);

  return (
    <div
      id="cal-inline"
      style={{
        width: "100%",
        minHeight: "600px",
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    />
  );
}
