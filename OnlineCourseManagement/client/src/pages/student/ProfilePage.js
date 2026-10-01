import React,{useState} from "react";
export default function ProfilePage(){
 const [name,setName]=useState("Learner");
 const save=()=>{localStorage.setItem("ocm_profile",JSON.stringify({name}));alert("Profile saved")};
 return <div className="card border-0 shadow-sm p-4" style={{maxWidth:700}}><h2 className="fw-bold">Profile</h2><p className="text-muted">Update your basic learner information.</p><label className="form-label">Name</label><input className="form-control mb-3" value={name} onChange={e=>setName(e.target.value)} /><label className="form-label">Learning goal</label><select className="form-select mb-4"><option>Web Development</option><option>Programming</option><option>Database</option></select><button className="btn btn-primary rounded-pill" onClick={save}>Save profile</button></div>;
}
