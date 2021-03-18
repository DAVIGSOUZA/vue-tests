import Vue from "vue"

Vue.directive('transform', {
    bind(el, binding) {
        let current = 0
        if (binding.modifiers.animate) el.style.transition = 'transform 0.5s'
        let increment = binding.value || 90
        let behavior 
        el.addEventListener('click', function(){
            if (!binding.arg || binding.arg == 'rotate') {
                current+=increment
                behavior = `rotate(${current}deg)`
            } else if (binding.arg == 'scale') {
                behavior = `scale(${increment})`

            }
            el.style.transform = behavior
        })
    }
})