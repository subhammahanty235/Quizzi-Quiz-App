import { render } from '@testing-library/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate('/')
    const [name, setName] = useState("")
    const setnameFunc = () => {
        if (name.length > 2) {

            localStorage.particpateName = name;
            
            setTimeout(()=>{
                navigate('/')
            },1000)
            
        }
        else {
            alert('Enter a Name');
        }

    }
    return (
        <>

            <div className="maindiv">
                <div className="upper">
                    <h4 className="text-center">Hey,Let's Prove Your 🧠</h4>

                    <hr />
                </div>
                <div className="lowersec container">
                    <input type="text" className='inputname mt-3' name='inputname' onChange={(e) => { setName(e.target.value) }} />
                    <button className=" btn btn-sm btn-outline-success mt-3" onClick={setnameFunc}>LOG IN</button>
                </div>
                <div className="svgs">

                    <svg className='wave1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fill-opacity="1" d="M0,64L40,90.7C80,117,160,171,240,181.3C320,192,400,160,480,128C560,96,640,64,720,96C800,128,880,224,960,245.3C1040,267,1120,213,1200,197.3C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                    <svg className='wave2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,192C640,181,800,203,960,186.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>

            </div>
            {/* //for alert or notification */}

        </>
    )
}

export default Login