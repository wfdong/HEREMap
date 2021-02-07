import * as React from 'react';
import {DisplayMapClass} from './DisplayMapClass';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

 const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  class InputAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', valuetoSubmit: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        //this.props.settingaddress(this.state.value);
        this.setState({valuetoSubmit: this.state.value});
      }

      render() {
        return (
        <div>
          <Paper component="form" className={useStyles.root} onSubmit={this.handleSubmit}>
              <IconButton className={useStyles.iconButton} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                  className={useStyles.input}
                  placeholder="Search HERE Maps"
                  inputProps={{ 'aria-label': 'search HERE maps' }}
                  value={this.state.value} onChange={this.handleChange}
              />
              <IconButton type="submit" className={useStyles.iconButton} aria-label="search">
                  <SearchIcon />
              </IconButton>
              <IconButton color="primary" className={useStyles.iconButton} aria-label="directions">
                  <DirectionsIcon />
              </IconButton>
          </Paper>
          <DisplayMapClass key={this.state.valuetoSubmit} address={this.state.valuetoSubmit}/>
        </div>
        );
      }
  }

export default InputAddress;