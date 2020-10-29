export const ADD_CONTENT = 'ADD_TODO';
export const READ_CONTENT = 'READ_CONTENT';
export const EDIT_CONTENT = "EDIT_CONTENT";
export const DELETE_CONTENT = "DELETE_CONTENT";

export const addContent = (inputData, status, key) =>  {
    return function(dispatch, getState) {
        let oldData =  getState().data ? getState().data: [];
        let newArr = [];

        if(oldData && status === "add"){
            newArr = oldData.concat(inputData);
        }
        else if(!oldData && status ==="add"){
            newArr.push(inputData);
        }
        else if(status === "edit"){
            oldData.splice(key,1);
            oldData.push(inputData);
        }
        newArr.map((item,i) =>{
            item.id = i + 1;
            return newArr;
        })
        if(status === "add"){
            dispatch({ type: ADD_CONTENT , newArr});
        }
        else{
            oldData.map((item,i) =>{
                item.id = i + 1;
                return oldData;
            })
            dispatch({ type: EDIT_CONTENT , oldData});
        }
    }
}

export const deleteAction = (data, i) =>{
    return function(dispatch, getState){
        let getData = getState().data ? getState().data : [];
        getData.splice(i,1);
        dispatch({type: "DELETE_CONTENT", getData, i})
    }
}

export const readContent = () => {
    return function(dispatch, getState) {
        let readData = getState().data ? getState().data : [];
        dispatch({ type: READ_CONTENT, readData})
    }
}
