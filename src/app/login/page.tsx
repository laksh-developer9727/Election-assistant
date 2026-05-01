'use client';

import Link from 'next/link';
import styles from './page.module.css';

const LoginPage = () => {
  return (
    <main className={styles.loginLayout}>
      <div className={styles.loginContainer}>
        <div className={`${styles.loginCard} glass-card animate-fade-in`}>
          <div className={styles.header}>
            <Link href="/" className={styles.logo}>
              Election<span>Assistant</span>
            </Link>
            <h1>Welcome Back</h1>
            <p>Access your personal election roadmap and AI assistant.</p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="name@example.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            <div className={styles.formActions}>
              <label className={styles.rememberMe}>
                <input type="checkbox" /> Remember me
              </label>
              <Link href="/forgot-password" className={styles.forgotPass}>Forgot password?</Link>
            </div>
            <button type="submit" className={styles.submitBtn}>Sign In</button>
          </form>

          <div className={styles.divider}>
            <span>Or continue with</span>
          </div>

          <div className={styles.socialAuth}>
            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>G</span> Google
            </button>
            <button className={styles.socialBtn}>
              <span className={styles.socialIcon}>f</span> Facebook
            </button>
          </div>

          <p className={styles.signupPrompt}>
            Don&apos;t have an account? <Link href="/signup">Create one for free</Link>
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>
    </main>
  );
};

export default LoginPage;
