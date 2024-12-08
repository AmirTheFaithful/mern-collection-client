import { FC, ReactElement } from "react";
import { FaRegBell, FaBell } from "react-icons/fa";

import NotificationBadge from "../../common/NotificationBadge";

import "./notifications-icon.scss";

const NotificationsIcon: FC = (): ReactElement => {
  let notifications: number[] = [1];

  if (notifications.length > 0) {
    return (
      <i className="notifications-icon ">
        <FaBell size={20} />
        <NotificationBadge count={notifications.length} />
      </i>
    );
  } else {
    return (
      <>
        <FaRegBell className="notifications-icon" size={23} />
      </>
    );
  }
};

export default NotificationsIcon;
