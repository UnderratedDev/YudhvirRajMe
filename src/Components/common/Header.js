import React from 'react';

import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to = '/' activeClassName = 'active'>
                Home
            </IndexLink>
            { ' | ' }
            <Link to = '/cats' activeClassName = 'active'>
                Cats
            </Link>
            { ' | ' }
            <Link to = '/projects' activeClassName = 'active'>
                Projects
            </Link>
        </nav>
    )
}

export default Header;