import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { css } from '@emotion/css';

interface NumberInput {
  type: 'weight' | 'count';
  value: number;
  setValue: (value: number) => void;
  label?: string;
  placeholder?: string;
  style?: any;
}

export function NumberInput(props: NumberInput) {
  const { label, placeholder, value, setValue, style, type } = props;

  function addValue() {
    setValue(value + typeProp());
  }

  function subtractValue() {
    if (value > 0) {
      setValue(value - typeProp());
    }
  }

  const typeProp = () => {
    if (type === 'weight') {
      return 5;
    }
    return 1;
  };

  function handleOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(e.target.value));
  }

  return (
    <StyledRoot
      className={css`
        ${style}
      `}
    >
      <label>{label}</label>
      <div className="container">
        <button onClick={subtractValue}>
          <span className="material-icons">remove</span>
        </button>
        <input
          placeholder="0"
          value={value}
          onChange={handleOnchange}
          type="number"
        />
        <button onClick={addValue}>
          <span className="material-icons">add</span>
        </button>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  color: ${theme.colors.text};

  label {
    display: block;
    text-align: center;
  }

  .container {
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    height: 100px;
    display: flex;

    & > input {
      text-align: center;
      font-weight: bold;
      width: 160px;
      height: 100px;
    }

    & > button {
      padding: 0 32px;
      background-color: transparent;
      height: 100px;

      &:first-child {
        border-right: 1px solid ${theme.colors.border};
      }

      &:last-child {
        border-left: 1px solid ${theme.colors.border};
      }
    }
  }

  .material-icons {
  }
`;
