import React from 'react';
import TopNav from '../Navigation/TopNav';
import { Button, Label, Input } from 'reactstrap';
import InfoCard from "../../components/Card/InfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import './WriteComment.css';

class WriteComment extends React.Component {


  render() {
     return (
       <div className="writecomment__container">
          <div className="infocard__wrapper">
              <InfoCard>
                <div className="infocard__inner">
                 <h2>Say Something</h2>
                   <Label for="textarea">Say something about me*</Label>
                   <Input type="textarea" name="text" placeholder="200 characters remaining" id="textarea" />
                   <Button className="writecomment__button">Send Message <FontAwesomeIcon icon={faPaperPlane} size="sm" /></Button>
                </div>
              </InfoCard>
          </div>
       </div>
     )
  }

}

export default WriteComment;