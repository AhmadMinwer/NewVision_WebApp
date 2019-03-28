import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';


class GroupsGrid extends Component {
    render() {
        return (
            <div className=" px-4 mt-4 scrollabel-container">
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Status</th>
                            <th>Teacher 1</th>
                            <th>Teacher 2</th>
                            <th>start date</th>
                            <th>finish date</th>
                            <th>time</th>
                            <th>commite lessons</th>
                            <th>accumulated lessons</th>
                            <th>Last date</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">561</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default connect()(GroupsGrid);
