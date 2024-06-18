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
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid mail address"
    )
    .required("This field is Required"),
  mobilenumber: Yup.string()
    .min(3, "Minimum 3 characters required")
    .matches(/^[+0-9\s]*$/, "Invalid character in Mobile number")
    .required("This field is Required"),
  alertmobilernumber: Yup.string()
    .min(3, "Minimum 3 characters required")
    .matches(/^[+0-9\s]*$/, "Invalid character in Mobile number")
    .notOneOf(
      [Yup.ref("mobilenumber"), null],
      "Mobile numbers must be different"
    )
    .required("This field is Required"),
});
