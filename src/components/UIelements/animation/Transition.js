import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Transition.css';
const Transition = (props) => {
 return (
  <CSSTransition
   in={props.bool}
   timeout={200}
   classNames={'slide-in-left'}
   mountOnEnter
   unmountOnExit
  >
   {props.children}
  </CSSTransition>
 );
};
export default Transition;
