import React, { Component } from 'react'
import Header from '../components/Header'

import './Dashboard.css';

export class Dashboard extends Component {
    render() {
        return (
            <div className="container-content">
                <Header />
                <p className="fw-bold mb-0 text-black text-size-9">Dashboard</p>
                <p className="text-black text-size-4">Dashboard</p>
                <div className="gap-4 mx-0 row">
                    <div className="card-container-content dashboard-container-sm">
                        <p>Test</p>
                    </div>
                    <div className="card-container-content dashboard-container-sm">
                        <p>Test</p>
                    </div>
                    <div className="card-container-content dashboard-container-sm">
                        <p>Test</p>
                    </div>
                    <div className="card-container-content col">
                        <p>Test</p>
                    </div>
                </div>
                <div className="card-container-content">
                    <p>Test</p>
                </div>
            </div>
        )
    }
}

export default Dashboard
