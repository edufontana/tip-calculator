import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #121212;
`;

export const Content = styled.View`
  padding: ${RFValue(24)}px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;

  justify-content: center;
`;

export const Text = styled.Text``;

export const HeaderText = styled.Text`
  font-size: ${RFValue(25)}px;

  margin-bottom: ${RFValue(40)}px;
  color: #a9a9a9;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: #363636;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  font-size: ${RFValue(14)}px;
  color: #d3d3d3;
`;

export const PctArea = styled.View`
  justify-content: center;

  margin-top: ${RFValue(24)}px;
`;

export const PctItem = styled.TouchableOpacity`
  padding: 10px;
  background-color: #363636;
  border-radius: 7px;
`;

export const PctText = styled.Text`
  color: #d3d3d3;
`;

export const CalcButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #2e9599;
  align-items: center;
  justify-content: center;
  height: ${RFValue(44)}px;
  margin-top: ${RFValue(24)}px;
  border-radius: 10px;
`;

export const TextCalcButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #1c1c1c;
`;

export const Footer = styled.View`
  margin-top: ${RFValue(20)}px;
`;
export const ResultArea = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #363636;
  padding: 20px;
  width: 100%;
`;
export const ResultTitle = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: #d3d3d3;
`;
export const ResultItem = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${RFValue(15)}px;
  color: #d3d3d3;
`;

export const Box = styled.View`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const BoxBody = styled.View`
  width: 100%;
  height: 50%;
  background-color: #363636;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(24)}px;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-bottom: ${RFValue(40)}px;
  color: #d3d3d3;
`;

export const ModalInput = styled.TextInput`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: #121212;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: ${RFValue(14)}px;
  color: #d3d3d3;
`;

export const ExitInput = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: #2e9599;
  justify-content: center;
  border-radius: 10px;
  margin-top: ${RFValue(20)}px;
  height: ${RFValue(44)}px;
`;
export const ExitInputText = styled.Text`
  color: #1c1c1c;
  font-size: ${RFValue(16)}px;
`;
