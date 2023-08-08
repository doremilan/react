import Button from 'components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import questionsState from 'stores/questions/atom';
import styled from 'styled-components';

function ActionButtons() {
  const params: any = useParams();
  const step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;

  const isLast = questionsLength - 1 === step;
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
