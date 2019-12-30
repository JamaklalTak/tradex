import Styled from 'styled-components';

import { dim } from '../../styles/theme';

const TabStyleContainer = Styled.div`
.tabContainer {
    display: flex;
    width: 100%;
    flex-direction: ${props => props.viewType.toUpperCase() !== 'H' ? 'column' : 'row'};
}

.H {
    border-bottom: 1px solid ${props => props.theme.color.grey_90}
}

.tabOption {
    display: flex;
    width: ${dim._scale(178)};
    justify-content: flex-start;
    cursor: pointer;
    color: ${props => props.viewType.toUpperCase() !== 'H' ? props.theme.color.base_0 : props => props.theme.color.grey_70};
}

.horizontalView {
    :hover{
        border-bottom: 1px solid ${props => props.theme.color.blue_50};
    }
}

.verticalView {
    padding: ${dim._19px} ${dim._18px} ${dim._17px} ${dim._34px};
    border-left: 6px solid ${props => props.theme.color.base_100}
    :hover{
        border-left: 6px solid rgb(35, 69, 199, 0.2);
        color: ${props => props.theme.color.blue_50};
        background-color: ${props => props.theme.color.grey_50};
    }
}

.activeH{
    color: ${props => props.theme.color.base_0};
    border-bottom: 1px solid ${props => props.theme.color.blue_50};
}

.activeV{
    padding: ${dim._19px} ${dim._18px} ${dim._17px} ${dim._34px};
    border-left: 6px solid rgb(35, 69, 199, 0.2);
    color: ${props => props.theme.color.blue_50};
    background-color: ${props => props.theme.color.grey_50};
}
`;

export default TabStyleContainer;