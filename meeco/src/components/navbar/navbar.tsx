import React from "react";
import style from "./navbar.module.css";

export default function navbar() {
  return (
    <div className={style.navbarMain}>
      <div className="w-75 d-flex align-items-center justify-content-between m-auto">
        <div className="d-flex align-items-center justify-content-evenly">
          <div className="mr-5">Logo</div>
          <div className={style.tenantTag}>Tenants</div>
        </div>
        <div className={style.profileLogo}>
          <p>Me</p>
        </div>
      </div>
    </div>
  );
}
