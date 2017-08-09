import React, {Component} from 'react';
import {NavigationMenu} from './NavbarStyle';
import {Menu, MenuButton, MenuItem} from './NavbarStyle';
import SocialLinks from '../SocialLinks/SocialLinks';
import { NavLink } from '../../style/styled/styles';

const Navbar = () => (
    <NavigationMenu>
        {/*<SocialLinks /> */}
        {/* <Menu>
            <MenuItem>
                <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/portfolio">Our work</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/contact">Contact us</NavLink>
            </MenuItem>
        </Menu> */}
        <MenuButton/>
    </NavigationMenu>
);

export default Navbar;
