import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const SidePanelStyleContainer = Styled.div`
display: flex;
width: ${dim._scale(224)};
flex-direction: column;
background-color: ${props => props.theme.color.base_100};

.siteLogo {
	margin: ${dim._32px};
	cursor: pointer;
}

.panelBody {
	display: flex;
	flex: 1;
}

.panelFooter {
	display: flex;
	padding: ${dim._15px} 0px ${dim._15px} ${dim._34px};
}

.footerText {
	span {
		color: ${props => props.theme.color.blue_50};
		cursor: pointer;
	}
}
`;

export default SidePanelStyleContainer;