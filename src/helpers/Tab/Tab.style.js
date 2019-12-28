import Styled from 'styled-components';

import Theme, { dim } from '../../styles/theme';

const TabStyleContainer = Styled.div`
display: flex;
width: 100%;
flex-direction: ${props => props.viewType.toUpperCase() === 'H' ? 'row' : 'column'};
align-items: center;

.tabOption {
    display: flex;
    width: ${props => props.viewType.toUpperCase() === 'H' ? 'auto' : '100%'};
    padding: ${dim._8px} ${dim._16px};
    justify-content: center;
    margin: 0px ${dim._4px};
    cursor: pointer;
}

.active{
    border-bottom: 1px solid ${Theme.color.blue_50};
    background-color: ${Theme.color.highlights_blue};
}
`;

export default TabStyleContainer;