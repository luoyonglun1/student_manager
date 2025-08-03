document.addEventListener('DOMContentLoaded', () => {
  const studentNameInput = document.getElementById('studentName');
  const studentGradeInput = document.getElementById('studentGrade');
  const addStudentBtn = document.getElementById('addStudentBtn');
  const filterGradeInput = document.getElementById('filterGrade');
  const filterBtn = document.getElementById('filterBtn');
  const resetBtn = document.getElementById('resetBtn');
  const studentList = document.getElementById('studentList');
  const totalStudents = document.getElementById('totalStudents');

  let students = [
   
  ];
  let isFiltered = false;

  addStudentBtn.addEventListener('click', () => {
    const name = studentNameInput.value.trim();
    const grade = studentGradeInput.value.trim().toUpperCase();

    if (name && grade) {
      students.push({ name, grade });
      studentNameInput.value = '';
      studentGradeInput.value = '';
      updateStudentList();
    }
  });

  filterBtn.addEventListener('click', () => {
    const filterGrade = filterGradeInput.value.trim().toUpperCase();
    if (filterGrade) {
      isFiltered = true;
      updateStudentList(filterGrade);
    }
  });

  filterGradeInput.addEventListener('input', () => {
    const filterGrade = filterGradeInput.value.trim();
    if (filterGrade === '' && isFiltered) {
      isFiltered = false;
      updateStudentList();
    }
  });

  resetBtn.addEventListener('click', () => {
    students = [];
    filterGradeInput.value = '';
    isFiltered = false;
    updateStudentList();
  });

  function updateStudentList(filterGrade = '') {
    studentList.innerHTML = '';
    const filtered = filterGrade
      ? students.filter(s => s.grade === filterGrade)
      : students;

    filtered.forEach((student, index) => {
      const item = document.createElement('div');
      item.className = 'border p-2 rounded bg-gray-50';
      item.innerHTML = `<strong>${index + 1}. ${student.name}</strong> <span class="ml-2 text-sm text-gray-600">Grade: ${student.grade}</span>`;
      studentList.appendChild(item);
    });

    totalStudents.textContent = `Total Students: ${filtered.length}`;
  }
});
