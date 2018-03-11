const headerExtractor = data => {
  return data[0];
};

const bodyExtractor = data => {
  return data.slice(1);
};

export const objectBuilder = data => {
  const headers = headerExtractor(data);
  const body = bodyExtractor(data);
  return body.map(e =>
    headers.reduce(
      (acc, val, index) => ({
        ...acc,
        [val]: e[index]
      }),
      {}
    )
  );
};

export const capitalizer = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// TODO: filter what has been already paid
export const debtCalculator = data => {
  const individual = individualDebt(data);
  const total = totalDebt(data);
  return { individual, total };
};

const individualDebt = data => {
  const owners = data.map(e => e.owner);
  const unique = [...new Set(owners)];
  return unique.map(owner => {
    return {
      owner,
      total: data
        .filter(e => e.owner === owner)
        .reduce((acc, val) => acc + parseFloat(val.amount), 0)
    };
  });
};

const totalDebt = data => {
  return data.reduce((acc, val) => acc + parseFloat(val.amount), 0);
};
