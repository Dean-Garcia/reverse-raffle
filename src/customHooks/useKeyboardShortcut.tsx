import { useEffect } from "react";

interface KeyboardHookProps {
  key: string;
  onKeyPressed: () => void;
}

export function useKeyboardShortcut({ key, onKeyPressed }: KeyboardHookProps) {
  useEffect(() => {
    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (e.key === key) {
        // console.log("Ticket picked");
        e.preventDefault();
        onKeyPressed();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
}
