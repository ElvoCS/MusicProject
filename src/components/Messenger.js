import React, { useState, useEffect, useContext } from "react";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { UserContext } from "../providers/UserProvider";
import "./styles/Messenger.css";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

function Messenger() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const user = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    if (user) {
      const { displayName } = user;
      setDisplayName(displayName);
    }
  }, [user]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (user) {
      firebase.firestore().collection("messages").add({
        message: input,
        username: displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="messenger">
      <div className="messenger_container">
        <h3 style={{ color: "#0079bf" }}>Live Chat</h3>
        <div className="messages">
          <FlipMove>
            {messages.map(({ id, message }) => (
              <Message key={id} username={displayName} message={message} />
            ))}
          </FlipMove>
        </div>
        {user ? (
          <div style={{ width: "100%" }}>
            <h4>logged in as: {displayName}.</h4>
            <form className="message__form">
              <input className="inputText" style={{ backgroundColor: "#008fe1", borderRadius: 30, width: "70%", padding: 10 }} placeholder="Start typing to send a message" value={input} onChange={(event) => setInput(event.target.value)} />

              <IconButton className="inputText" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                <SendIcon className="inputText" />
              </IconButton>
            </form>
          </div>
        ) : (
          <div>
            <Button variant="contained" style={{ fontFamily: "customHelvetica", margin: 10 }} size="medium" onClick={() => history.push("/login")}>
              Log In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messenger;
