import { getData } from "../utils/get-data";
import { z } from "zod";

const WorkSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
  fields: z.object({
    description: z.string(),
    title: z.string(),
    image_link: z.string(),
    link_code_base: z.string().default("https://github.com/maxvyr"),
    link_project: z.string().default("https://maxvyr.com"),
    techno: z.array(z.string()),
  }),
});

export type Work = z.infer<typeof WorkSchema>;

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
  const res = WorkSchema.parse(json);
  return res;
};

export { getWorks, getWork };
