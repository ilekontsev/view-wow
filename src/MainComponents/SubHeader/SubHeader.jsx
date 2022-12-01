import "./SubHeader.scss";
import Icon from "@mui/material/Icon";
import { useState } from "react";
import { NAVIGATION } from "./constants";

function SubHeader() {
  const [menuNavigation, setMenuNavigation] = useState(NAVIGATION);

  let selectNavigation = {};

  const checkActiveNavigation = () => {
    const activeMenu = menuNavigation.find((menu) => menu.action === "active");
    if (!activeMenu) {
      menuNavigation[0].action = "active";
      selectNavigation = menuNavigation[0];

      const newMenuNavigation = menuNavigation;
      setMenuNavigation(newMenuNavigation);
    } else {
      selectNavigation = activeMenu;
    }
  };
  checkActiveNavigation();

  const changeNavigation = (menu) => {
    if (menu.name === selectNavigation.name) {
      return;
    }
    const newMenuNavigation = menuNavigation.map((item) => {
      if (item.name === menu.name) {
        item.action = "active";
      } else {
        item.action = "disable";
      }
      return item;
    });
    setMenuNavigation(newMenuNavigation);
  };

  return (
    <div className="sub-header-root">
      <div className="sub-header-wrapper">
        <div className="icon-container">
          {menuNavigation.map((menu) => (
            <div key={menu.key} onClick={() => changeNavigation(menu)}>
              <Icon className={"icon " + menu.action} sx={{ fontSize: 30 }}>
                {menu.icon}
              </Icon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
