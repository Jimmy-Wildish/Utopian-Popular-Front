exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  console.log(`
    New Contact Form Submission:
    Name: ${data.name}
    Email: ${data.email}
    Message: ${data.message}
  `);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};

