      var example = ['website', 'logo', 'banner', 'birthday card', 't-shirt'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 1000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }

    function displayNone(){
        if(document.getElementById('nav-check').checked == false) {
            document.getElementById('nav-check').checked = true;
        }
        else if(document.getElementById('nav-check').checked == true){
                document.getElementById('nav-check').checked = false; 
             } 
    }

ScrollReveal().reveal('.responsive-img');
ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.social-icon');
ScrollReveal().reveal('#Basic');
ScrollReveal().reveal('#Pro');
ScrollReveal().reveal('#Ultimate');
ScrollReveal().reveal('#Logo');
ScrollReveal().reveal('#Logo-two');
ScrollReveal().reveal('#Banner');
ScrollReveal().reveal('#behance');
ScrollReveal().reveal('#facebook', { delay: 500 });
ScrollReveal().reveal('#instagram', { delay: 600 });
ScrollReveal().reveal('#twitter', { delay: 700 });
ScrollReveal().reveal('.heading');
ScrollReveal().reveal('.subheading');
ScrollReveal().reveal('.img-one');
ScrollReveal().reveal('.img-two');
ScrollReveal().reveal('#heading');
ScrollReveal().reveal('#subheading', { delay: 500 });
ScrollReveal().reveal('#responsive-img', { delay: 800 });