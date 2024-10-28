import React, { useState } from 'react';

const Home = () => {
    const [formdata, setformdata] = useState({ name: "", email: "", age: "" });

    function changehandler(event) {
        setformdata((prevdata) => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }));
    }

    const submithandler=async(event)=>{
        event.preventDefault();
        
        try{
            const response=await fetch('http://localhost:4000/api/v1/createlist',{

                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formdata)
            })
            const data = await response.json();
            console.log('Server response:', data);  // Check the response from the server
        } 
        catch (error) {
            console.error('Error sending data:', error);  // Catch any network errors
        }


    }

    

    return (
        <form onSubmit={submithandler}>
            <label htmlFor='name'>First name: </label>
            <br />
            <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name'
                onChange={changehandler}
                value={formdata.firstname}
            />
            <br />
            <br />

            <label htmlFor='email'>Email: </label>
            <br />
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                onChange={changehandler}
                value={formdata.email}
            />
            <br />
            <br />
            <label htmlFor='age'>Age: </label>
            <br />
            <input
                type='number'
                name='age'
                id='age'
                placeholder='Age'
                onChange={changehandler}
                value={formdata.age}
            />
            <br />
            <br />

            <button type='submit'>Submit</button>
        </form>
    );
};

export default Home;
