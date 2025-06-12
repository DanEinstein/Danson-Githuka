 new Typed('#typed-name', {
    strings: [ "Hi"," I am Danson Githuka", "Frontend Developer", "Problem Solver", 'Tech Enthusiast,' ,'i welcome you to view my portfolio', "let's connect!"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    startDelay: 400,
    loop: true
  });

  new Typed('#typed-desc', {
    strings: ["Get in touch with me for any inquiries, collaborations, or just to say hello!"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true
  });
    const form = document.querySelector("form");
  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", function () {
    setTimeout(() => {
      successMsg.style.display = "block";
      form.reset();
    }, 1000); // Optional fake delay
  });