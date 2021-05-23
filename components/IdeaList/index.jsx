import { useState } from 'react';
import { Card, Col, Rate, Tag } from 'antd';
import { StarFilled } from '@ant-design/icons';
import EachIdea from './EachIdea';
import { Actions } from './styles';

const { Meta } = Card;

const IdeaList = ({ idea_list_dummy }) => {
  const [currentIdea, setIdea] = useState(null);

  const showModal = (idea) => {
    setIdea(idea);
  };

  const handleCancel = () => {
    setIdea(null);
  };

  return (
    <>
      {idea_list_dummy.map((idea) => {
        const {
          id,
          title,
          description,
          rating,
          ratings_count,
          tags,
          icon
        } = idea;

        return (
          <Col span={8} key={id}>
            <Card
              hoverable
              onClick={() => showModal(idea)}
              cover={
                <img
                  alt="example"
                  src={icon || "https://fakeimg.pl/250x160"}
                />
              }
              actions={[
                <Actions>
                  <Rate allowHalf disabled defaultValue={rating} /> {rating} ({ratings_count})
                </Actions>
              ]}
            >
              <Meta
                title={title}
                description={description}
              />
              {tags.map(tag => <Tag key={`${id}-${tag}`} color="blue">{tag}</Tag>)}
            </Card>
          </Col>
        )
      })}

      {currentIdea && (
        <EachIdea
          isModalVisible={!!currentIdea}
          idea={currentIdea}
          handleCancel={handleCancel}
        />
      )}
    </>
  )
};

export default IdeaList;