body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f7fb;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 80%;
  max-width: 900px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  padding: 30px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #2c3e50;
}

h2 {
  color: #1abc9c;
  margin-bottom: 15px;
}

p, li {
  font-size: 18px;
  line-height: 1.6;
}

.slide {
  display: none;
}

.active {
  display: block;
}

.navigation {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  background: #1abc9c;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #16a085;
}

#counter {
  margin-top: 10px;
  font-weight: bold;
  color: #2c3e50;
}