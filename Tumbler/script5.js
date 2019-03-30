    let imageContainer = document.getElementById("image-container");
    let buttons = document.getElementById("button-container");
    let winState = document.getElementById("win-state");
    let resetButton = document.getElementById('reset');

    const apiKey = "hYukutnytGBl4mxfShAOryaFMM7dM2sYSN22UJLA2TO0RWDN1x";
      
    function startGame() {//i re-arranged your codes abit, you can add in conditions such as what to do if API fetch fails or succeeds
		        imageContainer.innerHTML = '';
        buttons.innerHTML = '';
        winState.innerHTML = '';
		        // create array && shuffle
        let tagName = ['fried chicken','apple','cat','dog'];
        tagName = Shuffle(tagName);

        //Get random correct answer

        //Create buttons and append to DOM
        tagName.forEach(tag => {
            let button = document.createElement('Button');
            button.innerHTML = tag;
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.classList.add('mr-3');
            buttons.appendChild(button);
        });
		        let randomTag = tagName[Math.floor(Math.random() * tagName.length)];


		        //Fetch pictures from tumblr 
        fetch(`https://api.tumblr.com/v2/tagged?tag=${randomTag}&api_key=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                data.response.forEach(function(post) {
                if (post.photos) {
                    post.photos.forEach(function(photo) {
                    let image = document.createElement("img");
                    let photoUrl = photo.original_size.url;

                    image.src = photoUrl;
                    image.style.width = "250px";
                    image.style.height = "250px";

                    imageContainer.appendChild(image);
                    });
                }
            });
        }).then(function(){
			        //reset





        //Check if user got correct answer or not
        buttons.onclick = function (event){
            console.log(event.target.innerHTML);
            if (event.target.innerHTML === randomTag) {
                let winHeading = document.createElement('h1');
                winHeading.innerHTML = 'Yes! Its correct! You are smart!  Restarting in 3seconds...';
                if(winState.innerHTML != '<h1>Yes! Its correct! You are smart!</h1>'){
                    winState.appendChild(winHeading);
					setTimeout(function(){startGame();},3000);//restart game after 3 seconds		
                }
                
            } else {
                let winHeading = document.createElement('h1');
                winHeading.innerHTML = 'Are you serious? You are wrong!';
                if(winState.innerHTML != '<h1>Are you serious? You are wrong!</h1>'){
                winState.appendChild(winHeading);
                h1.style.display = "block";
            }
            }
        }
		});


    }

    //Start Game
    startGame();

    //Shuffle array and return shuffled array
    function Shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    //Restart Game
    resetButton.onclick = function() {
        startGame();
    }