import "../assets/CSS/components/Login.css"
import { useState } from "react"
import { Link, useNavigation, } from "react-router-dom"
import axios from "axios"

export default function Login() {
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    let navigate = useNavigation()

    let switchLoginOrSignup = () => {
        setEmail("");
        setPassword("");
        setName("");
        setIsLogin(!isLogin);
    };

    const onInputChange = (e) => {
        switch(e.target.name) {
          case "email":
            setEmail(e.target.value);
            break;
          case "password":
            setPassword(e.target.value);
            break;
          case "name":
            setName(e.target.value);
            break;
          default:
            break;
        }
      }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setName(event.target.elements.name)


        let user = {
            username: !isLogin ? undefined : name,
            email,
            password
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };
    
        try {
            let response = await fetch(
                `${isLogin ? 'http://localhost:3001/api/user/signup' : 'http://localhost:3001/api/user/login'}`, 
                options
            );
            console.log(response)

            const data = await response.json();

            if(response.status === 200) {
                console.log(data);
                 // If login or sign up is successful, redirect to home page
                localStorage.setItem('username', data.username);
                window.location = '/'
            } else {
                console.error("Server Response ", response);
            }

        } catch (error) {
            console.error("Error ", error);
        }
    };

    return (
        <div>
            {isLogin ?
            (
                <section className="loginContainer">
                    <section className="card">
                        <h1>SIGNUP</h1>
                        <form onSubmit={handleSubmit}>
                            <section>
                                <label htmlFor="name">NAME</label>
                                <input type="text" name="name" value={name} onChange={onInputChange}/>
                            </section>
                            <section>
                                <label htmlFor="email">EMAIL</label>
                                <input type="text" name="email" value={email} onChange={onInputChange}/>
                            </section>
                            <section>
                                <label htmlFor="password">PASSWORD</label>
                                <input type="password" name="password" value={password} onChange={onInputChange}/>
                            </section>
                            {/* would switch back to login to signup */}
                                <button type="submit">SIGNUP</button>
                        </form>
                        <a onClick={switchLoginOrSignup}>LOGIN</a>
                    </section>
                </section>
            ) : (
                    <section className="loginContainer">
                        <section className="card">
                            <h1>LOGIN</h1>
                            <form onSubmit={handleSubmit}>
                                <section>
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="text" name="email" value={email} onChange={onInputChange}/>
                                </section>
                                <section>
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="text" name="password" value={password} onChange={onInputChange}/>
                                </section>
                                    <button type="submit">LOGIN</button>
                            </form>
                            <a onClick={switchLoginOrSignup}>SIGNUP</a>
                        </section>
                    </section>
                ) 
            }
        </div>
    )
}





