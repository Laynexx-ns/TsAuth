import {Card, Form, Input, Modal, Typography} from "antd";
import {useEffect, useState} from "react";

type FieldType = {
    userName: string,
    email: string,
    password: string,
    remember: boolean,
}

interface Props {
    shouldShow: boolean;
    onFormSubmit: (values: FieldType) => void; // функция для передачи данных
}

const VerificationForm: React.FC<Props> = ({shouldShow, onFormSubmit}) => {
    const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
    const [form] = Form.useForm();



    useEffect(() => {
        setShouldShowModal(shouldShow);
    }, [shouldShow]);


    const handleOk = () =>{
        form
            .validateFields()
            .then((values: FieldType) => {
                onFormSubmit(values);
                setShouldShowModal(false);
            })
            .catch((err: Error) => {console.log(err)});
    }

    const onSubmit = (values: FieldType) => {
        onFormSubmit(values);
        setShouldShowModal(false);
    }

    return (
        <Modal
            open={shouldShowModal}
            centered={true}
            onCancel={() => setShouldShowModal(false)}
            onOk={handleOk}

        >
            <Typography.Title>
                Authorization
            </Typography.Title>

            <Form
                form={form}
                name={"VerificationForm"}
                initialValues={{remember: true}}
                layout={"vertical"}

            >
                <Form.Item<FieldType>
                    label={"Name:"}
                    name={"userName"}
                    rules={[{required: true, message: 'Please, enter your name'}]}>
                    <Input placeholder={`Enter your name`}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label={"Email:"}
                    name={"email"}
                    rules={[{required: true, message: 'Please, enter your email'}]}>
                    <Input placeholder={`Enter your email`}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label={"Password:"}
                    name={"password"}
                    rules={[{required: true, message: 'Please, enter your password'}]}>
                    <Input.Password placeholder={`Enter your password`}/>
                </Form.Item>

            </Form>
        </Modal>
    );
}

export {VerificationForm};
