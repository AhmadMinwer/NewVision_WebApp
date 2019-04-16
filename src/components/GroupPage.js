import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';


class GroupPage extends Component {

    getAvgMarks = (mark1, mark2, mark3) => {
        
    }

    render() {
        let group
        let students
        const settings = this.props.settings

        if (this.props.group) {
            group = this.props.group
            students = this.props.groupStudents
        } else {
            group = {}
            students = {}
        }
        return (
            <div className='group-page container my-4 py-4 shadow'>
                <h3 className='col-12 '>{group.name} </h3>
                <hr className=' col-11' />
                <br />
                <div className='row row margin-top-7'>
                    <div className='col-2 mb-3'><span className='gray'>ID: </span>  <span>{group.id}</span></div>
                    <div className='col-10 mb-3'><span className='gray '>Name: </span><Input className='float-left form-control-sm' type="text" value={group.name} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-3 mb-3'><span className='gray '>Level: </span><Input className='float-left form-control-sm' type="text" value={group.level} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-9 col-md-3 mb-3'><span className='gray '>Time: </span><Input className='float-left form-control-sm' type="text" value={group.time} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-4 mb-3'>
                        <span className='gray'>Status:</span>
                        <Input className='form-control-sm' type="select" name="select" id="exampleSelect">
                            {
                                settings.groupStatus ? settings.groupStatus.map((label) => (
                                    group.status == label ? <option selected>{label}</option> : <option>{label}</option>

                                ))
                                    : ''
                            }
                        </Input>
                    </div>
                    <div className='col-12 mb-3'>
                        <span className='gray'>Teachers:</span>
                        <Input type="select" name="select" multiple >
                            {
                                settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                    group.teacher == label || group.teacher2 == label ? <option selected>{label}</option> : <option>{label}</option>
                                ))
                                    : ''
                            }
                        </Input>
                    </div>
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
                                    <th>AVG marks</th>
                                    <th>certification</th>
                                    <th>Attendence</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Object.values(students).map( (student) =>(
                                        <tr>
                                            <th scope='row' key={student.id}> <Link to={'/students/id'+student.id}>{student.id}</Link></th>
                                            <td>{student.name}</td>
                                            <td>{student.groups[group.id].status}</td>
                                            <td>date</td>
                                            <td>{ this.getAvgMarks(student.groups[group.id].mark1 , student.groups[group.id].mark2 , student.groups[group.id].mark3 ) }</td>
                                            <td>{student.groups[group.id].certificationState}</td>
                                        </tr>
                                    ))
                                }
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


function mapStateToProps({ students, groups, settings }, props) {
    const id = props.match.params['id']
    const group = groups[id]
    let groupStudents = {}
    if (group) {
        group.students.map((studentId) => (
            groupStudents[studentId] = students[studentId]
        ))

        console.log('groupStudents = ', groupStudents)
    }
    return {
        group,
        groupStudents,
        settings,
    }
}


export default connect(mapStateToProps)(GroupPage);
