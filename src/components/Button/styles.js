import styled from 'styled-components/native';
import AppColors from '../../theme/colors';

export const Shape = styled.TouchableOpacity`
  background-color: ${AppColors.light};
  border-radius: 5px;
  height: 45px;
  width: 90%;
  padding: 10px;
  margin: 5px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${AppColors.dark};
`;
