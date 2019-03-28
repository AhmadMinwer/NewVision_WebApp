import React, { Component } from 'react';
import StudentsFilters from './StudentsFilters';
import StudentsGrid from './StudentsGrid';
import { connect } from 'react-redux';



class Students extends Component {
    render() {
        return (
            <div>
                <StudentsFilters />
                <StudentsGrid />
            </div>
        );
    }
}
export default connect()(Students);
