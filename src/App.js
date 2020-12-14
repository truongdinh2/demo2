import { Button } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
// import Addfiles from './components/AddFile'
import * as actionType from './actions';
import './style/App.css';
import './style/container.css';
import Content from './components/Content';
import Form from './components/Form';
import Search from './components/Search';
import Summary from './components/summary';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVl: '',
      // isOnEdit: false,
      rowSelected: null,
      index: null,
      rowKey: null,
    }
  }
  handleSearch = (params) => {
    this.setState({
      searchVl: params,
    })
  }
  onShowInfo = (key) => {
    // console.log(key)
    this.setState({
      rowKey: key,
    })
  }
  // handleEdit = (params) => {
  //   var { info4 } = this.props;
  //   this.setState({
  //     rowSelected: info4[params],
  //     // isNewfile: false,
  //     index: params,
  //   }, function () {
  //     console.log(this.state.rowSelected)
  //   })
  // }
  openDialog = () => {
    // this.setState({
    //   isNewfile: true
    // }, function () {
    //   console.log(this.state.isToggleForm)
    // })
    this.props.isNewfile()
    this.props.isOpenForm();
  }

  render() {
    var { rowSelected } = this.state;
    const isToggleForm = this.props.isToggleForm;
    // console.log(info4,"if")
    return (
      <div className="flexbox" >
        <div className="header flex_item">
          <div className="tittle">
            <h2>NOTEBOOK</h2>
          </div>
          <div className={isToggleForm ? 'modal' : ''}>
          </div>
        </div>
        <div />

        {/* content_left */}

        <div className="content_left flex_item">
          <div className="search_right flex_left">
            <Search searchVal={this.handleSearch} />
          </div>
          <div className=" btn_left flex_left">

            <Button variant="contained" onClick={this.openDialog} color="secondary"
              className="btnAdd btn_left flex_left">
              Addfiles
          </Button>
          </div>
          {
            isToggleForm && <Form
              // handleEdit={this.state.index}
              // rowSelected={rowSelected}
            // isNewfile={this.state.isNewfile}
            />
          }
          <div className="summary_flex flex_left">
            <Summary
              searchValue={this.state.searchVl}
              onShowInfo={this.onShowInfo}
              // handleEdit={this.handleEdit}
            />
          </div>
        </div>

        {/* <div item md={1} /> */}

        <div className="content_right flex_item">
          <Content
            rowKey={this.state.rowKey}
          />
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemID: state.info4.id,
    isToggleForm: state.isToggleForm,
    info4: state.info4
  }
};


const mapDispatchToProps = dispatch => {
  return {
    deleteItem: (id) => {
      dispatch(actionType.deleteItem(id))
    },
    isOpenForm: () => {
      dispatch(actionType.toggleForm())
    },
    isNewfile: () => {
      dispatch(actionType.newFile())
    }
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
