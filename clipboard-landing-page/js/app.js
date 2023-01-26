// Codes up to the eleventh line to create a dynamic header
let sections = document.querySelectorAll("section");
let nav = document.getElementById("nav");
for (let i = 0; i < sections.length; i++)
{
    nav.innerHTML += `<li><a>${sections[i].dataset['linkTitle']}</a></li>`;
}
// ==================================================================== //
// The following code to cntrol the burger icon and links
let icon = document.getElementById("icon");
let navStyle = "none";
let navSt = `
@media (max-width: 768px) {
    #nav {
        width: 100%;
        height: 50vh;
        background-color: var(--primary-color);
        position: absolute;
        top: 56px;
        left: 0;
        padding: 39px 46%;
        display: none;
        flex-wrap: wrap;
    }
    #nav a {
        font-weight: 600;
    } 
}
`
document.querySelector("style").textContent = navSt;
icon.onclick = function ()
{
    if (navStyle === "none")
    {
        document.querySelector("style").textContent = `
        @media (max-width: 768px) {
            #nav {
                width: 100%;
                height: 50vh;
                background-color: var(--primary-color);
                position: absolute;
                top: 56px;
                left: 0;
                padding: 39px 46%;
                display: flex;
                flex-wrap: wrap;
            }
            #nav a {
                font-weight: 600;
            } 
        }
        `;
        navStyle = "flex";
    } else if (navStyle === "flex")
    {
        document.querySelector("style").textContent = `
        @media (max-width: 768px) {
            #nav {
                width: 100%;
                height: 50vh;
                background-color: var(--primary-color);
                position: absolute;
                top: 56px;
                left: 0;
                padding: 39px 46%;
                display: none;
                flex-wrap: wrap;
            }
            #nav a {
                font-weight: 600;
            } 
        }
        `;
        navStyle = "none";
    }
}
// ================================================================== //
// Instead of using the value of the variable topBtn every time i need it and adjust what i want if the modifications are simple, this can be improved  by using the variables.
// document.body.innerHTML += "<button id='top-btn'>Top</button>";
document.body.appendChild(document.createElement('button'))
document.querySelectorAll("button")[4].setAttribute("id", "top-btn")
const topBtn = document.getElementById('top-btn');
topBtn.textContent = `Top`;
topBtn.style.cssText = `
    position: fixed;
    bottom: 22px;
    right: 10vw;
    background-color: var(--primary-color);
    border: 1px solid var(--text-color);
    width: 48px;
    height: 24px;
    border-radius: 4px;
    color: var(--text-primary-color);
    font-weight: 600;
    cursor: pointer;
    display: none;
`;
window.onscroll = function toTop()
{
    if (window.scrollY >= 300)
    {
        topBtn.style.cssText = `
            position: fixed;
            bottom: 22px;
            right: 10vw;
            background-color: var(--primary-color);
            border: 1px solid var(--text-color);
            width: 48px;
            height: 24px;
            border-radius: 4px;
            color: var(--text-primary-color);
            font-weight: 600;
            cursor: pointer;
        `;
    } else
    {
        topBtn.style.cssText = `
            position: fixed;
            bottom: 22px;
            right: 10vw;
            background-color: var(--primary-color);
            border: 1px solid var(--text-color);
            width: 48px;
            height: 24px;
            border-radius: 4px;
            color: var(--text-primary-color);
            font-weight: 600;
            cursor: pointer;
            display: none;
        `;
    }
}
topBtn.onclick = function ()
{
    window.scrollTo(0, 0)
}
// ================================================================== //
const className = []
for (let i = 0; i < sections.length; i++)
{
    className.push(sections[i].className)
}
const linkAfter = ``;
function makeActive()
{
    for (let i = 0; i < sections.length; i++)
    {
        const b = sections[i].getBoundingClientRect()['bottom'];
        const t = sections[i].getBoundingClientRect()['top']
        if (t <= 150 && b >= 150)
        {
            // sections[i].setAttribute("data-active", "active")
            nav.children[i].children[0].className = 'active';
            sections[i].className = `${className[i]} active`;
            // console.log(sections[i]) // Just for testing
        } else
        {
            // sections[i].removeAttribute("data-active", "active")
            nav.children[i].children[0].className = '';
            sections[i].className = `${className[i]}`;
        }
    }
}
document.addEventListener("scroll", function () { makeActive(); });
// ================================================================ //
function getLink()
{
    for (let i = 0; i < sections.length; i++)
    {
        if (nav.children[i].children[0].text === sections[i].getAttribute("id"))
        {
            nav.children[i].children[0].onclick = function ()
            {
                sections[i].scrollIntoView();
            }
        }
    }
}
getLink();