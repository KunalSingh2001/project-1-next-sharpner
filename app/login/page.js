"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const router = useRouter();

    function validate() {
        let err = {};

        if (!formValues.email) {
            err.email = "Value for email is required";
        }

        if (!formValues.password) {
            err.password = "Value for password is required";
        } else {
            if (formValues.password.length < 6) {
                err.password = "Password needs to be 6 characters or more";
            }
        }

        return err;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        let err = validate();
        if (Object.keys(err).length > 0) {
            return;
        }

        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: formValues.email,
                password: formValues.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            router.push("/dashboard");
        } else {
            alert("Login Failed")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <form>
                <label>Email:</label>
                <input
                    type="email"
                    value={formValues.email}
                    onChange={(e) =>
                        setFormValues({ ...formValues, email: e.target.value })
                    }
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={formValues.password}
                    onChange={(e) =>
                        setFormValues({ ...formValues, password: e.target.value })
                    }
                />

                <button type="submit" onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    );
}