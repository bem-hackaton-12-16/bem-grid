module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                {
                    tag: 'p',
                    content: [
                        'This is a demo page to show blocks from bem-components library. ',
                        { tag: 'br' },
                        'Feel free to replace it with your own content in desktop.bundles/index/index.bemjson.js.',
                        { tag: 'br' },
                        'For more info about BEM check out ',
                        {
                            block: 'link',
                            url: 'https://bem.info/',
                            content: 'bem.info'
                        },
                        '.'
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
};
