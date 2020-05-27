import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/virus.svg';

import Container from '../../components/Container';
import { Form } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGlobeAmericas, faInfoCircle, faBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div>
            <Container>
                <Form>
                    <img src={Logo} alt="Virus Logo" />
                    <h3>Covid-19 - (Coronavírus)</h3>
                    <p>Saiba informações e acompanhe a situação no Brasil ou em outros países</p>
                    <Link to="/info"><span style={{marginRight: 5}}><FontAwesomeIcon icon={faInfoCircle} /></span>Mais informações</Link>
                    <Link to="/brazil"><span style={{marginRight: 5}}><FontAwesomeIcon icon={faFlag} /></span>Situação no Brasil</Link>
                    <Link to="/countries"><span style={{marginRight: 5}}><FontAwesomeIcon icon={faGlobeAmericas} /></span>Situação no Mundo</Link>
                    <Link to="/sources"><span style={{marginRight: 5}}><FontAwesomeIcon icon={faBook} /></span>Referências utilizadas</Link>
                </Form>
                <p>Made with ❤ by <a href="https://sbrenomartins.github.io" target="_blank" rel="noopener noreferrer">Breno Martins</a></p>
            </Container>
        </div>
    )
}
