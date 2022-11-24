const form = document.getElementById('productForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(JSON.stringify(data));

  fetch('api/products/',{
    method: 'POST',
    body: data
  }).then(result => result.json()).then(json =>{
    console.log(json);
    
});
})