import { ChangeEvent } from "react";
import { ComponentPropsType } from "../SignUp/types";

const CompanyDetails = (props: ComponentPropsType) => {
  const { data, setData, errors } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const _data = { ...data };
    _data[name] = value;
    setData(_data);
  };

  return (
    <form className="form info">
      <h2>Company info</h2>
      <p>Please provide your name, email, address, and phone number.</p>
      <div className="d-flex justify-content-between">
        <div className="input__group">
          <label htmlFor="companyname">Company Name</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="e.g. Stephen King"
            value={data.companyname || ""}
            onChange={handleChange}
            name="companyname"
            id="companyname"
          />
          {errors.companyname && <p className="error">{errors.companyname}</p>}
        </div>
      </div>
    </form>
  );
};

export default CompanyDetails;
