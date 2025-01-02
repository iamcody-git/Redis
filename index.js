import client from "./client.js";

const init = async()=>{

    await client.set("msg:3", "hello from cody");
    await client.set("name:4","jack");

    const result = await client.get("msg:2");
    console.log("Result ->", result);

}

init();