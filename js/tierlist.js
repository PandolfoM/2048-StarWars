let open = false;
let dropdownbtn = document.getElementById("tierList");
let dropdownArr = document.getElementById("tierArrow");
let characterlist = document.getElementById('characterlist')

function toggleDropdown() {
  if (open === false) {
    open = true
    characterlist.setAttribute('aria-expanded', 'true')
    dropdownArr.classList.add('fa-angle-down')
    dropdownArr.classList.remove('fa-angle-up')
  } else {
    open = false
    characterlist.setAttribute('aria-expanded', 'false')
    dropdownArr.classList.add('fa-angle-up')
    dropdownArr.classList.remove('fa-angle-down')
  }


}

dropdownbtn.addEventListener('click', toggleDropdown)
