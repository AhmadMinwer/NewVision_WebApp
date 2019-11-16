import React, { Component } from 'react'
import { handleAddStudent } from '../actions/students'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';



class NewStudent extends Component {
    // (todayDate+"").substring(4,15).replace(/ /g, "-")
    state = {
        name: '',
        CPAID: '',
        phone: '',
        phone2: '',
        specialty: '',
        remarks: '',
        terms: '',
        creationDate: '',
    }

    componentDidMount() {
        const todayDate = new Date()
        this.setState({
            creationDate: (todayDate + "").substring(4, 15).replace(/ /g, "-")
        })
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onCPAIDChange(e) {
        this.setState({
            CPAID: e.target.value,
        });
    }

    onPhoneChange(e) {
        const value = e.target.value
        if ((!isNaN(parseInt(value.charAt(value.length - 1), 10)) && value.length<=10) || value === '')
            this.setState({
                phone: e.target.value,
            });
    }

    onPhone2Change(e) {
        const value = e.target.value
        if ((!isNaN(parseInt(value.charAt(value.length - 1), 10)) && value.length<=10) || value === '')
            this.setState({
                phone2: e.target.value,
            });
    }

    onSpecialtyChange(e) {
        this.setState({
            specialty: e.target.value === 'Select...' ? '' : e.target.value,
        });
    }

    onRemarksChange(e) {
        this.setState({
            remarks: e.target.value,
        });
    }

    onTermsChange(e) {
        this.setState({
            terms: e.target.value,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { name, CPAID, phone, phone2, specialty, remarks, terms, creationDate } = this.state
        const { dispatch } = this.props

        const student = await dispatch(handleAddStudent({ name, CPAID, phone, phone2, specialty, remarks, terms, creationDate }))
        
        this.setState(() => ({
            name: '',
            CPAID: '',
            phone: '',
            phone2: '',
            specialty: '',
            remarks: '',
            terms: '',
        }))

        window.location.pathname = `/students/`;
        //this.props.history.push('/students/id'+student.id)
    }




    render() {
        const settings = this.props.settings

        return (
            <div>
                <div>
                    <div className="shadow container bg-success text-light mt-4 mb-0  filters-header ">
                        <h3 className="py-2 mb-0 text-light float-left">Add Student</h3>

                    </div>
                    <div className="shadow container mb-4  bg-gray " >
                        <Form className="py-4">
                            <div className="col-12  row mx-0 px-0">
                                <div className="col-12 col-sm-12 col-lg-4 mb-2">
                                    <Label >Name</Label>
                                    <Input type="text" name="student_name" id="student_name" value={this.state.name} onChange={(e) => this.onNameChange(e)} />
                                </div>

                                <div className="col-6 col-sm-6 col-lg-4 mb-2">
                                    <Label >CPA ID</Label>
                                    <Input type="text" name="student_cpa" id="student_cpa" value={this.state.CPAID} onChange={(e) => this.onCPAIDChange(e)} />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-2 row ml-1">
                                    <Label className="col-12 px-0" >Phones</Label>
                                    <Input className="col-5" type="text" name="student_tn" id="student_tn" value={this.state.phone} onChange={(e) => this.onPhoneChange(e)} />
                                    <Input className="col-5 ml-2" type="text" name="student_tn" id="student_tn" value={this.state.phone2} onChange={(e) => this.onPhone2Change(e)} />
                                </div>

                                <div className="col-6 col-lg-3 my-2 col-lg-3 row ml-1">
                                    <Label className="col-12 pl-0" >Sign up date</Label>
                                    <span className='bg-gray p-2'>{this.state.creationDate}</span>
                                </div>

                                <FormGroup className="col-6 col-lg-3 my-2 col-lg-3 ">
                                    <Label >specialty</Label>
                                    <Input type="select" name="select" id='specialty' value={this.state.specialty} onChange={(e) => this.onSpecialtyChange(e)}>
                                        <option defaultValue vlaue='' key='0'>Select...</option>
                                        {
                                            settings.studentSpecialty ? settings.studentSpecialty.map((label) => (
                                                <option key={label}>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                </FormGroup>

                                <div className="col-12  mb-2 row">
                                    <FormGroup className="col-12 col-md-6  my-2">
                                        <Label >Remarks</Label>
                                        <Input id='remarks' type="textarea" name="select" vlaue={this.state.remarks} onChange={(e) => this.onRemarksChange(e)} />

                                    </FormGroup>
                                </div>

                                <div className="col-12  mb-2 row">
                                    <FormGroup className="col-12 col-md-6  my-2">
                                        <Label >Terms</Label>
                                        <Input id='terms' type="textarea" name="select" value={this.state.terms} onChange={(e) => this.onTermsChange(e)} />

                                    </FormGroup>
                                </div>

                            </div>

                            <Button className="ml-3 mt-2" onClick={(e) => this.handleSubmit(e)}>Add</Button>
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

export default connect(mapStateToProps)(NewStudent);
