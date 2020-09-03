import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Posts from "./posts";
import Comments from "./comments";
import Photos from "./photos";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Route path="/posts" exact component={Posts} />
      <Route path="/comments" exact component={Comments} />
      <Route path="/photos" exact component={Photos} />
    </BrowserRouter>
  );
}

export default App;
