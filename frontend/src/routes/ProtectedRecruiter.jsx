import {
Navigate
}
from
'react-router-dom';

function ProtectedRecruiter(
{
children
}
){

const role =
localStorage.getItem(
'role'
);

if(
role !==
'recruiter'
){

return ( <Navigate
to='/jobs'
/>
);

}

return children;

}

export default ProtectedRecruiter;
