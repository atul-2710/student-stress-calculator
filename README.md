# Student Stress Predictor

A full-stack machine learning application that predicts student stress levels based on daily lifestyle habits. This project was developed as a capstone project during a 60-day pre-college career kickstart journey.

## 🚀 Live Demo

Access the live application here: [https://student-stress-calculator.onrender.com/](https://student-stress-calculator.onrender.com/)

_Note: This application is hosted on a free tier. Please allow ~45-50 seconds for the server to wake up on the first load._

## 📋 Project Overview

The Student Stress Predictor takes various daily metrics as input and uses a pre-trained machine learning model to estimate the user's stress level. It is designed to be a quick, educational tool for students to visualize how lifestyle choices (like sleep and study habits) may correlate with stress.

### 🧠 The Brain (Machine Learning)

- **Model:** Built using `scikit-learn`.
- **Dataset:** Trained on the [Student Stress Factors Dataset](https://www.kaggle.com/datasets/samyakb/student-stress-factors).
- **Technique:** Leverages classification algorithms to map lifestyle inputs to stress categories.

### 💻 The Stack

- **Backend:** Python / Flask
- **Frontend:** HTML5, CSS3, JavaScript (Async/Await)
- **Deployment:** Render (with Gunicorn production server)

## 🛠️ Features

- **Interactive UI:** Features a custom, frosted-glass design system with interactive radio button "tiles."
- **Asynchronous Processing:** Uses `fetch()` and `async/await` for seamless, zero-reload predictions.
- **Responsive Design:** Clean, centered card layout optimized for both desktop and mobile viewing.
- **Non-Medical Disclaimer:** Transparent and high-contrast notice regarding the informational nature of the tool.

## ⚠️ Disclaimer

This application is a machine learning prototype built for educational and informational purposes only. It does not provide medical advice, diagnosis, or treatment. Stress scores are strictly automated estimations based on a sample dataset. If you are experiencing overwhelming stress or anxiety, please consult a qualified mental health professional or academic advisor.

---

_Built with ❤️ by a pre-college student._
