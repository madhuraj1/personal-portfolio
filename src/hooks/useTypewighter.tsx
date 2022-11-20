import { useEffect, useState } from "react";

function useTypewrighter(delay: number, string: string, inView: boolean) {
  const [word, setWord] = useState("");
  useEffect(() => {
    if (!inView) return;
    let i = 1;
    const length = string.length;
    const time = setInterval(() => {
      if (i <= length) {
        setWord(string.substring(0, i++));
      } else {
        clearTimeout(time);
      }
    }, delay);
    return () => clearTimeout(time);
  }, [inView]);
  return { word };
}

export default useTypewrighter;
