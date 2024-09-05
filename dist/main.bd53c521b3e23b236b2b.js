(()=>{"use strict";let e="Home";function t(e,t){let o="string"==typeof e?e:e.target.dataset.d;t.heading.textContent=o}function o(e,o,d){e.addEventListener("click",(e=>{t(e,o),n(e.target.dataset.d,o,d)}))}function n(t,o,d){e=t;const c=function(e,t){let o=[];const n=new Date,d=new Date(n);d.setDate(n.getDate()+1);const c=n.getDate(),a="0"+d.getDate();return"Priority"===e?t.forEach((e=>{e.finished||"1"===e.priority&&o.push(e)})):"Today"===e?t.forEach((e=>{e.finished||e.dueDate.slice(-2)==c&&o.push(e)})):"Tomorrow"===e?t.forEach((e=>{e.finished||e.dueDate.slice(-2)==a.slice(-2)&&o.push(e)})):"Finished"===e?t.forEach((e=>{e.finished&&o.push(e)})):"Home"===e?t.forEach((e=>{e.finished||o.push(e)})):t.forEach((t=>{t.finished||t.project===e&&o.push(t)})),o}(e,d);if(o.contentList.innerHTML="",0===c.length){const e=document.createElement("div");e.classList.add("content-text"),e.textContent="Great All tasks are done",o.contentList.classList.add("content-list-center"),o.contentList.appendChild(e)}else o.contentList.classList.remove("content-list-center"),c.forEach(((e,t)=>{const n=document.createElement("div");n.classList.add("content-item");const d=document.createElement("span"),c=document.createElement("div"),a=(document.createElement("span"),document.createElement("span"));d.classList.add("material-symbols-outlined"),d.classList.add("change-status"),d.setAttribute("data-index",t),c.textContent=e.title,a.classList.add("material-symbols-outlined"),a.classList.add("delete-task"),a.setAttribute("data-index",t),a.textContent="delete",n.appendChild(d),n.appendChild(c),n.appendChild(a),e.finished?(d.classList.add("checked"),d.textContent="task_alt",c.classList.add("checked-item-text"),a.classList.add("checked")):(d.classList.add("unchecked"),d.textContent="radio_button_unchecked",c.classList.add("content-item-text")),o.contentList.appendChild(n)}));!function(e,t,o,d){const c=document.querySelectorAll(".change-status"),a=document.querySelectorAll(".edit-task"),i=document.querySelectorAll(".delete-task");c.forEach((c=>{c.addEventListener("click",(c=>{const a=d[c.target.dataset.index];a.finished=!a.finished,n(e,t,o)}))})),a.forEach((e=>{e.addEventListener("click",(e=>{d[e.target.dataset.index]}))})),i.forEach((c=>{c.addEventListener("click",(c=>{const a=d[c.target.dataset.index];let i;o.forEach(((e,t)=>{e.title===a.title&&(i=t)})),o.splice(i,1),n(e,t,o)}))}))}(t,o,d,c),function(e,t){(()=>{let o=0;t.forEach((e=>{e.finished||o++})),e.homeCount.textContent=o})(),(()=>{let o=0;t.forEach((e=>{e.finished||"1"===e.priority&&o++})),e.priorityCount.textContent=o})();const o=new Date,n=new Date(o);n.setDate(o.getDate()+1);const d=o.getDate(),c="0"+n.getDate();(()=>{let o,n=0;t.forEach((e=>{e.finished||(o=e.dueDate.slice(-2),o==d&&n++)})),e.todayCount.textContent=n})(),(()=>{let o,n=0;t.forEach((e=>{e.finished||(o=e.dueDate.slice(-2),o==c.slice(-2)&&n++)})),e.tomorrowCount.textContent=n})(),(()=>{let o=0;t.forEach((e=>{e.finished&&o++})),e.finishedCount.textContent=o})()}(o,d)}function d(e,t){e.sideBar.innerHTML="",e.options.innerHTML="";const o=document.createElement("option");o.textContent="Create/Select a project",o.disabled=!0,o.selected=!0,e.options.append(o),t.forEach((t=>{const o=document.createElement("div");o.classList.add("side-item"),o.classList.add("side-item-pro"),o.setAttribute("data-d",t);const n=document.createElement("span"),d=document.createElement("div"),c=document.createElement("span");n.classList.add("material-symbols-outlined"),n.textContent="donut_large",d.classList.add("side-item-lable"),d.textContent=t,c.classList.add("material-symbols-outlined"),c.classList.add("project-icon"),c.setAttribute("data-d",t),c.textContent="delete",e.sideBar.append(o),o.append(n),o.append(d),o.append(c),function(e,t){const o=document.createElement("option");o.textContent=t,o.value=t,e.options.append(o)}(e,t)}))}const c={heading:document.querySelector(".content-heading"),homePage:document.querySelector(".home"),priorityPage:document.querySelector(".priority"),todayPage:document.querySelector(".today"),tomorrowPage:document.querySelector(".tomorrow"),finishedPage:document.querySelector(".finished"),homeCount:document.querySelector(".home-count"),priorityCount:document.querySelector(".priority-count"),todayCount:document.querySelector(".today-count"),tomorrowCount:document.querySelector(".tomorrow-count"),finishedCount:document.querySelector(".finished-count"),contentList:document.querySelector(".content-list"),addTask:document.querySelector(".add-task-container"),modal:document.querySelector(".modal"),modalBtn:document.querySelector(".btn"),projectModal:document.querySelector(".project-modal"),projectAddBtn:document.querySelector(".project-add-btn"),projectModalBtn:document.querySelector(".project-modal-btn"),projectInput:document.querySelector("#project-input"),sideBar:document.querySelector(".side-project-items"),options:document.querySelector("#grp"),editModal:document.querySelector(".edit-modal")},a=[{title:"Beta testing update",dueDate:"2024-09-16",time:"10:00",priority:"1",project:"Dev",finished:!1},{title:"Buy passes",dueDate:"2024-09-04",time:"22:00",priority:"0",project:"Life",finished:!1},{title:"Beta build update",dueDate:"2024-08-15",time:"17:30",priority:"1",project:"Dev",finished:!0}],i=["Life","Dev"];var r,s;c.addTask.addEventListener("click",(()=>{c.modal.showModal(),function(e){const t=document.querySelector("#title");t.addEventListener("input",(()=>{""===t.value?(e.modalBtn.disabled=!0,t.classList.add("input-red"),t.placeholder="Title cannot be empty"):(e.modalBtn.disabled=!1,t.classList.remove("input-red"))}))}(c)})),c.modalBtn.addEventListener("click",(()=>{const t={title:document.querySelector("#title").value,dueDate:document.querySelector("#date").value,time:document.querySelector("#time").value,priority:document.querySelector("#priority").value,project:document.querySelector("#grp").value,finished:!1};a.push(t),n(e,c,a),document.querySelector("#title").value="",document.querySelector("#date").value="",document.querySelector("#time").value="",document.querySelector("#priority").value="",document.querySelector("#grp").value="",c.modal.close()})),document.addEventListener("click",(e=>{const t=e.target.closest(".edit-task");t&&a[t.dataset.index]})),s=i,(r=c).projectAddBtn.addEventListener("click",(()=>{r.projectModal.showModal()})),r.projectModalBtn.addEventListener("click",(()=>{let e=r.projectInput.value;s.push(e),d(r,s),r.projectInput.value="",r.projectModal.close()})),document.addEventListener("click",(e=>{const o=e.target.closest(".side-item");if(o){const e=o.dataset.d;t(e,c),n(e,c,a)}})),document.addEventListener("click",(e=>{if(e.target.closest(".project-icon")){const t=e.target.dataset.d;let o;i.forEach(((e,n)=>{e===t&&(o=n)})),i.splice(o,1)}d(c,i)})),o(c.homePage,c,a),o(c.priorityPage,c,a),o(c.todayPage,c,a),o(c.tomorrowPage,c,a),o(c.finishedPage,c,a),n(e,c,a),d(c,i)})();