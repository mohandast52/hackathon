import { useState } from 'react';
import { Row, Divider, Tabs } from 'antd';
import IdeaList from '../IdeaList';
import { idea_list, idea_list_dummy } from 'util/values';
import { Container, Title } from './styles';

const THEMES = [
  { key: 'all', name: 'All' },
  { key: 'hack_for_good', name: 'Hack for good' },
  { key: 'improvements', name: 'Improvements' },
  { key: 'entertainment', name: 'Entertainment' },
  { key: 'others', name: 'Others' },
];

const { TabPane } = Tabs;


const newIdeas = idea_list_dummy.slice(0, 4);

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
          <IdeaList idea_list_dummy={newIdeas} />
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