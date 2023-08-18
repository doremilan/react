import getSurvey from 'components/services/getSurvey';
import { selector } from 'recoil';

export interface SurveyState {
  id: number;
  title: string;
  questions?: Questions[];
}

interface Questions {
  title: string;
  desc: string;
  type: string;
  required: boolean;
  options: {
    placeholder: string;
  };
}

const surveyState = selector<SurveyState | undefined>({
  key: 'questionsState',
  get: async () => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);
    return res.data;
  },
});

export default surveyState;
