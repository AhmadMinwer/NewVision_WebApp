import React, { Component } from 'react'
import { connect } from 'react-redux'


class StudentsSettings extends Component {

    render() {
        return (
            <div className='container row mx-auto mt-4 py-4 shadow'>
                <h3 className='col-12 '>Students settings</h3>
                 <br />
            </div>
        );
    }
}
export default connect()(StudentsSettings);
