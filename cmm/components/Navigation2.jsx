import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom"

const Navigation2 = () => {
  const [value, setValue] = React.useState(0);

  return (<>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <table>
            <tr>
              <td><Link to="/home" style={{width:40, margin:10}}>Home</Link></td>
              <td><Link to="/counter" style={{width:40, margin:10}}>Counter</Link></td>
              <td><Link to="/todos" style={{width:40, margin:10}}>Todos</Link></td>
              <td><Link to="/signup" style={{width:40, margin:10}}>SignUP</Link></td>
              <td><Link to="/login" style={{width:40, margin:10}}>Login</Link></td>
            </tr>
            <tr>
              <td><Link to="/iris" style={{width:40, margin:10}}>Iris</Link></td>
              <td><Link to="/fashion" style={{width:40, margin:10}}>Fashion</Link></td>
              <td><Link to="/number" style={{width:40, margin:10}}>Number</Link></td>
              <td><Link to="/crawler" style={{width:40, margin:10}}>Crawler</Link></td>
              <td><Link to="/user-list" style={{width:40, margin:10}}>Userlist</Link></td>
            </tr>
            <tr>
              <td><Link to="/stock" style={{width:40, margin:10}}>Stock</Link></td>
            </tr>
        </table>
      </BottomNavigation>
  </>
  );
}

export default Navigation2