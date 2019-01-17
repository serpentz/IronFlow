import React, { Component } from "react";

export default class QuestionCard extends Component {
  render() {
      let question = this.props.question
    return (


      <div className="tag-wrapper twitter-main-2">
         <h1 classNameName="heading-card">{question.title}</h1>
         <div className="card card3-content">

         <div className="card card3-question ">
         { question.statement}
           <div className="card card3-question-bottom">
           Solved by:
            <a href="#" target="_blank" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></a>

            </div>
         </div>
      </div>
      </div>



    );
  }
}
