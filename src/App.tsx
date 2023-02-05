import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css'
import Robot from "./components/Robot";
import robots from './mockdata/robots.json'
import ShoppingCart from "./components/ShoppingCart";


interface Props{}
interface State{
    robotGallery:any[];
}


const App:React.FC = (props) =>{
     const [count,setCount] = useState<number>(0)
    const [robotGallery,setRobotGallery] = useState<any>([])
    useEffect(()=>{
        document.title = `点击${count}次`
    },[count])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setRobotGallery(data));
    },[])
     return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} alt="logo" className={styles.appLogo}/>
                    <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
                </div>
                <button onClick={()=>{
                    setCount(count+1)
                }}>count+1</button>
                <span>count:{count}</span>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {robotGallery.map((r)=> <Robot id={r.id} name={r.name} email={r.email} key={r.id}/>)}
                </div>
            </div>
        );
}

export default App;
