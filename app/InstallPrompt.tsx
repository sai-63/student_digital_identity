'use client'

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) return null;

  return (
    <div>
      <h3>Install App</h3>
      <p>Add this app to your home screen!</p>
    </div>
  );
}
