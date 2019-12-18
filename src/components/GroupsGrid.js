import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom'



class GroupsGrid extends Component {
    redircetToAddGroup = () => {
        this.props.history.push('/groups/add');
    }

    redircetToAttendance = (id) => {
        this.props.history.push('/groups/attendance/'+id)
    }
    redircetToMarks = (id) => {
        this.props.history.push('/groups/marks/'+id)
    }

    render() {
        const groups = Object.values(this.props.groups)

        return (
            <div>
                <Button className='mr-4 float-right my-4' onClick={this.redircetToAddGroup} variant="success"  >Add Group</Button>
                <div className="shadow mx-4 mx-auto mt-4 scrollabel-container">

                    <Table className='text-center' hover>
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
                                <th># Students</th>
                                <th className='text-center'>actions</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                //sort groups depend on group.startDate "decending order"
                                groups.sort((groupA, groupB)=> { 
                                    if (groupA.startDate < groupB.startDate)
                                        return 1;
                                    else if (groupA.startDate > groupB.startDate)
                                        return -1;
                                    else return 0;
                                }).map((group) => (
                                    <tr key={group.id}>
                                        <th scope="row"><Link to={'/groups/id'+group.id}>{group.id}</Link></th>
                                        <td>{group.name}</td>
                                        <td>{group.level}</td>
                                        <td>{group.time}</td>
                                        <td>{group.status}</td>
                                        <td>{group.teacher1}</td>
                                        <td>{group.teacher2}</td>
                                        <td>{group.startDate.substring(0,10)}</td>
                                        <td>{group.endDate.substring(0,10)}</td>
                                        {/* <td>{Object.values(group.accumulatedLessons).length}/{group.commitLessons}</td> */}
                                        <td></td>
                                        <td>{group.numberOfStudents}</td>
                                        <td></td>
                                        <td className='text-center'>
                                            <Button onClick={() => (this.redircetToAttendance(group.id))}>Attendence</Button>
                                            <Button onClick={() => (this.redircetToMarks(group.id)) } className='ml-1'>marks</Button>
                                        </td>
                                    </tr>
                        ))
                    }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ students, groups }) {
    return {
        students,
        groups,
    }
}

export default connect(mapStateToProps)(withRouter(GroupsGrid));
