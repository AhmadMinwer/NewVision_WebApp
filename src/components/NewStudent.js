import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


class NewStudent extends Component {

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
                                    <Input type="text" name="student_name" id="student_name" placeholder="Name" />
                                </div>

                                <div className="col-6 col-sm-6 col-lg-4 mb-2">
                                    <Label >CPA ID</Label>
                                    <Input type="text" name="student_cpa" id="student_cpa" placeholder="CPA" />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-2 row ml-1">
                                    <Label className="col-12 px-0" >Phones</Label>
                                    <Input className="col-5" type="text" name="student_tn" id="student_tn" placeholder="Phone" />
                                    <Input className="col-5 ml-2" type="text" name="student_tn" id="student_tn" placeholder="Phone 2" />
                                </div>

                                <div className="col-6 col-lg-3 my-2 col-lg-3 row ml-1">
                                    <Label className="col-12 pl-0" >Sign up date</Label>
                                    <Input className="col-12" type="date" name="student_tn" id="student_tn" disabled />
                                </div>

                                <FormGroup className="col-6 col-lg-3 my-2 col-lg-3 ">
                                    <Label >specialty</Label>
                                    <Input type="select" name="select">
                                        <option selected>Select...</option>
                                        {
                                            settings.studentSpecialty ? settings.studentSpecialty.map((label) => (
                                                <option>{label}</option>
                                            ))
                                                : ''
                                        }
                                    </Input>
                                </FormGroup>

                                <div className="col-12  mb-2 row">
                                    <FormGroup className="col-12 col-md-6  my-2">
                                        <Label >Remarks</Label>
                                        <Input type="textarea" name="select" />

                                    </FormGroup>
                                </div>

                                <div className="col-12  mb-2 row">
                                    <FormGroup className="col-12 col-md-6  my-2">
                                        <Label >Terms</Label>
                                        <Input type="textarea" name="select" />

                                    </FormGroup>
                                </div>

                            </div>

                            <Button className="ml-3 mt-2">Add</Button>
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
