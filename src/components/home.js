import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
    </ul>
  );
};

export default Home;
