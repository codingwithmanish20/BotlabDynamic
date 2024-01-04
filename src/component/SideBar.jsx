import { Box } from '@mui/material'
import React from 'react'
import "../styles/sidebar.css"
import { NavLink,Outlet } from 'react-router-dom'

const SideBar = ({ children }) => {
    const manuItem = [
        {
            path: "/",
            name: "Home",
            // icon: <HomeIcon />
        },
        {
            path: "/DataProcessing",
            name: "DataProcessing",
            // icon: <HomeIcon />
        },

    ]
    return (
        <>
            <Box className="toggle_bar">
                <Box className="main_sidebar">

                    {manuItem?.map((item, index) => {
                        console.log("item", item)
                            return (
                                <>
                                    <div key={index}>
                                        <NavLink to={item.path} className='link' activeclassName="active" >
                                            <div className="icon">{item.icon}</div>
                                            <div className="link_text"  >{item.name}</div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        })
                    }
                </Box>
                <main><Outlet /></main>
            </Box>
        </>
    )
}

export default SideBar
