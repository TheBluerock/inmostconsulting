import React from 'react';
import Layout from '@layout';
import theme from '@theme';
import { Link } from 'gatsby';

const ArticlesPage = () => {

    const ArticlesPageTheme = {
        ...theme,
        colors: {
            primary: 'rgba(0, 0, 0, .87)',
            background: 'rgba(240, 240, 240, 1)'
        }
    }

    return(
        <Layout theme={ ArticlesPageTheme }>
            <Link to="/">
                To HomePage
            </Link>
        </Layout>
    )
}

export default ArticlesPage;