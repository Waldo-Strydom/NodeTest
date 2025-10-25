import http from 'node:http'
import { data } from './db.js'


const PORT = 3000

const server = http.createServer(async(req,res)=>{
    const facts = await data


    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const pathname = urlObj.pathname

    if(pathname==="/api" && req.method ==="GET"){
    let payload = facts[0]    
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*') // allow access from any domain
    res.setHeader('Access-Control-Allow-Methods', 'GET') // GET method only
    res.statusCode = 200
    res.end(JSON.stringify(payload))
    }else{
        res.end(`${pathname}`)
    }





})


server.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`)
})