import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import questionsState from 'stores/questions/atom';

function useCurrentQuestion() {
  const params: any = useParams();
  const step = parseInt(params.step);

  const questions = useRecoilValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
