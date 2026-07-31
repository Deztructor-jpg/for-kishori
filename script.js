// ---------- DATA ----------

const photos = [
    {
    title:"🌸 Chapter 1 — A Stranger",
    image:"images/photo1.jpg",
    caption:"You were just another guest... until you became my whole story."
    },
    
    {
    title:"📷 Chapter 2 — The First Picture",
    image:"images/photo2.jpg",
    caption:"One photo. One message. And somehow, my gallery gained its most precious picture."
    },
    
    {
    title:"🚶 Chapter 3 — Miles Apart",
    image:"images/photo3.jpg",
    caption:"I was walking my own path, not knowing someone miles away was about to change my life forever."
    },
    
    {
    title:"✨ Chapter 4 — The Other Side",
    image:"images/photo4.jpg",
    caption:"And somewhere else... you were walking yours. Neither of us knew our paths were slowly becoming one."
    },
    
    {
    title:"❤️ Chapter 5 — Finally",
    image:"images/photo5.jpg",
    caption:"After all the waiting, all the distance, and all the unexpected turns... our paths finally crossed again. I'd choose that path all over again."
    }
    ];
    
    const letters = [
    `Whenever you're happy, I hope you smile a little bigger knowing I'm cheering for you. Your happiness has become one of my favorite things in the world. It matters to me the most, as I've said it previously, a thousand flowers bloom in just a little smile of yours. ❤️`,
    
    `If you're missing me, remember this website exists because I couldn't fit everything I feel into just a few texts. Distance changes where we are, never what you mean to me. I may not be available all the time even virtually, but i want you to know, that distance has never reduced my love for you 🌸`,
    
    `Whenever life feels heavy, read this again: you're stronger than you think, kinder than you realize, and never alone. I'll always be on your side. At times, there could be a million reasons to cry. I just want to be sooo worthy that you think of me in grief and smile through your day. ❤️`
    ];
    
    const endingLines = [
    "Maybe destiny took its time...",
    "But it never forgot us.",
    "Thank you for becoming my favorite chapter.",
    "I love you, Kishori.",
    "— HBSP ❤️"
    ];
    
    // ---------- VARIABLES ----------
    
    let currentPhoto = 0;
    
    // ---------- HELPERS ----------
    
    function show(id){

        const sections = document.querySelectorAll("section");
    
        sections.forEach(section=>{
    
            section.style.opacity="0";
    
            setTimeout(()=>{
    
                section.classList.add("hidden");
    
            },300);
    
        });
    
        setTimeout(()=>{
    
            const next=document.getElementById(id);
    
            next.classList.remove("hidden");
    
            next.style.opacity="0";
    
            setTimeout(()=>{
    
                next.style.opacity="1";
    
            },50);
    
        },300);
    
    }
    
    // ---------- LANDING ----------
    
    function startStory(){
    
    show("prologue");
    
    typeWriter(
    document.getElementById("prologueText"),
    "Ours began with two strangers... at a wedding.",
    40
    );
    
    }
    
    // ---------- TYPEWRITER ----------
    
    function typeWriter(element,text,speed,callback){
    
    element.innerHTML="";
    
    let i=0;
    
    const timer=setInterval(()=>{
    
    element.innerHTML+=text.charAt(i);
    
    i++;
    
    if(i>=text.length){
    
    clearInterval(timer);
    
    if(callback) callback();
    
    }
    
    },speed);
    
    }
    
    // ---------- GALLERY ----------
    
    function beginGallery(){
    
    show("story");
    
    displayPhoto();
    
    }
    
    function displayPhoto(){

        const photo=document.getElementById("galleryImage");
    
        photo.style.opacity="0";
    
        setTimeout(()=>{
    
            const p=photos[currentPhoto];
    
            document.getElementById("chapterTitle").innerHTML=p.title;
    
            photo.src=p.image;
    
            photo.style.opacity="1";
    
            typeWriter(
                document.getElementById("caption"),
                p.caption,
                25
            );
    
        },300);
    
        document.querySelectorAll(".dot").forEach(dot=>dot.classList.remove("active"));
    
        document.querySelectorAll(".dot")[currentPhoto].classList.add("active");
    
        if(currentPhoto===photos.length-1){
    
            nextButton.innerHTML="Continue →";
    
        }else{
    
            nextButton.innerHTML="Next Chapter →";
    
        }
    
    }
    
    function nextPhoto(){
    
    if(currentPhoto<photos.length-1){
    
    currentPhoto++;
    
    displayPhoto();
    
    }
    else{
    
    show("letters");
    
    }
    
    }
    
    // ---------- LETTERS ----------
    
    function openLetter(index){
    
    document.getElementById("letterBox").innerHTML=letters[index];
    
    }
    
    // ---------- SONG ----------
    
    function showSong(){
    
    show("song");
    
    }
    const audio = document.getElementById("ourSong");
