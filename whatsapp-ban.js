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
      color: #000; /* Changed text to black */
      overflow-x: hidden;
    }

    /* Header */
    h1 {
      text-align: center;
      margin-top: 50px;
      text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.9);
      font-size: 2.5rem;
    }

    /* Sidebar */
    #sidebar {
      position: fixed;
      top: 0;
      right: -250px; /* Fully hidden */
      width: 250px;
      height: 100%;
      background: rgba(34, 34, 34, 0.0); /* Invisible background */
      z-index: 1000;
      transition: right 0.3s ease-in-out;
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
      color: #000;
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
      background: #000;
      margin: 5px 0;
      border-radius: 5px;
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

    input {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      font-size: 18px;
      border: none;
      border-radius: 25px; /* Smooth curves */
      background: linear-gradient(145deg, #e0e0e0, #ffffff); /* 4D effect */
      box-shadow: inset 5px 5px 10px #c9c9c9, inset -5px -5px 10px #ffffff;
      color: #000;
    }

    input::placeholder {
      color: #777; /* Subtle gray */
      font-style: italic;
    }

    /* Eye Icon */
    .eye-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #777;
    }

    /* Buttons */
    button {
      background: #00ff00;
      color: #000;
      font-size: 18px;
      padding: 10px;
      border: none;
      border-radius: 25px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background: #00cc00;
      transform: scale(1.05);
    }

    /* Locked Message */
    #error-message {
      color: red;
      display: none;
    }

    /* Shake Animation */
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
      <h2>Enter Victim's WhatsApp Number</h2>
