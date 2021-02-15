import React from 'react'
import styles from './Detail.module.css'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId: string
}

export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>detail id: {props.match.params.touristRouteId}</h1>
}
