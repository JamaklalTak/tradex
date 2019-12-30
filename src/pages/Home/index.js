import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import DealInfoModal from '../../components/DealInfoModal';
import DealRoom from '../../components/DealRoom';
import DropDown from '../../helpers/DropDown';

import HomeStyleContainer from './Home.styled';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataToRender, SetDataToRender] = useState({});
  const data = [
      {
          id: 1,
          name: 'Log Out'
      }
  ];

  const _handleDataRowClick = (rowData) => {
    SetDataToRender(rowData);
    setIsOpen(true);
  };

  const _handleModalClose = () => {
    setIsOpen(false);
  }

  return(
    <HomeStyleContainer>
      <div className='homeHeader'>
        <DropDown className='profileDropDown' data={data} selectedOption='Alan Lambert'/>
      </div>
      <div className='homeBody'>
        <DealRoom _handleDataRowClick={_handleDataRowClick}/>
      </div>

      <DealInfoModal isOpen={isOpen} data={dataToRender} _handleModalClose={_handleModalClose}/>
    </HomeStyleContainer>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Home);