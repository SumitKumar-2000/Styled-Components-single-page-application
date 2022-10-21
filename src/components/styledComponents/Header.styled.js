import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};   // also  ${({bg}) => bg};
    padding: 2.4rem;

    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`
export const Logo = styled.img`
    @media(max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 40px;
    }
`
export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin: 40px 0 30px
    }
`