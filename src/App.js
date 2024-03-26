import './App.css';
import { sources } from "./Sources.js"
import { research } from "./Research.js"
import { body } from "./BodyText.js"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const everyoneInfo = sources.filter((source) => source.everyone === true)
  const diagnosesInfo = sources.filter((source) => source.diagnoses === true);
  const dailyInfo = sources.filter((source) => source.daily === true);
  const crisisInfo = sources.filter((source) => source.crisis === true);
  const bodyText = body;

  return (
    <div className="App">
      <div id="header-border">
          <div className="header-container">
            <div className="title-holder">
              <h1>
                <a className="header-text" href="/">UT Health Check</a>
              </h1>
              <h4 className='underline-text'>
                <a className="header-text" href="/">Mental health resources for people needing answers</a>
              </h4>
            </div>
            <div className="emergency-button">
              <a className="emergency-text" target="_blank" rel="noreferrer" href="https://988lifeline.org/chat/">Expiriencing a mental health crisis?<br/> Click here or call 988</a>
            </div>
          </div>
      </div>
      <div className="body-container">
        <div className="item-holder">
          <div className="body-text">
            <h3>{bodyText}</h3>
          </div>
          <div className="menu-holder">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
              <h3 className="menu-title">Daily practices for mental health disorder management</h3>
              </AccordionSummary>
              <AccordionDetails>
              <h4>Organized Practices</h4>
              <ul>
                {dailyInfo.filter((item) => item.practice === "organized").map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
                        <p className="info-description">{c.description}</p>
                        <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                      </div>
                  </li>
                ))}
              </ul>
              <h4>Personal Practices</h4>
              <ul>
                {dailyInfo.filter((item) => item.practice === "personal").map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
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
              <h3 className="menu-title">Mental health practices and info for everyone</h3>
              </AccordionSummary>
              <AccordionDetails>
              <h4>Organized Practices</h4>
              <ul>
                {everyoneInfo.filter((item) => item.practice === "organized").map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
                        <p className="info-description">{c.description}</p>
                        <a className='info-link' href={c.link} target="_blank" rel="noreferrer">Click here for more information →</a>
                      </div>
                  </li>
                ))}
              </ul>
              <h4>Personal Practices:</h4>
              <ul>
                {everyoneInfo.filter((item) => item.practice === "personal").map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
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
              <h3 className="menu-title">Emergency resources for those in crisis</h3>
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                {crisisInfo.map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
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
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h3 className="menu-title">Information on diagnosing mental health disorders</h3>
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                {diagnosesInfo.map((c) => (
                  <li key={c.id} className="info-container">
                      <div className="info">
                        <p className="info-title">{c.title}:</p>
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
              <h3 className="menu-title">Academic research on mental health</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {research.map((c) => (
                    <li key={c.id} className="info-container">
                        <div className="info">
                          <p className="info-title">{c.title}:</p>
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
