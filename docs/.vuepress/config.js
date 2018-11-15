let { read } = require ('./category/read.js')
let { rusteco } = require ('./category/rusteco.js')
let { book } = require ('./category/rust.js')
let { asyncrust } = require ('./category/asyncrust.js')
let { std } = require ('./category/std.js')
let { cookbook } = require ('./category/cookbook.js')
let { tokio } = require ('./category/tokio.js')
let { actix } = require ('./category/actix.js')
let { actixweb } = require ('./category/actixweb.js')
let { diesel } = require ('./category/diesel.js')
let { discovery } = require ('./category/discovery.js')
let { awesome } = require ('./category/awesome.js')

module.exports = {
    title: 'Rust中文社区',
    description: 'Rust语言为中心的中文社区',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'rustlang-cn/rustlang-cn',
        docsDir: 'docs',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', 
        docsDir: 'docs',
        sidebarDepth: 0,
        search: true,
        searchMaxSuggestions: 11,
        nav: [
          { text: '阅读', items: [ 
            { text: 'Rust文章', link: '/read/rust/' },
            { text: 'Rust生态', link: '/read/rusteco/' }
          ] },
          { text: 'Rust语言', items: [ 
            { text: '深入Rust语言', link: '/rust/book/' },
            { text: 'Rust异步编程', link: '/rust/async-rust/' },
            { text: '标准库', link: '/rust/std/' },
            { text: '参考规范', link: '/rust/reference/' },
            { text: 'Rust食谱', link: '/rust/cookbook/' },
            { text: '资源', link: '/rust/resourse/' }
          ] },
          { text: 'Server', items: [ 
            { text: 'Tokio', link: '/server/tokio/' },
            { text: 'Actix', link: '/server/actix/' },
            { text: 'Actix-web', link: '/server/actix-web/' },
            { text: 'Diesel', link: '/server/diesel/' }
          ] },
          { text: 'Wasm', items: [ 
            { text: 'Book', link: '/wasm/book/' },
            { text: 'Wasm-bindgen', link: '/wasm/wasm-bindgen/' },
            { text: '资源', link: '/wasm/resourse/' }
          ] },
          { text: 'IOT', items: [ 
            { text: 'Discovery', link: '/iot/discovery/' },
            { text: 'Embedded-book', link: '/iot/book/' },
            { text: 'Embedonomicon', link: '/iot/embedonomicon/' },
            { text: '资源', link: '/iot/resourse/' }
          ] },
          { text: '资源', items: [ 
            { text: 'Awesome', link: '/resourse/awesome/' },
            { text: 'Crates', link: '/resourse/crates/' },
            { text: 'Blogs', link: '/resourse/blogs/' }
          ] },
          { text: '论坛', link: 'http://ruster.xyz' }
        ],
        sidebar: {
          '/read/rust/': read('Read'),
          '/read/rusteco/': rusteco('Rusteco'),
          '/rust/book/': book('Rust'),
          '/rust/async-rust/': asyncrust('Async-Rust'),
          '/rust/std/': std('Std'),
          '/rust/cookbook/': cookbook('Cookbook'),
          '/server/tokio/': tokio('Tokio'),
          '/server/actix/': actix('Actix'),
          '/server/actix-web/': actixweb('Actix-Web'),
          '/server/diesel/': diesel('Diesel'),
          '/iot/discovery/': discovery('Discovery'),
          '/resourse/awesome/': awesome('Awesome')
        }
    }
}

