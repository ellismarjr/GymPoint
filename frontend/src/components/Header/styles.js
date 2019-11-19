import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 5px;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }

    a {
      font-weight: bold;
      color: #999;
      font-size: 15px;
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666;
      margin-bottom: 4px;
    }

    span {
      color: #de3b3b;
    }
  }
`;
