import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    .log{
        /* color: var(--primary-color); */
        color: ${props => props.theme.color.primaryColor};
        cursor: pointer;
    }

`