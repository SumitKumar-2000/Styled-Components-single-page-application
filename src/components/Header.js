import React from 'react'
import { Button } from './styledComponents/Button.styled'
import { Container } from './styledComponents/Container.styled'
import { Flex } from './styledComponents/Flex.styled'
import { Logo, Nav, StyledHeader, Image } from './styledComponents/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <Nav>
              <Logo src={require('../assets/logo.png')} alt=""/>
              <Button> Try It Free </Button>
            </Nav>

            <Flex>
              <div>
                <h1>Build The Community Your Fans Will Love</h1>
                <p>
                  Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <Button bg="#ff0099" color="#ffffff">
                    Get Started For Free
                </Button>
              </div>

              <Image src={require('../assets/illustration-mockups.png')} alt=""/>

            </Flex>

        </Container>  
    </StyledHeader>
  )
}

export default Header