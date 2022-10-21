import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: ${({id}) => id%2 === 0 ? "row-reverse" : "row"};
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    align-items: center;
    justify-content: space-between;

    h1{
        font-family: Arial, Helvetica, sans-serif;
    }

    img{
        width: 80%;
    }

    &>div{
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
        img{
            margin-top: 1rem;
        }
    }
`