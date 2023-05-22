import React from 'react';
import { FaClipboard } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const Output = ({ outputText, handleCopyClick, resetAll, hiddenTextArea }) => {
  return (
    <div className="encryptOutput">
      <div className="copyButtonContainer">
        <Button
          variant="primary"
          size="sm"
          className="copyButton"
          onClick={handleCopyClick}
        >
          <FaClipboard size={20} className="clipButton" />
          Copy
        </Button>
        <Button
          id="resetButton"
          variant="primary"
          size="sm"
          className="resetButton"
          onClick={resetAll}
        >
          <BsArrowRepeat size={20} className="resetIcon" />
          Reset
        </Button>
      </div>
      <textarea
        id="outputTextArea"
        name="outputTextArea"
        aria-label="text"
        className="encryptOutputTextArea"
        type="text"
        placeholder="Output: "
        value={outputText}
      />
      <textarea
        ref={hiddenTextArea}
        style={{ position: 'absolute', left: '-9999px' }}
      />
    </div>
  );
};

export default Output;
