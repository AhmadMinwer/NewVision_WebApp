import React, { Component } from 'react'
// import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import axios from 'axios';
import { receiveGroups } from '../actions/groups';
import { API } from '../config';

class GroupFilters extends Component {
    state = {
        showFilters: false,
        searchFilter: {
            name: '',
            id: '',
            status: '',
            level: '',
            timing: '',
            teacher: '',
            startDateFrom: '',
            startDateTo: '',
            endDateFrom: '',
            endDateTo: ''
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
            status: '',
            level: '',
            timing: '',
            teacher: '',
            startDateFrom: '',
            startDateTo: '',
            endDateFrom: '',
            endDateTo: ''
        };

        this.setState({ searchFilter }, () => this.getData() );
    }

    getData = () => {
        const searchFilter = this.state.searchFilter;
        
        axios.post(`${API}/groups/api/v1/groups/filter`, {
            "filters": {
                "id": searchFilter.id ? Number(searchFilter.id) : "",
                "name": searchFilter.name,
                "level": searchFilter.level,
                "status": searchFilter.status,
                "timing": searchFilter.timing,
                "teacher": searchFilter.teacher.toLowerCase(),
                "startDateFrom":searchFilter.startDateFrom,
                "startDateTo": searchFilter.startDateTo,
                "finishDateFrom": searchFilter.endDateFrom,
                "finishDateTo": searchFilter.endDateTo
            }
        })
        .then(res =>  this.props.receiveGroups(res.data.results))
        .catch(error => console.error(error));
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
                                            <Input type="text" name="name" id="name" placeholder="Name" value={ this.state.searchFilter.name } onChange={ this.handleChange }/>
                                        </div>
                                        <div className="col-4 col-lg-2  mb-2">
                                            <Label >ID</Label>
                                            <Input type="text" name="id" id="id" placeholder="ID" value={ this.state.searchFilter.id } onChange={ this.handleChange }/>
                                        </div>


                                        <FormGroup className="col-6 col-lg-2  ">
                                            <Label for="exampleSelect">Status</Label>
                                            <Input type="select" status="select" id="status" value={ this.state.searchFilter.select } onChange={ this.handleChange }>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.groupStatus ? settings.groupStatus.map((label) => (
                                                        <option key={label}>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-6 col-lg-2">
                                            <Label for="exampleSelect">level</Label>
                                            <Input type="select" name="level" id="level" value={ this.state.searchFilter.level } onChange={ this.handleChange }>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.groupLevel ? settings.groupLevel.map((label) => (
                                                        <option key={label}>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="col-12 col-sm-4 my-2 ">
                                            <Label for="exampleSelect">timing</Label>
                                            <Input type="select" name="timing" id="timing" value={ this.state.searchFilter.timing } onChange={ this.handleChange }>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.groupTime ? settings.groupTime.map((label) => (
                                                        <option key={label}>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <FormGroup className="col-12 col-sm-4 my-2 ">
                                            <Label for="exampleSelect">Teacher</Label>
                                            <Input type="select" name="teacher" id="teacher" value={ this.state.searchFilter.teacher } onChange={ this.handleChange }>
                                                <option defaultValue>Select...</option>
                                                {
                                                    settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                                        <option key={label}>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input>
                                        </FormGroup>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">start date</Label>
                                            <Input className="col-5" type="date" name="startDateFrom" id="startDateFrom" value={ this.state.searchFilter.startDateFrom } onChange={ this.handleChange } />
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="startDateTo" id="startDateTo" value={ this.state.searchFilter.startDateTo } onChange={ this.handleChange }/>
                                        </div>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">finish date</Label>
                                            <Input className="col-5" type="date" name="endDateFrom" id="endDateFrom" value={ this.state.searchFilter.endDateFrom } onChange={ this.handleChange }/>
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="endDateTo" id="endDateTo" value={ this.state.searchFilter.endDateTo } onChange={ this.handleChange }/>
                                        </div>
                                    </div>

                                    <Button className="ml-3 mt-2" onClick={ this.search }>Submit</Button>
                                    <Button className="ml-3 mt-2"  onClick={ this.clear }>Clear All</Button>

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
        receiveGroups: (groups) => { dispatch(receiveGroups(groups)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFilters);
