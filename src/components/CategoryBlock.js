

import React from 'react';
import {Link} from 'react-router';

export const CategoryBlock = (props) => {
	let {categoryData, type} = props;
	let content;
	if(categoryData.length>0) {
		if(type==="parent") {
			content = categoryData.map((data, id)=> <div key={data.cat_id} className="col-4 sm-block-6 xs-block block-clear">
				<Link to={{pathname: 'category/'+data.breed_name.split(" ").join("_"), state: { data }}} className="content-block transition">
					<div className="block-overflow">
						<img className="transition" alt={data.breed_name} src={data.image} height="100%" />
					</div>
					<div className="block-title transition">{data.breed_name}</div>
				</Link>
			</div>
			)
		} else {
			content = categoryData.map((data, id)=> <div key={id.toString()} className="col-4 sm-block-6 xs-block block-clear">
				<div className="content-block transition text-black">
					<Link onClick={props.setModalShow.bind(this, true, data)} className="hover-overlay transition m-bottom-10">
						<img alt={data.name} src={data.image} height="100%" />
						<div className="badge text-white"><i className="fa fa-heart fa-1x"></i> {data.likes}</div>
						<div className="block-absolute explore transition">
							<button className="btn btn-transparent" style={{color:'#dddddd'}}>EXPLORE</button>
						</div>
					</Link>
					<div className="text-black text-sm m-bottom-10">{data.name}</div>
					<div className="content-left">
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Age</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs">{data.properties.age}</div>
						</div>
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Color</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs">{data.properties.color}</div>
						</div>
						<div className="display-tbl m-bottom-10">
							<div className="display-cell text-xs">Price</div>
							<div className="display-cell text-xs">:</div>
							<div className="display-cell text-xs text-bold">{data.price}</div>
						</div>
					</div>
					<div className="content-right">
						<button className="btn btn-primary text-white m-top-30">ADD TO CART</button>
					</div>
					<div className="app-clearfix"> </div>
				</div>
			</div>
			)
		}
		
	}
	return (
		<div>{content}</div>
	)
}