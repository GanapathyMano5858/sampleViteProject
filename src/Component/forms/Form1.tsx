import { ErrorMessage, Field } from 'formik';

const Form1 = () => {
  return (
    <div className="overflow-auto d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">
        Personal Info
      </h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your name, address, and phone
      </p>
      <label className="text-primary font-weight-semibold" htmlFor="name">
        Name
      </label>
      <Field
        type="text"
        placeholder="e.g. Roy Joseph"
        id="name"
        name="name"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="name" />
      </span>
      <label className="text-primary font-weight-semibold" htmlFor="address">
        Address
      </label>
      <Field
        as="textarea"
        type="text"
        placeholder="e.g. XYZ Street, Avenue Center"
        id="address"
        name="address"
        className="form-control border border-secondary rounded-3 p-3 w-100 min-height-[50px]"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="address" />
      </span>
      <label className="text-primary font-weight-semibold" htmlFor="phone">
        Phone Number
      </label>
      <Field
        type="text"
        placeholder="e.g. 9447077177"
        id="phone"
        name="number"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="number" />
      </span>
    </div>
  );
};

export default Form1;
