import React, { useState } from "react";
export default function CourseEditor(){
 const [title,setTitle]=useState("");
 return <div className="card border-0 shadow-sm p-4" style={{maxWidth:800}}>
  <h2 className="fw-bold">Create / Edit Course</h2>
  <p className="text-muted">Use the form below to prepare a course.</p>
  <input className="form-control mb-3" placeholder="Course title" value={title} onChange={e=>setTitle(e.target.value)} />
  <textarea className="form-control mb-3" rows="4" placeholder="Course description"></textarea>
  <select className="form-select mb-3"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
  <button className="btn btn-primary rounded-pill" onClick={()=>alert(title ? "Course saved" : "Enter course title")}>Save course</button>
 </div>;
}
