const data = {
  treatment: 'bariatric',
  weight: '120',
  height: '170',
  age: '35',
  medicalCondition: 'Diabetes',
  isEn: false
};

fetch('http://localhost:3000/api/ai-consult', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(json => {
  console.log("----- AI API TEST SONUCU -----");
  console.log("Durum:", json.status);
  console.log("BMI Değeri:", json.bmi);
  console.log("AI Yorumu:", json.message);
  console.log("------------------------------");
})
.catch(err => console.error(err));
