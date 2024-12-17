<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ES Teams WhatsApp Ban</title>
  <style>
    /* General Styling */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom right, #222, #444);
      color: #fff;
      overflow-x: hidden;
    }

    /* Sidebar */
    #sidebar {
      position: fixed;
      top: 0;
      right: -250px; /* Hidden by default */
      width: 250px;
      height: 100%;
      background: #222;
      color: #fff;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
      z-index: 1000;
      transition: right 0.3s ease-in-out;
      padding: 20px;
    }

    #sidebar.active {
      right: 0;
    }

    #sidebar ul {
      list-style: none;
      padding: 0;
    }

    #sidebar ul li {
      margin: 20px 0;
      font-size: 18px;
      cursor: pointer;
    }

    #sidebar ul li:hover {
      color: #00ff00;
    }

    /* Toggle Button */
    .menu-icon {
      position: fixed;
      top: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1001;
    }

    .menu-icon div {
      width: 35px;
      height: 5px;
      background: #fff;
      margin: 5px 0;
    }

    /* Content */
    .content {
      text-align: center;
      margin: 50px 20px;
    }

    .form-container input, select {
      display: block;
      margin: 15px auto;
      padding: 10px;
      font-size: 16px;
      border-radius: 10px;
      border: none;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    }

    .eye-icon {
      cursor: pointer;
      position: absolute;
      right: 20%;
      transform: translateY(-160%);
    }

    button {
      background: #00ff00;
      color: #222;
      font-size: 18px;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }

    button:hover {
      background: #00cc00;
    }

    /* Locked Message */
    .locked {
      color: red;
      display: none;
    }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <div id="sidebar">
    <ul>
      <li onclick="redirectToHome()">Home</li>
      <li onclick="redirectToPremium()">Premium Apps</li>
      <li onclick="redirectToBot()">Bot</li>
    </ul>
  </div>

  <!-- Menu Icon -->
  <div id="menu-toggle" class="menu-icon">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- Content -->
  <div class="content">
    <h1>ES TEAMS WHATSAPP BAN</h1>
    <p>Enter the PIN to access this tool:</p>

    <!-- Password Input -->
    <div style="position: relative;">
      <input type="password" id="password" placeholder="Enter 6-digit PIN" maxlength="6">
      <span class="eye-icon" onclick="togglePassword()">👁️</span>
    </div>
    <button onclick="checkPassword()">Enter</button>
    <p id="locked-message" class="locked">Too many failed attempts. Try again in 30 seconds.</p>

    <!-- WhatsApp Ban Form -->
    <div id="ban-tool" style="display: none;">
      <h2>Enter Victim's WhatsApp Number</h2>
      <select id="country-code">
        <option value="+1">+1 USA</option>
        <option value="+44">+44 UK</option>
        <option value="+91">+91 India</option>
        <option value="+81">+81 Japan</option>
        <option value="+234">+234 Nigeria</option>
        <option value="+61">+61 Australia</option>
        <option value="+49">+49 Germany</option>
        <option value="+33">+33 France</option>
        <option value="+55">+55 Brazil</option>
        <option value="+86">+86 China</option>
        <option value="+27">+27 South Africa</option>
        <option value="+7">+7 Russia</option>
        <option value="+971">+971 UAE</option>
        <option value="+92">+92 Pakistan</option>
        <option value="+966">+966 Saudi Arabia</option>
      </select>
      <input id="phone-number" type="text" placeholder="Enter Phone Number">
      <button onclick="sendBanRequest()">BAN</button>
      <p id="ban-status" style="color: green; display: none;">Request sent. Wait for 24-48 hours.</p>
    </div>
  </div>

  <script>
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const passwordInput = document.getElementById("password");
    const lockedMessage = document.getElementById("locked-message");
    const banTool = document.getElementById("ban-tool");
    const banStatus = document.getElementById("ban-status");

    let attempts = 0;

    // Sidebar Toggle
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    function redirectToHome() {
      window.location.href = "index.html";
    }
    function redirectToPremium() {
      window.location.href = "/premium-all";
    }
    function redirectToBot() {
      window.location.href = "/bot";
    }

    // Password Check with Lockout
    function checkPassword() {
      const pin = "140000";
      if (passwordInput.value === pin) {
        banTool.style.display = "block";
        lockedMessage.style.display = "none";
      } else {
        attempts++;
        if (attempts >= 3) {
          passwordInput.disabled = true;
          lockedMessage.style.display = "block";
          setTimeout(() => {
            passwordInput.disabled = false;
            attempts = 0;
            lockedMessage.style.display = "none";
          }, 30000);
        }
      }
    }

    // Password Eye Toggle
    function togglePassword() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }

    // Send Email Request
    function sendBanRequest() {
      const countryCode = document.getElementById("country-code").value;
      const phoneNumber = document.getElementById("phone-number").value;

      if (!phoneNumber.match(/^\d{7,15}$/)) {
        alert("Please enter a valid WhatsApp number.");
        return;
      }

      const emailBody = `I have been hacked. Please help me ban this number:\n\n${countryCode}${phoneNumber}`;
      window.location.href = `mailto:smb@whatsapp.support.com?subject=Urgent: Ban Request&body=${encodeURIComponent(emailBody)}`;
      banStatus.style.display = "block";
    }
  </script>
</body>
</html>