import React, { Component } from 'react'
import Header from '../components/Header';

export class Dashboard extends Component {
    render() {
        return (
            <div className="content">
                <Header />
                <div>
                    <p className="fw-bold text-black text-size-9">Dashboard</p>
                    <div className="d-flex flex-row gap-4 pt-4">
                        <div className="d-flex flex-column gap-4">
                            <div className="card-content" style={{ width: '1050px', height: '365px' }}></div>
                            <div className="card-content" style={{ width: '1050px', height: '435px' }}></div>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <div className="card-content" style={{ width: '510px', height: '515px' }}></div>
                            <div className="card-content" style={{ width: '510px', height: '285px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
