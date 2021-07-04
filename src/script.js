
AOS.init();

root = document.querySelector(':root')

function changeTheme(color) {
    if(color == 'white') {
        root.style.setProperty('--primary-color', '#fff3e6')
        root.style.setProperty('--secondary-color', '#0d335d')
        root.style.setProperty('--accent-color-1', '#c1a1d3')
        root.style.setProperty('--accent-color-2', '#1a508b')
    }else if(color == 'blue') {
        root.style.setProperty('--primary-color', '#b5eaea')
        root.style.setProperty('--secondary-color', '#f38ba0')
        root.style.setProperty('--accent-color-1', '#ffbcbc')
        root.style.setProperty('--accent-color-2', '#0a1931')
    }else if(color == 'dark') {
        root.style.setProperty('--primary-color', '#0a1931')
        root.style.setProperty('--secondary-color', '#efefef')
        root.style.setProperty('--accent-color-1', '#185adb')
        root.style.setProperty('--accent-color-2', '#ffc947')
    }
}