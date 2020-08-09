!(function() {
  
  const button = document.getElementById('btn');
  const fact = document.getElementById('fact');

  const load = 'We writing ✒️';
  const err = 'Something is wrong, try again 🔎';
  const cta = 'One More!'

  const getFact = () => {
    fact.innerText = load;
    button.innerText = cta;
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(resp => resp.json())
    .then(data => {
      fact.innerText = '';
      createFact(data.text)
    })
    .catch( error => {fact.innerText = err, console.log(error)});
  }

  function createFact(txt) {
    const factContainer = document.createElement("span");
    factContainer.appendChild(document.createTextNode(txt));
    fact.appendChild(factContainer);
  }

  button.addEventListener('click', getFact, false)

})();