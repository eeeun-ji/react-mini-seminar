import React from 'react';
import {Layout} from "antd";
const {Header} = Layout;
const HeaderCustom = props => {
    const {text, callback} = props;

    return <Header style={{color:"white"}}> {text} 
    <button style={{color:"black", cursor:"pointer"}} onClick= {callback}> 이달의 이벤트는 ? </button>
    </Header>;
};

export default React.memo(HeaderCustom);