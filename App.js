import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import styled from 'styled-components/native';


const Page = styled.SafeAreaView `
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text `
  font-size: 25px;
  margin-top: 50px;
`;

const Input = styled.TextInput `
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const ResultItem = styled.Text`
font-size: 15px;
margin-bottom: 30px;
`

const CalcButton = styled.Button`
margin-top: 10px;
`

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`

PctItem = styled.Button`
`

export default() => {

  const [bill,setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    
    if(nBill){
      setTip((pct/100) * nBill)
    } 
  }

  useEffect(()=>{
    calc();
  }, [pct])

 

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
      placeholder="Quanto deu a conta?" 
      placeholderTextColor='#000'
      keyboardType="numeric"
      value={bill}
      onChangeText={n=>setBill(n)}
      />

        <PctArea>
          <PctItem title="5%"    onPress={()=>setPct(5)}/>
          <PctItem title="10%"   onPress={()=>setPct(10)}/>
          <PctItem title="15%"   onPress={()=>setPct(15)}/>
          <PctItem title="20%"   onPress={()=>setPct(20)}/>
        </PctArea>

      <CalcButton  title={`Calcular com ${pct}%`} onPress={calc}/>

      {tip > 0 &&
        <ResultArea>

          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({pct})%</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>

      </ResultArea>}
      
    </Page>

  );
}




/*
Segunda Av.
Sistema de agenda telefônica

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
`;

const TitleContainer = styled.View`
  background-color: #4169E1;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 30px;
`;

const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
  color: black;
  background-color: #ccc;
  border-radius: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007aff;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  width: 300px;
  align-items: center; 
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const LineThatPart = styled.View`
  width: 100%;
  height: 6px;
  background-color: #4169E1;
  margin-bottom: 16px;
`;

const ResultContainer = styled.View`
  
  align-items: center;
  margin-bottom: 20px;
`;

const Result = styled.Text`
  color: black;
  font-size: 30px;
`;

const App = () => {
  const [nome, setNome] = useState('');
  const [tel, setTel] = useState('');
  const [result,setResult] = useState('');
  const [searchNome, setSearchNome] = useState('');

  const handleAdd = async () => {
    try {
      await Armazenar(nome, tel);
      setNome('');
      setTel('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      await Buscar(searchNome);
    } catch (error) {
      console.log(error);
    }
  };

  const Armazenar = async (keyNome, valueTel) => {
    if(keyNome === "" || valueTel === "") {
      alert("Não pode ter nenhum campo em branco. Complete-os.")
      return;
    }

    try {
      await AsyncStorage.setItem(keyNome, valueTel);
      console.log('Valores salvos com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  const Buscar = async (chavename) => {

    if(chavename === "" ) {
      alert("Sua busca não pode ser vazia. Digite um nome.")
      return;
    }

    const valortel = await AsyncStorage.getItem(chavename);
    if(!valortel){
      alert("Nome não encontrado!");
      return;
    }
    else{
      setResult(valortel);
    }
   
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Agenda Telefônica</Title>
      </TitleContainer>

      <InputContainer>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          value={tel}
          onChangeText={setTel}
          placeholder="Telefone" 
        />
        <ButtonContainer>
          <Button onPress={handleAdd}>
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ButtonContainer>
      </InputContainer>

      <LineThatPart />

      <InputContainer>
        <TextInput   value={searchNome}
  onChangeText={setSearchNome} placeholder="Nome para buscar" />
        <ButtonContainer>
          <Button onPress={handleSearch}>
            <ButtonText>Buscar</ButtonText>
          </Button>
        </ButtonContainer>
      </InputContainer>
      
      
        
        <ResultContainer>
          <Result>{result}</Result>
        </ResultContainer>
     
      
    </Container>
  );
};

export default App;
*/