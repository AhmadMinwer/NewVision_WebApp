import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


class StudentPage extends Component {

    render() {
        return (
            <div className='container my-4 py-4 shadow'>
                <div className='row'>
                    <div className='col-2 mb-3'>ID</div>
                    <div className='col-6 mb-3'>Full Name</div>
                    <div className='col-6 col-md-2 mb-3'>Phone 1</div>
                    <div className='col-6 col-md-2 mb-3'>Phone 2</div>
                    <div className='col-12 mb-3'><span className='gray'>Status:</span> Active </div>
                    <div className='col-6 col-md-3 mb-3'><span className='gray'>CPA ID: </span> 5214</div>
                    <div className='col-6 col-md-3 mb-3'><span className='gray'>CPA Balance: </span>5000 </div>
                    <div className='col-0 col-md-6 mb-3'></div>
                    <div className='col-6 mb-3'> <span className='gray'>sign up date: </span>12 April 2015 </div>
                    <div className='col-6 mb-3'><span className='gray'>last date: </span>12 Augest 2015 </div>


                    <div className='col-12 mt-4 scrollabel-container'>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>level</th>
                                    <th>date</th>
                                    <th>first test</th>
                                    <th>second test</th>
                                    <th>final test</th>
                                    <th>certification</th>
                                    <th>Attendence</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">561</th>
                                    <td>A</td>
                                    <td>2 April 2018</td>
                                    <td>82/100</td>
                                    <td>90/100</td>
                                    <td>85/100</td>
                                    <td>given</td>
                                    <td>48/55</td>

                                </tr>
                                <tr>
                                    <th scope="row">214</th>
                                    <td>B</td>
                                    <td>2 April 2018</td>
                                    <td>82/100</td>
                                    <td>90/100</td>
                                    <td>85/100</td>
                                    <td>given</td>
                                    <td>48/55</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12'>
                        <span className='gray'> Terms</span>
                        <br />
                        <p>some Terms</p>
                    </div>

                    <div className='col-12'>
                        <span className='gray'> Remarks</span>
                        <br />
                        <p>some Remarks</p>
                    </div>

                </div>




            </div>
        );
    }
}

export default connect()(StudentPage);
