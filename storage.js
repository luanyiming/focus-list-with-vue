var key = 'list';
export default {
	save (items) {
	localStorage.setItem(key,JSON.stringify(items));
	},
	read(){
		return JSON.parse(localStorage.getItem(key));
	},
	currentTime(){
		var time = new Date(),
        	hour = time.getHours(),
            min = time.getMinutes(),
            time_str = hour + ':' + min;
		return time_str;
	}
}