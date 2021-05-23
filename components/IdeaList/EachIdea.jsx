import React from 'react'
import { Row, Col, Modal, Rate } from 'antd';
import { idea_list, idea_list_dummy } from 'util/values';
import { Container, Name, Title, Reason, Info, Subheading } from './styles';

const EachIdea = ({
  idea,
  isModalVisible,
  handleCancel,
}) => {
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
    <Modal title={title} visible={isModalVisible} onCancel={handleCancel}
      width={900}
      style={{ top: 20 }}
      footer={null}
    >
      <Container>
        <Row className="row-1">
          <Col span={8}>
            <img
              alt="example"
              src={icon || "https://fakeimg.pl/200x260/"}
              className="idea-img"
            />
          </Col>
          <Col span={8} className="column-side-2">
            <Info>
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
          <Col span={8} className="column-side-3">
            Rate Me: <Rate allowHalf defaultValue={0} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Title>Reasons</Title>
        <Row className="reasons">
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
    </Modal>
  )
}

export default EachIdea
