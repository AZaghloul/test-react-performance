import React, { Component } from "react";

import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: response.data });
  };
  render() {
    return (
      <div>
        {this.state.posts.length !== 0 && (
          <div>
            <div>Posts</div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
