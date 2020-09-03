import React, { Component } from "react";

import axios from "axios";

class Photos extends Component {
  state = {
    photos: [],
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    this.setState({ photos: response.data });
  };
  render() {
    return (
      <div>
        {this.state.photos.length !== 0 && (
          <div>
            <div>Comments</div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.photos.map((photo) => (
                  <tr key={photo.id}>
                    <td>{photo.id}</td>
                    <td>{photo.title}</td>
                    <td>
                      <img alt={photo.title} src={photo.thumbnailUrl} />
                    </td>
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

export default Photos;
