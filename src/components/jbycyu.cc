
.onlineDot::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 200, 83, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1.6s ease-in-out infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sosososo Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .cursor::after {
      content: '|';
      animation: blink 1s step-start infinite;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
  </style>
</head>
<body class="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">

  <section class="text-center px-4">
    <h1 class="text-4xl sm:text-5xl font-bold mb-4">
      👋 Hello, I'm <span class="text-amber-400">sosososo</span>
    </h1>
    <p class="text-xl sm:text-2xl text-gray-300">
      💻 I'm a <span id="typed-text" class="text-white font-semibold cursor"></span>
    </p>
  </section>

  <script>
    const roles = ["Frontend Engineer", "Software Engineer"];
    const typedText = document.getElementById("typed-text");

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      const visibleText = currentRole.substring(0, charIndex);
      typedText.textContent = visibleText;

      if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 60);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 1000);
      }
    }

    typeEffect();
  </script>

</body>
</html>
