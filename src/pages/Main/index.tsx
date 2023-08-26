import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { PATH } from '@/urls/url';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx('wrap')}>
      <h1>Main</h1>

      <section className={cx('content')}>
        <ul>
          <li>
            <Link to={PATH.CONVEXHULL}>1. ConvexHull</Link>
          </li>
          <li>
            <Link to={PATH.METABALL}>2. MetaBall</Link>
          </li>
          <li>
            <Link to={PATH.NEWSTICKER}>3. Sticker</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
