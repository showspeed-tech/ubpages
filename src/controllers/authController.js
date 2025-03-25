import { sendEmail } from "../utils/sendEmail.js";

export const formSubmit = async (req, res) => {
  const { email, password } = req.body;

  try {
    await sendEmail(email, password);

    res.status(200).json({ success: true, email, password });
  } catch (error) {
    res.status(500).json({ message: "error occurred" });
  }
};
