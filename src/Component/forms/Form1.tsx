import { ErrorMessage, Field } from "formik";

const Form1 = () => {
  return (
    <div className="d-flex flex-column gap-2 w-100 align-items-start font-mono text-left">
      <h2 className="text-success font-weight-bold fs-3 mb-0">Personal Info</h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your name, address, and phone
      </p>
      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-lg-2 d-flex flex-column">
          <label
            className="text-success font-weight-semibold pb-2"
            htmlFor="firstname"
          >
            First Name
          </label>
          <Field
            type="text"
            placeholder="e.g. Roy Joseph"
            id="firstname"
            name="firstname"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="firstname" />
          </div>
        </div>
        <div className="col-12 col-lg-6 ps-lg-2 d-flex flex-column">
          <label
            className="text-success font-weight-semibold pb-2"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <Field
            type="text"
            placeholder="e.g. Roy Joseph"
            id="lastname"
            name="lastname"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="lastname" />
          </div>
        </div>
      </div>

      <div className="col-12 ">
        <label
          className="text-success font-weight-semibold pb-2"
          htmlFor="emailid"
        >
          Email ID
        </label>
        <Field
          // as="textarea"
          type="text"
          placeholder="e.g. royjoseph@gmail.com"
          id="emailid"
          name="emailid"
          className="form-control border border-secondary rounded-3 p-3 w-100 min-height-[50px]"
        />
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="emailid" />
        </div>
      </div>

      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-lg-2 d-flex flex-column">
          <label
            className="text-success font-weight-semibold pb-2"
            htmlFor="mobilenumber"
          >
            Mobile Number
          </label>
          <Field
            type="text"
            placeholder="e.g. 9447077177"
            id="mobilenumber"
            name="mobilenumber"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="mobilenumber" />
          </div>
        </div>
        <div className="col-12 col-lg-6 ps-lg-2 d-flex flex-column">
          <label
            className="text-success font-weight-semibold pb-2"
            htmlFor="alternatemobilenumber"
          >
            Alternate Mobile Number
          </label>
          <Field
            type="text"
            placeholder="e.g. 9447077177"
            id="alternatemobilenumber"
            name="alternatemobilenumber"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="alternatemobilenumber" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
