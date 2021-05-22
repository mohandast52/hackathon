import React from 'react'
import { Row, Col } from 'antd';
import { idea_list, idea_list_dummy } from 'util/values';
import { Container, Name, Title, Reason, Info, Subheading } from './styles';

const EachIdea = ({ idea_id }) => {
  const idea = idea_list_dummy.find(({ id }) => id === idea_id);

  if (!idea) {
    return (
      <div className="invalid-message">Invalid Id</div>
    );
  }

  const {
    title,
    description,
    suggested_on,
    reasons,
    members_involed,
    icon,
    rating
  } = idea;

  return (
    <div>
      <Container>
        <Row>
          <Col span={8}>
            <img
              alt="example"
              src={icon || "https://fakeimg.pl/200x260/"}
              className="idea-img"
            />
          </Col>
          <Col span={8}>
            <Info>
              <Name>{title}</Name>
              <div><Subheading>Date:</Subheading>{suggested_on}</div>
              <div><Subheading>Rating:</Subheading>{rating}</div>
              <div><Subheading>Description:</Subheading>{description}</div>
              <div>
                <Subheading>Participants:</Subheading>
                {members_involed.map(({ name, title: job }) => {
                  return (
                    <div>
                      <span>{name}</span>
                      <span>&nbsp;({job})</span>
                    </div>
                  )
                })}
              </div>
            </Info>
          </Col>
        </Row>
      </Container>

      <Container>
        <Title>Reasons</Title>
        <Row>
          {reasons.map(({ img, info }) => {
            return (
              <Col span={8}>
                <Reason>
                  <img
                    alt="example"
                    src={img || "https://fakeimg.pl/160x160/"}
                  />
                  <div className="desc">{info}</div>
                </Reason>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default EachIdea
