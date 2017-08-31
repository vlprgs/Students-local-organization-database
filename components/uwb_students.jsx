import React from 'react';
import ReactDOM from 'react-dom';
import {
        Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
      } from 'react-router';

class UwbStudents extends React.Component{
  render() {
    return <div className="infoBox">
      <list className="UwbStudentList">
        <ul></ul>
        <ul></ul>
      </list>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <textarea></textarea>
      </form>
    </div>
  }
}
export default UwbStudents
