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