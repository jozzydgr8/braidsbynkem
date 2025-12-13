export  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348151435731?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };