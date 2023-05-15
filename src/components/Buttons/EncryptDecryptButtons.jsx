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

// const EncryptDecryptButtons = ({
//   encryptedButtonState,
//   decryptedButtonState,
//   handleEncryption,
//   handleDecryption,
// }) => {
//   return (
//     <div className="buttonContainer">
//       <div className="encryptButtonContainer">
//         <button className="encryptButton" onClick={handleEncryption}>
//           {encryptedButtonState ? (
//             <>
//               <BsFillShieldLockFill size={20} className="encryptedIcon" />
//               Encrypted!
//             </>
//           ) : (
//             <>
//               <BsFillUnlockFill size={20} className="encryptedIcon" />
//               <span>Click to Encrypt</span>
//             </>
//           )}
//         </button>
//       </div>
//       <div className="decryptButtonContainer">
//         <button className="decryptButton" onClick={handleDecryption}>
//           {decryptedButtonState ? (
//             <>
//               <BsFillUnlockFill size={20} className="decryptedIcon" />
//               Decrypted!
//             </>
//           ) : (
//             <>
//               <BsFillShieldLockFill size={20} className="decryptedIcon" />
//               Click to Decrypt
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

export default EncryptDecryptButtons;
