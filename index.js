/**
 * Main page building and logic
 */

// Styles
const BACKGROUND_COLOR = '#FDEEC7';

// Dictionary index
const IDX_QUESTION_TEXT = 0;
const IDX_WEIGHTING     = 1;

// Data structure containing all the questions and their weights
const QUESTIONS = [
  [
    'Held hands romantically?',
    1
  ],
  [
    'Been on a date?',
    1
  ],
  [
    'Been in a relationship?',
    5
  ],
  [
    'Danced without leaving room for Jesus?',
    2
  ],
  [
    'Kissed a non-family member?',
    2
  ],
  [
    'Kissed a non-family member on the lips?',
    2
  ],
  [
    'French kissed?',
    3
  ],
  [
    'French kissed in public?',
    3
  ],
  [
    'Kissed on the neck?',
    3
  ],
  [
    'Kissed horizontally?',
    3
  ],
  [
    'Given or received a hickey?',
    3
  ],
  [
    'Kissed or been kissed on the breast?',
    4
  ],
  [
    'Kissed someone below the belt?',
    4
  ],
  [
    'Kissed for more than two hours consecutively?',
    3
  ],
  [
    'Played a game involving stripping?',
    3
  ],
  [
    'Seen or been seen by another person in a sensual context?',
    3
  ],
  [
    'Masturbated?',
    2
  ],
  [
    'Masturbated to a picture or video?',
    2
  ],
  [
    'Masturbated while someone else was in the room?',
    4
  ],
  [
    'Been caught masturbating?',
    3
  ],
  [
    'Masturbated with an inanimate object?',
    3
  ],
  [
    'Seen or read pornographic material?',
    2
  ],
  [
    'Massaged or been massaged sensually?',
    3
  ],
  [
    'Gone through the motions of intercourse while fully dressed?',
    3
  ],
  [
    'Undressed or been undressed by a MPS (member of the preferred sex)?',
    2
  ],
  [
    'Showered with a MPS?',
    4
  ],
  [
    'Fondled or had your butt cheeks fondled?',
    3
  ],
  [
    'Fondled or had your breasts fondled?',
    3
  ],
  [
    'Fondled or had your genitals fondled?',
    4
  ],
  [
    'Had or given "blue balls"?',
    4
  ],
  [
    'Had an orgasm due to someone else\'s manipulations?',
    5
  ],
  [
    'Sent a sexually explicit text or instant message?',
    3
  ],
  [
    'Sent or received sexually explicit photographs?',
    4
  ],
  [
    'Engaged in sexually explicit activity over video chat?',
    4
  ],
  [
    'Cheated on a significant other during a relationship?',
    7
  ],
  [
    'Purchased contraceptives?',
    1
  ],
  [
    'Gave oral sex?',
    5
  ],
  [
    'Received oral sex?',
    5
  ],
  [
    'Ingested someone else\'s genital secretion?',
    5
  ],
  [
    'Used a sex toy with a partner?',
    3
  ],
  [
    'Spent the night with a MPS?',
    4
  ],
  [
    'Been walked in on while engaging in a sexual act?',
    4
  ],
  [
    'Kicked a roommate out to commit a sexual act?',
    2
  ],
  [
    'Ingested alcohol in a non-religious context?',
    1
  ],
  [
    'Played a drinking game?',
    1
  ],
  [
    'Been drunk?',
    1
  ],
  [
    'Faked sobriety to parents or teachers?',
    2
  ],
  [
    'Had severe memory loss due to alcohol?',
    3
  ],
  [
    'Used tobacco?',
    1
  ],
  [
    'Used marijuana?',
    2
  ],
  [
    'Used a drug stronger than marijuana?',
    3
  ],
  [
    'Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?',
    5
  ],
  [
    'Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?',
    2
  ],
  [
    'Been put on disciplinary probation or suspended?',
    3
  ],
  [
    'Urinated in public?',
    1
  ],
  [
    'Gone skinny-dipping?',
    3
  ],
  [
    'Gone streaking?',
    3
  ],
  [
    'Seen a stripper?',
    3
  ],
  [
    'Had the police called on you?',
    3
  ],
  [
    'Run from the police?',
    4
  ],
  [
    'Had the police question you?',
    3
  ],
  [
    'Had the police handcuff you?',
    5
  ],
  [
    'Been arrested?',
    6
  ],
  [
    'Been convicted of a crime?',
    6
  ],
  [
    'Been convicted of a felony?',
    8
  ],
  [
    'Committed an act of vandalism?',
    4
  ],
  [
    'Had sexual intercourse?',
    4
  ],
  [
    'Had sexual intercourse three or more times in one night?',
    6
  ],
  [
    '?',
    4
  ],
  [
    'Had sexual intercourse 10 or more times?',
    5
  ],
  [
    'Had sexual intercourse in four or more positions?',
    5
  ],
  [
    'Had sexual with a stranger or person you met within 24 hours?',
    5
  ],
  [
    'Had sexual intercourse in a motor vehicle?',
    5
  ],
  [
    'Had sexual intercourse outdoors?',
    6
  ],
  [
    'Had sexual intercourse in public?',
    6
  ],
  [
    'Had sexual intercourse in a swimming pool or hot tub?',
    5
  ],
  [
    'Had sexual intercourse in a bed not belonging to you or your partner?',
    5
  ],
  [
    'Had sexual intercourse while you or your partner\'s parents were in the same home?',
    5
  ],
  [
    'Had sexual intercourse with non-participating third party in the same room?',
    6
  ],
  [
    'Joined the mile high club?',
    6
  ],
  [
    'Participated in a "booty call" with a partner whom you were not in a relationship with?',
    5
  ],
  [
    'Traveled 100 or more miles for the primary purpose of sexual intercourse?',
    6
  ],
  [
    'Had sexual intercourse with a partner with a 3 or more year age difference?',
    6
  ],
  [
    'Had sexual intercourse with a virgin?',
    5
  ],
  [
    'Had sexual intercourse without a condom?',
    6
  ],
  [
    'Had a STI test due to reasonable suspicion?',
    6
  ],
  [
    'Had a STI?',
    6
  ],
  [
    'Had a threesome?',
    7
  ],
  [
    'Attended an orgy?',
    8
  ],
  [
    'Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?',
    7
  ],
  [
    'Had sexual intercourse with five or more partners?',
    7
  ],
  [
    'Been photographed or filmed during sexual intercourse by yourself or others?',
    7
  ],
  [
    'Had period sex?',
    6
  ],
  [
    'Had anal sex?',
    6
  ],
  [
    'Had a pregnancy scare?',
    6
  ],
  [
    'Impregnated someone or been impregnated?',
    6
  ],
  [
    'Paid or been paid for a sexual act?',
    6
  ],
  [
    'Committed an act of voyeurism?',
    5
  ],
  [
    'Committed an act of incest?',
    8
  ],
  [
    'Engaged in beastiality?',
    9
  ]
];

