import { getData } from "../utils/get-data";
import { z } from "zod";

const AttachmentsSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  filename: z.string(),
  size: z.number(),
  type: z.string(),
  thumbnails: z.object({
    small: z.object({
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    large: z.object({
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    full: z.object({
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  }),
});

const SkillSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
  fields: z.object({
    Attachments: AttachmentsSchema.array(),
    title: z.string(),
  }),
});

export type Skill = z.infer<typeof SkillSchema>;

const getSkills = async () => {
  const json = await getData(
    "https://api.airtable.com/v0/appVpp9nSNmoFNXBn/skills"
  );

  const list = [] as Skill[];
  for (const item of json["records"]) {
    list.push(SkillSchema.parse(item));
  }
  return list;
};

export { getSkills };
