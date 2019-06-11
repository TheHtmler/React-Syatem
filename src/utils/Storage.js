const Storage = window.sessionStorage

export default {
  getItem(key){
    try{
      return JSON.parse(Storage.getItem(key))
    } catch(err){
      return null
    }
  },
  setItem(key, val){
    Storage.setItem(key, JSON.stringify(val))
  },
  clear(){
    Storage.clear()
  },
  removeItem(key){
    Storage.removeItem(key)
  }
}
