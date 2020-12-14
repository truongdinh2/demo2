
import { FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txttitle: '',
            Author: '',
            content: '',
            category: '',
            date: '',
            // isNewfile: this.props.isNewfile,
        }
    }
    // componentDidMount() {
    //     var { rowSelected } = this.props;
    //     var { isNewfile } = this.props;
    //     console.log(isNewfile, 'isNewFile-')
    //     // console.log(isNewfile)
    //     if (rowSelected) {
    //         this.setState({
    //             txttitle: rowSelected.txttitle,
    //             Author: rowSelected.Author,
    //             content: rowSelected.content,
    //             category: rowSelected.category,
    //             date: rowSelected.date,
    //         })
    //     }
    //     if (isNewfile === true) {
    //         this.onReset()
    //     }
    // }
    componentDidMount() {
        var { indexEdit, info4 } = this.props;
        // console.log(indexEdit, info4)
        if (!this.props.isNewfile) {
            this.setState({
                txttitle: info4[indexEdit].txttitle,
                Author: info4[indexEdit].Author,
                content: info4[indexEdit].content,
                category: info4[indexEdit].category,
                date: info4[indexEdit].date,
            })
        }
    }
    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // if (this.props.rowSelected) {

        // }
        this.setState({
            [name]: value,
            isOnEdit: this.props.onEdit
        }, function () {
            // // console.log(this.state)
            // if(this.state.date !== ''){
            //     this.setState({
            //         errors: ''
            //     })
            // }
            // console.log(this.state.date,"date")
        })
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
        var { txttitle, Author, content, category, date } = this.state;
        var indexEdit = this.props.indexEdit;
        var info4 = this.props.info4;
        if (txttitle !== '' &&
            Author !== '' &&
            content !== '' &&
            category !== '' &&
            date !== ''
        ) {
            this.props.isCloseForm();
            if (this.props.isNewfile) {
                this.props.onAddForm(this.state)
                this.onReset()
            } else {
                this.props.onEditSubmit(indexEdit,this.state)
                // console.log(this.state)
                // info4[indexEdit] = this.state;
                alert('edit')

            }
        }
        // console.log(txttitle)
        // alert(category)
        // console.log(category)
    }

    render() {
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
                        type="text"
                        className="form-control" placeholder="Title"
                        onChange={this.onHandleChange}
                        // 
                        required
                    // defaultValue="Hello World"
                    // helperText="Incorrect entry."
                    />

                    {/* {errors && <p className="err">loi roi ban oi</p>} */}
                    <TextField name="Author"
                        // type="email"
                        label="Author"
                        value={Author}
                        className="form-control"
                        onChange={this.onHandleChange}
                        required
                    // id="standard-error-helper-text"
                    // label="Error"
                    // defaultValue="Hello World"
                    // helperText="Incorrect entry."
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
                            required
                        // label="Error"
                        // defaultValue="Hello World"
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
                            error
                            required
                        // label="Error"
                        // defaultValue="Hello World"
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
                            name="content" required rows="5" cols="50" value={content}></textarea>
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
        info4: state.info4,
        isNewfile: state.isEditNewFile,
        indexEdit: state.indexDel.index,
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
        },
        onEditSubmit: (index, data) => {
            dispatch(action.onEditSubmit(index, data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);

