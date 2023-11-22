import React from "react";


const NavBar =()=>{
  const links = ["home", "about", "projects"];

  const componentName=links.map((link)=>{
    return <a key ={link} href={`#${link}`}>{link}</a>
  })
  return (
    <nav>
      {componentName}
    </nav>
  );
}

export default NavBar;
