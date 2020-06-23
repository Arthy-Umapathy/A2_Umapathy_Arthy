import React from "react"
import "./chat.css"
class DisplayList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <p key={item.id}>{item.text}</p>
          ))}
        </ul>
      );
    }
}
export default DisplayList