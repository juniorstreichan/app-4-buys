import styled from 'styled-components/native';
import AppColors from '../../theme/colors';

export const CheckoutContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const ResumeTitle = styled.Text`
  text-decoration: underline;
  color: ${AppColors.light};
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const ResumeItem = styled.Text`
  color: ${AppColors.light};
  text-align: center;
  font-size: 18px;
`;

export const ResumeTotal = styled.Text`
  color: ${AppColors.light};
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-width: 3px;
  border-radius: 5px;
  padding: 8px;
  border-color: ${AppColors.light};
`;

export const ResumeCard = styled.View`
  background-color: ${AppColors.primary};
  height: 90%;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  border-width: 2px;
  border-color: ${AppColors.secondary};
`;
