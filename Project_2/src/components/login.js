import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    localStorage.setItem('userData', null);
    // api
    return (
        <div class="flex justify-center items-center h-screen bg-slate-300">
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Login using Google</h1>
                <hr class="mt-3"></hr>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const userID = null;
                        const decoded = jwtDecode(credentialResponse.credential);
                        const loginApi = fetch(`https://cst438p2g17spring-65b77ceaeba8.herokuapp.com/login`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: new URLSearchParams({
                                email: decoded.email,
                                username: decoded.name 
                            })
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok: ' + response.statusText);
                            }
                            return response.json(); 
                        })
                        .then(data => {
                            console.log('Success:', data); 
                            localStorage.setItem('userData', JSON.stringify(data));
                            navigate('/home')
                        })
                        .catch(error => {
                            console.error('Error:', error); 
                        });
                        // console.log(loginApi);

                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </div>
    );
}

export default Login;