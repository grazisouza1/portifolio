const iconsNavBar = document.querySelectorAll(".icon-side-bar")

iconsNavBar.forEach(icon => {
    icon.addEventListener('click', function() {
        iconsNavBar.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    })
})