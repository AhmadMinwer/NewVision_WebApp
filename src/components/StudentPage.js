import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { handleUpdateStudent } from '../actions/students'


class StudentPage extends Component {
    state = {
        name: 'aas asf',
        phone1: '',
        phone2: '',
        status: '',
        CPAID: '',
        CPABalance: '',
        terms: '',
        remarks: '',


        newFieldValue: '',
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            updateIteamModal: false,
            updateFieldName: '',
            fieldType: '',

        };

        this.toggle = this.toggle.bind(this);
        this.toggleUpdateIteamModal = this.toggleUpdateIteamModal.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleUpdateIteamModal(fieldName) {

        const types = {
            'name': 'text',
            'CPABalance': 'number',
            'CPA': 'number',
            'phone1': 'text',
            'phone2': 'text',
            'remarks': 'textarea',
            'terms': 'textarea',
        }

        this.setState(prevState => ({
            updateIteamModal: !prevState.updateIteamModal,
            updateFieldName: fieldName,
            fieldType: types[fieldName],
        }))
    }


    handleNewFieldValue(e) {

        if (this.state.updateFieldName === 'phone1' || this.state.updateFieldName === 'phone2') {

            const value = e.target.value
            //does not work!
            if ((!isNaN(parseInt(value.charAt(value.length - 1), 10)) && value.length <= 10) || value === '') {
                this.setState({
                    newFieldValue: e.target.value,
                })
            }
        } else {
            this.setState({
                newFieldValue: e.target.value
            })
        }
    }

    //update student information
    handleUpdateStudentValue(studentId) {
        
        const value = this.state.newFieldValue
        const data = {
            studentId,
            type : this.state.updateFieldName,
            value,
        }

        console.log('from Students reducer data handleUpdateStudentValue data= ', data)
        if (value !== 'select...' && value !== 'Select...' && value !== '')
            this.props.dispatch(handleUpdateStudent(data))
    }

    render() {
        const activeGroups = this.props.activeGroups
        const settings = this.props.settings
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
            student.creationDate == null ? <div></div> :
                <div className='student-page container my-4 py-4 shadow'>
                    <h3 className='col-12 '>{student.name} </h3>
                    <hr className=' col-11' />
                    <br />
                    <div className='row '>
                        <div className='col-2 '><span className='gray'>ID: </span>  <span>{student.id}</span></div>
                        <div className='col-10'><span className='gray mr-1 cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('name') }}>Name: </span>{student.name}</div>
                        <div className='col-2'><span className='gray mr-1 cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('CPA') }}>CPA:</span>{student.CPA} </div>
                        <div className='col-10 '><span className='gray mr-1 cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('CPABalance') }} >CPA Balance: </span>{student.CPABalance}</div>

                        <div className='col-12' ><span className='gray mr-1 cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('phone1') }}>Phone 1: </span>{student.phone1} </div>
                        <div className='col-12 '><span className='gray mr-1 cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('phone2') }}>Phone 2: </span>{student.phone2}</div>
                        <div className='col-12 '><span className='mr-1 gray'>Status:  </span>{student.staus}</div>
                        <div className='col-12 '> <span className=' gray'>sign up date: </span> {student.creationDate.substring(0, 10)}</div>
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
                                                <td>{group.startDate.substring(0, 10)}</td>
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
                            <span className='gray mt-4 cursor-pointer'  onClick={() => { this.toggleUpdateIteamModal('terms') }}> Terms</span>
                            <br /><span className='ml-1'>{student.terms}</span>
                        </div>

                        <div className='col-12'>
                            <span className='gray cursor-pointer' onClick={() => { this.toggleUpdateIteamModal('remarks') }}> Remarks</span>
                            <br /><span className='ml-1' >{student.remarks}</span>
                        </div>

                    </div>




                    {/* update iteam modal */}
                    <Modal isOpen={this.state.updateIteamModal} toggle={this.toggleUpdateIteamModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleUpdateIteamModal}> {'update ' + this.state.updateFieldName} </ModalHeader>
                        <ModalBody>
                            <div className=''>
                                <Input type={this.state.fieldType} onChange={(e) => { this.handleNewFieldValue(e) }} name="select" >
                                    <option>select...</option>
                                    {
                                        settings.groupTime && settings.groupTime.map((label) => (
                                            <option key={label} type="option" className="list-group-item list-group-item-action">{label}</option>
                                        ))
                                    }
                                </Input>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={(event) => { this.toggleUpdateIteamModal(event); this.handleUpdateStudentValue(student.id) }}>Updatet</Button>{' '}
                            <Button color="secondary" onClick={this.toggleUpdateIteamModal} >Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </div>
        );
    }
}


function mapStateToProps({ students, groups, studentsGroups, settings }, props) {
    const activeGroups = Object.values(groups).filter((group) => (group.state !== 'Finish'))
    const id = props.match.params['id']
    const student = Object.values(students).filter((student) => (student.id == id))[0]

    let studentGroups = Object.values(studentsGroups).filter((link) => (link.studentId == student.id))

    studentGroups = studentGroups.map((group) => {
        return {
            ...group,
            ...Object.values(groups).filter((groupInfo) => (group.groupId == groupInfo.id))[0]
        }
    })

    console.log('studentGroups filters', studentGroups)
    return {
        student,
        students,
        studentGroups,
        activeGroups,
        settings,
    }
}

export default connect(mapStateToProps)(StudentPage);
