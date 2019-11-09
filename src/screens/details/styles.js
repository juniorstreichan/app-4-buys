import styled from 'styled-components/native';
import AppColors from '../../theme/colors';
import Button from '../../components/Button';

export const DescriptionText = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 6,
})`
  font-size: 18px;
  color: ${AppColors.light};
  text-align: center;
`;

export const CategoryText = styled.Text`
  font-size: 20px;
  color: ${AppColors.light};
  text-align: left;
  font-weight: bold;
  border-bottom-width: 1px;
  border-bottom-color: ${AppColors.primary};
  margin-bottom: 5px;
`;

export const DetailsContainer = styled.View`
  /* align-items: center; */
  padding-horizontal: 15px;
  justify-content: center;
  padding-top: 20px;
`;

export const ValueText = styled.Text`
  font-weight: bold;
  font-size: 36;
  color: ${AppColors.light};
  text-decoration: underline;
  text-align: center;
`;

export const PayButton = styled(Button)`
  align-self: center;
  height: 55px;
`;
