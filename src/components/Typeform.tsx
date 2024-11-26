import React, { useEffect, useRef } from 'react';

export default function TypeformEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef}>
      <div data-tf-live="01JDAJ9023X4JQTT2BRH9X11FD"></div>
    </div>
  );
}