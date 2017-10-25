import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendData} from '../reducers/MainReducer';
import {setCategoryItemData, setModal} from '../actions/MainActions';
import {CategoryBlock} from '../components/CategoryBlock';
import {ContentLoader} from '../components/ContentLoader';
import {ItemModal} from '../components/ItemModal';

const mapStateToProps = (state, { params })=>({
  getRouteData:()=>sendData.getRouteData(state),
  getcatItemData:()=>sendData.getcatItemData(state),
  getIsFetching:()=>sendData.getIsFetching(state),
  getModalShow:()=>sendData.getModalShow(state),
  getModalData:()=>sendData.getModalData(state)
})
const mapDispatchToProps = {
  setCategoryItemData,
  setModal
}
class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedCategories:this.props.getcatItemData(),
      showModal:this.props.getModalShow(),
      modalData:this.props.getModalData(),
      loadingText:'Loading...'
    }
  }
  componentDidMount() {
    let {locationBeforeTransitions} = this.props.getRouteData();
    let {state} = locationBeforeTransitions;
    this.props.setCategoryItemData(state.data)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.getcatItemData()!==this.props.getcatItemData()) {
      this.setState({
        breedCategories:nextProps.getcatItemData(),
        loadingText:'Loading...'
      })
    }
    if(this.props.getIsFetching()!==nextProps.getIsFetching()) {
      this.setState({
        loadingText:'No Data Found'
      })
    }
    if(this.props.getModalShow() !== nextProps.getModalShow()) {
      this.setState({
        showModal:nextProps.getModalShow()
      })
    }
    if(this.props.getModalData()!== nextProps.getModalData()) {
      this.setState({
        modalData:nextProps.getModalData()
      })
    }
  }
  setModalShow = (modalStatus, itemData) => {
    this.props.setModal(modalStatus, itemData);
  }
  render() {
    let categoryName = this.props.routeParams.name.split("_").join(" ");
    return (
      <div className="app-container">
        <div className="main-wraper">
          <div className="content-breadcrumb display-tbl">
            <button onClick={()=>this.props.router.goBack()} className="btn text-secondary text-sm display-cell">
              All Categories
            </button> 
            <span className="btn-tr text-black text-sm display-cell">/</span>
            <span className="text-primary text-xs display-cell">{categoryName}</span>
          </div>
          {this.state.breedCategories.length===0 ? <ContentLoader loadingText={this.state.loadingText} />
            :
            <CategoryBlock setModalShow = {this.setModalShow} categoryData={this.state.breedCategories} type="child" />
          }
          <div className="app-clearfix"> </div>
        </div>
        { this.state.showModal && <ItemModal modalData={this.state.modalData} closeHandle={this.setModalShow} /> }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
