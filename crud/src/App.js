import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const initialVaues={
    username:'',
    email:'',
    password:'',
  };

  const [formValues,setFormValues]=useState(initialVaues);

  const [formError,setFormError]=useState({});

  const [isSubmit,setIsSubmit]=useState(false);




  const handleChange=(e)=>{

    //console.log(e.target);

    const { name,value }=e.target

   // console.log(value,25);
   // console.log(name,26);

    setFormValues({...formValues,
      [name]:value})


     // console.log(formValues,10);

  }

  const handleSubmit=(e)=>{

    e.preventDefault();

    setFormError(validate(formValues));

    setIsSubmit(true);

  
  }

  const validate=(values)=>{

   // console.log(values,22);

    const error={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   if (!values.username) {

    error.username="username is required";
    
   }

   if (!values.email) {

    error.email="email is required";
  
   } else if(!regex.test(values.email)){

    error.email="this not a valid email"

   }

   if (!values.password) {

    error.password="password is required";
    
   } else if(values.password.length<4 ){


    error.password="password must have more than 4 charcters"

   } else if(values.password.length>10){


    error.password="password must less than 10 charcters"

   }

    return error;



  }

  //console.log(Object.keys(formValues),100);

  

  useEffect(()=>{

    console.log(formError);

    if(Object.keys(formError).length===0 && isSubmit){

      console.log(formValues);

      

    }

  },[formError])




  return (

    <div className='container'>
      <div>

      

      {(Object.keys(formError).length===0 && isSubmit) ?
       <div className='header'>
        Sign in successfully

      </div> :<pre className='header2'>{JSON.stringify(formValues,undefined,2)}</pre>
        }

   </div>
      
      
      <form className='fr' onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        
        <div className='uiform'>
          <div className='field'>

            <label>UserName:-</label>
            <input
             type='text'
             placeholder='username'
             name='username'
             value={formValues.username}
             onChange={handleChange}

              />

          </div>

          <p>{formError.username}</p>

          <div className='field'>
            
            <label>Email:-</label>
            <input
             type='email' 
             placeholder='Email' 
             name='email' 
             value={formValues.email}
             onChange={handleChange}
 />

          </div>
          <p>{formError.email}</p>

          <div className='field'>
            
            <label>Password:-</label>
            <input 
            type='password' 
            placeholder='Password' 
            name='password' 
            value={formValues.password}
            onChange={handleChange}
 />

          </div>

          <p>{formError.password}</p>

          

        </div>

        <button className='btn'>Submitt</button>
      </form>

    </div>
  )


}

export default App