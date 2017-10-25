
import { handleActions } from 'redux-actions';
import * as actions from '../actions/MainActions.js';

const initialState = {
	categoryData: [],
	isFetching:true,
	catItemData : [],
  modalShow:false,
  modalData:{}
}
export default handleActions({
  [actions.FETCH_CAT_DATA]: (state, action) => {
    return { ...state, isFetching: action.payload.fetchStatus };
  },
  [actions.RECEIVE_CAT_DATA]: (state, action) => {
    return { ...state, isFetching: false, categoryData:action.payload.categoryData };
  },
  [actions.RECEIVE_CAT_ITEM_DATA]: (state, action) => {
    return { ...state, isFetching: false, catItemData:action.payload.categoryItemData.categories };
  },
  [actions.SET_MODAL]: (state, action) => {
    return { ...state, modalShow:action.payload.modalStatus, modalData:action.payload.itemData };
  }
}, initialState);

export const sendData =  {
	getCatData: state => state.mainReducer.categoryData,
	getIsFetching: state => state.mainReducer.isFetching,
	getRouteData: state => state.routing,
	getcatItemData: state => state.mainReducer.catItemData,
  getModalShow: state => state.mainReducer.modalShow,
  getModalData: state => state.mainReducer.modalData
}