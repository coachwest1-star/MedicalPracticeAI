window.SCENARIO={
 id:"resp-001",title:"Difficulty Breathing",startTime:"08:00",
 patient:{name:"Jordan Miller",age:42,sex:"Adult",pronouns:"they/them",chief:"Shortness of breath and chest tightness",allergies:"No known drug allergies",history:"Asthma; seasonal allergies",meds:"Albuterol inhaler PRN",hiddenDiagnosis:"Asthma exacerbation"},
 initialVitals:{hr:108,sys:138,dia:84,spo2:92,rr:26,temp:98.7,pain:3},
 questions:[
  {keys:["start","begin","long","when"],answer:"It started getting worse late last night. This morning I couldn't catch my breath walking in from the parking lot.",fact:"Symptoms worsened overnight."},
  {keys:["pain","chest"],answer:"My chest feels tight more than painful. Maybe a three out of ten.",fact:"Chest tightness, pain 3/10."},
  {keys:["asthma","breathing","before"],answer:"I have asthma. Usually my rescue inhaler settles it down.",fact:"History of asthma."},
  {keys:["inhaler","medicine","medication"],answer:"I used my albuterol inhaler twice this morning. It helped for a little while, then the tightness came back.",fact:"Albuterol used twice with temporary relief."},
  {keys:["fever","sick","cough"],answer:"No fever that I know of. I've had a dry cough since yesterday.",fact:"Dry cough; denies known fever."},
  {keys:["allergy","allergies"],answer:"Seasonal allergies, but no medication allergies that I know of.",fact:"Seasonal allergies; no known drug allergies."},
  {keys:["smoke","smoking","vape"],answer:"I don't smoke or vape.",fact:"Denies smoking/vaping."},
  {keys:["trigger","exposure","environment"],answer:"We cleaned out a really dusty storage room at work yesterday. My breathing started acting up afterward.",fact:"Recent heavy dust exposure."}
 ],
 quick:["When did this start?","Do you have asthma?","What medications have you used?","Any fever or cough?"],
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