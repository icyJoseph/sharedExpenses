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
