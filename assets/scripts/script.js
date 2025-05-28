const container = document.getElementById('movie-container');
  const intervalTime = 18000; // 18 seconds

  setInterval(() => {
    // Move first card to the end to rotate the order
    const first = container.firstElementChild;
    container.appendChild(first);
  }, intervalTime);