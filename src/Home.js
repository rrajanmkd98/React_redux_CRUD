import React from 'react'
import TextBox from './components/TextBox'
import Button from './components/Button'
import TableList from "./components/TableList"
import {connect} from 'react-redux'
import Label from './components/Label'
import * as detailsAction  from './actions/DetailsAction'
import {bindActionCreators} from 'redux'
import "./App.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      status: "add",
      key: '',
      aa: '',
      search: ""
    }
  }

  onChange = event => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  
  componentDidMount(){
    document.title= "React Test App"
  }

  onClickingRead = () => {
    const result = this.props.readContent();
  }

  onClickingAdd = () => {
    let inputData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    if (this.state.firstName.length === 0 && this.state.lastName.length === 0 ) {
      alert("Enter first name and last name")
    }else if(this.state.status === "add") {
      this.props.addContent(inputData, this.state.status);
    }else{
      this.props.addContent(inputData, this.state.status, this.state.key);
    }
    this.setState({
      firstName: "",
      lastName: "",
      status: "add"
    });
  }

  edit = (data, i) =>{
    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
      status: "edit",
      key: i
    })
  }

  delete = (data, i) =>{
    this.setState({
      aa: "true"+ i
    })
    this.props.deleteAction(data, i)
  }

  onSearch = (event) =>{
    this.setState({
      search: event.target.value
    })
  }
  render() {
    const {firstName, lastName, search} = this.state;
    return(
      <div>
          <div className="App">
              <Label name={"firstName"} label={"FirstName"}/>
              <TextBox id={"firstName"} value={firstName} type={"text"} placeholder={"Enter the firstName"} onChange={this.onChange}/><br></br>

              <Label name={"lasttName"} label={"LastName"}/>
              <TextBox id={"lastName"} value={lastName} type={"text"} placeholder={"Enter the lastName"} onChange={this.onChange}/><br></br>
              
              <Button type ="submit" name="Add" onClick={this.onClickingAdd} />
          </div>
          <div className="table_list">
            Search 
          <TextBox id={"search"} value={search} type={"text"} placeholder={"Enter the firstname or lastname"} onChange={this.onSearch}/><br></br>
            <TableList 
              aa= {this.props.aa} 
              value= {this.props.sample} 
              data={this.props.data} 
              edit={this.edit} 
              searchValue= {this.state.search}
              delete={this.delete}/>
            </div>
        </div>
    )
  }
}

//state to be converted into props
const mapstatetoprops = (state) => {
  const { data } = state
  return {
    data,
  }
}

//actions to be converted into props
const mapdispatchtoprops = (dispatch) => {
  return bindActionCreators(Object.assign({}, detailsAction), dispatch)
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Home)