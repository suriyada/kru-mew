// คะแนนนักเรียน (สามารถเพิ่มได้)
const studentScores = {
    "5642": "85",
    "5656": "78",
    "5658": "92",
    "5753": "88",
    "5755": "76",
    "5806": "85",
    "5807": "78",
    "5808": "92",
    "6046": "88",
    "6047": "76",
    "6048": "85",
    "6049": "78",
    "6050": "92",
    "6051": "88",
    "6052": "76",
    "6053": "85",
    "6054": "78",
    "6061": "92",
    "6074": "88",
    "5649": "76",
    "5654": "85",
    "5663": "78",
    "5664": "92",
    "5667": "88",
    "5670": "76",
    "5737": "85",
    "5756": "78",
    "5812": "92",
    "5823": "88",
    "6055": "76",
    "6056": "85",
    "6057": "78",
    "6058": "92",
    "6059": "88",
    "6060": "76",
    "6070": "85",
    "6072": "78"
};

document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const resultDiv = document.getElementById('result');

    if(studentScores[studentId]) {
        resultDiv.textContent = `รหัสนักเรียน: ${studentId} - คะแนน: ${studentScores[studentId]}`;
    } else {
        resultDiv.textContent = "ไม่พบรหัสนักเรียนนี้";
    }
});