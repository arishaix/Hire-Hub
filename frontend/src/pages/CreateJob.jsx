import {
useState
}
from 'react';

import { useNavigate } from 'react-router-dom';
import api
from '../services/api';

function CreateJob(){

const navigate = useNavigate();
const [loading, setLoading] = useState(false);

const [
form,
setForm
]
=

useState({

title:'',
description:'',
company:'',
location:''

});

function change(e){

setForm({

...form,

[e.target.name]: e.target.value

});

}

async function submit(e){

e.preventDefault();

if (!form.title || !form.company || !form.location || !form.description) {
alert('Please fill in all fields');
return;
}

try{

setLoading(true);

await api.post(
'/jobs/createJob',

form,

{
headers:{
Authorization:
`Bearer ${
localStorage.getItem(
'token'
)
}`
}
}

);

alert(
'Job created successfully!'
);

navigate('/jobs');

}catch(err){

console.log(
err
);

alert('Error creating job. Please try again.');

}
finally {
setLoading(false);
}

}

return(

<div
style={{
background: 'white',
minHeight:
'100vh',

display:
'flex',

justifyContent:
'center',

paddingTop:
'60px',
paddingBottom: '60px'
}}

>

<form
onSubmit={
submit
}

style={{
width:
'100%',
maxWidth: '500px',
padding:
'40px',

display:
'flex',

flexDirection:
'column',

gap:
'20px',

borderRadius:
'12px',

background:
'rgba(242, 200, 219, 0.2)',

backdropFilter:
'blur(12px)',
boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
border: '2px solid rgba(217, 153, 232, 0.3)'
}}

>

<h1 style={{color: '#8a5a99', marginTop: 0, textAlign: 'center'}}>
Create New Job
</h1>

<div>
<label style={{display: 'block', color: '#8a5a99', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px'}}>
Job Title
</label>
<input
name='title'
placeholder='e.g., Senior React Developer'
value={form.title}
onChange={change}
style={{
width: '100%',
padding: '12px 16px',
border: '2px solid #d999e8',
borderRadius: '8px',
fontSize: '14px',
boxSizing: 'border-box',
transition: 'border-color 0.3s',
outline: 'none'
}}
onFocus={(e) => e.target.style.borderColor = '#8a5a99'}
onBlur={(e) => e.target.style.borderColor = '#d999e8'}
/>
</div>

<div>
<label style={{display: 'block', color: '#8a5a99', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px'}}>
Company Name
</label>
<input
name='company'
placeholder='e.g., Tech Company Inc.'
value={form.company}
onChange={change}
style={{
width: '100%',
padding: '12px 16px',
border: '2px solid #d999e8',
borderRadius: '8px',
fontSize: '14px',
boxSizing: 'border-box',
transition: 'border-color 0.3s',
outline: 'none'
}}
onFocus={(e) => e.target.style.borderColor = '#8a5a99'}
onBlur={(e) => e.target.style.borderColor = '#d999e8'}
/>
</div>

<div>
<label style={{display: 'block', color: '#8a5a99', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px'}}>
Location
</label>
<input
name='location'
placeholder='e.g., San Francisco, CA'
value={form.location}
onChange={change}
style={{
width: '100%',
padding: '12px 16px',
border: '2px solid #d999e8',
borderRadius: '8px',
fontSize: '14px',
boxSizing: 'border-box',
transition: 'border-color 0.3s',
outline: 'none'
}}
onFocus={(e) => e.target.style.borderColor = '#8a5a99'}
onBlur={(e) => e.target.style.borderColor = '#d999e8'}
/>
</div>

<div>
<label style={{display: 'block', color: '#8a5a99', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px'}}>
Job Description
</label>
<textarea
name='description'
placeholder='Describe the job role, responsibilities, and requirements...'
value={form.description}
onChange={change}
style={{
width: '100%',
padding: '12px 16px',
border: '2px solid #d999e8',
borderRadius: '8px',
fontSize: '14px',
boxSizing: 'border-box',
transition: 'border-color 0.3s',
outline: 'none',
minHeight: '150px',
fontFamily: 'inherit',
resize: 'vertical'
}}
onFocus={(e) => e.target.style.borderColor = '#8a5a99'}
onBlur={(e) => e.target.style.borderColor = '#d999e8'}
/>
</div>

<button
disabled={loading}
style={{
width: '100%',
padding: '14px',
background: loading ? '#ccc' : 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
border: 'none',
borderRadius: '8px',
fontSize: '16px',
fontWeight: 'bold',
cursor: loading ? 'not-allowed' : 'pointer',
transition: 'all 0.3s',
marginTop: '10px'
}}
onMouseOver={(e) => !loading && (e.target.style.transform = 'scale(1.02)')}
onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
>
{loading ? 'Creating...' : 'Create Job'}
</button>

</form>

</div>

);

}

export default CreateJob;
