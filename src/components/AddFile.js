import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionType from './../actions';

class AddFile extends Component {
    addCon = () => {
        this.props.addFile()
    }
    render() {
        console.log(this.props.name)
        return (
            <>
                <button type="button" id="btnAdd"
                    className="btn btn-primary"
                    onClick={this.addCon}>Addfile
                </button>
                <button className="btn btn-primary"
                 onClick={()=> {this.props.nameValue('truong')}}
                 >Name
                 </button>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.info4.value
    }
}
const dispatchPropps = (dispatch) => {
    return {
        nameValue: (val) => {
            dispatch(actionType.testItem(val))
        }
    }
}
export default connect(mapStateToProps,dispatchPropps) (AddFile);