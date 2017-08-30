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
        return <div id="backgroundImage">
        <header>
          <div >
        <div className="Menu">
          <ul className="MenuList">
            <li><Link to="/" className="MenuButton" >Strona główna</Link></li>
            <li><Link to="/uczelnie" className="MenuButton" >Uczelnie</Link></li>
            <li><Link to="/kontakt" className="MenuButton" >Kontakt</Link></li>
            <li><Link to="/about" className="MenuButton" >O nas</Link></li>
          </ul>
          <ul className="styleList">S<li>PB</li><li>UwB</li><li>UMB</li></ul>
        </div>
        </div>
      </header>
      <main className="container">
          {this.props.children}
        </main>
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
          <Link to="/uwb" className="infoBoxUwB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">Uniwersytet w Białymstoku</span>
            </picture>
          </Link>
          <Link to="/pb" className="infoBoxPB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">Politechnika Białostocka</span>
            </picture>
          </Link>
          <Link to="/umb" className="infoBoxUMB">
            <picture className="infoBoxCircle"><span className="infoBoxIco"></span>
            <span className="infoBoxInnerText">Uniwersytet Medyczny w Białymstoku</span>
            </picture>
          </Link>
        </div>
      }
    }
    class MainUwB extends React.Component {
      render() {
        return <div>
          <Link to="/uwb_students" className="infoBoxPanel">
            <span className="StudentPanel">Studenci</span><br></br>

            <span style={{margintop: "20px"}}>Uniwersytet </span>

          </Link>
          <Link to="uwb_formal" className="infoBoxPanel">
            <span className="FormalPanel"></span>
            <picture className="infoBoxCircle">
            <span className="infoBoxInnerText">Politechnika </span>
            </picture>
          </Link>
          <Link to="uwb_informal" className="infoBoxPanel">
            <span className="InformalPanel"></span>
            <picture className="infoBoxCircle">
            <span className="infoBoxInnerText">Uniwersytet </span>
            </picture>
          </Link>
        </div>
      }
    }
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
    class MainBoxContact extends React.Component {
      render() {
        return <div>
            <contactBox className="contactBox">
              <div className="contactCircle"></div>
              <div className="contactInfo">Rafał Sołoniewicz<br></br>e-mail:jakiolwiek@placeholder<br></br>telefon<br></br>Adres<br></br></div>
            </contactBox>

        </div>
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
                                <Route path='/uwb' component={MainUwB}/>
                                <Route path='/pb' component={MainPB}/>
                                <Route path='/umb' component={MainUMB}/>

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
