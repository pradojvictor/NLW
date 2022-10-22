import styled from "styled-components";

export const Card = styled.div`
    a {
        position: relative;
        border-radius: 8px;
        overflow: hidden;

        img {
            position: relative;
            border-radius: 8px;
            width:100%;  
        }

    }

    div {
        width:100%;
        padding-top: 64px;
        padding-bottom:10px;
        bottom: 0px;
        left: 0px;
        right:0px;
        background:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
        position:absolute;

    }

    strong {
        font-family: 'Inter', sans-serif;
        font-size:16px;
        font-weight:700;
        color: white;
        display:block;
        padding-left:10px;

    }

    span {
        font-family: 'Inter', sans-serif;
        font-size:14px;
        font-weight:400;
        color:#D9D9D9;
        display:block;
        margin-top:4px;
        padding-left:10px;

    }
`;