import React from 'react'
import useFetch from '../hooks/useFetch'

const UseFetch = () => {

    // useFetch hook is used here. 
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        // map the data.
        <div style={{margin: '10px'}}>
            {data ? data.map((item, index) => (
                <div style={{marginBottom: '10px', padding:'10px', backgroundColor:'#f5f5f5', borderRadius:'3px'}} key={item.id}>{index+1} - {item.title}</div>
            )): (<div style={{ minHeight:'100vh', display:'grid', placeContent:'center' }}><p>Loading</p></div>)}
        </div>
    )
}

export default UseFetch