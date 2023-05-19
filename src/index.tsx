import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PATH } from "@/urls/url";
import { Sticker } from "@/pages/Sticker";

import "@/styles/_reset.scss";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path={PATH.STICKER} Component={Sticker} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
