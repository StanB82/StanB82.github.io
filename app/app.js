const buttonsArr = [];
const btnProfi = document.getElementById("profile"); // buttons w menu
const btnTrainings = document.getElementById("trainings");
const btnSkills = document.getElementById("skills");
const btnHobbies = document.getElementById("hobbies");
const btnWorkExp = document.getElementById("workExp");
const btnAti = document.getElementById("ati");
const btnMtu = document.getElementById("mtu");
const btnAxt = document.getElementById("axt");
const btnCollege = document.getElementById("college");
const btnEdu = document.getElementById("educat");
const btnAgh = document.getElementById("agh");
const btnPm = document.getElementById("pm");
//buttonsArr[0,4,9] theese are main buttons
buttonsArr.push(
  btnProfi,
  btnTrainings,
  btnSkills,
  btnHobbies,
  btnWorkExp,
  btnAti,
  btnMtu,
  btnAxt,
  btnCollege,
  btnEdu,
  btnAgh,
  btnPm
);

const reset = () => {
  buttonsArr.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
};

const clickHandleProfile = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = profile;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    btnProfi.classList.add("active");
  })();
};

const clickHandleTrainings = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = trainings;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnProfi.classList.add("active");
    btnTrainings.classList.add("active");
  })();
};
const clickHandleSkills = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = skills;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnProfi.classList.add("active");
    btnSkills.classList.add("active");
  })();
};
const clickHandleHobbies = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = hobbies;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnProfi.classList.add("active");
    btnHobbies.classList.add("active");
  })();
};
const clickHandleWorkExperience = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = workExperience;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    btnWorkExp.classList.add("active");
  })();
};
const clickHandleAti = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = ati;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnWorkExp.classList.add("active");
    btnAti.classList.add("active");
  })();
};
const clickHandleMtu = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = mtu;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnWorkExp.classList.add("active");
    btnMtu.classList.add("active");
  })();
};
const clickHandleAxtone = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = axtone;
  //active handler on click below, only id have to be customised
  (function doActive() {
    reset();
    //btnWorkExp.classList.add("active");
    btnAxt.classList.add("active");
  })();
};
const clickHandleCollege = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = college;
  //active handler on click below, only id have to be customised
  (function checkActive() {
    reset();
    btnCollege.classList.add("active");
  })();
};
const clickHandleEducation = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = education;
  //active handler on click below, only id have to be customised
  (function checkActive() {
    reset();
    btnEdu.classList.add("active");
  })();
};
const clickHandleAgh = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = agh;
  //active handler on click below, only id have to be customised
  (function checkActive() {
    reset();
    btnAgh.classList.add("active");
  })();
};
const clickHandlePm = () => {
  var container = document.querySelector("div.putFromSource");
  container.innerHTML = pm;
  //active handler on click below, only id have to be customised
  (function checkActive() {
    reset();
    btnPm.classList.add("active");
  })();
};

const profile =
  '<ul style="list-style-type: none; text-align: start">' +
  "<li>" +
  "Over <strong>15 years</strong> of experience as a process engineer in the airspace " +
  "and heavy industry business." +
  "</li>" +
  "<li>" +
  "Bringing added value to the company and increasing user experience " +
  "are my goals." +
  "</li>" +
  "<li>" +
  "Solution-driven and meticulous about the details without losing the" +
  " big picture." +
  "</li>" +
  "<li>Always pursuing the possibilities for self-improvement</li></ul><br />";

const trainings =
  '<ul class="trainings" style="list-style-type: none; text-align: start"><strong>Trainings:</strong>' +
  "<li>" +
  "ServiceNow courses" +
  '<ul style="list-style-type: square">' +
  "<li>Build the NeedIt Application</li>" +
  "<li>Scripting in ServiceNow</li>" +
  "<li>Importing Data into ServiceNow</li>" +
  "<li>Automating Application Logic</li>" +
  "<li>Flow Designer</li>" +
  "<li>Reporting and Analytics</li>" +
  "<li>Service Portal</li>" +
  "</ul>" +
  "</li>" +
  "<li>HTML - advanced course with a certificate</li>" +
  "<li>CSS - advanced course with a certificate</li>" +
  "<li>JavaScript - advanced course with a certificate</li>" +
  "<li>Node.js Complete Course</li>" +
  "<li>Mongo.DB</li>" +
  "<li>React.js Complete Course</li>" +
  "<li>VBA for excel</li>" +
  "<li>Lean Manufacturing training (2 days with certificate)</li>" +
  "<li>" +
  "CNC course - programming and operation of lathes and milling" +
  "machines Additional information: 150h theoretic and practical" +
  " training" +
  "</li>" +
  "</ul>";

const skills =
  '<ul class="skills" style="list-style-type: none; text-align: start">' +
  "<strong>Skills:</strong>" +
  "<li>International Project Management (AGH)</li>" +
  "<li>ServiceNow development</li>" +
  "<li>HTML</li>" +
  "<li>CSS</li>" +
  "<li>SaaS</li>" +
  "<li>Bootstrap - 5</li>" +
  "<li>JavaScript</li>" +
  "<li>Node.js</li>" +
  "<li>React.js</li>" +
  "<li>Mongo.DB</li>" +
  "<li>Power Query in Excel</li>" +
  "<li>Power Pivot in Excel</li>" +
  "<li>SQL</li>" +
  "<li>MS Access creation of Databases</li>" +
  "<li>Onenote</li>" +
  "<li>Languages: English - Fluent</li>" +
  "<li>Languages: German - Basic</li>" +
  "</ul>";
const hobbies =
  '<ul class="hobbies" style="list-style-type: none; text-align: start">' +
  "<strong>Hobbies:</strong>" +
  "<li>Computer games</li>" +
  "<li>Gym</li>" +
  "<li>New technologies</li>" +
  "<li>Playing with programming languages</li>" +
  "</ul>";

