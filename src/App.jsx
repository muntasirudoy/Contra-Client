import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./Components/Common/common.css";
import CompanyProfile from "./Pages/CompanyProfile";
import Team from "./Pages/Team";
import Csr from "./Pages/Csr";
import AvialableFlats from "./Pages/AvialableFlats";
import UpcomingProjects from "./Pages/UpcomingProjects";
import OngoingProjects from "./Pages/OngoingProjects";
import ReadyProjects from "./Pages/ReadyProjects";
import AfterSale from "./Pages/AfterSale";
import Apply from "./Pages/Apply";
import LandOwner from "./Pages/LandOwner";
import Buyer from "./Pages/Buyer";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Dashboard";
import Dashboard_About from "./Dashboard/Dashboard_About";
import Dashboard_Main from "./Dashboard/Dashboard_Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard_Why_Choose from "./Dashboard/Dashboard_Why_Choose";
import Dashboard_Your_Clients from "./Dashboard/Dashboard_Your_Clients";
import Dashboard_Available from "./Dashboard/Dashboard_Available";
import Dashboard_Ready from "./Dashboard/Dashboard_Ready";
import Dashboard_Ongoing from "./Dashboard/Dashboard_Ongoing";
import Dashboard_Upcomming from "./Dashboard/Dashboard_Upcomming";
import Dashboard_All_Projects from "./Dashboard/Dashboard_All_Projects";
import Dashboard_Project_Category from "./Dashboard/Dashboard_Project_Category";
import FlatsDetails from "./Pages/FlatsDetails";
import Dashboard_After_Sale from "./Dashboard/Dashboard_After_Sale";
import Dashboard_After_Sale_Messages from "./Dashboard/Dashboard_After_Sale_Messages";
import Dashboard_Empty from "./Dashboard/Dashboard_Empty";
import Dashboard_Buyer from "./Dashboard/Dashboard_Buyer";
import Dashboard_Land_Owner from "./Dashboard/Dashboard_Land_Owner";
import Dashboard_Contactus from "./Dashboard/Dashboard_Contactus";
import Dashboard_Land_Owner_Message from "./Dashboard/Dashboard_Land_Owner_Message";
import Dashboard_Contactus_Message from "./Dashboard/Dashboard_Contactus_Message";
import Dashboard_Buyer_Message from "./Dashboard/Dashboard_Buyer_Message";
import Dashboard_All_Users from "./Dashboard/Dashboard_All_Users";

function App() {
  // const routeMap = [
  //   {
  //     path: "/",
  //     component: <Home />,
  //   },
  //   {
  //     path: "company-profile",
  //     component: <CompanyProfile />,
  //   },
  //   {
  //     path: "/",
  //     component: <Team />,
  //   },
  //   {
  //     path: "/",
  //     component: <Csr />,
  //   },
  //   {
  //     path: "/",
  //     component: <AvialableFlats />,
  //   },
  //   {
  //     path: "/",
  //     component: <UpcomingProjects />,
  //   },
  //   {
  //     path: "/",
  //     component: <ReadyProjects />,
  //   },
  // ];

  return (
    <>
      {/* <Routes>
        {routeMap.map((r) => (
          <Route path={r.path} element={r.component} />
        ))}
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="company-team" element={<Team />} />
        <Route path="corporate-social-responsibility" element={<Csr />} />
        <Route path="available-flats" element={<AvialableFlats />} />
        <Route path="available-flats/:slug" element={<FlatsDetails />} />
        <Route path="upcoming-projects" element={<UpcomingProjects />} />
        <Route path="upcoming-projects/:slug" element={<FlatsDetails />} />
        <Route path="ongoing-projects" element={<OngoingProjects />} />
        <Route path="ongoing-projects/:slug" element={<FlatsDetails />} />
        <Route path="ready-projects" element={<ReadyProjects />} />
        <Route path="ready-projects/:slug" element={<FlatsDetails />} />
        <Route path="after-sale" element={<AfterSale />} />
        <Route path="career" element={<Apply />} />
        <Route path="land-owner" element={<LandOwner />} />
        <Route path="buyer" element={<Buyer />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard_Main />} />
          <Route path="dashboard-about" element={<Dashboard_About />} />
          <Route path="dashboard-home" element={<Dashboard_Main />} />
          <Route
            path="dashboard-why-choose"
            element={<Dashboard_Why_Choose />}
          />
          <Route path="your-clients" element={<Dashboard_Your_Clients />} />
          <Route path="all-users" element={<Dashboard_All_Users />} />
          <Route
            path="dashboard-all-projects"
            element={<Dashboard_All_Projects />}
          />
          <Route
            path="dashboard-projects-category"
            element={<Dashboard_Project_Category />}
          />
          <Route
            path="dashboard-avilable-project"
            element={<Dashboard_Available />}
          />
          <Route path="dashboard-ready-project" element={<Dashboard_Ready />} />
          <Route
            path="dashboard-ongoing-project"
            element={<Dashboard_Ongoing />}
          />
          <Route
            path="dashboard-upcomming-project"
            element={<Dashboard_Upcomming />}
          />

          <Route path="dashboard-buyer" element={<Dashboard_Buyer />}>
            <Route
              path="dashboard-buyer/:id"
              element={<Dashboard_Buyer_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route path="dashboard-land-owner" element={<Dashboard_Land_Owner />}>
            <Route
              path="dashboard-land-owner/:id"
              element={<Dashboard_Land_Owner_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route path="dashboard-contactus" element={<Dashboard_Contactus />}>
            <Route
              path="dashboard-contactus/:id"
              element={<Dashboard_Contactus_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route path="dashboard-after-sale" element={<Dashboard_After_Sale />}>
            <Route
              path="dashboard-after-sale/:id"
              element={<Dashboard_After_Sale_Messages />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
