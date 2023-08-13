import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Row, Col } from 'antd';
import { initialValues, additionalValues, formItems } from '../constants';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const UserInputForm = ({ setApiResponse }) => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post(
                API_URL,
                { ...values, ...additionalValues },
                {
                    headers: {
                        'x-api-key': API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );
            setApiResponse(response?.data?.data);
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {/* form */}
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={initialValues}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px 28px'
                }}
                labelCol={{
                    span: 8,
                }}
            >
                <Row gutter={[16, 16]}>
                    {
                        formItems.map(({ label, name }) => (
                            <Col xs={24} sm={12} key={name}>
                                <Form.Item
                                    label={label}
                                    name={name}
                                    rules={[{ required: true, message: `Please input ${label}!` }]}
                                >
                                    <Input name={name} type="number" />
                                </Form.Item>
                            </Col>
                        ))
                    }
                </Row>
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{ 
                        backgroundColor: '#EA1179', 
                        outline: 'none', 
                        border: 'none',
                        borderRadius: '15px',
                        width: '120px',
                        height: '30px'
                    }}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default UserInputForm;
