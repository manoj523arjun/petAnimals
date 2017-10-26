
import React from 'react';
import { Link } from 'react-router';

export const ItemModal = (props) => {
	console.log(props.modalData)
	return (
		<div className="modal transition">
			<div className="modal-box">
				<div className="modal-header">
					<button onClick={props.closeHandle.bind(this, false, {})} className="btn close-block">
						<i className="fa fa-close fa-2x"></i>
					</button>
				</div>
				<div className="modal-body">
					<div className="col-6 xs-block">
						<div className="modal-img">
							<img alt={props.modalData.name} src={props.modalData.image} />
						</div>
					</div>
					<div className="col-6 xs-block">
						<h3 className="text-primary text-md">{props.modalData.name}</h3>
						<p>{props.modalData.description}</p>
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Age</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs">{props.modalData.properties.age}</div>
						</div>
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Color</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs">{props.modalData.properties.color}</div>
						</div>
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Price</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs text-bold">{props.modalData.price}</div>
						</div>
						<button className="btn btn-primary text-white m-top-10">ADD TO CART</button>
					</div>
				</div>
				<div className="modal-footer">

				</div>
			</div>
		</div>
	);
}