const playBtn = document.getElementById("playSong");
const record = document.getElementById("record");

playBtn.onclick = function(){

    if(audio.paused){

        audio.play();

        playBtn.innerHTML = "|| Pause";
        record.classList.add("spin");

    }else{

        audio.pause();

        playBtn.innerHTML = "▶ Play";
        record.classList.remove("spin");

    }

};

audio.onended = function(){

    playBtn.innerHTML = "▶ Play";
    record.classList.remove("spin");

};

    
    // ---------- GAME ----------
    
    function showGame(){
    
    show("game");
    
    createGame();
    
    }
    
    function createGame(){
    
    const container=document.getElementById("heartContainer");
    
    container.innerHTML="";
    
    const golden=Math.floor(Math.random()*30);
    
    for(let i=0;i<30;i++){
    
    const heart=document.createElement("div");
    
    heart.className="heart";
    
    if(i===golden){
    
    heart.innerHTML="💛";
    
    heart.onclick=function(){
    
    show("win");
    
    };
    
    }
    else{
    
    heart.innerHTML="💗";
    
    heart.onclick=function(){
    
    heart.style.opacity=".3";
    
    };
    
    }
    
    container.appendChild(heart);
    
    }
    
    }
    
    // ---------- ENDING ----------
    
    function showEnding(){

        function showSecret() {

            show("secret");
        
            const yesBtn = document.getElementById("yesBtn");
            const noBtn = document.getElementById("noBtn");
            const container = document.getElementById("answerButtons");
        
            yesBtn.onclick = function () {
        
                const maxX = container.clientWidth - yesBtn.offsetWidth;
                const maxY = container.clientHeight - yesBtn.offsetHeight;
        
                const x = Math.random() * maxX;
                const y = Math.random() * maxY;
        
                yesBtn.style.left = x + "px";
                yesBtn.style.top = y + "px";
            };
        
            noBtn.onclick = function () {
                show("finalMessage");
            };
        
        }
    
    show("ending");
    
    let i=0;
    
    function nextLine(){
    
    if(i>=endingLines.length) return;
    
    typeWriter(
    
    document.getElementById("endingText"),
    
    endingLines[i],
    
    40,
    
    ()=>{

        i++;
        
        if(i<endingLines.length){
        
        setTimeout(nextLine,900);
        
        }
        else{
        
        setTimeout(showSecret,1800);
        
        }
        
        }
    
    );
    
    }
    
    nextLine();
   
    }
    setInterval(()=>{

        const petal=document.createElement("div");
        
        petal.className="petal";
        
        petal.innerHTML="🌸";
        
        petal.style.left=Math.random()*100+"vw";
        
        petal.style.animationDuration=4+Math.random()*5+"s";
        
        document.getElementById("petals").appendChild(petal);
        
        setTimeout(()=>{
        
        petal.remove();
        
        },9000);
        
        },700);
        let taps = 0;

const title = document.querySelector("h1");

title.addEventListener("click", () => {

    taps++;

    if(taps === 5){

        document.getElementById("easterEgg").classList.remove("hidden");

    }

});