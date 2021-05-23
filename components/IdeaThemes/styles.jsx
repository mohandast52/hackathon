import styled from 'styled-components';

export const Container = styled.div`
  .ant-row {
    row-gap: 24px !important;
    .ant-card {
      margin: 0 auto;
      width: 240px;
      .ant-card-meta-description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 12px;
      }
      .ant-card-actions {
        li {
          width: 100%;
          text-align: left;
          padding: 0 20px;
        }
      }
    }
  }
`;