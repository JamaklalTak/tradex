import React from 'react';

import InputStyleContainer from './Input.styled';

const Input = (props) => {
    const { placeHolder, onChange, value } = props;

    return(
        <InputStyleContainer>
        <input
            className={props.className}
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
            minLength={props.minLength}
            maxLength={props.maxLength}
            type={props.type || 'text'}
        />
        {props.children ? props.children : ''}
        {props.showError ? <div className="errorMessage">{props.errorMessage || 'Invalid field!'}</div> : null}
        </InputStyleContainer>
    );
}

export default Input;