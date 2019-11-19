import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 30px;
  background: #fff;
  width: 390px;
  height: 448px;
  border-radius: 4px;

  width: 100%;
  max-width: 360px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-size: 14px;
      align-self: flex-start;
      font-weight: bold;
      color: #444;
      margin: 0 0 8px;
    }

    input {
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ddd;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 20px;

      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #ee4d64;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.02, '#EE4D64')};
      }
    }
  }
`;
