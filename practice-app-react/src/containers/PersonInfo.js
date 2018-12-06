import React, { Component } from "react";
import Username from "../components/Username";
import Password from "../components/Password";
import Submit from "../components/Submit";
import Email from "../components/Email";
import "./PersonInfo.scss";
const ITEM_NUMBER = 4;
export default class PersonInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValidNumber: 0,
			disable: true,
			info: {
				username: window.localStorage.getItem("username") || "",
				password: window.localStorage.getItem("password") || "",
				email: window.localStorage.getItem("email") || ""
			}
		};
		if (window.localStorage.getItem("username")) {
			this.state.isValidNumber = ITEM_NUMBER;
			this.state.disable = false;
		}
		this.onSaveAll = this.onSaveAll.bind(this);
		this.changeValidNumber = this.changeValidNumber.bind(this);
		this.onSaveItem = this.onSaveItem.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSaveAll() {
		for (const key in this.state.info) {
			if (this.state.info.hasOwnProperty(key)) {
				window.localStorage.setItem(key, this.state.info[key]);
			}
		}
	}
	onSaveItem(type, value) {
		for (const key in { ...this.state.info }) {
			if (this.state.info.hasOwnProperty(key) && key === type) {
				let newState = { ...this.state };
				newState.info[key] = value;
				this.setState(newState);
				return;
			}
		}
	}
	changeValidNumber(isValid) {
		console.log("changeValidNumber----" + isValid);
		let isValidNumber = this.state.isValidNumber;
		isValidNumber = isValid ? isValidNumber + 1 : isValidNumber - 1;
		this.setState(
			{
				isValidNumber: isValidNumber,
				disable: isValidNumber !== ITEM_NUMBER
			},
			() => {
				console.log("isValidNumber----" + this.state.isValidNumber);
				console.log("disable:" + this.state.disable);
			}
		);
	}
	onSubmit(e) {
		this.onSaveAll();
		this.props.history.push("/success");
	}
	render() {
		return (
			<div className="personInfo">
				<form onSubmit={this.onSubmit}>
					<Username
						value={window.localStorage.getItem("username")}
						changeValidNumber={this.changeValidNumber}
						onSaveItem={this.onSaveItem}
					/>
					<Password
						value={window.localStorage.getItem("password")}
						changeValidNumber={this.changeValidNumber}
						onSaveItem={this.onSaveItem}
					/>
					<Email
						value={window.localStorage.getItem("email")}
						changeValidNumber={this.changeValidNumber}
						onSaveItem={this.onSaveItem}
					/>
					<Submit disable={this.state.disable} />
				</form>
			</div>
		);
	}
}
