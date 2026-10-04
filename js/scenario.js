const RESP001={
 id:"resp-001",title:"Difficulty Breathing",startTime:"08:00",
 patient:{name:"Jordan Miller",age:42,sex:"Adult",pronouns:"they/them",chief:"Shortness of breath and chest tightness",allergies:"No known drug allergies",history:"Asthma; seasonal allergies",meds:"Albuterol inhaler PRN",hiddenDiagnosis:"Asthma exacerbation"},
 initialVitals:{hr:108,sys:138,dia:84,spo2:92,rr:26,temp:98.7,pain:3},
 questions:[
  {keys:["start","begin","long","when"],answer:"It started getting worse late last night. This morning I couldn't catch my breath walking in from the parking lot.",fact:"Symptoms worsened overnight."},
  {keys:["pain","chest"],answer:"My chest feels tight more than painful. Maybe a three out of ten.",fact:"Chest tightness, pain 3/10."},
  {keys:["medical problems","medical history","health problems","conditions","past history","diagnosed","diagnoses"],answer:"I have asthma and seasonal allergies. I don't have diabetes, thyroid problems, or a history of a heart attack.",fact:"Past medical history: asthma and seasonal allergies."},
  {keys:["asthma","breathing","before"],answer:"I have asthma. Usually my rescue inhaler settles it down.",fact:"History of asthma."},
  {keys:["inhaler","medicine","medication"],answer:"I used my albuterol inhaler twice this morning. It helped for a little while, then the tightness came back.",fact:"Albuterol used twice with temporary relief."},
  {keys:["fever","sick","cough"],answer:"No fever that I know of. I've had a dry cough since yesterday.",fact:"Dry cough; denies known fever."},
  {keys:["allergy","allergies"],answer:"Seasonal allergies, but no medication allergies that I know of.",fact:"Seasonal allergies; no known drug allergies."},
  {keys:["smoke","smoking","vape"],answer:"I don't smoke or vape.",fact:"Denies smoking/vaping."},
  {keys:["trigger","exposure","environment"],answer:"We cleaned out a really dusty storage room at work yesterday. My breathing started acting up afterward.",fact:"Recent heavy dust exposure."}
 ],
 quick:["When did this start?","What medical problems do you have?","What medications have you used?","Any fever or cough?"],
 exams:{
  "observe:head":"Patient is alert and oriented, speaking in short sentences. Mildly anxious.",
  "observe:chest":"Respirations appear rapid with increased work of breathing.",
  "stethoscope:chest":"Diffuse bilateral expiratory wheezing with prolonged expiration. Air movement is present.",
  "stethoscope:abdomen":"Bowel sounds are present in all quadrants.",
  "pulseox:head":"Pulse oximeter reads 92% on room air.",
  "bp:chest":"Blood pressure is 138/84 mmHg.",
  "temperature:head":"Oral temperature is 98.7°F.",
  "penlight:head":"Pupils are equal, round, and reactive to light.",
  "observe:legs":"No obvious unilateral leg swelling is seen."
 },
 orders:[
  {id:"ecg",label:"12-lead ECG",delay:3,result:"Sinus tachycardia at 108 bpm; no acute ST-segment elevation."},
  {id:"cxr",label:"Chest X-ray",delay:12,result:"No focal air-space consolidation, pleural effusion, or pneumothorax."},
  {id:"cbc",label:"CBC",delay:18,result:"WBC 8.9 K/µL, Hgb 14.2 g/dL, platelets 251 K/µL."},
  {id:"cmp",label:"CMP",delay:20,result:"Electrolytes, renal function, and glucose without a major abnormality."},
  {id:"viral",label:"Respiratory viral panel",delay:35,result:"Scenario result: common tested respiratory viruses negative."},
  {id:"abg",label:"Blood gas",delay:10,result:"Scenario result: mild respiratory alkalosis; no severe hypercapnia."}
 ],
 interventions:[
  {id:"oxygen",label:"Supplemental oxygen",effect:{spo2:4},message:"Supplemental oxygen applied. SpO₂ begins to improve."},
  {id:"bronchodilator",label:"Bronchodilator per protocol",effect:{spo2:3,rr:-5,hr:4},message:"After treatment, wheezing and work of breathing begin to improve."},
  {id:"iv",label:"Establish IV access",effect:{},message:"IV access established."},
  {id:"reassess",label:"Focused reassessment",effect:{},message:"Patient remains alert. Reassessment documents respiratory effort and response to interventions."},
  {id:"supervisor",label:"Call supervising clinician",effect:{},message:"Supervising clinician notified and joins the care plan."},
  {id:"emergency",label:"Activate emergency response",effect:{},message:"Emergency response activated."}
 ],
 diagnoses:["Asthma exacerbation","Pneumonia","Pulmonary embolism","Acute coronary syndrome","Panic/anxiety-related symptoms","Pneumothorax"],
 reference:[
  {keys:["asthma","wheezing","bronchospasm"],text:"Asthma involves inflammation and narrowing of the airways and can cause wheezing, coughing, chest tightness, and shortness of breath. Triggers vary. Consider the complete clinical picture and local protocols."},
  {keys:["oxygen","spo2","saturation"],text:"Pulse oximetry estimates oxygen saturation. A low value is a finding that must be interpreted with the patient's symptoms, examination, measurement quality, and clinical context."},
  {keys:["troponin","heart attack"],text:"Troponin is a protein measured in blood when myocardial injury is being evaluated. An abnormal result does not by itself establish the cause of injury."},
  {keys:["x-ray","chest xray","pneumonia"],text:"Chest radiography can help evaluate several causes of respiratory symptoms, but a result must be interpreted with history, examination, and other findings."}
 ]
};

