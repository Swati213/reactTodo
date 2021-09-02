import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="cont">
      <h2>This is About page</h2>
      <div className="content">
        <p>
          When it comes to to-do lists, everyone has different criteria. We kept
          this in mind as we tested apps and noticed a few features that made
          certain ones out
        </p>
        <p>The best to-do list apps:</p>
      </div>
      <div className="card">
        
        <ul className="desc ">
          <li>
            <span> Make it fast to add and organize tasks.</span> Ideally, a
            task is added and categorized in a couple taps or keystrokes.
          </li>
          <li>
            <span>Offer multiple ways to organize your tasks.</span> Tags,
            lists, projects, and due dates are all helpful, and the best apps
            offer at least a few categories like this.
          </li>
          <li>
            <span>Remind you about self-imposed deadlines.</span> Notifications,
            widgets, emails—the best applications make it obvious when something
            needs to be completed.
          </li>
          <li>
            <span>Offer clean user interfaces.</span> Well-designed to-do apps
            fit into your workflow so you can get back to what you're supposed
            to be doing.
          </li>
          <li>
            <span>Sync between every platform you use.</span> Which platforms
            will depend on what you personally use, but we didn't consider
            anything that doesn't sync between desktop and mobile.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
