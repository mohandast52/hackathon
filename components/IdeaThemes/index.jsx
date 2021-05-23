import { useState, useEffect } from 'react';
import { Row, Divider, Tabs } from 'antd';
import IdeaList from '../IdeaList';
import { NEW_IDEAS, idea_list_dummy } from 'util/values';
import { Container, Title } from './styles';

const { TabPane } = Tabs;

// const getData = () => fetch(`/api/ideas`).then((res) => res.json())

const getTabNames = () => {
  const TAB_NAMES = ['All'];
  idea_list_dummy.forEach(({ tags }) => {
    tags.forEach((tag) => {
      if (!TAB_NAMES.includes(tag)) TAB_NAMES.push(tag);
    })
  });
  return TAB_NAMES;
}

const Demo = () => {
  const [list, setIList] = useState(idea_list_dummy);

  // setData(data)
  // useEffect(() => {
  //   getData().then((data) => console.log(data));
  // }, []);

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
            getTabNames().map((name) => {
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