import AddOns from "../Addons";
// import CompanyDetails from "../CompanyDetails/CompanyDetails";
import Info from "../Info";
import { Step } from "../MultiStepForm/types";
import CompanyDetails from "../Plan";
import Success from "../Sucess";
import Summary from "../Summary";

export const steps: Step[] = [
  {
    title: "YOUR INFO",
    Component: Info,
  },
  {
    title: "SELECT PLAN",
    Component: CompanyDetails,
  },
  {
    title: "ADD-ONS",
    Component: AddOns,
  },
  {
    title: "SUMMARY",
    Component: Summary,
  },
];

export const SuccessPage = Success;
