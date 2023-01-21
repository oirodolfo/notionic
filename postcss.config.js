// module.exports = {
//   plugins: [
//     'tailwindcss',
//     'autoprefixer'
//     //
//     // 'postcss-flexbugs-fixes',
//     // [
//     //   'postcss-preset-env',
//     //   {
//     //     autoprefixer: {
//     //       flexbox: 'no-2009'
//     //     },
//     //     stage: 3,
//     //     features: {
//     //       'custom-properties': false
//     //     }
//     //   }
//     // ],
//     // [
//     //   '@fullhuman/postcss-purgecss',
//     //   {
//     //     content: [
//     //       './pages/**/*.{js,jsx,ts,tsx}',
//     //       './components/**/*.{js,jsx,ts,tsx}',
//     //       './style/**/*.{js,jsx,ts,tsx}'
//     //     ],
//     //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//     //     safelist: ['html', 'body']
//     //   }
//     // ]
//   ]
// }

// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
