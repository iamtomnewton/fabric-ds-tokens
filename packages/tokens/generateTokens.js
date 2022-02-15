import StyleDictionaryPackage from 'style-dictionary';

const namespace = 'fabric';
const outputPath = 'packages/';
const destination = '_themes';

const brandLibrary = [
  {
    brand: 'bilbasen',
    // platforms: ['web', 'ios', 'android'],
    platforms: ['web'],
    themes: [`default`],
  },
  {
    brand: 'dba',
    // platforms: ['web', 'ios', 'android'],
    platforms: ['web'],
    themes: [`default`],
  },
  {
    brand: 'finn',
    platforms: ['web'],
    themes: [`default`],
  },
  {
    brand: 'schibsted',
    platforms: ['web'],
    themes: [`default`],
  },
];

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function tokenConfig(theme, brand, platform) {
  return {
    // Include will deep merge the files only overriding the theme values

    include: [
      `packages/tokens/brands/**/${brand}/**/*.json`,
      `packages/tokens/shared/**/*.json`,
      // `packages/tokens/platforms/**/${platform}/*.json`,
    ],

    // The source defines files that we want to potentially override the default values with. These will not show conflicts.

    source: [`packages/tokens/brands/**/${brand}/**/*.${theme}.json`],

    format: {
      // Adding a custom format for generating a JS object of all CSS variables
      customJs: function ({ dictionary, options }) {
        const tokens = dictionary.allTokens
          .map((token) => {
            return `  '${token.name}': 'var(--${token.name})'`;
          })
          .join(`,\n`);
        let output = `export const tokens = {\n${tokens}\n};`;
        output += `\nexport type Token = keyof typeof tokens;`;
        return output;
      },
    },

    platforms: {
      // 🕸 Web
      web: {
        transformGroup: 'web',
        buildPath: outputPath,
        files: [
          {
            destination: `tokens.ts`,
            format: 'customJs',
          },
          {
            destination: `${destination}/${brand}/${theme}.css`,
            format: 'css/variables',
            options: {
              selector: `.${namespace}-${brand}-${theme}`,
            },
          },
          // {
          //   destination: `scss/_${brand}-${theme}.scss`,
          //   format: 'scss/variables',
          // },
          // {
          //   destination: `json/${theme}.json`,
          //   format: 'json/nested',
          // },
        ],
        options: {
          outputReferences: true,
        },
      },

      // 🤖 Android
      // android: {
      //   transformGroup: 'android',
      //   buildPath: `${outputPath}/android/${brand}/`,
      //   files: [
      //     {
      //       destination: `colors.${theme}.xml`,
      //       format: 'android/colors',
      //     },
      //     {
      //       destination: `${theme}.xml`,
      //       format: 'android/resources',
      //     },
      //   ],
      //   options: {
      //     outputReferences: true,
      //   },
      // },

      // 🍏 IOS
      // ios: {
      //   transformGroup: 'ios',
      //   buildPath: `${outputPath}/ios/${brand}/`,
      //   files: [
      //     {
      //       destination: `${theme}.h`,
      //       format: 'ios/macros',
      //     },
      //     {
      //       destination: `${theme}.swift`,
      //       format: 'ios-swift/class.swift',
      //     },
      //   ],
      //   options: {
      //     outputReferences: true,
      //   },
      // },
    },
  };
}

// Main function
(async () => {
  // Build – Looping over the tokenConfig Brand > Theme > Platform.
  console.log('Build started...');

  brandLibrary.map(function (item) {
    console.log('\n==============================================');
    console.log(`\n${item.brand.toUpperCase()}`);

    item.themes.map(function (theme) {
      console.log(`\nBuilding the ${theme.toUpperCase()} theme...`);

      item.platforms.map(function (platform) {
        const StyleDictionary = StyleDictionaryPackage.extend(
          tokenConfig(theme, item.brand, platform),
        );

        StyleDictionary.buildPlatform(platform);
      });
    });
  });

  console.log('\n==============================================');
  console.log('\nBuild completed!\n');
})();
