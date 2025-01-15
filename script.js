const input = document.getElementById('file-input');
const img = document.getElementById('preview-img');

input.addEventListener('change', () => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
