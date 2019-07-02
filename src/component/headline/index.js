/* eslint-disable */

import React, { Component } from 'react';

class Headline extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { header, description } = this.props;

		if (!header) {
			return null;
		}

		return (
			<div>
				<h1>{header}</h1>
				<p>{description}</p>
			</div>
		);
	}
};

export default Headline;