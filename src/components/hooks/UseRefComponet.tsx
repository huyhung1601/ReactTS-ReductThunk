import { useRef } from "react";

const UseRefComponet = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
  return (
      <div>
          <input ref={inputRef} type="text" />
      </div>
  );
};

export default UseRefComponet;
