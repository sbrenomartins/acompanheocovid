import styled from 'styled-components';

export const InfoContainer = styled.div` 
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;

    table {
        width: 100%;
    }

    td {
        justify-content: space-between;
        color: #eee;
        font-size: 18px;
        margin-top: 10px;
        padding-bottom: 5px;
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

export const SelectItem = styled.select`
    width: 70%;
    font-size: 20px;
    padding: 5px;
    border-radius: 8px;
`;

export const OptionItem = styled.option`
    width: 90%;
    font-size: 20px;
    padding: 5px;
    border-radius: 8px;
`;

export const FormSearch = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 50px;
`;

export const SearchButton = styled.button`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    background: #BF6956;
    width: 30%;    
    padding: 5px;
    border: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;