import React, { Component } from 'react'
// import Badge from 'react-bootstrap/Badge';
// import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlideToggle from "react-slide-toggle";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import { receiveGroups, handleFetchGroups } from '../actions/groups'


class GroupFilters extends Component {
    state = {
        showFilters: false,

        searchFilters:{
            name:'',
            id:'',
            status:'',
            level:'',
            timing:'',
            teacher:'',
            startDateFrom:'',
            startDateTo:'',

            finishDateFrom:'',
            finishDateTo:'',

        },
    }

    toggleShowFilters = () => {
        this.setState((state) => {
            return { showFilters: !state.showFilters };
        });
    }
        
    handleChange = (event) => {
        const field = event.target.id;
        let value = event.target.value;

        if( value === 'Select...' || value=== 'select...' || value=== 'all')
            value=''

        let newFilter = this.state.searchFilters;
        newFilter[field] = value;

        this.setState({
            searchFilters: newFilter
        });
    }

    clearsearchFilterss = () => {

        const emptysearchFilters = {
            name:'',
            id:'',
            status:'',
            level:'',
            timing:'',
            teacher:'',
            startDateFrom:'',
            startDateTo:'',

            finishDateFrom:'',
            finishDateTo:'',
        };

        this.setState({ 
            searchFilters: emptysearchFilters 
        });
    }

    
    handleSearchGroups = async () =>{
        const { dispatch } = this.props
        console.log('handleSearchgroups has called',this.state.searchFilters)

        // const groups = await dispatch(handleAddgroups({ name, CPAID, phone, phone2, specialty, remarks, terms, creationDate }))
        const filtersResults = await dispatch(handleFetchGroups(this.state.searchFilters))
        dispatch(receiveGroups(filtersResults))

        console.log('filtersResults', filtersResults)
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
                                            <Input type="text" name="group_name" id="name" placeholder="Name" value={this.state.searchFilters.name} onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="col-4 col-lg-2  mb-2">
                                            <Label >ID</Label>
                                            <Input type="text" name="group_id" id="id" placeholder="ID" value={this.state.searchFilters.id} onChange={(e) => { this.handleChange(e) }} />
                                        </div>


                                        <FormGroup className="col-6 col-lg-2  ">
                                            <Label for="exampleSelect">Status</Label>
                                            <Input type="select" name="select" id="status" value={this.state.searchFilters.status} onChange={(e) => { this.handleChange(e) }}>
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
                                            <Input type="select" name="select" id="level" value={this.state.searchFilters.level} onChange={(e) => { this.handleChange(e) }}>
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
                                            <Input type="select" name="select" id="timing" value={this.state.searchFilters.timing} onChange={(e) => { this.handleChange(e) }}>
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
                                            <Input type="text" name="select" id="teacher" value={this.state.searchFilters.teacher} onChange={(e) => { this.handleChange(e) }} />
                                            {/* <option defaultValue>Select...</option>
                                                {
                                                    settings.groupTeacher ? settings.groupTeacher.map((label) => (
                                                        <option key={label}>{label}</option>
                                                    ))
                                                        : ''
                                                }
                                            </Input> */}
                                        </FormGroup>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">start date</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="startDateFrom" value={this.state.searchFilters.startDateFrom} onChange={(e) => { this.handleChange(e) }} />
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="startDateTo" value={this.state.searchFilters.startDateTo} onChange={(e) => { this.handleChange(e) }} />
                                        </div>

                                        <div className="col-12 col-lg-6 my-2 col-lg-3 row ml-1">
                                            <Label className="col-12 pl-0" for="exampleSelect">finish date</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="finishDateFrom" value={this.state.searchFilters.finishDateFrom} onChange={(e) => { this.handleChange(e) }}/>
                                            <Label className="col-2  font-weight-bold text-center" for="exampleSelect">_</Label>
                                            <Input className="col-5" type="date" name="group_tn" id="finishDateTo" value={this.state.searchFilters.finishDateTo} onChange={(e) => { this.handleChange(e) }}/>
                                        </div>




                                    </div>

                                    <Button className="ml-3 mt-2" onClick={this.handleSearchGroups}>Submit</Button>
                                    <Button className="ml-3 mt-2 " onClick={this.clearsearchFilterss}>Clear All</Button>

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
