import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { withRouter  } from 'react-router-dom'



class GroupsGrid extends Component {
    redircetToAddGroup = () => {

        this.props.history.push('/groups/add');
    }

    render() {
        return (
            <div>
                <Button className='mr-4 float-right my-4' onClick={this.redircetToAddGroup} variant="success"  >Add Group</Button>
                <div className="shadow mx-4 mx-auto mt-4 scrollabel-container">

                    <Table hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Level</th>
                                <th>time</th>
                                <th>Status</th>
                                <th>Teacher 1</th>
                                <th>Teacher 2</th>
                                <th>start date</th>
                                <th>finish date</th>
                                <th>lessons</th>
                                <th>actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">561</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><Button>Attendence</Button><Button className='ml-1'>marks</Button></td>
                            </tr>
                            <tr>
                                <th scope="row">561</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><Button>Attendence</Button><Button className='ml-1'>marks</Button></td>
                            </tr>
                            <tr>
                                <th scope="row">561</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><Button>Attendence</Button><Button className='ml-1'>marks</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(GroupsGrid));
