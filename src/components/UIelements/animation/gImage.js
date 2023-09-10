import React from 'react';
import { Container } from 'reactstrap';
import './gImage.css';

const Gimage = (props) => {
 return (
  <Container className="gallery-image">
   <img src={props.link} alt="react-logo"></img>
  </Container>
 );
};
export default Gimage;
