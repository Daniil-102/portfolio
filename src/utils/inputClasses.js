import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& label': {
      color: 'gray',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'gray',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'gray',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    
  }

});