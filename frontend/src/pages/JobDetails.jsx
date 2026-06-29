import {
useEffect,
useState
} from 'react';

import {
useParams,
useNavigate
} from
'react-router-dom';

import api
from '../services/api';

function JobDetails(){

const {
jobId
}
=

useParams();

const navigate = useNavigate();

const [
job,
setJob
]
=

useState(
null
);

useEffect(
()=>{
(async () => {
try {
const res =
await api.get(
`/jobs/${jobId}`
);

setJob(
res.data.job
);
} catch (error) {
console.log(error);
}
})();
},
[jobId]
);

if(!job)
return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}><h2>Loading...</h2></div>;

return(

<div
style={{
background: 'white',
minHeight:
'100vh',
padding:
'40px 20px'
}}

>

<button 
onClick={() => navigate('/jobs')}
style={{
padding: '10px 20px',
marginBottom: '30px',
background: 'rgba(242, 200, 219, 0.3)',
color: '#8a5a99',
border: '2px solid #d999e8',
borderRadius: '8px',
cursor: 'pointer',
fontSize: '14px',
fontWeight: 'bold'
}}
>
← Back to Jobs
</button>

<div
style={{
maxWidth: '800px',
margin: '0 auto',
padding:
'40px',
borderRadius:
'20px',
background:
'rgba(242, 200, 219, 0.2)',
backdropFilter:
'blur(12px)',
boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
border: '2px solid rgba(217, 153, 232, 0.3)'
}}

>

<h1 style={{color: '#8a5a99', marginTop: 0}}>
{job.title}
</h1>

<div style={{display: 'flex', gap: '30px', marginBottom: '30px', flexWrap: 'wrap'}}>
<div>
<p style={{color: '#999', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold', textTransform: 'uppercase'}}>Company</p>
<p style={{fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#333'}}>
{job.company}
</p>
</div>
<div>
<p style={{color: '#999', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold', textTransform: 'uppercase'}}>Location</p>
<p style={{fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#333'}}>
{job.location}
</p>
</div>
</div>

<hr style={{borderColor: '#eee', margin: '20px 0'}} />

<div style={{marginBottom: '30px'}}>
<p style={{color: '#999', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase'}}>Description</p>
<p style={{lineHeight: '1.8', color: '#555', fontSize: '16px'}}>
{job.description}
</p>
</div>

<button onClick={ ()=> navigate(`/apply/${job._id}`)}
style={{
width: '100%',
padding: '14px',
background: 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
border: 'none',
borderRadius: '8px',
fontSize: '16px',
fontWeight: 'bold',
cursor: 'pointer',
transition: 'transform 0.2s'
}}
onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
>
Apply Now
</button>

</div>

</div>

);

}

export default JobDetails;
