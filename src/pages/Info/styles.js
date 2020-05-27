import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const InfoContainer = styled.div`  
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    h4 {
        font-size: 22px;
        font-style: italic;
    }
    ul li {
        margin-left: 20px;
        font-size: 18px;
        color: #FFF;
    }
`;

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
        width: 80%;
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
        text-align: left;
        font-size: 18px;
        color: #FFF;
        margin: 10px 0 20px;
        line-height: 1.4;
    }
`;