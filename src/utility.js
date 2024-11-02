const getListFromLS = () =>{
    const storedListStr = localStorage.getItem('list-item')
    if (storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return []
    }
}

const addDataToLS = (id) =>{
    const storedList = getListFromLS()
    if(storedList.includes(id)){
      alert('this data already exsist')
    }else{
        storedList.push(id)
        const listStringfy = JSON.stringify(storedList)
        localStorage.setItem('list-item',listStringfy)
    }
}

export {addDataToLS} 