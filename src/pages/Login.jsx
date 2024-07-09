import React, { useState } from 'react'

import { Input } from '../components'

const Login = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='w-screen min-h-screen h-auto flex flex-col justify-center items-center bg-bgColor'>
            <div className='w-[400px] h-auto flex justify-center items-center rounded-2xl border border-gray-300 drop-shadow-lg bg-white p-4'>
                <form className='w-full h-full flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-4xl font-bold'>Login</h1>
                    <Input
                        type={"text"}
                        id={"usernameOrEmail"}
                        name={"usernameOrEmail"}
                        label={"Username or Email"}
                        isRequired={true}
                        stateValue={usernameOrEmail}
                        stateFunction={setUsernameOrEmail}
                    />
                    <Input
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        label={"Password"}
                        isRequired={true}
                        stateValue={password}
                        stateFunction={setPassword}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login