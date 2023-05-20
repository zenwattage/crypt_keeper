import React from 'react';
import { BsFillKeyFill } from 'react-icons/bs';

const KeyInput = ({
  passwordAreaValue,
  handlePasswordChange,
  passwordInputRef,
}) => {
  return (
    <div className="encryptKeyContainer">
      <p className="keyIcondiv">
        <BsFillKeyFill size={40} className="keyIcon" />
      </p>
      <input
        id="encrypt_key"
        type="password"
        aria-label="password"
        value={passwordAreaValue}
        className="encryptKeyInput"
        onChange={handlePasswordChange}
        ref={passwordInputRef}
        placeholder="Enter Your Key Here: "
      />
    </div>
  );
};

export default KeyInput;
