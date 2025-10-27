import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = ()=> {
        navigate('/')
    }
    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
            className='position-relative'
        >
            <DotLottieReact
                src="https://lottie.host/20fde5c0-a2f7-4dd8-bf01-4f30ab73f8cd/wXOLUdNmmE.lottie"

                style={{
                    width: "600px",
                    height: "600px",
                }}
                loop
                autoplay

            />
            <button onClick={handleClick} className='btn btn-warning position-absolute bottom-0 end-0 me-3 mb-5  '> <i class="bi bi-arrow-left"></i> Back to Home Page </button>
        </div>
    );
};
export default PageNotFound
