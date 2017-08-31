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

class MainUMB extends React.Component {
  render() {
    return <div>
      <Link to="https://google.com" className="infoBoxPanel">
        <picture className="infoBoxCircle"><span className="StudentPanel"></span>
        <span className="infoBoxInnerText">Uniwersytet w Białymstoku</span>
        </picture>
      </Link>
      <Link to="https://google.com" className="infoBoxPanel">
        <picture className="infoBoxCircle"><span className="FormalPanel"></span>
        <span className="infoBoxInnerText">Politechnika Białostocka</span>
        </picture>
      </Link>
      <Link to="https://google.com" className="infoBoxPanel">
        <picture className="infoBoxCircle"><span className="InformalPanel"></span>
        <span className="infoBoxInnerText">Uniwersytet Medyczny w Białymstoku</span>
        </picture>
      </Link>
    </div>
  }
}
export default MainUMB
