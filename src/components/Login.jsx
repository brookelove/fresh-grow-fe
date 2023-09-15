import "../assets/CSS/components/Login.css"

export default function Login(){
    return(
        <section className="loginContainer">
            <section className="card">
            <h1>LOGIN</h1>
            <form>
                <section>
                    <label for="email" >EMAIL</label>
                    <input type="text" name="email"/>
                </section>
                <section>
                    <label for="password">PASSWORD</label>
                    <input type="text" name="PASSWORD"/>
                </section>
                <button>LOGIN</button>
            </form>
            <a >SIGNUP</a>
            </section>
        </section>
    )
}