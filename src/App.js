import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashbord/Dashboard";
import MyAppointment from "./Pages/Dashbord/MyAppointment";
import MyReview from "./Pages/Dashbord/MyReview";
import MyHistory from "./Pages/Dashbord/MyHistory";
import User from "./Pages/Dashbord/User";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl	lg:mx-auto lg:px-12 px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/dashboard"element={<RequireAuth>{" "}<Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment/>}> </Route>
          <Route path="review" element={<MyReview/>}> </Route>
          <Route path="history" element={<MyHistory/>}> </Route>
          <Route path="users" element={<RequireAdmin><User/></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
