import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {
  ThemeProvider,
} from "@mui/material";
import { theme } from "./theme/theme";


const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isPagePayment = pathname === "/PaymentPage";

  return (
    <ThemeProvider theme={theme}>
      {!isPagePayment && <Navbar />}
      <Outlet />
      {!isPagePayment && <Footer />}
    </ThemeProvider>
  );
};

export default Root;
