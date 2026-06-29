import {
Navigate
}
from
'react-router-dom';

function ProtectedCandidate(
{
children
}
){

const token =
localStorage.getItem(
'token'
);

const role =
localStorage.getItem(
'role'
);

if(
!token
){

return ( <Navigate
to="/login"
/>
);

}

if(
role !==
'candidate'
){

return ( <Navigate
to="/jobs"
/>
);

}

return children;

}

export default ProtectedCandidate;
