import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


class NewGroup extends Component {

    render() {
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
                                    <Input type="text" name="student_name" id="student_name" placeholder="Name" defaultValue="here :)" />
                                </div>

                               

                                <div className="col-6 col-lg-3 col-lg-3 row ml-1 mt-3">
                                    <Label className="col-12 pl-0 " >Starting date</Label>
                                    <Input className="col-12" type="date" name="student_tn" id="student_tn" />
                                </div>

                                <div className="col-6 col-lg-3  col-lg-3 row ml-1 mt-3">
                                    <Label className="col-12 pl-0" >Finishing date</Label>
                                    <Input className="col-12" type="date" name="student_tn" id="student_tn" />
                                </div>

                                <FormGroup className="col-12 col-md-4 mt-3">
                                    <Label >Teachers</Label>
                                    <Input type="select" name="select" multiple >
                                        <option>Teacher 1</option>
                                        <option>Teacher 2</option>
                                        <option>Teacher 1</option>
                                        <option>Teacher 2</option>
                                        <option>Teacher 1</option>
                                        <option>Teacher 2</option>
                                        <option>Teacher 1</option>
                                        <option>Teacher 2</option>
                                    </Input>
                                </FormGroup>

                                 <FormGroup className="col-6 col-md-4 mt-3">
                                    <Label >Level</Label>
                                    <Input type="select" name="select">
                                        <option>A</option>
                                        <option>B</option>
                                    </Input>
                                </FormGroup>

                                <div className="col-6 col-md-4 mt-3">
                                    <Label >Number of lessons</Label>
                                    <Input type="number" name="student_name" placeholder="Number Of Lessons" />
                                </div>

                                

                                <div className="col-12  mb-2 row ">
                                    <FormGroup className="col-12 col-md-6  mt-3 px-0 ml-3">
                                        <Label >Remarks</Label>
                                        <Input type="textarea" name="select"/>

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

export default connect()(NewGroup);
