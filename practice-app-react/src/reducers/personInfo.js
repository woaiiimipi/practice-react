import { getCookie, setCookie } from "../utils/CookieUtils";

// let verson = 1;
// let request = window.indexedDB.open("db_personInfo", verson++);

// request.onsuccess = event => {
//   let db_personInfo = event.target.result;
//   console.log("成功打开数据库！");
// };
// let requestNew = window.indexedDB.open("db_personInfo", verson++);

// requestNew.onupgradeneeded = event => {
//   let db_personInfo = event.target.result;
//   let objectStore = db_personInfo.createObjectStore("tbl_personInfo",{keyPath:'id',autoIncrement:true});
// };

// requestNew.onsuccess = e => {
//   let tmpRequest = e.target.result
//     .transaction(["tbl_personInfo"], "readwrite")
//     .objectStore("tbl_personInfo")
//     .add({ username: "admin", password: "123456", email: "279544916@qq.com" });
//   console.log("添加数据成功");

//   // let oS = e.target.result;
//   // let requestQuery = oS.transaction("tbl_personInfo", "readwrite").objectStore('tbl_personInfo').get(1);
//   // requestQuery.onsuccess = (event)=>{
//   //   console.log(requestQuery.result.username);
//   //   console.log(requestQuery.result.password);
//   //   console.log(requestQuery.result.email);

//   // };;

// };

const personInfo = (
	state = {
		username: "",
		password: "",
		email: ""
	},
	action
) => {
	switch (action.type) {
		case "ADD_USERNAME": {
			console.log("ADD_USERNAME");
			let info = { ...state };
			info.username = action.username;
			return info;
		}
		case "ADD_PASSWORD": {
			console.log("ADD_PASSWORD");

			let info = { ...state };
			info.password = action.password;
			return info;
		}
		case "ADD_EMAIL": {
			console.log("ADD_EMAIL");
			let info = { ...state };
			info.email = action.email;
			return info;
		}
		case "READ_PERSONINFO": {
			return state;
		}
		case "SAVE_TO_COOKIE": {
      console.log("SAVE_TO_COOKIE");
      
			let localStorage = window.localStorage;
			localStorage.setItem("username", state.username);
			localStorage.setItem("password", state.password);
      localStorage.setItem("email", state.email);
      
			return state;
		}
		default: {
			return state;
		}
	}
};
// let setCookie = (name, value, expiresDays) => {
//   let date = new Date();
//   date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = name + "=" + value + ";" + expires;
//   console.log(name + "=" + value + ";" + expires);
//   console.log(getCookie(name));
// };
export default personInfo;
