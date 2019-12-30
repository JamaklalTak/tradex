import React, { useState } from 'react';

import Image from '../../helpers/Image';
import Tab from '../../helpers/Tab';

import { StyleModal, DealInfoModalStyleContainer } from './DealInfoModal.styled';

const DealInfoModal = (props) => {
  const { isOpen, _handleModalClose, data } = props;
  const [optedOption, setOptedOption] = useState('d01');

  const Data = [
    {
      id: 'd01',
      name: 'Deal Info'
    },
    {
      id: 'd02',
      name: 'Additional Info'
    }
  ];

  const _handleTabSelection = (id) => {
    setOptedOption(id);
  };
 
  const _handleDownloadBtn = () => {

  };

  return(
    <StyleModal
      isOpen={isOpen}
    >
      <DealInfoModalStyleContainer>
        <div className='modalHeader'>
          <div className='closeBtn' onClick={() => _handleModalClose()}>
            <span className='closeText text14'>Close</span>
            <Image src={require('../../assets/Images/close.svg')} alt='close' />
          </div>
          <Tab tabDataArray={Data} viewType='H' selectedTab={optedOption} _handleTabSelection={_handleTabSelection}/>
        </div>
        <div className='modalBody'>
          <div className='infoTitleGrpContainer'>
            <div className='infoTitleGrp'>
              <div className='infoTitle title14'>Target Raise</div>
              <div className='infoTitle title14'>Amount Raise</div>
              <div className='infoTitle title14'>Valuation</div>
              <div className='infoTitle title14'>Status</div>
            </div>
            <div className='infoTitleDataGrp'>
              <div className='infoData textBold16'>{data['target-raise']}</div>
              <div className='infoData textBold16'>{data['amount-raised']}</div>
              <div className='infoData textBold16'>{data['pre-money-valuation']}</div>
              <div className='infoData note12'>
              {data.status === 'inprogress' &&
              <>
                <Image className='statusBtn' src={require('../../assets/Images/blueEllipse.svg')}/>
                <span>In Progress</span>
              </>
              }
              {data.status === 'closed' &&
              <>
                <Image className='statusBtn' src={require('../../assets/Images/greenEllipse.svg')}/>
                <span>Closed</span>
              </>
              }
              </div>
            </div>
          </div>
          <div className='infoDealDescription'>
            <div className='descriptionTitle noteBold14'>Description</div>
            <div className='descriptionText textNormal12'>As such, Energy Infrastructure naturally includes the traditional utilities
            associated with energy transport and management (coal transport trains, natural gas pipelines,
            electric transmission lines, etc.). </div>
          </div>
          <div className='infoDealRequiredDetail'>
            <div className='requiredTitle noteBold14'>Required</div>
            <div className='requiredDataTable'>
              <div className='requiredDataRow'><span className='textBold12'>Date of creation</span><span className='text12'>May 24, 2019</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Country of Issuance</span><span className='text12'>US</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Industry</span><span className='text12'>Renewable Energy</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Total Issued Shares</span><span className='text12'>100,000,000</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Free Float</span><span className='text12'>1000,000</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Price per Share</span><span className='text12'>$100</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Target Raise</span><span className='text12'>$1</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Amount Raise</span><span className='text12'>$1</span></div>
              <div className='requiredDataRow'><span className='textBold12'>Valuation</span><span className='text12'>$85</span></div>
            </div>
          </div>
        <div className='documentSection'>
          <div className='documentTitle textBold16'>Common Documents</div>
          <div className='documentList'>
            <div className='documents'>
              <span className='documentText title14'>Marketing Deck.docx</span>
              <span className='documentDownloadBtn textNormal16' onClick={() => _handleDownloadBtn()}>
                <Image src={require('../../assets/Images/download.svg')} alt='' />
                <span>Download</span>
              </span>
            </div>
            <div className='documents'>
              <span className='documentText title14'>Presentation.pptx</span>
              <span className='documentDownloadBtn textNormal16' onClick={() => _handleDownloadBtn()}>
                <Image src={require('../../assets/Images/download.svg')} alt='' />
                <span>Download</span>
              </span>
            </div>
          </div>
        </div>
        <div className='documentSection'>
          <div className='documentTitle textBold16'>Confidential Documents</div>
          <div className='documentList'>
            <div className='documents'>
              <span className='documentText title14'>Executive Summary.docx</span>
              <span className='documentDownloadBtn textNormal16' onClick={() => _handleDownloadBtn()}>
                <Image src={require('../../assets/Images/download.svg')} alt='' />
                <span>Download</span>
              </span>
            </div>
            <div className='documents'>
              <span className='documentText title14'>Issuance Summary.xls</span>
              <span className='documentDownloadBtn textNormal16' onClick={() => _handleDownloadBtn()}>
                <Image src={require('../../assets/Images/download.svg')} alt='' />
                <span>Download</span>
              </span>
            </div>
          </div>
        </div>
        <div className='documentSection'>
          <div className='textBold16'>Sourcing Party</div>
          <div className='sourceName title14'>John Murphy</div>
          <div className='sourceEmail title14'>j.murphy@lead.com</div>
        </div>
        <div className='documentSection'>
          <div className='textBold16'>Issuer</div>
          <div className='sourceName title14'>Denis Smith</div>
          <div className='sourceEmail title14'>smithsde@gainx.com</div>
        </div>
          <div className='footerSection'>
            <div className='editIssuanceBtn'>
              <Image className='editIssuanceIcon' src={require('../../assets/Images/edit.svg')} alt='edit'/>
              <span>Edit Issuance</span>
            </div>
          </div>
        </div>
      </DealInfoModalStyleContainer>
    </StyleModal>
  );
}

export default DealInfoModal;