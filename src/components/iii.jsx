const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:8000/send-email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } else {
      setStatus("❌ Failed: " + data.error);
    }
  } catch (err) {
    setStatus("❌ Network error. Try again.");
  }

  setLoading(false);
};
