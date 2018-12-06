import React, { Component } from "react";
import { getCookie } from "../utils/CookieUtils";
export class Password extends Component {
	constructor(props) {
		super(props);
		const { value } = this.props;
		this.state = {
			isPWFirstEdit: true,
			isPWRepeatFirstEdit: true,
			isValid: Boolean(value) || false,
			isValidChange: false,
			isPasswordrepeatValid: Boolean(value) || false,
			isPasswordrepeatValidChange: false
		};
		this.disablePWFirstEdit = this.disablePWFirstEdit.bind(this);
		this.disablePWRepeatFirstEdit = this.disablePWRepeatFirstEdit.bind(
			this
		);
		this.validate = this.validate.bind(this);
		this.validateRepeat = this.validateRepeat.bind(this);
	}
	disablePWFirstEdit() {
		this.setState({ isPWFirstEdit: false });
	}
	disablePWRepeatFirstEdit() {
		this.setState({ isPWRepeatFirstEdit: false });
	}
	//密码校验
	validate(e) {
		const { onSaveItem, changeValidNumber } = this.props;
		let regex = /^.{6,20}$/;
		let isValid = regex.test(e.target.value);
		if (isValid) {
			onSaveItem("password", e.target.value);
		}
		let isValidChange = isValid !== this.state.isValid;
		console.log("isValidChange:" + isValid);
		this.setState(
			{
				isValid: isValid,
				isValidChange: isValidChange
			},
			() => {
				console.log(
					"this.state.isValidChange::" + this.state.isValidChange
				);
				if (isValidChange) {
					changeValidNumber(this.state.isValid);
				}
			}
		);
	}
	//密码确认校验
	validateRepeat(e) {
		const { changeValidNumber } = this.props;
		let isPasswordrepeatValid = false;
		let isPasswordrepeatValidChange = false;
		let passwordrepeatValue = e.target.value || "";

		if (passwordrepeatValue === this.refs.passwordInput.value) {
			isPasswordrepeatValid = true;
		}
		isPasswordrepeatValidChange =
			this.state.isPasswordrepeatValid !== isPasswordrepeatValid;
		this.setState(
			{
				isPasswordrepeatValid: isPasswordrepeatValid,
				isPasswordrepeatValidChange: isPasswordrepeatValidChange
			},
			() => {
				if (this.state.isPasswordrepeatValidChange) {
					changeValidNumber(this.state.isPasswordrepeatValid);
				}
			}
		);
	}
	render() {
		const { value } = this.props;
		let password = value || "";
		return (
			<div>
				<div>
					<div className="left-label">
						<label htmlFor="password">密码:</label>
					</div>
					<div className="right-input">
						<input
							defaultValue={password}
							type="password"
							name="password"
							id="password"
							onFocus={this.disablePWFirstEdit}
							onChange={this.validate}
							onClick={this.validate}
							ref="passwordInput"
							onBlur={this.validate}
						/>
						<span>
							{this.state.isPWFirstEdit
								? ""
								: this.state.isValid
								? ""
								: "密码输入格式不正确"}
						</span>
					</div>
				</div>
				<div>
					<div className="left-label">
						<label htmlFor="passwordrepeat">重复密码:</label>
					</div>
					<div className="right-input">
						<input
							defaultValue={password}
							type="password"
							name="passwordrepeat"
							id="passwordrepeat"
							onFocus={this.disablePWRepeatFirstEdit}
							onClick={this.validateRepeat}
							onChange={this.validateRepeat}
							ref="passwordrepeatInput"
						/>
						<span>
							{this.state.isPWRepeatFirstEdit
								? ""
								: this.state.isPasswordrepeatValid
								? ""
								: "空或两次密码输入不一致"}
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Password;
