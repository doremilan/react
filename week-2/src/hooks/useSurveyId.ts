import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params: any = useParams();
  return parseInt(params.surveyId);
}

export default useSurveyId;
