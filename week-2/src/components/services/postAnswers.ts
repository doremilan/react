import mainApi from './apis/mainApi';

function postAnswers(surveyId: number, data: any[]) {
  mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
