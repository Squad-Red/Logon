import React, { useEffect, useState } from "react";
import  {HoursStyled, DateStyled, ClockDiv}  from './Clock.styled'

export const Clock = () => {
    
    const [clockHours, setClockHours] = useState();
    const [clockMinutes, setClockMinutes] = useState();
    const [fullDate, setFullDate] = useState();
    let options = { weekday: 'long', day: 'numeric' , month: 'long', year: 'numeric' };

    const formatClock = (val) => {
        if(val<10) {
            return '0';
        } else {
            return '';
        }
    }

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            setClockHours(formatClock(date.getHours()) + date.getHours());
            setClockMinutes(formatClock(date.getMinutes()) + date.getMinutes());

            options.timeCostumFormat = 'short'
            setFullDate(date.toLocaleString('pt-br', options));
           
        }, 1000);
    }, []);
    
    return (
        <ClockDiv>
            <HoursStyled>{clockHours}:{clockMinutes} </HoursStyled>
            <DateStyled> {fullDate} </DateStyled>
        </ClockDiv>
    )
};

