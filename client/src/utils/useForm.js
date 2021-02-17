import { useState, useEffect } from "react";


const useForm = (callback, validate,History,Location) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    const url="http://localhost:5000"+Location.pathname
   fetch(url,{
      method:"POST",

      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email:values.email,
        password: values.password
      })
    })
    .then(res =>res.json())
    .then(data=>{
      if(data){

        if(data.errors){
          console.log(data.errors.email);
          console.log(data.errors.password);
        }else{
          
          // or you can simply push to home directly
              if(Location.pathname=='/login'){
                History.push("/home");
              }else {
                History.push("/signup");
              }
          }
      }
    })
    .catch(err=>console.log(err))
    
  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
