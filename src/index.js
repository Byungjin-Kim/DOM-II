import './less/index.less'

// Your code goes here!
console.log ("Hello World!");

//1. load event - to use "onload" 
window.onload = function (event) {
    console.log (`event ${event.type} start! Ready to go!`)
    const heading = document.querySelector ('h1');
    heading.textContent = "READY TO GO!"

    // 2. copy event
    window.addEventListener('copy',() => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
        })
    })

    // 3. click event
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror')
    })

    // 4. double-click event
    document.body.addEventListener('dblclick', event => {
        event.target.outerHTML = ``
    })

    // 5. keydown event
    window.addEventListener ('keydown', event => {
        if (event.key == 1) {
            document.body.innerHTML = "It is not easy to learn about DOM II!!!, but now I understand what I am doing!"
        }
    })

    // 6. mousemove
    document.body.addEventListener ('mousemove', event => {
        const { clientX, clientY } = event 
        // console.log (`mouse is at ${clientX}, ${clientY}`)
    }) 

    // 7. mouseenter
    // 8. mouseleave
    // 9. mouseover
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight ='bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight ='initial'
        })

        destination.addEventListener('mouseover', event => {
            event.target.style.color = "red"
        })
    }


    // 10. preventDefault event
    Array.from(document.links).forEach (link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            console.log(`The ${event.target.textContent} link is not taking you anywhere`)
        })
    })
    
}
