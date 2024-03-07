import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res)=> setUser(...res.data))
      .catch((err)=> console.log(err))
    }, [id])
  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user?.address?.city}
      </Card.Text>
      <Button variant="primary" onClick={()=> navigate(-1)}>Back</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default UserDetails