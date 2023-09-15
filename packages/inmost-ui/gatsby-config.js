const path = require('path');

module.exports = options => {
    return {
        plugins: [
            'gatsby-plugin-emotion',
            'gatsby-plugin-transition-link',
            {
                resolve: 'gatsby-plugin-react-svg',
                options: {
                    rule: {
                        include: path.resolve(__dirname, './src/svg'),
                    }
                }
            },
            {
                resolve: 'gatsby-plugin-alias-imports',
                options: {
                    alias: {
                        "@commons": path.resolve(__dirname, './src/commons'),
                        "@components": path.resolve(__dirname, './src/components'),
                        "@layout": path.resolve(__dirname, './src/layout'),
                        "@theme": path.resolve(__dirname, './src/theme'),
                        "@widgets": path.resolve(__dirname, './src/widgets'),
                        "@svg": path.resolve(__dirname, './src/svg')
                    }
                }
            }
        ]
    }
}