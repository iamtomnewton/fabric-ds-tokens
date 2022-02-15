import { createGlobalStyle } from 'styled-components';
import { tokens } from '../packages/tokens';

// BILBASEN
import '../packages/_themes/bilbasen/default.css';
// import '../packages/_themes/bilbasen/dark.css';

// DBA
import '../packages/_themes/dba/default.css';
// import '../packages/_themes/dba/dark.css';

// FINN
import '../packages/_themes/finn/default.css';
// import '../packages/_themes/finn/dark.css';

// // SCHIBSTED
import '../packages/_themes/schibsted/default.css';

const brands = ['Bilbasen', 'DBA', 'Finn', 'Schibsted'];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Foundations', 'Elements', 'Patterns', 'Collections', '*'],
    },
  },
  docs: { disable: true, hidden: true },
  backgrounds: {
    grid: {
      disable: true,
    },
    disable: true,
  },
};

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Brand',
    defaultValue: 'Finn',
    toolbar: {
      icon: 'globe',
      // Array of plain string values or MenuItem shape (see below)
      items: brands,
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  // theme: {
  //   name: 'Theme',
  //   description: 'Global theme for components',
  //   defaultValue: 'Default',
  //   toolbar: {
  //     icon: 'paintbrush',
  //     // Array of plain string values or MenuItem shape (see below)
  //     items: ['Default', 'Dark'],
  //     // Property that specifies if the name of the item will be displayed
  //     showName: true,
  //   },
  // },
};

// TODO – Add array of brand and theme combinations and only show relevant controls (i.e. a Brand may not have a dark theme etc)

const withThemeTag = (Story, context) => {
  const brand = context.globals.brand;
  const theme = 'Default';

  const themeSelector = `${brand.toLowerCase()}-${theme.toLowerCase()}`;

  return (
    <>
      <GlobalStyles />
      <div className={`fabric-${themeSelector}`}>
        <Story {...context} />
      </div>
    </>
  );
};

export const decorators = [withThemeTag];

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Finntype";
    src: url("https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Light.woff2") format("woff2"),
        url("https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Light.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Finntype";
    src: url("https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Medium.woff2") format("woff2"),
        url("https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Medium.woff") format("woff");
    font-weight: bold;
    font-style: normal;
}

  * {
    font-family: ${tokens['typography-font-name']};
  } 
`;
