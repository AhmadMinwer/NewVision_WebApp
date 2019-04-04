import React, { Component } from 'react';
import StudentsFilters from './StudentsFilters';
import StudentsGrid from './StudentsGrid';
import { connect } from 'react-redux';
import NewVisionNav from './NewVisionNav'


class Students extends Component {
    render() {
        return (
            <div>
                <StudentsFilters />
                <br />
                <StudentsGrid />
            </div>
        );
    }
}
export default connect()(Students);
