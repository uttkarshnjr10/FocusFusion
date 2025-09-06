// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// function Dashboard({ userName, handleLogout }) {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
//   const [activeSection, setActiveSection] = useState('Dashboard');
//   const [isFocusSessionActive, setIsFocusSessionActive] = useState(false);
//   const [focusSessionTime, setFocusSessionTime] = useState(0);
//   const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
//   const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
//   const [modalTab, setModalTab] = useState('create'); // 'create' or 'join'
//   const [studyGroups, setStudyGroups] = useState([]);
//   const [availableGroups, setAvailableGroups] = useState([
//     { id: 1, name: "JEE Physics Group", exam: "JEE", members: ["Alex", "Bob"] },
//     { id: 2, name: "NEET Biology Group", exam: "NEET", members: ["Charlie", "Dana"] },
//     { id: 3, name: "CS Programming Group", exam: "CS", members: ["Eve", "Frank"] },
//   ]);
//   const [newGroupName, setNewGroupName] = useState('');
//   const [targetExam, setTargetExam] = useState('');
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState('');
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({ subject: '', description: '', time: '', completed: false });
//   const [plannerSettings, setPlannerSettings] = useState({ exam: '', dailyHours: '', weeklyHours: '', monthlyHours: '' });
//   const [messages, setMessages] = useState({}); // { groupId: [{ user, message, timestamp }] }
//   const [newMessage, setNewMessage] = useState('');
//   const [resources, setResources] = useState({}); // { groupId: [{ name, type, url }] }
//   const [newResource, setNewResource] = useState({ name: '', type: '', url: '' });
//   const [discussionThreads, setDiscussionThreads] = useState({}); // { groupId: [{ topic, posts: [{ user, message, timestamp }] }] }
//   const [newThreadTopic, setNewThreadTopic] = useState('');
//   const [newThreadPost, setNewThreadPost] = useState('');
//   const navigate = useNavigate();

//   // Focus Session Timer
//   useEffect(() => {
//     let timer;
//     if (isFocusSessionActive) {
//       timer = setInterval(() => {
//         setFocusSessionTime((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isFocusSessionActive]);

//   const toggleSidebar = () => {
//     setIsSidebarExpanded( prev => !prev);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleLogoutClick = () => {
//     handleLogout();
//     navigate('/');
//   };

//   const startFocusSession = () => {
//     setIsFocusSessionActive(true);
//   };

//   const stopFocusSession = () => {
//     setIsFocusSessionActive(false);
//     setFocusSessionTime(0);
//   };

//   const openJoinModal = (tab = 'create') => {
//     setModalTab(tab);
//     setIsJoinModalOpen(true);
//   };

//   const closeJoinModal = () => {
//     setIsJoinModalOpen(false);
//     setNewGroupName('');
//     setTargetExam('');
//     setModalTab('create');
//   };

//   const createStudyGroup = () => {  
//     if (newGroupName && targetExam) {
//       const newGroup = {
//         id: studyGroups.length + 1,
//         name: newGroupName,
//         exam: targetExam,
//         members: [userName],
//         materials: [],
//         discussion: []
//       };
//       setStudyGroups([...studyGroups, newGroup]);
//       setAvailableGroups([...availableGroups, newGroup]);
//       closeJoinModal();
//     }
//   };

//   const joinStudyGroup = (groupId) => {
//     const group = availableGroups.find(g => g.id === groupId);
//     if (!studyGroups.some(g => g.id === groupId)) {
//       setStudyGroups([...studyGroups, { ...group, members: [...group.members, userName] }]);
//       setAvailableGroups(availableGroups.map(g => g.id === groupId ? { ...g, members: [...g.members, userName] } : g));
//       closeJoinModal();
//     }
//   };

//   const openNotesModal = ()   => {
//     setIsNotesModalOpen(true);
//   };

//   const closeNotesModal = () => {
//     setIsNotesModalOpen(false);
//     setNewNote('');
//   };  

//   const saveNote = () => {
//     if (newNote) {
//       setNotes([...notes, { content: newNote, createdAt: new Date().toISOString() }]);
//       closeNotesModal();
//     }
//   };

//   const addTask = () => {
//     if (newTask.subject && newTask.description && newTask.time) {
//       setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
//       setNewTask({ subject: '', description: '', time: '', completed: false });
//     }
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//   };

