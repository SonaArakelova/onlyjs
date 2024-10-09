
function initializePage() {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100vh"; 
  container.style.position = 'relative';

  const header = createHeader();
  const navBar = createNavBar();
  const contentArea1 = createContentArea("Content Area 1");
  const contentArea2 = createContentArea("Content Area 2");
  const footer = createFooter();

  // Append 
  document.body.appendChild(container);
  container.appendChild(navBar);
  container.appendChild(header);
  container.appendChild(contentArea1);
  container.appendChild(contentArea2);
  container.appendChild(footer);
}

function createHeader() {
  const header = document.createElement("header");
  header.style.height = '40px';
  header.style.border = "3px solid black";
  header.style.padding = '10px';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'flex-end';

  const loginLink = document.createElement("a");
  loginLink.href = "#"; // Prevent default
  loginLink.textContent = "Log In";
  loginLink.style.fontSize = '20px'
  header.appendChild(loginLink);
  loginLink.addEventListener('click', loginfunc);
  
  return header;
}

function loginfunc(event) {
  event.preventDefault(); 
  loadPage2();
}


function createNavBar() {
  const navBar = document.createElement("nav");
  navBar.style.position = 'absolute';
  navBar.style.top = '90px';
  navBar.style.left = '0px';
  navBar.style.width = '15%';
  navBar.style.height = "110vh"; 
  navBar.style.border = "3px solid black";
  
  return navBar;
}


function createContentArea(contentText) {
  const contentArea = document.createElement("section");
  contentArea.style.width = "80%"; 
  contentArea.style.height = "45vh"; 
  contentArea.style.float = "right"; 
  contentArea.style.border = "3px solid black";
  contentArea.style.marginTop = '25px';
  return contentArea;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.style.width = "80%"; 
  footer.style.height = "10vh"; 
  footer.style.float = "right"; 
  footer.style.border = "3px solid black";
  footer.style.marginTop = '25px';
  
  return footer;
}


//  load page 2 content
function loadPage2() {
  document.body.innerHTML = '';

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100vh"; 
  container.style.position = 'relative';
 

  const header = document.createElement("header");
  header.style.height = '40px';
  header.style.border = "3px solid black";
  header.style.padding = '10px';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'flex-end';


  //logein
  const loginForm = document.createElement("form");
  loginForm.style.display = 'flex';
  loginForm.style.alignItems = 'center';
  loginForm.style.flexDirection = 'column';
  loginForm.style.border = "3px solid black";
  loginForm.style.position = 'absolute';
  loginForm.style.top = '30%';
  loginForm.style.left = "50%"
  loginForm.style.transform = "translateX(-50%)";
  loginForm.style.paddingLeft = '30px';
  loginForm.style.paddingRight = '30px';


  const userNameInput = document.createElement("input");
  userNameInput.type = "text";
  userNameInput.placeholder = "User name";
  userNameInput.style. marginTop = '20px';
  userNameInput.style.border = "3px solid black";
  userNameInput.style.padding = '5px';
  userNameInput.style.fontSize = '15px';
  loginForm.appendChild(userNameInput);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.style. marginTop = '20px';
  passwordInput.style.border = "3px solid black";
  passwordInput.style.padding = '5px';
  passwordInput.style.fontSize = '15px';
  loginForm.appendChild(passwordInput);

  const loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.textContent = "Log In";
  loginButton.style.margin = '20px'
  loginButton.style.border = "3px solid black";
  loginButton.style.padding = '5px';
  loginButton.style.fontSize = '15px';
  loginButton.style.boxShadow = "4px 4px 1px black";
  loginForm.appendChild(loginButton);

  container.appendChild(loginForm);


  //home
  const homeLink = document.createElement("a");
  homeLink.href = "#"; 
  homeLink.textContent = "Home";
  homeLink.style.fontSize = '20px'
  header.appendChild(homeLink);
  homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.innerHTML = '';
      // back to page 1
      initializePage();
  });

  document.body.appendChild(container);
  container.appendChild(header);
}

//  first page on load
initializePage();


