import classNames from "classnames/bind";

import styles from "./Sticker.module.scss";

const cx = classNames.bind(styles);

const Sticker = () => {
  return <div className={cx("Sticker")}>Sticker</div>;
};

export default Sticker;
