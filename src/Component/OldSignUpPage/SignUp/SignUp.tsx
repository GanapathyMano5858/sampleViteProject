import MultiStepForm from "../MultiStepForm/index.tsx";
import { steps, SuccessPage } from "./steps";
import { ObjectType } from "./types";
import "../SignUp/styles/index.css";

const initialValue = {
  plan: "arcade",
  billing: "Monthly",
  addons: [],
};

function SignUp() {
  const handleSubmit = (data: ObjectType) => {
    console.log(data);
  };
  return (
    <main className="signUpDiv">
      <h1 className="sr-only">Multi Step Form</h1>
      <MultiStepForm
        steps={steps}
        handleSubmit={handleSubmit}
        initialValue={initialValue}
        SuccessPage={SuccessPage}
      />
    </main>
  );
}

export default SignUp;
