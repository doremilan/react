import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import answersState from 'stores/answers/atom';

function useCurrentAnswer() {
  const params: any = useParams();
  const step = parseInt(params.step);

  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];
  const setAnswer = (newAnswer: never) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
