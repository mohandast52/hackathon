import { Card, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { idea_list, idea_list_dummy } from 'util/values';

const { Meta } = Card;

const IdeaList = () => {
  return (
    <>
      {idea_list_dummy.map(({
        id,
        title,
        description,
      }) => {
        return (
          <Col span={8} key={id}>
            <a target="_blank" href={`/list/${id}`} rel="noopener noreferrer">
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://fakeimg.pl/250x160/"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title={title}
                  description={description}
                />
              </Card>
            </a>
          </Col>
        )
      })}
    </>
  )
};

export default IdeaList;