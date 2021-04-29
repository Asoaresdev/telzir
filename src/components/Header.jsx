import React from 'react'
import logo from '../assets/telzir.png'
import { HeaderContainer, Image } from '../styles/components/Header'

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Image src={logo} alt=""/>
            </div>
        </HeaderContainer>
    )
}


