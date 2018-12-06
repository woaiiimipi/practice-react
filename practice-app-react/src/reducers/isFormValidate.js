import "../actions";
const SHOULD_CHECK_NUMBER = 4;
let validateItemNumber = 0;
const isFormValidate = (state = true, action) => {
  switch (action.type) {
    case "CHANGE_VALID_NUMBER": {
      if (action.isValid) {
        validateItemNumber++;
      } else {
        validateItemNumber--;
      }
      console.log("validateItemNumber === SHOULD_CHECK_NUMBER"+ (validateItemNumber === SHOULD_CHECK_NUMBER));
      return validateItemNumber !== SHOULD_CHECK_NUMBER;
    }
    default: {
      return state;
    }
  }
};
export default isFormValidate;
