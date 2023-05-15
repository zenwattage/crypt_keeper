// EncryptButton.js
import React from 'react';
import { BsFillUnlockFill, BsFillShieldLockFill } from 'react-icons/bs';

function EncryptButton({ onClick, encrypted }) {
  return (
    <button className="encryptButton" onClick={onClick}>
      {encrypted ? (
        <>
          <BsFillShieldLockFill size={20} />
          Encrypted!
        </>
      ) : (
        <>
          <BsFillUnlockFill size={20} />
          Click to Encrypt
        </>
      )}
    </button>
  );
}

export default EncryptButton;
