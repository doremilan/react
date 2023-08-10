import { useParams } from 'react-router-dom';

function useStep() {
  const params: any = useParams();
  return parseInt(params.step);
}

export default useStep;
