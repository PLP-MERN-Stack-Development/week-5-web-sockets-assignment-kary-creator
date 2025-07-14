# 🔄 Real-Time Chat Application with Socket.io

A modern, real-time chat application built with Node.js, Express, Socket.io, and React. This application demonstrates bidirectional communication between clients and server, implementing features like live messaging, notifications, and online status updates.

## ✨ Features Implemented

### ✅ Core Features
- **Real-time messaging** - Instant message delivery using Socket.io
- **User authentication** - Simple username-based authentication
- **Global chat room** - All users can send and receive messages
- **Message display** - Messages show sender name and timestamp
- **Typing indicators** - Shows when users are composing messages
- **Online/offline status** - Real-time user status updates
- **Connection status** - Visual indicator of connection state

### ✅ Advanced Features
- **Private messaging** - Direct messages between users
- **User list sidebar** - Shows all online users with avatars
- **Auto-scroll** - Messages automatically scroll to bottom
- **Responsive design** - Works on desktop and mobile devices
- **Message timestamps** - Each message shows when it was sent
- **System messages** - Notifications when users join/leave

### ✅ User Experience Features
- **Modern UI** - Beautiful gradient design with smooth animations
- **Real-time notifications** - Visual feedback for all events
- **Keyboard shortcuts** - Enter to send, Shift+Enter for new line
- **Connection handling** - Automatic reconnection on disconnection
- **Loading states** - Proper disabled states when disconnected
- **Mobile responsive** - Optimized for all screen sizes

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Socket.io-client** - Client-side Socket.io
- **Lucide React** - Icon library
- **CSS3** - Modern styling with gradients and animations

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd week-5-web-sockets-assignment-kary-creator
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create `server/.env`:
   ```
   PORT=5000
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   ```

   Create `client/.env`:
   ```
   VITE_SOCKET_URL=http://localhost:5000
   ```

5. **Start the development servers**

   In the server directory:
   ```bash
   npm run dev
   ```

   In the client directory (new terminal):
   ```bash
   npm run dev
   ```

6. **Open the application**
   - Server will run on: http://localhost:5000
   - Client will run on: http://localhost:5173
   - Open http://localhost:5173 in your browser

## 📱 How to Use

1. **Join the Chat**
   - Enter your username on the login screen
   - Click "Join Chat" to enter the chat room

2. **Send Messages**
   - Type your message in the input field
   - Press Enter or click the send button
   - Messages appear instantly for all users

3. **View Online Users**
   - See all connected users in the sidebar
   - User avatars show initials of their username

4. **Typing Indicators**
   - See when other users are typing
   - Your typing status is shown to others

5. **Connection Status**
   - Green indicator shows you're connected
   - Red indicator shows disconnection

## 🏗️ Project Structure

```
week-5-web-sockets-assignment-kary-creator/
├── client/                 # React frontend
│   ├── src/
│   │   ├── socket/
│   │   │   └── socket.js   # Socket.io client configuration
│   │   ├── App.jsx         # Main React component
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Client dependencies
│   ├── vite.config.js      # Vite configuration
│   └── index.html          # HTML template
├── server/                 # Node.js backend
│   ├── server.js           # Express and Socket.io server
│   └── package.json        # Server dependencies
├── README.md               # Project documentation
└── Week5-Assignment.md     # Assignment requirements
```

## 🔧 API Endpoints

### Server Routes
- `GET /` - Server status
- `GET /api/messages` - Get all messages
- `GET /api/users` - Get online users

### Socket Events

#### Client to Server
- `user_join` - Join chat with username
- `send_message` - Send a message
- `private_message` - Send private message
- `typing` - Update typing status

#### Server to Client
- `user_list` - Updated list of online users
- `receive_message` - New message received
- `private_message` - Private message received
- `user_joined` - User joined notification
- `user_left` - User left notification
- `typing_users` - Updated typing indicators

## 🎨 Design Features

- **Modern gradient design** - Purple to blue gradient theme
- **Responsive layout** - Adapts to different screen sizes
- **Smooth animations** - Hover effects and transitions
- **User avatars** - Generated from username initials
- **Message bubbles** - Different styles for sent/received messages
- **Status indicators** - Visual connection and typing status

## 🔒 Security Features

- **CORS configuration** - Proper cross-origin handling
- **Input validation** - Server-side message validation
- **Connection limits** - Message storage limits to prevent memory issues
- **User authentication** - Username-based identification

## 🚀 Deployment

### Server Deployment (Render/Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the server directory
3. Update client environment variables with production server URL

### Client Deployment (Vercel/Netlify)
1. Build the client: `npm run build`
2. Deploy the build directory
3. Set environment variables for production

## 📊 Performance Optimizations

- **Message pagination** - Limits stored messages to prevent memory issues
- **Reconnection logic** - Automatic reconnection on disconnection
- **Efficient rendering** - React optimizations for message updates
- **Minimal dependencies** - Lightweight package selection

## 🧪 Testing

To test the application:

1. Open multiple browser tabs/windows
2. Join with different usernames
3. Send messages and observe real-time updates
4. Test typing indicators
5. Test disconnection/reconnection
6. Test on mobile devices

## 📝 Future Enhancements

- [ ] File/image sharing
- [ ] Message reactions (like, love, etc.)
- [ ] Read receipts
- [ ] Multiple chat rooms
- [ ] Message search functionality
- [ ] User profiles and avatars
- [ ] Message encryption
- [ ] Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the Week 5 Web Sockets assignment.

---

**Built with ❤️ using Socket.io and React** 