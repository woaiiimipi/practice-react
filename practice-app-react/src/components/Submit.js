import React, { Component } from "react";
export class Submit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValid: false,
			isValidChange: false
		};
  }
  
	render() {
		const {disable } = this.props;
		return (
			<div className="submit">
					<input
						type="submit"
						name="submit"
						defaultValue="SUBMIT"
						disabled={disable}
					/>

          <input
						type="reset"
						name="reset"
					/>
			</div>
		);
	}
}

export default Submit;
