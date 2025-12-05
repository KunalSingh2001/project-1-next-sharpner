import { signTotoken } from "../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, password } = await request.json();

    if (email !== "abc@gmail.com" || password !== "abc123456") {
        return NextResponse.json(
            { error: "Invalid Credentials" },
            { status: 401 }
        );
    }
    console.log("enter")
    // const token = await signTotoken({ email, role: "user" });

    const res = NextResponse.json({ message: "Login Successful" });

    // res.cookies.set("token", token, {
    //     httpOnly: true,
    //     maxAge: 60 * 60, 
    //     path: "/",
    // });

    return res;
}
