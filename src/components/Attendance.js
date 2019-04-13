import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp)
library.add(faThumbsDown)




class AttendancePage extends Component {
    state = {
        name: 'aas asf',
        NewDayForm: false,
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }
    showNewDay = () => {
        this.setState((state) => {
            return { NewDayForm: !state.NewDayForm };
        })
    }


    render() {
        return (
            <div>
                <Button className='mr-4 float-right my-4' onClick={this.showNewDay} variant="success"  >
                    {this.state.NewDayForm ? 'Cancel' : 'Add day'}
                </Button>
                <div className='col-12 my-4 scrollabel-container'>

                    <h4 className='my-4'>Id, Student Name, time</h4>
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>

                                {this.state.NewDayForm ? <th className='bg-dark text-light text-center' colspan="2">new day- today class</th> : ''}
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>
                                <th>20 june</th>
                                <th>23 june</th>
                                <th>24 june</th>
                                <th>25 june</th>
                                <th>26 june 2015</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">561</th>
                                <td>Student Name</td>
                                {this.state.NewDayForm ? <td className='bg-dark text-light'> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-up" /></Button> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-down" /></Button></td> : ''}
                                {this.state.NewDayForm ? <td className='bg-dark text-light newDay'><Input type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                <td className='bg-success'></td>
                                <td className='bg-danger'>was ill</td>
                                <td className='bg-danger'>85/100</td>
                                <td className='bg-danger'>given</td>
                                <td>48/55</td>

                            </tr>
                            <tr>
                                <th scope="row">214</th>
                                <td>Student Name</td>
                                {this.state.NewDayForm ? <td className='bg-dark text-light'> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-up" /></Button> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-down" /></Button></td> : ''}
                                {this.state.NewDayForm ? <td className='bg-dark text-light newDay'><Input type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                <td>82/100</td>
                                <td>90/100</td>
                                <td>85/100</td>
                                <td>given</td>
                                <td>48/55</td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default connect()(AttendancePage);


