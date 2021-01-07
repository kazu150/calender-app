import React from 'react';
import * as styles from './style.css';

import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';

import { isSameDay, isSameMonth, isFirstDay, getMonth } from '../../services/calendar';

const CalendarElement = ({month, day}) => {
    const today = dayjs();
    
    const currentMonth = getMonth(month)
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';
    
    const format = isFirstDay(day) ? "M月D日" : "D";
    const isToday = isSameDay(today, day);

    
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                variant="caption"
                component="div"
                color={textColor}
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    )
}

export default CalendarElement
