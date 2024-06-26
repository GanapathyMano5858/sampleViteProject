type dataType = {
  index: number;
  back(): void;
};

const BackButton = ({ index, back }: dataType) => {
  if (index > 0) {
    return (
      <button
        type="button"
        className="btn btn-outline-secondary font-weight-bold py-2 px-4 rounded"
        style={{ transition: 'color 0.2s ease-in-out' }}
        onMouseOver={(e) => e.currentTarget.classList.add('text-info')}
        onMouseOut={(e) => e.currentTarget.classList.remove('text-info')}
        onClick={back}
      >
        Go Back
      </button>
    );
  } else {
    return null; // Return null instead of an empty string for conditional rendering in React
  }
};

export default BackButton;
