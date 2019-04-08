import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';



class GroupsSettings extends Component {

    render() {
        return (
            <div className='container row mx-auto mt-4 py-4 shadow'>
                <h3 className='col-12 '>Groups settings</h3>
                <hr className=' col-11' />
                <br />

                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Group Status</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row '>
                        <div className="list-group col-10 pr-0">
                            <button type="button" className="list-group-item list-group-item-action" disabled>Active</button>
                            <button type="button" className="list-group-item list-group-item-action" disabled>Finished</button>

                        </div>
                        <div className='col-1 px-1 mt-2'>
                            <Button className='' onClick={this.DeleteStudentStatus} variant="danger"  >delete</Button>
                        </div>
                    </div>
                </div>


                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Group Level</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row'>
                        <div className="list-group col-10 pr-0">
                            <button type="button" className="list-group-item list-group-item-action" disabled>Active</button>
                            <button type="button" className="list-group-item list-group-item-action" disabled>Finished</button>

                        </div>
                        <div className='col-1 px-1 mt-2'>
                            <Button className='' onClick={this.DeleteStudentStatus} variant="danger"  >delete</Button>
                        </div>
                    </div>
                </div>

                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Group Time</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row'>
                        <div className="list-group col-10 pr-0">
                            <button type="button" className="list-group-item list-group-item-action" disabled>Active</button>
                            <button type="button" className="list-group-item list-group-item-action" disabled>Finished</button>

                        </div>
                        <div className='col-1 px-1 mt-2'>
                            <Button className='' onClick={this.DeleteStudentStatus} variant="danger"  >delete</Button>
                        </div>
                    </div>
                </div>

                <div className='col-10 col-md-6 mr-4 mt-4 '>
                    <h4>Group Teacher</h4>
                    <div className='col-12 row'>
                        <input className="form-control form-control col-10" type="text" placeholder="new status" />
                        <div className='col-1 px-1'>
                            <Button className='' onClick={this.AddStudentStatus} variant="success"  >Add</Button>
                        </div>
                    </div>
                    <div className='mt-4 col-12 row'>
                        <div className="list-group col-10 pr-0">
                            <button type="button" className="list-group-item list-group-item-action" disabled>Active</button>
                            <button type="button" className="list-group-item list-group-item-action" disabled>Finished</button>

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
export default connect()(GroupsSettings);
