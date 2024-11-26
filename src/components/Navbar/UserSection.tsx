import React, { useState } from "react";
import { Button,MenuItem, Box, Divider, Tooltip } from "@mui/material";
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
      <Box>
        <Tooltip
        slotProps={{
          tooltip:{
            sx:{
              top:-5,
              backgroundColor:"white",
              border: "1px solid #181818", 
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }
          },
          arrow:{
            color: "white",
          }
        }}
        sx={{
          backgroundColor:"white"
        }}
          title={
            <>
              {user && user.first_name ? (
                <Box>
                  <MenuItem sx={{px:2, ":hover": { backgroundColor: "none !important" }}}  onClick={handleClose}>
                    <Link  className="accountLinkNav" to="MyAccount">
                      Hesabım
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{px:2}} onClick={handlelogout}>
                    <Link className="accountLinkNav" to="/">
                      Çıkış Yap
                    </Link>
                  </MenuItem>
                </Box>
              ) : (
                <Box>
                  <MenuItem sx={{px:2}}  onClick={handleClose}>
                    <Link
                      className="accountLinkNav"
                      to={`Account?value=${"1"}`}
                    >
                      Üye Girişi
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{px:2, pb:2}}  onClick={handleClose}>
                    <Link
                      className="accountLinkNav"
                      to={`Account?value=${"2"}`}
                    >
                      Üye Ol
                    </Link>
                  </MenuItem>
                </Box>
              )}
            </>
          }
          arrow
        >
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
        </Tooltip>
      </Box>
    </>
  );
}

export default UserSection;
