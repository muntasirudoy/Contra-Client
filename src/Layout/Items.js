import { Link } from "react-router-dom";
const Items = [
    {
        label:<Link to="/">Home</Link>,
        icon: 'pi pi-home',
    },
    {
        label: 'About',
        items: [
            {
                label: <Link to="/CompanyProfile">Company Profile</Link>,
            },
            {
                label: <Link to="/ManagementTeam">Management Team</Link>,
            },
            {
                label: <Link to="/Csr"> Corporate Social Responsibility</Link>,
            },

        ]
    },
    {
        label: 'Service',
        items: [
            {
                label: <Link to="/AfterSale">After Sale Service</Link>,
            },
            {
                label: <Link to="/Interior">Interior</Link>,
            }
            
        ]
    },
    {
        label: 'Projects',
        items: [
            {
                label: <Link to="/AvialableFlats">Avialable Flats</Link>,
            },
            {
                label: <Link to="/UpcomingProjects">Upcomming Projects</Link>,
            },
            {
                label: <Link to="/OngoingProjects"> Ongoing Project </Link>,
            },
            {
                label: <Link to="/ReadyProjects"> Ready Project</Link>,
            },

        ]
    },
    {
        label: 'Career',
        items: [
            {
                label: <Link to="/Apply">Apply</Link>,
            },
        ]
    },
    {
        label: 'Contact',
        items: [
            {
                label: <Link to="/LandOwner">Land Owner</Link>,
            },
            {
                label: <Link to="/Buyer">Buyer</Link>,
            },
            {
                label: <Link to="/ContactUs">Contact Us</Link>,
            },
        ]
    },
];


export default Items
