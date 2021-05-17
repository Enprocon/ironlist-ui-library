import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0 10px 20px 0 rgba(55, 70, 95, 0.12);
  background-color: white;
  border-radius: 7px;
  padding: 30px 20px 20px;
  min-height: 223px;
  max-width: 405px;
  box-sizing: border-box;
`;

export const CardText = styled.p`
  padding-bottom: 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid #d8dfe0;
  font-size: 16px;
  line-height: 1.25;
  min-height: 120px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: 54px;
  width: 54px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 1px 9px 1px rgba(55, 70, 95, 0.17);
`;

export const CardInfo = styled.div`
  margin-left: 16px;
`;

export const CardNameImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 24px;
  border: 2px solid white;
  box-shadow: 0 1px 9px 1px rgba(55, 70, 95, 0.17);
`;

export const CardName = styled.p`
  font-weight: 600;
  margin-bottom: 2px;
  margin-top: 0;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 16px;
`;
