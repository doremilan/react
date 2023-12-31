import SelectInput from 'components/SelectInput';
import TextAreaInput from 'components/TextAreaInput';
import TextInput from 'components/TextInput';
import styled from 'styled-components';

interface Props {
  type: string;
  answer: any;
  setAnswer: any;
  options: {
    placeholder?: string;
    items?: string[];
  };
}

function Body({ type, answer, setAnswer, options }: Props) {
  let InputComponent: any = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin-left: 0 38px;
  flex: 1;
`;

export default Body;
