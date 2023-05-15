// DecryptButton.js
import React from 'react';
import { BsFillUnlockFill, BsFillShieldLockFill } from 'react-icons/bs';

function DecryptButton({ onClick, decrypted }) {
  return (
    <button className="decryptButton" onClick={onClick}>
      {decrypted ? (
        <>
          <BsFillUnlockFill size={20} />
          Decrypted!
        </>
      ) : (
        <>
          <BsFillShieldLockFill size={20} />
          Click to Decrypt
        </>
      )}
    </button>
  );
}

export default DecryptButton;
