import React, { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';

interface Tab {
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
    component?: React.ReactNode;
}

export default function TabComponentTwo({ tabs } : { tabs: Tab[] }) {
    const [value, setValue] = useState(0);

    const handleTabChange = (e: any, newValue: number) => {
        e.preventDefault();
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleTabChange}      
                aria-label="wrapped label tabs example"
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        value={index}
                        label={tab.label}
                        icon={<Box>{tab.icon}</Box>}
                        iconPosition='start'
                        wrapped
                    />
                ))}
            </Tabs>
            {tabs.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.component}
                </TabPanel>
            ))}
        </Box>
    )
};

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}