export async function GET() {
    const res = await fetch("https://dummyjson.com/products")
    return Response.json(res.data);
}