const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  flex: {
    centerCenter: `
        display: flex; 
        justify-content: center;
        align-items: center;
    `,
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
        transition: box-shadow 250ms ease;
        &:hover {
            background-color: #f5f5f5;
        }
    `,
  },
};

const darkTheme = {};

export default theme;
