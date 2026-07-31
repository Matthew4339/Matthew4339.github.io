const container = document.getElementById('button-container');
container.innerHTML = `
  <button id="myPicButton" type="button">
    <img src="your-image-url.jpg" alt="Icon" style="width:20px;">
  </button>
`;

document.getElementById('myPicButton').addEventListener('click', () => {
    console.log('Button clicked!');
});