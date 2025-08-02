import { useEffect, useRef } from "react";

const useEffectOnce = (fn) => {
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      fn();
    }
    return () => {
      ref.current = true;
    };
  }, [fn]);
}

export default useEffectOnce;