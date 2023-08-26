import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Sticker, ConvexHull, MetaBall, NewSticker, Main } from '@/pages';
import { PATH } from '@/urls/url';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={PATH.CONVEXHULL} element={<ConvexHull />} />
        <Route path={PATH.STICKER} element={<Sticker />} />
        <Route path={PATH.METABALL} element={<MetaBall />} />
        <Route path={PATH.NEWSTICKER} element={<NewSticker />} />
      </Routes>
    </Router>
  );
};
