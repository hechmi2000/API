import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
    const navigate =useNavigate()
  return (
    <div>
        <Card style={{ width: '18rem',margin:"10px 0px" }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      <Card.Body>
        <Card.Title>{user.name} </Card.Title>
        <Card.Text>
            {user.email}
        </Card.Text>
        <Card.Text>
            {user.phone}
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate (`/details/${user.id}`)}>Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard