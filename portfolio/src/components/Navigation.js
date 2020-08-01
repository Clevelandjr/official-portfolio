Import React from 'react';
Import {Nav, INavLink, INavStyles, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav';

// Initialize icons in case this example uses them
initializeIcons();

const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: 'http://example.com',
          expandAriaLabel: 'Expand Home section',
          collapseAriaLabel: 'Collapse Home section',
          links: [
            {
              name: 'Activity',
              url: 'http://msn.com',
              key: 'key1',
              target: '_blank',
            },
            {
              name: 'MSN',
              url: 'http://msn.com',
              disabled: true,
              key: 'key2',
              target: '_blank',
            },
          ],
          isExpanded: true,
        },
    }
    ];

