import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { handleFetchStudents } from '../actions/students'
import { handleAddStudentGroup, handleRemoveStudentGroup } from '../actions/studentsGroups'




class GroupPage extends Component {

    state = {

        addStudentFiltersResults: [],

        filtersId: '',
        filtersName: '',
        filtersPhone: '',
        filtersDate: '',
        itemOnActionId: -1,
    }

    componentDidMount() {

        this.setState({
            addStudentFiltersResults: [],
            filtersId: '',
            filtersName: '',
            filtersPhone: '',
            filtersDate: '',
            itemOnActionId:-1,
        })
    }
    
    setItemOnActionId(id) {
        this.setState({
            itemOnActionId: id,
        })
    }


    handleAddStudent(studentId) {

        const data = {
            groupId: this.props.group.id,
            studentId,
            status: this.props.group.status,
            mark1: '',
            mark2: '',
            mark3: '',
            certification: '',
        }

        this.props.dispatch(handleAddStudentGroup(data))
    }

    submitRemoveStudentGroup(id){
        const data = {
            studentId: this.state.itemOnActionId,
            groupId: this.props.group.id,
        }
        this.props.dispatch(handleRemoveStudentGroup(data))
        this.setState({ itemOnActionId: -1})
    }


    onFiltersIdChange(e) {
        this.setState({
            filtersId: e.target.value,
        });
    }

    onFiltersNameChange(e) {
        this.setState({
            filtersName: e.target.value,
        })
    }


    onFiltersPhoneChange(e) {
        const value = e.target.value
        if ((!isNaN(parseInt(value.charAt(value.length - 1), 10)) && value.length <= 10) || value === '')
            this.setState({
                filtersPhone: e.target.value,
            });
    }

    onFiltersDateChange(e) {
        this.setState({
            filtersDate: e.target.value,
        });
    }

    submitFilters = async (e) => {
        e.preventDefault()

        console.log('filters state', this.state)

        const { filtersId, filtersName, filtersPhone, filtersDate } = this.state
        const { dispatch } = this.props

        const results = await dispatch(handleFetchStudents({ filtersId, filtersName, filtersPhone, filtersDate, filtersGroupId: this.props.group.id }))

        this.setState({
            addStudentFiltersResults: results
        })

    }



    redircetToAttendance = (id) => {
        this.props.history.push('/groups/attendance/' + id)
    }
    redircetToMarks = (id) => {
        this.props.history.push('/groups/marks/' + id)
    }

    //modals functions
    constructor(props) {
        super(props);
        this.state = {
            groupNameModal: false,
            groupLevelModal: false,
            groupTimeModal: false,
            groupStatusModal: false,
            groupTeachersModal: false,
            groupEndDateModal: false,
            groupStartDateModal: false,
            groupLessonsModal: false,
            groupRemarksModal: false,
            groupEditSudentModal: false,
            groupAddStudentModal: false,
            groupRemoveModal: false,
            // itemOnActionId: -1,
            addStudentFiltersResults: [],
        };

        this.toggleGroupNameModal = this.toggleGroupNameModal.bind(this)
        this.toggleGroupLevelModal = this.toggleGroupLevelModal.bind(this)
        this.toggleGroupTimeModal = this.toggleGroupTimeModal.bind(this)
        this.toggleGroupStatusModal = this.toggleGroupStatusModal.bind(this)
        this.toggleGroupTeachersModal = this.toggleGroupTeachersModal.bind(this)
        this.toggleGroupEndDateModal = this.toggleGroupEndDateModal.bind(this)
        this.toggleGroupStartDateModal = this.toggleGroupStartDateModal.bind(this)
        this.toggleGroupLessonsModal = this.toggleGroupLessonsModal.bind(this)
        this.toggleGroupRemarksModal = this.toggleGroupRemarksModal.bind(this)
        this.toggleEditStudentModal = this.toggleEditStudentModal.bind(this)
        this.toggleAddStudentModal = this.toggleAddStudentModal.bind(this)
        this.toggleGroupRemoveModal = this.toggleGroupRemoveModal.bind(this)



    }

    toggleGroupNameModal() {
        this.setState(prevState => ({
            groupNameModal: !prevState.groupNameModal
        }));
    }

    toggleGroupLevelModal() {
        this.setState(prevState => ({
            groupLevelModal: !prevState.groupLevelModal
        }));
    }

    toggleGroupTimeModal() {
        this.setState(prevState => ({
            groupTimeModal: !prevState.groupTimeModal
        }));
    }

    toggleGroupStatusModal() {
        this.setState(prevState => ({
            groupStatusModal: !prevState.groupStatusModal
        }));
    }

    toggleGroupTeachersModal() {
        this.setState(prevState => ({
            groupTeachersModal: !prevState.groupTeachersModal
        }));
    }

