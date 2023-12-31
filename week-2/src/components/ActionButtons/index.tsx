import Button from 'components/Button';
import postAnswers from 'components/services/postAnswers';
import useAnswers from 'hooks/useAnswers';
import useStep from 'hooks/useStep';
import useSurveyId from 'hooks/useSurveyId';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import questionsLengthState from 'stores/survey/questionsLength';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionsLength = useRecoilValue(questionsLengthState);

  let isLast = false;

  if (questionsLength) {
    isLast = questionsLength - 1 === step;
  }

  let navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            postAnswers(surveyId, answers);
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default ActionButtons;
