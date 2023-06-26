import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
`;

const TitleContainer = styled.View`
background-color:	#4169E1;
align-items:center;
`

const Title = styled.Text`
color:white;
font-size:30px;
`

const ImgContainer = styled.View`
flex-direction: row ;
justify-content: space-around;
background-color:	#87CEFA;
`

const ImgMain = styled.Image`
width: ${(props) => props.width || "200px"};
height: ${(props) => props.height || "200px"};
`
const ContainerTextMidle = styled.View`
align-items:center;
`

const TextMidle = styled.Text`
color:black;
font-size:18px;
margin:16px;

`

const AmountText = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  justify-content:center;
  align-items:center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top:24px;
  margin-bottom:24px;
  justify-content:space-evenly;
`;

const WaterButton = styled.TouchableOpacity`
  background-color: #007aff;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
 
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const App = () => {
  const [amount, setAmount] = useState(0);

  const handleWaterButtonClick = (value) => {
    setAmount(amount + value);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Água é Saúde</Title>
      </TitleContainer>
      <ImgContainer>
        <ImgMain source={require("./assets/pnggota.png")}></ImgMain>
        <ImgMain source={require("./assets/pnggota.png")}></ImgMain>
      </ImgContainer>
      <ContainerTextMidle>
        <TextMidle>Clique no botão baixo de acordo com a quantidade de ml consumida</TextMidle>
      </ContainerTextMidle>
      <ButtonContainer>
        <WaterButton onPress={() => handleWaterButtonClick(200)}>
          <ButtonText>200ml</ButtonText>
        </WaterButton>
        <WaterButton onPress={() => handleWaterButtonClick(300)}>
          <ButtonText>300ml</ButtonText>
        </WaterButton>
        <WaterButton onPress={() => handleWaterButtonClick(500)}>
          <ButtonText>500ml</ButtonText>
        </WaterButton>
      </ButtonContainer>
      <ContainerTextMidle>
        <AmountText>Consumo: {amount}ml</AmountText>
      </ContainerTextMidle>
      <ContainerTextMidle>
        <AmountText>Autor: Ícaro da Silva Antunes</AmountText>
      </ContainerTextMidle>

    </Container>
  );
};

export default App;
