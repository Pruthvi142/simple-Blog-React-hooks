import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

export  const AllPost:React.FC=()=> {
    const [AllPosts ,setPosts]=useState<Array<any>>([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response)=>{
               const data=response.data
               setPosts(data)
          })
       
        
         
      
    },[])
    return (
        <div>
            {
                AllPosts?.map(ele=>{
                    return(
                        <div>
                            <li>
                            <Link to={`/users/${ele.userId}`} >{ele.title}</Link>
                            </li>
                            </div>
                    )
                })
            }
        </div>
    )
}

