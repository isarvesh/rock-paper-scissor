import React from 'react';

function Computer({ computerSelection }) {
  return (
    <div>
      <h2>Computer</h2>
      {computerSelection && <p>Selected: {computerSelection}</p>}
    </div>
  );
}

export default Computer;
