import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { initialValues , additionalValues, formItems } from '../constants';

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
            <h2>Output Charts</h2>

            {/* form */}
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={initialValues}>
                {
                    formItems.map(({ label, name }) => (
                        <Form.Item
                            key={name}
                            label={label}
                            name={name}
                            rules={[{ required: true, message: `Please input ${label}!` }]}
                        >
                            <Input name={name} type="number" />
                        </Form.Item>
                    ))
                }
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default UserInputForm;
