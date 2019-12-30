import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const DealRoomStyleContainer = Styled.div`
display: flex;
flex-direction: column;
width: 100%;

.title {
    color: ${props => props.theme.color.base_0};
    margin-bottom: ${dim._24px};
}

.dealRoomBody {
    display: flex;
    flex-direction: column;
    margin-top: ${dim._24px};
    padding: ${dim._16px};
    background-color: ${props => props.theme.color.base_100};
    border-radius: 5px; 
}

.dealRoomTopBtnRow {
    display: flex;
    flex-direction: row;
    padding: 0px ${dim._12px};
}

.Btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${dim._4px} ${dim._8px};
    color: ${props => props.theme.color.blue_50};
    cursor: pointer;
}

.addIssuanceBtn {
    margin-right: ${dim._8px};
}

.filterBtn {
}

.icon {
    margin-right: ${dim._8px};
}

.dealRoomTitleRow {
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: ${props => props.theme.color.grey_50};
    padding: ${dim._8px} 0px;
    margin-top: ${dim._8px};
}

.mainTitleType {
    width: ${dim._scale(304)} !important;
}

.dealRoomTitle {
    display: flex;
    width: ${dim._scale(108)};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 600;
    padding: 0px ${dim._12px};
    span {
        margin-right: ${dim._8px};
    }
}

.dealRoomDataGrp {
    display: flex;
    flex-direction: column;
    
}

.dealRoomDataRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    :hover {
        cursor: pointer;
    }
}

.dealRoomDataRowTitle {
    display: flex;
    width: ${dim._scale(108)};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px ${dim._12px};
}

.dealRoomDataRowTitleType{
    display: flex;
    width: ${dim._scale(304)};
    flex-direction: column;
    justify-content: flex-start;
    padding: ${dim._12px};
}

.industryType {
    color: ${props => props.theme.color.grey_60};
}

.statusBtn {
    margin-right: ${dim._6px};
}

.noData {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.grey_60};
}
`;

export default DealRoomStyleContainer;