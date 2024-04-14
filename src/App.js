import './App.css';
import { sources } from "./Sources.js"
import { research } from "./Research.js"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AccountLogo from "./icons/account.svg"
import ReadingLogo from "./icons/reading.svg"
import ChatLogo from "./icons/chat.svg"
import CalendarLogo from "./icons/calendar.svg"
import BookLogo from "./icons/book.svg"
import HealthLogo from "./icons/health.svg"
import PhoneLogo from "./icons/phone.svg"
import WowLogo from "./icons/wow.svg"

function App() {
  const everyoneInfo = sources.filter((source) => source.everyone === true)
  const diagnosesInfo = sources.filter((source) => source.diagnoses === true);
  const dailyInfo = sources.filter((source) => source.daily === true);
  const crisisInfo = sources.filter((source) => source.crisis === true);

  function getIcon(iconName) {
    switch(iconName) {
      case "AccountLogo":
        return AccountLogo;
      case "HealthLogo":
        return HealthLogo;
      case "BookLogo":
        return BookLogo;
      case "CalendarLogo":
        return CalendarLogo;
      case "ChatLogo":
        return ChatLogo;
      case "ReadingLogo":
        return ReadingLogo;
        case "PhoneLogo":
          return PhoneLogo;
      default:
        return WowLogo;
    }
  }

  return (
    <div className="App">
      <div id="header-border">
          <div className="header-container">
            <div className="title-holder">
              <h1>
                <a className="header-text" href="/">UT Health Check</a>
              </h1>
              <h4 className='underline-text'>
                <a className="header-subtext" href="/">Mental health resources for people needing answers</a>
              </h4>
            </div>
            <div className="emergency-button">
              <a className="emergency-text" target="_blank" rel="noreferrer" href="https://988lifeline.org/chat/">Experiencing a mental health crisis?<br/> Click here or call 988</a>
            </div>
          </div>
      </div>
      <div className="body-container">
        <div className="item-holder">
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <section>
                <h3 className="menu-title">Mental Health Education</h3>
                <p className="menu-subtitle">General information for those seeking answers</p>
              </section>
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                {diagnosesInfo.map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                        <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
              <section>
                <h3 className="menu-title">Mental Health Disorder Management</h3>
                <p className="menu-subtitle">Daily practices for individuals with a diagnosed disorder</p>
              </section>
              </AccordionSummary>
              <AccordionDetails>
              <h3>Organized Resources</h3>
              <ul>
                {dailyInfo.filter((item) => item.practice === "organized").map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                        <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Personal Resources</h3>
              <ul>
                {dailyInfo.filter((item) => item.practice === "personal").map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                        <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
              <section>
                <h3 className="menu-title">General Mental Health Practices</h3>
                <p className="menu-subtitle">Beneficial practices for everyone</p>
              </section>
              </AccordionSummary>
              <AccordionDetails>
              <h3>Organized Resources</h3>
              <ul>
                {everyoneInfo.filter((item) => item.practice === "organized").map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                        <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Personal Resources</h3>
              <ul>
                {everyoneInfo.filter((item) => item.practice === "personal").map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                        <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
              <section>
                <h3 className="menu-title">Emergency Resources</h3>
                <p className="menu-subtitle">Help for those in crisis</p>
              </section>
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                {crisisInfo.map((c) => (
                  <li key={c.id} className="info-container">
                    <div className="icon-holder">
                      <img src={getIcon(c.icon)} alt={c.icon}></img>
                    </div>
                    <div className="info">
                      <h4 className="info-title">{c.title}:</h4>
                      <p className="info-description">{c.description}</p>
                      <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                    </div>
                  </li>
                ))}
              </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
              <section>
                <h3 className="menu-title">Research on Mental Health</h3>
                <p className="menu-subtitle">Academic papers for those interested</p>
              </section>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {research.map((c) => (
                    <li key={c.id} className="info-container">
                      <div className="icon-holder">
                        <img src={BookLogo} alt={c.icon}></img>
                      </div>
                      <div className="info">
                        <h4 className="info-title">{c.title}:</h4>
                        <p className="info-description">{c.description}</p>
                        {c.link && <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>}
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
