import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { API } from '../config';


library.add(faThumbsUp)
library.add(faThumbsDown)


let attendanceData = [];

class AttendancePage extends Component {
    state = {
        NewDayForm: false,
        attendanceData: null,
        attendance: null
    }
    
    showNewDay = () => {
        this.setState((state) => {
            return { NewDayForm: !state.NewDayForm };
        })
    }

    handleAttendanceBoolean = (studentId, isAttend) => {
        const student = attendanceData.find(student => student.id == studentId);
        const index = attendanceData.indexOf(student);
        attendanceData[index]["attended"] = isAttend;
    }

    handleNote = (value, studentId) => {
        const student = attendanceData.find(student => student.id == studentId);
        const index = attendanceData.indexOf(student);
        attendanceData[index]["note"] = value.target.value;
    }

    saveNewAttendance = () => {
        axios.post(`${API}/studentsGroups/api/v1/att/${this.props.match.params['id']}`, {
            "students": [
                ...attendanceData
            ]
        }).then(res => {
            this.showNewDay();
            this.getAttendance();
        })
    }

    componentDidMount = () => {
        this.getAttendance();
    }

    getAttendance = () => {
        axios.get(`${API}/studentsGroups/api/v1/group/att/${this.props.match.params['id']}`)
        .then(res => {
            this.setState({
                attendance: res.data.results
            })
        })
        .catch(error => console.error(error))
    }

    renderAttHeader = (attendance) => {
        attendance.map((item) => { 
             let sortedAttendace = item.attendance.sort((a, b) => new Date(b.date) - new Date(a.date));
             item.attendance = sortedAttendace;
         });
        
         let results = [];
         attendance[0].attendance.map((att, index) => {
             results.push(<th className='fit-content' key={index}>{att.date}</th>)
         });

         return results;
    }

    renderAttBody = (attendance, studentId) => {
        attendance.map((item) => { 
            let sortedAttendace = item.attendance.sort((a, b) => new Date(b.date) - new Date(a.date));
            item.attendance = sortedAttendace;
        });

        let student = attendance.find((att) => att.studentId == studentId);

        console.log(student);

        let results = [];

        student.attendance.map((item, index) => {
            if (item.attended) {
                results.push(<td key={index} style={{backgroundColor: 'green', color: '#fff'}}>{item.notes}</td>);

            } else {
                results.push(<td key={index} style={{backgroundColor: 'red', color: '#fff'}}>{item.notes}</td>);
            }
        });

        return results;
    }

    render() {
        attendanceData = [];
        let group
        let students
        const settings = this.props.settings

        if (this.props.group) {
            group = this.props.group;
            students = this.props.groupStudents;
            
            
            students.map((student, index) => {
                attendanceData.push({
                    "id": student.studentId,
                    "note": null,
                    "attended": null
                });
            });
        } else {
            group = {};
            students = {};
        }

        return (
            <div>
                {this.state.NewDayForm ?
                    <Button className='mr-4 float-right my-4' onClick={this.showNewDay} variant="danger"  > cancel</Button>
                    : <Button className='mr-4 float-right my-4' onClick={this.showNewDay} variant="success"  > Add day</Button>
                }
                <div className='col-12 my-4 scrollabel-container'>

                    <h4 className='my-4'>
                        <span className='gray'> ID:</span>{ group.id } <br/>
                        <span className='gray'> Name:</span> {group.name}<br/>
                        <span className='gray'> Time:</span> {group.time}<br/>
                    </h4>
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th className='fit-content'>id</th>
                                <th className='fit-content'>name</th>
                                {
                                    this.state.attendance && this.state.attendance.length > 0 &&
                                    this.renderAttHeader(this.state.attendance)
                                }

                                {this.state.NewDayForm ? <th className='bg-dark text-light text-center fit-content' colspan="2">new day- today class</th> : ''}
                                {group.accumulatedLessons ? Object.values(group.accumulatedLessons).map((day) => (
                                    <th className='fit-content'>{day.date}</th>
                                )) : ''}
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Object.values(students).map((student) => (
                                    <tr>
                                        <th scope="row">{student.id}</th>
                                        <td>{student.name}</td>
                                        {
                                            this.state.attendance && this.state.attendance.length > 0 && 
                                            this.renderAttBody(this.state.attendance, student.id)
                                        }
                                        {
                                            this.state.NewDayForm ? 
                                                <td className='bg-dark text-light'>
                                                    <Button style={{marginRight: 10}} onClick={ () => { this.handleAttendanceBoolean(student.studentId, true) } } variant="light" ><FontAwesomeIcon icon="thumbs-up" /></Button>
                                                    <Button className='mx-0 my-0' onClick={ () => { this.handleAttendanceBoolean(student.studentId, false) } } variant="light"  ><FontAwesomeIcon icon="thumbs-down" /></Button>
                                                </td>
                                                : ''
                                        }

                                        {
                                            this.state.NewDayForm ? 
                                                <td className='bg-dark text-light '>
                                                    <Input className='newDay' type="text" onChange={(e) => this.handleNote(e, student.studentId)} />
                                                </td> 
                                            : ''
                                        }

                                        <td></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>
                {this.state.NewDayForm ? <Button className='ml-4 float-left my-4' onClick={ () => this.saveNewAttendance() } variant="success"> save</Button>
                    : ''
                }
            </div>
        )
    }
}


function mapStateToProps({ students, groups, settings, studentsGroups }, props) {
    const id = props.match.params['id']
    const dataGroups = Object.values(groups)[0];
    let group;
    let groupStudents;

    if (dataGroups) {
        group = dataGroups.find((group) => (group.id == id));
        groupStudents = Object.values(studentsGroups).filter((student) => (student.groupId === group.id));

        groupStudents = groupStudents.map((student) => {
            const studentInfo = Object.values(students)[0].filter((std) => (student.studentId == std.id))[0]
    
            return {
                ...studentInfo,
                ...student
            }
        });
    }
    
    return {
        groups,
        group,
        groupStudents,
        settings,
    }
}


export default connect(mapStateToProps)(AttendancePage);


