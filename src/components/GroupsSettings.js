import React, { Component } from 'react'
import { connect } from 'react-redux'


class GroupsSettings extends Component {

    render() {
        return (
            <div className='container row mx-auto mt-4 py-4 shadow'>
                <h3 className='col-12 '>Groups settings</h3>
                 <br />
            </div>
        );
    }
}
export default connect()(GroupsSettings);
