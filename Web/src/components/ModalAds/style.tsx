import styled from "styled-components";


export const Form = styled.form`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        background-color: #18181B;
        padding: 6px 16px;
        border-radius: 4px;
        border-style: none;
        color: white;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }   
    
`;

export const DivYears = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    
    .test {
        color: red;
    }

`;

export const DivWeek = styled.section`
    display: flex;
    gap: 24px;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

//1:06