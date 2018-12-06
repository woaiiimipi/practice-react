// export const checkInput = (name, valid, value) => ({
//   type: "CHECK_INPUT",
//   name,
//   valid,
//   value
// });
// export const submitSearch = searchKey => ({
//   type: "SUBMIT_SEARCH",
//   searchKey
// });
// export const submitPersonInfo = searchKey => ({
//   type: "SUBMIT_PERSONINFO",
//   searchKey
// });
export const changeValidNumber = isValid => ({
  type: "CHANGE_VALID_NUMBER",
  isValid
});

export const addUsername = username => ({
  type: "ADD_USERNAME",
  username
});

export const addPassword = password => ({
  type: "ADD_PASSWORD",
  password
});

export const addEmail = email => ({
  type: "ADD_EMAIL",
  email
});
export const saveToCookie = () => ({
  type: "SAVE_TO_COOKIE"
});

export const saveToLocalStorage = ()=>({
    type:"SAVE_TO_LOCAL_STORAGE",
})