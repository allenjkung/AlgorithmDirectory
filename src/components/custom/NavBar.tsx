import React from 'react';

import { Flex } from '@chakra-ui/react';

import NavLink from './NavLink';

interface Props {
    selected : number
}

const navOptions = [
    {id: 0, name:"Home", url:"/Home"},
    {id: 1, name:"Algorithms", url:"/Algorithm"},
    {id: 2, name:"Data Structures", url:"/DataStructure"}
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
        <Flex gap="4" direction="row" ml="12">
            {renderNavLinks(selected)}
        </Flex>
    );
}

export default NavBar;