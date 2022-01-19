const start = document.getElementById('start');
const alice = document.getElementById('alice');
const chatt = document.getElementById('chatt');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const letter = document.getElementById('letter');
const photo = document.getElementById('photo');
const phone = document.getElementById('phone');
const letterclue = document.getElementById('letter-clue');
let show = 0, cinematic = 1, chat, play = true, bg, clues = 0;
let clicked = [false, false, false];

function setup() {
    chat = createDiv('');
    chat.id('chat');
    chat.position(0, 0, 'fixed');

}

function showBtn() {
    btn1.style.display = 'inline';
    btn2.style.display = 'inline';
}


function hideBtn() {
    btn1.style.display = 'none';
    btn2.style.display = 'none';
}


function mouseClicked() {

    if (cinematic == 1) {

        cinematic = 2;
        start.src = 'media/12finnalice.mov';
        setTimeout(() => {
            start.pause();
            start.style.display = 'none'
            alice.style.display = 'block';
            cinematic = 3;
            chat.html('Finn: Holy shi-');
        }, 15000);

    }

    if (cinematic > 2 && play == true) {
        show++;
    }


    if (show == 1) {
        chat.html('Alice: Uhm... hi?');

    }
    if (show == 2) {
        chat.html('Finn: What is going on? How? I was just at your funeral');

    }

    if (show == 3) {
        chat.html('Alice: I know. Im glad you came, but this is not the reason i am here. I need your help.');

    }

    if (show == 4) {
        play = false;
        chat.html('Should i help her?');
        showBtn();

        //the end
        btn1.addEventListener('click', () => {
            play = true; 
            show = 18;
            hideBtn();
            chat.html('You left the town without helping Alice out');
            alice.src = 'media/konecA.png'

        });
        //continue
        btn2.addEventListener('click', () => {
            play = true;
            hideBtn();
            chat.html('Alice: Thank you');
        });

    }


    if (show == 6) {
        chat.html('Finn: What do you need?');

    }
    if (show == 7) {
        chat.html('Alice: I need you to find the person who killed me');

    }
    if (show == 8) {
        chat.html('Finn: What now?');

    }
    if (show == 9) {
        chat.html('Finn: Was it not ruled as a suicide?');

    }
    if (show == 10) {
        chat.html('Alice: Yes, but it wasnt one');

    }




    if (show == 11) {
        play = false;
        chat.html('Found ' + clues +  ' out of 3 clues');
        alice.src = 'media/pokoj.png'


        phone.addEventListener('click', () => {
            if (clicked[0] == false) {

                letterclue.src = 'media/phone-clue.png'
                alice.style.display = 'none';
                letterclue.style.display = 'block';
                clues++;

                console.log("phone");
                clicked[0] = true;
                pic = false;
                console.log(show);
                console.log(clues);
            }

        });

        photo.addEventListener('click', () => {
            if (clicked[1] == false) {


                console.log("photo");
                letterclue.src = 'media/photo-clue.png'
                alice.style.display = 'none';
                letterclue.style.display = 'block';
                clues++;

                clicked[1] = true;
            }
        });

        letter.addEventListener('click', () => {
            if (clicked[2] == false) {
                console.log("letter");

                letterclue.src = 'media/letter-clue.png'
                alice.style.display = 'none';
                letterclue.style.display = 'block';
                clues++;
                clicked[2] = true;

            }
        });

        if (clues == 3) {
            play = true;

        }

    }

if (show ==12) {
    chat.html('Okay, time to call the cops and head out');

}

if (show ==13) {
    play = false;
    chat.html('Autumn: Hey Finnie, long time no see, right?');
    alice.src = 'media/Autumn.png';
    
    btn1.innerHTML = "I KNOW WHAT YOU DID";
btn2.innerHTML = "Uhm.. hi Autumn";
showBtn();

    //option A
    btn1.addEventListener('click', () => {
        play = true;
        show = 18;
        hideBtn();
        
        alice.src = 'media/konecB.png';
        chat.html('Autumn killed you and escaped.');

    });
    //option B
    btn2.addEventListener('click', () => {
        play = true;
        hideBtn();
        chat.html('What are you doing here anyway?');
    });

}

if (show ==14) {
    play = false;
    chat.html('Autumn: What are you doing here anyway?');
    alice.src = 'media/Autumn.png';
    
    btn1.innerHTML = "Looking for clues";
btn2.innerHTML = "Wanted to look back at the place we houng out so often";
showBtn();

    //option A
    btn1.addEventListener('click', () => {
        play = true;
        show = 18;
        hideBtn();
        alice.src = 'media/konecB.png';
        chat.html('Autumn killed you and escaped.');

    });
    //option B
    btn2.addEventListener('click', () => {
        play = true;
        hideBtn();
        chat.html('Autumn: Yeah, lets come inside then, shall we?');
    });

}

if (show ==15) {
    play = false;
    chat.html('Autumn: Yeah, lets come inside then, shall we?');
    alice.src = 'media/Autumn.png';
    
    btn1.innerHTML = "So you can kill me like killed Alice?";
btn2.innerHTML = "Yeah, sure";
showBtn();

    //option A
    btn1.addEventListener('click', () => {
        play = true;
        show = 18;
        hideBtn();
        alice.src = 'media/konecB.png';
        chat.html('Autumn killed you and escaped.');

    });
    //option B
    btn2.addEventListener('click', () => {
        play = true;
        hideBtn();
        chat.html('Autumn: Glad i saw you at the funeral yesterday');
    });

}


if (show ==16) {
    play = false;
    chat.html('Autumn: Glad i saw you at the funeral the other day');
    alice.src = 'media/pokojAutumn.png';
    
    btn1.innerHTML = "Didnt you feel bad? Being at a funeral that you caused?";
    btn2.innerHTML = "It was nice to see you too";
showBtn();

    //option A
    btn1.addEventListener('click', () => {
        play = true;
        show = 18;
        hideBtn();
        alice.src = 'media/konecB.png';
        chat.html('Autumn killed you but the cops showed up before she could escape.');

    });
    //option B
    btn2.addEventListener('click', () => {
        play = true;
        hideBtn();
        chat.html('Autumn: I will miss you, Finnie');
    });

}

if (show ==17) {
    play = false;
    chat.html('Autumn: I will miss you, Finnie');
    alice.src = 'media/pokojAutumn.png';
    
    btn1.innerHTML = "But i wont";
    btn2.innerHTML = "*ATTACK HER*";
showBtn();

    //option A
    btn1.addEventListener('click', () => {
        show = 18;
        play = false;
        hideBtn();
        alice.src = 'media/konecB.png';
        chat.html('Autumn killed you but the cops showed up before she could escape.');

    });
    //option B
    btn2.addEventListener('click', () => {
        hideBtn();
        alice.src = 'media/konecC.png';
        chat.html('You killed Autumn');
    });

}


}

function hide() {
    alice.style.display = 'block';
    letterclue.style.display = 'none';
}