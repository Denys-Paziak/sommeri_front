export interface ProjectInterface {
    id: number,
    attributes: ProjectAttributesInterface
}

interface ProjectAttributesInterface {
    About_the_project: string,
    Category: string [],
    Hero_image: {
        data: {
            attributes: {
                url: string
            }
        }
    },
    About_project_mockup: {
        data: {
            attributes: {
                url: string
            }
        }
    },
    About_project_frame: {
        data: {
            attributes: {
                url: string
            }
        }
    },
    About_project_galery: {
        data: {
            attributes: {
                url: any
            }
        } []
    },
    Objectives: string,
    Project_name: string,
    Result: string,
    Result2: any,
    Solution: string,
    Technologies: string[],
    We_did: string,
    We_did_2: string
}

