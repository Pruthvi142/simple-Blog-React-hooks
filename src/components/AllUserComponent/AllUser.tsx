import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {CardContainer}  from '../styledComponents/styled'

export  const AllUser:React.FC=()=> {
    const[AllUsers,setAllUsers]=useState<Array<any>>([])
    useEffect(()=>{
       axios.get("http://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const data=response.data
            console.log("all users",data)
            setAllUsers(data)
        })
    },[])
    return (
        <CardContainer>
              <h1>ALL USERS LIST</h1>
              {
                  AllUsers.map(user=>{
                      return(
                          <div>
                                <Link to={`/userposts/${user.id}`}>  {user.name}</Link>
                                </div>
                      
                      )
                  })
              }
            
        </CardContainer>
    )
}
