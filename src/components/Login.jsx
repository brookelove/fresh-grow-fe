import "../assets/CSS/components/Login.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [isLogin, setIsLogin] = useState(false)

    let switchLoginOrSignup = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            {isLogin ?
            (
                <section className="loginContainer">
                    <section className="card">
                        <h1>SIGNUP</h1>
                        <form>
                            <section>
                                <label htmlFor="name">NAME</label>
                                <input type="text" name="name" />
                            </section>
                            <section>
                                <label htmlFor="email">EMAIL</label>
                                <input type="text" name="email" />
                            </section>
                            <section>
                                <label htmlFor="password">PASSWORD</label>
                                <input type="text" name="password" />
                            </section>
                            {/* would switch back to login to signup */}
                            <button>SIGNUP</button>
                        </form>
                        <a onClick={switchLoginOrSignup}>LOGIN</a>
                    </section>
                </section>
            ) : (
                    <section className="loginContainer">
                        <section className="card">
                            <h1>LOGIN</h1>
                            <form>
                                <section>
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="text" name="email" />
                                </section>
                                <section>
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="text" name="password" />
                                </section>
                                <button>LOGIN</button>
                            </form>
                            <a onClick={switchLoginOrSignup}>SIGNUP</a>
                        </section>
                    </section>
                ) 
            }
        </div>
    )
}





