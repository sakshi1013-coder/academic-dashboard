function addCourse() {
      const input = document.getElementById('new-course');
      const course = input.value.trim();
      if (course) {
        const list = document.getElementById('courses-list');
        const label = document.createElement('label');
        label.textContent = course;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'course-checkbox';
        checkbox.addEventListener('change', updateProgress);
        list.appendChild(label);
        list.appendChild(checkbox);
        list.appendChild(document.createElement('br'));
        input.value = '';
      }
    }

    function addTask() {
      const desc = document.getElementById('new-task').value;
      const date = document.getElementById('due-date').value;
      if (desc && date) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `${desc} - <span>Due: ${date}</span>`;
        taskList.appendChild(li);
        document.getElementById('new-task').value = '';
        document.getElementById('due-date').value = '';
        updateProgress();
      }
    }

    function updateProgress() {
      const checkboxes = document.querySelectorAll('.course-checkbox');
      const total = checkboxes.length;
      const completed = Array.from(checkboxes).filter(c => c.checked).length;
      const percent = total ? (completed / total) * 100 : 0;
      document.getElementById('task-progress').style.width = percent + '%';
    }

    document.querySelectorAll('.course-checkbox').forEach(cb => {
      cb.addEventListener('change', updateProgress);
    });