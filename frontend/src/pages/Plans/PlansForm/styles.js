import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const TopPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  strong {
    font-size: 24px;
    color: #444;
  }

  div {
    display: flex;

    button {
      width: 112px;
      height: 36px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-weight: bold;
    }

    button.saveButton {
      width: 112px;
      height: 36px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ee4d64;
      font-weight: bold;
    }

    span {
      margin-left: 10px;
    }
  }
`;

export const Data = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  label {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-top: 20px;

    &:first-child {
      margin-top: 0px;
    }
  }

  input {
    height: 36px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-top: 8px;
    padding: 20px;
  }

  & > div {
    margin-top: 20px;
    display: flex;

    & > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
