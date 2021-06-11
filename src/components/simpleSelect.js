import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
    
    let tutorials = ['useEffect', 'useRef'] //modify as tutorials are created
    const classes = useStyles();
    const [tutor, setTutor] = React.useState('');

 

    const handleChange = (event) => {
        console.log(event.target.value)
        setTutor(event.target.value);
        props.createTutorial(event.target.value);
    };

    return (
        <div>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tutor}
            onChange={handleChange}   
            >
                {tutorials.map(t => <MenuItem key={tutorials.findIndex(cur => cur == t)} value={t}>{t}</MenuItem>)}
            </Select>
        </FormControl>
        </div>
    );
}
