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
      background: url('https://files.catbox.moe/n7a0v4.jpg') no-repeat center center fixed;
      background-size: cover;
      color: #fff;
      overflow-x: hidden;
    }

    /* Header */
    h1 {
      text-align: center;
      margin-top: 50px;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      font-size: 2.5rem;
    }

    /* Sidebar */
    #sidebar {
      position: fixed;
      top: 0;
      right: -250px; /* Hidden by default */
      width: 250px;
      height: 100%;
      background: rgba(34, 34, 34, 0.9);
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
      color: #fff;
      text-align: center;
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

    /* Form */
    .content {
      text-align: center;
      margin-top: 50px;
    }

    .form-container {
      position: relative;
      margin: 20px auto;
      width: 80%;
      max-width: 400px;
    }

    input, select {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    input[type="password"]::placeholder {
      font-size: 18px;
      color: #aaa;
    }

    /* Eye Icon */
    .eye-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #fff;
    }

    /* Buttons */
    button {
      background: #00ff00;
      color: #222;
      font-size: 18px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }

    button:hover {
      background: #00cc00;
    }

    /* Locked Message */
    #error-message {
      color: red;
      display: none;
    }

    /* Animation for incorrect password */
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25%, 75% { transform: translateX(-10px); }
      50% { transform: translateX(10px); }
    }

    .shake {
      animation: shake 0.3s;
    }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <div id="sidebar">
    <ul>
      <li onclick="redirectTo('/index.html')">Home</li>
      <li onclick="redirectTo('/premium-all')">Premium Apps</li>
      <li onclick="redirectTo('/bot')">Bot</li>
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

    <div class="form-container">
      <input type="password" id="password" placeholder="Enter Password">
      <span class="eye-icon" onclick="togglePassword()">👁️</span>
      <button onclick="checkPassword()">Enter</button>
      <p id="error-message">Incorrect Password!</p>
    </div>

    <div id="ban-tool" style="display: none;">
      <h2>Enter WhatsApp Number</h2>
    <select id="country-code">
  <option value="+1">+1 USA</option>
  <option value="+7">+7 Russia</option>
  <option value="+20">+20 Egypt</option>
  <option value="+27">+27 South Africa</option>
  <option value="+30">+30 Greece</option>
  <option value="+31">+31 Netherlands</option>
  <option value="+32">+32 Belgium</option>
  <option value="+33">+33 France</option>
  <option value="+34">+34 Spain</option>
  <option value="+36">+36 Hungary</option>
  <option value="+39">+39 Italy</option>
  <option value="+40">+40 Romania</option>
  <option value="+41">+41 Switzerland</option>
  <option value="+43">+43 Austria</option>
  <option value="+44">+44 UK</option>
  <option value="+45">+45 Denmark</option>
  <option value="+46">+46 Sweden</option>
  <option value="+47">+47 Norway</option>
  <option value="+48">+48 Poland</option>
  <option value="+49">+49 Germany</option>
  <option value="+51">+51 Peru</option>
  <option value="+52">+52 Mexico</option>
  <option value="+53">+53 Cuba</option>
  <option value="+54">+54 Argentina</option>
  <option value="+55">+55 Brazil</option>
  <option value="+56">+56 Chile</option>
  <option value="+57">+57 Colombia</option>
  <option value="+58">+58 Venezuela</option>
  <option value="+60">+60 Malaysia</option>
  <option value="+61">+61 Australia</option>
  <option value="+62">+62 Indonesia</option>
  <option value="+63">+63 Philippines</option>
  <option value="+64">+64 New Zealand</option>
  <option value="+65">+65 Singapore</option>
  <option value="+66">+66 Thailand</option>
  <option value="+81">+81 Japan</option>
  <option value="+82">+82 South Korea</option>
  <option value="+84">+84 Vietnam</option>
  <option value="+86">+86 China</option>
  <option value="+90">+90 Turkey</option>
  <option value="+91">+91 India</option>
  <option value="+92">+92 Pakistan</option>
  <option value="+93">+93 Afghanistan</option>
  <option value="+94">+94 Sri Lanka</option>
  <option value="+95">+95 Myanmar</option>
  <option value="+98">+98 Iran</option>
  <option value="+211">+211 South Sudan</option>
  <option value="+212">+212 Morocco</option>
  <option value="+213">+213 Algeria</option>
  <option value="+216">+216 Tunisia</option>
  <option value="+218">+218 Libya</option>
  <option value="+220">+220 Gambia</option>
  <option value="+221">+221 Senegal</option>
  <option value="+222">+222 Mauritania</option>
  <option value="+223">+223 Mali</option>
  <option value="+224">+224 Guinea</option>
  <option value="+225">+225 Ivory Coast</option>
  <option value="+226">+226 Burkina Faso</option>
  <option value="+227">+227 Niger</option>
  <option value="+228">+228 Togo</option>
  <option value="+229">+229 Benin</option>
  <option value="+230">+230 Mauritius</option>
  <option value="+231">+231 Liberia</option>
  <option value="+232">+232 Sierra Leone</option>
  <option value="+233">+233 Ghana</option>
  <option value="+234">+234 Nigeria</option>
  <option value="+235">+235 Chad</option>
  <option value="+236">+236 Central African Republic</option>
  <option value="+237">+237 Cameroon</option>
  <option value="+238">+238 Cape Verde</option>
  <option value="+239">+239 Sao Tome and Principe</option>
  <option value="+240">+240 Equatorial Guinea</option>
  <option value="+241">+241 Gabon</option>
  <option value="+242">+242 Republic of the Congo</option>
  <option value="+243">+243 DR Congo</option>
  <option value="+244">+244 Angola</option>
  <option value="+245">+245 Guinea-Bissau</option>
  <option value="+248">+248 Seychelles</option>
  <option value="+249">+249 Sudan</option>
  <option value="+250">+250 Rwanda</option>
  <option value="+251">+251 Ethiopia</option>
  <option value="+252">+252 Somalia</option>
  <option value="+253">+253 Djibouti</option>
  <option value="+254">+254 Kenya</option>
  <option value="+255">+255 Tanzania</option>
  <option value="+256">+256 Uganda</option>
  <option value="+257">+257 Burundi</option>
  <option value="+258">+258 Mozambique</option>
  <option value="+260">+260 Zambia</option>
  <option value="+261">+261 Madagascar</option>
  <option value="+262">+262 Reunion</option>
  <option value="+263">+263 Zimbabwe</option>
  <option value="+264">+264 Namibia</option>
  <option value="+265">+265 Malawi</option>
  <option value="+266">+266 Lesotho</option>
  <option value="+267">+267 Botswana</option>
  <option value="+268">+268 Eswatini</option>
  <option value="+269">+269 Comoros</option>
  <option value="+350">+350 Gibraltar</option>
  <option value="+351">+351 Portugal</option>
  <option value="+352">+352 Luxembourg</option>
      </select>
      <input type="tel" id="phone-number" placeholder="Enter WhatsApp Number">
      <button onclick="sendBanRequest()">INITIATE BAN</button>
    </div>
  </div>

  <script>
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const banTool = document.getElementById("ban-tool");

    let correctPassword = "ESTEAMS001";

    // Sidebar Toggle
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    function redirectTo(url) {
      window.location.href = url;
    }

    // Toggle Password Visibility
    function togglePassword() {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
    }

    // Check Password
    function checkPassword() {
      if (passwordInput.value === correctPassword) {
        errorMessage.style.display = "none";
        banTool.style.display = "block";
      } else {
        errorMessage.style.display = "block";
        passwordInput.classList.add("shake");
        setTimeout(() => passwordInput.classList.remove("shake"), 300);
      }
    }

    // Send Email Request
    function sendBanRequest() {
      const countryCode = document.getElementById("country-code").value;
      const phoneNumber = document.getElementById("phone-number").value;

      if (!phoneNumber) {
        alert("Please enter a valid WhatsApp number.");
        return;
      }

      const emailBody = `Hello dear WhatsApp support,\n\nMy number has just been hacked by an unknown person. Please restrict the account urgently.\n\nMy WhatsApp number is: ${countryCode}${phoneNumber}`;
      window.location.href = `mailto:smb@whatsapp.support.com?subject=Urgent: Ban Request&body=${encodeURIComponent(emailBody)}`;
      alert("Your request has been sent. Wait for 24-48 hours.");
    }
  </script>
</body>
</html>