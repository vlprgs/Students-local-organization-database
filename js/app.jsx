import React from 'react';
import ReactDOM from 'react-dom';
import { RWD } from 'react-rwd';
import { useScroll } from 'react-router-scroll';
import $ from 'jquery'
import cycle from 'jquery-cycle'
import {
        Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
      } from 'react-router';
import MainUwB from '../components/uwb.jsx';
import UwbStudents from '../components/uwb_students.jsx';
import MainPB from '../components/pb.jsx';
import MainUMB from '../components/umb.jsx';

/////////////////  jQuery
$(function() {
      var rotate = function() {
        $("#backgroundImage")
          .delay(3500).queue(function() {
              $(this).css({
                  "background-image": "url('../img/fasada.JPG')",
                  "transition": "2.5s all"
              });
              $(this).dequeue();
          })
          .delay(3500).queue(function() {
              $(this).css({
                  "background-image": "url('../img/pb_kampus.jpg')",
                  "transition": "2.5s all"
              });
              $(this).dequeue();
          })
          .delay(3500).queue(function(next) {
              $(this).css({
                  "background-image": "url('../img/kampusuwb.JPG')",
                  "transition": "2.5s all"
              });
              $(this).dequeue();
              next();
          })
          .queue(rotate);
      };

      rotate()

});

///////////////////   React.js
    class HeaderBox extends React.Component {
      constructor(props){
        super(props)
        this.state={
          studentPanelText: "student",
          footerText: "Copyrightów nie ma, projekt w ramach warsztatów Coders Lab, jako projekt zaliczeniowy kursu Frontend. Wszystkie chwyty dozwolone, grafiki użyte jedynie w celach testowych"
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
                    <footer>
                      <text>{this.state.footerText}</text>
                    </footer>
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
                            <Route path="/uwb_students" component={UwbStudents}/>
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
