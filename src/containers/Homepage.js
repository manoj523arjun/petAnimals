import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendData} from '../reducers/MainReducer';
import {setCategoryData} from '../actions/MainActions';
import {CategoryBlock} from '../components/CategoryBlock';
import {ContentLoader} from '../components/ContentLoader';

const mapStateToProps = (state)=>({
  getCatData:()=>sendData.getCatData(state),
  getIsFetching:()=>sendData.getIsFetching(state)
})
const mapDispatchToProps = {
  setCategoryData
}
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData:this.props.getCatData(),
      loadingText:'Loading...'
    }
  }
  componentWillMount() {
    this.props.setCategoryData();
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.getCatData() !== nextProps.getCatData()) {
      this.setState({
        categoryData:nextProps.getCatData()
      })
    }
    if(this.props.getIsFetching()!==nextProps.getIsFetching()) {
      this.setState({
        loadingText:'No Data Found'
      })
    }
  }
  searchVal = (inputVal) => {
    let filterVal = this.props.getCatData().filter((item) =>{
          let name = item.breed_name.toString();
          return (name.toLowerCase().indexOf(inputVal.toLowerCase()) > -1);
      });
    this.setState({
      categoryData:filterVal,
      inputVal:'',
      loadingText:filterVal.length===0 ? "No Data Found" : ''
    })
  }
  onChangeVal = (e)=> {
    this.setState({inputVal:e.target.value})
    if(e.target.value.length<=0) {
      this.setState({
        categoryData:this.props.getCatData()
      })
    }
  }
  render() {
    return (
      <div className="app-container">
        <div className="main-wraper">
          <div className="content-left xs-block">
            <h3 className="page-heading text-secondary">All Categories</h3>
          </div>
          <div className="col-6 content-right xs-block">
            <div className="input-block m-bottom-20">
              <div className="input-box">
                <input onChange={this.onChangeVal.bind(this)} type="text" className="input-text" placeholder="Search by category name" />
              </div>
              <div className="input-icon">
                <button onClick={this.searchVal.bind(this, this.state.inputVal)} className="input-button"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          <div className="app-clearfix"> </div>
          {this.state.categoryData.length===0 ? <ContentLoader loadingText={this.state.loadingText} />
            :
            <CategoryBlock categoryData={this.state.categoryData} type="parent" />
          }
          <div className="app-clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
