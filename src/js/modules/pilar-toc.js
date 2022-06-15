

document.addEventListener("DOMContentLoaded", function (event) {
    if (document.getElementsByClassName('pilar-key-number ').length > 0) {
        let question = document.querySelectorAll(".toc>li");
        question.forEach(question => {
            question.firstElementChild.href = ""
            question.addEventListener("click", event => {
                const active = document.querySelector(".toc>li.active");
                if (active && active !== question) {
                    active.classList.toggle("active");
                    active.firstElementChild.nextElementSibling.style.maxHeight = 0;
                }

                question.classList.toggle("active");
                const answer = question.firstElementChild.nextElementSibling;
                if (question.classList.contains("active")) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = 0;
                } 
            })
        })

        let keynum = document.querySelector('.pilar-key-number')
        if (document.querySelector('#key-number')) {
            document.querySelector('#key-number').appendChild(keynum)
        } else {
            keynum.remove()
        }

        let testi = document.querySelector('.pilar-testi')
        if (document.querySelector('#testi')) {
            document.querySelector('#testi').appendChild(testi)
        } else {
            testi.remove()
        }

        let audit = document.querySelector('.global-audit')
        if (document.querySelector('#audit')) {
            document.querySelector('#audit').appendChild(audit)
        } else {
            audit.remove()
        }

    }
});

