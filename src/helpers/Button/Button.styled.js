import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const Button = Styled.div`
button {
    border-radius: 4px;
    height: ${dim._40px};
    width: 100%;
    pointer-events: ${props => props.disable ? 'none' : 'auto'};
    background-color: ${props => props.disable ? Theme.color.text_low_emphasis : Theme.color.blue_50};
    color: ${props => props.disable ? Theme.color.base_0 : Theme.color.base_100};
    margin: ${dim._12px} 0;
    cursor: ${props => props.disable ? 'auto' : 'pointer'};
    :hover{
        box-shadow: ${props => props.disable ? 'none' : '2px 2px 4px 0px grey'};
    }
}
`;

export default Button;