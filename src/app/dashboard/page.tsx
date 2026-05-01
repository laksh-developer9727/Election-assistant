'use client';

import Link from 'next/link';
import styles from './page.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboardLayout}>
      {/* Sidebar - Reusing styles but specialized for dashboard */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            Election<span>Assistant</span>
          </Link>
          <p className={styles.tagline}>The Sophisticated Navigator</p>
        </div>
        
        <nav className={styles.sideNav}>
          <Link href="/dashboard" className={`${styles.navLink} ${styles.active}`}>
            <span className={styles.icon}>📊</span> Dashboard
          </Link>
          <Link href="/learning" className={styles.navLink}>
            <span className={styles.icon}>🎓</span> Learning Progress
          </Link>
          <Link href="/guides" className={styles.navLink}>
            <span className={styles.icon}>🔖</span> Saved Guides
          </Link>
          <Link href="/chat" className={styles.navLink}>
            <span className={styles.icon}>💬</span> AI History
          </Link>
          <Link href="/timeline" className={styles.navLink}>
            <span className={styles.icon}>📅</span> Elections
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/settings" className={styles.navLink}>
            <span className={styles.icon}>⚙️</span> Settings
          </Link>
          <Link href="/support" className={styles.navLink}>
            <span className={styles.icon}>❓</span> Support
          </Link>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.greeting}>
            <h1>Good Morning, <span>Citizen</span></h1>
            <p>Here is your personal election roadmap for the upcoming cycle.</p>
          </div>
          <div className={styles.userAction}>
            <div className={styles.avatar}>LP</div>
          </div>
        </header>

        <div className={styles.dashboardGrid}>
          {/* Urgent Notification */}
          <div className={`${styles.card} ${styles.urgent} glass-card animate-fade-in`}>
            <div className={styles.cardHeader}>
              <span className={styles.urgentBadge}>Urgent Action</span>
              <h3>Registration Deadline Looming</h3>
            </div>
            <p>The primary election registration in your district closes in 48 hours. Ensure your details are up to date.</p>
            <button className={styles.btnAccent}>Register Now</button>
          </div>

          {/* Progress Card */}
          <div className={`${styles.card} glass-card animate-fade-in`}>
            <h3>Advance Your Knowledge</h3>
            <div className={styles.progressSection}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '65%' }}></div>
              </div>
              <p className={styles.progressText}>65% Complete</p>
            </div>
            <p>Complete the remaining modules on &apos;Local Tax Laws&apos; and &apos;Council Composition&apos; to earn your Certified Voter badge.</p>
            <Link href="/learning" className={styles.cardLink}>Resume Learning →</Link>
          </div>

          {/* Timeline Card */}
          <div className={`${styles.card} ${styles.span2} glass-card animate-fade-in`}>
            <h3>Upcoming Election Timeline</h3>
            <div className={styles.miniTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.date}>Oct 12, 2023</div>
                <div className={styles.event}>
                  <h4>Mail-in Ballot Application Opens</h4>
                  <p>Requested ballots will be processed within 5 business days.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.date}>Nov 04, 2023</div>
                <div className={styles.event}>
                  <h4>Early Voting Period Starts</h4>
                  <p>Check local centers for updated weekend hours.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.date}>Nov 14, 2023</div>
                <div className={styles.event}>
                  <h4>General Election Day</h4>
                  <p>Polls open from 7:00 AM to 8:00 PM IST.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bookmarked Guides */}
          <div className={`${styles.card} glass-card animate-fade-in`}>
            <h3>Bookmarked Guides</h3>
            <div className={styles.guideList}>
              <div className={styles.guideItem}>
                <h4>Mail-in Voting 101</h4>
                <p>Step-by-step guide on ballot requests.</p>
              </div>
              <div className={styles.guideItem}>
                <h4>ID Requirements</h4>
                <p>Specific documentation needed for your state.</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`${styles.card} glass-card animate-fade-in`}>
            <h3>Recent AI Consultation</h3>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityInfo}>
                  <h4>Registration Help</h4>
                  <span>2 days ago</span>
                </div>
                <p>&quot;How do I change my address?&quot;</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityInfo}>
                  <h4>Polling Location</h4>
                  <span>1 week ago</span>
                </div>
                <p>&quot;Find the nearest early voting center...&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
