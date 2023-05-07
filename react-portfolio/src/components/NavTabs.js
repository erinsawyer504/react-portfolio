import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={{ backgroundColor: '#2d283e' }}>
      <Menu pointing secondary  size="large">
        <Menu.Item
          name='About'
          active={currentPage === 'About'}
          onClick={() => handlePageChange('About')}
          style={{
            color: currentPage === 'About' ? '#d1d7e0' : '#564f6f',
            borderBottom: currentPage === 'About' ? '2px solid #d1d7e0' : '',
          }}
        />
        <Menu.Item
          name='Projects'
          active={currentPage === 'Projects'}
          onClick={() => handlePageChange('Projects')}
          style={{
            color: currentPage === 'Projects' ? '#d1d7e0' : '#564f6f',
            borderBottom: currentPage === 'Projects' ? '2px solid #d1d7e0' : '',
          }}
        />
        <Menu.Item
          name='Contact'
          active={currentPage === 'Contact'}
          onClick={() => handlePageChange('Contact')}
          style={{
            color: currentPage === 'Contact' ? '#d1d7e0' : '#564f6f',
            borderBottom: currentPage === 'Contact' ? '2px solid #d1d7e0' : '',
          }}
        />
        <Menu.Item
          name='Resume'
          active={currentPage === 'Resume'}
          onClick={() => handlePageChange('Resume')}
          style={{
            color: currentPage === 'Resume' ? '#d1d7e0' : '#564f6f',
            borderBottom: currentPage === 'Resume' ? '2px solid #d1d7e0' : '',
          }}
        />
      </Menu>
    </div>
  );
}
