type dataType = {
  index: number;
};

const NextButton = ({ index }: dataType) => {
  return (
    <button
      type="submit"
      className={`btn btn-primary ml-auto py-2 px-4 mt-3 rounded ${index === 3 ? 'btn-success' : ''}`}
      style={{ transition: 'background-color 0.2s ease-in-out' }}
      onMouseOver={(e) => e.currentTarget.classList.add('btn-info')}
      onMouseOut={(e) => e.currentTarget.classList.remove('btn-info')}
    >
      {index === 3 ? 'Submit' : 'Next Step'}
    </button>
  );
};

export default NextButton;
