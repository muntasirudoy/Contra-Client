import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./Components/Common/common.css";

const Home = React.lazy(() => import("./Pages/Home"));
const CompanyProfile = React.lazy(() => import("./Pages/CompanyProfile"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const Team = React.lazy(() => import("./Pages/Team"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const FlatsDetails = React.lazy(() => import("./Pages/FlatsDetails"));
const AvialableFlats = React.lazy(() => import("./Pages/AvialableFlats"));
const UpcomingProjects = React.lazy(() => import("./Pages/UpcomingProjects"));
const OngoingProjects = React.lazy(() => import("./Pages/OngoingProjects"));
const ReadyProjects = React.lazy(() => import("./Pages/ReadyProjects"));
const AfterSale = React.lazy(() => import("./Pages/AfterSale"));
const LandOwner = React.lazy(() => import("./Pages/LandOwner"));
const Buyer = React.lazy(() => import("./Pages/Buyer"));

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import Dashboard from "./Dashboard";
import Dashboard_About from "./Dashboard/Dashboard_About";
import Dashboard_Main from "./Dashboard/Dashboard_Main";

import Dashboard_Why_Choose from "./Dashboard/Dashboard_Why_Choose";
import Dashboard_Your_Clients from "./Dashboard/Dashboard_Your_Clients";
import Dashboard_Available from "./Dashboard/Dashboard_Available";
import Dashboard_Ready from "./Dashboard/Dashboard_Ready";
import Dashboard_Ongoing from "./Dashboard/Dashboard_Ongoing";
import Dashboard_Upcomming from "./Dashboard/Dashboard_Upcomming";
import Dashboard_All_Projects from "./Dashboard/Dashboard_All_Projects";
import Dashboard_Project_Category from "./Dashboard/Dashboard_Project_Category";
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
import Dashboard_Add_Project from "./Dashboard/Dashboard_Add_Project";
import Dashboard_Projects from "./Dashboard/Dashboard_Projects";
import Dashboard_Edit_Project from "./Dashboard/Dashboard_Edit_Project";


function App() {
  return (
    <>
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
        <Route path="company-team" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <Team />
          </React.Suspense>
        } />
        {/* <Route path="corporate-social-responsibility" element={<Csr />} /> */}

        <Route path="available-flats" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <AvialableFlats />
          </React.Suspense>
        } />

        <Route exact path="projects" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <Projects />
          </React.Suspense>
        } />

        <Route exact path="projects/available-flats/:slug" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <FlatsDetails />
          </React.Suspense>
        } />

        <Route exact path="upcoming-projects" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <UpcomingProjects />
          </React.Suspense>
        } />
        <Route exact path="projects/upcoming-projects/:slug" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <FlatsDetails />
          </React.Suspense>
        } />

        <Route exact path="ongoing-projects"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <OngoingProjects />
            </React.Suspense>
          }
        />

        <Route exact path="projects/ongoing-projects/:slug"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <FlatsDetails />
            </React.Suspense>
          }
        />

        <Route exact path="ready-projects"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <ReadyProjects />
            </React.Suspense>
          }
        />

        <Route exact path="projects/ready-projects/:slug"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <FlatsDetails />
            </React.Suspense>
          }
        />

        <Route exact path="after-sale"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <AfterSale />
            </React.Suspense>
          }
        />

        <Route exact path="land-owner" element={
          <React.Suspense fallback={<OnPageLoader />}>
            <LandOwner />
          </React.Suspense>
        } />
        <Route exact path="buyer"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <Buyer />
            </React.Suspense>
          }
        />
        <Route exact path="contact-us"
          element={
            <React.Suspense fallback={<OnPageLoader />}>
              <ContactUs />
            </React.Suspense>
          }
        />
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
            exact path="dashboard-projects"
            element={<Dashboard_Projects />}
          >
            <Route
              exact index
              element={<Dashboard_All_Projects />}
            />

            <Route
              exact path="all-projects"
              element={<Dashboard_All_Projects />}
            />

            <Route
              exact path="add-project"
              element={<Dashboard_Add_Project />}
            />
            <Route
              exact path="edit/:id"
              element={<Dashboard_Edit_Project />}
            />
          </Route>
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