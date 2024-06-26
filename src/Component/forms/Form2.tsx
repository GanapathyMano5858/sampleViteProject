import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import "./CSS/Form.css";
import { IoIosArrowDown } from "react-icons/io";

const Form2 = () => {
  const [isCompanyTypeOpen, setIsCompanyTypeOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isContryOpen, setIsContryOpen] = useState(false);

  return (
    <div className="d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">Company Info</h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your Company Name, Company Type, and Address
      </p>
      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="companyname"
          >
            Company Name
          </label>
          <Field
            type="text"
            placeholder=" e.g. XYZ Pvt Ltd"
            id="companyname"
            name="companyname"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="companyname" />
          </div>
        </div>
        <div className="col-12 col-lg-6 ps-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="companytype"
          >
            Company Type
          </label>
          <div className="select-wrapper">
            <Field
              as="select"
              id="companytype"
              name="companytype"
              className={`form-control border border-secondary rounded-3 p-3 w-100 ${
                isCompanyTypeOpen ? "open" : ""
              }`}
              onClick={() => setIsCompanyTypeOpen(!isCompanyTypeOpen)}
              onBlur={() => setIsCompanyTypeOpen(false)}
            >
              <option disabled selected label="Select company type" />
              <option
                value="Public Limited Company (PLC)"
                label="Public Limited Company (PLC)"
              />
              <option
                value="Private Limited Company (PVT)"
                label="Private Limited Company (PVT)"
              />
              <option
                value="One Person Company (OPC)"
                label="One Person Company (OPC)"
              />
            </Field>
            <IoIosArrowDown
              className={`dropdown-arrow ${isCompanyTypeOpen ? "rotate" : ""}`}
            />
          </div>
          <div className="text-danger fs-small">
            <ErrorMessage name="companytype" />
          </div>
        </div>
      </div>

      <label className="text-Marine_blue font-semibold" htmlFor="address">
        Address
      </label>
      <Field
        as="textarea"
        type="text"
        placeholder=" e.g. XYZ Street, Avenue Center"
        id="address"
        name="address"
        // row="3"
        className="formControlTextArea form-control border border-secondary rounded-3 p-3 w-100"
      />
      <div className="text-danger fs-small">
        <ErrorMessage name="address" />
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-2">
          <label className="text-primary font-weight-semibold" htmlFor="city">
            City
          </label>
          <div className="select-wrapper">
            <Field
              as="select"
              id="city"
              name="city"
              className={`form-control border border-secondary rounded-3 p-3 w-100 ${
                isCityOpen ? "open" : ""
              }`}
              onClick={() => setIsCityOpen(!isCityOpen)}
              onBlur={() => setIsCityOpen(false)}
            >
              <option disabled selected label="Select City" />
              <option value="Tamil Nadu" label="Tamil Nadu" />
              <option value="Kerala" label="Kerala" />
              <option value="Telangana" label="Telangana" />
              <option value="Maharashtra" label="Maharashtra" />
              <option value="Punjab" label="Punjab" />
              <option value="Andhra Pradesh" label="Andhra Pradesh" />
            </Field>
            <IoIosArrowDown
              className={`dropdown-arrow ${isCityOpen ? "rotate" : ""}`}
            />
          </div>
          <div className="text-danger fs-small">
            <ErrorMessage name="state" />
          </div>
        </div>
        <div className="col-12 col-lg-6 ps-2">
          <label className="text-primary font-weight-semibold" htmlFor="state">
            State
          </label>
          <div className="select-wrapper">
            <Field
              as="select"
              id="state"
              name="state"
              className={`form-control border border-secondary rounded-3 p-3 w-100 ${
                isStateOpen ? "open" : ""
              }`}
              onClick={() => setIsStateOpen(!isStateOpen)}
              onBlur={() => setIsStateOpen(false)}
            >
              <option disabled selected label="Select State" />
              <option value="Tamil Nadu" label="Tamil Nadu" />
              <option value="Kerala" label="Kerala" />
              <option value="Telangana" label="Telangana" />
              <option value="Maharashtra" label="Maharashtra" />
              <option value="Punjab" label="Punjab" />
              <option value="Andhra Pradesh" label="Andhra Pradesh" />
            </Field>
            <IoIosArrowDown
              className={`dropdown-arrow ${isStateOpen ? "rotate" : ""}`}
            />
          </div>
          <div className="text-danger fs-small">
            <ErrorMessage name="state" />
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="country"
          >
            Country
          </label>
          <div className="select-wrapper">
            <Field
              as="select"
              id="country"
              name="country"
              className={`form-control border border-secondary rounded-3 p-3 w-100 ${
                isContryOpen ? "open" : ""
              }`}
              onClick={() => setIsContryOpen(!isContryOpen)}
              onBlur={() => setIsContryOpen(false)}
            >
              <option disabled selected label="Select Country" />
              <option value="Tamil Nadu" label="Tamil Nadu" />
              <option value="Kerala" label="Kerala" />
              <option value="Telangana" label="Telangana" />
              <option value="Maharashtra" label="Maharashtra" />
              <option value="Punjab" label="Punjab" />
              <option value="Andhra Pradesh" label="Andhra Pradesh" />
            </Field>
            <IoIosArrowDown
              className={`dropdown-arrow ${isContryOpen ? "rotate" : ""}`}
            />
          </div>
          <div className="text-danger fs-small">
            <ErrorMessage name="country" />
          </div>
        </div>
        <div className="col-12 col-lg-6 ps-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <Field
            type="text"
            placeholder=" e.g. 123456"
            id="pincode"
            name="pincode"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small">
            <ErrorMessage name="pincode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
