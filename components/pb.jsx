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

 class MainPB extends React.Component {
  render() {
    return <div>
      <Link to="https://google.com" className="infoBoxUwB">
        <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
        <span className="infoBoxInnerText">Uniwersytet w Białymstoku</span>
        </picture>
      </Link>
      <Link to="https://google.com" className="infoBoxPB">
        <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
        <span className="infoBoxInnerText">Politechnika Białostocka</span>
        </picture>
      </Link>
      <Link to="https://google.com" className="infoBoxUMB">
        <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
        <span className="infoBoxInnerText">Uniwersytet Medyczny w Białymstoku</span>
        </picture>
      </Link>
    </div>
  }
}
export default MainPB
