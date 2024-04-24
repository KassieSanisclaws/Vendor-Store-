import React, { useState } from 'react';
import { useThemeMode } from "../../main";
import { Chip, Grid } from '@mui/material';

interface Tab {
    name: string;
    component: React.ComponentType<any> | string;
    label: string;
}

interface ChipTabProps {
    tabs: Tab[];
    activatedTab: string;
    onTabChange: (componentName: string) => void;
}

const ChipTab = ({ tabs, activatedTab, onTabChange }: ChipTabProps) => {
    const { mode } = useThemeMode();
    return (
        <Grid container spacing={2} sx={{ my: 1, pb: 2, justifyContent: "space-between" }}>
            <Grid item xs={12} ml={2}>
                {tabs.map((tab) => (
                    <Chip
                        key={tab.name}
                        label={tab.label}
                        onClick={() => onTabChange(tab.name)}
                        sx={{
                            color: "#000000",
                            backgroundColor: tab.name === activatedTab || mode === "dark"  ? "primary.dark" : "primary.light",
                            ...(tab.name === activatedTab && {
                                color: "white",
                            }),
                            mr: 2,
                            borderRadius: 2,
                        }}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

const TabComponent = ({ tabs }: ChipTabProps) => {
    const[activeComponentName, setActiveComponentName] = useState(tabs[0].name);

    const handleComponentChange = (componentName: string) => {
        setActiveComponentName(componentName);
    };

    const activeTab = tabs.find((tab) => tab.name === activeComponentName) ?? tabs[0];

    return (
        <div>
            <ChipTab
                tabs={tabs}
                activatedTab={activeComponentName}
                onTabChange={handleComponentChange}
            />
            {typeof activeTab.component === 'string' ? (
                // Render your string-based component here
                <div>{activeTab.component}</div>
            ) : (
                // Render your component here
                <activeTab.component />
            )}
        </div>
    );
};
export default TabComponent;
