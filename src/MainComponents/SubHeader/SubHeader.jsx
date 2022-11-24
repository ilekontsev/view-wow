import "./SubHeader.scss";
import Icon from "@mui/material/Icon";

function SubHeader() {
  return (
    <div className="sub-header-root">
      <div className="sub-header-wrapper">
        <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon>add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      </div>
    </div>
  );
}

export default SubHeader;
