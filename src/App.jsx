import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";

const Home = React.lazy(() => import("./Pages/Home"));

import "./Components/Common/common.css";
import CompanyProfile from "./Pages/CompanyProfile";
import Team from "./Pages/Team";
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
import ClientLogin from "./Pages/ClientLogin";
import ClientSignup from "./Pages/ClientSignup";
import ClientProfile from "./Components/Clients/ClientProfile";
import ClientsProjects from "./Components/Clients/ClientsProjects";
import ClientsPayment from "./Components/Clients/ClientsPayment";
import ClientsNominee from "./Components/Clients/ClientsNominee";
import ClientPersonal from "./Components/Clients/ClientPersonal";
import Dashboard_YourClient_Details from "./Dashboard/Dashboard_YourClient_Details";
import Dashboard_YourClient_Single_Projects from "./Dashboard/Dashboard_YourClient_Single_Projects";
import OnPageLoader from "./Components/Common/OnPageLoader";
import Projects from "./Pages/Projects";

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
        <Route
          path="/"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="company-profile"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <CompanyProfile />
            </React.Suspense>
          }
        />
        <Route path="company-team" element={<Team />} />
        {/* <Route path="corporate-social-responsibility" element={<Csr />} /> */}

        <Route path="available-flats" element={<AvialableFlats />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="projects/available-flats/:slug" element={<FlatsDetails />} />
        <Route exact path="upcoming-projects" element={<UpcomingProjects />} />
        <Route exact path="upcoming-projects/:slug" element={<FlatsDetails />} />
        <Route exact path="ongoing-projects" element={<OngoingProjects />} />
        <Route exact path="ongoing-projects/:slug" element={<FlatsDetails />} />
        <Route exact path="ready-projects" element={<ReadyProjects />} />
        <Route exact path="ready-projects/:slug" element={<FlatsDetails />} />

        <Route exact path="after-sale" element={<AfterSale />} />
        <Route exact path="career" element={<Apply />} />
        <Route exact path="land-owner" element={<LandOwner />} />
        <Route exact path="buyer" element={<Buyer />} />
        <Route exact path="contact-us" element={<ContactUs />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="client-login" element={<ClientLogin />} />
        <Route exact path="client-signup" element={<ClientSignup />} />
        <Route exact path="client-profile" element={<ClientProfile />}>
          <Route index element={<ClientPersonal />} />
          <Route
            exact path="/client-profile/client-projects"
            element={<ClientsProjects />}
          />
          <Route
            exact path="/client-profile/client-payment"
            element={<ClientsPayment />}
          />
          <Route
            exact path="/client-profile/client-nominee"
            element={<ClientsNominee />}
          />
          <Route
            exact path="/client-profile/client-personal-info"
            element={<ClientPersonal />}
          />
        </Route>
        {/* dashboard start */}
        <Route exact path="dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard_Main />} />
          <Route exact path="dashboard-about" element={<Dashboard_About />} />
          <Route exact path="dashboard-home" element={<Dashboard_Main />} />
          <Route
            exact path="dashboard-why-choose"
            element={<Dashboard_Why_Choose />}
          />
          <Route
            exact path="your-clients"
            element={<Dashboard_Your_Clients />}
          ></Route>
          <Route
            exact path="your-clients/:id"
            element={<Dashboard_YourClient_Details />}
          ></Route>
          <Route
            exact path="your-clients/:id/:id"
            element={<Dashboard_YourClient_Single_Projects />}
          />
          <Route exact path="all-users" element={<Dashboard_All_Users />} />
          <Route
            exact path="dashboard-all-projects"
            element={<Dashboard_All_Projects />}
          />
          <Route
            exact path="dashboard-projects-category"
            element={<Dashboard_Project_Category />}
          />
          <Route
            exact path="dashboard-avilable-project"
            element={<Dashboard_Available />}
          />
          <Route exact path="dashboard-ready-project" element={<Dashboard_Ready />} />
          <Route
            exact path="dashboard-ongoing-project"
            element={<Dashboard_Ongoing />}
          />
          <Route
            exact path="dashboard-upcomming-project"
            element={<Dashboard_Upcomming />}
          />

          <Route exact path="dashboard-buyer" element={<Dashboard_Buyer />}>
            <Route
              exact path="dashboard-buyer/:id"
              element={<Dashboard_Buyer_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route exact path="dashboard-land-owner" element={<Dashboard_Land_Owner />}>
            <Route
              exact path="dashboard-land-owner/:id"
              element={<Dashboard_Land_Owner_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route exact path="dashboard-contactus" element={<Dashboard_Contactus />}>
            <Route
              exact path="dashboard-contactus/:id"
              element={<Dashboard_Contactus_Message />}
            />
            <Route index element={<Dashboard_Empty />} />
          </Route>

          <Route exact path="dashboard-after-sale" element={<Dashboard_After_Sale />}>
            <Route
              exact path="dashboard-after-sale/:id"
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
