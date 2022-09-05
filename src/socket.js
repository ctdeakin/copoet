import io from 'socket.io-client'

let socket = io(window.location.origin)

export const initSocket = (socket, currentPoem) => {
    socket.on("connect", () => {console.log("Connected~")
    
  })
  }
export default socket
