const copyright = document.querySelector(".end-nav > .copyright");
const currentDate = new Date();
copyright.textContent = `© ${currentDate.getFullYear()} GrayStore. All rights reserved.`;
