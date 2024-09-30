export interface ProjectInterface {
    id: number,
    documentId: string,
    Category: { Name: string },
    Name: string,
    About_the_project: string,
    We_did_1: string,
    We_did_2: string
    Technologies: string[],
    Result: string,
    Solution: string,
    Objectives: string,
    Hero_image: {
        url: string,
        formats: {
            thumbnail: {
                url: string
            }
        }
    },
    Mokap_1: {
        url: string
    },
    Mokap_2: {
        url: string
    },
    Galery:  {
        url: string
    } []
}
