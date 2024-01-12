import {aboutStyles} from './NoteStyle'

const About = () => {
  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>
        <span style={aboutStyles.decorativeSymbol}>📝</span>Welcome to NoteZilla
        - Sticky Notes App!
      </h1>
      <div style={aboutStyles.section}>
        <div style={aboutStyles.subsection}>
          <h2>Our Mission</h2>
          <p style={aboutStyles.paragraph}>
            At NoteZilla - Sticky Notes App, our mission is to help users stay
            organized and productive with a simple and intuitive sticky note
            platform. We aim to provide a virtual space where you can jot down
            your thoughts, ideas, and to-do lists.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Easy-to-Use Interface</h2>
          <p style={aboutStyles.paragraph}>
            We've designed our app with a user-friendly interface, making it
            effortless to create, edit, and organize your sticky notes. Our
            focus is on simplicity and efficiency to enhance your productivity.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Stay Organized</h2>
          <p style={aboutStyles.paragraph}>
            With NoteZilla - Sticky Notes App, you can categorize and color-code
            your notes, making it easier to stay organized and find your
            important information in seconds. Additionally, you can set priority
            levels and expected completion dates for your notes.
          </p>
        </div>
        <div style={aboutStyles.subsection}>
          <h2>Join Us</h2>
          <p style={aboutStyles.paragraph}>
            We hope you find NoteZilla - Sticky Notes App helpful in simplifying
            your daily life. Join us in making note-taking a delightful
            experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;