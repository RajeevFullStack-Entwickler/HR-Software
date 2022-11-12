import { useState} from 'react';
import axios from 'axios';

function App() {

    // form states
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [designation, setDesignation]=useState('');
    const [salary, setSalary]=useState('');

    // submit event
    const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(name,age,designation,salary);
      const data={
        Name:name,
        Age:age,
        Designation:designation,
        Salary:salary
      }
      axios.post('https://sheet.best/api/sheets/a497687b-76a3-45cb-b070-81fa1c3547fd',data).then((response)=>{
        console.log(response);
        // clearing form fields
        setName('');
        setAge('');
        setDesignation('');
        setSalary('');
      })
    }

  return (
    <div className="container">

      <br></br>
      <h1>HR Software - Google sheets using React</h1>
      <br></br>

      {/* form */}
      <form autoComplete="off" className='form-group' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' placeholder="Enter your name" required className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
        <br></br>
        <label>Age:</label>
        <input type='text' placeholder="Enter your age" required className='form-control' onChange={(e)=>setAge(e.target.value)} value={age}/>
        <br></br>
        <label>Designation:</label>
        <input type='text' placeholder="Enter your designation" required className='form-control' onChange={(e)=>setDesignation(e.target.value)} value={designation}/>
        <br></br>
        <label>Salary:</label>
        <input type='text' placeholder="Enter your salary" required className='form-control' onChange={(e)=>setSalary(e.target.value)} value={salary}/>
        <br></br>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
