import React from 'react';
import content from '../content/navigation.json';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// Initialize icons in case this example uses them
initializeIcons();

class Navigation extends React.Component {
   

        constructor(props) {
            super(props);
        }
    
    
        render() {
            return (
                <Nav
                    groups={content.links}
                    onLinkClick={this.props.currentUrl}
                    selectedKey={this.props.url}
                    expandButtonAriaLabel={'Expand or collapse'}
                />
            )
        }
    }


export default Navigation;
