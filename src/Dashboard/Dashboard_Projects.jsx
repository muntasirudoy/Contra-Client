import React from 'react'
import { Outlet } from 'react-router-dom'


const Dashboard_Projects = () => {
    return (
        <div>
            {" "}
            <div className="dashboard-project-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard_Projects