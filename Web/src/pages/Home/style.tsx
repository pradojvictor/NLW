import styled from "styled-components";


export const Div = styled.div`
    max-width: 100%;
    margin: auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;

    h1 {
        font-family: 'Inter', sans-serif;
        font-size:64px;
        color: white;
        font-weight: 900;
        margin:80px 0 64px 0px;

        span {
            background: linear-gradient(89.86deg, #9572FC 15.08%, #43E7AD 75.94%, #E1D55D 100.57%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }  
    }

`;

export const Section = styled.section`
    padding-top:4px;
    background: linear-gradient(89.86deg, #9572FC 15.08%, #43E7AD 75.94%, #E1D55D 100.57%);
    place-self: stretch;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 32px;

    @media (min-width: 1366px){
        place-self: center;
        width:1200px;   
    }
    
    div {
        background-color:#2A2634;
        padding: 24px 32px 24px 32px;
        display:flex;
        justify-content:space-between;
        align-items:center;

        div {
            padding:0px;
            display:block;
        }

        button {
            padding:12px 16px;
            background-color:#8B5CF6;
            border-radius:6px;
            gap: 12px;
            border:none;

            font-size: 16px;
            color: white;
            font-family: 'Inter', sans-serif;
            font-weight:500px;

            :hover {
                background-color:#6a36e4;
                cursor:pointer;
            }

            display:flex;
            align-items:center;
            gap:12px;

        }

    }

    strong {
        font-size: 24px;
        color: white;
        font-family: 'Inter', sans-serif;
        font-weight:900px;
        display:block;
        padding-bottom:5px;
    }

    span {
        font-size: 16px;
        color:#A1A1AA;
        font-family: 'Inter', sans-serif;
        font-weight:400;
        display:block;

    }
    
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1.5rem;  
`;

//parei em 01:04 obs add linha 37 querry media@