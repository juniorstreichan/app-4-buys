import styled from 'styled-components/native';
import AppColors from '../../theme/colors';

export const DescriptionText = styled.Text`
  font-size: 18px;
  color: ${AppColors.light};
  text-align: center;
`;

export const CategoryText = styled.Text`
  font-size: 24px;
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
  padding-top: 20px;
`;
