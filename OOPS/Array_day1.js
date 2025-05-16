console.clear();
let browsernames = ["chrome", "firefox", "Edge", "Opera"];
console.log(browsernames);
browsernames.push("Safari");
print(browsernames);

browsernames.pop();
print(browsernames);

browsernames.shift("brave");
print(browsernames);

browsernames.unshift("chromium", "Brave");
print(browsernames);

//Slice the array with index
let filterBrowsers = browsernames.slice(1,4);
print(browsernames);

//sliced array
print(filterBrowsers);




const automationTools = [
    // AI Automation Tools
    "UiPath",
    "Automation Anywhere",
    "Blue Prism",
    "WorkFusion",
    "Kofax",
    "Pega Systems",
    "Appian",
    "NICE Systems",
    "IBM Robotic Process Automation",
    "Microsoft Power Automate",
    "Celonis",
    
    // Test Automation Tools
    "Selenium",
    "Appium",
    "TestComplete",
    "Katalon Studio",
    "Ranorex",
    "Cypress",
    "Postman",
    "Robot Framework",
    "Tricentis Tosca",
    "QTP/UFT",
    
    // Business Automation Tools
    "IBM Granite AI Agents",
    "Amazon Kiro",
    "ServiceNow Now Assist",
    "Zurich Insurance AI CRM",
    "Onebeat",
    "Morgan Stanley Assistant and Debrief",
    "Omneky"
  ];


//   automationTools.splice(4);
//   print(automationTools);

  automationTools.splice(4,1);
  print(automationTools);

  automationTools.splice(4,1);
  print(automationTools);

  automationTools.splice(4,1, "Zapier");
  print(automationTools);
  
  console.log(automationTools.length)
 

function print(passArgument) {
    console.log("===============");
    console.log(passArgument)
}

