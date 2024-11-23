import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isPagePayment = pathname === "/PaymentPage";

  return (
    <>
      {!isPagePayment && <Navbar />}
      <Outlet />
      {!isPagePayment && <Footer />}
    </>
  );
};

export default Root;
