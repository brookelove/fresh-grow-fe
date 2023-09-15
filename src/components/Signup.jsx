import "../assets/CSS/components/Login.css"

export default function Signup(){
    return(
        <section>
            <h1>SIGNUP</h1>
            <form>
            <section>
                    <label for="name">NAME</label>
                    <input type="text" name="name"/>
                </section>
                <section>
                    <label for="email">EMAIL</label>
                    <input type="text" name="email"/>
                </section>
                <section>
                    <label for="password">PASSWORD</label>
                    <input type="text" name="PASSWORD"/>
                </section>
            </form>
            <a>Already Have an Account, Login</a>
        </section>
    )
}