import React, { useState } from "react";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { userCartStore } from "../../store/cartStore";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import { AccountProps } from "../Account/Informations/MyAccount";

interface UserSectionProps {
  user: AccountProps;
}
const menuStyle = {padding:"4px 30px", display:'block'}

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
    navigate("/");
    updateCartData({
      items: [],
      total_price: 0,
    });
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
            position:"relative",
            justifyContent: "center",
            alignItems: "center",
            color:'#636363',
            gap: 0.7,
            border:"2px solid gray",
            width: "130px",
            padding: "7.5px 10px",
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
          {user && user.first_name ? 
            [
              <MenuItem key="account"  style={menuStyle} component={Link}  to="MyAccount">
                Hesabım
              </MenuItem>,
              <Divider key={'divider-1'}/>,
              <MenuItem key="logout"   style={menuStyle} onClick={handlelogout}>Çıkış Yap</MenuItem>
            ]
           : [
              <MenuItem key="login"  style={menuStyle} component={Link}  to={`Account?value=${"1"}`}>
                Üye Girişi
              </MenuItem>,
              <Divider key="divider-2"/>,
              <MenuItem key="signup"   style={menuStyle} component={Link}  to={`Account?value=${"2"}`}>
                Üye Ol
              </MenuItem>
           ]
          }
        </Menu>
      </div>
    </>
  );
}

export default UserSection;
