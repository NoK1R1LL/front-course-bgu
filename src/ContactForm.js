import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://formspree.io/f/myyrozlv",
        formData
      );
      console.log(response.data);
      alert("Данные отправлены успешно!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Ошибка при отправке данных!");
    }
  };

  return (
    <div>
      <h2>Форма обратной связи</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Кому вы хотите написать на Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Сообщение:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Отправить</button>
      </form>
    </div>
  );
};

export default ContactForm;
