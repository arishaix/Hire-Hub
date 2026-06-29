import {
useEffect,
useState
}
from
'react';

import api
from
'../services/api';

function MyApplications(){

const [
applications,
setApplications
]
=

useState([]);

useEffect(
()=>{
(async () => {
try {
const res =
await api.get('/applications/myApplications',
           {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
);

setApplications(
res.data.applications
);
} 
catch (error) {
console.log(error);
}
})();
},
[]
);

return(

<div
style={{
background:'white',
minHeight:'100vh',
padding:'40px 20px'
}}
>

<div style={{maxWidth: '1000px', margin: '0 auto'}}>

<h1 style={{color: '#8a5a99', marginBottom: '30px'}}>
My Applications
</h1>

{applications.length === 0 ? (
<div style={{textAlign: 'center', color: '#8a5a99', fontSize: '16px', padding: '40px'}}>
You haven't applied to any jobs yet.
</div>
) : (
<div style={{display: 'grid', gap: '20px'}}>
{

applications.map(

item=>

<div
key={
item._id
}

style={{

padding:'28px',

borderRadius:'12px',

background:
'rgba(242, 200, 219, 0.2)',

border: '2px solid rgba(217, 153, 232, 0.3)',

boxShadow: '0 4px 15px rgba(0,0,0,0.05)',

transition: 'all 0.3s ease'

}}

>

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px'}}>
<div>
<h3 style={{color: '#8a5a99', margin: '0 0 10px 0'}}>
{item.jobId}
</h3>

<p style={{color: '#999', fontSize: '12px', margin: '0 0 5px 0', fontWeight: 'bold', textTransform: 'uppercase'}}>
Status
</p>

<p style={{color: '#d999e8', fontWeight: 'bold', fontSize: '16px', margin: 0}}>
{
item.status
}
</p>
</div>

<a
href={
item.resume
}
target="_blank"
rel="noopener noreferrer"

style={{
padding: '10px 20px',
background: 'linear-gradient(90deg, #f7a8c8, #caa7ff)',
color: 'white',
textDecoration: 'none',
borderRadius: '6px',
fontWeight: 'bold',
cursor: 'pointer'
}}

>

View Resume

</a>
</div>

</div>

)

}
</div>
)}

</div>

</div>
);
}

export default MyApplications;
