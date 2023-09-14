export default function Login(){
    return(
        <section>
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
            </form>
            <a>SIGNUP</a>
        </section>
    )
}