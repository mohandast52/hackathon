import { useState } from 'react';
import { Row, Divider, Tabs } from 'antd';
import IdeaList from '../IdeaList';
import { NEW_IDEAS, idea_list_dummy } from 'util/values';
import { Container, Title } from './styles';

const { TabPane } = Tabs;

const TAB_NAMES = ['All'];
idea_list_dummy.forEach(({ tags }) => {
  tags.forEach((tag) => {
    if (!TAB_NAMES.includes(tag)) {
      TAB_NAMES.push(tag);
    }
  })
});

const Demo = () => {
  const [list, setIList] = useState(idea_list_dummy);

  const callback = (key) => {
    const temp = key === 'All' ?
      idea_list_dummy :
      idea_list_dummy.filter(({ tags }) => !!tags.includes(key));
    setIList(temp);
  }

  return (
    <>
      <Container>
        <Title>New Ideas</Title>
        <Row>
          <IdeaList idea_list_dummy={NEW_IDEAS} />
        </Row>
        <Divider />
        <Divider />

        <Title>Ideas</Title>
        <Tabs onChange={callback}>
          {
            TAB_NAMES.map((name) => {
              return (
                <TabPane tab={name} key={name}>
                  <Row>
                    <IdeaList idea_list_dummy={list} />
                  </Row>
                </TabPane>
              )
            })
          }
        </Tabs>

        <br />
        <br />
      </Container>
    </>
  )
};

export default Demo;