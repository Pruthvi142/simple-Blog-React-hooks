import React ,{useState,useEffect} from 'react'
import axios from 'axios'
interface Props{
    match:any
}

export const UserPosts:React.FC<Props>=(props:Props)=> {
    const [userPosts,setPosts]=useState<Array<any>>([])
    useEffect(()=>{
        const id =props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
           
            const posts=response.data
            console.log(posts)
            setPosts(posts)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div>
            <h1> UserPosts</h1>
            {
                userPosts.map(ele=>{
                    return(
                    <li>{ele.title}</li>
                    )
                })
            }
        </div>
    )
}
