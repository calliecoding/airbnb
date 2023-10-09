import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 199;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "#fff"};

    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "#eee"};

    transform: all 250ms ease;

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .search-section {
      height: 100px;
    }
  }
  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? "100px" : "0")};
`;
