import React from 'react'        
import { useFormik } from "formik";
import { addQuoteSchema } from "../Schemas/index";

const onSubmit = async (values, actions) => {
  //For triggering loading effect
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const AddQuote = () => {
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
          quote: "",
          saidBy: "",
          location: "",
          date: ""
        },
        validationSchema: addQuoteSchema,
        onSubmit
      })
      console.log(errors)
  return (
    <div className="secondary">
        <h4 className="info">So, you feel inspired huh? Someone told you something legendary today? Or you read something cool somewhere? What was it?</h4>
        <form onSubmit={handleSubmit} autoComplete="off">
            <label className='field-name' htmlFor="quote">What was it?</label>
            <input
                value={values.quote}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.quote && touched.quote ? "input-error" : ""}
                id="quote" type="text" placeholder="Enter the quote" />
            {errors.quote && touched.quote ? <p className="error">{errors.quote}</p> : ""}
            <label className='field-name' htmlFor="saidBy">Who said it?</label>
            <input
                value={values.saidBy}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.saidBy && touched.saidBy ? "input-error" : ""}
                id="saidBy" type="text" placeholder="Enter the source of the quote" />
            {errors.saidBy && touched.saidBy ? <p className="error">{errors.saidBy}</p> : ""}

            <label className='field-name' htmlFor="location">Where did they say it?</label>
            <input
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.location && touched.location ? "input-error" : ""}
                id="location" type="text" placeholder="Enter the location where the quote was said"/>
            {errors.location && touched.location ? <p className="error">{errors.location}</p> : ""}

            <label className='field-name' htmlFor="date">When did they say it?</label>
            <input
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.date && touched.date ? "input-error" : ""}
                id="date" type="date" placeholder="Enter the date that the quote was said" />
            {errors.date && touched.date ? <p className="error">{errors.date}</p> : ""}
        <button disabled={isSubmitting} type="submit">
        <svg className="plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
            Submit
        </button>
        </form>
    </div>
  )
}

export default AddQuote