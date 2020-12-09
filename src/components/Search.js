import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from './../actions';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }
    onSearchValue = (e) => {
        const searchVl = e.target.value;
        this.props.searchVal(searchVl)
    }
    submit = (e) => {
        e.preventDefault();
    }
    render() {
        console.log(this.props.itemAdd)
        // console.log(this.state.searchValue)
        return (
            <form onSubmit={this.submit} className="search">
                <TextField type="search" id="input"
                    className="form-control"
                    label="Search"
                    onChange={this.onSearchValue}
                />
                <button onClick={() => {this.props.dataAdd("hilo a tung")}}>Add</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        itemAdd: state.table,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dataAdd: (item) => {
            dispatch(actionType.addItem(item))
        }
    } 
}
export default connect(mapStateToProps,mapDispatchToProps) (Search);