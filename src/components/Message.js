import React, { forwardRef } from "react";
import { CardContent, Typography, Card } from "@material-ui/core";
import "./styles/Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2" />
          {message.username}: {message.message}
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