    toggleGroupEndDateModal() {
        this.setState(prevState => ({
            groupEndDateModal: !prevState.groupEndDateModal
        }));
    }

    toggleGroupStartDateModal() {
        this.setState(prevState => ({
            groupStartDateModal: !prevState.groupStartDateModal
        }));
    }

    toggleGroupLessonsModal() {
        this.setState(prevState => ({
            groupLessonsModal: !prevState.groupLessonsModal
        }));
    }

    toggleGroupRemarksModal() {
        this.setState(prevState => ({
            groupRemarksModal: !prevState.groupRemarksModal
        }));
    }

    toggleEditStudentModal(id) {
        console.log('in toggleEditStudentModal and no id')

        this.setState(prevState => ({
            groupEditStudentModal: !prevState.groupEditStudentModal,
            // itemOnActionId: id,
        }));
    }



    toggleGroupRemoveModal(id) {
        console.log('in toggleGroupRemoveModal and id ==== ', id)
        this.setState(prevState => ({
            groupRemoveModal: !prevState.groupRemoveModal,
            // itemOnActionId: id,
        }));
    }


    toggleAddStudentModal() {

        this.setState(prevState => ({
            groupAddStudentModal: !prevState.groupAddStudentModal,
            filtersName: '',
            filtersId: '',
            filtersDate: '',
            filtersPhone: '',
        }));
    }

    //end of modals functions

