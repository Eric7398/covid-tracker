import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import '../style/InfoBox.css'

function InfoBox({ title, cases, active, total, isRed, isGreen, isBlack, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isBlack && 'infoBox--black'} `}>
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title"><strong>{title}</strong></Typography>
                <h2 className={`infoBox__cases  ${isGreen && 'text--green'} ${isBlack && 'text--black'}`}>{cases}</h2>
                <Typography color="textSecondary" className="infoBox__total">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}
export default InfoBox
