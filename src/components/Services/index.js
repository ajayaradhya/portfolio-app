import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'

import { ServicesCard, ServicesContainer, ServicesIcon, ServicesP, ServicesWrapper, ServicesH1, ServicesH2} from './ServiceElements'

const Services = () => {
    return (
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help in your fuss and increase revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>Some random description goes here</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premiun Benefits</ServicesH2>
                        <ServicesP>One more random quote goes here</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
    )
}

export default Services
