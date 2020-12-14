// import { ThumbUpSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from './../actions/index'

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // index:'',
            searchValue: this.props.searchValue,
            // isEdit: true,
        }
    }
    onDelete(index) {
        this.props.indexDel(index);
        var info4 = this.props.info4;
        info4.splice(index, 1);
        this.setState({
            info4: info4
        })
    }
    onEdit(index) {
        this.props.isEditForm();
        // this.props.handleEdit(index);
        this.props.indexEdit(index)
        this.props.newFile();
    }
    onShowInfo = (key) => {
        this.props.onShowInfo(key)
    }
    findAuthor = (info4, value) => {
        var result = null;
        result = info4.map((infor, key) => {
            if (infor.txttitle === '') {
                return null;
            };
            if (infor.txttitle.indexOf(value) !== -1 || value === '') {
                return (
                    <li key={key}
                        className="list"
                    >
                        <span className="iconEdit">
                        <span style={{flexGrow: '1'}}
                        onClick={() => this.onShowInfo(key)}>
                            {infor.txttitle}
                        </span>
                            <span >
                                <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/14974663671582988848-512.png"
                                    alt="delete" onClick={() => this.onDelete(key)} className="icon" />
                            </span>
                            <span >
                                <img src="https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png"
                                    alt="edit" className="icon" onClick={() => this.onEdit(key)} />
                            </span>
                        </span>
                    </li>
                )
            }
            return null;
        })
        return result;
    }
    render() {
        const info4 = this.props.info4
        console.log(this.props.info4)
        return (
            <div className="summary">
                <div className="note" >
                    <h2 style={{marginBottom:"10px"}}>List</h2>
                </div>
                
                {/* <DeleteIcon/>cd */}
                <ol>
                    {this.findAuthor(info4, this.props.searchValue)}
                </ol>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        info4: state.info4
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isEditForm: () => {
            dispatch(actionType.editForm())
        },
        newFile: () => {
            dispatch(actionType.OldFile())
        },
        indexDel: (index)=>{
            dispatch(actionType.indexDel(index))
        },
        indexEdit: (index) => {
            dispatch(actionType.indexEdit(index))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Summary)
