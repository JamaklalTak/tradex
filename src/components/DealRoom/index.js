import React, { useState } from 'react';

import Tab from '../../helpers/Tab';
import Image from '../../helpers/Image';

import DealRoomStyleContainer from './DealRoom.styled';

const DealRoom = (props) => {
  const { _handleDataRowClick } = props;
  const [optedTab, setOptedTab] = useState('003');

  const dealRoomTitleData =[
    {
      id: '001',
      name: 'External Issuances'
    },
    {
      id: '002',
      name: 'Favorite Issuances'
    },
    {
      id: '003',
      name: 'My Issuances'
    },
    {
      id: '004',
      name: 'MNDA Management'
    }
  ];

  const dealRoomData = [
    {
      "name": 'Energy Infrastructure',
      "industry-type": 'Financial Services',
      "issuance-type": 'Equity',
      "target-raise": '$23M',
      "pre-money-valuation": '$1M',
      "amount-raised": '$1M',
      "location": 'Europe',
      "status": 'inprogress'
    },
  {
      "name": 'ABC',
      "industry-type": 'Financial Services',
      "issuance-type": 'Investment Fund',
      "target-raise": '$23M',
      "pre-money-valuation": '$1M',
      "amount-raised": '$1M',
      "location": 'U.S.',
      "status": 'inprogress'
    },
  {
      "name": 'Alternative Gas Extraction',
      "industry-type": 'Space',
      "issuance-type": 'Debt',
      "target-raise": '$23M',
      "pre-money-valuation": '$1M',
      "amount-raised": '$1M',
      "location": 'Europe',
      "status": 'closed'
    },
  ];

  const _handleTabSelection = (id) => {
    setOptedTab(id);
  };

  const _handleAddIssuanceClick = () => {

  };

  const _handleFilterMenuClick = () => {

  };

  return(
    <DealRoomStyleContainer>
      <div className='title header28'>Deal Room</div>
      <Tab
        tabDataArray={dealRoomTitleData}
        viewType='H'
        selectedTab={optedTab}
        _handleTabSelection={_handleTabSelection}
      />
      {optedTab === '003' ?
      <div className='dealRoomBody'>
        <div className='dealRoomTopBtnRow'>
          <div className='addIssuanceBtn Btn' onClick={() => _handleAddIssuanceClick()}>
            <Image src={require('../../assets/Images/plus.svg')} className='icon' alt='plus'/>
            <span>Add issuance</span>
          </div>
          <div className='filterBtn Btn' onClick={_handleFilterMenuClick}>
            <Image src={require('../../assets/Images/menu.svg')} className='icon' alt='menu'/>
            <span>Filters</span>
          </div>
        </div>
        <div className='dealRoomTitleRow'>
          <div className='dealRoomTitle mainTitleType'><span>Name &amp; Industry Type</span></div>
          <div className='dealRoomTitle'>
            <span>Issuance Type</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
          <div className='dealRoomTitle'>
            <span>Target Raise</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
          <div className='dealRoomTitle'>
            <span>Pre-Money Valuation</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
          <div className='dealRoomTitle'>
            <span>Amount Raised</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
          <div className='dealRoomTitle'>
            <span>Location</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
          <div className='dealRoomTitle'>
            <span>Status</span>
            <Image src={require('../../assets/Images/caretDown-grey.svg')} alt=''/>
          </div>
        </div>
        <div className='dealRoomDataGrp'>
          {dealRoomData && dealRoomData.map(item => {
            return(<div className='dealRoomDataRow' key={item.id} onClick={() => _handleDataRowClick(item)}>
            <div className='dealRoomDataRowTitleType'>
              <div className='textNormal14'>{item.name}</div>
              <div className='textNormal14 industryType'>{item['industry-type']}</div>
            </div>
            <div className='dealRoomDataRowTitle text14'>{item['issuance-type']}</div>
            <div className='dealRoomDataRowTitle'>{item['target-raise']}</div>
            <div className='dealRoomDataRowTitle'>{item['pre-money-valuation']}</div>
            <div className='dealRoomDataRowTitle'>{item['amount-raised']}</div>
            <div className='dealRoomDataRowTitle'>{item.location}</div>
            <div className='dealRoomDataRowTitle textNormal12'>
              {item.status === 'inprogress' &&
              <>
                <Image className='statusBtn' src={require('../../assets/Images/blueEllipse.svg')}/>
                <span>In Progress</span>
              </>
              }
              {item.status === 'closed' &&
              <>
                <Image className='statusBtn' src={require('../../assets/Images/greenEllipse.svg')}/>
                <span>Closed</span>
              </>
              }
            </div>
          </div>)})
          }
        </div>
      </div>
      :
        <div className='noData header28'>No Data Exist.</div>
      }
    </DealRoomStyleContainer>);
}

export default DealRoom;