const workExperience =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">PROCESS ENGINEER</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "General about work experience:" +
  "</h6>" +
  '<p class="card-text" style="text-align: start">' +
  "I have over 15 years of experience in the engineering field. I " +
  "have worked as a Process Engineer in various industries, including" +
  " forging of landing gears, grinding of low pressure turbines blades" +
  "and vanes in aerospace. Spring manufacturing in Heavy Rail" +
  " Industry." +
  "</p>" +
  '<p style="text-align: start">' +
  "My responsibilities have included liaising with clients," +
  "evaluating potential orders from a technical standpoint, approving " +
  "production for new parts, stabilizing contract production," +
  "relocating production, improving quality and reducing lead times." +
  "Creating and implementing technical and operational manuals." +
  "Coordinating tests and lab work. I am highly experienced in ISO" +
  "9001 and ISO 17025 standards." +
  "</p>" +
  "</div>" +
  "</div>";
const ati =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">Process Engineer</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "ATI Forgings Steel will | July 2008-December 2009 (1 year 6 months)" +
  "</h6>" +
  '<div class="card-text" style="text-align: start">' +
  "<ul>" +
  "<li>" +
  "Guide the process of manufacturing forgings according to the client's requirements." +
  "</li>" +
  "<li>" +
  "Development of optimal forging operations. Responsible for" +
  "contact with clients regarding technical and technological" +
  " topics." +
  "</li>" +
  "<li>" +
  "Managing client requirements in manufacturing documents." +
  "</li>" +
  "<li>Control approval flow for new products.</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";
const mtu =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">Process Engineer</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "MTU Aero engines |April 2010 - April 2021 (11 years)" +
  "</h6>" +
  '<div class="card-text" style="text-align: start">' +
  "<ul>" +
  "<li>" +
  "Creating and managing a database of metallographic orders and" +
  " reports in MS Access system using, tables, SQL queries, forms," +
  "and reports defined and created by me." +
  "</li>" +
  "<li>" +
  "Improvement of the process performance using Lean" +
  "Manufacturing methods, while maintaining product quality" +
  "</li>" +
  "<li>" +
  "Close cooperation with the planner and quality department." +
  "</li>" +
  "<li>" +
  "Checking special processes performed in MTU Aero engines group " +
  "according to requirements of drawings and specifications." +
  "</li>" +
  "<li>" +
  "Checking special processes performed in MTU Aero engines group " +
  "according to requirements of drawings and specifications." +
  "</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";
var axtone =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">Process Engineer</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "Axtone an ITT Company| May 2021 - Present" +
  "</h6>" +
  '<div class="card-text" style="text-align: start">' +
  "<ul>" +
  "<li>Designing technology for hot-coiled helical springs.</li>" +
  "<li>Preparing offers and orders.</li>" +
  "<li>Writing operational and technological instructions.</li>" +
  "<li>" +
  "Approving customer requirements and technological" +
  "negotiations." +
  "</li>" +
  "<li>" +
  "Ordering metallographic and strength tests such as at the" +
  "Railway Institute IK." +
  "</li>" +
  "<li>" +
  "Coordinating orders for testing and for the equipment needed" +
  "for testing as well as for the direct production of springs." +
  "</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";

const education =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">Education in general</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "Technical college, full-time studies, and postgraduate studies" +
  "</h6>" +
  '<div class="card-text education" style="text-align: start">' +
  "<p>" +
  "I especially want to draw attention to the postgraduate studies " +
  "in International Project Management." +
  "</p>" +
  "<p>" +
  "This specialty was conducted in English. Special emphasis was " +
  "placed on coping in a multicultural environment." +
  "</p>" +
  "</div>" +
  "</div>" +
  "</div>";

const college =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">Electronic Technical College</h5>' +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  " 09.1997 - 09.2002" +
  "</h6>" +
  '<div class="card-text college" style="text-align: start">' +
  "<ul>" +
  "<li><strong>Direction:</strong> Electronics.</li>" +
  "<li><strong>Specialization:</strong> Computer Systems.</li>" +
  "<li><strong>Level of education:</strong> Medium.</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";

const agh =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">' +
  "Academy of Science and Technology in Cracow" +
  "</h5>" +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "09.2002 - 08.2008" +
  "</h6>" +
  '<div class="card-text" style="text-align: start">' +
  "<ul>" +
  '<p class="card-title">' +
  "Academy of Science and Technology in Cracow." +
  "</p>" +
  "<li><strong>Direction:</strong> Material engineering.</li>" +
  "<li>" +
  "<strong>Specialization:</strong> Metal Engineering and " +
  "Industrial Computer Science." +
  "</li>" +
  "<li>" +
  "<strong>Level of education:</strong> Master's degree in " +
  "engineering." +
  "</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";

const pm =
  '<div class="card">' +
  '<div class="card-body">' +
  '<h5 class="card-title">' +
  "Academy of Science and Technology in Cracow" +
  "</h5>" +
  '<h6 class="card-subtitle mb-2 text-body-secondary">' +
  "09.2018 - 06.2019" +
  "</h6>" +
  '<div class="card-text" style="text-align: start">' +
  "<ul>" +
  '<p class="card-title">' +
  "Academy of Science and Technology in Cracow." +
  "</p>" +
  "<li><strong>Direction:</strong> Management.</li>" +
  "<li>" +
  "<strong>Specialization:</strong> Project Management – International Project Management" +
  "</li>" +
  "<li>" +
  "<strong>Level of education:</strong> postgraduate studies" +
  "</li>" +
  "</ul>" +
  "</div>" +
  "</div>" +
  "</div>";
