import React, { useRef } from "react";

const OTP = () => {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleInputChange = (index, value) => {
    const numericValue = value.replace(/\D/g, "");
    inputRefs[index].current.value = numericValue;
    if (index < inputRefs.length - 1 && numericValue !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className="OTPDiv">
      {[...Array(4)].map((_, index) => (
        <input
          className="OTP"
          key={index}
          type="text"
          maxLength="1"
          placeholder=""
          ref={inputRefs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default OTP;
