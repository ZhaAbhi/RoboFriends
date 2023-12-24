import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import "tachyons";
import CardList from "../components/CardList";
import SearchField from "../components/SearchField";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
function App(props) {
  const {
    searchField,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
    error,
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return isPending || error ? (
    <h1 className="tc">LOADING...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchField onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
