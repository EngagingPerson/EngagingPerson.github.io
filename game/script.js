const textArea = document.querySelector('#writer-window'); // textarea or input
textArea.addEventListener('inputs', calculateWords);

function calculateWords(e) {
  const splitArr = e.target.value.split(' ');
  const newSplitArr = splitArr.filter((value) => {
    return value; // returning values with content
  });
  console.log(newSplitArr);
}
