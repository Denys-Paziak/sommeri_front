export interface ProjectInterface {
  id: number;
  documentId: string;
  Category: { Name: string };
  Name: string;
  About_the_project: string;
  We_did_1: string;
  We_did_2: string;
  Technologies: string[];
  Result: string;
  Solution: string;
  Objectives: string;
  url: string;
  similars: ProjectInterface[];
  technologies: {
    Name: string;
  }[];
  Hero_image: {
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  Mokap_1: {
    url: string;
  };
  Mokup_2: {
    url: string;
  };
  Mokup_3: {
    url: string;
  };
  Preview: {
    url: string;
  };
  Galery: {
    url: string;
  }[];
}
