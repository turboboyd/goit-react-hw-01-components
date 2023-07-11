import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #0000005c;
  height: 160px;
  overflow: hidden;
  text-align: center;
  width: 450px;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #b4afaf;
  margin: auto 0px;
`;

export const StatList = styled.ul`
  display: flex;
`;


export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 15px 20px;
  background-color: aqua;
  box-shadow: 10px 1px 10px 1px #0000005c;
  :nth-of-type(1) {
    background-color: #51c3fa;
  }
  :nth-of-type(2) {
    background-color: #e8b97c;
  }
  :nth-of-type(3) {
    background-color: #a48ad4;
  }
  :nth-of-type(4) {
    background-color: #c6e771;
  }
  :nth-of-type(5) {
    background-color: #f29696;
  }
`;



export const Label = styled.span`
    font-size: 14px;
    margin-bottom: 6px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  
`;



