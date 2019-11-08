import styled from 'styled-components/native';
import AppColors from '../../theme/colors';

export const Container = styled.View`
  height: 320px;
  margin: 8px;
  background-color: ${AppColors.primary};
  border-radius: 5px;
  padding: 8px;
  border-width: 2px;
  border-color: ${AppColors.secondary};
  justify-content: space-around;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 50%;
  border-radius: 5px;
`;

export const CardText = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  /* font-weight: bold; */
  color: ${AppColors.light};
  text-align: center;
`;

export const CardPrice = styled.Text`
  font-weight: bold;
  color: ${AppColors.light};
  font-size: 20px;
`;
