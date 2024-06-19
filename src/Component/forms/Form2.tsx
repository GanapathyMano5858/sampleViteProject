import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import "./CSS/Form.css"
import { IoIosArrowDown } from "react-icons/io";


const Form2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-auto d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">
        Company Info
      </h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your Company Name, Company Type, and Address
      </p>
      {/* <label className="text-primary font-weight-semibold" htmlFor="email">
        Email Address
      </label>
      <Field
        type="email"
        placeholder=" e.g. XYZ Street, Avenue Center"
        id="email"
        name="email"
        className="form-control border border-secondary rounded-3 p-3 w-100"
      /> */}
      {/* <span className="text-danger fs-small">
        <ErrorMessage name="email" />
      </span> */}
      <label className="text-primary font-weight-semibold" htmlFor="companytype">
        Company Type
      </label>
      <div className="select-wrapper w-75">
        <Field
          as="select"
          id="companytype"
          name="companytype"
          className={`form-control border border-secondary rounded-3 p-3 w-100 ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          <option disabled value="" label="Select company type" />
          <option value="Public Limited Company (PLC)" label="Public Limited Company (PLC)" />
          <option value="Private Limited Company (PVT)" label="Private Limited Company (PVT)" />
          <option value="One Person Company (OPC)" label="One Person Company (OPC)" />
        </Field>
        <IoIosArrowDown className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`} />
      </div>
      <span className="text-danger fs-small">
        <ErrorMessage name="companytype" />
      </span>
    </div>
  );
};

export default Form2;