/**
 * Build the quiz
 * 
 * The structure of the site looks like
 * 
 * - Title
 * - Intro text
 * - Quiz clarifications
 * - Quiz
 * - Submission button
 */ 
function create_quiz () {
  const BODY_CONTAINER  = document.createElement('div');
  const TITLE_TEXT      = document.createElement('div');
  const INTRO_TEXT      = document.createElement('div');
  const QUIZ_TEXT       = document.createElement('div');

  const QUIZ_CONTAINER  = document.createElement('div');
  const QUIZ_SUBMIT     = document.createElement('div');
  const SCORE_CONTAINER = document.createElement('div');
  SCORE_CONTAINER.classList.add('score_container');

  // Title
  TITLE_TEXT.innerHTML = '<h1>Rice Purity Test</h1>';
  TITLE_TEXT.classList.add('title');
  document.body.appendChild(TITLE_TEXT);

  // Wraps the part we want to hide
  document.body.appendChild(BODY_CONTAINER);

  // Intro Text
  INTRO_TEXT.innerHTML = 
  `
  <p>
  <i>
  A faithful remake of the original 
  <a href='http://ricepuritytest.com/'>Rice Purity Test</a>,
  a questionaire that helps 
  "students track the maturation of their experiences throughout college."
  </i>
  </p>

  <p>
  <i>
  This new version of the test also includes weighted grading, which 
  considers different amounts of lost purity based on the act.
  For example, holding hands is not as bad as committing a felony.
  </i>
  </p>

  <p>
  While you may be tempted to use this as a bucket list, the original warns that
  <b>Completion of all items on this test will likely result in death.</b>
  </p>
  `;
  BODY_CONTAINER.appendChild(INTRO_TEXT);

  QUIZ_TEXT.innerHTML = 
  `
  <p>
  Click on every item you have done. 
  MPS stands for Member of the Preferred Sex.
  </p>
  `;
  BODY_CONTAINER.appendChild(QUIZ_TEXT);

  // Main quiz
  const QUESTION_WRAPPER = document.createElement('ol');
  BODY_CONTAINER.appendChild(QUIZ_CONTAINER);
  QUIZ_CONTAINER.appendChild(QUESTION_WRAPPER);

  // Add all the questions to the quiz
  for (let i = 0; i < QUESTIONS.length; i++) {
    let curr_elem = document.createElement('li');
    curr_elem.innerHTML = 
    `
    <input type="checkbox" id=${i}>
    ${QUESTIONS[i][IDX_QUESTION_TEXT]}
    `;
    QUESTION_WRAPPER.appendChild(curr_elem);
  }

  QUIZ_SUBMIT.innerHTML = 
  `<input class="button" type="submit" value="Calculate My Score!">
  `
  QUIZ_SUBMIT.onclick = () => grade_quiz(BODY_CONTAINER, SCORE_CONTAINER);
  BODY_CONTAINER.appendChild(QUIZ_SUBMIT);
  document.body.appendChild(SCORE_CONTAINER);
}

// Grade the quiz
function grade_quiz (body_container, score_container) {
  // Hide elements
  body_container.style.display = 'none';

  // Query the quiz questions
  let sin_list = document.querySelectorAll('input[type="checkbox"]');

  let CURR_SCORE  = 0;
  let TOTAL_SCORE = 0;
  let FINAL_PURITY_BINARY = 0;
  for (let i = 0; i < sin_list.length; i++) {
    let curr_question_weight = QUESTIONS[i][IDX_WEIGHTING];

    TOTAL_SCORE += curr_question_weight;

    if (sin_list[i].checked) {
      CURR_SCORE +=  curr_question_weight;
      FINAL_PURITY_BINARY += 1;
    }
  }

  let FINAL_PURITY = (100*(1 - (CURR_SCORE/TOTAL_SCORE))).toFixed(2);

  score_container.innerHTML = 
  `
  <h2>Your score (weighted):</h2>
  <h1 class="score">
  ${FINAL_PURITY}
  </h1>
  <h2>Your score (original):</h2>
  <h1 class="score">
  ${100 - FINAL_PURITY_BINARY}
  </h1>
  `;
}

create_quiz();