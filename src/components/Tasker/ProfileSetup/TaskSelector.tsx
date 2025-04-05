import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import styles from './TaskSelector.module.css';

const tasks = [
  'House Hold Servicer',
  'Personal assistant',
  'Pet care',
  'Technology and digital assistance',
  'Event Support',
  'Moving and organization',
  'Creative and costume Tasks',
  'General Errands',
  'Other'
];

export const TaskSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');

  const handleSelect = (task: string) => {
    setSelectedTask(task);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelectedTask('');
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>What tasks can you help with?</label>
      <div className="relative">
        <div
          className={styles.select}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.selected}>
            <span>{selectedTask || 'Household Services'}</span>
            <div className="flex items-center gap-2">
              {selectedTask && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelection();
                  }}
                  className={styles.clearButton}
                >
                  <X size={16} />
                </button>
              )}
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={styles.dropdown}>
            {tasks.map((task) => (
              <div
                key={task}
                className={styles.option}
                onClick={() => handleSelect(task)}
              >
                {task}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
