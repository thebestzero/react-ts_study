import React from 'react';
import styles from './Robot.module.css'
interface RobotProps{
    id:number;
    name:string;
    email:string
}
// FC就是functional component的缩写，它代表的就是函数式组件的接口，接受一个泛型参数p
const Robot:React.FC<RobotProps> = ({id,name,email})=>{
    return(
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Robot