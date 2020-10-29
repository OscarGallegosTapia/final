import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

// import { useTodo } from "../ducks/Todos"

export default function Leftcolumn() {
  return (
    <div className='leftColumn'>



<Card>
<CardContent>
<div><button className='leftColumnBtn'><i class="far fa-user-circle"></i>   Profile</button></div>
<div><button className='leftColumnBtn'><i class="far fa-bell"></i>    Notifications</button></div>
<div><button className='leftColumnBtn'><i class="far fa-inbox"></i>   Messages</button></div>
<div><button className='leftColumnBtn'><i class="far fa-users-cog"></i>   Settings</button></div>
</CardContent>
</Card>




    </div>
  )
}
