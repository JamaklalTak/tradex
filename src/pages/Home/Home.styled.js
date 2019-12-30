import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const HomeStyleContainer = Styled.div`
display: flex;
flex: 1;
flex-direction: column;
background-color: ${props => props.theme.color.grey_50};
padding: ${dim._24px} ${dim._32px} 0px ${dim._32px};

.homeHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.homeBody {
    display: flex;
    flex: 1;
}

.profileDropDown{
}
`;

export default HomeStyleContainer;