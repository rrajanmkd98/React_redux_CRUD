import React from 'react';

class TableList extends React.Component{

    edit = (data,i) =>{
        this.props.edit(data,i);
    }

    delete = (data, i) =>{
        this.props.delete(data, i)
    }

    render(){
        return(
            <div>
                 <table id="students">
                    <thead>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </thead>
                    <tbody>
                        {this.props.data ? this.props.data.filter(List => List.firstName.includes(this.props.searchValue) || List.lastName.includes(this.props.searchValue)).map((item, i) => (
                            <tr key={i}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>
                                    <button onClick={ ()=>{this.edit(item, i)}}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={ ()=>{this.delete(item, i)}}>Delete</button>
                                </td>
                            </tr>)
                        ): "No record"}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableList;