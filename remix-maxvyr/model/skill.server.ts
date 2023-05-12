import { getData } from "../utils/get-data";

export type Skill = {
  id: string;
  createdTime: string;
  fields: {
    Attachments: Attachments[];
    title: string;
  };
};

type Attachments = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    full: {
      url: string;
      width: number;
      height: number;
    };
  };
};

const getSkills = async () => {
  const json = await getData(
    "https://api.airtable.com/v0/appVpp9nSNmoFNXBn/skills"
  );
  return json["records"] as Skill[];
};

export { getSkills };
