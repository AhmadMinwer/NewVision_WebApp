import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp)
library.add(faThumbsDown)




class Marks extends Component {
    state = {
        name: 'aas asf',
        NewMarkForm: false,
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }
    showNewExam = () => {
        this.setState((state) => {
            return { NewMarkForm: !state.NewMarkForm };
        })
    }


    render() {
        return (
            <div>
                

                {this.state.NewMarkForm ?
                 <Button className='mr-4 float-right my-4' onClick={this.showNewExam} variant="danger"  > cancel</Button> 
                : <Button className='mr-4 float-right my-4' onClick={this.showNewExam} variant="success"  > Add exam</Button>
                }
                <div className='col-12 mt-4 mb-1 scrollabel-container'>

                    <h4 className='my-4'>Id, Group Name, time</h4>
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th className='fit-content'>id</th>
                                <th className='fit-content'>name</th>
                                {this.state.NewMarkForm ?<th className='bg-dark text-light text-center fit-content'><p className='newMark'>top mark</p><Input className='newMark' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /></th>: ''}
                                {this.state.NewMarkForm ?<th className='bg-dark text-light text-center fit-content'>Notes</th>: ''}
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">561</th>
                                <td>Student Name</td>
                                {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newMark' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newDay' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                <th></th>

                            </tr>
                            <tr>
                                <th scope="row">214</th>
                                <td>Student Name</td>
                                {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newMark' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                {this.state.NewMarkForm ? <td className='bg-dark text-light '><Input className='newDay' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}
                                <th></th>

                            </tr>
                        </tbody>
                    </Table>
                </div>
                {this.state.NewMarkForm ? <Button className='ml-4 float-left my-4' onClick={this.showNewExam} variant="success"> save</Button> 
                : ''
                }
            </div>
        )
    }
}

export default connect()(Marks);