const CASE_LIBRARY=[
{id:"resp-001",code:"RESP-001",name:"Jordan Miller",age:42,chief:"Shortness of breath and chest tightness",category:"Respiratory",acuity:"Moderate",difficulty:"Clinical",scenario:RESP001},
{id:"card-001",code:"CARD-001",name:"Maria Lopez",age:58,chief:"Chest pressure with nausea",category:"Cardiac",acuity:"High",difficulty:"Clinical"},
{id:"neuro-001",code:"NEURO-001",name:"Robert Davis",age:67,chief:"Sudden weakness and slurred speech",category:"Neurologic",acuity:"High",difficulty:"Challenge"},
{id:"seps-001",code:"SEPS-001",name:"Emily Carter",age:54,chief:"Fever, weakness and confusion",category:"Infectious",acuity:"High",difficulty:"Clinical"},
{id:"endo-001",code:"ENDO-001",name:"Linda Parker",age:35,chief:"Dizziness, sweating and confusion",category:"Endocrine",acuity:"Moderate",difficulty:"Guided"},
{id:"trauma-001",code:"TRAUMA-001",name:"Marcus Green",age:29,chief:"Abdominal pain after motor vehicle crash",category:"Trauma",acuity:"High",difficulty:"Challenge"},
{id:"ped-001",code:"PED-001",name:"Ava Thompson",age:9,chief:"Cough and increasing difficulty breathing",category:"Pediatric",acuity:"Moderate",difficulty:"Guided"},
{id:"rhythm-001",code:"RHYTHM-001",name:"James Wilson",age:63,chief:"Palpitations and lightheadedness",category:"Cardiac Rhythm",acuity:"High",difficulty:"Challenge"}
];
function cloneScenario(o){return JSON.parse(JSON.stringify(o))}
function genericScenario(meta){
 let q=cloneScenario(RESP001);q.id=meta.id;q.title=meta.chief;q.patient.name=meta.name;q.patient.age=meta.age;q.patient.chief=meta.chief;
 const map={
 "card-001":{history:"Hypertension; hyperlipidemia",meds:"Lisinopril; atorvastatin",dx:"Acute coronary syndrome",v:{hr:102,sys:156,dia:92,spo2:96,rr:22,temp:98.4,pain:7}},
 "neuro-001":{history:"Hypertension",meds:"Amlodipine",dx:"Acute ischemic stroke",v:{hr:88,sys:184,dia:104,spo2:97,rr:18,temp:98.2,pain:0}},
 "seps-001":{history:"Type 2 diabetes",meds:"Metformin",dx:"Sepsis",v:{hr:122,sys:92,dia:58,spo2:93,rr:28,temp:102.6,pain:4}},
 "endo-001":{history:"Type 1 diabetes",meds:"Insulin",dx:"Hypoglycemia",v:{hr:112,sys:126,dia:74,spo2:98,rr:20,temp:98.1,pain:0}},
 "trauma-001":{history:"No major medical history",meds:"None",dx:"Hemorrhagic shock",v:{hr:128,sys:88,dia:54,spo2:95,rr:28,temp:97.4,pain:8}},
 "ped-001":{history:"Asthma",meds:"Albuterol inhaler PRN",dx:"Asthma exacerbation",v:{hr:124,sys:108,dia:68,spo2:91,rr:32,temp:99.1,pain:1}},
 "rhythm-001":{history:"Hypertension",meds:"Metoprolol",dx:"Supraventricular tachycardia",v:{hr:168,sys:104,dia:70,spo2:96,rr:24,temp:98.5,pain:2}}
 }[meta.id];
 if(map){q.patient.history=map.history;q.patient.meds=map.meds;q.patient.hiddenDiagnosis=map.dx;q.initialVitals=map.v;q.diagnoses=[map.dx,...q.diagnoses.filter(x=>x!==map.dx)].slice(0,6);q.questions[0].answer="It started today and it worried me enough to come in.";q.questions[2].answer="My medical history includes "+map.history+".";q.questions[2].fact="Past medical history: "+map.history+".";q.quick=["When did this start?","What medical problems do you have?","What medications do you take?","What makes this better or worse?"]}
 return q
}
CASE_LIBRARY.forEach(c=>{if(!c.scenario)c.scenario=genericScenario(c)});
window.CASE_LIBRARY=CASE_LIBRARY;
const selected=localStorage.getItem("mpai_selected_case")||"resp-001";
window.SCENARIO=(CASE_LIBRARY.find(c=>c.id===selected)||CASE_LIBRARY[0]).scenario;
