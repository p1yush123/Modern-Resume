$(document).ready(function(){
    
    
    const bars= document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innertext=percentage+'%';
        bar.style.width=percentage+'%';

    });


    const counters = document.querySelectorAll('.counter');
    console.log(counters);
    
    function runCounter () {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;
            
            let countIt = function() {
                let displayedCount = +counter.innerText;
                if(displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 10);
                } else {
                    counter.innerText = target;
                }
            }
            countIt();

        })
    }

    
    
    let counterSection = document.querySelector('.counter-wrapper');

    let options = {
        rootMargin : '0px 0px -200px 0px'
    }

    let done = 0;

    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();

        }

    }, options)

    sectionObserver.observe(counterSection);

});


$('.slider').slick({
    arrows: false,
    dots : true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
 
});

