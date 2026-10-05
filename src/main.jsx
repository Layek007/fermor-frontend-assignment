import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ArrowRight, Check, ChevronDown, Menu, X, Play,
  ShieldCheck, Sparkles, WalletCards, TrendingUp, CircleHelp
} from "lucide-react";
import "./styles.css";

const navItems = ["Product", "How it works", "For you", "About"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [faqOpen, setFaqOpen] = useState(null);

  const tabs = ["Overview", "Spending", "Goals"];
  const faqs = [
    ["What is Fermor?", "Fermor is a simple financial workspace designed to help you understand your money, make better decisions and keep moving toward your goals."],
    ["Is Fermor a bank?", "No. Fermor is designed as a financial planning and insights experience. It helps you see the bigger picture without making money management feel complicated."],
    ["Who is Fermor for?", "Anyone who wants a clearer view of their finances — from getting started with saving to building a more intentional long-term plan."],
    ["How does Fermor keep things simple?", "We focus on the few numbers and decisions that matter most, turning financial information into useful next steps instead of overwhelming dashboards."]
  ];

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Fermor home">
            <span className="brand-mark">f</span>
            <span>fermor</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a key={item} href={"#" + item.toLowerCase().replaceAll(" ", "-")} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a className="mobile-cta" href="#get-started">Get started <ArrowUpRight size={16}/></a>
          </div>

          <div className="nav-actions">
            <a className="login" href="#get-started">Log in</a>
            <a className="button button-dark nav-cta" href="#get-started">Get started <ArrowUpRight size={16}/></a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> Financial clarity, without the noise</div>
            <h1>Your money.<br/><em>Made clearer.</em></h1>
            <p className="hero-text">Fermor helps you understand where your money is going, make smarter decisions and build a plan that actually fits your life.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#get-started">Start planning <ArrowRight size={17}/></a>
              <a className="text-link" href="#how-it-works"><span className="play"><Play size={12} fill="currentColor"/></span> See how it works</a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack"><span>A</span><span>R</span><span>S</span><span>+</span></div>
              <div><strong>Built for real life.</strong><br/><span>Simple enough to use every day.</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-1"></div><div className="orbit orbit-2"></div>
            <div className="dashboard-card hero-card">
              <div className="card-top"><span>Net position</span><span className="tiny-pill">Today</span></div>
              <div className="big-number">₹8,42,560</div>
              <div className="positive"><TrendingUp size={14}/> +12.8% <span>this year</span></div>
              <div className="chart">
                <svg viewBox="0 0 520 170" preserveAspectRatio="none">
                  <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopOpacity=".22"/><stop offset="100%" stopOpacity="0"/></linearGradient></defs>
                  <path className="chart-area" d="M0 150 C40 142 55 120 90 128 S135 145 165 103 S205 96 235 109 S275 82 305 94 S345 74 375 78 S420 38 450 57 S490 30 520 12 L520 170 L0 170 Z"/>
                  <path className="chart-line" d="M0 150 C40 142 55 120 90 128 S135 145 165 103 S205 96 235 109 S275 82 305 94 S345 74 375 78 S420 38 450 57 S490 30 520 12"/>
                </svg>
              </div>
              <div className="chart-labels"><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span></div>
            </div>
            <div className="float-card goal-card">
              <div className="icon-box"><WalletCards size={18}/></div>
              <div><span>Home fund</span><strong>72% funded</strong></div>
              <div className="mini-ring"><span>72</span></div>
            </div>
            <div className="float-card insight-card">
              <div className="spark"><Sparkles size={17}/></div>
              <div><span>Fermor insight</span><strong>You can save ₹4,800 more this month.</strong></div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-row">
            <span>ONE VIEW. BETTER DECISIONS.</span>
            <div><b>save</b><b>plan</b><b>grow</b><b>repeat</b></div>
          </div>
        </section>

        <section className="section intro container" id="product">
          <div className="section-kicker">01 — The idea</div>
          <div className="intro-grid">
            <h2>Financial tools should help you think, <em>not think for you.</em></h2>
            <div>
              <p className="lead">Money gets complicated quickly. Different accounts, goals, subscriptions and plans all compete for attention.</p>
              <p>Fermor brings the important parts together and turns them into a calm, understandable picture — so you can spend with confidence and plan with intention.</p>
              <a className="arrow-link" href="#how-it-works">Discover Fermor <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="feature-section" id="how-it-works">
          <div className="container">
            <div className="feature-head">
              <div><div className="section-kicker">02 — How it works</div><h2>Less dashboard.<br/><em>More direction.</em></h2></div>
              <p>Fermor is built around the decisions you make, not the data you collect.</p>
            </div>
            <div className="steps">
              <article><span>01</span><div className="step-icon"><WalletCards/></div><h3>See the full picture</h3><p>Bring your money into one clear view and understand what is really happening.</p></article>
              <article><span>02</span><div className="step-icon"><Sparkles/></div><h3>Find what matters</h3><p>Spot patterns, opportunities and small changes that can make a real difference.</p></article>
              <article><span>03</span><div className="step-icon"><TrendingUp/></div><h3>Move with a plan</h3><p>Turn insights into goals and simple actions you can keep up over time.</p></article>
            </div>
          </div>
        </section>

        <section className="section dashboard-section container" id="for-you">
          <div className="section-kicker">03 — Your money, your way</div>
          <div className="dashboard-intro">
            <div><h2>A financial view<br/><em>that feels human.</em></h2></div>
            <p>Everything you need is close at hand. No financial jargon. No endless spreadsheets. Just a clearer way to make your next decision.</p>
          </div>
          <div className="product-window">
            <aside>
              <div className="side-brand"><span className="brand-mark">f</span> fermor</div>
              <div className="side-nav">{tabs.map(t => <button className={activeTab === t ? "active":""} key={t} onClick={() => setActiveTab(t)}>{t}</button>)}</div>
              <div className="side-help"><CircleHelp size={16}/> Need help?</div>
            </aside>
            <div className="app-main">
              <div className="app-head"><div><span>Good morning, Piyush</span><h3>{activeTab}</h3></div><div className="profile">PL</div></div>
              <div className="app-grid">
                <div className="app-balance"><span>Total balance</span><strong>₹8,42,560</strong><small><b>+12.8%</b> from last month</small></div>
                <div className="app-goal"><span>Goal progress</span><strong>₹7,20,000 <small>/ ₹10L</small></strong><div className="progress"><i style={{width:"72%"}}></i></div><small>72% of your target</small></div>
                <div className="app-chart"><div className="box-title">Money over time <span>Last 12 months⌄</span></div><div className="bars">{[35,48,40,55,62,52,70,66,82,72,91,98].map((h,i)=><i key={i} style={{height:h+"%"}}></i>)}</div></div>
                <div className="app-insight"><div className="insight-icon"><Sparkles size={18}/></div><span>One thing to know</span><h4>Your savings rate is up 6% this month.</h4><p>You're on track to reach your emergency fund goal 2 months early.</p><a href="#get-started">View plan <ArrowRight size={14}/></a></div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-wrap">
            <div className="quote-mark">“</div>
            <blockquote>We don't need more financial information. We need a better way to <em>understand it.</em></blockquote>
            <div className="quote-line"></div>
            <span>THE FERMOR PRINCIPLE</span>
          </div>
        </section>

        <section className="section principles container">
          <div className="section-kicker">04 — Built differently</div>
          <div className="principles-grid">
            <div><h2>Good money habits<br/><em>should feel good.</em></h2></div>
            <div className="principle-list">
              <div><ShieldCheck/><span><b>Private by design</b><small>Your financial picture stays yours.</small></span></div>
              <div><Sparkles/><span><b>Clear by default</b><small>Useful answers, without the noise.</small></span></div>
              <div><TrendingUp/><span><b>Made for progress</b><small>Small actions compound into bigger outcomes.</small></span></div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="about">
          <div className="container faq-grid">
            <div><div className="section-kicker">05 — Questions</div><h2>Still curious?</h2><p>We think good financial products should be easy to understand before you ever use them.</p></div>
            <div className="faqs">{faqs.map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><ChevronDown className={faqOpen===i?"rotated":""}/></button>{faqOpen===i && <p>{a}</p>}</div>)}</div>
          </div>
        </section>

        <section className="cta-section container" id="get-started">
          <div className="cta-box">
            <div className="eyebrow light"><span className="dot"></span> Your next chapter starts here</div>
            <h2>Make money feel<br/><em>less complicated.</em></h2>
            <p>A clearer view today can make a very different tomorrow.</p>
            <a className="button button-light" href="#top">Get started <ArrowUpRight size={17}/></a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">f</span><span>fermor</span></a><span>Better money decisions, made simpler.</span><div className="footer-links"><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#about">About</a></div></div>
        <div className="footer-bottom"><span>© 2026 Fermor. Concept website created for frontend assignment.</span><span>Privacy · Terms</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
