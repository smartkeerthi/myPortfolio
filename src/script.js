
AOS.init();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

root = document.querySelector(':root')
var themeName;

window.addEventListener('load', () => {
    const themes = localStorage.getItem('theme')
    if(themes == null) {
        localStorage.setItem('theme', 'dark')
        changeTheme('dark')
    }else {
        changeTheme(themes)
    }
})

function changeTheme(color) {
    if(color == 'white') {
        root.style.setProperty('--primary-color', '#fff3e6')
        root.style.setProperty('--secondary-color', '#0d335d')
        root.style.setProperty('--accent-color-1', '#c1a1d3')
        root.style.setProperty('--accent-color-2', '#1a508b')
    }else if(color == 'blue') {
        root.style.setProperty('--primary-color', '#b5eaea')
        root.style.setProperty('--secondary-color', '#0a1931')
        root.style.setProperty('--accent-color-1', '#ffbcbc')
        root.style.setProperty('--accent-color-2', '#f38ba0')
    }else if(color == 'dark') {
        root.style.setProperty('--primary-color', '#0a1931')
        root.style.setProperty('--secondary-color', '#efefef')
        root.style.setProperty('--accent-color-1', '#185adb')
        root.style.setProperty('--accent-color-2', '#ffc947')
    }else if(color == 'darkBlue') {
        root.style.setProperty('--primary-color', '#364f6b')
        root.style.setProperty('--secondary-color', '#f5f5f5')
        root.style.setProperty('--accent-color-1', '#3fc1c9')
        root.style.setProperty('--accent-color-2', '#fc5185')
    }else if(color == 'purple') {
        root.style.setProperty('--primary-color', '#4f3961')
        root.style.setProperty('--secondary-color', '#f3d4d4')
        root.style.setProperty('--accent-color-1', '#fc9d9d')
        root.style.setProperty('--accent-color-2', '#ea728c')
    }
}

function setTheme(colorName) {
    localStorage.setItem('theme', colorName)
    changeTheme(colorName)
}