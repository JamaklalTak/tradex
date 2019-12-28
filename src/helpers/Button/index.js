import React from 'react';

import ButtonStyleContainer from './Button.styled';

const Button = (props) => {
    const { value, onClick, className, disable } = props;
    return(
      <ButtonStyleContainer
        disable={disable}
      >
        <button
          className={className}
          onClick={onClick}
        >
          {value}
        </button>
      </ButtonStyleContainer>
    );
}

export default Button;