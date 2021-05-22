import { Row, Col, Tabs } from 'antd';
import IdeaList from '../IdeaList';
import { Container } from './styles';

const THEMES = [
  { key: 'all', name: 'All' },
  { key: 'hack_for_good', name: 'Hack for good' },
  { key: 'improvements', name: 'Improvements' },
  { key: 'entertainment', name: 'Entertainment' },
  { key: 'others', name: 'Others' },
];

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Container>
    <Tabs defaultActiveKey="1" onChange={callback}>
      {
        THEMES.map(({ key, name }) => {
          return (
            <TabPane tab={name} key={key}>
              <Row justify="space-around">
                <IdeaList />
              </Row>
            </TabPane>
          )
        })
      }
    </Tabs>
  </Container>
);

export default Demo;