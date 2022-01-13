import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({ title, cases, total }) {
    return (
        <Card>
            <CardContent>
                {/* Title */}
                <Typography color="textSecondary" className="infoBox__title">{title}</Typography>
                {/* Number of Cases */}
                <h2 className="infoBox__cases">{cases}</h2>
                {/* Title Cases */}
                <Typography color="textSecondary" className="infoBox__total">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
