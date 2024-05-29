import React from "react"
import "./style.css"
import { useSelector,useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import { Typography, FormControlLabel } from "@mui/material";
import Switch from '@mui/material/Switch';
import { Main, DrawerHeader } from "../../styled"
import { setDarkMode } from "../../redux/actions";

const ImgUpload = ({
  onChange,
  src
}) =>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img for="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>

const Name = ({ onChange, value }) => <div className="field">
  <label htmlFor={"name"}>
    username:
  </label>
  <input
    id="name"
    type="text"
    onChange={onChange}
    maxlength="25"
    value={value}
    placeholder="username"
    required />
</div>


const Password = ({ onChange, value }) =>
  <div className="field">
    <label htmlFor={"password"}>
      password:
    </label>
    <input
      id="password"
      type="password"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Enter new password"
      required
    />
  </div>


const Profile = ({ onSubmit, src, name, status, }) =>
  <form onSubmit={onSubmit}>
    <h3>My Account</h3>
    <label className="custom-file-upload fas">
      <div className="img-wrap" >
        <img for="photo-upload" src={src} />
      </div>
    </label>
    <div className="name">{name}</div>
    <div className="status">{status}</div>
    <button type="submit" className="edit">Edit Profile </button>
  </form>


const Edit = ({ onSubmit, children, }) =>
  <form onSubmit={onSubmit}>
    <h3>My Account</h3>
    {children}
    <button type="submit" className="save">Save </button>
  </form>

export default function AccountPage() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(
    {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name: '',
      password: '',
      active: 'edit'
    }
  );

  const photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  const editName = e => {
    state.name = e.target.value;
    setState({
      ...state
    });
  }

  const changePassword = e => {
    state.password = e.target.value;
    setState({
      ...state,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    state.active = state.active === 'edit' ? 'profile' : 'edit';
    setState({
      ...state
    })
  }
const ChangeDarkMode =(e) =>{
  dispatch(setDarkMode(e.target.checked));
}
  const { imagePreviewUrl, name, password, active } = state;
  const open = useSelector(state => state.drawer.open);
  return (
    <Main open={open} className="account-page ">
      <DrawerHeader />
      <div className="account-container">
        {(active === 'edit') ? (
          <Edit onSubmit={handleSubmit}>
            <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
            <Name onChange={editName} value={name} />
            <Password onChange={changePassword} value={password} />
          </Edit>
        ) : (
          <Profile
            onSubmit={handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={"allow"} />)}
        <div className="setting">
          <Typography variant="h5">Setting</Typography>
          <FormControlLabel
            onChange={ChangeDarkMode}
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label="Dark Mode"
          />
        </div>


      </div>
    </Main>
  )
}


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));