import styled from 'styled-components';
import { FlexWrapper } from '../flex/FlexWrapper';
import { theme } from '../../styles/Theme';
import { Container } from '../slider/Container';


export const QuoteSection = ( ) => {
  return (
    
      <Container>
        <StyledQuoteSection>
      <FlexWrapper direction="column" align="flex-end">
        <Quote>With great power comes great electricity bill</Quote>
        <Signature>- Dr. Who</Signature>
      </FlexWrapper>
      </StyledQuoteSection>
      </Container>
  );
};


const StyledQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 112px 0 74px;
`;


const Quote = styled.p`
padding: 32px;
  font-size: 24px;
  color: ${theme.colors.accentWhite};
  border: 1px solid ${theme.colors.colorGray};
  position: relative;
  z-index: 0;

  &::after{
    content: "";
    width: 42px;
    height: 28px;
    background-image: url("./Quote.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -14px;
    left: 10px;
    z-index: 1;
  }

  &::before{
    content: "";
    width: 42px;
    height: 28px;
    background-image: url("./Quote.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 10px;
    bottom: -14px;
    z-index: 2;
  }
`

const Signature = styled.p`
  padding: 32px;
  font-size: 24px;
  color: ${theme.colors.accentWhite};
  border: 1px solid ${theme.colors.colorGray};
  border-top: none;
`