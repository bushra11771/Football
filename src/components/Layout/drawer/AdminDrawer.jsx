import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { logout } from '../../../redux/actions/auth';
import { setBreadCrumbs } from '../../../redux/actions';
export default function AdminDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menus = [
    { text: "Tournament Management", icon: <EmojiEventsOutlinedIcon />, url: "/admin/tournament" },
    { text: "Team Management", icon: <SportsSoccerOutlinedIcon />, url: "/admin/teammanage" },
    { text: "Player Approval", icon: <DoneAllOutlinedIcon /> },
    { text: "User Management", icon: <GroupOutlinedIcon /> },
    { text: "My Account", icon: <PermIdentityOutlinedIcon />, url:"/account" },
  ]
  const menuSetting = [
    { text: "settings", icon: <SettingsOutlinedIcon /> },
    { text: "logout", icon: <ExitToAppOutlinedIcon /> }
  ];
  const handleAction = (item) => {
    if (item.text == "logout") {
      dispatch(logout());
      navigate("/");
    }else {
      navigate("/account");
    }
  }
  const handleClick = (url,text) => {
    dispatch(setBreadCrumbs("set", { icon: "", text: text }));
    navigate(url)
  }
  return (
    <>
      <List>
        {menus.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => handleClick(item.url,item.text)}>
            <ListItemButton sx={{ margin: "2px", padding: "5px", "& .MuiListItemIcon-root": { minWidth: 35 } }}>
              <ListItemIcon>
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
      <Divider />
    </>
  );
}