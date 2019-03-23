import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";

class StudentsFilters extends Component {
    state = {
        showFilters: true,
    }

    toggleShowFilters = () => {
        this.setState((state) => {
            return { showFilters: !state.showFilters };
        });
    }
    render() {
        return (
            <div>

                <SlideToggle>
                    {({ onToggle, setCollapsibleElement }) => (
                        // Add CSS: .my-collapsible__content { overflow: hidden;}
                        <div>
                            <div className="container bg-info text-light mt-4 mb-0  filters-header my-collapsible">
                                <h3 className="py-2 mb-0 text-light float-left">Students Filters</h3>

                                {this.state.showFilters ? <FaTimes className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                    : <FaChevronDown className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                }
                            </div>
                            <div className="container mb-4 py-4  bg-gray my-collapsible__content" ref={setCollapsibleElement}>
                                <Form className="">
                                    <div className="col-12  row mx-0 px-0">
                                        <div className="col-12 col-sm-12 col-lg-4 mb-2">
                                            <Input type="text" name="student_name" id="student_name" placeholder="Name" />
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="text" name="student_id" id="student_id" placeholder="ID" />
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="text" name="student_cpa" id="student_cpa" placeholder="CPA" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                            <Input type="text" name="student_tn" id="student_tn" placeholder="Phone" />
                                        </div>


                                        <FormGroup className="col-12 col-lg-6  my-2 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">CPA Balance</Label>
                                            <Input className="col-5  " type="text" name="select" id="exampleSelect" placeholder="From" />
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5 " type="text" name="select" id="exampleSelect" placeholder="To" />
                                        </FormGroup>

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


                                        <div className="col-12 col-sm-6 my-2 col-lg-3 ">
                                            <Label for="exampleSelect">Sign up date</Label>
                                            <Input type="date" name="student_tn" id="student_tn" />
                                        </div>
                                        <div className="col-12 my-2 col-sm-6 col-lg-3">
                                            <Label for="exampleSelect">last date at <Badge className="newvision-color">NewVision</Badge></Label>
                                            <Input type="date" name="student_tn" id="student_tn" />
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
                                                <option>Both Cases</option>
                                                <option>received</option>
                                                <option>Not yet</option>
                                            </Input>
                                        </FormGroup>


                                    </div>

                                    <Button className="ml-3 mt-2">Submit</Button>
                                    <Button className="ml-3 mt-2">Save Query</Button>
                                    <Button className="ml-3 mt-2">Add to Saved Query</Button>
                                    <Button className="ml-3 mt-2">Apply Query</Button>
                                    <Button className="ml-3 mt-2">Clear All</Button>

                                </Form>
                            </div>
                        </div>)}
                </SlideToggle>
            </div>
        );
    }
}

export default StudentsFilters;
