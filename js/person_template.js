function PersonTemplate(data) {
  return `
  <main>
    <div class="character">
      <li>${data.Name} is ${data.Job}.  ${data.Gender} likes to ${data.Hobby}.  ${data.Gender} is dating ${data.LoveInterest}.  
      </li>
      <img src="${data.picture}"><hr>
    </div>
  </main>
  `;
}

export default PersonTemplate;