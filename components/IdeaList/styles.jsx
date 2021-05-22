import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2em;    
  padding-bottom: 60px;

  img.idea-img { 
    margin: 24px auto;
    display: block;
  }
`;

export const Name = styled.div`
  font-size: 2em;
  font-weight: 600;
  text-shadow: 4px 4px 5px #7575755c;
  letter-spacing: 6px;
  margin-bottom: 24px;
`;

export const Info = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

export const Subheading = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-weight: bold;
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 4px;
  margin: 0 0 2rem 0;
  font-weight: 600;
`;

export const Reason = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;    
  margin: 0 auto;

  img {
    border-radius: 50%;
  }
  .desc {
    margin-top: 1rem;
    text-align: center;
    /* font-size: 1.2em; */
  }
`;