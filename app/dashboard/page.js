"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    async function onClickHandler(e) {
        e.preventDefault();

        let res = await fetch("/api/logout", {
            method: "POST",
        });

        if (res.ok) {
            router.push("/login");
        } else {
            alert("Logout not successful");
        }
    }

    return (
        <div>
            <button onClick={onClickHandler}>Logout</button>
        </div>
    );
}
