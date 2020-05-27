import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/virus.svg';

import Container from '../../components/Container';
import { Form, InfoContainer } from './styles';

export default function Info() {
    return (
        <div>
            <Container>
                <Form>
                    <img src={Logo} alt="Virus Logo" />
                    <h3>O Covid-19 (Coronavírus)</h3>

                    <InfoContainer>
                        <h4>O que é COVID-19 ?</h4>
                        <p>A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência respiratória (suporte ventilatório).</p>

                        <h4>O que é o coronavírus ?</h4>
                        <p>Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).
                        Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.
                        A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1.</p>

                        <h4>Quais são os sintomas ?</h4>
                        <p>Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. Sendo os sintomas mais comuns:</p>
                        <ul>
                            <li>Tosse</li>
                            <li>Febre</li>
                            <li>Coriza</li>
                            <li>Dor de garganta</li>
                            <li>Dificuldade para respirar</li>
                        </ul>
                        <br />

                        <h4>Como é transmitido ?</h4>
                        <p>A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:</p>
                        <ul>
                            <li>Toque do aperto de mão;</li>
                            <li>Gotículas de saliva;</li>
                            <li>Espirro;</li>
                            <li>Tosse;</li>
                            <li>Catarro;</li>
                            <li>Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador etc.</li>
                        </ul> 
                    </InfoContainer>

                    <Link to="/">Voltar</Link>
                </Form>
                <p>Made with ❤ by <a href="https://sbrenomartins.github.io" target="_blank" rel="noopener noreferrer">Breno Martins</a></p>
            </Container>
        </div>
    )
}
