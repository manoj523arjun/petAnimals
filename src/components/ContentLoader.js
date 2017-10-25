
import React from 'react';

export const ContentLoader = (props) => {
	let {loadingText} = props;
	return (
        <div className="block-related">
        	<div className="block-absolute">
          		<p className="text-center">{loadingText}</p>
          		<div className="app-clearfix"> </div>
          	</div>
        </div>
	)
}