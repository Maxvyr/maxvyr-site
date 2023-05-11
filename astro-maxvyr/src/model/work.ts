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
