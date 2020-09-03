import React, { Component } from "react";

import axios from "axios";
import Row from "./row";

class Comments extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    this.setState({ comments: response.data });
  };
  clickHandler = (e) => {
    const comments = [...this.state.comments];
    const comment = { ...comments[0] };
    comment.name = "CHANGED!!!";
    comments[0] = comment;

    this.setState({ comments: comments });
  };
  render() {
    return (
      <div>
        {this.state.comments.length !== 0 && (
          <div>
            <div>Comments</div>
            <button onClick={this.clickHandler}>Change</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {this.state.comments.map((comment) => (
                  <Row key={comment.id} comment={comment} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
