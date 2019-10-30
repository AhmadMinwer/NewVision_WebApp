import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';

library.add(faThumbsUp)
library.add(faThumbsDown)


let examsData = {
    "topMark": null,
    "students": []
}

class Marks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            NewMarkForm: false,
            groupDetails: null,
            groupId: props.match.params.id,
            students: null,
            marks: null,
            examsData: null
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    showNewExam = () => {
        this.setState((state) => {
            return { NewMarkForm: !state.NewMarkForm };
        })
    }

    getGroupDetails = (groups) => {
        if (this.state.groupDetails) return

        let data = groups['groups'];
        const groupDetails = data && data.find((group) => group.id == this.state.groupId);

        this.setState({
            groupDetails
        })
    }

    getMarks = () => {
        Axios.get(`http://localhost:9000/studentsGroups/api/v1/group/exam/${this.props.match.params['id']}`)
            .then(res => {
                this.setState({
                    marks: res.data.results
                })
            })
            .catch(error => console.error(error))
    }

    componentDidMount = () => {
        this.getMarks();
    }

    handleTopMark = (value, ) => {
        examsData.topMark = Number(value.target.value);
    }

    handleNote = (value, studentId) => {
        const student = examsData.students.find(student => student.stdId == studentId);
        const index = examsData.students.indexOf(student);
        examsData.students[index]["notes"] = value.target.value;
    }

    handleMark = (value, studentId) => {
        const student = examsData.students.find(student => student.stdId == studentId);
        const index = examsData.students.indexOf(student);
        examsData.students[index]["mark"] = Number(value.target.value);
    }

    addNewExam = () => {
        console.log(examsData);

        Axios.post(`http://localhost:9000/studentsGroups/api/v1/exam/${this.props.match.params['id']}`, {
            ...examsData
        }).then(res => this.getMarks())
            .catch(error => console.log(error))
    }

    render() {

        let group;
        let students;

        if (this.props.group) {
            group = this.props.group;
            students = this.props.groupStudents;

            students.map((student, index) => {

                if (examsData.students.length < students.length) {
                    let std = this.state.marks && this.state.marks.find(item => item.studentId == student.id);

                    examsData.students.push({
                        "id": std.id,
                        "stdId": student.id,
                        "mark": null,
                        "notes": null
                    });
                }

                let x = this.state.marks && this.state.marks.find(item => item.studentId == student.studentId);
                student['exams'] = x && x.exams;
            });

            if (!this.state.groupDetails) {
                this.setState({
                    groupDetails: group
                })
            }
        }

        console.log(examsData);

        return (
            <div>
                {this.state.NewMarkForm ?
                    <Button className='mr-4 float-right my-4' onClick={this.showNewExam} variant="danger"  > cancel</Button>
                    : <Button className='mr-4 float-right my-4' onClick={this.showNewExam} variant="success"  > Add exam</Button>
                }
                <div className='col-12 mt-4 mb-1 scrollabel-container'>

                    {
                        this.state.groupDetails &&
                        (
                            <div>
                                <h4 className="my-4">Id: <span style={{ fontWeight: 400 }}>{this.state.groupDetails.id}</span></h4>
                                <h4 className="my-4">Group Name: <span style={{ fontWeight: 400 }}>{this.state.groupDetails.name}</span></h4>
                                <h4 className="my-4">Time: <span style={{ fontWeight: 400 }}>{this.state.groupDetails.time}</span></h4>
                            </div>
                        )
                    }

                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th className='fit-content'>id</th>
                                <th className='fit-content'>name</th>
                                <th className='fit-content'>exams</th>
                                {this.state.NewMarkForm ? <th className='bg-dark text-light text-center fit-content'><p className='newMark'>top mark</p>
                                    <Input className='newMark' type="text" onChange={(e) => this.handleTopMark(e)} /></th> : ''}
                                {this.state.NewMarkForm ? <th className='bg-dark text-light text-center fit-content'>Notes</th> : ''}
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students && students.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.exams}</td>
                                            {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newMark' type="text" onChange={(e) => this.handleMark(e, student.studentId)} /> </td> : ''}
                                            {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newDay' type="text" onChange={(e) => this.handleNote(e, student.studentId)} /> </td> : ''}
                                            <th></th>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                {this.state.NewMarkForm ? <Button className='ml-4 float-left my-4' onClick={() => { this.addNewExam() }} variant="success"> save</Button>
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
        if (group) {
            groupStudents = Object.values(studentsGroups).filter((student) => (student.groupId === group.id));

            groupStudents = groupStudents.map((student) => {
                const studentInfo = Object.values(students)[0].filter((std) => (student.studentId == std.id))[0]

                return {
                    ...studentInfo,
                    ...student
                }
            });
        }
    }

    return {
        groups,
        group,
        groupStudents,
        settings,
    }
}

export default connect(mapStateToProps)(Marks);


