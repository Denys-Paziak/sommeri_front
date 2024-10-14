import Button from "@/app/components/UI/button/Button";
import Image from "next/image";
import styles from "./Technologies.module.css";
import { backHost, getTechnologiesWay } from "@/app/utils/server/server";

// Типізація для об'єкта технологій
interface Technology {
    id: string;
    name: string;
    description: string;
    technologies: {
        Name: string;
        image: {
            url: string;
        };
    }[];
    right?: boolean;
}

// Типізація для пропсів компоненту Box
interface BoxProps {
    data: Technology;
}

const Technologies = async () => {
    const data: Technology[] = await getTechnologiesWay();

    return (
        <section id="technologies" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Our technologies</h2>
                <div className={styles.container}>
                    <div className={styles.col}>
                        {data &&
                            data
                                .filter((el) => !el.right)
                                .map((el) => <Box key={el.id} data={el} />)}
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.col}>
                        {data &&
                            data
                                .filter((el) => el.right)
                                .map((el) => <Box key={el.id} data={el} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Box: React.FC<BoxProps> = ({ data }) => {
    return (
        <div className={styles.box}>
            <h3 className={styles.wayName}>{data.name}</h3>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.technologies}>
                {data.technologies &&
                    data.technologies.map((technology) => (
                        <div key={technology.Name} className={styles.technology}>
                            <Image
                                src={backHost + technology.image.url}
                                width={50}
                                height={50}
                                alt={technology.Name}
                                className={styles.icon}
                            />
                            <p className={styles.technologyName}>{technology.Name}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Technologies;
