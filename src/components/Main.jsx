import { React, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import TextArea from './TextAreas/TextArea';
import KeyInput from './KeyInput';
import EncryptDecryptButtons from './Buttons/EncryptDecryptButtons';
import Output from './TextAreas/Output';

function Main() {
  //button states
  const [encryptedButtonState, setEncryptedButtonState] = useState(false);
  const [decryptedButtonState, setDecryptedButtonState] = useState(false);
  // state of output
  const [outputText, setOutputText] = useState('');
  // state of textarea
  const [textAreaValue, setTextAreaValue] = useState('');
  // state of password
  const [passwordAreaValue, setPasswordAreaValue] = useState('');
  //shake input if no key is provided
  const passwordInputRef = useRef();

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordAreaValue(e.target.value);
  };

  const resetAll = () => {
    setEncryptedButtonState(false);
    setDecryptedButtonState(false);
    setTextAreaValue('');
    setPasswordAreaValue('');
    setOutputText('');
  };

  const handleEncryption = async () => {
    try {
      if (!passwordAreaValue) {
        setOutputText('Invalid Key or No key provided.');
        setEncryptedButtonState(false); //prevents button change
        passwordInputRef.current.classList.add('shake', 'highlight'); // Add the class
        setTimeout(() => {
          passwordInputRef.current.classList.remove('shake', 'highlight'); // Remove the class after 500ms
        }, 500);
        return;
      } //
      axios
        .post(
          'https://6z6enqjxl8.execute-api.us-west-2.amazonaws.com/encryption',
          { message: textAreaValue, key: passwordAreaValue }
        )
        .then(function (response) {
          setOutputText(response.data.encryptedMessage);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      setEncryptedButtonState(true);
      setDecryptedButtonState(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecryption = async () => {
    try {
      if (!passwordAreaValue) {
        setOutputText('Invalid Key or No key provided.');
        setDecryptedButtonState(false); //prevents button change
        passwordInputRef.current.classList.add('shake', 'highlight'); // Add the class
        setTimeout(() => {
          passwordInputRef.current.classList.remove('shake', 'highlight'); // Remove the class after 500ms
        }, 500);
        return;
      }
      axios
        .post(
          'https://6z6enqjxl8.execute-api.us-west-2.amazonaws.com/decryption',
          { encryptedMessage: textAreaValue, key: passwordAreaValue }
        )
        .then(function (response) {
          if (response.data.decryptedMessage === '') {
            setOutputText('Invalid Key or No key provided.');
          } else {
            setOutputText(response.data.decryptedMessage);
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      setDecryptedButtonState(true);
      setEncryptedButtonState(false);
    } catch (error) {
      console.error(error);
    }
  };

  //copy to clipboard
  const hiddenTextArea = useRef(null);

  const handleCopyClick = () => {
    hiddenTextArea.current.value = outputText;
    hiddenTextArea.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      <Container className="encryptContainer" fluid>
        <Row className="justify-content-md-center">
          <Col md={8} lg={6} className="justify-content-md-center">
            <TextArea
              textAreaValue={textAreaValue}
              handleTextAreaChange={handleTextAreaChange}
            />
            <KeyInput
              passwordAreaValue={passwordAreaValue}
              handlePasswordChange={handlePasswordChange}
              passwordInputRef={passwordInputRef}
            />
            <EncryptDecryptButtons
              encryptedButtonState={encryptedButtonState}
              decryptedButtonState={decryptedButtonState}
              handleEncryption={handleEncryption}
              handleDecryption={handleDecryption}
            />
            <Output
              outputText={outputText}
              handleCopyClick={handleCopyClick}
              resetAll={resetAll}
              hiddenTextArea={hiddenTextArea}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Main;
