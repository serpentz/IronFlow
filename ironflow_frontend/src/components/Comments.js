import React, { Component,Fragment } from "react";

import { Route, Switch, Link } from "react-router-dom";
import cx from 'classnames';
import 'reset-css'



class Comments extends Component {
  render() {
    return (



      <Fragment>


<div className="card card-comments mb-3 wow fadeIn">
    <div className="card-header font-weight-bold">1 comment</div>
    <div className="card-body">

    <div className="media d-block d-md-flex mt-4">
        <img className="mb-3" style={{height: "10vh","border-radius": "10px"}} src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
        <div className="media-body text-center text-md-left ml-md-3 ml-0">
            <h5 className="mt-0 font-weight-bold">Miley Steward

            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
        </div>
    </div>

    </div>
</div>


<div className="card mb-3 wow fadeIn">
    <div className="card-header font-weight-bold">Know the answer?</div>
    <div className="card-body">


        <form>


            <div className="form-group">
                <label for="replyFormComment">Your Answer</label>
                <textarea className="form-control" id="replyFormComment" rows="5"></textarea>
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-info btn-md" type="submit">Post</button>
            </div>
        </form>

    </div>
</div>
</Fragment>

    );
  }
}

export default Comments;
