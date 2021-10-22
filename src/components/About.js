import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export const MyCard = React.memo(({ name, gender }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My name: {name}</h3>
            <h4>Gender: {gender}</h4>
        </div>
    )
});

// Arrow Function components
export const About = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
            <h2>INTRODUCE</h2>
            <h4>Full Name: Pham Thi Trang Thu</h4>
            <h4>Student ID: 4501104228</h4>
            <h4>Birthday: 7th August</h4>
            <h4>Gender: Female</h4>
            <h4>Job: Student</h4>
        </div>
    )
};
