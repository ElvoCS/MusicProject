import React, { useState, useEffect, useContext } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import firestore from "../config/fire.js";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { UserContext } from "../providers/UserProvider";
function Messenger() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const user = useContext(UserContext);

  useEffect(() => {
    const { displayName } = user;
    setDisplayName(displayName);
    console.log(user);
  }, []);

  useEffect(() => {
    //run once when app components loads
    firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    firebase.firestore().collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="Messenger__container">
      <div className="Messenger">
        <h2>Welcome {username}</h2>
        <form className="message__form">
          <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <IconButton
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Messenger;
