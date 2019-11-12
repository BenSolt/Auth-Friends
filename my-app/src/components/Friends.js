import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';



const Friends = () => {

 const [frend, setFrend] = useState([]);

     axiosWithAuth()
    .get ('/api/friends')
    .then(res => {
        setFrend(res.data)
        // console.log(res.data,'friends')
        
    })
    .catch(err => {
        console.log(err)
    });

if(frend === []) {
return(
    <p>loading...</p>
)
}

return (
    <div>
        {/* {console.log(frend)} */}
        <h1>Friends List</h1>

    {frend.map(f => {
    return(
        <div>
            <h2>{f.name}</h2>
            <h2>{f.age}</h2>
            <h2>{f.email}</h2>
        </div>
        )}
    )}

    </div>
)

};

export default Friends;