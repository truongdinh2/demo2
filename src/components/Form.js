
import { FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txttitle: '',
            Author: '',
            content: '',
            category: '',
            date: '',
            exam: [],
            // isNewfile: this.props.isNewfile,
        }
    }
    componentDidMount() {
        var { rowSelected } = this.props;
        var { isNewfile } = this.props;
        console.log(isNewfile)
        // console.log(isNewfile)
        if (rowSelected) {
            this.setState({
                txttitle: rowSelected.txttitle,
                Author: rowSelected.Author,
                content: rowSelected.content,
                category: rowSelected.category,
                date: rowSelected.date,
            })
        }
        if (isNewfile === true) {
            this.onReset()
        }
    }
    componentDidUpdate() {

    }
    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (this.props.rowSelected) {

        }
        this.setState({
            [name]: value,
            isOnEdit: this.props.onEdit
        }, function () {
            // console.log(this.state)
        })
        // console.log(value)
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        //if (id) update else add user to store{...}
    }
    onReset = () => {
        // this.props.closeDialog();
        this.setState({
            txttitle: '',
            Author: '',
            content: '',
            category: '',
            date: '',
        })
    }
    onSave = () => {

        this.props.isNewFile();
        if(this.props.isNewfile){

            this.props.onAddForm(this.state)
           this.onReset()
        }
        else{
            console.log("123123")
        }
    }

    render() {
        // console.log(this.state.isNewfile)
        var { txttitle, Author, content, category, date, isNewfile } = this.state
        return (
            <div>
                <form onSubmit={this.onHandleSubmit} className="form">
                    <FormGroup>
                        <Button id="customized-dialog-title" className="btncls"
                            onClick={() => { this.props.isCloseForm() }}>
                            close
                        </Button>
                    </FormGroup>
                    <TextField name="txttitle"
                        label="Work"
                        value={txttitle}
                        className="form-control" placeholder="Title"
                        onChange={this.onHandleChange}
                    />
                    <TextField name="Author"
                        label="Author"
                        value={Author}
                        className="form-control"
                        onChange={this.onHandleChange}
                    />
                    <FormGroup>
                        <TextField
                            name="date"
                            className="date"
                            label="Date"
                            type="date"
                            defaultValue="2020-05-24"
                            value={date}
                            onChange={this.onHandleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormGroup>
                    <FormControl className="category">
                        <InputLabel className="inp">{isNewfile ? 'category' : category}</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={this.onHandleChange}
                            label="category"
                            name="category"

                        >
                            <MenuItem value={category} sel>
                                {category}
                            </MenuItem>
                            <MenuItem value='action and adventure'>action and adventure</MenuItem>
                            <MenuItem value='classic'>classic</MenuItem>
                            <MenuItem value='comic'>comic</MenuItem>
                            <MenuItem value='khac'>khac</MenuItem>
                        </Select>
                    </FormControl>
                    <div id="content">
                        <small> content</small><br />
                        <textarea onChange={this.onHandleChange}
                            name="content" rows="5" cols="50" value={content}></textarea>
                    </div>

                    <FormGroup className="inline">
                        <Button className="btn" type="submit" onClick={this.onSave} variant="outlined" color="primary">
                            SAVE
                        </Button>
                        <Button className="btn" type="reset" onClick={this.onReset} variant="outlined" color="primary">
                            RESET
                        </Button>
                    </FormGroup>

                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        state:state,
        isNewfile:state.isEditNewFile
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddForm: (file) => {
            dispatch(action.AddFile(file))
        },
        isCloseForm: () => {
            dispatch(action.closeForm())
        },
        isNewFile: () => {
            dispatch(action.newFile())
          }
          

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);

