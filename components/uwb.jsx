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

class MainUwB extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            studentPanelText: "student",
            textSize: "50px"
          }
        }
        MouseOverStudentHandle = () => {
          this.setState({studentPanelText: "jeszcze wiecej studentow! W sensie powinien byc tutaj obszerny opis co to jest"})
          this.setState({textSize: "14px"})
        }
        MouseOutStudentHandle = () => {
          this.setState({studentPanelText: "Studenci"});
          this.setState({textSize: "50px"})
        }
        render() {
          return <div>
            <Link to="/uwb_students" className="infoBoxPanel">
              <div className="StudentPanel" style={{
                fontSize: this.state.textSize
              }} onMouseOver={this.MouseOverStudentHandle} onMouseOut={this.MouseOutStudentHandle}>
                {this.state.studentPanelText}
              </div>
              <div className="StudentPic"></div>
              <div className="StudentDescription">Tutaj każdy student moze zamieścić swoje ogłoszenie o poszukiwaniu ciekawego zajęcia :)
              </div>
            </Link>
            <Link to="/uwb_formal" className="infoBoxPanel">
              <div className="FormalPanel"></div>
              <div className="StudentPicB"></div>
              <div className="FormalDescription">
                <b>GRUPY FORMALNE</b>to koła naukowe, organizacje studenckie i stowarzyszenia legalnie działające na uczelni
              </div>
            </Link>
            <Link to="uwb_informal" className="infoBoxPanel">
              <div className="InformalPanel"></div>
              <div className="StudentPicC"></div>
              <div className="informalDescription">
                Grupy nieformalne są wspólne dla wszystkich uczelni. Należą do nic ci, którzy chcą razem zrobić coś ciekawego, lub organizacje które nie działają formalnie na uczelni, ale realizują np: projekty studenckie.
              </div>
            </Link>
          </div>
        }
      }






      export default MainUwB
