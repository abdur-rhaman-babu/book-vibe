import { toast } from "react-toastify";

const getListFromLS = () =>{
    const storedListStr = localStorage.getItem('list-item')
    if (storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return []
    }
}

const addListedDataToLS = (id) =>{
    const storedList = getListFromLS()
    if(storedList.includes(id)){
        toast.error(' Already Added');
    }else{
        storedList.push(id)
        const listStringfy = JSON.stringify(storedList)
        localStorage.setItem('list-item',listStringfy)
        toast.success("Added read listed");
    }
}

const getWishedListFromLS = () =>{
    const storedWishedList = localStorage.getItem('wish-list')
    if(storedWishedList){
        const wishedList = JSON.parse(storedWishedList)
        return wishedList;
    }else{
        return []
    }
}

const addWishedListToLS = (id) =>{
    const storedWishedList = getWishedListFromLS()
    if(storedWishedList.includes(id)){
        toast.error("Already Added");
    }else{
        storedWishedList.push(id)
        const listStringfy = JSON.stringify(storedWishedList)
        localStorage.setItem('wish-list', listStringfy)
        toast.success("Added wishes list");
    }
}

export {addListedDataToLS, addWishedListToLS, getListFromLS, getWishedListFromLS} 