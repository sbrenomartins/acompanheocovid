import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Logo from '../../assets/virus.svg';

import Container from '../../components/Container';
import { Form, InfoContainer, SelectItem, OptionItem, FormSearch, SearchButton } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Brazil() {

    const [ufState, setUfStates] = useState([]);
    const [uf, setUF] = useState('');
    const [ufInfo, setUFInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUfStates();
    }, []);

    async function fetchUfStates(){
        const response = await api.get('');
        setUfStates(response.data.data);
    }

    function handleChangeUF(e){
        setUF(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        const response = await api.get(`/brazil/uf/${uf}`);
        setUFInfo(response.data);

        setLoading(false);
    }

    return (
        <div>            
            <Container>
                <Form>
                    <img src={Logo} alt="Virus Logo" />
                    <h3>Covid-19 (Coronavírus) - No Brasil</h3>

                    <FormSearch>
                        <SelectItem onChange={handleChangeUF}>
                            {ufState.map(uf => (
                                <OptionItem value={uf.uf} key={uf.uf}>{uf.uf} - {uf.state}</OptionItem>
                            ))}
                        </SelectItem>
                        <SearchButton onClick={handleSubmit}>Buscar</SearchButton>
                    </FormSearch>

                    {loading && <Loading />}

                    <InfoContainer>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Casos suspeitos: </td>
                                    <td><NumberFormat value={ufInfo.suspects} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                
                                <tr>
                                    <td>Casos confirmados: </td>
                                    <td><NumberFormat value={ufInfo.cases} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                
                                <tr>
                                    <td>Número de mortes: </td>
                                    <td><NumberFormat value={ufInfo.deaths} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </InfoContainer>

                    <Link to="/">Voltar</Link>
                </Form>
                <p>Made with ❤ by <a href="https://sbrenomartins.github.io" target="_blank" rel="noopener noreferrer">Breno Martins</a></p>
            </Container>
        </div>
    )
}
