

import { createAction } from 'redux-actions';

export const FETCH_CAT_DATA = createAction(
	'mainReducer/FETCH_CAT_DATA',
	fetchStatus =>({fetchStatus})
)
export const RECEIVE_CAT_DATA = createAction(
	'mainReducer/RECEIVE_CAT_DATA',
	categoryData =>({categoryData})
)


export const FETCH_CAT_ITEM_DATA = createAction(
	'mainReducer/FETCH_CAT_DATA',
	fetchStatus =>({fetchStatus})
)

export const RECEIVE_CAT_ITEM_DATA = createAction(
	'mainReducer/RECEIVE_CAT_ITEM_DATA',
	categoryItemData =>({categoryItemData})
)

export const SET_MODAL = createAction(
	'mainReducer/SET_MODAL',
	(modalStatus, itemData) =>({modalStatus, itemData})
)

export const setModal = (modalStatus, itemData) => {
	return (dispatch, getState)=> {
		dispatch(SET_MODAL(modalStatus, itemData))
	}
}

export const setCategoryData = () => (dispatch, getState)=> {
	dispatch(FETCH_CAT_DATA(true))
	fetch('/api/data.json').then(response=> response.json())
		.then((responseData)=>{
			dispatch(RECEIVE_CAT_DATA(responseData))
		})
		.catch((e)=>{console.log(e)})

}

export const setCategoryItemData = (item) => (dispatch, getState)=> {
	dispatch(FETCH_CAT_DATA(true))
	fetch('/api/data.json').then(response=> response.json())
		.then((responseData)=>{
			responseData.forEach((data, id)=> {
				if(data.cat_id===item.cat_id) {
					dispatch(RECEIVE_CAT_ITEM_DATA(responseData[id]))
				}
			})
			
		})
		//.catch((e)=>{console.log(e)})

}

