import DesktopImage from "../../../Assets/bg-sidebar-desktop.svg";
import MobileImage from "../../../Assets/bg-sidebar-mobile.svg";

type dataType = {
  currentIndex: number;
};

const StepNav = ({ currentIndex }: dataType) => {
  const steps: string[] = [
    "Your Info",
    "Company Info",
    "Bank Info",
    "Company ID Proof",
  ];

  return (
    <div className="position-relative">
      <img
        src={DesktopImage}
        alt="Background Desktop"
        className="position-absolute w-100 rounded-lg object-cover d-none d-lg-block"
      />
      <img
        src={MobileImage}
        alt="Background Mobile"
        className="d-block d-lg-none w-100 object-cover h-25 position-absolute"
      />
      <div className="z-index-50 position-relative p-4  d-flex flex-lg-column gap-4 justify-content-center flex-row">
        {steps.map((item, index) => (
          <div key={item} className="d-flex align-items-center gap-3">
            <div
              className={`d-flex justify-content-center align-items-center border border-light ${
                currentIndex === index ? "bg-light text-dark" : "text-secondary"
              } rounded-circle font-weight-bold text-light`}
              style={{ width: "2.75rem", height: "2.75rem" }}
            >
              {index + 1}
            </div>
            <div className="d-none d-lg-block">
              <h5 className="text-light font-weight-medium text-small">
                STEP {index + 1}
              </h5>
              <h6 className="text-base font-weight-bold text-white">
                {item.toUpperCase()}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNav;
