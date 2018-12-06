export function getCookie(name) {
  let strCookie = document.cookie;
  let arrCookie = strCookie.split("; ");
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split("=");
    if (arr[0] === name) {
      console.log(arr[1]);
      return arr[1];
    }
  }
  return "";
}
export function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + ";expires=" + exp.toUTCString();
}
