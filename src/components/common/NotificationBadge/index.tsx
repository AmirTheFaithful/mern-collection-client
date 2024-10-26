import { FC, ReactElement } from "react";

import "./badge.scss";

const NotificationBadge: FC<{ count: number }> = ({ count }): ReactElement => {
  return <p className="badge">{count}</p>;
};

export default NotificationBadge;
