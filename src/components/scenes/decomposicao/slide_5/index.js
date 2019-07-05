import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import Image from '../../../generics/image'
import IntroFive from '../../../../images/content/decomposicao/intro-five.svg'
import HouseMap from '../../../../images/content/decomposicao/house-map.svg'
import InfoFive from '../../../../images/content/decomposicao/info-five.svg'
import BorderFive from '../../../../images/content/decomposicao/border-five.svg'

class Slide5 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="auto" src={IntroFive} />
                <TextStandardBox image={BorderFive}>
                    <p>No caso da decomposição de uma casa em cômodos, apresentada na figura abaixo. Se um dos cômodos tiver o rótulo “Sala de jantar e de estudo”, temos um claro indício de que ele servirá para dois propósitos e que por certo, algumas vezes haverá conflito no uso do espaço.</p>
                    <p>A interface entre duas partes quaisquer deve ser a mais simples possível, de forma que a interação entre as partes esteja restrita à interface, então, no caso dos dormitórios, quando em funcionamento normal, que ela ocorra apenas pelas portas.</p>
                    <p>Imagine o desconforto em uma casa onde um dos quartos tem suíte e o banheiro comum está em manutenção, obrigando o uso do banheiro da suíte como um banheiro coletivo. Imagine ainda que houvesse dois dormitórios, com uma porta interna entre os dois, mas que apenas um deles tivesse porta externa, qual não seria o desconforto para o morador do quarto que tivesse a porta de acesso ao restante da residência. </p>
                    <Image marginTop="50px" width="auto" height="auto" src={HouseMap} />
                </TextStandardBox>
                <Image marginTop="25px" height="auto" width="auto" src={InfoFive} />
            </Fragment>
        )
    }
}

export default Slide5
