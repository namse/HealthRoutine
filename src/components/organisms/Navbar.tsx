import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface Navbar {}

export function Navbar(props: Navbar) {
  return (
    <StyledRoot>
      <span className="timer">00:00</span>
      <span className="material-icons">power_settings_new</span>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: absolute;
  width: 100%;
  padding: 24px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  .timer {
    flex-grow: 1;
  }
  .material-icons {
    font-size: 28px;
  }
`;