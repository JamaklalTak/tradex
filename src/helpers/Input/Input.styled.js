import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const InputStyleContainer = Styled.div`
display: flex;
flex: 1;
position: relative;

input {
    padding: ${dim._8px} ${dim._32px} ${dim._8px} ${dim._14px};
    width: 100%;
    height: ${dim._32px};
    margin: ${dim._4px} 0px;
    border: 1px solid;
    border-radius: 4px;
}
`;

export default InputStyleContainer;