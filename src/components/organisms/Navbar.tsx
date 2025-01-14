import styled from "@emotion/styled";
import theme from "@src/styles/theme";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, ReactElement } from "react";
import { runSetCount, makeTimer } from "@src/services/makeTimer";

interface Navbar {
  setDrawerOpen: (drawerOpen: boolean) => void;
}

export default function Navbar(props: Navbar) {
  const router = useRouter();

  const [count, setCount] = useState(0);

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  const drawerBackdrop: any = useRef();

  return (
    <StyledRoot>
      <button onClick={() => props.setDrawerOpen(true)}>
        <span className="material-icons">reorder</span>
      </button>
      <span className="timer">{makeTimer(count, "h:m:s")}</span>
      <button onClick={() => router.push("/")}>
        <span className="material-icons">power_settings_new</span>
      </button>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};

  .material-icons {
    font-size: 28px;
    color: ${theme.colors.secondary};
  }
`;
