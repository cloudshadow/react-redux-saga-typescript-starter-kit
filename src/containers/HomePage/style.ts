import styled from 'styled-components';
import { device } from '@/components/utils';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomePageHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(254, 152, 0);
  color: #fff;
  text-align: center;
  padding: 8px;
`;
const WalletListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and ${device.desktop} {
    flex-direction: row;
    padding: 40px;
    gap: 40px;
  }
  @media screen and ${device.tablet} {
    flex-direction: row;
    padding: 40px;
    gap: 40px;
  }
  @media screen and ${device.mobile} {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 8px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonText = styled.div`
  display: flex;
  width: 160px;
  text-align: center;
  flex-direction: column;
`;
export { HomePageContainer, HomePageHeader, WalletListContainer, ButtonContainer, ButtonText };
