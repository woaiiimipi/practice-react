import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Success.scss';
class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className = 'success'>
        <h3 className = 'tip'>个人信息修改成功</h3>
        <Link to="/">
          <button className = 'rewrite'>再次修改</button>
        </Link>
      </div>
    );
  }
}
export default Success;
