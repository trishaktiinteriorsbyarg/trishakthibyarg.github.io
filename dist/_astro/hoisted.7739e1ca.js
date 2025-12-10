import"./hoisted.102d6416.js";const t=document.getElementById("contact-form");t&&t.addEventListener("submit",o=>{o.preventDefault();const e=new FormData(t),n=e.get("full-name"),a=e.get("email"),m=e.get("subject"),s=e.get("message"),c=`Name: ${n}
Email: ${a}

Message:
${s}`,i=`mailto:enquiry@trishakthibyarg.com?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(c)}`;window.location.href=i});
