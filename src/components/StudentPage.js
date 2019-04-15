import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';


class StudentPage extends Component {
    state = {
        name: 'aas asf',
        phone1: '',
        phone2: '',
        status: '',
        CPAID: '',
        CPABalance: '',
        terms: '',
        remarks: ''
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    render() {
        let student;
        let groups=[]
        if (this.props.student) {
            student = this.props.student
            groups = Object.values(student.groups)
        } else {
            student = {}
        }



        console.log('student=', student)
        return (
            <div className='student-page container my-4 py-4 shadow'>
                <h3 className='col-12 '>{student.name} </h3>
                <hr className=' col-11' />
                <br />
                <div className='row margin-top-7 '>
                    <div className='col-2 mb-3 '><span className='gray'>ID: </span>  <span>{student.id}</span></div>
                    <div className='col-10 mb-3'><span className='gray '>Name: </span><Input className='float-left form-control-sm' type="text" value={student.name} onChange={(e) => this.handleChange(e)} /> </div>
                    <div className='col-12 col-md-6  mb-3'><span className='gray '>Phone 1: </span><Input className='float-left form-control-sm' type="text" value={student.phone} onChange={(e) => this.handleChange(e)} /> </div>
                    <div className='col-12 col-md-6  mb-3'><span className='gray '>Phone 2: </span><Input className='float-left form-control-sm' type="text" value={student.phone2} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-12 mb-3'>
                        <span className='gray'>Status:</span>
                        <Input className='form-control-sm' type="select" name="select" id="exampleSelect">
                            <option>Active</option>
                            <option selected>finish</option>
                        </Input>
                    </div>
                    <div className='col-12 col-md-2 mb-3'><span className='gray '>CPA:</span><Input className='float-left form-control-sm' Style='width: 50px !important;' type="text" value={student.CPA} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-12 col-md-8 mb-3'><span className='gray'>CPA Balance: </span><Input className='float-left form-control-sm' type="text" value={student.CPABalance} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-12 col-lg-3 mb-3'> <span className='gray'>sign up date: </span> <span>{student.creationDate}</span></div>
                    <div className='col-12 col-lg-9 mb-3'><span className='gray'>last date: </span> <span>{student.lastDate}</span></div>


                    <div className='col-12 mt-4 scrollabel-container'>
                        <h4>Groups</h4>
                        <Table className='text-center' hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>level</th>
                                    <th>date</th>
                                    <th>status</th>
                                    <th>first test</th>
                                    <th>second test</th>
                                    <th>final test</th>
                                    <th>certification</th>
                                    <th>Attendence</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Object.values(this.props.studentGroups).map( (group) =>(
                                        <tr>
                                            <th scope='row' key={group.id}> <Link to={'/groups/id'+group.id}>{group.id}</Link></th>
                                            <td>{group.name}</td>
                                            <td>{group.level}</td>
                                            <td>{group.startDate}</td>
                                            <td>{group.status}</td>
                                            <td>{group.exam1}</td>
                                            <td>{group.exam2}</td>
                                            <td>{group.exam3}</td>
                                            <td>{group.certificationState}</td>
                                            <td> <Link to={'/groups/attendance/'+group.id}>  { Object.values(group.attendance).filter((day)=> day.attended).length  }/{group.accumulatedLessons? group.accumulatedLessons.length :'' }</Link></td>

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12'>
                        <span className='gray mt-4'> Terms</span>
                        <br />
                        <Input type="textarea" rows='5' value={student.terms}  className='float-left' onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div className='col-12'>
                        <span className='gray'> Remarks</span>
                        <br />
                        <Input type="textarea" rows='5' value={student.remarks}  className='float-left' onChange={(e) => this.handleChange(e)}/>
                    </div>

                </div>




            </div>
        );
    }
}


function mapStateToProps({ students, groups }, props) {
    const id = props.match.params['id']
    const student = students[id]
    let studentGroups = {}
    if(student){
        Object.values(student.groups).map((group) => (
            studentGroups[group.id] = Object.assign({},groups[group.id],student.groups[group.id])
        ))
        
        console.log('studentGroups = ', studentGroups)
    }
    return {
        student,
        students,
        studentGroups,
    }
}

export default connect(mapStateToProps)(StudentPage);
