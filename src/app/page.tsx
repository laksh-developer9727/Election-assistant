import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} animate-fade-in`}>
            <h1 className={styles.title}>Understand the <span>Vote.</span></h1>
            <p className={styles.subtitle}>
              Navigating democracy shouldn't be complicated. Our AI-powered assistant simplifies 
              state requirements, tracks local deadlines, and guides you through the entire voting process.
            </p>
            <div className={styles.heroActions}>
              <Link href="/chat" className={styles.btnMain}>Start AI Guidance</Link>
              <Link href="/timeline" className={styles.btnSecondary}>Explore Timeline</Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Master Your Civic Duty</h2>
          <p className={styles.sectionSubtitle}>Three pillars designed to ensure your voice is heard without the bureaucratic friction.</p>
          
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.iconWrapper}>🤖</div>
              <h3>AI Guided Assistant</h3>
              <p>Experience personalized voting guidance tailored to your specific eligibility. Our AI interprets complex laws into simple, actionable steps for you.</p>
            </div>
            
            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.iconWrapper}>📅</div>
              <h3>Election Timelines</h3>
              <p>Never miss a deadline again. Get interactive tracking for local, state, and federal elections based on your precise region.</p>
            </div>
            
            <div className={`${styles.featureCard} glass-card`}>
              <div className={styles.iconWrapper}>📜</div>
              <h3>Voting Requirements</h3>
              <p>Clear, concise help with state-specific documentation. We simplify registration forms and ID requirements so you're always prepared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section / Stats */}
      <section className={styles.trust}>
        <div className="container">
           <div className={`${styles.trustContent} glass-card`}>
             <div className={styles.trustItem}>
               <h4>Check Registration</h4>
               <p>Verify your status in under 30 seconds.</p>
             </div>
             <div className={styles.trustItem}>
               <h4>Discover Candidates</h4>
               <p>View non-partisan profiles and verified policy platforms.</p>
             </div>
             <div className={styles.trustItem}>
               <h4>Cast Your Ballot</h4>
               <p>Locate your precinct or request a mail-in ballot.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <div className={styles.footerInfo}>
              <h3>ElectionAssistant</h3>
              <p>Your non-partisan guide to democracy. Powered by AI, designed for citizens.</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/legal">Legal Jargon</Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2024 Election Process Assistant. Empowering voters across India.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
