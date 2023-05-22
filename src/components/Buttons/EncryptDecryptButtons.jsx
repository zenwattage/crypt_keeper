import React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

import {
  // BsFillKeyFill,
  BsFillUnlockFill,
  BsFillShieldLockFill,
} from 'react-icons/bs';

const EncryptDecryptButtons = ({
  encryptedButtonState,
  decryptedButtonState,
  handleEncryption,
  handleDecryption,
}) => {
  return (
    <ButtonGroup className="buttonContainer">
      <Button
        id="encryptButton"
        className={`encryptButton ${encryptedButtonState ? 'encrypted' : ''}`}
        onClick={handleEncryption}
      >
        {encryptedButtonState ? (
          <>
            <BsFillShieldLockFill size={20} className="encryptedIcon" />
            Encrypted!
          </>
        ) : (
          <>
            <BsFillUnlockFill size={20} className="encryptedIcon" />
            <span>Encrypt</span>
          </>
        )}
      </Button>
      <Button
        id="decryptButton"
        className={`decryptButton ${decryptedButtonState ? 'decrypted' : ''}`}
        onClick={handleDecryption}
      >
        {decryptedButtonState ? (
          <>
            <BsFillUnlockFill size={20} className="decryptedIcon" />
            Decrypted!
          </>
        ) : (
          <>
            <BsFillShieldLockFill size={20} className="decryptedIcon" />
            Decrypt
          </>
        )}
      </Button>
    </ButtonGroup>
  );
};

export default EncryptDecryptButtons;
