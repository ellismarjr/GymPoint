import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  margin: 34px auto;
  height: 542px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 24px;
      color: #444;
    }

    button {
      width: 142px;
      height: 36px;
      background: #ee4d64;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
    }
  }
`;

export const PlansList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  margin-top: 14px;

  thead tr th {
    text-align: left;
    color: #444;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Plan = styled.table`
  tbody tr {
    td {
      padding: 16px 0;
      font-size: 16px;
      color: #666;
      border-bottom: 1px solid #eeeeee;

      button {
        background: none;
        border: 0;

        &:first-child {
          color: #4d85ee;
          margin-right: 23px;
        }
        &:last-child {
          color: #de3b3b;
        }
      }
    }
  }
`;
