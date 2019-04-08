import React, { Component } from 'react'
import { connect } from 'react-redux'


class QueriesSettings extends Component {

    render() {
        return (
            <div className='container row mx-auto my-4 py-4 shadow'>
                <h3 className='col-12 '>Queries settings</h3>
                <hr className=' col-11' />
                 <br />
            </div>
        );
    }
}
export default connect()(QueriesSettings);
