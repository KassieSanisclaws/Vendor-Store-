import React, { useState } from 'react';
import { useThemeMode } from "../../main";
import { Tab, Tabs, Box } from '@mui/material';

interface Tab {
    label: string | React.ReactNode;
    component: React.ReactNode;
}

export default function TabComponentTwo({ tabs } : { tabs: Tab[] }) {
    const { mode } = useThemeMode();
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
                textColor={mode === 'dark' ? 'inherit' : 'primary'}
                aria-label="wrapped label tabs example"
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        value={index}
                        label={tab.label}
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