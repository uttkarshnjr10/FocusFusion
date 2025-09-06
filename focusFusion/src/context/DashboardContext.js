import { createContext, useState, useEffect } from 'react';

export const DashboardContext = createContext();

export function DashboardProvider({ children, userName, handleLogout }) {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [isFocusSessionActive, setIsFocusSessionActive] = useState(false);
  const [focusSessionTime, setFocusSessionTime] = useState(0);
  const [studyGroups, setStudyGroups] = useState([]);
  const [availableGroups, setAvailableGroups] = useState([
    { id: 1, name: "JEE Physics Group", exam: "JEE", members: ["Alex", "Bob"] },
    { id: 2, name: "NEET Biology Group", exam: "NEET", members: ["Charlie", "Dana"] },
    { id: 3, name: "CS Programming Group", exam: "CS", members: ["Eve", "Frank"] },
  ]);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('create'); // 'create' or 'join'
  const [newGroupName, setNewGroupName] = useState('');
  const [targetExam, setTargetExam] = useState('');
  const [newTask, setNewTask] = useState({ subject: '', description: '', time: '', completed: false });

  // Focus Session Timer
  useEffect(() => {
    let timer;
    if (isFocusSessionActive) {
      timer = setInterval(() => {
        setFocusSessionTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isFocusSessionActive]);

  const startFocusSession = () => setIsFocusSessionActive(true);
  const stopFocusSession = () => {
    setIsFocusSessionActive(false);
    setFocusSessionTime(0);
  };

  const openJoinModal = (tab = 'create') => {
    setModalTab(tab);
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
    setNewGroupName('');
    setTargetExam('');
    setModalTab('create');
  };

  const createStudyGroup = () => {
    if (newGroupName && targetExam) {
      const newGroup = {
        id: studyGroups.length + 1,
        name: newGroupName,
        exam: targetExam,
        members: [userName],
        materials: [],
        discussion: [],
      };
      setStudyGroups([...studyGroups, newGroup]);
      setAvailableGroups([...availableGroups, newGroup]);
      closeJoinModal();
    }
  };

  const joinStudyGroup = (groupId) => {
    const group = availableGroups.find((g) => g.id === groupId);
    if (!studyGroups.some((g) => g.id === groupId)) {
      setStudyGroups([...studyGroups, { ...group, members: [...group.members, userName] }]);
      setAvailableGroups(
        availableGroups.map((g) =>
          g.id === groupId ? { ...g, members: [...g.members, userName] } : g
        )
      );
      closeJoinModal();
    }
  };

  const openNotesModal = () => {
    setIsNotesModalOpen(true);
  };

  const closeNotesModal = () => {
    setIsNotesModalOpen(false);
  };

  const saveNote = (newNote) => {
    if (newNote) {
      setNotes([...notes, { content: newNote, createdAt: new Date().toISOString() }]);
      closeNotesModal();
    }
  };

  const addTask = () => {
    if (newTask.subject && newTask.description && newTask.time) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ subject: '', description: '', time: '', completed: false });
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <DashboardContext.Provider
      value={{
        userName,
        handleLogout,
        activeSection,
        setActiveSection,
        isFocusSessionActive,
        focusSessionTime,
        startFocusSession,
        stopFocusSession,
        studyGroups,
        availableGroups,
        createStudyGroup,
        joinStudyGroup,
        notes,
        saveNote,
        tasks,
        addTask,
        toggleTaskCompletion,
        isJoinModalOpen,
        openJoinModal,
        closeJoinModal,
        modalTab,
        newGroupName,
        setNewGroupName,
        targetExam,
        setTargetExam,
        isNotesModalOpen,
        openNotesModal,
        closeNotesModal,
        newTask,
        setNewTask,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}