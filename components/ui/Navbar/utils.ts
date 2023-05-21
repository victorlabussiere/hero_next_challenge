export const toggleSubMenu = function (elementClass: string) {
    const modal = document.getElementById(elementClass)
    modal?.classList.toggle('hidden')
}