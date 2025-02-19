# StudyHub - Your AI-Powered Digital Library (Its a Prototype So it Only has the ui on different routes Only Library feature of loading books is working.)

## Project Description

StudyHub is a next-generation digital library that combines a vast collection of books with powerful AI tools to transform how users interact with and learn from their reading material. It provides a seamless platform to read, download, buy, and actively engage with books, offering personalized support and enhancing comprehension.

## Problem

Accessing, managing, and effectively utilizing information from books and other reading materials can be challenging. Readers often struggle with finding relevant books, organizing their digital libraries, extracting key information, and clarifying doubts. Existing e-libraries offer access to digital content, but lack comprehensive tools to enhance the reading and learning experience.

## Solution

StudyHub addresses these challenges by providing:

* **Extensive Digital Library:** Access to a vast collection of ebooks, PDFs, and other digital content across various genres and subjects.
* **Seamless Reading Experience:** A comfortable and intuitive reading experience with customizable fonts, margins, and reading modes.
* **Book Purchase & Download:** Direct purchase and download of ebooks within the platform, building a personal digital library.
* **AI-Powered Learning:**
    * **Note Generation:** Automatic generation of concise and organized notes from uploaded PDFs or purchased ebooks.
    * **Customizable Quiz Creation:** Creation of quizzes from books based on specific chapters, topics, or difficulty levels for self-assessment.
    * **Doubt Resolution:** AI-powered question answering and clarification of doubts related to book content using natural language.
    * **Content Summarization:** Generation of summaries for chapters, sections, or entire books for quick comprehension and review.
    * **Personalized Recommendations:** Book recommendations based on reading history, preferences, and interests.
* **Library Management:** Organization of the digital library with custom folders, tags, and collections.
* **Cross-Device Sync:** Access to the library and reading progress across multiple devices.
* **Community Features (Optional):** Connection with other readers, sharing recommendations, and participation in book discussions.

## Benefits

* **Centralized Digital Library:** All books and reading materials in one convenient location.
* **Enhanced Reading Experience:** A comfortable and personalized reading experience.
* **Improved Comprehension:** AI-powered tools for deeper understanding.
* **Personalized Learning:** Recommendations and support based on reading habits.
* **Increased Efficiency:** Automated note generation and content summarization.

## Target Audience

Readers of all ages and interests, students, researchers, and anyone who wants to enhance their reading experience.

## Technology Stack

* **Frontend:** React (MERN Stack)
* **Backend (Database & API):** Node.js/Express.js (MERN Stack), MongoDB
* **Backend (AI Processing):** Python (Flask)
* **Database:** MongoDB
* **AI/ML:** TensorFlow, PyTorch, Transformers (Hugging Face), Langchain
* **Cloud Platform:** AWS, Google Cloud, or Azure (Optional)
* **PDF Processing:** PyPDF2, pdfminer.six
* **Ebook Processing:** epub, calibre libraries.

## System Architecture

* **MERN Stack (Frontend & Database API):** Handles user interface, user authentication, book library management, and data storage in MongoDB.
* **Flask API (AI Processing):** Receives requests from the React frontend, processes AI tasks (note generation, quiz creation, doubt resolution, summarization), and returns results. This isolates the AI processing, allowing for easier scaling and maintenance.

## Getting Started (Example - MERN & Flask)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Gorav22/GDG-Hacks
    cd StudyHub
    ```
2.  **Frontend (React):**
    * `cd client`
    * `npm install`
    * `npm start`
3.  **Backend (Node.js/Express.js - MERN API):**
    * `cd server`
    * `npm install`
    * Configure MongoDB connection in `.env` file.
    * `npm run server`
4.  **Backend (Flask - AI API):**
    * `cd flask_ai_server`
    * Create a virtual environment: `python3 -m venv venv`
    * Activate the virtual environment: `source venv/bin/activate` (macOS/Linux) or `venv\Scripts\activate` (Windows)
    * `pip install -r requirements.txt`
    * `python app.py`

## Future Enhancements

* Integration with more ebook formats.
* Advanced AI capabilities for deeper content analysis.
* Enhanced community features.
* Audio book integration.
* Offline reading capabilities.
* Improve the integration between the MERN and Flask servers.
* Implement user authentication and authorization.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License
MIT