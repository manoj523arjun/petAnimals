
import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
	return (
		<header>
			<div className="main-header">
				<div className="app-container">
					<div className="content-left">
						<Link to="/" className="app-logo text-secondary">
							<span className="text-primary">mycat</span><sub>animals</sub>
						</Link>
					</div>
					<div className="content-right">
						<div className="menu-block">
							<Link><i className="fa fa-bars fa-2x text-black"></i></Link>
						</div>
					</div>
					<div className="app-clearfix"></div>
				</div>
			</div>
		</header>
	);
}