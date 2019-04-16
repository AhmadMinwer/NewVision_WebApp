import React, { Component } from 'react'
// import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';


class GroupFilters extends Component {
    state = {
        showFilters: false,
    }

    toggleShowFilters = () => {
        this.setState((state) => {
            return { showFilters: !state.showFilters };
        });
    }
    render() {
        const settings = this.props.settings
        const groups = Object.values(this.props.groups)
        return (
            <div>

                <SlideToggle collapsed >
                    {({ onToggle, setCollapsibleElement }) => (
                        // Add CSS: .my-collapsible__content { overflow: hidden;}
                        <div>
                            <div className=" shadow container bg-info text-light mt-4 mb-0  filters-header my-collapsible">
                                <h3 className="py-2 mb-0 text-light float-left">Group Filters</h3>

                                {
                                    this.state.showFilters ? <FaTimes className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                        : <FaChevronDown className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                }
                            </div>
                            <div className=" shadow container mb-4  bg-gray my-collapsible__content" ref={setCollapsibleElement}>
                                <Form className="py-4">
                                    <div className="col-12  row mx-0 px-0">
                                        <div className="col-8 col-lg-6  mb-2">
                                            <Label >Name</Label>
                                            <Input type="text" name="group_name" id="group_name" placeholder="Name" />
                                        </div>
                                        <div className="col-4 col-lg-2  mb-2">
                                            <Label >ID</Label>
                                            <Input type="text" name="group_id" id="group_id" placeholder="ID" />
                                        </div>


                                        <FormGroup className="col-6 col-lg-2  ">
                                            <Label for="exampleSelect">Status</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                            <option selected>Select...</option>
                                                {
                                                    settings.groupStatus ? settings.groupStatus.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-6 col-lg-2">
                                            <Label for="exampleSelect">level</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                            <option selected>Select...</option>
                                                {
                                                    settings.groupLevel ? settings.groupLevel.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="col-12 col-sm-4 my-2 ">
                                            <Label for="exampleSelect">timing</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                            <option selected>Select...</option>
                                                {
                                                    settings.groupTime ? settings.groupTime.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-12 col-sm-4 my-2 ">
                                            <Label for="exampleSelect">Teacher</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                            <option selected>Select...</option>
                                                {
                                                    settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">start date</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="group_tn" />
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="group_tn" />
                                        </div>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">finish date</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="group_tn" />
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="group_tn" />
                                        </div>




                                    </div>

                                    <Button className="ml-3 mt-2">Submit</Button>
                                    <Button className="ml-3 mt-2 ">Clear All</Button>

                                </Form>
                            </div>
                        </div>)}
                </SlideToggle>
            </div>
        );
    }
}



function mapStateToProps({ settings, groups }) {

    return {
        settings,
        groups
    }
}

export default connect(mapStateToProps)(GroupFilters);