    render() {
        let group
        let students
        const settings = this.props.settings

        if (this.props.group) {
            group = this.props.group
            students = this.props.groupStudents
            console.log('students within group! => ', students)
        } else {
            group = {}
            students = {}
        }
        return (
            <div className='group-page container my-4 py-4 shadow'>
                <h3 className='col-12 '>{group.name} </h3>
                <hr className=' col-11' />

                <br />
                <div className='row  margin-top-7'>
                    <div className='col-2'><span className='gray'>ID: </span>  <span className='ml-1'>{group.id}</span></div>
                    <div className='col-4'><span className='gray cursor-pointer ' onClick={this.toggleGroupNameModal}>Name: </span> <span className='ml-1'>{group.name}</span></div>
                    <div className='col-6'>
                        <Button className='float-right bg-success' onClick={() => this.redircetToAttendance(group.id)}>Attendence</Button>
                        <Button className='float-right mr-1 bg-success' onClick={() => this.redircetToMarks(group.id)} >marks</Button>
                    </div>
                    <div className='col-3'><span className='gray cursor-pointer' onClick={this.toggleGroupLevelModal}>Level: </span> <span className='ml-1'>{group.level}</span></div>
                    <div className='col-9 col-md-3'><span className='gray cursor-pointer' onClick={this.toggleGroupTimeModal}>Time: </span><span className='ml-1'>{group.time}</span></div>
                    <div className='col-4'>
                        <span className='gray cursor-pointer' onClick={this.toggleGroupStatusModal}>Status:</span> <span className='ml-1'>{group.status}</span>

                        {/* <Input className='form-control-sm' type="select" name="select" id="exampleSelect">
                            {
                                settings.groupStatus ? settings.groupStatus.map((label) => (
                                    group.status == label ? <option selected>{label}</option> : <option>{label}</option>

                                ))
                                    : ''
                            }
                        </Input> */}
                    </div>
                    <div className='col-12'>
                        <span className='gray cursor-pointer' onClick={this.toggleGroupTeachersModal}>Teachers:</span> <span className='ml-1'>{group.teacher}, {group.teacher2}</span>
                        {/* <Input type="select" name="select" multiple >
                            {
                                settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                    group.teacher == label || group.teacher2 == label ? <option selected>{label}</option> : <option>{label}</option>
                                ))
                                    : ''
                            }
                        </Input> */}
                    </div>
                    <div className='col-12 col-md-3'> <span className='gray cursor-pointer' onClick={this.toggleGroupStartDateModal}>Starting date: </span>12 April 2015 </div>
                    <div className='col-12 col-md-9'><span className='gray cursor-pointer' onClick={this.toggleGroupEndDateModal}>Finishing date: </span>{group.endDate}</div>
                    <div className='col-6'><span className='gray' onClick={this.toggleGroupLessonsModal}>Lessons: </span> <span className='ml-1'>{group.accumulatedLessons ? Object.values(group.accumulatedLessons).length : ''}/{group.commitLessons}</span></div>



                    <div className='col-12 mt-4 scrollabel-container'>
                        <h4>Students</h4>
                        <Table className='text-center' hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    {/* <th>date</th> */}
                                    {/* <th>AVG marks</th> */}
                                    <th>certification</th>
                                    <th>Attendence</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Object.values(students).map((student) => (
                                        <tr key={student.id}>
                                            <th scope='row' key={student.id}> <Link to={'/students/id' + student.id}>{student.id}</Link></th>
                                            <td>{student.name}</td>
                                            <td>{student.status}</td>
                                            {/* <td>date</td> */}
                                            {/* <td>{this.getAvgMarks(student.mark1, student.mark2, student.mark3)}</td> */}
                                            <td>{student.certificationState}</td>
                                            <td></td>
                                            {/* <td>{Object.values(student.attendance).filter((day) => day.attended).length}/{group.accumulatedLessons ? Object.values(group.accumulatedLessons).length : ''}</td> */}
                                            <td>
                                                <Button className='bg-primary' onClick={(event) => { this.setItemOnActionId(student.id); this.toggleEditStudentModal(student.id); }} >Edit</Button>
                                                <Button className='ml-1 bg-danger' onClick={(event) => {this.setItemOnActionId(student.id); this.toggleGroupRemoveModal(student.id); }} >Remove</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>

                    <div className='col-6'>
                        <Button className='float-right bg-success' onClick={(event) => { this.toggleAddStudentModal(); }}>add Student</Button>
                    </div>
                    <div className='col-12 mt-4'>
                        <span className='gray cursor-pointer' onClick={this.toggleGroupRemarksModal}> Remarks</span>
                        <span className='ml-1'>{group.remarks}</span>
                        <br />

                    </div>

                </div>


                {/* modals code */}

                {/* update group name modal */}
                <Modal isOpen={this.state.groupNameModal} toggle={this.toggleGroupNameModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupNameModal}>update group name</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input className='' type="text" name="student_tn" id="student_tn" placeholder="new group name" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupNameModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupNameModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group level modal */}
                <Modal isOpen={this.state.groupLevelModal} toggle={this.toggleGroupLevelModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupLevelModal}>update group level</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            {
                                settings.groupLevel ? settings.groupLevel.map((label) => (
                                    <button key={label} type="select" className="list-group-item list-group-item-action">{label}</button>
                                ))
                                    : ''
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupLevelModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupLevelModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group time modal */}
                <Modal isOpen={this.state.groupTimeModal} toggle={this.toggleGroupTimeModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupTimeModal}>update group Time</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            {
                                settings.groupTime ? settings.groupTime.map((label) => (
                                    <button key={label} type="button" className="list-group-item list-group-item-action">{label}</button>
                                ))
                                    : ''
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupTimeModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupTimeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Status modal */}
                <Modal isOpen={this.state.groupStatusModal} toggle={this.toggleGroupStatusModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupStatusModal}>update group Status</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            {
                                settings.groupStatus ? settings.groupStatus.map((label) => (
                                    <button key={label} type="button" className="list-group-item list-group-item-action">{label}</button>
                                ))
                                    : ''
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupStatusModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupStatusModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Teachers modal */}
                <Modal isOpen={this.state.groupTeachersModal} toggle={this.toggleGroupTeachersModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupTeachersModal}>update group Teachers</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input type="select" name="select" multiple >
                                {
                                    settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                        <option key={label} >{label}</option>
                                    ))
                                        : ''
                                }
                            </Input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupTeachersModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupTeachersModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group EndDate modal */}
                <Modal isOpen={this.state.groupEndDateModal} toggle={this.toggleGroupEndDateModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupEndDateModal}>update group EndDate</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input className="col-12" type="date" name="student_tn" id="student_tn" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupEndDateModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupEndDateModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Start Date modal */}
                <Modal isOpen={this.state.groupStartDateModal} toggle={this.toggleGroupStartDateModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupStartDateModal}>update group StartDate</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input className="col-12" type="date" name="student_tn" id="student_tn" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupStartDateModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupStartDateModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Lessons modal */}
                <Modal isOpen={this.state.groupLessonsModal} toggle={this.toggleGroupLessonsModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupLessonsModal}>update group Lessons</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input className='' type="text" name="student_tn" id="student_tn" placeholder="new group Lessons" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupLessonsModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupLessonsModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Remarks modal */}
                <Modal isOpen={this.state.groupRemarksModal} toggle={this.toggleGroupRemarksModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleGroupRemarksModal}>update group Remarks</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Input className='' type="textarea" rows='5' name="student_tn" id="student_tn" placeholder="new group Remarks" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleGroupRemarksModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupRemarksModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* update group Remove student modal */}
                <Modal isOpen={this.state.groupRemoveModal} toggle={this.toggleGroupRemoveModal} className={this.props.className}>
                    {console.log('inside groupRemoveModal')}
                    <ModalHeader toggle={this.toggleGroupRemoveModal}>Remove Student</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <p>Do you really want to remove this student from the current group?</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>{  this.toggleGroupRemoveModal(); this.submitRemoveStudentGroup(); }}>Remove</Button>{' '}
                        <Button color="secondary" onClick={this.toggleGroupRemoveModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>




                {/* update group Edit Student modal */}
                <Modal isOpen={this.state.groupEditStudentModal} toggle={this.toggleEditStudentModal} className={this.props.className}>
                {console.log('inside edit group modal!!!!              111')}
                    <ModalHeader toggle={this.toggleEditStudentModal}>update group EditStudent</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <Label >Student Status</Label>
                            <Input type="select" name="select">
                                <option defaultValue>Select...</option>
                                {   console.log('inside studentGroup edit modal & itemOnActionId=', this.state.itemOnActionId)   }
                                {
                                    // studentStatus = 
                                    settings.studentStatus && this.state.itemOnActionId && this.state.itemOnActionId !== -1 && settings.studentStatus.map((label) => (
                                        Object.values(this.props.groupStudents).filter((link)=> link.studentId === this.state.itemOnActionId)[0].status === label.toLowerCase() ? <option defaultValue>{label}</option> : <option>{label}</option>
                                    ))
                                        
                                }
                            </Input>

                            <Label className='mt-4'>Certification Status</Label>
                            <Input type="select" name="select">
                                <option defaultValue>Select...</option>
                                {
                                    // settings.certificationStatus && this.state.itemOnActionId !== -1 && settings.certificationStatus.map((label) => (
                                    //     Object.values(Object.values(students)[this.state.itemOnActionId].groups[group.id])[5] === label ? <option defaultValue>{label}</option> : <option>{label}</option>
                                    // ))
                                        
                                }
                            </Input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleEditStudentModal}>Updatet</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditStudentModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>





                {/* update group Add Student modal */}
                <Modal isOpen={this.state.groupAddStudentModal} toggle={this.toggleAddStudentModal} className={this.props.className + ' modal-lg'}>
                    <ModalHeader toggle={this.toggleAddStudentModal}>sign up new student</ModalHeader>
                    <ModalBody>
                        <div className=''>
                            <div className="col-12  row mx-0 px-0">
                                <div className="col-6 col-md-2 mb-2">
                                    <Input type="text" name="student_id" id="student_id" placeholder="ID" value={this.state.filtersId} onChange={(e) => { this.onFiltersIdChange(e) }} />
                                </div>

                                <div className="col-6 col-md-3 mb-2">
                                    <Input type="text" name="student_name" id="student_name" placeholder="Name" value={this.state.filtersName} onChange={(e) => { this.onFiltersNameChange(e) }} />
                                </div>

                                <div className="col-6 col-md-3 mb-2">
                                    <Input type="text" name="student_tn" id="student_tn" placeholder="Phone" value={this.state.filtersPhone} onChange={(e) => { this.onFiltersPhoneChange(e) }} />
                                </div>

                                <div className="col-6 col-md-4 mb-2">
                                    <Input type="date" name="student_cpa" id="student_cpa" placeholder="CPA" value={this.state.filtersDate} onChange={(e) => { this.onFiltersDateChange(e) }} />
                                </div>

                            </div>

                            <Button className=' col-2 center' color="success" onClick={this.submitFilters}>search</Button>
                            <p>select student who wants to sing up for the current group?</p>

                            <Table className='text-center' hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>phone</th>
                                        <th>signup date</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        this.state.addStudentFiltersResults && this.state.addStudentFiltersResults.length && this.state.addStudentFiltersResults.map((student) => (
                                            <tr key={student.id}>
                                                <th scope='row' key={student.id}> <Link to={'/students/id' + student.id}>{student.id}</Link></th>
                                                <td>{student.name}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.creationDate}</td>
                                                <td> <Button color="success" onClick={() => { this.toggleAddStudentModal(); this.handleAddStudent(student.id) }}  >Add</Button></td>
                                            </tr>
                                        ))

                                    }
                                </tbody>

                            </Table>
                        </div>
                    </ModalBody>
                </Modal>


            </div>
        );
    }
}


function mapStateToProps({ students, groups, settings, studentsGroups }, props) {

    const id = props.match.params['id']
    const group = Object.values(groups).filter((group) => (group.id == id))[0]

    let groupStudents = Object.values(studentsGroups).filter((student) => (student.groupId === group.id))


    groupStudents = groupStudents.map((student) => {

        const studentInfo = Object.values(students).filter((std) => (student.studentId == std.id))[0]

        return {
            ...studentInfo,
            ...student
        }
    })



    return {
        group,
        groupStudents,
        settings,
    }
}


export default connect(mapStateToProps)(GroupPage);
