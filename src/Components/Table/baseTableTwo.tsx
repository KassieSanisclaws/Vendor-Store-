import React, { useCallback, useEffect, useRef, useState } from "react";
import { Settings, FilterListOff } from "@mui/icons-material";
import {
    Table,
    IconButton,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import { TableProps } from "../../Types/typeInterface";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps extends TableProps {
    rows: any[];
    totalCount?: number;
    isLoading: boolean;
    height?: number | string;
    options?: any[] | ((row: any) => any[]);
    noDataMessage?: string;
    toolbarComponent?: (props: any) => JSX.Element;
    plugins?: any[];
}

export const BaseTableTwo = ({
    rows = [],
    getRowId,
    totalCount = 0,
    isLoading = true,
    noDataMessage = "No Data",
    height = 550,
    columns,
}: IProps) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {isLoading && rows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={columns?.length}>
                                        {noDataMessage}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows.map((row, index) => (
                                    <React.Fragment key={getRowId && getRowId(row)}>
                                        <TableRow>
                                            <TableCell colSpan={columns?.length}>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls={`panel${index}a-content`}
                                                        id={`panel${index}a-header`}
                                                    >
                                                        <Typography>Accordion {index + 1}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};
