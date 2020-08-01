import React from 'react';
import {Nav, INavLink, INavStyles, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav';

// Initialize icons in case this example uses them
initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        key: 'key1',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'About',
        url: 'http://example.com',
        key: 'key2',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Resume',
        url: 'http://example.com',
        key: 'key3',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Web Applications',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Stats',
            url: 'http://msn.com',
            key: 'key4',
            target: '_blank',
          },
          {
            name: 'MSN',
            url: 'http://msn.com',
            disabled: true,
            key: 'key5',
            target: '_blank',
          },
        ],
        isExpanded: true,
      
      
      },
    ],
  },
];

const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

const NavBasicExampleWrapper = () => <Fabric><NavBasicExample /></Fabric>;
ReactDOM.render(<NavBasicExampleWrapper />, document.getElementById('content'))
