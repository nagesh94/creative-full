const fields = {
    test_name: "",
    test_type: "",
    tester_email_id: "",
    tester_mobile_number: "",
    tester_alternative_number: "",
  };
  
 export  const checkFields = (data) => {
    const errors = {};
    for (let key in fields) {
      if (!data[key]) {
        errors[key] = "This field is required";
      }
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(data.tester_email_id)){
      errors.tester_email_id="not a valid email"
    }

    if(data.tester_mobile_number.length!=10){
      errors.tester_mobile_number = "number should be  10 characters"
    }
    if(data.tester_alternative_number.length!=10){
      errors.tester_alternative_number = "number should be  10 characters"
    }
    
    if(data.tester_mobile_number==data.tester_alternative_number){
      errors.tester_alternative_number="alternative number and mobile number should be different"
    }
  
    return Object.keys(errors).length !== 0 ? errors : false;
  };
  
  export { fields };
  