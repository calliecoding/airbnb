import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    .log{
        /* color: var(--primary-color); */
        color: ${(props) =>
          props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
      }
        cursor: pointer;
    }

`;
