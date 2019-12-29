import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MentorList from './mentor-list';
import { Tag } from 'reactbulma'
import Form from './form';
function App() {

  let data1 = [
    {
      id: 1,
      img: "https://img.icons8.com/officel/2x/user.png",
      name: 'sudhir',
      occupation: 'software developer at workplacefabric',
      collage: 'NIT Jamshedpur',
      tasks: ['task1', 'task2']
    },
    {
      id: 2,
      img: "https://img.icons8.com/officel/2x/user.png",
      name: 'atul',
      occupation: 'software developer at workplacefabric',
      collage: 'NIT Jamshedpur',
      tasks: ['task3']
    },
    {
      id: 3,
      img: "https://img.icons8.com/officel/2x/user.png",
      name: 'ravi',
      occupation: 'software developer at workplacefabric',
      collage: 'NIT Jamshedpur',
      tasks: ['task4']
    },
  ]
  let [data, setData] = useState(data1);
  let addTask = (v) => {
    console.log('val ----', v);
    let temp = data.filter(d => d.name !== v.name);
    let [obj] = data.filter(d => d.name === v.name);
    console.log('obj--', obj);
    obj.tasks.push(v.task);
    setData([...temp, obj]);
  }
  let deleteMentor = (name) => {
    console.log('deleteMentor-----', name);
    let temp = data.filter(d => d.name !== name);
    setData(temp);

  }
  let addMentor = (mentor) => {
    console.log('addmentor', mentor);
    mentor.img = mentor.files.base64;
    mentor.task = [];

    setData([...data, mentor]);
  }
  return (
    <>
      <div>
        {/* <Tag primary medium>Medium</Tag> */}
        <Tag info large onClick={() => alert('hi there')}>Add Mentor</Tag>
      </div>
      <Form addMentor={addMentor} />
      <div>
        {data.map(v => <MentorList key={v.id} data={v} updateData={v => addTask(v)} deleteMentor={v => deleteMentor(v)} />)}
      </div>
    </>);
}

export default App;
