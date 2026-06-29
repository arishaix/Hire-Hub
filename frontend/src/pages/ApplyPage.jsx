import {
useState
}
from 'react';

import {
useParams,
useNavigate
}
from
'react-router-dom';

import api
from
'../services/api';

function ApplyPage(){

const {
jobId
}
=

useParams();

const navigate =
useNavigate();

const [
resume,
setResume
]
=

useState('');

async function submit(e){

e.preventDefault();

try{

await api.post(

`/applications/apply/${jobId}`,

{
resume
},

{
headers:{

Authorization:
`Bearer ${localStorage.getItem('token')}`

}

}

);

navigate(
'/my-applications'
);

}catch(error){

console.log(error);

}

}

return(

<div
style={{
background:'white',
minHeight:'100vh',
display:'flex',
justifyContent:'center',
paddingTop:'80px'
}}
>

<form
onSubmit={submit}
style={{

width:'420px',

padding:'40px',

borderRadius:'30px',

background:
'rgba(255,225,245,.35)',

backdropFilter:
'blur(14px)',

display:'flex',

flexDirection:'column',

gap:'16px'

}}

>

<h1>
Apply
</h1>

<input

placeholder='Resume URL'

value={resume}

onChange={
(e)=>
setResume(
e.target.value
)
}

/>

<button>

Apply

</button>

</form>

</div>

);

}

export default ApplyPage;
