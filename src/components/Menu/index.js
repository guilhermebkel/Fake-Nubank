import React from 'react'
import QRCode from '~/assets/QRCode.png'

import { Container, Code } from './styles'

export default function Menu(){
    return (
        <Container>
            <Code source={QRCode} />
        </Container>
    )
}