import React from 'react';
import {
    Menu
  } from 'semantic-ui-react';


function NavTabs({ currentPage, handlePageChange }) {
    return (
<Menu pointing secondary>
  <Menu.Item
    name='About'
    active={currentPage === 'About'}
    onClick={() => handlePageChange('About')}
  />
  <Menu.Item
    name='Projects'
    active={currentPage === 'Projects'}
    onClick={() => handlePageChange('Projects')}
  />
  <Menu.Item
    name='Contact'
    active={currentPage === 'Contact'}
    onClick={() => handlePageChange('Contact')}
  />
  <Menu.Item
    name='Resume'
    active={currentPage === 'Resume'}
    onClick={() => handlePageChange('Resume')}
  />
</Menu>

    );
    }

export default NavTabs;
