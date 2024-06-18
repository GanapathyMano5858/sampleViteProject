import { useState } from "react";
import Form2 from "../forms/Form2";
import NextButton from "./components/NextButton";
import StepNav from "./components/StepNav";
import { Formik, Form } from "formik";
import Form1 from "../forms/Form1";
import Form3 from "../forms/Form3";
import Form4 from "../forms/Form4";
import BackButton from "./components/BackButton";
import SuccessPage from "../forms/SuccessPage";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { formValidationSchema } from "./Types";
import "./SignUp.css";

function SignUp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [success, setSuccess] = useState(false);

  const next = () => {
    if (currentIndex === 3) return;
    setCurrentIndex(currentIndex + 1);
  };

  const back = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const setValidationSchema = () => {
    switch (currentIndex) {
      case 0:
        return toFormikValidationSchema(formValidationSchema.shape.form1Schema);
      case 1:
        return toFormikValidationSchema(formValidationSchema.shape.form2Schema);
      case 2:
        return toFormikValidationSchema(formValidationSchema.shape.form3Schema);
      case 3:
        return toFormikValidationSchema(formValidationSchema.shape.form4Schema);
      default:
        return {};
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-0 py-lg-5">
      <div className="bg-light d-flex justify-content-between flex-column flex-md-row max-lg-flex-column signUpForm p-4 rounded-lg">
        <StepNav currentIndex={currentIndex} />
        <div className="flex-2 z-20 singUpFormLeft h-100 p-8 bg-transparent max-lg-max-w-800 max-lg-self-center">
          <div className="max-lg-bg-white w-100 h-100 rounded-2xl">
            {success ? (
              <SuccessPage />
            ) : (
              <Formik
                initialValues={{
                  name: "",
                  address: "",
                  email: "",
                  number: "",
                  user_name: "",
                  password: "",
                  plan: "Arcade",
                  yearly: false,
                  addOn: [],
                }}
                validationSchema={setValidationSchema()}
                onSubmit={(values) => {
                  next();
                  if (currentIndex === 3) {
                    console.log(values);
                    setSuccess(true);
                  }
                }}
              >
                {({ values }) => (
                  <Form className="d-flex flex-column h-100 w-100 font-mono pl-10 pt-10 pr-12 max-lg-p-4">
                    {currentIndex === 0 ? (
                      <Form1 />
                    ) : currentIndex === 1 ? (
                      <Form2 />
                    ) : currentIndex === 2 ? (
                      <Form3 values={values} />
                    ) : (
                      <Form4 values={values} />
                    )}
                    <div className="w-100 d-flex flex-row justify-content-between">
                      <BackButton index={currentIndex} back={back} />
                      <NextButton index={currentIndex} />
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
