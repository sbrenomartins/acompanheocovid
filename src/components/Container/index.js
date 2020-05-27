import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(50, 140, 107, 0.3);
    max-width: 700px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }

    p {
        padding-top: 15px;
        font-size: 16px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        color: #eee;

        a {
            font-size: 16px;
            text-decoration: none;
            padding-left: 5px;
            margin-top: 2px;
            color: #eee;
        }
    }
`;

export default Container;