//   const sendMessage = (groupId) => {
//     if (newMessage) {
//       const groupMessages = messages[groupId] || [];
//       setMessages({
//         ...messages,
//         [groupId]: [...groupMessages, { user: userName, message: newMessage, timestamp: new Date().toISOString() }]
//       });
//       setNewMessage('');
//     }
//   };

//   const shareResource = (groupId) => {
//     if (newResource.name && newResource.type && newResource.url) {
//       const groupResources = resources[groupId] || [];
//       setResources({
//         ...resources,
//         [groupId]: [...groupResources, newResource]
//       });
//       setNewResource({ name: '', type: '', url: '' });
//     }
//   };

//   const createThread = (groupId) => {
//     if (newThreadTopic) {
//       const groupThreads = discussionThreads[groupId] || [];
//       setDiscussionThreads({
//         ...discussionThreads,
//         [groupId]: [...groupThreads, { topic: newThreadTopic, posts: [] }]
//       });
//       setNewThreadTopic('');
//     }
//   };

//   const addPostToThread = (groupId, threadIndex) => {
//     if (newThreadPost) {
//       const groupThreads = discussionThreads[groupId] || [];
//       const updatedThreads = [...groupThreads];
//       updatedThreads[threadIndex].posts.push({ user: userName, message: newThreadPost, timestamp: new Date().toISOString() });
//       setDiscussionThreads({
//         ...discussionThreads,
//         [groupId]: updatedThreads
//       });
//       setNewThreadPost('');
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'Dashboard':
//         return (
//           <div className="section-content fade-in">
//             <h1>
//               Hello, {userName}! 👋
//             </h1>
//             <p>Ready to continue your learning journey?</p>
//             <div className="action-buttons">
//               <button className="action-btn" onClick={startFocusSession}>
//                 <span className="icon">⏱️</span> Start Session
//               </button>
//               <button className="action-btn" onClick={() => openJoinModal('join')}>
//                 <span className="icon">👥</span> Join Study Group
//               </button>
//               <button className="action-btn" onClick={openNotesModal}>
//                 <span className="icon">📝</span> Create Note
//               </button>
//               <button className="action-btn emergency">
//                 <span className="icon">⚠️</span> Deep Focus
//               </button>
//             </div>
//             <div className="progress-section">
//               <div className="progress-header">
//                 <h2>Today's Progress</h2>
//                 <a href="www.google.com" className="view-details">View Details</a>
//               </div>
//               <div className="progress-stats">
//                 <div className="stat">
//                   <h3>Study Time</h3>
//                   <p>1h 20m</p>
//                   <div className="progress-bar">
//                     <div className="progress-fill" style={{ width: '75%' }}></div>
//                   </div>
//                   <p className="subtext">Daily Goal Progress</p>
//                 </div>
//                 <div className="stat">
//                   <h3>Focus Rate</h3>
//                   <p>88%</p>
//                 </div>
//                 <div className="stat">
//                   <h3>Sessions</h3>
//                   <p>4</p>
//                 </div>
//                 <div className="stat">
//                   <h3>Current Streak</h3>
//                   <p>
//                     <span className="icon">🔥</span> 5 days
//                   </p>
//                   <p className="subtext">Points Earned Today: 100</p>
//                 </div>
//               </div>
//             </div>
//             <div className="study-groups">
//               <div className="study-groups-header">
//                 <h2>Your Study Groups</h2>
//                 <a href="www.google.com" className="view-all">View All</a>
//               </div>
//               {studyGroups.length === 0 ? (
//                 <p>You haven't joined any study groups yet.</p>
//               ) : (
//                 <div className="resources-grid">
//                   {studyGroups.map((group) => (
//                     <div key={group.id} className="resource-card">
//                       <h3>{group.name}</h3>
//                       <p>Target Exam: {group.exam}</p>
//                       <button className="view-btn">View Group</button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       case 'Study Groups':
//         return (
//           <div className="section-content fade-in">
//             <h1>Study Groups</h1>
//             <button className="action-btn" onClick={() => openJoinModal('join')}>
//               <span className="icon">👥</span> Join Study Group
//             </button>
//             {studyGroups.length === 0 ? (
//               <p>You haven't joined any study groups yet.</p>
//             ) : (
//               <div className="resources-grid">
//                 {studyGroups.map((group) => (
//                   <div key={group.id} className="resource-card">
//                     <h3>{group.name}</h3>
//                     <p>Target Exam: {group.exam}</p>
//                     <p>Members: {group.members.join(', ')}</p>
//                     <div className="group-content">
//                       <h4>Chat</h4>
//                       <div className="chat-box">
//                         {(messages[group.id] || []).map((msg, index) => (
//                           <div key={index} className="chat-message">
//                             <strong>{msg.user}:</strong> {msg.message} <small>({new Date(msg.timestamp).toLocaleTimeString()})</small>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="chat-input">
//                         <input
//                           type="text"
//                           value={newMessage}
//                           onChange={(e) => setNewMessage(e.target.value)}
//                           placeholder="Type a message..."
//                         />
//                         <button onClick={() => sendMessage(group.id)}>Send</button>
//                       </div>
//                       <h4>Shared Resources</h4>
//                       {(resources[group.id] || []).length === 0 ? (
//                         <p>No resources shared yet.</p>
//                       ) : (
//                         <ul>
//                           {(resources[group.id] || []).map((res, index) => (
//                             <li key={index}>
//                               <a href={res.url} target="_blank" rel="noopener noreferrer">{res.name} ({res.type})</a>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                       <div className="resource-input">
//                         <input
//                           type="text"
//                           placeholder="Resource Name"
//                           value={newResource.name}
//                           onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
//                         />
//                         <select
//                           value={newResource.type}
//                           onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
//                         >
//                           <option value="">Select Type</option>
//                           <option value="PDF">PDF</option>
//                           <option value="Link">Link</option>
//                           <option value="Other">Other</option>
//                         </select>
//                         <input
//                           type="text"
//                           placeholder="URL"
//                           value={newResource.url}
//                           onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
//                         />
//                         <button onClick={() => shareResource(group.id)}>Share</button>
//                       </div>
//                       <h4>Discussions</h4>
//                       {(discussionThreads[group.id] || []).length === 0 ? (
//                         <p>No discussion threads yet.</p>
//                       ) : (
//                         (discussionThreads[group.id] || []).map((thread, index) => (
//                           <div key={index} className="discussion-thread">
//                             <h5>{thread.topic}</h5>
//                             {thread.posts.map((post, postIndex) => (
//                               <div key={postIndex} className="thread-post">
//                                 <strong>{post.user}:</strong> {post.message} <small>({new Date(post.timestamp).toLocaleTimeString()})</small>
//                               </div>
//                             ))}
//                             <div className="thread-input">
//                               <input
//                                 type="text"
//                                 value={newThreadPost}
//                                 onChange={(e) => setNewThreadPost(e.target.value)}
//                                 placeholder="Add a post..."
//                               />
//                               <button onClick={() => addPostToThread(group.id, index)}>Post</button>
//                             </div>
//                           </div>
//                         ))
//                       )}
//                       <div className="thread-input">
//                         <input
//                           type="text"
//                           value={newThreadTopic}
//                           onChange={(e) => setNewThreadTopic(e.target.value)}
//                           placeholder="New thread topic..."
//                         />
//                         <button onClick={() => createThread(group.id)}>Create Thread</button>
//                       </div>
//                     </div>
//                     <button className="view-btn">View Group</button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         );
//       case 'Planner':
//         return (
//           <div className="section-content fade-in">
//             <h1>Planner</h1>
//             <div className="planner-settings">
//               <h3>Planner Settings</h3>
//               <div className="settings-form">
//                 <label>Target Exam:</label>
//                 <select
//                   value={plannerSettings.exam}
//                   onChange={(e) => setPlannerSettings({ ...plannerSettings, exam: e.target.value })}
//                 >
//                   <option value="">Select Exam</option>
//                   <option value="JEE">JEE</option>
//                   <option value="NEET">NEET</option>
//                   <option value="Class 10 & 12">Class 10 & 12</option>
//                   <option value="UPSC">UPSC</option>
//                   <option value="CS">CS</option>
//                   <option value="CA">CA</option>
//                 </select>
//                 <label>Daily Study Hours:</label>
//                 <input
//                   type="number"
//                   value={plannerSettings.dailyHours}
//                   onChange={(e) => setPlannerSettings({ ...plannerSettings, dailyHours: e.target.value })}
//                   placeholder="e.g., 4"
//                 />
//                 <label>Weekly Study Hours:</label>
//                 <input
//                   type="number"
//                   value={plannerSettings.weeklyHours}
//                   onChange={(e) => setPlannerSettings({ ...plannerSettings, weeklyHours: e.target.value })}
//                   placeholder="e.g., 20"
//                 />
//                 <label>Monthly Study Hours:</label>
//                 <input
//                   type="number"
//                   value={plannerSettings.monthlyHours}
//                   onChange={(e) => setPlannerSettings({ ...plannerSettings, monthlyHours: e.target.value })}
//                   placeholder="e.g., 80"
//                 />
//               </div>
//             </div>
//             <div className="planner-tabs">
//               <button className="tab active">Day</button>
//               <button className="tab">Week</button>
//               <button className="tab">Month</button>
//             </div>
//             <div className="planner-content">
//               <h3>Day Planning</h3>
//               <p>Target Exam: {plannerSettings.exam || 'Not Set'}</p>
//               <ul>
//                 <li>9:00 AM - 10:30 AM: Physics - Mechanics</li>
//                 <li>11:00 AM - 12:30 PM: Chemistry - Organic Reactions</li>
//                 <li>2:00 PM - 3:30 PM: Math - Calculus</li>
//               </ul>
//               <p>(Static plan for now, to be enhanced later)</p>
//             </div>
//             <div className="todo-list">
//               <h3>To-Do List</h3>
//               <div className="todo-form">
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   value={newTask.subject}
//                   onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Task Description"
//                   value={newTask.description}
//                   onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//                 />
//                 <input
//                   type="time"
//                   value={newTask.time}
//                   onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
//                 />
//                 <button onClick={addTask}>Add Task</button>
//               </div>
//               {tasks.length === 0 ? (
//                 <p>No tasks added yet.</p>
//               ) : (
//                 <ul>
//                   {tasks.map((task) => (
//                     <li key={task.id} className={task.completed ? 'completed' : ''}>
//                       <input
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => toggleTaskCompletion(task.id)}
//                       />
//                       <span>{task.subject}: {task.description} at {task.time}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         );
//       case 'Music':
//         return (
//           <div className="section-content fade-in">
//             <h1>Music</h1>
//             <div className="music-player">
//               <h3>Focus Playlist</h3>
//               <div className="music-controls">
//                 <button className="control-btn">▶️ Play</button>
//                 <button className="control-btn">⏸️ Pause</button>
//                 <button className="control-btn">⏹️ Stop</button>
//               </div>
//               <ul className="music-list">
//                 <li>Ambient Study Music</li>
//                 <li>Classical Focus Tracks</li>
//                 <li>Lo-Fi Beats</li>
//                 <li>Nature Sounds</li>
//               </ul>
//             </div>
//           </div>
//         );
//       case 'Notes':
//         return (
//           <div className="section-content fade-in">
//             <h1>Notes</h1>
//             <button className="action-btn" onClick={openNotesModal}>
//               <span className="icon">📝</span> Create Note
//             </button>
//             {notes.length === 0 ? (
//               <p>No notes created yet.</p>
//             ) : (
//               <div className="notes-list full-width">
//                 {notes.map((note, index) => (
//                   <div key={index} className="note-card">
//                     <p>{note.content}</p>
//                     <small>{new Date(note.createdAt).toLocaleString()}</small>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         );
//       case 'Library':
//         return (
//           <div className="section-content fade-in">
//             <h1>Library</h1>
//             <div className="resources-grid">
//               <div className="resource-card">
//                 <h3>JEE Materials</h3>
//                 <p>Notes, past papers, and resources for JEE preparation.</p>
//                 <button className="view-btn">View</button>
//               </div>
//               <div className="resource-card">
//                 <h3>NEET Materials</h3>
//                 <p>Notes, past papers, and resources for NEET preparation.</p>
//                 <button className="view-btn">View</button>
//               </div>
//               <div className="resource-card">
//                 <h3>CS Materials</h3>
//                 <p>Notes, past papers, and resources for Computer Science.</p>
//                 <button className="view-btn">View</button>
//               </div>
//               <div className="resource-card">
//                 <h3>Class 12 Materials</h3>
//                 <p>Notes, past papers, and resources for Class 12.</p>
//                 <button className="view-btn">View</button>
//               </div>
//             </div>
//           </div>
//         );
//       case 'Analytics':
//         const completedTasks = tasks.filter(task => task.completed).length;
//         const pendingTasks = tasks.length - completedTasks;
//         const subjectStats = tasks.reduce((acc, task) => {
//           acc[task.subject] = acc[task.subject] || { planned: 0, completed: 0 };
//           acc[task.subject].planned += 1;
//           if (task.completed) acc[task.subject].completed += 1;
//           return acc;
//         }, {});
//         return (
//           <div className="section-content fade-in">
//             <h1>Analytics</h1>
//             <div className="analytics-section">
//               <div className="analytics-card">
//                 <h3>Total Study Time (Weekly)</h3>
//                 <p>15h 30m</p>
//                 <div className="progress-bar">
//                   <div className="progress-fill" style={{ width: '60%' }}></div>
//                 </div>
//               </div>
//               <div className="analytics-card">
//                 <h3>Notes Created</h3>
//                 <p>{notes.length}</p>
//               </div>
//               <div className="analytics-card">
//                 <h3>Study Group Engagement</h3>
//                 <p>{studyGroups.length} Groups Joined</p>
//               </div>
//               <div className="analytics-card">
//                 <h3>Focus Session Data</h3>
//                 <p>Total Sessions: 4</p>
//                 <p>Total Time: 3h 20m</p>
//               </div>
//               <div className="analytics-card">
//                 <h3>Task Completion</h3>
//                 <p>Completed: {completedTasks}</p>
//                 <p>Pending: {pendingTasks}</p>
//                 <div className="progress-bar">
//                   <div className="progress-fill" style={{ width: `${(completedTasks / tasks.length) * 100 || 0}%` }}></div>
//                 </div>
//               </div>
//               <div className="analytics-card">
//                 <h3>Subject Attention</h3>
//                 {Object.keys(subjectStats).map(subject => (
//                   <div key={subject}>
//                     <p>{subject}: {subjectStats[subject].completed}/{subjectStats[subject].planned} tasks completed</p>
//                     <div className="progress-bar">
//                       <div className="progress-fill" style={{ width: `${(subjectStats[subject].completed / subjectStats[subject].planned) * 100}%` }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       case 'Settings':
//         return (
//           <div className="section-content fade-in">
//             <h1>Settings</h1>
//             <p>Customize your StudyFusion experience.</p>
//             <p>(Placeholder for settings options)</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="navbar">
//         <div className="navbar-logo">
//           <span>StudyFusion</span>
//         </div>
//         <div className="navbar-search">
//           <span className="search-icon">🔍</span>
//           <input type="text" placeholder="Search for groups, resources or topics..." />
//         </div>
//         <div className="navbar-user">
//           {isFocusSessionActive && (
//             <span className="focus-timer">Focus: {formatTime(focusSessionTime)}</span>
//           )}
//           {isFocusSessionActive && (
//             <button className="stop-btn" onClick={stopFocusSession}>Stop</button>
//           )}
//           <span>{userName} | Study Level 1</span>
//           <span className="icon">🔔</span>
//           <span className="icon">👤</span>
//         </div>
//       </div>
//       <div className="layout">
//         <div className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
//           <div className="sidebar-header">
//             <button className="hamburger" onClick={toggleSidebar}>
//               ☰
//             </button>
//             <div className="user-info">
//               <span className="user-name">{isSidebarExpanded ? userName : ''}</span>
//               <span className="user-level">{isSidebarExpanded ? 'STUDY LEVEL 1' : ''}</span>
//               <div className="daily-goal">
//                 <span>{isSidebarExpanded ? 'Daily Goal' : ''}</span>
//                 <span className="goal-percentage">75%</span>
//               </div>
//             </div>
//           </div>
//           <nav className="sidebar-nav">
//             <button
//               className={`nav-item ${activeSection === 'Dashboard' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Dashboard')}
//             >
//               <span className="icon">📊</span>
//               {isSidebarExpanded && 'Dashboard'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Study Groups' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Study Groups')}
//             >
//               <span className="icon">👥</span>
//               {isSidebarExpanded && 'Study Groups'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Planner' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Planner')}
//             >
//               <span className="icon">📅</span>
//               {isSidebarExpanded && 'Planner'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Notes' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Notes')}
//             >
//               <span className="icon">📝</span>
//               {isSidebarExpanded && 'Notes'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Music' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Music')}
//             >
//               <span className="icon">🎵</span>
//               {isSidebarExpanded && 'Music'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Library' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Library')}
//             >
//               <span className="icon">📚</span>
//               {isSidebarExpanded && 'Library'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Analytics' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Analytics')}
//             >
//               <span className="icon">📈</span>
//               {isSidebarExpanded && 'Analytics'}
//             </button>
//             <button
//               className={`nav-item ${activeSection === 'Settings' ? 'active' : ''}`}
//               onClick={() => handleSectionChange('Settings')}
//             >
//               <span className="icon">⚙️</span>
//               {isSidebarExpanded && 'Settings'}
//             </button>
//             <button className="nav-item logout" onClick={handleLogoutClick}>
//               <span className="icon">🚪</span>
//               {isSidebarExpanded && 'Logout'}
//             </button>
//           </nav>
//         </div>
//         <div className="main-content">
//           {renderContent()}
//         </div>
//       </div>

