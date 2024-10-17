import React, {useState} from 'react';
import {Button, Card, Divider, Layout, Space, Typography} from 'antd';
import { VerificationForm } from "../src/verification"



const {Header, Content, Footer} = Layout;


const App: React.FC = () => {
    const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [formData, setFormData] = useState<{userName?: string; email?: string; password?: string}>({});

    const handleFormSubmit = (values: {userName: string, email: string, password: string}) =>{
        setFormData(values);
    }


    const onModal = ()=>{
        setShouldShowModal(true);
        setDisabled(true);
    }


    return(
        <Layout>
            <Header style={{backgroundColor: "ThreeDDarkShadow", height: 100}}>
                <Typography.Title> Auth </Typography.Title>
            </Header>

            <Content style={{height: 40}}>
                <Button  disabled={disabled} type={"primary"} onClick={()=>onModal()} style={{margin: 20, width: 200, height: 50}} > Auth </Button>
                <VerificationForm shouldShow={shouldShowModal} onFormSubmit={handleFormSubmit}/>
                <Typography.Title style={{padding: 10}} level={3}> Your Data: </Typography.Title>
                <Typography.Text style={{paddingLeft: 20}}>
                    Name: {formData.userName || "N/A"}
                </Typography.Text>
                <Typography.Text style={{paddingLeft: 20}}>
                    Email: {formData.email || "N/A"}
                </Typography.Text>
                <Typography.Text style={{paddingLeft: 20}}>
                    Password: {formData.password || "N/A"}
                </Typography.Text>
            </Content>
            <Footer>

            </Footer>

        </Layout>
    );
};

export default App;