import * as Yup from "yup";

export default Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 characters required")
    .matches(/^[a-zA-Z\s_]*$/, "Invalid character in name")
    .required("This field is Required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 characters required")
    .matches(/^[a-zA-Z\s_]*$/, "Invalid character in name")
    .required("This field is Required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid mail address"
    )
    .required("This field is Required"),
  mobilenumber: Yup.string()
    .matches(
      /^\d+$/,
      "Invalid mobile number"
    )
    .required("This field is Required"),
  alertmobilernumber: Yup.string()
    .matches(
      /^(?:\+?(\d{1,3}))?[-.\s]?(\d{1,4})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/,
      "Invalid mobile number"
    )
    .notOneOf(
      [Yup.ref("mobilenumber"), null],
      "Mobile numbers must be different"
    )
    .required("This field is Required"),

});
