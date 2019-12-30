import React, { useState, useEffect } from 'react';
import Image from '../../helpers/Image';
import Tab from '../../helpers/Tab';

import SidePanelStyleContainer from './SidePanel.styled';

const SidePanel = (props) => {
  const [selectedTab, setSelectedTab] = useState();
  const Data = [
    {
      id: 1,
      name: 'Deal Room',
      path: '/home'
    },
    {
      id: 2,
      name: 'Broker-Dealer Registry',
      path: '/registry'
    },
    {
      id: 3,
      name: 'Issuance Statics',
      path: '/issuance'
    }
  ];
  useEffect(() => {
    Data.forEach(item => {
      if(item.path === props.history.location.pathname){
        setSelectedTab(item.id);
      }
    });
  }, []);

  const _handleActiveTabClick = (id, path) => {
    setSelectedTab(id);
    props.history.push(path);
  }

  return(
    <SidePanelStyleContainer>
      <Image className='siteLogo' src={require('../../assets/Images/logo.svg')} alt='logo' onClick={() => _handleActiveTabClick(1, '/home')}/>
      <div className='panelBody'>
        <Tab tabDataArray={Data} viewType='V' selectedTab={selectedTab} _handleTabSelection={_handleActiveTabClick} />
      </div>
      <div className='panelFooter textNormal12'>
        <div className='footerText'>Contact us if you have questions:<br /><span>Support@liquidity.digital</span></div>
      </div>
    </SidePanelStyleContainer>
  );
}

export default SidePanel;