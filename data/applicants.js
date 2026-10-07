export const jobs=[
{id:'REQ-BT-241',title:'Computer Operations Analyst',department:'IT Operations'},
{id:'REQ-BT-242',title:'AI Engineer II',department:'Data & Analytics'},
{id:'REQ-BT-244',title:'Solution Architect III',department:'Enterprise Architecture'}];
const seed=[
['APP-101','Jordan Ellis','REQ-BT-241','Recruiter Review',['Workload monitoring','Incident documentation','Batch processing'],'A.A.S. Information Technology'],
['APP-102','Casey Morgan','REQ-BT-242','Phone Screen',['Python','Azure','RAG','REST APIs'],'B.S. Computer Science'],
['APP-103','Riley Thompson','REQ-BT-244','Interview Scheduled',['Solution architecture','Cloud modernization','Integration design'],'M.S. Information Systems'],
['APP-104','Taylor Bennett','REQ-BT-242','New Application',['Python','Machine learning','Evaluation'],'B.S. Data Science'],
['APP-105','Morgan Hayes','REQ-BT-241','New Application',['Operations','SQL','Process documentation'],'B.S. Information Systems'],
['APP-106','Avery Parker','REQ-BT-244','Hiring Manager Review',['Architecture governance','APIs','Cloud strategy'],'B.S. Computer Science']];
export const applicants=seed.map((r,i)=>({id:r[0],name:r[1],jobId:r[2],jobTitle:jobs.find(j=>j.id===r[2]).title,status:r[3],source:['WoodmenLife Careers','LinkedIn','Referral'][i%3],appliedDate:`2026-10-0${i+1}`,recruiter:i%2?'Jimmy Smith':'Katelyn Price',email:r[1].toLowerCase().replaceAll(' ','.')+'@example.test',phone:`(402) 555-01${String(i).padStart(2,'0')}`,location:'Omaha, NE',skills:r[4],education:r[5],professionalSummary:`Synthetic applicant record documenting ${r[4][0].toLowerCase()} and ${r[4][1].toLowerCase()}.`,experience:[{title:i%2?'Software Engineer':'Operations Analyst',company:'Northstar Solutions',dates:'2023 - Present',details:`Performed work involving ${r[4].slice(0,3).join(', ')}.`},{title:'Associate Analyst',company:'Prairie Technology Group',dates:'2020 - 2023',details:'Supported documented team projects and cross-functional delivery.'}],coverLetter:`Dear Hiring Team,\n\nI am applying for the ${jobs.find(j=>j.id===r[2]).title} position. My background includes ${r[4][0].toLowerCase()} and ${r[4][1].toLowerCase()}.\n\nSincerely,\n${r[1]}`,interviews:[]}));
