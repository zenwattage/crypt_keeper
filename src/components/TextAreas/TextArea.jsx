import React from 'react';
import { FaClipboard } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';

const TextArea = ({ textAreaValue, handleTextAreaChange }) => {
  return (
    <div className="encryptTextAreaContainer">
      <div className="pasteButtonContainer">
        <Button
          className="pasteButton"
          onClick={() =>
            navigator.clipboard
              .readText()
              .then((clipText) =>
                handleTextAreaChange({ target: { value: clipText } })
              )
          }
        >
          <FaClipboard size={20} className="pasteButtonIcon" />
          Paste
        </Button>
      </div>
      <Form.Control
        aria-label="encrypt_text"
        value={textAreaValue}
        className="encryptTextArea"
        as="textarea"
        type="text"
        onChange={handleTextAreaChange}
        placeholder="Enter Your Message Here: "
      />
    </div>
  );
};

export default TextArea;
