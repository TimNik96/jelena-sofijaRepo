const toggleTrigger = () => {
    const flipper = document.querySelector('.flipper')
    const trigger = document.querySelector('.trigger')

    trigger.addEventListener('click', () => {
        triggerActive = !triggerActive
        if(triggerActive) {
            trigger.style.left = '117px'
            trigger.style.backgroundColor = '#fff'
            flipper.style.backgroundColor = '#0f0'
        } else {
            trigger.style.left = '3px'
            trigger.style.backgroundColor = '#b9b9b9'
            flipper.style.backgroundColor = '#fff'
        }
    })
}

let triggerActive = false

toggleTrigger()