const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke
    
}
 


const showNewJoke = async (evt) => {
    const jokeText = await getDadJoke();
    const span = evt.target;
    console.log(evt.target.tagName);
    if(span.className === 'cover'){
        span.innerText = jokeText;
        span.classList.remove('cover');
        span.classList.add('jokeContent');
    }
    
}

const removeJokes = () => {
    // console.log(evt.target.tagName);
    const spans = document.querySelectorAll('.jokeContent');
    for(let span of spans){
        if(span.className === 'jokeContent'){
            span.innerText = 'Click Me';
            span.classList.remove('jokeContent');
            span.classList.add('cover');
        }
        
    }

    
}




const clicks = document.querySelectorAll('.cell');
for(let clickMe of clicks){
    clickMe.addEventListener('click', showNewJoke);
}

const restart = document.querySelector('#reset');
restart.addEventListener('click', removeJokes);

