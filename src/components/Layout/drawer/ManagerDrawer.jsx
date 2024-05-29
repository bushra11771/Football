import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { logout } from '../../../redux/actions/auth';

export default function ManagerDrawer() {
  const [open, setOpen] = React.useState(true);
  const menus = [
    { text: "My Team", icon: <GroupOutlinedIcon />,url:"/manager" },
    { text: "My Account", icon: <PersonOutlinedIcon />, url: "/account" }
  ]
  const menuSetting = [
    { text: "settings", icon: <SettingsOutlinedIcon /> },
    { text: "logout", icon: <ExitToAppOutlinedIcon /> }
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAction = (item) => {
    if (item.text == "logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate("/account");
    }
  }
  const handleClick = (url) => {
    navigate(url)
  }
  return (
    <>
      <List>
        {menus.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => handleClick(item.url)}>
            <ListItemButton sx={{ margin: "2px", padding: "5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuSetting.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => handleAction(item)}>
            <ListItemButton sx={{ margin: "2px", padding: "5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}