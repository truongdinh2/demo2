import React, { Component } from 'react';
import { connect } from 'react-redux';
class Content extends Component {
    render() {
        // console.log(this.props.info4)
        // var onRender = this.props.onRender;
        var details = this.props.info4;
        // console.log(details,'details')
        // console.log(this.props.rowKey)
        var rowKey = this.props.rowKey;
        // console.log(rowKey)
        // console.log(details[rowKey])
        return (
            <table>
                <thead>
                    <tr className="th">
                        <th className="th">Work</th>
                        <th className="th">Author</th>
                        <th className="th">Category</th>
                        <th className="th">Date</th>
                        <th className="th tbcnt">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <p>aaaaaa</p> */}
                    {rowKey !== null ? <tr>
                        <td >
                            {details[rowKey].txttitle}
                        </td>
                        <td >
                            {details[rowKey].Author}
                        </td>
                        <td >
                            {details[rowKey].category}
                        </td>
                        <td >
                            {details[rowKey].date}
                        </td>
                        <td >
                            {details[rowKey].content}
                        </td>
                    </tr> : <tr></tr>}
                </tbody>
            </table>

        )

    }
}
const mapStateToProps = (state) => {
    return {
        info4: state.info4
    }
}

const mapDispatchToProps = null
export default connect(mapStateToProps,mapDispatchToProps) (Content);