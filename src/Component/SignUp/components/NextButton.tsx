type dataType = {
  index: number;
};

const NextButton = ({ index }: dataType) => {
  return (
    <button
      type="submit"
      className={`btn btn-primary rounded ${index === 3 ? 'btn-success' : ''}`}>
      {index === 3 ? 'Submit' : 'Next Step'}
    </button>
  );
};

export default NextButton;
