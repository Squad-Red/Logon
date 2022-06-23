import styled from "styled-components";

const StyledButton = styled.button`

    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 1.125rem;
    font-weight: 700;

    &.Login {
    width: 379px;
    height: 67px;    
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%) padding-box, 
                linear-gradient(90deg, #FF2D04 0%, #C13216 100%) border-box;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15), 5px 5px 15px rgba(0, 0, 0, 0.5);   
    border: 2px transparent;
    border-radius: 50px;  
    }

    &.Logout {
    width: 89px;
    height: 55px;
    background: transparent;
    border: none;
    }

    &.ResetTimer {
    width: 131px;
    height: 99px;
    background: #FFFFFF;
    color: #C13216;
    font-weight: 400;
    font-size: 0.75rem; 
    border: none;
    @media (max-width: 768px) {
    width: 350px;
    height: 99px;
    }
    }
`;

export default StyledButton;