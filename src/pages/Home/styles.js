import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
    }
    a {
        font-size: 20px;
        font-weight: bold;
        color: #FFF;
        text-decoration: none;
        background: #BF6956;
        height: 56px;
        border: 0;
        width: 90%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    h3 {   
        max-width: 70%;
        align-items: center;
        flex-wrap: wrap;     
        font-size: 30px;
        color: #FFF;
        margin: 10px 0 20px;
    }
    p {
        display: flex;
        text-align: center;
        font-size: 20px;
        color: #FFF;
        margin: 10px 0 20px;
    }
`;