import React, { Component } from "react";
import PropTypes from "prop-types";

export class Username extends Component {
	constructor(props) {
		super(props);
		const { value } = this.props;
		this.state = {
			isValid: Boolean(value) || false,
			isValidChange: false,
			isFirstEdit: true
		};
		this.disableFirstEdit = this.disableFirstEdit.bind(this);
		this.validate = this.validate.bind(this);
	}
	disableFirstEdit() {
		this.setState({ isFirstEdit: false });
	}
	validate(e) {
		const { onSaveItem, changeValidNumber } = this.props;
		let regex = /^[a-z0-9_]+$/;
		let isValid = regex.test(e.target.value);
		if (isValid) {
			onSaveItem("username", e.target.value);
		}
		console.log("isValid:" + isValid);
		let isValidChange = isValid !== this.state.isValid;
		console.log("isValidChange:" + isValidChange);
		this.setState(
			{
				isValid: isValid,
				isValidChange: isValidChange
			},
			() => {
				if (this.state.isValidChange) {
					return changeValidNumber(this.state.isValid);
				}
			}
		);
	}

	render() {
		const { value } = this.props;
		return (
			<div className="username">
				<div className="left-label">
					<label htmlFor="username">用户名:</label>
				</div>
				<div className="right-input">
					<input
						type="text"
						defaultValue={value}
						name="username"
						id="username"
						onFocus={this.disableFirstEdit}
						onChange={this.validate}
						onClick={this.validate}
						onBlur={this.validate}
					/>
					<span>
						{this.state.isFirstEdit
							? ""
							: this.state.isValid
							? ""
							: "用户名输入有误"}
					</span>
				</div>
			</div>
		);
	}
}
Username.defaultProps = {
	value: ""
};
Username.protoTypes = {
	onSaveItem: PropTypes.func.isRequired,
	changeValidNumber: PropTypes.func.isRequired
};
export default Username;
