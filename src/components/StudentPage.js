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



        console.log('student=', student)
        return (
            student.creationDate == null? <div></div> :
            <div className='student-page container my-4 py-4 shadow'>
                <h3 className='col-12 '>{student.name} </h3>
                <hr className=' col-11' />
                <br />
                <div className='row '>
                    <div className='col-2 '><span className='gray'>ID: </span>  <span>{student.id}</span></div>
                    <div className='col-10'><span className='gray mr-1 cursor-pointer'>Name: </span>{student.name}</div>
                    <div className='col-2'><span className='gray mr-1 cursor-pointer'>CPA:</span>{student.CPA} </div>
                    <div className='col-10 '><span className='gray mr-1 cursor-pointer'>CPA Balance: </span>{student.CPABalance}</div>

                    <div className='col-12' ><span className='gray mr-1 cursor-pointer'>Phone 1: </span>{student.phone} </div>
                    <div className='col-12 '><span className='gray mr-1 cursor-pointer'>Phone 2: </span>{student.phone2}</div>
                    <div className='col-12 '><span className='gray mr-1 cursor-pointer'>Status:  </span>{student.staus}</div>
                    <div className='col-12 '> <span className='gray cursor-pointer'>sign up date: </span> {student.creationDate.substring(0,10)}</div>
                    {/* <div className='col-12 '><span className='gray'>last date: </span> <span>{student.lastDate}</span></div> */}


                    <div className='col-12 mt-4 scrollabel-container'>
                        <h4>Groups</h4>
                        {/* <Button className='float-right mr-1 mb-2' color="danger" onClick={this.toggle}>Sign up to a new group</Button> */}
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
                                            <td>{group.startDate.substring(0,10)}</td>
                                            <td>{group.status}</td>
                                            <td>{group.certificationState}</td>
                                            {/* <td> <Link to={'/groups/attendance/' + group.id}>  {Object.values(group.attendance).filter((day) => day.attended).length}/{group.accumulatedLessons ? group.accumulatedLessons.length : ''}</Link></td> */}
                                            <td></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-12'>
                        <span className='gray mt-4 cursor-pointer'> Terms</span>
                        <br /><span className='ml-1'>{student.terms}</span>
                    </div>

                    <div className='col-12'>
                        <span className='gray cursor-pointer'> Remarks</span>
                        <br/><span className='ml-1'>{student.remarks}</span>
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

    console.log('studentGroups filters',studentGroups)
    return {
        student,
        students,
        studentGroups,
        activeGroups,
    }
}

export default connect(mapStateToProps)(StudentPage);
