import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const[displayUsers, setDisplayUsers] =useState(users)
    const handleDelete = user =>{
        const agree= window.confirm(`Are  you sure you want to delete: ${user.name}`)
        if(agree){
            // console.log('try to delete ',user._id)
            fetch(`http://localhost:5000/users/${user._id}`,{

                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                //console.log(data)
                if(data.deletedCount > 0){
                    alert('user deleted successfully')
                    const remainingUers = displayUsers.filter(usr =>usr._id !==user._id);
                    setDisplayUsers(remainingUers)
                }
            
            });
        }
        //console.log('agree')

        

    }

    return (
        <div>
            <h2>This is home:{displayUsers.length}</h2>

            {
                displayUsers.map(user =><p key={user._id}> 
                {user.name} {user.email}
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                <button onClick={() => handleDelete(user)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Home;