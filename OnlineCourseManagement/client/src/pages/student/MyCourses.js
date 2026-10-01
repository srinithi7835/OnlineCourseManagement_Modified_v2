import React from "react";
import {Link} from "react-router-dom";
export default function MyCourses(){
 const list=["Modern Web Development","React UI Projects","Database Fundamentals"];
 return <div><h2 className="fw-bold">My Courses</h2><p className="text-muted">Your active learning list.</p><div className="row g-4 mt-2">
 {list.map((x,i)=><div className="col-md-6" key={x}><div className="card border-0 shadow-sm p-4"><div className="d-flex gap-3"><div className="mini-cover"><i className={`bi ${i===0?"bi-code-slash":i===1?"bi-braces":"bi-database"}`}></i></div><div className="flex-grow-1"><h5 className="fw-bold">{x}</h5><p className="small text-muted">Progress: {40+i*18}%</p><div className="progress mb-3"><div className="progress-bar" style={{width:`${40+i*18}%`}}></div></div><Link to={`/learn/${i+1}`} className="btn btn-sm btn-primary rounded-pill">Open course</Link></div></div></div></div>)}
 </div></div>;
}
