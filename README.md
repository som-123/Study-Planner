# Study Planner

## Objective

The Study Planner website allows students to organize their study schedules, track their progress, and manage their tasks effectively. This project utilizes React for the frontend and local storage for data persistence.

## Features

1. **Home Page**
   - Welcome message introducing the study planner.
   - Navigation bar to access different sections: Home, Add Task, View Tasks, Calendar, About.

2. **Add Task Page**
   - A form to add a new study task with the following fields:
     - Task Name
     - Description
     - Subject
     - Due Date
     - Priority (High, Medium, Low)
   - Form validation for all fields.
   - Button to submit the form and save the task.

3. **View Tasks Page**
   - Display a list of all tasks.
   - Each task shows the task name, description, subject, due date, and priority.
   - Options to edit or delete a task.
   - Ability to mark tasks as complete.
   - Filter tasks by subject, priority, or completion status.

4. **Calendar Page**
   - A calendar view to visualize tasks by their due dates.
   - Highlight dates with tasks and show task details on click.

## Technologies Used

- React
- CSS (for styling)
- LocalStorage (for data persistence)
- FullCalendar (for calendar integration)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/study-planner.git
   cd study-planner
   ```
2. **Install dependencies:
   ```bash
   npm install
   ```
3. **Run the application:
   ```bash
   npm start
   ```
