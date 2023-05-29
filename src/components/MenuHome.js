import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import UploadIcon from '@mui/icons-material/Upload';
import { Logout, Profile } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PeopleIcon from '@mui/icons-material/People';

import styles from './CustomizedMenus.module.css';

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false); // State for the dialog
  const [selectedOption, setSelectedOption] = React.useState(''); // State for selected option
  const [selectedFile, setSelectedFile] = React.useState(null); // State for selected file

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateProfile = () => {
    setOpenDialog(true); // Open the dialog
    setAnchorEl(null); // Close the menu
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set selected option
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Set selected file
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    if (selectedFile) {
      // Perform upload operation using the selected file
      console.log('Uploading file:', selectedFile);
      // Reset the selected file state
      setSelectedFile(null);
    }
  };

  const UploadButton = () => (
    <>
      <input
        id="upload-button"
        type="file"
        accept=".csv"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="upload-button" className={styles.uploadButtonLabel}>
        <Button
          component="span"
          startIcon={<UploadIcon />}
          className={styles.uploadButton}
        >
          Bulk Profile
        </Button>
      </label>
    </>
  );

  return (
    <div className={styles.menuContainer}>
      <div className={styles.uploadIcon}>
        <Button onClick={handleCreateProfile}> Create Profile </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          id="demo-customized-button"
          aria-controls={anchorEl ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          startIcon={<Person2OutlinedIcon />}
          className={styles.button}
        >
          Himanshu Singh
        </Button>
      </div>
      <Menu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: styles.menuPaper }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          className={styles.menuItem}
        >
          <PersonIcon className={styles.menuIcon} />
          Profile
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          disableRipple
          className={styles.menuItem}
        >
          <SettingsIcon className={styles.menuIcon} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          disableRipple
          className={styles.menuItem}
        >
          <Logout className={styles.menuIcon} />
          Logout
        </MenuItem>
      </Menu>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Create Profile</DialogTitle>
        <DialogContent>
          {/* Dialog content */}
          <Button
            onClick={() => handleOptionClick('Single')}
            startIcon={<PersonIcon />}
            disabled={selectedOption === 'Single'}
          >
            Single Profile
          </Button>
          <UploadButton />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleUpload} disabled={!selectedFile}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