<select id="country-code">
  <option value="+93">+93 Afghanistan</option>
  <option value="+355">+355 Albania</option>
  <option value="+213">+213 Algeria</option>
  <option value="+1684">+1684 American Samoa</option>
  <option value="+376">+376 Andorra</option>
  <option value="+244">+244 Angola</option>
  <option value="+1">+1 Antigua and Barbuda</option>
  <option value="+54">+54 Argentina</option>
  <option value="+374">+374 Armenia</option>
  <option value="+61">+61 Australia</option>
  <option value="+43">+43 Austria</option>
  <option value="+994">+994 Azerbaijan</option>
  <option value="+1">+1 Bahamas</option>
  <option value="+973">+973 Bahrain</option>
  <option value="+880">+880 Bangladesh</option>
  <option value="+1">+1 Barbados</option>
  <option value="+375">+375 Belarus</option>
  <option value="+32">+32 Belgium</option>
  <option value="+501">+501 Belize</option>
  <option value="+229">+229 Benin</option>
  <option value="+1">+1 Bermuda</option>
  <option value="+975">+975 Bhutan</option>
  <option value="+591">+591 Bolivia</option>
  <option value="+387">+387 Bosnia and Herzegovina</option>
  <option value="+267">+267 Botswana</option>
  <option value="+55">+55 Brazil</option>
  <option value="+1">+1 British Virgin Islands</option>
  <option value="+673">+673 Brunei</option>
  <option value="+359">+359 Bulgaria</option>
  <option value="+226">+226 Burkina Faso</option>
  <option value="+257">+257 Burundi</option>
  <option value="+855">+855 Cambodia</option>
  <option value="+237">+237 Cameroon</option>
  <option value="+1">+1 Canada</option>
  <option value="+238">+238 Cape Verde</option>
  <option value="+1">+1 Cayman Islands</option>
  <option value="+236">+236 Central African Republic</option>
  <option value="+56">+56 Chile</option>
  <option value="+86">+86 China</option>
  <option value="+61">+61 Christmas Island</option>
  <option value="+57">+57 Colombia</option>
  <option value="+269">+269 Comoros</option>
  <option value="+242">+242 Republic of the Congo</option>
  <option value="+243">+243 DR Congo</option>
  <option value="+682">+682 Cook Islands</option>
  <option value="+506">+506 Costa Rica</option>
  <option value="+225">+225 Ivory Coast</option>
  <option value="+385">+385 Croatia</option>
  <option value="+53">+53 Cuba</option>
  <option value="+599">+599 Curacao</option>
  <option value="+357">+357 Cyprus</option>
  <option value="+420">+420 Czech Republic</option>
  <option value="+45">+45 Denmark</option>
  <option value="+253">+253 Djibouti</option>
  <option value="+1">+1 Dominica</option>
  <option value="+1">+1 Dominican Republic</option>
  <option value="+593">+593 Ecuador</option>
  <option value="+20">+20 Egypt</option>
  <option value="+503">+503 El Salvador</option>
  <option value="+240">+240 Equatorial Guinea</option>
  <option value="+291">+291 Eritrea</option>
  <option value="+372">+372 Estonia</option>
  <option value="+251">+251 Ethiopia</option>
  <option value="+500">+500 Falkland Islands</option>
  <option value="+298">+298 Faroe Islands</option>
  <option value="+679">+679 Fiji</option>
  <option value="+358">+358 Finland</option>
  <option value="+33">+33 France</option>
  <option value="+241">+241 Gabon</option>
  <option value="+1">+1 Gambia</option>
  <option value="+995">+995 Georgia</option>
  <option value="+49">+49 Germany</option>
  <option value="+233">+233 Ghana</option>
  <option value="+350">+350 Gibraltar</option>
  <option value="+30">+30 Greece</option>
  <option value="+299">+299 Greenland</option>
  <option value="+1">+1 Grenada</option>
  <option value="+590">+590 Guadeloupe</option>
  <option value="+1">+1 Guam</option>
  <option value="+502">+502 Guatemala</option>
  <option value="+44">+44 Guernsey</option>
  <option value="+224">+224 Guinea</option>
  <option value="+245">+245 Guinea-Bissau</option>
  <option value="+595">+595 Guyana</option>
  <option value="+509">+509 Haiti</option>
  <option value="+504">+504 Honduras</option>
  <option value="+852">+852 Hong Kong</option>
  <option value="+36">+36 Hungary</option>
  <option value="+354">+354 Iceland</option>
  <option value="+91">+91 India</option>
  <option value="+62">+62 Indonesia</option>
  <option value="+98">+98 Iran</option>
  <option value="+964">+964 Iraq</option>
  <option value="+353">+353 Ireland</option>
  <option value="+972">+972 Israel</option>
  <option value="+39">+39 Italy</option>
  <option value="+1">+1 Jamaica</option>
  <option value="+81">+81 Japan</option>
  <option value="+962">+962 Jordan</option>
  <option value="+7">+7 Kazakhstan</option>
  <option value="+254">+254 Kenya</option>
  <option value="+686">+686 Kiribati</option>
  <option value="+965">+965 Kuwait</option>
  <option value="+996">+996 Kyrgyzstan</option>
  <option value="+856">+856 Laos</option>
  <option value="+371">+371 Latvia</option>
  <option value="+961">+961 Lebanon</option>
  <option value="+266">+266 Lesotho</option>
  <option value="+231">+231 Liberia</option>
  <option value="+218">+218 Libya</option>
  <option value="+423">+423 Liechtenstein</option>
  <option value="+370">+370 Lithuania</option>
  <option value="+352">+352 Luxembourg</option>
  <option value="+853">+853 Macau</option>
  <option value="+389">+389 Macedonia</option>
  <option value="+261">+261 Madagascar</option>
  <option value="+692">+692 Marshall Islands</option>
  <option value="+223">+223 Mali</option>
  <option value="+1">+1 Malta</option>
  <option value="+692">+692 Micronesia</option>
  <option value="+596">+596 Martinique</option>
  <option value="+222">+222 Mauritania</option>
  <option value="+230">+230 Mauritius</option>
  <option value="+52">+52 Mexico</option>
  <option value="+691">+691 Micronesia</option>
  <option value="+373">+373 Moldova</option>
  <option value="+377">+377 Monaco</option>
  <option value="+976">+976 Mongolia</option>
  <option value="+382">+382 Montenegro</option>
  <option value="+1">+1 Montserrat</option>
  <option value="+212">+212 Morocco</option>
  <option value="+258">+258 Mozambique</option>
  <option value="+95">+95 Myanmar</option>
  <option value="+264">+264 Namibia</option>
  <option value="+674">+674 Nauru</option>
  <option value="+977">+977 Nepal</option>
  <option value="+31">+31 Netherlands</option>
  <option value="+687">+687 New Caledonia</option>
  <option value="+64">+64 New Zealand</option>
  <option value="+505">+505 Nicaragua</option>
  <option value="+234">+234 Nigeria</option>
  <option value="+683">+683 Niue</option>
  <option value="+850">+850 North Korea</option>
  <option value="+47">+47 Norway</option>
  <option value="+968">+968 Oman</option>
  <option value="+92">+92 Pakistan</option>
  <option value="+680">+680 Palau</option>
  <option value="+970">+970 Palestine</option>
  <option value="+507">+507 Panama</option>
  <option value="+675">+675 Papua New Guinea</option>
  <option value="+595">+595 Paraguay</option>
  <option value="+51">+51 Peru</option>
  <option value="+63">+63 Philippines</option>
  <option value="+48">+48 Poland</option>
  <option value="+351">+351 Portugal</option>
  <option value="+1">+1 Puerto Rico</option>
  <option value="+974">+974 Qatar</option>
  <option value="+262">+262 Reunion</option>
  <option value="+40">+40 Romania</option>
  <option value="+7">+7 Russia</option>
  <option value="+250">+250 Rwanda</option>
  <option value="+1">+1 Saint Kitts and Nevis</option>
  <option value="+590">+590 Saint Martin</option>
  <option value="+1">+1 Saint Pierre and Miquelon</option>
  <option value="+1758">+1758 Saint Lucia</option>
  <option value="+1">+1 Saint Vincent and the Grenadines</option>
  <option value="+684">+684 Samoa</option>
  <option value="+378">+378 San Marino</option>
  <option value="+239">+239 Sao Tome and Principe</option>
  <option value="+966">+966 Saudi Arabia</option>
  <option value="+221">+221 Senegal</option>
  <option value="+381">+381 Serbia</option>
  <option value="+248">+248 Seychelles</option>
  <option value="+232">+232 Sierra Leone</option>
  <option value="+65">+65 Singapore</option>
  <option value="+421">+421 Slovakia</option>
  <option value="+386">+386 Slovenia</option>
  <option value="+677">+677 Solomon Islands</option>
  <option value="+252">+252 Somalia</option>
  <option value="+27">+27 South Africa</option>
  <option value="+82">+82 South Korea</option>
  <option value="+34">+34 Spain</option>
  <option value="+94">+94 Sri Lanka</option>
  <option value="+249">+249 Sudan</option>
  <option value="+597">+597 Suriname</option>
  <option value="+268">+268 Eswatini</option>
  <option value="+46">+46 Sweden</option>
  <option value="+41">+41 Switzerland</option>
  <option value="+963">+963 Syria</option>
  <option value="+886">+886 Taiwan</option>
  <option value="+992">+992 Tajikistan</option>
  <option value="+255">+255 Tanzania</option>
  <option value="+66">+66 Thailand</option>
  <option value="+228">+228 Togo</option>
  <option value="+690">+690 Tokelau</option>
  <option value="+676">+676 Tonga</option>
  <option value="+1">+1 Trinidad and Tobago</option>
  <option value="+216">+216 Tunisia</option>
  <option value="+1">+1 Turks and Caicos Islands</option>
  <option value="+993">+993 Turkmenistan</option>
  <option value="+90">+90 Turkey</option>
  <option value="+688">+688 Tuvalu</option>
  <option value="+256">+256 Uganda</option>
  <option value="+380">+380 Ukraine</option>
  <option value="+971">+971 United Arab Emirates</option>
  <option value="+44">+44 United Kingdom</option>
  <option value="+1">+1 United States</option>
  <option value="+598">+598 Uruguay</option>
  <option value="+998">+998 Uzbekistan</option>
  <option value="+678">+678 Vanuatu</option>
  <option value="+58">+58 Venezuela</option>
  <option value="+84">+84 Vietnam</option>
  <option value="+1">+1 Virgin Islands</option>
  <option value="+681">+681 Wallis and Futuna</option>
  <option value="+967">+967 Yemen</option>
  <option value="+260">+260 Zambia</option>
  <option value="+263">+263 Zimbabwe</option>
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

      const emailBody = `Hello dear WhatsApp support,\n\nMy number has just been hacked by an unknown person. I just open my app now and saw i was logged out and i stsrted getting calls from other people stating i was asking them for money on whatsapp meanwhile it wasnt me at all. Please restrict the account urgently.\n\nMy WhatsApp number is: ${countryCode}${phoneNumber}`;
      window.location.href = `mailto:smb@whatsapp.support.com?subject=Urgent: Ban Request&body=${encodeURIComponent(emailBody)}`;
      alert("The Ban Request has been sent. Wait for 24-48 hours for effect and check back your email.");
    }
  </script>
</body>
</html>