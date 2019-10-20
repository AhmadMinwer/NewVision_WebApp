import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const activeGroups = this.props.activeGroups
        let student;
        // let groups = []
        if (this.props.student) {
            student = this.props.student
            // groups = Object.values(student.groups)
        } else {
            student = {}
        }



        // console.log('student=', student)
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
                            <option defaultValue>finish</option>
                        </Input>
                    </div>
                    <div className='col-12 col-md-2 mb-3'><span className='gray '>CPA:</span><Input className='float-left form-control-sm' type="text" value={student.CPA} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-12 col-md-8 mb-3'><span className='gray'>CPA Balance: </span><Input className='float-left form-control-sm' type="text" value={student.CPABalance} onChange={(e) => this.handleChange(e)} /></div>
                    <div className='col-12 col-lg-3 mb-3'> <span className='gray'>sign up date: </span> <span>{student.creationDate}</span></div>
                    <div className='col-12 col-lg-9 mb-3'><span className='gray'>last date: </span> <span>{student.lastDate}</span></div>


                    <div className='col-12 mt-4 scrollabel-container'>
                        <h4>Groups</h4>
                        <Button className='float-right mr-1 mb-2' color="danger" onClick={this.toggle}>Sign up to a new group</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Sign up to a new group</ModalHeader>
                            <ModalBody>
                                <div className=' '>
                                    <h4>Current Groups</h4>
                                    <div className=''>
                                        <div className="list-group ">
                                            {
                                                activeGroups ? activeGroups.map((group) => (
                                                    <button type="button" key={group.name} className="list-group-item list-group-item-action">{group.name}</button>
                                                ))
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>sign up the student</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
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
                                    Object.values(this.props.studentGroups).map((group) => (
                                        <tr key={group.id}>
                                            <th scope='row' key={group.id}> <Link to={'/groups/id' + group.id}>{group.id}</Link></th>
                                            <td>{group.name}</td>
                                            <td>{group.level}</td>
                                            <td>{group.startDate}</td>
                                            <td>{group.status}</td>
                                            <td>{group.exam1}</td>
                                            <td>{group.exam2}</td>
                                            <td>{group.exam3}</td>
                                            <td>{group.certificationState}</td>
                                            {/* <td> <Link to={'/groups/attendance/' + group.id}>  {Object.values(group.attendance).filter((day) => day.attended).length}/{group.accumulatedLessons ? group.accumulatedLessons.length : ''}</Link></td> */}

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12'>
                        <span className='gray mt-4'> Terms</span>
                        <br />
                        <Input type="textarea" rows='5' value={student.terms} className='float-left' onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className='col-12'>
                        <span className='gray'> Remarks</span>
                        <br />
                        <Input type="textarea" rows='5' value={student.remarks} className='float-left' onChange={(e) => this.handleChange(e)} />
                    </div>

                </div>




            </div>
        );
    }
}


function mapStateToProps({ students, groups, studentsGroups }, props) {
    const activeGroups = Object.values(groups).filter((group) => (group.state !== 'Finish'))
    const id = props.match.params['id']
    const student = Object.values(students).filter((student) => (student.id == id))[0]

    let studentGroups = Object.values(studentsGroups).filter((link) => ( link.studentId == student.id))

    studentGroups = studentGroups.map((group)=>{
        return {
            ...group,
            ...Object.values(groups).filter((groupInfo)=>(group.groupId == groupInfo.id))[0]
        }
    })

    // console.log('studentGroups filters',studentGroups)
    return {
        student,
        students,
        studentGroups,
        activeGroups,
    }
}

export default connect(mapStateToProps)(StudentPage);
