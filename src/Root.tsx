import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { startTokenRefreshInterval } from "./components/Account/Informations/MyAccount";
import { Box } from "@mui/material";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isPagePayment = pathname === "/PaymentPage";

  useEffect(()=>{
    const intervalId = startTokenRefreshInterval();

    return ()=> clearInterval(intervalId)
  },[])

  return (
    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh'
    }}
    >
      {!isPagePayment && <Navbar />}
      <Box
      component="main"
      sx={{
        flex:1,
        display:'flex',
        flexDirection:'column'
      }}
      >

      <Outlet />
      </Box>
      {!isPagePayment && <Footer />}
    </Box>
  );
};

export default Root;
