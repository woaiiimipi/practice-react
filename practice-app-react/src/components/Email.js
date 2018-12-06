import React, { Component } from "react";
import { getCookie } from "../utils/CookieUtils";

export class Email extends Component {
	constructor(props) {
		super(props);
		const {value} = this.props;
		this.state = {
			isFirstEdit: true,
			isValid: Boolean(value) || false,
			isValidChange: false
		};
		this.validate = this.validate.bind(this);
		this.disableFirstEdit = this.disableFirstEdit.bind(this);
	}
	disableFirstEdit() {
		this.setState({ isFirstEdit: false });
	}
	validate(e) {
		const { onSaveItem,changeValidNumber } = this.props;
		let regex = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;

		let isValid = regex.test(e.target.value);
		if(isValid){
			onSaveItem("email",e.target.value);
		}
		let isValidChange = isValid !== this.state.isValid;
		this.setState(
			{
				isValid: isValid,
				isValidChange: isValidChange
			},
			() => {
				if (this.state.isValidChange) {
					changeValidNumber(this.state.isValid);
				}
			}
		);
	}
	render() {
		const {value} = this.props;
		let email = value||"";
		return (
			<div>
				<div className="left-label">
					<label htmlFor="email">邮箱:</label>
				</div>
				<div className="right-input">
					<input
						defaultValue={email}
						type="text"
						name="email"
						id="email"
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
							: "邮箱输入格式有误"}
					</span>
				</div>
			</div>
		);
	}
}

export default Email;
