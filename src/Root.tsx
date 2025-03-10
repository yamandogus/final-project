import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./layout/Footer/footer";
import Navbar from "./layout/Navbar/navbar";
import { startTokenRefreshInterval } from "./pages/Account/components/Informations/MyAccount";
import Loading from "./components/Loading";

const Root = () => {
  const { pathname } = useLocation();
  const [opening, setOpening] = useState(() => {
    return localStorage.getItem("welcomeShown") === "true";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isPagePayment = pathname === "/PaymentPage";

  useEffect(() => {
    const intervalId = startTokenRefreshInterval();
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("welcomeShown")) {
      setTimeout(() => {
        setOpening(true);
        localStorage.setItem("welcomeShown", "true");
      }, 5000);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {opening ? (
        <>
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
        </>
      ) : (
        <Loading/>
      )}
    </Box>
  );
};

export default Root;