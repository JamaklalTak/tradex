import React, { useState, useEffect } from 'react';

import Image from '../Image';

import DropDownStyleContainer from './DropDown.styled';

const DropDown = (props) => {
  const { data, selectedOption, className } = props;
  const [showList, setShowList] = useState(false);

  const _handleOptionSelection = (option) => {
  };

  return(
    <DropDownStyleContainer className={className}>
      <div className='selectedOption' onClick={() => setShowList(!showList)}>
        <span className='textNormal16'>{selectedOption}</span>
        <Image src={require('../../assets/Images/caretDown.svg')} alt='caretDown'/>
      </div>
      {showList && <div className='optionList'>{data && data.length > 0 && data.map(item => {
          return <div className='options' onClick={() => _handleOptionSelection(item.name)}>{item.name}</div>
      })
      }
      </div>}
    </DropDownStyleContainer>
  );
}

export default DropDown;