import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import styles from './Columns.css'

// import { useTodo } from "../ducks/Todos"

export default function Rightcolumn() {
  return (
    <div className='rightColumn'>
<Card>
<CardContent className='cardContent'>
    <h5>Trending Weekly Top 10</h5>
<ol className='trendingSongs'>
  <li> Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
</ol>
</CardContent>
</Card>

<Card>
<CardContent className='cardContent'>
    <h5>Trending Weekly Top 10</h5>
<ol>
  <li> Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
  <li>Nick Lace - Kobe</li>
 
</ol>
</CardContent>
</Card>


    </div>
  )
}
