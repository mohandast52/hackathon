import EachIdea from 'components/IdeaList/EachIdea'
import { useRouter } from 'next/router'

const Comp = () => {
  const router = useRouter();
  const { idea_id } = router.query;

  return <EachIdea idea_id={idea_id}>{idea_id}</EachIdea>;
}

export default Comp;