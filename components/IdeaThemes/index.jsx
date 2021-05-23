import { Row, Divider, Tabs } from 'antd';
import IdeaList from '../IdeaList';
import { Container } from './styles';
import { idea_list, idea_list_dummy } from 'util/values';

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

const slicedArray = idea_list_dummy.slice(0, 4);

const Demo = () => (
  <>
    <Container>
      <Row>
        <IdeaList idea_list_dummy={slicedArray} />
      </Row>
      <Divider />
      <Divider />
      <Divider />

      <Tabs defaultActiveKey="1" onChange={callback}>
        {
          THEMES.map(({ key, name }) => {
            return (
              <TabPane tab={name} key={key}>
                <Row>
                  <IdeaList idea_list_dummy={idea_list_dummy} />
                </Row>
              </TabPane>
            )
          })
        }
      </Tabs>
    </Container>
  </>
);

export default Demo;