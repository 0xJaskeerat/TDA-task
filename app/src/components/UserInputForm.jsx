import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Row, Col } from 'antd';
import { initialValues, additionalValues, formItems } from '../common/constants.js';

// Fetch API key and URL from environment variables using Vite's import.meta.env
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const UserInputForm = ({ setApiResponse }) => {
    // Function to handle form submission
    const onFinish = async (values) => {
        try {
            // Make a POST request to the API
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
            // Set the API response data in the parent component's state
            setApiResponse(response?.data?.data);
        } catch (error) {
            // Log any API errors
            console.error('API Error:', error);
        }
    };

    // Function to handle form submission failure
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {/* Form component */}
            <Form
                onFinish={onFinish} // Handle form submission
                onFinishFailed={onFinishFailed} // Handle form submission failure
                initialValues={initialValues} // Set initial form values
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
                {/* Create form fields using Ant Design's Form.Item */}
                <Row gutter={[16, 16]}>
                    {
                        formItems.map(({ label, name }) => (
                            <Col xs={24} sm={12} key={name}>
                                <Form.Item
                                    label={label}
                                    name={name}
                                    rules={[{ required: true, message: `Please input ${label}!` }]}
                                >
                                    {/* Input field with name and type */}
                                    <Input name={name} type="number" />
                                </Form.Item>
                            </Col>
                        ))
                    }
                </Row>
                {/* Submit button */}
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

export default UserInputForm; // Export the UserInputForm component
