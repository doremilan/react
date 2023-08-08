import { styled } from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

interface ColorMap {
  PRIMARY: {
    BUTTON: {
      DEFAULT: {
        COLOR: string;
        BACKGROUND: string;
      };
      HOVER: {
        COLOR: string;
        BACKGROUND: string;
      };
      PRESSED: {
        COLOR: string;
        BACKGROUND: string;
      };
      DISABLED: {
        COLOR: string;
        BACKGROUND: string;
      };
    };
  };
  SECONDARY: {
    BUTTON: {
      DEFAULT: {
        COLOR: string;
        BACKGROUND: string;
      };
      HOVER: {
        COLOR: string;
        BACKGROUND: string;
      };
      PRESSED: {
        COLOR: string;
        BACKGROUND: string;
      };
      DISABLED: {
        COLOR: string;
        BACKGROUND: string;
      };
    };
  };
  TERTIARY: {
    BUTTON: {
      DEFAULT: {
        COLOR: string;
        BACKGROUND: string;
        BORDER: string;
      };
      HOVER: {
        COLOR: string;
        BACKGROUND: string;
        BORDER: string;
      };
      PRESSED: {
        COLOR: string;
        BACKGROUND: string;
        BORDER: string;
      };
      DISABLED: {
        COLOR: string;
        BACKGROUND: string;
        BORDER: string;
      };
    };
  };
}

const colorMap: ColorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
