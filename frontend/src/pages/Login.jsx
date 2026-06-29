import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useNavigate} from 'react-router-dom';

function Login() {
const navigate = useNavigate();
const [form, setForm] = useState({
email: '',
password: ''
});

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value
});
}

async function handleSubmit(e){
e.preventDefault();

try{

const res =
await api.post(
'/users/login',
form
);

localStorage.setItem(
'token',
res.data.token
);

localStorage.setItem(
'role',
res.data.role
);
navigate(
'/jobs'
);
console.log(
'logged in'
);

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
Welcome Back
</h1>

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

<button style={styles.button}>
Login
</button>

<p style={styles.redirect}>
Don't have an account? <Link to="/register" style={styles.link}>Register here</Link>
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
width: '360px',
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
'rgba(255,255,255,.4)',

borderRadius: '16px'
},

button: {
padding: '14px',

background:
'linear-gradient(90deg,#f7a8c8,#caa7ff)',

border: 'none',

borderRadius: '16px',

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

export default Login;