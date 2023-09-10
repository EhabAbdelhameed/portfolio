import React, { useReducer, useEffect } from 'react';
import { Input } from 'reactstrap';
import { validate } from '../util/validators';
import './inputField.css';

const inputReducer = (inputState, action) => {
   switch (action.type) {
      case 'CHANGE':
         return {
            ...inputState,
            value: action.value,
            isValid: validate(action.value, action.validators),
         };
      case 'TOUCH':
         return {
            ...inputState,
            isTouched: true,
         };
      default:
         return inputState;
   }
};

const CustomInput = (props) => {
   const [inputState, dispatch] = useReducer(inputReducer, {
      value: props.value || '',
      isTouched: false,
      isValid: props.initialValid || false,
   });
   const { value, isValid } = inputState;
   const { id, onInput } = props;

   useEffect(() => {
      props.onInput(id, value, isValid);
      // eslint-disable-next-line
   }, [id, isValid, value, onInput]);

   const changeHandler = (event) => {
      dispatch({
         type: 'CHANGE',
         value: event.target.value,
         validators: props.validators,
      });
   };

   const touchHandler = () => {
      dispatch({ type: 'TOUCH' });
   };

   return (
      <div>
         <Input
            className={` ${
               !inputState.isValid && inputState.isTouched
                  ? 'form-control__invalid'
                  : ''
            } `}
            id={props.id}
            placeholder={props.placeholder}
            type={props.type}
            rows={props.rows || 3}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
         ></Input>
         {!inputState.isValid && inputState.isTouched && (
            <p className="error-text">{props.errorText}</p>
         )}
      </div>
   );
};
export default CustomInput;
