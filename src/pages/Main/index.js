import React from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { 
  Container, 
  Content, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  Title, 
  Description, 
  Annotation, 
} from './styles'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

export default function Main(){
  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )
  function onHandlerStateChanged(event){

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 15.768,59</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$102,80 recebida de Lucas Coutinho hoje às 08:56h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}
