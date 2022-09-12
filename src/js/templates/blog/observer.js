document.addEventListener("DOMContentLoaded", function (event) {

    if (document.getElementsByClassName('global-pilar-post').length > 0) {
        console.log("I'm here")

        let attr = document.querySelector(".global-pilar-post .sidebar ol").getAttribute('data-toc-headings')
        console.log('attr:', attr)

        document.querySelectorAll('.pilar-post-body h2').forEach(h => {
            h.setAttribute('data-spy', "")
        })

        const ratio = 0.9;

        const activate = function (elem) {
            const id = elem.getAttribute('id')
            const anchor = document.querySelector(`a[href="#${id}"]`)
            if (anchor === null) {
                return null
            }
            anchor.parentElement.parentElement
                .querySelectorAll('.active')
                .forEach(node => node.classList.remove('active'))
            anchor.classList.add('active')
        }
        /**
         * 
         * @param {IntersectionObserverEntry[]} entries
         */

        const callback = function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    activate(entry.target)
                }
            })
        }

        const spies = document.querySelectorAll('[data-spy]')
        console.log('spies:', spies)
        if (spies.length > 0) {
            const y = Math.round(30 * ratio)
            const observer = new IntersectionObserver(callback, {
                rootMargin: `-${30 - y - 1}px 0px 0px 0px`
            })
            spies.forEach(function (spy) {
                observer.observe(spy)
            })
        }
    }
});