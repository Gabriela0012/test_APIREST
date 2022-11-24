const form = document.getElementById('registerForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form);
  let object = {};
  console.log(object);
  data.forEach((value,key)=>object[key] = value);
  fetch('api/sessions/register',{
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(result => result.json()).then(json =>{
    console.log(json);
    form.reset();
});
})