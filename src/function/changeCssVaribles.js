/*
Формат SCSS-переменной:
--theme-default-УникальноеИмя  # дефолтная переменная
--theme-light-УникальноеИмя    # для 'light'
--theme-dark-УникальноеИмя     # для 'dark'
*/

export const changeCssVaribles = theme => {
    const root = document.querySelector(':root');

    const cssVaribles = ['font-color' , 'background'];

    cssVaribles.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    })
}