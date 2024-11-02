import React from 'react';

import { Flex } from '@chakra-ui/react';

import NavLink from './NavLink';

function NavBar() {
    return (
        <Flex gap="4" direction="row" ml="12">
            <NavLink linkName="Home" linkUrl="/APITest"/>
            <NavLink linkName="Algorithms" linkUrl="/APITest2"/>
        </Flex>
    );
}

export default NavBar;