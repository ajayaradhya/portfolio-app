import React, {useState} from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for new account today!
                    Recieve a $250 credit towards yur next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get Started {hover? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
