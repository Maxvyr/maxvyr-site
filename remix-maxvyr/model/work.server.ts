import { getData } from "../utils/get-data";

export type Work = {
  id: string;
  createdTime: string;
  fields: {
    description: string;
    title: string;
    image_link: string;
    link_code_base?: string;
    link_project?: string;
    techno: string[];
  };
};

const getWorks = async () => {
  const json = await getData(
    "https://api.airtable.com/v0/appVpp9nSNmoFNXBn/projects"
  );
  return json["records"] as Work[];
};

const getWork = async (idWork: string) => {
  let response = await fetch(
    `https://api.airtable.com/v0/appVpp9nSNmoFNXBn/projects/${idWork}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  const json = await response.json();
  return json as Work;
};

export { getWorks, getWork };
