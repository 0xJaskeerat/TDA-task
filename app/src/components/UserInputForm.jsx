import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const initialValues = {
    accountsReceivable: 0,
    inventory: 0,
    netPPE: 0,
    accountsPayable: 0,
    capital: 0,
    revenue: 0,
    costOfGoodsSold: 0,
    sellingGA: 0,
};

const additionalValues = {
    riskFreeRate: 5.00,
    beta: 1,
    equityRiskPremium: 3.4,
    equityPercent: 60,
    costOfDebt: 7,
    debtPercent: 40,
    marginalTaxRate: 20,
    newDPO: 37,
    newDSO: 35
};

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const UserInputForm = ({ setApiResponse }) => {
    const onFinish = async (values) => {
        try {
            const combinedValues = { ...values, ...additionalValues };
            const response = await axios.post(`${API_URL}`, combinedValues,
                {
                    headers: {
                        'x-api-key': `${API_KEY}`,
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

        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={initialValues}
        >
            <Form.Item
                label="Accounts Receivable"
                name="accountsReceivable"
                rules={[
                    {
                        required: true,
                        message: 'Please input Accounts Receivable!',
                    },
                ]}
            >
                <Input name='accountsReceivable' type='number'/>
            </Form.Item>

            <Form.Item
                label="Inventory"
                name="inventory"
                rules={[
                    {
                        required: true,
                        message: 'Please input Inventory!',
                    },
                ]}
            >
                <Input name='inventory' type='number' />
            </Form.Item>

            <Form.Item
                label="Net PPE"
                name="netPPE"
                rules={[
                    {
                        required: true,
                        message: 'Please input Net PPE!',
                    },
                ]}
            >
                <Input name='netPPE' type='number' />
            </Form.Item>

            <Form.Item
                label="Accounts Payable"
                name="accountsPayable"
                rules={[
                    {
                        required: true,
                        message: 'Please input Accounts Payable!',
                    },
                ]}
            >
                <Input name='accountsPayable' type='number' />
            </Form.Item>

            <Form.Item
                label="Capital"
                name="capital"
                rules={[
                    {
                        required: true,
                        message: 'Please input Capital!',
                    },
                ]}
            >
                <Input name='capital' type='number' />
            </Form.Item>

            <Form.Item
                label="Revenues"
                name="revenue"
                rules={[
                    {
                        required: true,
                        message: 'Please input Revenues!',
                    },
                ]}
            >
                <Input name='revenue' type='number' />
            </Form.Item>

            <Form.Item
                label="Cost of Goods Sold"
                name="costOfGoodsSold"
                rules={[
                    {
                        required: true,
                        message: 'Please input Cost of Goods Sold!',
                    },
                ]}
            >
                <Input name='costOfGoodsSold' type='number' />
            </Form.Item>

            <Form.Item
                label="Selling, G&A"
                name="sellingGA"
                rules={[
                    {
                        required: true,
                        message: 'Please input Selling, G&A!',
                    },
                ]}
            >
                <Input name='sellingGA' type='number' />
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UserInputForm;
