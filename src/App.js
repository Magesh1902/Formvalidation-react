import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";

function App() {
  let formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      Country: "",
      City: "",
      State: "",
      Message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.Name) {
        errors.Name = "Name cannot be blank";
      }
      if (!values.Email) {
        errors.Email = 'Enter the email address';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address';
      }
      if (!values.Mobile) {
        errors.Mobile = 'Please enter the number';
      }
      if (!values.Country) {
        errors.Country = "Enter the country name";
      }
      if (!values.City) {
        errors.City = "Enter the city";
      }
      if (!values.State) {
        errors.State = "Enter the state name";
      }
      if (!values.Message) {
        errors.Message = "Please write the message";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (

    <div>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form class="contact-form" onSubmit={formik.handleSubmit}>
          <h5 class="title">Contact us</h5>
          <p class="description"> Please fill the form</p>
          <div className="mb-2">
            <input
              type={'text'}
              name="Name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.Name}
              className="form-control form-control-sm rounded border-white  form-input"
            />
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.Name}</span>
          </div>
          <div className="mb-2">
            <input
              type={'Email'}
              name="Email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}
              className="form-control form-control-sm rounded border-white form-input"
            />
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.Email}</span>
          </div>
          <div className="mb-2">
            <input
              type={'number'}
              name="Mobile"
              placeholder="Mobile"
              onChange={formik.handleChange}
              value={formik.values.Mobile}
              className="form-control form-control-sm rounded border-white form-input"
            />
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.Mobile}</span>
          </div>
          <div className="mb-2">
            <input
              type={'text'}
              name="Country"
              placeholder="Country"
              onChange={formik.handleChange}
              value={formik.values.Country}
              className="form-control form-control-sm rounded border-white form-input"
            />
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.Country}</span>
          </div>
          <div className="mb-2">
            <input
              type={'text'}
              name="City"
              placeholder="City"
              onChange={formik.handleChange}
              value={formik.values.City}
              className="form-control form-control-sm rounded border-white form-input"
            />
              <span style={{color : "red",fontSize:"13px"}}>{formik.errors.City}</span>
          </div>
          <div className="mb-2">
            <input
              type={'text'}
              name="State"
              placeholder="State"
              onChange={formik.handleChange}
              value={formik.values.State}
              className="form-control form-control-sm rounded border-white form-input"
            />
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.State}</span>
          </div>
          <div>
            <textarea
              type={'text'}
              class="form-control form-control-sm rounded border-white form-text-area"
              rows="5"
              cols="30"
              name="Message"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.Message}
            ></textarea>
            <span style={{color : "red",fontSize:"13px"}}>{formik.errors.Message}</span>
          </div>
          <div class="submit-button-wrapper">
            <input type={"submit"} className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
