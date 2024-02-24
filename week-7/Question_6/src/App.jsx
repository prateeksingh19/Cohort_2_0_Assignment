import { useEffect, useRef, useState } from "react";
import "./App.css";
import OTP from "./OTP";

function App() {
  const [data, setData] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, [ref]);
  return (
    <div>
      <div className="mainDiv">
        <p>Login via OTP</p>
        {!data ? (
          <input
            className="mobNo"
            type="text"
            inputMode="numeric"
            placeholder="Enter your mobile number"
            ref={ref}
          />
        ) : (
          <OTP />
        )}
        <button
          onClick={() => {
            setData(true);
          }}
        >
          {!data ? "Send OTP" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
