import { ErrorMessage, Field } from 'formik';

const Form2 = () => {
  return (
    <div className="overflow-auto d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">
        Account Info
      </h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your email, username, and password
      </p>
      <label className="text-primary font-weight-semibold" htmlFor="email">
        Email Address
      </label>
      <Field
        type="email"
        placeholder="e.g. royjoseph@gmail.com"
        id="email"
        name="email"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="email" />
      </span>
      <label className="text-primary font-weight-semibold" htmlFor="user_name">
        User Name
      </label>
      <Field
        type="text"
        id="user_name"
        placeholder="e.g. roy1234"
        name="user_name"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="user_name" />
      </span>
      <label className="text-primary font-weight-semibold" htmlFor="password">
        Password
      </label>
      <Field
        type="password"
        id="password"
        placeholder="password..."
        name="password"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      />
      <span className="text-danger fs-small">
        <ErrorMessage name="password" />
      </span>
    </div>
  );
};

export default Form2;
