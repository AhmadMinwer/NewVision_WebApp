import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import axios from 'axios';
import { receiveStudents } from '../actions/students';


class StudentsFilters extends Component {
    state = {
        showFilters: false,
        searchFilter : {
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
        }
    }

    toggleShowFilters = () => {
        this.setState((state) => {
            return { showFilters: !state.showFilters };
        });
    }

    search = () => {
        this.getData();
    }

    clear = () => {
        const searchFilter = {
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

        this.setState({ searchFilter }, () => this.getData());
    }

    getData = () => {

        const searchFilter = this.state.searchFilter;

        axios.post('http://localhost:9000/students/api/v1/students/filter', {
            "filters": {
                "studentName": searchFilter.name,
                "id": searchFilter.id ? Number(searchFilter.id) : "",
                "cpa": searchFilter.cpa,
                "status": searchFilter.status,
                "lastLevel": searchFilter.lastLevel,
                "signUpFrom": searchFilter.signupFrom,
                "signUpTo": searchFilter.signupTo,
                "lastAtFrom": searchFilter.lastDateFrom,
                "lastAtTo": searchFilter.lastDateTo,
                "specialty": searchFilter.specialty,
                "Certificate": searchFilter.cStatus,
                "groupName": searchFilter.groupName,
                "groupLevel": searchFilter.groupLevel,
                "balanceFrom": searchFilter.cpaBalanceFrom,
                "balanceTo": searchFilter.cpaBalanceTo
            }
        })
        .then(res =>  this.props.receiveStudents(res.data.results) )
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const field = event.target.id;
        const value = event.target.value;

        let newFilter = this.state.searchFilter;
        newFilter[field] = value; 

        this.setState({
            searchFilter: newFilter
        });
    }

    render() {
        const settings = this.props.settings
        const groups = Object.values(this.props.groups)
        return (
            <div>
                {/* {console.log('this.props.settings.studentStatus= ', settings)} */}
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
                                            <Input type="text" name="name" id="name" placeholder="Name"  value={ this.state.searchFilter.name } onChange={ this.handleChange }/>
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="text" name="id" id="id" placeholder="ID" value={ this.state.searchFilter.id } onChange={ this.handleChange }/>
                                        </div>
                                        <div className="col-6 col-sm-3 col-lg-2 mb-2">
                                            <Input type="text" name="cpa" id="cpa" placeholder="CPA" value={ this.state.searchFilter.cpa } onChange={ this.handleChange }/>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                            <Input type="text" name="phone" id="phone" placeholder="Phone" value={ this.state.searchFilter.phone } onChange={ this.handleChange }/>
                                        </div>

                                        <FormGroup className="col-6 col-lg-3 ml-lg-2 my-2  ">
                                            <Label for="exampleSelect">Status</Label>
                                            <Input type="select" name="status" id="status" value={ this.state.searchFilter.status } onChange={ this.handleChange }>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.studentStatus ? settings.studentStatus.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-6 my-2 col-lg-3">
                                            <Label for="exampleSelect">Last level</Label>
                                            <Input type="select" name="lastLevel" id="lastLevel" value={ this.state.searchFilter.lastLevel } onChange={ this.handleChange }>
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
                                            <Label className="col-12 pl-0" for="exampleSelect">CPA Balance</Label>
                                            <Input className="col-5  " type="text" name="cpaBalanceFrom" id="cpaBalanceFrom" placeholder="From" value={ this.state.searchFilter.cpaBalanceFrom } onChange={ this.handleChange }/>
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5 " type="text" name="cpaBalanceTo" id="cpaBalanceTo" placeholder="To" value={ this.state.searchFilter.cpaBalanceTo } onChange={ this.handleChange }/>
                                        </FormGroup>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">Sign up date</Label>
                                            <Input className="col-5" type="date" name="signupFrom" id="signupFrom" value={ this.state.searchFilter.signupFrom } onChange={ this.handleChange }/>
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="signupTo" id="signupTo" value={ this.state.searchFilter.signupTo } onChange={ this.handleChange }/>
                                        </div>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">last date at <Badge className="newvision-color">NewVision</Badge></Label>
                                            <Input className="col-5" type="date" name="lastDateFrom" id="lastDateFrom" value={ this.state.searchFilter.lastDateFrom } onChange={ this.handleChange }/>
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="lastDateTo" id="lastDateTo" value={ this.state.searchFilter.lastDateTo } onChange={ this.handleChange }/>
                                        </div>

                                        <FormGroup className="col-12 col-sm-6 my-2 col-lg-3 ">
                                            <Label for="exampleSelect">specialty</Label>
                                            <Input type="select" name="specialty" id="specialty" value={ this.state.searchFilter.specialty } onChange={ this.handleChange }>
                                            <option defaultValue>Select...</option>
                                                {
                                                    settings.studentSpecialty ? settings.studentSpecialty.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-12 col-sm-6 my-2 col-lg-3">
                                            <Label for="exampleSelect">Certificate Status</Label>
                                            <Input type="select" name="cStatus" id="cStatus" value={ this.state.searchFilter.cStatus } onChange={ this.handleChange }>
                                            <option defaultValue>Select...</option>
                                                {
                                                    settings.certificationStatus ? settings.certificationStatus.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-12 col-sm-6 my-2 col-lg-3">
                                            <Label for="exampleSelect">Group name</Label>
                                            <Input type="select" name="groupName" id="groupName" value={ this.state.searchFilter.groupName } onChange={ this.handleChange }>
                                            <option defaultValue>Select...</option>
                                                {
                                                    groups ? groups.map((group) => (
                                                        <option>{group.name}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="col-12 col-sm-6 my-2 col-lg-3">
                                            <Label for="exampleSelect">Group Level</Label>
                                            <Input type="select" name="groupLevel" id="groupLevel" value={ this.state.searchFilter.groupLevel } onChange={ this.handleChange }>
                                            <option defaultValue>Select...</option>
                                                {
                                                    settings.groupLevel ? settings.groupLevel.map((label) => (
                                                        <option>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <Button className="ml-3 mt-2" onClick={ this.search }>Submit</Button>
                                    <Button className="ml-3 mt-2 " onClick={ this.clear }>Clear All</Button>

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

const mapDispatchToProps = (dispatch) => {
    return {
        receiveStudents: (students) => { dispatch(receiveStudents(students)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsFilters);
