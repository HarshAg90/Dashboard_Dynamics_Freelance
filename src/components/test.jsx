import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';

export default function Test() {
  return (
    <div id="test">
        <Menu menuButton={<MenuButton>Text color</MenuButton>}>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        </Menu>
        
    </div>
    
  );
}