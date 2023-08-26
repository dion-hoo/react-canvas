import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx('wrap')}>
      <h1>Main</h1>
      <ul>
        <li>1</li>
      </ul>
    </div>
  );
};

export default Main;
