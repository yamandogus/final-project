import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AccountProps } from "../Account/Informations/MyAccount";
import { userCartStore } from "../../store/cartStore";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
interface UserSectionProps {
  user: AccountProps;
}
const menuStyle = {padding:"8px 30px"}

function UserSection({ user }: UserSectionProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { updateCartData } = userCartStore();

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
    updateCartData({
      items: [],
      total_price: 0,
    });
    navigate("/");
  };


  return (
    <>
      <div>
        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            display: "relative",
            position:"relative",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.7,
            border:"1px solid gray",
            width: "130px",
            padding: "7.5px 10px",
            color:'black'
          }}
          endIcon={<ArrowDropDownIcon/>}
          startIcon={<PersonIcon/>}
        >
          {user && user.first_name ? user.first_name : "Hesap"}
        </Button>
        <Menu
          id="basic-menu"
          disableScrollLock
          anchorEl={anchorEl}
          open={open}
          onMouseLeave={handleClose} 
          onClose={handleClose}
          sx={{
            zIndex:1500,
            mt:1,
            minWidth: "150px"
          }}
          MenuListProps={{
            onMouseLeave: handleClose,
            "aria-labelledby": "basic-button",
          }}
        >
          {user && user.first_name ? (
            <>
              <MenuItem style={menuStyle} component={Link}  to="MyAccount">
                Hesabım
              </MenuItem>
              <MenuItem style={menuStyle} component={Link} to="/" onClick={handlelogout}>Çıkış Yap</MenuItem>
            </>
          ) : (
            <>
              <MenuItem style={menuStyle} component={Link}  to={`Account?value=${"1"}`}>
                Üye Girişi
              </MenuItem>
              <MenuItem style={menuStyle} component={Link}  to={`Account?value=${"2"}`}>
                Üye Ol
              </MenuItem>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}

export default UserSection;
