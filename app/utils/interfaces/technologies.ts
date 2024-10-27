export interface ITechnologies {
  name: string;
  description: string;
  technologies: {
    Name: string;
    image: {
      url: string;
    };
  }[];
  right: boolean;
  id: string;
}
