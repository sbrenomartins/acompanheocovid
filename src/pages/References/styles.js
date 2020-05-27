import styled from 'styled-components';

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
    a {
        font-size: 18px;
        color: #FFF;
        text-decoration: none;
    }

    a:hover {
        color: #BF6956;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
    }
    h3 {   
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

export const LinkStyle = styled.a`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    background: #BF6956;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;