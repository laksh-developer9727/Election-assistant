'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I am your Election Assistant. I can help you with voter registration, polling locations, identification requirements, and understanding your ballot for the upcoming general election. \n\nWhat would you like to know today?' 
    },
    {
      role: 'user',
      content: 'I just moved to a new state. How do I register to vote here?'
    },
    {
      role: 'assistant',
      content: 'Welcome to your new home! To register to vote in a new state, you typically have three options:\n\n• **Online**: Most states offer a secure online portal.\n• **By Mail**: Download and print the National Mail Voter Registration Form.\n• **In Person**: Visit your local DMV or election office.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    // Mock assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'That is a great question. Let me look up the specific requirements for your region. Could you please provide your state or ZIP code?' 
      }]);
    }, 1000);
  };

  return (
    <div className={styles.chatLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            Election<span>Assistant</span>
          </Link>
          <p className={styles.tagline}>Voter Support AI</p>
        </div>
        
        <nav className={styles.sideNav}>
          <p className={styles.navLabel}>Navigation</p>
          <Link href="/dashboard" className={styles.navLink}>
            <span className={styles.icon}>📊</span> Dashboard
          </Link>
          <Link href="/timeline" className={styles.navLink}>
            <span className={styles.icon}>📅</span> Timeline
          </Link>
          <Link href="/settings" className={styles.navLink}>
            <span className={styles.icon}>⚙️</span> Settings
          </Link>
          
          <p className={styles.navLabel}>Recent Chats</p>
          <div className={styles.recentChat}>
            <span className={styles.icon}>💬</span> Registration Help
          </div>
          <div className={styles.recentChat}>
            <span className={styles.icon}>💬</span> ID Requirements
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>LP</div>
            <div className={styles.userInfo}>
              <p className={styles.userName}>Lakshdeep</p>
              <p className={styles.userRole}>Voter</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className={styles.chatMain}>
        <header className={styles.chatHeader}>
          <h2>Active Consultation</h2>
          <div className={styles.headerActions}>
            <button className={styles.iconBtn}>🔍</button>
            <button className={styles.iconBtn}>📑</button>
          </div>
        </header>

        <div className={styles.messageArea}>
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.userMsg : styles.aiMsg}`}>
              <div className={`${styles.message} ${msg.role === 'user' ? '' : 'glass-card'}`}>
                {msg.role === 'assistant' && <div className={styles.aiBadge}>AI Assistant</div>}
                <p className={styles.msgText}>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.chatInputArea}>
          <div className="container">
            <form onSubmit={handleSendMessage} className={`${styles.inputContainer} glass-card`}>
              <button type="button" className={styles.attachBtn}>+</button>
              <input 
                type="text" 
                placeholder="Ask about registration, deadlines, or requirements..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className={styles.sendBtn}>Send</button>
            </form>
            <p className={styles.disclaimer}>
              AI-generated guidance is for informational purposes. Always verify with official state election offices.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ChatPage;
