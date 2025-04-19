import React from "react";
import Link from "next/link";
import "@/routes/Home.css";
import "@/routes/Blogs.css";

export default function JobSearch2024() {
  return (
    <div className={"Root-header Home"}>
      <div className={"blog-body"}>
        <h1>job search 2024</h1>
        <p>
          Well, after a five-month job search, it’s finally over - tomorrow will
          be my first day at{" "}
          <a href={"https://sagomini.com/"} target="_blank" rel={"noreferrer"}>
            Sago Mini
          </a>{" "}
          as a Unity developer. This process felt very difficult for me, and as
          my first full-time job search, there was a lot for me to learn. I also
          had some specific criteria - mainly to do work that (to me) has a
          positive societal impact - that narrowed my options and took time to
          explore. My job search revealed the following questions and helped me
          begin to answer them:
        </p>
        <ol>
          <li>what jobs do I want?</li>
          <li>do those jobs exist?</li>
          <li>can I get those jobs?</li>
        </ol>
        <p>
          I hope these guiding questions and my thoughts on them help you
          navigate your own job search and give you a fresh perspective on the
          process. Good luck!
        </p>
        <h2>1. what jobs do I want?</h2>
        <p>
          I started with this question since my goal was to make a career switch
          out of the games industry and into a field where I could have the
          social impact I wanted. I assumed that the culture of any workplace
          making a positive impact would be one that I&apos;d enjoy, and I felt
          that any developer salary would be enough for my needs unless it was
          so far below market rate that it implied that my skills weren&apos;t
          being valued. The factors that I considered important in a job were:
        </p>
        <ul>
          <li>culture</li>
          <ul>
            <li>coworkers/team</li>
            <li>manager</li>
            <li>crunch and stress</li>
            <li>
              &apos;tech company&apos; or &apos;company that uses tech&apos;
            </li>
          </ul>
          <li>
            compensation
            <ul>
              <li>salary</li>
              <li>vacation</li>
              <li>bonuses</li>
              <li>stocks</li>
            </ul>
          </li>
          <li>opportunities for growth</li>
          <ul>
            <li>tech stack</li>
            <li>high-visibility work</li>
            <li>opportunities to take responsibility</li>
            <li>mentorship</li>
            <li>time and resources for learning</li>
          </ul>
          <li>
            logistics
            <ul>
              <li>remote vs. hybrid vs. in-person</li>
              <li>flexible hours</li>
              <li>on-call responsibilities</li>
            </ul>
          </li>
        </ul>
        <h2>2. do those jobs exist?</h2>
        <p>
          To answer this, I had to do a market analysis to determine if there
          was an abundance of jobs that met my criteria. Before starting down a
          career path, I wanted to make sure that it would be able to sustain me
          both now and in the future. My new field of work would need to have
          reliable and long-term financial growth in order to have consistent
          job opportunities, but meeting this requirement proved to be very
          difficult.
        </p>
        <p>
          Initially, I wanted to work at a nonprofit so that I could be almost
          certain that my efforts would make the world a better place. Tech
          nonprofits are rare, and over time I found that many are funded in a
          way that sustains them but does not allow for growth (i.e. hiring).
          Compared to the for-profit sector, there&apos;s simply an order of
          magnitude less money to be found in philanthropy and government
          grants. As a result, there&apos;s an order of magnitude more jobs at
          for-profit companies.
        </p>
        <p>
          As a result, you&apos;ll likely find your next job at a for-profit
          company where profitability competes with other factors that may
          matter more to you. This is a grey area that I find hard to navigate,
          and it&apos;s often unclear where to draw the line between what is and
          isn&apos;t personally acceptable. I fully expect this to be a lifelong
          balancing act between work I feel good about doing and work that can
          provide for me.
        </p>
        <h2>3. can I get those jobs?</h2>
        {/*    the biggest risk is hiring someone totally wrong, either incompetent or bad to work with*/}
        <p>
          I started my search optimistic about moving away from game dev and
          finding a job using a more mainstream tech stack. I was confident that
          I&apos;d quickly pick up this new stack, and I believed that the vast
          majority of my skills and knowledge were highly transferable. While my
          self-confidence and belief in transferable skills have remained, my
          optimism about mobility in the job market was totally flawed and led
          to me adopting what I call &quot;the pessimistic perspective.&quot;
        </p>
        <p>
          This perspective is based on the idea that companies prioritize risk
          aversion over everything else when hiring, and by a huge margin. The
          risk of hiring the wrong person - they could be incompetent, not a
          good team player, not focused on work, etc. - is so severe that
          you&apos;re only competitive for a role if you can build a high degree
          of trust by:
        </p>
        <ul>
          <li>having an exact skills and experience match</li>
          <li>proving your reliability through your work history</li>
          <li>being friendly, communicative, and agreeable</li>
          <li>showing interest in the company and role</li>
        </ul>
        <p>
          The exception to this rule is when you&apos;ve already built trust
          with a person who can vouch for you. Someone who knows you, especially
          if you&apos;ve already worked together, can make all the difference,
          and they can also give you honest insights into what it&apos;s like at
          their workplace.
        </p>
        <p>
          This leads to my most important and positive takeaway from the
          pessimistic perspective and my job search as a whole: a kind person
          who is generous with their time and energy is the key to finding a job
          and enjoying work (and the rest of life). Seek out people who you feel
          good around and help each other out. Being an unemployed job-seeker is
          hard; you really feel like the lowest of the low, and most of your
          applications, emails, and messages will go unanswered. It will pass
          eventually, though, and when it does, I hope you can pay it forward
          and give your time to those who need your help.
        </p>
        <p>
          I hope this was helpful, and please{" "}
          <Link href={"/contact"}>get in touch</Link> with any thoughts. Thanks
          for reading.
        </p>
      </div>
    </div>
  );
}
