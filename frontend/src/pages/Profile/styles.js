import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  margin: 34px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ddd;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 8px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.3);
      margin: 10px 0 20px;
    }

    button {
      align-self: flex-end;
      width: 142px;
      height: 36px;
      background: #ee4d64;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.02, '#EE4D64')};
      }
    }
  }
`;
