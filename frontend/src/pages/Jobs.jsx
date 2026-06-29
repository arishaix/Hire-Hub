import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Jobs() {

const [jobs, setJobs] = useState([]);
const [search, setSearch] = useState('');
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const jobsPerPage = 5;

const navigate = useNavigate();

async function fetchJobs() {
try {
const res = await api.get('/jobs?page=1&limit=1000');
setJobs(res.data.jobs);
} catch(error){
console.log(error);
}
finally {
setLoading(false);
}
}

useEffect(() => {
  (async () => {
    await fetchJobs();
  })();
}, []);

const filtered =
jobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase())

||
job.company
.toLowerCase()
.includes(
search
.toLowerCase()
)

);

const totalPages = filtered.length > 0 ? Math.ceil(filtered.length / jobsPerPage) : 1;
const safePageIndex = Math.min(page, totalPages);
const safeStart = (safePageIndex - 1) * jobsPerPage;
const safeEnd = safeStart + jobsPerPage;
const safeVisibleJobs = filtered.slice(safeStart, safeEnd);

return (

<div
style={{
background:'white',
minHeight:'100vh',
padding:'40px 20px'
}}
>

<div style={{maxWidth: '1200px', margin: '0 auto'}}>

<div style={{marginBottom: '40px'}}>
<h1 style={{color: '#8a5a99', marginTop: 0, fontSize: '36px'}}>
Explore Job Opportunities
</h1>

<div style={{display: 'flex', gap: '10px', marginBottom: '30px', alignItems: 'center'}}>
<input
placeholder='Search by job title or company...'
value={search}
onChange={(e) => setSearch(e.target.value)}
style={{
padding:'14px 18px',
width:'400px',
borderRadius:'8px',
border: 'none',
fontSize: '14px',
boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
}}
/>
</div>
</div>

{loading ? (
<div style={{textAlign: 'center', color: '#8a5a99', fontSize: '18px'}}>
Loading jobs...
</div>
) : filtered.length === 0 ? (
<div style={{textAlign: 'center', color: '#8a5a99', fontSize: '18px'}}>
No jobs found matching your search.
</div>
) : (
<>
<div
style={{
display:'grid',
gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',
gap:'24px'
}}
>
{
safeVisibleJobs.map(
job => (

<div

key={job._id}

onClick={() => navigate(`/jobs/${job._id}`)}

style={{

cursor:'pointer',

padding:'28px',

borderRadius:'12px',

background: 'rgba(242, 200, 219, 0.2)',

backdropFilter: 'blur(12px)',

boxShadow: '0 4px 15px rgba(0,0,0,0.05)',

transition: 'all 0.3s ease',

border: '2px solid rgba(217, 153, 232, 0.3)'

}}

onMouseOver={(e) => {
e.currentTarget.style.transform = 'translateY(-8px)';
e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
}}

onMouseOut={(e) => {
e.currentTarget.style.transform = 'translateY(0)';
e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
}}

>

<h2 style={{color: '#8a5a99', margin: '0 0 12px 0', fontSize: '20px'}}>
{job.title}
</h2>

<p style={{color: '#d999e8', fontWeight: 'bold', margin: '8px 0'}}>
{job.company}
</p>

<p style={{color: '#999', margin: '8px 0', fontSize: '14px', display: 'flex', alignItems: 'center'}}>
📍 {job.location}
</p>

<p style={{color: '#555', margin: '12px 0', fontSize: '13px', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
{job.description}
</p>

<button style={{
width: '100%',
padding: '10px',
background: 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
border: 'none',
borderRadius: '6px',
fontWeight: 'bold',
cursor: 'pointer',
marginTop: '12px',
fontSize: '14px',
transition: 'all 0.2s'
}}
onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
>
View Details
</button>

</div>

))
}

</div>

<div style={{display:'flex',gap:'10px',marginTop:'30px',justifyContent:'center',alignItems:'center'}}>
<button 
disabled={safePageIndex<=1}
onClick={()=>setPage(page-1)}
style={{
padding: '8px 16px',
background: safePageIndex <= 1 ? '#ccc' : 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
border: 'none',
borderRadius: '6px',
cursor: safePageIndex <= 1 ? 'not-allowed' : 'pointer',
fontWeight: 'bold'
}}
>
Prev
</button>
<span style={{color: '#8a5a99', fontWeight: 'bold'}}>Page {safePageIndex} of {totalPages}</span>
<button 
disabled={safePageIndex>=totalPages}
onClick={()=>setPage(page+1)}
style={{
padding: '8px 16px',
background: safePageIndex >= totalPages ? '#ccc' : 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
border: 'none',
borderRadius: '6px',
cursor: safePageIndex >= totalPages ? 'not-allowed' : 'pointer',
fontWeight: 'bold'
}}
>
Next
</button>
</div>
</>
)}

</div>

</div>

);

}

export default Jobs;