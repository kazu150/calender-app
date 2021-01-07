import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers'
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

const StyledToolbar = withStyles({
    root: { padding: '0' }
})(Toolbar);

const StyledDatePicker = withStyles({
    root: { marginLeft: 30 }
})(DatePicker);

const StyledTypography = withStyles({
    root: { margin: '0 30px 0 10px'}
})(Typography)

const Navigation = ({ setNextMonth, setPreviousMonth }) => {
    const [ selectedDate, handleDateChange ] = useState(new Date())

    return (
        <StyledToolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <IconButton size="small">
                <ArrowBackIos />
            </IconButton>
            <IconButton size="small">
                <ArrowForwardIos />
            </IconButton>
            <StyledDatePicker
                value={selectedDate}
                onChange={handleDateChange}
                variant="inline"
                format="YYYY年 M月"
                animateYearScrolling
                disableToolbar        
            />
        </StyledToolbar>
    );
}

export default Navigation;