const getData = async (url: string) => {
  let response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });
  const json = await response.json();
  return json;
};

export { getData };
