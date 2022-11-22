import socketIOClient from "socket.io-client"

let socket;

export const connectServer = () => {
    if (!socket) {
        socket = socketIOClient.connect(process.env.REACT_APP_BACKEND_URL)
    }
    return socket
}

export const disconnectServer = () => {
    if (socket) {
        socket.disconnect()
        socket = null
    }
}

export const addCommunicate = (key, func) => {
    if (socket) {
        socket.on(key, func)
    }
}