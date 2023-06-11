import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
const Form = () => {


  const [form, setForm] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log("your form successfully submited");
  }
  return (
    <div>
      <form className={`${styles.formContainer} animate__animated animate__fadeInLeft`} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="نام و نام خانوادگی"
          name="name"
          id=""
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="شماره موبایل"
          name="number"
          id=""
        />
        <textarea
          style={{ height: 97 , resize:"none"}}
          onChange={handleChange}
          name="description"
          placeholder="توضیحات"
          id=""
          cols="30"
          rows="10"
          
        ></textarea>
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
};

export default Form;
