import React, { Component } from 'react';
import Header from '../components/Header';

const $ = require('jquery');
const axios = require('axios');

export class RetailOwner extends Component {
    state = {
        owner: []
    };

    componentDidMount() {
        // axios.get('http://20.108.175.183/smartdeskers/APIservice.a5svc/getAllOwner').then(response => {
        //     this.setState({owner: response.data});
        // });

        $(document).ready(function () {
            const table = $('#table-data').DataTable();

            $('#table-data_filter, #table-data_length').addClass('d-none');

            $('#search-data').on('keyup', function() {
                table.search(this.value).draw();
            });
        });
    }

    render() {
        return (
            <div className="container-content">
                <Header />
                <div className="content">
                    <p className="fw-bold mb-0 text-black text-size-9">Retail Owner</p>
                    <p className="text-black text-size-4">Retail Owner</p>
                    <div className="card-container-content p-4">
                        <div className="d-flex flex-row gap-2 text-nowrap pb-2">
                            <input type="text" id="search-data" name="search-data" className="form-control" style={{ borderRadius: '10px', width: '250px' }} placeholder="Search" />
                            <button className="border-radius-1 px-4 smart-desk-third-color text-size-4">Search</button>
                            <button className="border-radius-1 ms-auto px-4 smart-desk-third-color text-size-4">Add Retail Owner</button>
                        </div>
                        <div className="table-responsive">
                            <table id="table-data" className="align-middle table table-hover w-100">
                                <thead className="bg-light text-nowrap">
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.owner.map(data => 
                                        <tr key={data.usr_id}>
                                            <td><div>{data.usr_firstname} {data.usr_lastname}</div></td>
                                            <td><div>{data.usr_email}</div></td>
                                            <td><div>{data.usr_phone}</div></td>
                                            <td><div></div></td>
                                        </tr>
                                    )} */}
                                    <tr>
                                        <td>User</td>
                                        <td>userone@gmail.com</td>
                                        <td>0123456789</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>owner</td>
                                        <td>ownerone@gmail.com</td>
                                        <td>0123456789</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RetailOwner
