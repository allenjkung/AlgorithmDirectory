import React from 'react';

import { Flex } from '@chakra-ui/react';

import NavLink from './NavLink';

interface Props {
    selected : number
}

const navOptions = [
    {id: 0, name:"Home", url:"/Home"},
    {id: 1, name:"Sort Algorithms", url:"/SortAlgorithms"},
    {id: 2, name:"Disclaimers", url:"/disclaimer"}
];

const renderNavLinks = (selected = 0) => {
    return navOptions.map(navOption => {
        const isSelected = navOption.id === selected ? 1 : 0;
        return <NavLink linkName={navOption.name} linkUrl={navOption.url} selected={isSelected}/>;
    });
}

function NavBar(props: Props) {
    const { selected } = props;
    return (
        <Flex as="header" zIndex="200" position="fixed" top="0" width="100%" ml="12" direction="row" gap="4" backgroundColor="white">
            {renderNavLinks(selected)}
        </Flex>
    );
}

export default NavBar;