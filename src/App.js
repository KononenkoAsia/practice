import React from 'react'
import Hoc from './hocs/hoc'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 50px 50px;
  border: 1px solid black;
`
const TextBlock = styled.div`
  text-align: justify;
  font-size: 18px;
`

const TitleText = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const App = props => {
  console.log(props)
  return (
    <Container>
      <TitleText className='center'>Hello, {props.text}</TitleText>
      <TextBlock>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi
        cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi
        explicabo totam?
      </TextBlock>
    </Container>
  )
}

export default Hoc(App)
