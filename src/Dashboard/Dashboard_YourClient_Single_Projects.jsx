import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { EventStore } from '../Context/eventContext';



const Dashboard_YourClient_Single_Projects = () => {
    const navigate = useNavigate();
   const {dispatchEvent} = useContext(EventStore)
    const param = useParams()

    const handleBack =()=>{
      navigate(-1)
      try {
        dispatchEvent({
          type:"BACK_PAGE",
          payload:"2"
        })
      } catch (error) {
        
      }
    }
    useEffect(()=>{
         
    },[])
  return (
    <div className='dashboardClientSingleProject'>
        <div className="header">
            <Button onClick={handleBack} type="primary"> <ArrowLeftOutlined />  Back to All Projects</Button>
        </div>
    </div>
  )
}

export default Dashboard_YourClient_Single_Projects