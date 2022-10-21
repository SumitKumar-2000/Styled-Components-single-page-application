import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    padding: 15px 60px;
    background-color: ${({ bg })=> bg || "#ffffff"};
    color: ${({ color }) => color || "#333"};

`