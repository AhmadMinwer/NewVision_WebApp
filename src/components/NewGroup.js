import React, { Component } from 'react'
import { handleAddGroup } from '../actions/groups'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


class NewGroup extends Component {
    state = {
        name: '',
        startingDate:'',
        finishingDate: '',
        level: '',
        time: '',
        status:'potential',
        numberOfLessons: '',
        remarks: '',
        teacher1: '',
        teacher2: '',
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onStartingDateChange(e) {
        this.setState({
            startingDate: e.target.value,
        });
    }

    onFinishingDateChange(e) {
        this.setState({
            finishingDate: e.target.value,
        });
    }

    onLevelChange(e) {
        this.setState({
            level: e.target.value,
        });
    }

    onTimeChange(e) {
        this.setState({
            time: e.target.value,
        });
    }

    onNumberOfLessonsChange(e) {
        this.setState({
            numberOfLessons : e.target.value,
        });
    }

    onRemarksChange(e) {
        this.setState({
            remarks: e.target.value,
        });
    }

    onTeacher1Change(e) {
        this.setState({
            teacher1:  e.target.value === 'Select...' ? '' : e.target.value,
        });
    }

    onTeacher2Change(e) {
        this.setState({
            teacher2:  e.target.value === 'Select...' ? '' : e.target.value,
        });
    }

    
    handleSubmit = async (e) => {
        e.preventDefault()

        const { name, startingDate, finishingDate, level, time, status, numberOfLessons, remarks, teacher1, teacher2} = this.state
        const { dispatch } = this.props

        const group = await dispatch(handleAddGroup({  name, startingDate, finishingDate, level, time, status, numberOfLessons, remarks, teacher1, teacher2 }))

        this.setState(() => ({
            name: '',
            startingDate:'',
            finishingDate: '',
            level: '',
            time: '',
            numberOfLessons: '',
            remarks: '',
            teacher1: '',
            teacher2: '',
        }))

        // console.log('group from handleAddGroupAPI return', group)
        this.props.history.push('/groups/id'+group.id)
    }


    render() {
        const settings = this.props.settings
        return (
            <div>
                <div>
                    <div className="shadow container bg-success text-light mt-4 mb-0  filters-header ">
                        <h3 className="py-2 mb-0 text-light float-left">Add Group</h3>

                    </div>
                    <div className="shadow container mb-4  bg-gray " >
                        <Form className="py-4">
                            <div className="col-12  row mx-0 px-0">
                                <div className="col-12 col-sm-12 col-lg-6 mt-3 ">
                                    <Label >Name</Label>
                                    <Input type="text" name="groupName" id="groupName" placeholder="Name" value={this.state.name} onChange={(e) => {this.onNameChange(e)}} />
                                </div>

                               

                                <div className="col-6 col-lg-3 col-lg-3 row ml-1 mt-3">
                                    <Label className="col-12 pl-0 " >Starting date</Label>
                                    <Input className="col-12" type="date" name="startingDate" id="startingDate" value={this.state.startingDate} onChange={(e) => {this.onStartingDateChange(e)}} />
                                </div>

                                <div className="col-6 col-lg-3  col-lg-3 row ml-1 mt-3">
                                    <Label className="col-12 pl-0" >Finishing date</Label>
                                    <Input className="col-12" type="date" name="finishingDate" id="finishingDate" value={this.state.finishingDate} onChange={(e) => {this.onFinishingDateChange(e)}} />
                                </div>

                                <FormGroup className="col-12 col-md-4 mt-3">
                                    <Label >Teachers</Label>
                                    <Input type="select" name="select" value={this.state.teacher1} onChange={(e) => {this.onTeacher1Change(e)}}>
                                        <option key='0' value=''> select...</option>
                                        {
                                            settings.groupTeacher ? settings.groupTeacher.filter(teacher => teacher !== this.state.teacher2).map((label) => (
                                                <option key={label}>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                    <Input type="select" className='mt-3' name="select" value={this.state.teacher2} onChange={(e) => {this.onTeacher2Change(e)}}>
                                        <option key='0' value=''> select...</option> 
                                        {
                                            settings.groupTeacher ? settings.groupTeacher.filter(teacher => teacher !== this.state.teacher1).map((label) => (
                                                <option key={label}>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                </FormGroup>

                                 <FormGroup className="col-6 col-md-4 mt-3">
                                    <Label >Level</Label>
                                    <Input type="select" name="select" value={this.state.level} onChange={(e) => {this.onLevelChange(e)}}>
                                    <option defaultValue>Select...</option>
                                        {
                                            settings.groupLevel ? settings.groupLevel.map((label) => (
                                                <option key={label}>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                </FormGroup>


                                <FormGroup className="col-6 col-md-4 mt-3">
                                    <Label >Time</Label>
                                    <Input type="select" name="select" value={this.state.time} onChange={(e) => {this.onTimeChange(e)}}>
                                    <option defaultValue>Select...</option>
                                        {
                                            settings.groupTime ? settings.groupTime.map((label) => (
                                                <option key={label}>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                </FormGroup>

                                <div className="col-6 col-md-4 mt-3">
                                    <Label >Number of lessons</Label>
                                    <Input type="number" name="lessonsNumber" placeholder="Number Of Lessons" value={this.state.numberOfLessons} onChange={(e) => {this.onNumberOfLessonsChange(e)}} />
                                </div>
                                

                                <div className="col-12  mb-2 row ">
                                    <FormGroup className="col-12 col-md-6  mt-3 px-0 ml-3">
                                        <Label >Remarks</Label>
                                        <Input type="textarea" name="select" value={this.state.remarks}  onChange={(e) => {this.onRemarksChange(e)}}/>

                                    </FormGroup>
                                </div>


                            </div>

                            <Button className="ml-3 mt-2" onClick={(e) => {this.handleSubmit(e)}}>Add</Button>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps({ settings }) {

    return {
        settings,
    }
}
export default connect(mapStateToProps)(NewGroup);
