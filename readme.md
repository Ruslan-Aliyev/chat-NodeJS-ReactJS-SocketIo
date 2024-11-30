# Backend

Port 3000

Uses `socket.io`

# Frontend

Port 5173

Uses `socket.io-client`

# Basics

When new client joins:
- Frontend: `on.('getId'`
- Backend: `.on('connection'`

When a message is SENT:
- Sender Frontend `emit` `sendDataClient`
- Backend listens `on` `sendDataClient`
- Both Sender and Receiver Frontends gets the chat `on` `sendDataServer`

So `sendDataClient` is when client sends data,    
and `sendDataServer` is when server sends data.

# Tutorials

- https://viblo.asia/p/lap-trinh-ung-dung-chat-real-time-voi-reactjs-nodejs-va-socketio-ORNZqVeMl0n (Very Good)
- https://socket.io/how-to/use-with-react (Theory)
- https://www.youtube.com/playlist?list=PLm0V0R4tDtF4ak0EVxS_Rt6IcjaYryd11 (More detail, for spare time)
- https://www.youtube.com/playlist?list=PL63c_Ws9ecIRZ6njHRi3cuCkNSfzqyLBn (More detail, for spare time)
