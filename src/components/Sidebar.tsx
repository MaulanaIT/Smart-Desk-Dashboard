import React, { Component } from 'react'
import { IoBusinessOutline, IoDocumentTextOutline, IoGridOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";

import logo from '../image/logo.png';

import './Sidebar.css'

const $ = require('jquery');

interface props {
    page: any;
}

export class Sidebar extends Component<props> {
    
    componentDidMount() {
        $('#' + this.props.page).addClass('active');
    }

    render() {
        return (
            <div className="sidebar">
                <div>
                    <img src={logo} alt="Smart Desk" className="p-5" />
                </div>
                <div id="dashboard" className="menu">
                    <a href="/dashboard" className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoGridOutline />
                            <span>Dashboard</span>
                        </div>
                    </a>
                </div>
                <div id="retail-owner" className="menu">
                    <a href="/retail-owner" className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoPeopleOutline />
                            <span>Retail Owner</span>
                        </div>
                    </a>
                </div>
                <div className="menu">
                    <div className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoBusinessOutline />
                            <span>Building</span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoDocumentTextOutline />
                            <span>Order List</span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoPersonOutline />
                            <span>Users</span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoSettingsOutline />
                            <span>Settings</span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="item gap-2">
                        <div className="mark"></div>
                        <div className="align-items-center d-flex flex-row gap-2">
                            <IoLogOutOutline />
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
