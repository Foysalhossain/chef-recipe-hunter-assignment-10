/* eslint-disable no-unused-vars */
import React from 'react';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const Blog = () => {
    const ref = useRef()
    return (
        <div className='container mx-auto'>
            <div ref={ref} className='p-4'>
                <h1 className='font-bold text-4xl text-center mb-10'>Question Answer</h1>
                <div>
                    <h2 className='text-2xl mb-4'>Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className='mb-6'>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </p>

                    <h2 className='text-2xl mb-4'>How to validate React props using PropTypes.</h2>
                    <p className='mb-6'>
                        Inside JSX code, we can use the ternary operator to check if the prop was passed to the component.

                        1.To check if a prop was passed to a component in React:
                        2.Compare the prop to undefined .
                        3.If the prop is equal to undefined , it wasn't passed to the component.
                        Otherwise, it was passed.
                    </p>

                    <h2 className='text-2xl mb-4'>Tell us the difference between nodejs and express js.</h2>
                    <p className='mb-6'>
                        NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                    </p>

                    <h2 className='text-2xl mb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='mb-6'>
                        It can be reused easily, which makes the code cleaner and reduces the time to write the code.
                    </p>
                </div>
            </div>
            <ReactToPrint
                trigger={() => <button className='btn btn-primary'>Print This Page</button>}
                content={() => ref.current}>
            </ReactToPrint>
        </div>
    );
};

export default Blog;