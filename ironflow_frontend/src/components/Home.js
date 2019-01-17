import '../Home.css'


import React, { Component,Fragment } from "react";
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
      <div className="loader--2 loader-main-2" data-ix="page-loader" style={{display: "none", transition: "opacity 200ms ease 0s", opacity: 0}}>
              <div className="background-loader-2"><img src="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a6ab814101a4ae64f4206_Facebook-1s-200px.svg" height="0" alt="" className="image-7" width="0" /></div>
              <p className="paragraph-crypto-loader">PLEASE&nbsp;WAIT</p>
              <div className="loading-title-2">IRON FLOW</div>
              <p className="paragraph-crypto-loader">BY ABSALOM CHERINET</p>
           </div>
           <div className="body-custom-crypto">
           <div className="hero-1-crypto">
              <div className="hero-crypto"></div>
                <div data-poster-url="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-transcode.webm,https://uploads-ssl.webflow.com/5b991c5d6c758280566b3b8a/5b9a67767d3b3e36ee530358_Head-or-Tails-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video-home-crypto w-background-video w-background-video-atom">

                </div>
                <div className="section-hero-top-crypto">
                    <div className="div-s1-news">
                        <a href="#" className="link-block w-inline-block">
                            <div className="news-card">
                                <div className="div-block-6">
                                    <div className="paragraph-no-line">NEWS</div>
                                </div>
                                <div className="paragraph-no-line">Hello World</div>
                            </div>
                        </a>
                    </div>
                    <div className="div-s1-title-intro">
                        <div className="div-block-4">
                            <h1 className="h1 text-white">It’s time to <strong>have feed</strong>, <strong>get news</strong> and <strong>know everything! &nbsp;</strong></h1>
                            <p className="paragraph-aa">Welcome in my template for personalise your feed by your twitter.
                                Copy and past the code from twitter and create one board for all of favorites.
                                Never lose informations. My exemple is created with some crypto news.

                            </p>
                            <div className="div-block-62"><a href="#" target="_blank" className="link-hero">BUY&nbsp;THIS&nbsp;TEMPLATE $20</a></div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="container-crypto">
                 <div className="div-block-11">

                    <section id="Hello-Crypto" className="separator-cat-9">
                       <div className="line-2">
                          <div className="line line-horizontale-short"></div>
                       </div>

                       <div className="line-2">
                          <div className="line line-horizontale-short"></div>
                       </div>
                    </section>
                    <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                       <div className="tab-menu w-tab-menu">
                          <a data-w-tab="News" className="tab-link w-inline-block-block w-tab-link w--current">
                             <div>Top</div>
                          </a>
                          <a  className="tab-link w-inline-block-block w-tab-link">
                             <div className="text-block-8">Recent</div>
                          </a>
                          <a  className="tab-link w-inline-block-block w-tab-link">
                             <div>Unanswered</div>
                          </a>
                          <a className="tab-link w-inline-block-block w-tab-link">
                             <div>Project Ideas</div>
                          </a>
                       </div>
                       <div className="w-tab-content">
                          <div data-w-tab="News" className="w-tab-pane w--tab-active" style={{opacity: 1, transition: "opacity 300ms ease 0s"}}>
                             <div className="row-twitter w-row">
                                <div className="basic-column w-col w-col-4">
                                   <div className="tag-wrapper twitter-main-2">

                                         <h1 className="info-card">Js, React, Redux</h1>

                                      <div className="card card3-content">

                                        <div className="card card3-question ">
                                         Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                        </div>
                                      </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 classNameName="heading-card">Ruby</h1>
                                      <div className="card card3-content">

                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">Node</h1>
                                      <div className="card card3-content">

                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                </div>
                                <div className="basic-column w-col w-col-4">
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">Java</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">SQL</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">Web design</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                </div>
                                <div className="basic-column w-col w-col-4">
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">Question</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">Question</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                   <div className="tag-wrapper twitter-main-2">
                                      <h1 className="info-card">ii blockchain</h1>
                                      <div className="card card3-content">
                                      <div className="card card3-question ">
                                       Lorem ipsum dolor sit amet, has autem habemus propriae ne, graeco utamur oblique eu his. Et vim mediocrem signiferumque, no delenit habemus forensibus qui. Munere invenire at usu, ei pri eruditi pericula patrioque, ea mei quod tale velit. Tacimates inciderint cum at, perfecto phaedrum mea cu. Pro ea illum eruditi, ex summo sapientem mei, graeci possim an eum. Ad his stet atqui, probo delectus no qui.
                                      </div>
                                        <div className="card card3-question-bottom">
                                        <div>Solved By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                                                                 </div>
                                        <div className="card card3-question-bottom">
                                        <div>Answered By:</div>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         <Link to="/profile" className="link-navbar contenido redes w-inline-block" style={{"background-color": "rgb(57, 91, 163)"}}><img height="0" src="https://uploads-ssl.webflow.com/5bb935bc82df35adf0b4278a/5bd4141f408ea6ecbf3b3e58_5b75692f30c2325a70cc171e_facebook.png" alt="" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 0px"}}/></Link>
                                         </div>
                                   </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>


                 </div>
              </div>
              <section id="footer" className="footer-3">
                 <div className="footer-left"><a href="https://twitter.com/GarethMoison" className="social_link w-inline-block-block"><img src="https://uploads-ssl.webflow.com/5b67621af109cf31dad8da5c/5b67621af109cf75d2d8da71_Twitter-black.svg" height="0" alt="" className="umanist_twitter" width="0" style={{display: "none !important", visibility: "hidden !important", opacity: "0 !important", "background-position": "0px 15px"}}/></a></div>
                 <div className="header-center">


                 </div>
              </section>
           </div>
           </Fragment>



    );
  }
}