//       {/* Join Study Group Modal */}
//       {isJoinModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Join or Create a Study Group</h2>
//             <div className="modal-tabs">
//               <button
//                 className={`modal-tab ${modalTab === 'create' ? 'active' : ''}`}
//                 onClick={() => setModalTab('create')}
//               >
//                 Create Group
//               </button>
//               <button
//                 className={`modal-tab ${modalTab === 'join' ? 'active' : ''}`}
//                 onClick={() => setModalTab('join')}
//               >
//                 Join Group
//               </button>
//             </div>
//             {modalTab === 'create' ? (
//               <div className="modal-content">
//                 <label>Group Name:</label>
//                 <input
//                   type="text"
//                   value={newGroupName}
//                   onChange={(e) => setNewGroupName(e.target.value)}
//                   placeholder="Enter group name"
//                 />
//                 <label>Target Exam:</label>
//                 <select value={targetExam} onChange={(e) => setTargetExam(e.target.value)}>
//                   <option value="">Select Exam</option>
//                   <option value="JEE">JEE</option>
//                   <option value="NEET">NEET</option>
//                   <option value="Class 10 & 12">Class 10 & 12</option>
//                   <option value="UPSC">UPSC</option>
//                   <option value="CS">CS</option>
//                   <option value="CA">CA</option>
//                 </select>
//                 <div className="modal-actions">
//                   <button className="modal-btn" onClick={createStudyGroup}>Create Group</button>
//                   <button className="modal-btn cancel" onClick={closeJoinModal}>Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               <div className="modal-content">
//                 <label>Filter by Target Exam:</label>
//                 <select value={targetExam} onChange={(e) => setTargetExam(e.target.value)}>
//                   <option value="">All Exams</option>
//                   <option value="JEE">JEE</option>
//                   <option value="NEET">NEET</option>
//                   <option value="Class 10 & 12">Class 10 & 12</option>
//                   <option value="UPSC">UPSC</option>
//                   <option value="CS">CS</option>
//                   <option value="CA">CA</option>
//                 </select>
//                 <div className="group-list">
//                   {availableGroups
//                     .filter(group => !targetExam || group.exam === targetExam)
//                     .map(group => (
//                       <div key={group.id} className="group-item">
//                         <div>
//                           <strong>{group.name}</strong>
//                           <p>Target Exam: {group.exam}</p>
//                           <p>Members: {group.members.join(', ')}</p>
//                         </div>
//                         <button
//                           className="join-btn"
//                           onClick={() => joinStudyGroup(group.id)}
//                           disabled={studyGroups.some(g => g.id === group.id)}
//                         >
//                           {studyGroups.some(g => g.id === group.id) ? 'Joined' : 'Join'}
//                         </button>
//                       </div>
//                     ))}
//                 </div>
//                 <div className="modal-actions">
//                   <button className="modal-btn cancel" onClick={closeJoinModal}>Close</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Create Note Modal */}
//       {isNotesModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Create a Note</h2>
//             <div className="modal-content">
//               <textarea
//                 value={newNote}
//                 onChange={(e) => setNewNote(e.target.value)}
//                 placeholder="Write your note here..."
//                 rows="5"
//               />
//             </div>
//             <div className="modal-actions">
//               <button className="modal-btn" onClick={saveNote}>Save Note</button>
//               <button className="modal-btn cancel" onClick={closeNotesModal}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


// -------------------------------------------------------------------------------------------------------------------------
import { DashboardProvider } from '../context/DashboardContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

function Dashboard({ userName, handleLogout }) {
  return (
    <DashboardProvider userName={userName} handleLogout={handleLogout}>
      <div className="dashboard">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </DashboardProvider>
  );
}

export default Dashboard;