import { useMemo } from "react";
import PropTypes from "prop-types";

const ExpensiveCalculationComponent = ({ data }) => {
  const expensiveResult = useMemo(() => {
    const result = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return result;
  }, [data]);

  return (
    <>
      <div className="bg-blue-500 p-2 rounded-md w-full mt-2">
        <p className="text-xl text-white text-center">{expensiveResult}</p>
      </div>
    </>
  );
};

ExpensiveCalculationComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ExpensiveCalculationComponent;
