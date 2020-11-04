import React ,{useState,useEffect} from 'react'
import axios from 'axios'
interface Props{
    match:any
}
interface users{
    username:string,
    name:string,
    email:string,
    number:number
}

export const UserShow:React.FC<Props>=(props:Props)=> {
    const [userDetail,setUser]=useState({username:"",name:"",email:""})
    const [userPosts,setPost]=useState<Array<any>>([])
    useEffect(()=>{
        const id=props.match.params.id
        console.log("par",)
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user=response.data
        
            setUser(user)
            console.log("userDe",userDetail)
        })
        const pid=props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${pid}`)
        .then((response)=>{
           
            const posts=response.data
            console.log(posts)
            setPost(posts)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <h1> UserShow</h1>
            
             <p>username:{userDetail.username}</p>
             <p>name:{userDetail.name}</p>
             <p>email:{userDetail.email}</p>

             <h1>POST LISTS</h1>
            {
                
                userPosts?.map(ele=>{
                    return(
                        
                    <li>{ele.title}</li>
                    )
                })
            }
        </div>
    )
}
