import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
}

body, html{
	height: 100%;
	padding: 0;
	margin: 0;
}

#root{
	padding: 20px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
`;
