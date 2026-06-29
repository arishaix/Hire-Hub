import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useNavigate} from 'react-router-dom';

function Register() {

const navigate = useNavigate();
const [form, setForm] =
useState({
username:'',
email:'',
password:'',
role:'candidate'
});

function handleChange(e){
setForm({
...form,
[e.target.name]:
e.target.value
});
}

async function handleSubmit(e){
e.preventDefault();

try{
const res =
await api.post(
'/users/register',
form
);
navigate(
'/jobs'
);
console.log(res.data);

}catch(error){
console.log(
error.response?.data
);
}
}

return (

<div style={styles.page}>

<form
onSubmit={handleSubmit}
style={styles.card}
>

<h1 style={styles.title}>
Create Account
</h1>

<input
name="username"
placeholder="Username"
value={form.username}
onChange={handleChange}
style={styles.input}
/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
style={styles.input}
/>

<input
type="password"
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
style={styles.input}
/>

<select
name="role"
value={form.role}
onChange={handleChange}
style={styles.input}
>

<option value="candidate">
Candidate
</option>

<option value="recruiter">
Recruiter
</option>

</select>

<button style={styles.button}>
Register
</button>

<p style={styles.redirect}>
Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
</p>

</form>

</div>

);
}

const styles = {
page: {
background: 'white',
minHeight: '100vh',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
},

card: {
width: '380px',

padding: '40px',

display: 'flex',

flexDirection: 'column',

gap: '16px',

background:
'rgba(242, 200, 219, 0.2)',

backdropFilter:
'blur(18px)',

border:
'2px solid rgba(217, 153, 232, 0.4)',

borderRadius: '28px',

boxShadow:
'0 4px 15px rgba(0,0,0,0.05)'
},

title: {
textAlign: 'center',
color: '#8a5a99'
},

input: {
padding: '14px',

		border: '1.5px solid #d999e8',
background:
'rgba(255,255,255,.45)',

borderRadius: '16px'
},

button: {
padding: '14px',

border: 'none',

borderRadius: '16px',

background:
'linear-gradient(90deg,#f6a4c6,#c9a4ff)',

color: 'white',

fontWeight: 'bold',

cursor: 'pointer'
},

redirect: {
textAlign: 'center',
color: '#8a5a99',
fontSize: '14px',
margin: '0'
},

link: {
color: '#d999e8',
textDecoration: 'none',
fontWeight: 'bold',
cursor: 'pointer'
}
};

export default Register;