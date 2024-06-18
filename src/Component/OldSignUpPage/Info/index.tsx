import { ChangeEvent } from "react";
import { ComponentPropsType } from "../SignUp/types";

const Info = (props: ComponentPropsType) => {
  const { data, setData, errors } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const _data = { ...data };
    _data[name] = value;
    setData(_data);
  };

  return (
    <form className="form info">
      <h2>Personal info</h2>
      <p>Please provide your name, email, address, and phone number.</p>
      <div className="d-flex justify-content-between">
        <div className="input__group">
          <label htmlFor="firstname">First Name</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="e.g. Stephen King"
            value={data.firstname || ""}
            onChange={handleChange}
            name="firstname"
            id="firstname"
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className="input__group">
          <label htmlFor="lastname">Last Name</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="e.g. Stephen King"
            value={data.lastname || ""}
            onChange={handleChange}
            name="lastname"
            id="lastname"
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
      </div>
      <div className="input__group w-100">
        <label htmlFor="email">Email Address</label>
        <input
          autoComplete="off"
          type="text"
          placeholder="e.g. Stephenking@lorem.com"
          value={data.email || ""}
          onChange={handleChange}
          name="email"
          id="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="d-flex justify-content-between">
        <div className="input__group">
          <label htmlFor="mobilenumber">Mobile Number</label>
          <input
            autoComplete="off"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={data.mobilenumber || ""}
            onChange={handleChange}
            name="mobilenumber"
            id="mobilenumber"
          />
          {errors.mobilenumber && (
            <p className="error">{errors.mobilenumber}</p>
          )}
        </div>
        <div className="input__group">
          <label htmlFor="alertmobilernumber">Alert Mobile Number</label>
          <input
            autoComplete="off"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={data.alertmobilernumber || ""}
            onChange={handleChange}
            name="alertmobilernumber"
            id="alertmobilernumber"
          />
          {errors.alertmobilernumber && (
            <p className="error">{errors.alertmobilernumber}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Info;
