import { useState } from "react";

import MainForm from "./MainForm";
import Matrix from "./Matrix";


const Main = () => {
    const[age, setAge] = useState();
    const[sex, setSex] = useState();
    const[name, setName] = useState();
    const[edition, setEdition] = useState();

    const getInfo = (info) => {
        setAge(info.age);
        setSex(info.sex);
        setName(info.name);
        setEdition(info.edition);
    };

    return (
        <>
            <MainForm/>
            <Matrix/>
        </>
    )
}


export default Main;