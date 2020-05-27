import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Logo from '../../assets/virus.svg';

import Container from '../../components/Container';
import { Form, InfoContainer, SelectItem, OptionItem, FormSearch, SearchButton } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [countryInfo, setCountryInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCountries();
    }, []);

    async function fetchCountries(){
        const response = await api.get('/countries');
        setCountries(response.data.data);
    }

    function handleChangeCountry(e){
        setCountry(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        const response = await api.get(`/${country}`);
        setCountryInfo(response.data.data);

        setLoading(false);
    }

    return (
        <div>            
            <Container>
                <Form>
                    <img src={Logo} alt="Virus Logo" />
                    <h3>Covid-19 (Coronavírus) - No Mundo</h3>

                    <FormSearch>
                        <SelectItem onChange={handleChangeCountry}>
                            {countries.map(country => (
                                <OptionItem value={country.country} key={country.country}>{country.country}</OptionItem>
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
                                    <td><NumberFormat value={countryInfo.cases} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                
                                <tr>
                                    <td>Casos confirmados: </td>
                                    <td><NumberFormat value={countryInfo.confirmed} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                
                                <tr>
                                    <td>Número de mortes: </td>
                                    <td><NumberFormat value={countryInfo.deaths} displayType={'text'} thousandSeparator={true} /></td>
                                </tr>
                                
                                <tr>
                                    <td>Número de recuperações: </td>
                                    <td><NumberFormat value={countryInfo.recovered} displayType={'text'} thousandSeparator={true} /></td>
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
