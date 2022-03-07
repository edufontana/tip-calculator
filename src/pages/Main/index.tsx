import React, {useState} from 'react';
import {Modal} from 'react-native';
import {
  Container,
  Content,
  Header,
  HeaderText,
  Input,
  CalcButton,
  TextCalcButton,
  Footer,
  ResultArea,
  ResultTitle,
  ResultItem,
  PctArea,
  PctItem,
  PctText,
  Box,
  BoxBody,
  ExitInput,
  ExitInputText,
  ModalTitle,
  ModalInput,
} from './styles';

export function Main() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);
  const [pct, setPct] = useState('10');

  const calc = (nBill: string) => {
    if (nBill) {
      let parseBill = parseFloat(nBill);

      setTip((parseFloat(pct) / 100) * parseBill);
    } else {
      alert('Digite o valor');
    }
  };

  const calcPct = (nPct: string) => {
    if (nPct) {
      setPct(nPct);
    } else {
      alert('Digite o valor');
    }
  };

  return (
    <Container>
      <Content>
        <Modal visible={ModalVisible} animationType="slide" transparent={true}>
          <Box>
            <BoxBody>
              <ModalTitle>Quantos % deu a conta</ModalTitle>
              <ModalInput
                placeholder="Quantos %"
                placeholderTextColor="#4F4F4F"
                keyboardType="numeric"
                value={pct}
                onChangeText={text => setPct(text)}
              />
              <ExitInput
                onPress={() => {
                  calcPct(pct);
                  setModalVisible(false);
                }}>
                <ExitInputText>Confimar</ExitInputText>
              </ExitInput>
            </BoxBody>
          </Box>
        </Modal>
        <Header>
          <HeaderText>Calculadora de gorjeta</HeaderText>
          <Input
            placeholder="Quanto deu a conta"
            placeholderTextColor="#808080"
            keyboardType="numeric"
            value={bill}
            onChangeText={n => setBill(n)}
          />
          <PctArea>
            <PctItem
              onPress={() => {
                setModalVisible(true);
              }}>
              <PctText>{pct} %</PctText>
            </PctItem>
          </PctArea>
          <CalcButton
            onPress={() => {
              calc(bill);
            }}>
            <TextCalcButton>Calcular</TextCalcButton>
          </CalcButton>
        </Header>
      </Content>
      <Footer>
        {tip > 0 && (
          <ResultArea>
            <ResultTitle>Valor da Conta</ResultTitle>
            <ResultItem>R$ {bill}</ResultItem>
            <ResultTitle>Valor da gorjeta</ResultTitle>
            <ResultItem>
              R$ {tip.toFixed(2)} ({pct}%)
            </ResultItem>
            <ResultTitle>Valor Total</ResultTitle>
            <ResultItem>R$ {(parseInt(bill) + tip).toFixed(2)}</ResultItem>
          </ResultArea>
        )}
      </Footer>
    </Container>
  );
}
