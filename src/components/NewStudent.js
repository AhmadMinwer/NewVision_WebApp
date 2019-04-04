import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


class NewStudent extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className="container bg-success text-light mt-4 mb-0  filters-header ">
                        <h3 className="py-2 mb-0 text-light float-left">Add Student</h3>

                    </div>
                    <div className="container mb-4  bg-gray " >
                        <Form className="py-4">
                            <div className="col-12  row mx-0 px-0">
                                <div className="col-12 col-sm-12 col-lg-4 mb-2">
                                    <Label for="exampleSelect">Name</Label>
                                    <Input type="text" name="student_name" id="student_name" placeholder="Name" />
                                </div>

                                <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                    <Label for="exampleSelect">CPA ID</Label>
                                    <Input type="text" name="student_cpa" id="student_cpa" placeholder="CPA" />
                                </div>
                                <div className="col-12 col-sm-6 col-lg-4 mb-2 row">
                                    <Label className="col-12 px-0" for="exampleSelect">Phone</Label>
                                    <Input className="col-6" type="text" name="student_tn" id="student_tn" placeholder="Phone" />
                                    <Input className="col-6" type="text" name="student_tn" id="student_tn" placeholder="Phone 2" />
                                </div>

                                <FormGroup className="col-6 col-lg-3 ml-lg-2 my-2  ">
                                    <Label for="exampleSelect">Status</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Active</option>
                                        <option>finish</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="col-6 my-2 col-lg-3">
                                    <Label for="exampleSelect">Last level</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>א </option>
                                        <option>IT</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="col-12 col-lg-6  my-2 row ml-1">
                                    <Label className="col-12 pl-0" for="exampleSelect">CPA Balance</Label>
                                    <Input className="col-5  " type="text" name="select" id="exampleSelect" placeholder="From" />
                                    <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                    <Input className="col-5 " type="text" name="select" id="exampleSelect" placeholder="To" />
                                </FormGroup>

                                <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                    <Label className="col-12 pl-0" for="exampleSelect">Sign up date</Label>
                                    <Input className="col-5" type="date" name="student_tn" id="student_tn" />
                                </div>

                                <FormGroup className="col-12 col-sm-6 my-2 col-lg-3 ">
                                    <Label for="exampleSelect">specialty</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>medicine</option>
                                        <option>IT</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="col-12 col-sm-6 my-2 col-lg-3">
                                    <Label for="exampleSelect">Certificate Status</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>received</option>
                                        <option>Not yet</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="col-12 col-sm-6 my-2 col-lg-3">
                                    <Label for="exampleSelect">Group name</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>all</option>
                                        <option>received</option>
                                        <option>Not yet</option>
                                    </Input>
                                </FormGroup>

                            </div>

                            <Button className="ml-3 mt-2">Add</Button>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect()(NewStudent);
