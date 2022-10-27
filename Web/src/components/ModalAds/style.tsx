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
    
    footer{
        margin-top:16px;
        display:flex;
        justify-content:end;
        gap:16px;

        .buttoncancel{
            background-color:#71717A;
            border-radius:6px;
            border-style:none;
            padding:14px 20px;
            height:48px;
            font-family: 'Inter', sans-serif;
            font-weight:600;
            font-size:16px;
            color: white;
            :hover{
                background-color:#52525b;
                cursor: pointer;
            }
            

        }

        .buttonsubmit{
            background-color:#8B5CF6;
            border-radius:6px;
            border-style:none;
            padding:14px 20px;
            height:48px;
            font-family: 'Inter', sans-serif;
            font-weight:600;
            font-size:16px;
            color: white;   
            display:flex;  
            align-items:center;
            gap:12px;

            img{
                width:25px;
            }
            :hover{
                background-color:#7c3aed;
                cursor: pointer;
            }
        }
    }
`;

export const DivYears = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;

`;

export const DivWeek = styled.section`
    display: flex;
    flex-direction:row;
    gap: 24px;
   
    div {
        display: flex;
        flex-direction:row;
        gap: 8px;
    }
    
    .weekdays{
        display:flex;
        flex-direction:column;
        gap:8px;
    }

    .weekstart{
        display:flex;
        flex-direction:column;
        gap:8px;
        flex: 1 1 0%;
    }

    .weekhours{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap:8px;
    }
`;


//buttto semanas 1:08 => para fazer os botões
//1:15 mobile => para ir pro mobile aparti daqui
