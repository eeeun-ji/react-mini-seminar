import React, {useState, useEffect} from 'react';
import {Layout,Card} from "antd";
import axios from 'axios';
const {Content} = Layout;
const BodyArea = () => {
    const [list, setList] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // componentDidUpdate;
    // componentDidMount;
    // componentWillUnmount;

    // useEffect(() => {
    //     alert("Mode Changed!");
    // }, [darkMode]);

    useEffect(async() => {
        // 비동기처리를 동기처리방식처럼!
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const {data} = response;
        setList(data);
        console.log(response);
        // .then((response) => {
        //     const {data} = response;
        //     setList(data);
        //     // throw Error("Error")
        // })
        // .catch(e=>console.log(e))
        // .finally(()=>{console.log("This is Finally")});        
        }, []);

    return <Content> 
        {list.map((item, index)=>(

            <Card key={`${item.title}${index}`}>
                <p>{item.title}</p>
            </Card>))
        || "없음"}
     </Content>;
};

export default BodyArea;