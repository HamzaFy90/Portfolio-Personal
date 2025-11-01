document.addEventListener("DOMContentLoaded", function () {
 const data = [
  {
   title: "FACP Panel Operator",
   subtitle: "Orient Rental Modaraba",
   client: "National Foods Faisalabad",
   date: "May 2024 - Present",
   items: [
    "Monitored and operated Fire Alarm Control Panels to ensure system functionality",
    "Conducted routine inspections and basic troubleshooting of fire alarm systems",
    "Recorded alarm events and maintained system status reports",
    "Supported fire safety procedures and emergency preparedness activities"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Innovative Management",
   client: "Phillip Morris Sahiwal",
   date: "Feb 2024 - May 2024",
   items: [
    "Ensured compliance with occupational health and safety regulations",
    "Conducted specialized safety training for tobacco processing hazards",
    "Reduced PPE non-compliance by 60% through daily monitoring audits",
    "Developed emergency response plans for high-temperature operations"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Elite Engr LTD",
   client: "ZRK Mardan",
   date: "Dec 2023 - Feb 2024",
   items: [
    "Ensured compliance with occupational health and safety regulations",
    "Led safety inductions and orientation sessions for new staff",
    "Conducted and reviewed risk assessments for operational activities",
    "Maintained and updated all HSE documentation and policies"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Star Nz",
   client: "Phillip Morris Sahiwal",
   date: "July 2023 - Nov 2023",
   items: [
    "Ensured compliance with occupational health and safety regulations",
    "Led safety inductions and orientation sessions for new staff",
    "Conducted and reviewed risk assessments for operational activities",
    "Maintained and updated all HSE documentation and policies"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Saeed HT Solution",
   client: "Fatima Fertilizer Machi Goth",
   date: "March 2023 - April 2023",
   items: [
    "Implemented confined space entry protocols for storage silos and reactor units",
    "Trained 30+ staff in chemical spill response, including PPE use and neutralization",
    "Reduced near-misses by 25% through daily toolbox talks",
    "Automated safety checklists using mobile forms, cutting inspection time by 40%"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Pak Arab Engr",
   client: "Pak Arab Fertilizer Multan",
   date: "Dec 2022 - Feb 2023",
   items: [
    "Spearheaded a chemical exposure control program for ammonia and urea handling",
    "Designed emergency drills for gas leaks and plant evacuations, reducing response time by 30%",
    "Audited contractor safety performance, leading to corrective actions for 5 high-risk vendors",
    "Digitized HSE records using Excel dashboards, improving inspection tracking efficiency"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Saeed HT Solution",
   client: "Fatima Fertilizer Machi Goth",
   date: "June 2022 - July 2022",
   items: [
    "Implemented confined space entry protocols for storage silos and reactor units",
    "Trained 30+ staff in chemical spill response, including PPE use and neutralization",
    "Reduced near-misses by 25% through daily toolbox talks",
    "Automated safety checklists using mobile forms, cutting inspection time by 40%"
   ]
  },
  {
   title: "Safety Officer",
   subtitle: "Accresent Engr Ltd",
   client: "Indus Motor Karachi Port Qasim",
   date: "1st May 2022 - 23 May 2022",
   items: [
    "Enforced full compliance with site safety regulations",
    "Conducted 20+ safety inductions for staff/contractors",
    "Performed daily risk assessments for all operations",
    "Maintained 100% up-to-date HSE documentation"
   ]
  },
  {
   title: "Fire Watcher",
   subtitle: "WattNVolt",
   client: "PEPSICO Lahore",
   date: "10 April 2022 - 22 April 2022",
   items: [
    "Enforced strict HSE compliance during high-risk operations",
    "Conducted 15+ safety inductions with emergency response training",
    "Monitored daily hot work operations in FMCG facility",
    "Maintained 100% accurate HSE documentation for audits"
   ]
  },
  {
   title: "Fire Watcher",
   subtitle: "Pak Arab Engr Civil Ltd",
   client: "Shell",
   date: "16 March 2022 - 23 March 2022",
   items: [
    "Enforced strict HSE compliance during high-risk operations",
    "Conducted 15+ safety inductions with emergency response training",
    "Monitored daily hot work operations in FMCG facility",
    "Maintained 100% accurate HSE documentation for audits"
   ]
  }
 ];

 const INITIAL_ITEMS = 3;
 let showingAll = false;

 function createAccordion() {
  const accordion = document.getElementById('accordion');

  data.forEach((item, index) => {
   const accordionItem = document.createElement('div');
   accordionItem.className = 'accordion-item';

   if (index >= INITIAL_ITEMS) {
    accordionItem.classList.add('hidden');
   }

   accordionItem.innerHTML = `
                    <div class="accordion-header">
                        <div class="accordion-left">
                            <div class="accordion-title">${item.title}</div>
                            <div class="accordion-subtitle">${item.subtitle} • <span class="client">${item.client}</span></div>
                        </div>
                        <div class="accordion-right">
                            <div class="accordion-date">${item.date}</div>
                            <div class="accordion-icon">↓</div>
                        </div>
                    </div>
                    <div class="accordion-content">
                        <ul>
                            ${item.items.map(text => `<li>${text}</li>`).join('')}
                        </ul>
                    </div>
                `;

   accordion.appendChild(accordionItem);
  });

  document.querySelectorAll('.accordion-header').forEach(header => {
   header.addEventListener('click', toggleAccordion);
  });

  if (data.length <= INITIAL_ITEMS) {
   document.getElementById('showMoreBtn').classList.add('hidden');
  }
 }

 function toggleAccordion(e) {
  const header = e.currentTarget;
  const content = header.nextElementSibling;
  const isActive = header.classList.contains('active');

  // Close all
  document.querySelectorAll('.accordion-header').forEach(h => {
   h.classList.remove('active');
  });
  document.querySelectorAll('.accordion-content').forEach(c => {
   c.classList.remove('active');
  });

  if (!isActive) {
   header.classList.add('active');
   content.classList.add('active');
  }
 }

 function toggleShowMore() {
  const btn = document.getElementById('showMoreBtn');
  const hiddenItems = document.querySelectorAll('.accordion-item.hidden');

  if (!showingAll) {
   hiddenItems.forEach(item => {
    item.classList.remove('hidden');
   });
   btn.textContent = 'Show Less';
   showingAll = true;
  } else {
   const allItems = document.querySelectorAll('.accordion-item');
   allItems.forEach((item, index) => {
    if (index >= INITIAL_ITEMS) {
     item.classList.add('hidden');
     const header = item.querySelector('.accordion-header');
     const content = item.querySelector('.accordion-content');
     header.classList.remove('active');
     content.classList.remove('active');
    }
   });
   btn.textContent = 'Show More';
   showingAll = false;

   document.querySelector('.section-title').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
   });
  }
 }

 createAccordion();

 document.getElementById('showMoreBtn').addEventListener('click', toggleShowMore);
});