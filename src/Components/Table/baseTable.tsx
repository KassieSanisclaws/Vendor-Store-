import React, { useCallback, useEffect, useRef, useState } from "react";
import { Settings, FilterListOff } from "@mui/icons-material";
import { Table, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, Grid } from "@mui/material";
import { TableProps } from "../../Types/typeInterface";



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

export const BaseTable = ({
    rows = [],
    getRowId,
    totalCount = 0,
    isLoading = true,
    noDataMessage = "No Data",
    height = 550,
    sorting,
    onSortingChange,
    filters,
    onFiltersChange,
    onFiltersClear,
    columns,
    onColumnsChange,
    columnOrder,
    onColumnOrderChange,
    columnWidths,
    onColumnWidthChange,
    hiddenColumns,
    onHiddenColumnsChange,
    selection,
    onSelectionChange,
    pagination,
    onPaginationPageChange,
    onPaginationSizeChange,
    tableLoad,
    search,
    onSearchChange,
    options = [],
    includeSort,
    includeSearch,
    includeSelection,
    includeFilters,
    includePagination,
    showSelectAll,
    showSelectionColumn,
    selectionByRow,
    highLightSelection,
    toolbarComponent,
    commitTableChanges,
    plugins = [],
}: IProps) => {    
    return (
        <Grid container>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns?.map((column) => (
                                    <TableCell key={column.id}>{column.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading && rows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={columns?.length}>
                                        {noDataMessage}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows.map((row) => (
                                    <TableRow key={getRowId && getRowId(row)}>
                                        {columns?.map((column) => (
                                            <TableCell key={column.id}>
                                                {row[column.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}
           