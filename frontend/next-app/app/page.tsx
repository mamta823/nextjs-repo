import Image from "next/image";

export default async function Home() {
  const blogs= await fetchBlogs()
  console.log(blogs,"blogss")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    </main>
  );
}
async function fetchBlogs(){
const options={
  headers:{
    Authorization:`Bearer ${process.env.STRAPI_API_TOKEN}`
  }
}
try{
const res = await fetch ("http://127.0.0.1:1337/api/blogs",options)
const format = await res.json()
console.log(format,"format")
}catch(err){
  console.log(err,"err")
}
}