import {io} from "socket.io-client"

const socket = io("http://localhost:3000",{
     origin: "http://localhost:5173",
    methods: ["GET", "POST"],
})

export default socket;