import React, { Component } from 'react';
import GroupsFilters from './GroupsFilters';
import GroupsGrid from './GroupsGrid';
import { connect } from 'react-redux';



class Groups extends Component {
    render() {
        return (
            <div>
                <GroupsFilters />
                <GroupsGrid />
            </div>
        );
    }
}

export default connect()(Groups);
