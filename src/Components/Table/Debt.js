import React from "react";
import PropTypes from "prop-types";

const Debt = ({ individual, total }) => {
  // TODO: Currency for payment
  if (individual.length > 0) {
    const sortedIndividual = individual.sort((a, b) => a.total - b.total);
    const equals =
      [...new Set(sortedIndividual.map(e => e.total))].length === 1;
    if (equals) {
      return <div>No debt</div>;
    }
    const [payer] = sortedIndividual
      .map(e => {
        return {
          ...e,
          pay: total / 2 - e.total
        };
      })
      .filter(e => e.pay >= 0);
    const [receiver] = sortedIndividual.filter(e => e.owner !== payer.owner);
    return (
      <div>
        {payer.owner} pays {payer.pay} to {receiver.owner}
      </div>
    );
  } else {
    return <div>Yay we have data!</div>;
  }
};

export default Debt;

Debt.propTypes = {
  individual: PropTypes.array,
  total: PropTypes.number
};
