import "./SubHeader.scss";
import Icon from "@mui/material/Icon";

function SubHeader() {
  return (
    <div className="sub-header-root">
      <div className="sub-header-wrapper">
        <div className="icon-container">
          <Icon className='icon' sx={{ fontSize: 30 }}>home</Icon>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
