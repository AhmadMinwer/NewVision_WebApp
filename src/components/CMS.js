import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentsSettings from './StudentsSettings'
import GroupsSettings from './GroupsSettings'
import QueriesSettings from './QueriesSettings'



class CMS extends Component {
    render() {
        return (
            <div className=''>
                <StudentsSettings />
                {/* <GroupsSettings/>
                <QueriesSettings/> */}
            </div>
        );
    }
}
export default connect()(CMS);
