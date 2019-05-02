import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp)
library.add(faThumbsDown)




class AttendancePage extends Component {
    state = {
        name: 'aas asf',
        NewDayForm: false,
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }
    showNewDay = () => {
        this.setState((state) => {
            return { NewDayForm: !state.NewDayForm };
        })
    }


    render() {
        let group
        let students
        const settings = this.props.settings

        if (this.props.group) {
            group = this.props.group
            students = this.props.groupStudents
        } else {
            group = {}
            students = {}
        }
        return (
            <div>
                {this.state.NewDayForm ?
                    <Button className='mr-4 float-right my-4' onClick={this.showNewDay} variant="danger"  > cancel</Button>
                    : <Button className='mr-4 float-right my-4' onClick={this.showNewDay} variant="success"  > Add day</Button>
                }
                <div className='col-12 my-4 scrollabel-container'>

                    <h4 className='my-4'>
                        <span className='gray'> ID:</span>{ group.id } <br/>
                        <span className='gray'> Name:</span> {group.name}<br/>
                        <span className='gray'> Time:</span> {group.time}<br/>
                    </h4>
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th className='fit-content'>id</th>
                                <th className='fit-content'>name</th>

                                {this.state.NewDayForm ? <th className='bg-dark text-light text-center fit-content' colspan="2">new day- today class</th> : ''}
                                {group.accumulatedLessons ? Object.values(group.accumulatedLessons).map((day) => (
                                    <th className='fit-content'>{day.date}</th>
                                )) : ''}
                                <th ></th>



                            </tr>
                        </thead>
                        <tbody>

                            {
                                Object.values(students).map((student) => (
                                    <tr>
                                        <th scope="row">{student.id}</th>
                                        <td>{student.name}</td>
                                        {this.state.NewDayForm ? <td className='bg-dark text-light'> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-up" /></Button> <Button className='mx-0 my-0' onClick='' variant="light"  ><FontAwesomeIcon icon="thumbs-down" /></Button></td> : ''}
                                        {this.state.NewDayForm ? <td className='bg-dark text-light '><Input className='newDay' type="text" value={this.state.default} onChange={(e) => this.handleChange(e)} /> </td> : ''}

                                        {Object.values(student.groups[group.id].attendance).map((date) => (
                                            <td className={date.attended ? 'bg-success' : 'bg-danger'} data-toggle='tooltip' title={date.notes} > {
                                            
                                                date.notes.length > 20 ?
                                                    date.notes.substring(0, 19) + "..."
                                                    : date.notes
                                            } </td>
                                        ))}
                                        <td></td>
                                    </tr>
                                ))
                            }





                        </tbody>
                    </Table>
                </div>
                {this.state.NewDayForm ? <Button className='ml-4 float-left my-4' onClick={this.showNewExam} variant="success"> save</Button>
                    : ''
                }
            </div>
        )
    }
}


function mapStateToProps({ students, groups, settings }, props) {
    const id = props.match.params['id']
    const group = groups[id]
    let groupStudents = {}
    if (group) {
        group.students.map((studentId) => (
            groupStudents[studentId] = students[studentId]
        ))

        console.log('groupStudents = ', groupStudents)
    }
    return {
        group,
        groupStudents,
        settings,
    }
}


export default connect(mapStateToProps)(AttendancePage);


