import {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
const GetstartedSection = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const validate = (formData) => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Saran is required";
    } else if (formData.name.length < 3) {
      errors.name = "Saran must be 3 or more characters";
    }
    if (!formData.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) {
      errors.message = "Saran is required";
    } else if (formData.message.length < 6) {
      errors.message = "Saran must be 6 or more characters";
    }
    return errors;
  }
  const handleChangeForm = (e) => {
    setErrors(validate(formData));
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }
  const handleSubmitData = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    const timestamp = new Date();
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: timestamp
    }
    if(data.name === ""){
      return false
    }
    if(data.message === ""){
      return false
    }
    if(data.message === ""){
      return false
    }
    
    const api_key = 'bfy8wta8lnqxg';
    axios.post(`https://sheetdb.io/api/v1/${api_key}`,{"data": data })
  .then((res) => {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(res)
      })
  .catch(function(error){
    Swal.fire({
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 1500
    })
  })
  }
    return (
      <section>
      <div className="container px-6 md:px-0 mx-auto md:w-1/3 my-12">
      <h2 className="font-normal text-secondary text-center text-4xl md:text-6xl">Let’s get <br /><span className="font-bold">Started</span></h2>
      <form onSubmit={handleSubmitData} className="flex flex-col items-center md:px-8 mt-8">
        <input onChange={handleChangeForm} value={formData.name} className="py-3 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" type="text" name="name" id="name" placeholder="Name" required/>
        {errors.name && <p className="w-full text-red-400 text-sm items-left text-left mb-3">{errors.name}</p>}
        <input onChange={handleChangeForm} value={formData.email} className="py-3 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" type="email" name="email" id="email" placeholder="Email" required/>
        {errors.email && <p className="w-full text-red-400 text-sm items-left text-left mb-3">{errors.email}</p>}
        <textarea onChange={handleChangeForm} value={formData.message} className="py-3 h-36 px-4 rounded-xl shadow-xl border border-gray-200 my-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full" name="message" id="message" placeholder="message" required/>
        {errors.message && <p className="w-full text-red-400 text-sm items-left text-left mb-3">{errors.message}</p>}
        <button className="py-3 px-12 font-semibold text-white bg-secondary hover:bg-secondary-darken focus:bg-secondary-darken rounded-xl shadow-xl my-4" type="submit">Submit</button>
      </form>
      </div>
    </section>
    )
}

export default GetstartedSection;