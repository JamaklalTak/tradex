import Styled from 'styled-components';
import Modal from 'styled-react-modal';

import { dim } from '../../styles/theme';

const DealInfoModalStyleContainer = Styled.div`
background-color: ${props => props.theme.color.grey_50};
border-radius: 5px 0px 0px 5px;
height: 100%;
width: ${dim._scale(532)};

.modalHeader {
    padding: ${dim._16px} ${dim._32px} 0px ${dim._32px};
}

.modalBody {
    padding: 0px ${dim._32px} ${dim._16px} ${dim._32px};
    height: ${dim._scale(690)};
    overflow-y: scroll;
}

.closeBtn {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    cursor: pointer;
}
.closeText{
    color: ${props => props.theme.color.grey_60};
    margin-right: ${dim._8px};
}

.infoTitleGrpContainer {
    display: flex;
    flex-direction: column;
    margin: ${dim._18px} 0px;
}

.infoTitleGrp {
    display: flex;
    flex: 1;
    flex-direction: row;

}

.infoTitle {
    display: flex;
    flex: 1;
}

.infoTitleDataGrp {
    display: flex;
    flex: 1;
    flex-direction: row;

}

.infoData {
    display: flex;
    flex: 1;
}

.infoDealDescription {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: ${dim._16px};
    color: ${props => props.theme.color.base_0};
    background-color: ${props => props.theme.color.base_100};
}

.infoDealRequiredDetail {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: ${dim._scale(247)};
    overflow-y: scroll;
    padding: ${dim._8px} ${dim._16px};
    margin-top: ${dim._16px};
    color: ${props => props.theme.color.base_0};
    background-color: ${props => props.theme.color.base_100};

    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.color.grey_30} ${props => props.theme.color.grey_40} !important;
}

.descriptionTitle {
}

.descriptionText {
    margin-top: ${dim._8px};
}

.requiredTitle {}

.requiredDataTable {
    margin-top: ${dim._16px};
}

.requiredDataRow{
    display: flex;
    flex: 1;
    span {
        display: flex;
        flex: 1;
        padding: ${dim._8px} ${dim._12px};
        border: 1px solid ${props => props.theme.color.grey_40};
        box-sizing: border-box;
    }
}

.documentSection {
    margin-top: ${dim._24px};
}

.documentTitle {
    color: ${props => props.theme.color.base_0};
}

.documentList {

}

.documents {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
}

.documentText {
    display: flex;
    flex: 1;
    color: ${props => props.theme.color.base_0};
}

.documentDownloadBtn {
    display: flex;
    flex: 1;
    cursor: pointer;
    span {
        margin-left: ${dim._32px};
        color: ${props => props.theme.color.blue_50};
    }
}

.sourceName {
    color: ${props => props.theme.color.base_0};
}

.sourceEmail {
    color: ${props => props.theme.color.grey_70};
}

.footerSection {
    display: flex;
    flex: 1;
    flex-direction: row;
    border-top: 1px solid ${props => props.theme.color.grey_90};
    margin-top: ${dim._52px};
    padding: ${dim._12px} 0px ${dim._24px} 0px
}

.editIssuanceIcon {
    padding-right: ${dim._16px};
}

.statusBtn {
    margin-right: ${dim._6px};
}

.editIssuanceBtn {
    display: flex;
    width: auto;
    align-items: center;
    padding: ${dim._12px} ${dim._16px};
    cursor: pointer;
    span {
        color: ${props => props.theme.color.blue_50};
    }
}
`;

const StyleModal = Modal.styled`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:flex-start;
  position:fixed;
  right:0px;
  top:0px;
  margin-top:0;
  height: 100%;
`;

export { DealInfoModalStyleContainer, StyleModal };