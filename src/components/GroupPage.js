import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


class GroupPage extends Component {

    render() {
        return (
            <div className='container my-4 py-4 shadow'>
                <div className='row'>
                    <div className='col-2 mb-3'>ID</div>
                    <div className='col-10 mb-3'>Name</div>
                    <div className='col-3 mb-3'><span className='gray'>Level:</span> A </div>
                    <div className='col-9 col-md-3 mb-3'><span className='gray'>time:</span> Morning </div>
                    <div className='col-4 mb-3'><span className='gray'>Status:</span> Active </div>
                    <div className='col-12 mb-3'><span className='gray'>Teachers:</span> Teacher 1 </div>
                    <div className='col-12 col-md-3 mb-3'> <span className='gray'>Starting date: </span>12 April 2015 </div>
                    <div className='col-12 col-md-9 mb-3'><span className='gray'>Finishing date: </span>12 Augest 2015 </div>
                    <div className='col-6 mb-3'><span className='gray'>Lessons: </span>20/55</div>



                    <div className='col-12 mt-4 scrollabel-container'>
                        <h4>Students</h4>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
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
                                    <td>Rae'd Majed Mahfouz</td> 
                                    <td>Active</td>
                                    <td>2 April 2018</td>
                                    <td>82/100</td>
                                    <td>90/100</td>
                                    <td>85/100</td>
                                    <td>not yet</td>
                                    <td>48/55</td>

                                </tr>
                                <tr>
                                    <th scope="row">214</th>
                                    <td>Tareq Mahoud Abu Nada</td> 
                                    <td>Quit</td>
                                    <td>2 April 2018</td>
                                    <td>82/100</td>
                                    <td>90/100</td>
                                    <td>85/100</td>
                                    <td>not yet</td>
                                    <td>48/55</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12 mt-4'>
                        <span className='gray'> Remarks</span>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nulla, tempus in mollis et, pulvinar eu nisl. Aenean tincidunt quam nec tempus vulputate. Praesent molestie metus eget cursus vehicula. Aliquam quis feugiat nunc. Suspendisse potenti. Nam quis lacinia lacus, id gravida quam. Quisque ultrices lobortis vulputate. Nunc sed erat eget ipsum laoreet accumsan. Nam condimentum nulla et scelerisque varius. Donec sagittis iaculis pharetra. Suspendisse sed dolor non dui suscipit faucibus. Donec interdum laoreet sodales.</p>
                    </div>

                </div>




            </div>
        );
    }
}

export default connect()(GroupPage);
