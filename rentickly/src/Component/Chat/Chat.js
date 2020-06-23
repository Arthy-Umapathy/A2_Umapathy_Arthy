import React, { Component } from "react";
import "./chat.css";
import SendMessage from "./SendMessage";
import RoomList from "./RoomList";

class Chat extends Component {
  render() {
    return (
      <div className="app">
        <SendMessage />
        <RoomList />
      </div>
    );
  }
}
export default Chat;
