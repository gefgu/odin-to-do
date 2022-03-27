export default function todoFactory(
  title,
  description,
  dueDate,
  priority,
  doneStatus
) {
  return { title, description, dueDate, priority, doneStatus };
}
