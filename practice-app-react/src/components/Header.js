import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";
import logoImg from "../imgs/grapecity.png";
export default class Header extends Component {
	render() {
		return (
			<div className="header nav-row">
				<div className="nav-col" id="nav-logo">
					<div id="logo">
						<a
							href="index.html"
							target="myFrame"
							aria-expanded="true"
						>
							<img
								className="logo-img-pc"
								src={logoImg}
								alt="logo"
							/>
						</a>
					</div>
				</div>

				<div className="nav-col" id="nav-menu">
					<ul id="pc-ul">
						<li>
							<a href="personInfo.html" target="myFrame">
								个人信息
							</a>
						</li>

						<li>
							<a href="favarate.html" target="myFrame">
								我的收藏
							</a>
						</li>
						<li>
							<a href="activities.html" target="myFrame">
								活动页面
							</a>
						</li>
					</ul>
				</div>
				<div className="nav-col" id="nav-searchbox">
					<form action="" id="nav-searchbox-form">
						<input
							type="search"
							id="search-editor"
							list="data_list1"
							autoComplete="off"
						/>
						<datalist className="data_list" id="data_list1" />
						<input type="submit" id="search-submit" value="搜索" />
					</form>
				</div>
			</div>
		);
	}
}
let rate = 1;
console.log("★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate));
connect()(Header);
