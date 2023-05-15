import React from 'react';
import { FaClipboard } from 'react-icons/fa';

const CopyButton = ({ outputText }) => {
  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(outputText).then(
        () => {
          console.log('Text copied to clipboard');
        },
        (err) => {
          console.error('Failed to copy text:', err);
        }
      );
    } else {
      // Fallback for browsers that don't support the Clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = outputText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        const successful = document.execCommand('copy');
        const message = successful
          ? 'Text copied to clipboard'
          : 'Failed to copy text';
        console.log(message);
      } catch (err) {
        console.error('Failed to copy text:', err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <button className="copyButton" onClick={copyToClipboard}>
      <FaClipboard size={20} className="clipButton" />
      Copy
    </button>
  );
};

export default CopyButton;
