import * as React from 'react';
import {DisplayMapClass} from './DisplayMapClass';

  /*
  class InputAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Flinders Street Railway Station'};
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.props.settingaddress(this.props.myDataProp);
    }
   
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      var value = this.state.value;
      return <div>
              <Content myDataProp = {value} 
                updateStateProp = {this.handleChange}></Content>
             </div>;
    }
  }
  */

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
        //alert('提交的名字: ' + this.state.value);
        
        event.preventDefault();
        //this.props.settingaddress(this.state.value);
        this.setState({valuetoSubmit: this.state.value});
      }
    
      render() {
        return (
            <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Please input the address you want search:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="submit" />
          </form>
          <DisplayMapClass key={this.state.valuetoSubmit} address={this.state.valuetoSubmit}/>
          </div>
        );
      }
  }

export default InputAddress;