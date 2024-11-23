import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { AccountProps } from "../Account/Informations/MyAccount";

interface UserSectionProps {
  user: AccountProps;
}

function UserSection({ user }: UserSectionProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
    handleClose();
    navigate("/");
  };

  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        aria-haspopup="true"
        onClick={handleClick}
        id="demo-positioned-button"
        aria-expanded={anchorEl ? "true" : undefined}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.7,
          width: "130px",
          padding: "6px 10px",
        }}
      >
        <PersonOutlineIcon
          sx={{ fontSize: 18, position: "relative", top: "-1px" }}
        />
        {user && user.first_name ? user.first_name : "Hesap"}
        <ArrowDropDownIcon
          sx={{ fontSize: 20, position: "relative", top: "-1px" }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock
        MenuListProps={{ onMouseLeave: handleClose }}
        sx={{ zIndex: 1420, display: "flex", alignItems: "center" }}
      >
        {user && user.first_name ? (
          <Box>
            <MenuItem key="my-account" onClick={handleClose}>
              <Link className="accountLinkNav" to="MyAccount">
                Hesabım
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem key="logout" onClick={handlelogout}>
              <Link className="accountLinkNav" to="/">
                Çıkış Yap
              </Link>
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem key="Account" onClick={handleClose}>
              <Link className="accountLinkNav" to={`Account?value=${"1"}`}>
                Üye Girişi
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem key="Account" onClick={handleClose}>
              <Link className="accountLinkNav" to={`Account?value=${"2"}`}>
                Üye Ol
              </Link>
            </MenuItem>
          </Box>
        )}
      </Menu>
    </>
  );
}

export default UserSection;
