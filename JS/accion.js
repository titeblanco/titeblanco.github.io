document.getElementById('btn_info_personal').addEventListener('click', function() {
    document.getElementById('section_info_personal').style.display = 'block'
    document.getElementById('section_experiencias').style.display = 'none'
    document.getElementById('section_habilidades').style.display = 'none'
})

document.getElementById('btn_experiencias').addEventListener('click', function() {
    document.getElementById('section_info_personal').style.display = 'none'
    document.getElementById('section_experiencias').style.display = 'block'
    document.getElementById('section_habilidades').style.display = 'none'
})

document.getElementById('btn_habilidades').addEventListener('click', function() {
    document.getElementById('section_info_personal').style.display = 'none'
    document.getElementById('section_experiencias').style.display = 'none'
    document.getElementById('section_habilidades').style.display = 'block'
})


