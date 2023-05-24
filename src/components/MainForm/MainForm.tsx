import {useState, useEffect} from "react";
import './mainform.css';

import BigLogo from '../../img/big-logo.png';
import FirstComponent from "./FirstComponent";


const MainForm = () => {
    const[variant, setVariant] = useState(1);

    const [component, setComponent]= useState(<></>)

    useEffect(()=>{
            if(variant === 1){
               setComponent(
                <FirstComponent/>
               )
            } else if(variant === 2){
                setComponent(
                    <div></div>
                   )
            }

    },[variant])

    return (
        <>
            <div className="container">
            <img src={BigLogo} alt="big logo" />
            <div className="variants">
                <button className="variants-btn" onClick={() => setVariant(1)}>Матриця</button>
                <button className="variants-btn" onClick={() => setVariant(2)}>Сумісність в парі</button>
                <button className="variants-btn" onClick={() => setVariant(3)}>Дитяча</button>
                <button className="variants-btn" onClick={() => setVariant(4)}>Матриця особистого бренду</button>
            </div>
            {component}
            </div>
           
        </>

    )

}

export default MainForm;