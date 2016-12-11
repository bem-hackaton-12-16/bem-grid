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
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: {sm: 2},
                            content: 'Hello 1'
                        },
                        {
                            elem: 'col',
                            mods: {sm: 2},
                            content: 'Hello 2'
                        },
                        {
                            elem: 'col',
                            mods: {sm: 2},
                            content: 'Hello 3'
                        },
                        {
                            elem: 'col',
                            mods: {sm: 2},
                            content: 'Hello 4'
                        },
                        {
                            elem: 'col',
                            mods: {sm: 2},
                            content: 'Hello 5'
                        },
                        {
                            elem: 'col',
                            mods: {sw: 2},
                            content: 'Hello 6'
                        },
                        {
                            block: 'vars'
                        }
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
