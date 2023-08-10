import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  answer?: string[];
  setAnswer: any;
  options: {
    items: string[];
  };
}

function Item({
  children,
  onChange,
}: {
  children: ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer, setAnswer, options }: Props) {
  const handleChange = (isChecked: boolean, index: number) => {
    if (!answer) {
      return;
    }
    if (isChecked) {
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => Number(item) !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] ~ span {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
    transition: border 180ms ease-in-out;
  }
  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }
  input[type='checkbox'] ~ div {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    vertical-align: middle;
  }
  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default SelectInput;

SelectInput.defaultProps = {
  answer: [],
};
