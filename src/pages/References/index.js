import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/virus.svg';

import Container from '../../components/Container';
import { Form, InfoContainer, LinkStyle } from './styles';

export default function References() {
    return (
        <div>
            <Container>
                <Form>
                    <img src={Logo} alt="Virus Logo" />
                    <h3>Referências Utilizadas</h3>

                    <InfoContainer>
                        <ul>
                            <li>Sobre: <a href="https://coronavirus.saude.gov.br/sobre-a-doenca">https://coronavirus.saude.gov.br/sobre-a-doenca</a></li>
                            <li>API de consulta: <a href="https://covid19-brazil-api-docs.now.sh/">https://covid19-brazil-api-docs.now.sh/</a></li>
                            <li>Ícones feitos por <a href="https://www.flaticon.com/br/autores/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a></li>
                        </ul>
                    </InfoContainer>

                    <Link to="/" style={{textDecoration: 'none'}}><LinkStyle>Voltar</LinkStyle></Link>
                </Form>
                <p>Made with ❤ by <a href="https://sbrenomartins.github.io" target="_blank" rel="noopener noreferrer">Breno Martins</a></p>
            </Container>
        </div>
    )
}
