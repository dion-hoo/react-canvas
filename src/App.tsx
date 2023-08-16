import { PATH } from "@/urls/url";
import { Sticker, ConvexHull, MetaBall } from "@/pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATH.CONVEXHULL} element={<ConvexHull />} />
        <Route path={PATH.STICKER} element={<Sticker />} />
        <Route path={PATH.METABALL} element={<MetaBall />} />
      </Routes>
    </Router>
  );
};
