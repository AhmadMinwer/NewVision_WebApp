import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import { receiveStudents, handleFetchStudents } from '../actions/students'
// import { fetchStudentAPI } from '../utils/APIs' 


class StudentsFilters extends Component {
    state = {
        showFilters: false,


        searchFilters: {
            name: '',
            id: '',
            cpa: '',
            phone: '',
            status: '',
            lastLevel: '',
            cpaBalanceFrom: '',
            cpaBalanceTo: '',
            signupFrom: '',
            signupTo: '',
            lastDateFrom: '',
            lastDateTo: '',
            specialty: '',
        }
    }

    toggleShowFilters = () => {
        this.setState((state) => {
            return { showFilters: !state.showFilters };
        });
    }

    handleChange = (event) => {
        const field = event.target.id;
        let value = event.target.value;

        if( value === 'Select...' || value=== 'select...')
            value=''

        let newFilter = this.state.searchFilters;
        newFilter[field] = value;

        this.setState({
            searchFilters: newFilter
        });
    }

    clearsearchFilterss = () => {

        const emptysearchFilters = {
            name: '',
            id: '',
            cpa: '',
            phone: '',
            status: '',
            lastLevel: '',
            cpaBalanceFrom: '',
            cpaBalanceTo: '',
            signupFrom: '',
            signupTo: '',
            lastDateFrom: '',
            lastDateTo: '',
            specialty: '',
            cStatus: '',
            groupName: '',
            groupLevel: ''
        };

        this.setState({ 
            searchFilters: emptysearchFilters 
        });
    }

    handleSearchStudents = async () =>{
        const { dispatch } = this.props
        console.log('handleSearchStudent has called',this.state.searchFilters)

        // const student = await dispatch(handleAddStudent({ name, CPAID, phone, phone2, specialty, remarks, terms, creationDate }))
        const filtersResults = await dispatch(handleFetchStudents(this.state.searchFilters))
        dispatch(receiveStudents(filtersResults))

        console.log('filtersResults', filtersResults)
    }


    render() {
        const settings = this.props.settings
        const groups = Object.values(this.props.groups)
        return (
            <div>
                {console.log('this.props.settings.studentStatus= ', settings)}
                <SlideToggle collapsed>
                    {({ onToggle, setCollapsibleElement }) => (
                        // Add CSS: .my-collapsible__content { overflow: hidden;}
                        <div>
                            <div className=" shadow container bg-info text-light mt-4 mb-0  filters-header my-collapsible">
                                <h3 className="py-2 mb-0 text-light float-left">Students Filters</h3>

                                {this.state.showFilters ? <FaTimes className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                    : <FaChevronDown className="filters-icon float-right my-collapsible__toggle" onClick={() => { onToggle(); this.toggleShowFilters(); }} />
                                }
                            </div>
                            <div className="shadow container mb-4  bg-gray my-collapsible__content" ref={setCollapsibleElement}>
                                <Form className="py-4">
                                    <div className="col-12  row mx-0 px-0">
                                        <div className="col-12 col-sm-12 col-lg-4 mb-2">
                                            <Input type="text" name="student_name" id="name" placeholder="Name" value={this.state.searchFilters.name} onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="number" name="student_id" id="id" placeholder="ID" value={this.state.searchFilters.id} onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="number" name="student_cpa" id="cpa" placeholder="CPA" value={this.state.searchFilters.cpa} onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                            <Input type="number" name="student_tn" id="phone" placeholder="Phone" value={this.state.searchFilters.phone} onChange={(e) => { this.handleChange(e) }} />
                                        </div>

                                        <FormGroup className="col-6 col-lg-3 ml-lg-2 my-2  ">
                                            <Label for="">Status</Label>

                                            {/* studentStatus: ['active', 'finish', 'freez','potential','register','quit'], */}
                                            <Input type="select" name="status" id="status" value={this.state.searchFilters.status} onChange={(e) => { this.handleChange(e) }}>
                                                <option defaultValue>active & potential</option>
                                                <option>active</option>
                                                <option>finish</option>
                                                <option>freez</option>
                                                <option>register</option>
                                                <option>quit</option>
                                                <option>all</option>


                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-6 my-2 col-lg-3">
                                            <Label for="">Last level</Label>
                                            <Input type="select" name="select" id="lastLevel" value={this.state.searchFilters.lastLevel} onChange={(e) => { this.handleChange(e) }}>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.groupLevel ? settings.groupLevel.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-12 col-lg-6  my-2 row ml-1">
                                            <Label className="col-12 pl-0" for="">CPA Balance</Label>
                                            <Input className="col-5  " type="text" id="cpaBalanceFrom" placeholder="From" value={this.state.searchFilters.cpaBalanceFrom} onChange={(e) => { this.handleChange(e) }} />
                                            <Label className="col-2  font-weight-bold text-center">_</Label>
                                            <Input className="col-5 " type="text" id="cpaBalanceTo" placeholder="To" value={this.state.searchFilters.cpaBalanceTo} onChange={(e) => { this.handleChange(e) }} />
                                        </FormGroup>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="">Sign up date</Label>
                                            <Input className="col-5" type="date" name="student_tn" id="signupFrom" value={this.state.searchFilters.signupFrom} onChange={(e) => { this.handleChange(e) }} />
                                            <Label className="col-2  font-weight-bold text-center" for="">_</Label>
                                            <Input className="col-5" type="date" name="student_tn" id="signupTo" value={this.state.searchFilters.signupTo} onChange={(e) => { this.handleChange(e) }} />
                                        </div>

                                        {/* <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="">last date at <Badge className="newvision-color">NewVision</Badge></Label>
                                            <Input className="col-5" type="date" name="student_tn" id="lastDateFrom" value={this.state.searchFilters.lastDateFrom} onChange={(e) => { this.handleChange(e) }} />
                                            <Label className="col-2  font-weight-bold text-center" for="">_</Label>
                                            <Input className="col-5" type="date" name="student_tn" id="lastDateTo" value={this.state.searchFilters.lastDateTo} onChange={(e) => { this.handleChange(e) }} />
                                        </div> */}

                                        <FormGroup className="col-12 col-sm-6 my-2 col-lg-3 ">
                                            <Label for="">specialty</Label>
                                            <Input type="text" name="student_specialty" id="specialty" placeholder="specialty" value={this.state.searchFilters.specialty} onChange={(e) => { this.handleChange(e) }} />
                                        </FormGroup>

                                    </div>

                                    <Button className="ml-3 mt-2" onClick={this.handleSearchStudents}>Search</Button>
                                    <Button className="ml-3 mt-2 float-right" onClick={this.clearsearchFilterss}>Clear All</Button>

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
export default connect(mapStateToProps)(StudentsFilters);
