import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const TestRouter = () => (
//   <Router>
//     <div>
//       <Header />

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );

// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>

//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:id`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );
// const Header = () => (
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//     </li>
//     <li>
//       <Link to="/topics">Topics</Link>
//     </li>
//   </ul>
// );

// export default TestRouter;
class TestRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/bug">Bug</Link>
              </li>
              <li>
                <Link to="/vip">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <Route path="/" component={About} />
            <Route path="/bug" component={Bug} />
            <Route path="/vip" component={Vip} />
          </div>
        </div>
      </Router>
    );
  }
}
const About = () => (
  <div>
    <h3>About!</h3>
  </div>
);
const Bug = () => (
  <div>
    <h3>Bug!</h3>
  </div>
);
const Vip = () => (
  <div>
    <h3>Vip!</h3>
  </div>
);
export default TestRouter;
