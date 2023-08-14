import { PATH } from "@/urls/url";
import { Sticker, MetaBall } from "@/pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATH.METABALL} element={<MetaBall />} />
        <Route path={PATH.STICKER} element={<Sticker />} />
      </Routes>
    </Router>
  );
};
