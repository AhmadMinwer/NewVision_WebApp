import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';


class StudentsGrid extends Component {
    redircetToAddStudent = () => {

        this.props.history.push('/students/add');
    }
    render() {
        const students = Object.values(this.props.students);
        let data = students[0];

        return (
            <div>
                <Button className='mr-4 float-right mb-4' onClick={this.redircetToAddStudent} variant="success"  >Add Student</Button>
                <div className="shadow  mt-4 scrollabel-container">
                    <Table className='text-center' hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CPA ID</th>
                                <th>Name</th>
                                <th>CPA Balance</th>
                                <th>TN</th>
                                <th>Sign up date</th>
                                <th>specialty</th>
                                <th>Status</th>
                                <th>Last level</th>
                                <th>Last date</th>
                                <th>Remarks</th>
                                <th>Terms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((student, index) => (
                                    <tr key={index}>
                                        <th scope='row'><Link to={'/students/id'+student.id}>{student.id}</Link></th>
                                        <td>{student.CPA}</td>
                                        <td>{student.name}</td>
                                        <td>{student.CPABalance}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.creationDate}</td>
                                        <td>{student.specialty}</td>
                                        <td>{student.status}</td>
                                        <td>{student.lastLevel}</td>
                                        <td>{student.lastDate}</td>
                                        <td data-toggle="tooltip" title={student.remarks}>{
                                            
                                            student.remarks.length > 30 ?
                                                student.remarks.substring(0, 29) + "..."
                                                : student.remarks
                                        }</td>
                                        <td data-toggle="tooltip" title={student.terms}>{
                                            student.terms.length > 30 ?
                                                student.terms.substring(0, 29) + "..."
                                                : student.terms
                                        }</td>
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


function mapStateToProps({ students }) {
    return {
        students,
    }
}


export default connect(mapStateToProps)(withRouter(StudentsGrid));
