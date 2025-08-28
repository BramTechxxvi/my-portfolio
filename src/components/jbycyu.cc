
  useEffect(() => {
    generateStars();
    // Optional: update on resize
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);


  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {stars.map((star) => (
        <div
          key={star.id}
          className="rounded-full bg-white absolute"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export { StarBackground };

