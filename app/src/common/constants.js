export const initialValues = {
    accountsReceivable: 0,
    inventory: 0,
    netPPE: 0,
    accountsPayable: 0,
    capital: 0,
    revenue: 0,
    costOfGoodsSold: 0,
    sellingGA: 0,
};

export const additionalValues = {
    riskFreeRate: 5.00,
    beta: 1,
    equityRiskPremium: 3.4,
    equityPercent: 60,
    costOfDebt: 7,
    debtPercent: 40,
    marginalTaxRate: 20,
    newDPO: 37,
    newDSO: 35,
};

export const formItems = [
    { label: 'Accounts Receivable', name: 'accountsReceivable' },
    { label: 'Inventory', name: 'inventory' },
    { label: 'Net PPE', name: 'netPPE' },
    { label: 'Accounts Payable', name: 'accountsPayable' },
    { label: 'Capital', name: 'capital' },
    { label: 'Revenues', name: 'revenue' },
    { label: 'Cost of Goods Sold', name: 'costOfGoodsSold' },
    { label: 'Selling, G&A', name: 'sellingGA' },
];