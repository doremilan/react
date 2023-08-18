import mainApi from './apis/mainApi';

function getSurvey(surveyId: string) {
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
