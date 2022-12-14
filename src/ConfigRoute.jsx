import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import SignupPage from "pages/SignupPage";
import VehicleSignupPage from "pages/VehicleSignupPage";
import ProfilePage from "pages/ProfilePage";
import FilterPage from "pages/FilterPage";
import AccountInfo from "pages/ProfilePage/components/AccountInfo";
import RentalHistory from "pages/ProfilePage/components/RentalHistory";
import ChangePassword from "pages/ProfilePage/components/ChangePassword";
import AccountVerify from "pages/ProfilePage/components/AccountVerify";
import CarManagement from "pages/ProfilePage/components/CarManagement";
import CarDetails from "pages/CarDetails";
import CarStatusUpdate from "pages/CarStatusUpdate";
import WalletManagement from "pages/ProfilePage/components/WalletManagement";
import ActivatePage from "pages/ActivatePage";
import ContractPaper from "components/ContractPaper";
import RentalStatusUpdate from "pages/RentalStatusUpdate";
function ConfigRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route index element={<HomePage />} />
      <Route path="validate" element={<ActivatePage/>} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="car-signup" element={<VehicleSignupPage />} />
      <Route path="contract" element={<ContractPaper />} />
      <Route path="profile" element={<ProfilePage />}>
        <Route index element={<AccountInfo />} />
        <Route path="info" element={<AccountInfo />} />
        <Route path="history" element={<RentalHistory />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="verify" element={<AccountVerify />} />
        <Route path="carmanage" element={<CarManagement />} />
        <Route path="wallet" element={<WalletManagement/>}/>
      </Route>
      <Route path="fillter" element={<FilterPage />} />
      <Route path="details" element={<CarDetails />} />
      <Route path="/carstatus" element={<CarStatusUpdate/>}/>
      <Route path="/rentalstatus" element={<RentalStatusUpdate/>}/>
    </Routes>
  );
}

export default ConfigRoute;
