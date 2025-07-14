import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from './socket/socket.js';
import { Send, Users, Wifi, WifiOff } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const {
    socket,
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    setTyping,
  } = useSocket();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      connect(username.trim());
      setIsLoggedIn(true);
    }
  };

  // Handle logout
  const handleLogout = () => {
    disconnect();
    setIsLoggedIn(false);
    setUsername('');
  };

  // Handle message sending
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && isConnected) {
      sendMessage(message.trim());
      setMessage('');
      setTyping(false);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
        setTypingTimeout(null);
      }
    }
  };

  // Handle typing indicator
  const handleTyping = (e) => {
    setMessage(e.target.value);
    
    if (!isConnected) return;

    // Set typing indicator
    setTyping(true);

    // Clear existing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set new timeout to stop typing indicator
    const timeout = setTimeout(() => {
      setTyping(false);
    }, 1000);

    setTypingTimeout(timeout);
  };

  // Handle Enter key for sending message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Get user avatar initials
  const getUserInitials = (username) => {
    return username
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Welcome to Chat App</h1>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Enter your username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username"
                required
                autoFocus
              />
            </div>
            <button type="submit" className="login-button">
              Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Chat screen
  return (
    <div className="container">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <h1>Real-time Chat</h1>
          <div className="connection-status">
            {isConnected ? (
              <>
                <div className="status-indicator"></div>
                <Wifi size={16} />
                <span>Connected</span>
              </>
            ) : (
              <>
                <div className="status-indicator disconnected"></div>
                <WifiOff size={16} />
                <span>Disconnected</span>
              </>
            )}
          </div>
        </div>

        <div className="chat-content">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="users-section">
              <h3>Online Users ({users.length})</h3>
              <ul className="user-list">
                {users.map((user) => (
                  <li key={user.id} className="user-item">
                    <div className="user-avatar">
                      {getUserInitials(user.username)}
                    </div>
                    <span>{user.username}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Chat */}
          <div className="main-chat">
            {/* Messages */}
            <div className="messages-container">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${
                    msg.system
                      ? 'system'
                      : msg.senderId === socket.id
                      ? 'sent'
                      : 'received'
                  }`}
                >
                  {!msg.system && (
                    <div className="message-header">
                      <span>{msg.sender}</span>
                      <span className="message-time">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  )}
                  <div className="message-content">
                    {msg.message}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {typingUsers.length > 0 && (
                <div className="typing-indicator">
                  {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input-container">
              <form onSubmit={handleSendMessage} className="chat-input-form">
                <textarea
                  ref={inputRef}
                  className="chat-input"
                  value={message}
                  onChange={handleTyping}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={!isConnected}
                  rows={1}
                />
                <button
                  type="submit"
                  className="send-button"
                  disabled={!message.trim() || !isConnected}
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 