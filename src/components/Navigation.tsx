import Logout from '@mui/icons-material/Logout';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import { AppBar, Avatar, Toolbar } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { bindMenu, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import React, { FunctionComponent } from 'react';

import Logo from './Logo';

const Navigation: FunctionComponent = function () {
  const popupState = usePopupState({ variant: 'popover', popupId: 'profileMenu' });
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar variant="dense" sx={{ my: 2 }}>
        <Logo variant="dark" sx={{ flexGrow: 1, display: 'block' }} />
        <Typography sx={{ color: 'primary.main', flexGrow: 'auto', py: 1, minWidth: 100 }}>
          Home
        </Typography>
        <Typography sx={{ color: 'primary.main', flexGrow: 'auto', py: 1, minWidth: 100 }}>
          About
        </Typography>
        <Avatar
          sx={{ color: 'primary.main', flexGrow: 'auto', padding: 3 }}
          {...bindTrigger(popupState)}
        >
          HN
        </Avatar>
        <Menu
          {...bindMenu(popupState)}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 18,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          <MenuItem onClick={popupState.close}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={popupState.close}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={popupState.close}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default Navigation;
