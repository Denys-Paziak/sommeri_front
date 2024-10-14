import Button from "@/app/components/UI/button/Button";
// import { technologies } from "../../../utils/data/technologies";

import Image from "next/image";
import styles from "./Technologies.module.css";
import {backHost, getTechnologiesWay} from "@/app/utils/server/server";


const Technologies = async () => {
    const data = await getTechnologiesWay();

    return (
        <section id="technologies" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Our technologies</h2>
                <div className={styles.container}>
                    <div className={styles.col}>
                        {data && data.filter(el => !el.right).map((el) => {
                            return <Box data={el}/>
                        })}
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.col}>
                        {data && data.filter(el => el.right).map((el) => {
                            return <Box data={el}/>
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};


const Box = ({data}) => {
    return (
        <div className={styles.box}>
            <h3 className={styles.wayName}>{data.name}</h3>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.technologies}>
                {data.technologies && data.technologies.map((technology) => {
                    return <div className={styles.technology}>
                        <Image src={backHost + technology.image.url} width={28} height={28} alt={"dd"} className={styles.icon}/>
                        <p className={styles.technologyName}>{technology.Name}</p>
                    </div>
                })}
            </div>
        </div>
    );
};


export default Technologies;
