var key = 'list';
export default {
  save (items) {
    localStorage.setItem(key,JSON.stringify(items));
  },
  read(){
  	return JSON.parse(localStorage.getItem(key));
  }
}