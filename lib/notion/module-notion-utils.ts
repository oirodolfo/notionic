// import dynamic from "next/dynamic";
//
// const reactNotionX = dynamic(() =>
//     import('react-notion-x/build/index').then(m => m.default))
// const notionUtils = dynamic(() =>
//     import('notion-utils').then(m => m.default))
// const notionClient = dynamic(() =>
//     import('notion-client/build/index.js').then(m => m.default))

export * as reactNotionX from 'react-notion-x/build/index.js'
export * as notionUtils from 'notion-utils'
export * as notionClient from 'notion-client'

// export { reactNotionX, notionUtils, notionClient }

