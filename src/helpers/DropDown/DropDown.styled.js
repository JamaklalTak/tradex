import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const DropDownStyleContainer = Styled.div`
position: relative;

.selectedOption {
    display: flex;
    flex-direction: row;
    width: auto;
    height: ${dim._20px};
    cursor: pointer;
    padding: ${dim._10px} 0px;

    span {
        margin-right: ${dim._15px};
    }
}

.optionList {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: ${dim._scale(98)};
    height: auto;
    right: 0;
    padding: ${dim._8px} ${dim._12px};
    background-color: ${props => props.theme.color.base_100};
    cursor: pointer;
}
.options {
    width: 100%;
    padding: ${dim._8px} ${dim._12px};
    :hover {
        background-color: ${props => props.theme.color.grey_50};
    }
}
`;

export default DropDownStyleContainer;