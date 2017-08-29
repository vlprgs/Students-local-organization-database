import React from 'react';
import ReactDOM from 'react-dom';
import { RWD } from 'react-rwd';
import { useScroll } from 'react-router-scroll';
import {
        Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
      } from 'react-router';




    class HeaderBox extends React.Component {
      constructor(props){
        super(props)
        this.state={
        }
      }
      render() {
        return <div>
        <header>
        <div className="Menu">
          <ul className="MenuList">
            <li><Link to="/" className="MenuButton" >Strona główna</Link></li>
            <li><Link to="/uczelnie" className="MenuButton" >Uczelnie</Link></li>
            <li><Link to="/kontakt" className="MenuButton" >Kontakt</Link></li>
            <li><Link to="/about" className="MenuButton" >O nas</Link></li>
          </ul>
          <ul className="styleList">S<li>PB</li><li>UwB</li><li>UMB</li></ul>
        </div>
      </header>
      <row>
          {this.props.children}
        </row>
          <footer>cokolwiek</footer>
          </div>

      }
    }
    class MainBox extends React.Component {
      render() {
        return <div>
          <div className="infoBox">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">Lorem ipsum cscscsdcdscd</span>
            </picture>
          </div>

        </div>
      }
    }
    class MainBoxSchools extends React.Component {
      render() {
        return <div>
          <Link to="https://google.com" className="infoBoxUwB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">Uczelnia nr 1</span>
            </picture>
          </Link>
          <Link to="https://google.com" className="infoBoxPB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">uczelnia nr 2</span>
            </picture>
          </Link>
          <Link to="https://google.com" className="infoBoxUMB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">uczelnia nr 3</span>
            </picture>
          </Link>
        </div>
      }
    }
    class MainBoxContact extends React.Component {
      render() {
        return <row>
            <contactBox className="contactBox">
              <div className="contactCircle"></div>
              <div className="contactInfo">Rafał Sołoniewicz<br></br>e-mail:jakiolwiek@placeholder<br></br>telefon<br></br>Adres<br></br></div>
            </contactBox>
        </row>
      }
    }
    class MainBoxAbout extends React.Component {
      render() {
        return <div>
            onas
        </div>
      }
    }
    class NotFound extends React.Component {
      render() {
        return <div>
            404
        </div>
      }
    }
    class App extends React.Component {
      render() {
        return <Router history={hashHistory}>
                        <Route path='/' component={HeaderBox} >
                            <IndexRoute component={MainBox}/>
                            <Route path='/uczelnie' component={MainBoxSchools} />
                            <Route path='/kontakt' component={MainBoxContact} />
                            <Route path='/about' component={MainBoxAbout} />
                            <Route path='*' component={NotFound} />
                        </Route>
                    </Router>;
      }
    }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
