import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';


class StudentsSettings extends Component {

    render() {
        const settings = this.props.settings

        return (
            <div className='container row mx-auto mt-4 py-4 shadow'>
                <h3 className='col-12 '>Students settings</h3>
                <hr className=' col-11' />
                <br />

                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Student status</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row'>
                        <div className="list-group col-10 pr-0">
                            {
                                settings.studentStatus ? settings.studentStatus.map((label) => (
                                    <button type="button" className="list-group-item list-group-item-action">{label}</button>
                                ))
                                    : ''
                            }
                        </div>
                        <div className='col-1 px-1 mt-2'>
                            <Button className='' onClick={this.DeleteStudentStatus} variant="danger"  >delete</Button>
                        </div>
                    </div>
                </div>


                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Certification status</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row'>
                        <div className="list-group col-10 pr-0">
                            {
                                settings.certificationStatus ? settings.certificationStatus.map((label) => (
                                    <button type="button" className="list-group-item list-group-item-action">{label}</button>
                                ))
                                    : ''
                            }
                        </div>
                        <div className='col-1 px-1 mt-2'>
                            <Button className='' onClick={this.DeleteStudentStatus} variant="danger"  >delete</Button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}


function mapStateToProps({ settings }) {

    return {
        settings,
    }
}
export default connect(mapStateToProps)(StudentsSettings);
