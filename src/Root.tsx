import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./layout/Footer/footer";
import Navbar from "./layout/Navbar/navbar";
import { startTokenRefreshInterval } from "./pages/Account/components/Informations/MyAccount";

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
      minHeight:'100vh',
      position:'relative',
    }}
    >
      {!isPagePayment && <Navbar />}
      <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      >
      <Outlet />
      </Box>
      {!isPagePayment && <Footer />}
    </Box>
  );
};

export default Root;
