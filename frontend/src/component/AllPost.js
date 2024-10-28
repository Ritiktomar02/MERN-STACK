import React, { useEffect, useState } from 'react';

const AllPost = () => {
    const [data, setData] = useState([]);

    const getdata = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/getlist");
            const result = await response.json();

            console.log("Fetched data:", result);  // Log the structure of result

            // Check if result is an array directly or if it’s in result.data
            setData(result);
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    console.log("Data for rendering:", data);

    return (
        <div> 
            {data?.map((ele) => (
                <div key={ele._id}>
                    {ele.age} {/* Displaying each element's name */}
                </div>
            ))}
        </div>
    );
};

export default AllPost;
