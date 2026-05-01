'use client';

import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const stages = [
  {
    id: 1,
    title: 'Voter Registration',
    date: 'January 1 - March 15, 2024',
    description: 'Open enrollment for all eligible citizens to register for the upcoming general election through online and physical portals.',
    status: 'completed',
    icon: '👤'
  },
  {
    id: 2,
    title: 'Candidate Nomination',
    date: 'March 20 - April 10, 2024',
    description: 'The period for candidates to file their official nomination papers and meet eligibility requirements.',
    requirements: [
      'Minimum of 50,000 verified signatures',
      'Certified financial disclosure report',
      'Citizenship and residency validation'
    ],
    status: 'active',
    icon: '📝'
  },
  {
    id: 3,
    title: 'Official Campaigning',
    date: 'April 15 - May 15, 2024',
    description: 'Window for certified candidates to engage in public debate, media outreach, and town hall sessions.',
    status: 'upcoming',
    icon: '📢'
  },
  {
    id: 4,
    title: 'National Voting Day',
    date: 'May 20, 2024',
    description: 'The primary election date where polls will be open from 7:00 AM to 8:00 PM nationwide.',
    status: 'upcoming',
    icon: '🗳️'
  },
  {
    id: 5,
    title: 'Final Tabulation',
    date: 'May 25, 2024',
    description: 'The official release of verified election results and victory certifications.',
    status: 'upcoming',
    icon: '📊'
  }
];

const TimelinePage = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className="animate-fade-in">Election <span>Timeline</span></h1>
          <p className={styles.subtitle}>Track the critical milestones of the 2024 Election cycle. Stay informed about deadlines, nomination windows, and voting days.</p>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineContainer}>
            {stages.map((stage) => (
              <div key={stage.id} className={`${styles.timelineItem} ${styles[stage.status]}`}>
                <div className={styles.timelineMarker}>
                  <div className={styles.icon}>{stage.icon}</div>
                  <div className={styles.line}></div>
                </div>
                
                <div className={`${styles.timelineContent} glass-card animate-fade-in`}>
                  <div className={styles.stageHeader}>
                    <span className={styles.badge}>{stage.status}</span>
                    <span className={styles.date}>{stage.date}</span>
                  </div>
                  <h3>{stage.id}. {stage.title}</h3>
                  <p>{stage.description}</p>
                  
                  {stage.requirements && (
                    <div className={styles.requirements}>
                      <h4>Mandatory Requirements</h4>
                      <ul>
                        {stage.requirements.map((req, i) => (
                          <li key={i}>✅ {req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className={styles.actions}>
                    <button className={styles.btnAction}>Remind Me</button>
                    <button className={styles.btnLink}>Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.notifications}>
        <div className="container">
          <div className={`${styles.notifCard} glass-card`}>
            <h3>Never Miss an Update</h3>
            <p>Set up SMS or email notifications for every upcoming milestone in your district.</p>
            <div className={styles.notifActions}>
              <button className={styles.btnPrimary}>Enable Notifications</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TimelinePage;
