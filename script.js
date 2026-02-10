document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.getElementById("home-page");
  const ScienceMenu = document.getElementById("science-menu");
  const TLEMenu = document.getElementById("tle-menu");
  const ComMenu = document.getElementById("Com-menu");
  const ScienceCatalog = document.getElementById("science-catalog");
  const ScienceExperimentsCatalog = document.getElementById("experiment-catalog");
  const TLECatalog = document.getElementById("tle-catalog");
  const ComCatalog = document.getElementById("Com-catalog");
  const ScienceDetails = document.getElementById("science-details");
    const ScienceExpDetails = document.getElementById("science-experiment-details");
  const TLEDetails = document.getElementById("tle-details");
  const ComDetails = document.getElementById("Com-details");
  const ScienceCatalogContainer = document.getElementById("science-container");
    const ScienceExperimentsCatalogContainer = document.getElementById("experiment-container");

  const equipmentDetails = document.getElementById("equipment-details");
  const experimentDetails = document.getElementById("experiment-details");
  const TLEequipmentDetails = document.getElementById("tleequipment-details");
  const ComequipmentDetails = document.getElementById("Comequipment-details");
  const ScienceFavorites = document.getElementById("science-favorite");
  const TLEFavoritesPage = document.getElementById("TLE-favorite");
  const ComFavoritesPage = document.getElementById("Com-favorite");
  const TLECatalogContainer = document.getElementById("TLE-container");
  const ComCatalogContainer = document.getElementById("Com-container");
  const ScisearchInput = document.getElementById("science-search-bar");
  const TLEsearchInput = document.getElementById("tle-search-bar");
  const ComsearchInput = document.getElementById("com-search-bar");
  const sorter = document.getElementById("abcsorter");
  const categorySorter = document.getElementById("category-sorter");
  const TLEsorter = document.getElementById("tle-abcsorter");
  const TLEcategorySorter = document.getElementById("tle-category-sorter");
  const Comsorter = document.getElementById("Com-abcsorter");
  const ComcategorySorter = document.getElementById("Com-category-sorter");
  const scifavoritesContainer = document.getElementById("favorites-container");
  const TLEfavoritesContainer = document.getElementById("tle-favorites-container");
  const ComfavoritesContainer = document.getElementById("Com-favorites-container");
  const AboutUs = document.getElementById("about-us");
  const Settings = document.getElementById("settings");
const SciGame = document.getElementById("quiz-section");
const ScoreSection = document.getElementById("score-section");
const ScoreContainer = document.getElementById("score");
const TLEGame = document.getElementById("quiz-section");
const TLEScoreSection = document.getElementById("score-section");
const TLEScoreContainer = document.getElementById("score");
const ComGame = document.getElementById("quiz-section");
const ComScoreSection = document.getElementById("score-section");
const ComScoreContainer = document.getElementById("score");


const WrongAudio = new Audio("./audio/wrong.wav");
const CorrectAudio = new Audio("./audio/correct.wav");
const FavoriteAudio = new Audio("./audio/fav.wav");
 
  let catalogData = [
    {
      title: "Alcohol Lamp",
      description: "The alcohol lamp is a small, portable device used for heating and combustion in laboratory settings. It consists of a glass or metal container that holds a wick, which burns alcohol to create a consistent flame. This simplicity and ease of use make alcohol lamps a popular choice for small-scale laboratory heating tasks. They are particularly valued for their portability, ease of maintenance, and ability to provide a reliable heat source in environments where larger heating tools may not be practical.",
      image: "./images/sciequipimg/Alcohol Lamp.png",
      howtouse: "To operate the alcohol lamp, follow these steps: <br> - Fill the lamp with alcohol, being careful not to overfill it. <br> - Insert the wick into the container, allowing it to absorb alcohol before igniting. <br> - Light the wick using a match or lighter, and adjust the flame intensity as necessary for your application.",
      cautions: "When using an alcohol lamp, please take the following precautions: <br> - Avoid overfilling the lamp to prevent spillage that could lead to fire hazards. <br> - Keep the flame at a safe distance from any flammable materials. <br> - Always allow the lamp to cool down completely before attempting to refill it. <br> - Store the lamp in a secure location away from heat sources to prevent accidental ignition.",
      history: "Alcohol lamps gained popularity in the 19th century as an efficient alternative to candles for providing a steady flame in academic and laboratory settings. Their usage has declined in recent times due to the advent of more modern and sophisticated heating devices, but they are still valued in many educational environments for their simplicity and effectiveness.",
      category: "Heating/Cooling Equipments"
    },
    {
      title: "Beaker",
      description: "A beaker is a cylindrical container commonly used in laboratories for mixing, heating, and holding liquids. Its simple design often includes graduated markings along the side for easy volume measurement. The wide mouth of the beaker makes it suitable for stirring, pouring, and adding materials during experiments, making it an indispensable tool for both students and professionals in various scientific fields. Beakers can typically withstand heat and are often made from borosilicate glass to avoid cracking.",
      image: "./images/sciequipimg/Beaker (2).png",
      howtouse: "To use a beaker effectively: <br> - Pour the desired liquid into the beaker. <br> - Utilize it as needed for mixing, heating, or transferring substances in your experiments. <br> - For accurate measurements, use a pipette or measuring cylinder to transfer liquids into the beaker.",
      cautions: "While using a beaker, exercise caution to: <br> - Avoid sudden temperature changes, as this can lead to cracking or breaking of the glass. <br> - Handle hot beakers with heat-resistant gloves or tongs to prevent burns.",
      history: "The modern beaker has its origins in the 19th century, when laboratory glassware began to be standardized for scientific use. Beakers are now a common piece in every laboratory due to their versatility and practicality.",
      category: "Glassware"
    },
    {
      title: "Bunsen Burner",
      description: "The Bunsen burner is a fundamental laboratory tool known for producing a single open flame used for heating, combustion, and sterilization applications in scientific laboratories. The burner features an adjustable flame, allowing users to control its intensity and color. Its design typically includes an air control valve, enabling the user to mix air with the gas for a hotter flame. This versatility and reliability make it a staple in most laboratories, where precise heating is crucial.",
      image: "./images/sciequipimg/Bunsen Burner.png",
      howtouse: "To set up and use a Bunsen burner: <br> - Connect the burner to a gas source, ensuring that the hose is secured properly. <br> - Open the gas valve gently and use a striker to ignite the burner. <br> - Adjust the air supply to control the flame’s color and intensity as needed for your specific experiment. <br> - Always keep a secondary source of ignition on hand in case of accidental flame extinguishing.",
      cautions: "When operating a Bunsen burner, please take these precautions: <br> - Handle gas connections carefully to minimize the risk of leaks. <br> - Never leave the burner unattended while it is lit. <br> - Always turn off the gas supply immediately after you are done using the burner. <br> - Use a flame guard or shield if working in an environment with drafts to prevent the flame from blowing out.",
      history: "The Bunsen burner was developed by Robert Bunsen in 1855 and revolutionized laboratory heating methods, providing scientists with a controlled, efficient, and adjustable heat source. Over the years, its design has been improved, but its fundamental concept remains the same.",
      category: "Heating/Cooling Equipments"
    },
    {
      title: "Crucible with Cover",
      description: "A crucible with a cover is a small, heat-resistant container designed specifically for heating chemical compounds to very high temperatures. It is typically used in laboratories and is suitable for applications involving a furnace or open flame. The cover is an essential feature as it helps regulate airflow, prevents contamination, and allows for controlled reactions. Crucibles are crucial for high-temperature experiments and are constructed from materials such as porcelain or specialized metals to withstand extreme heat. Their design ensures that they can endure harsh chemical environments.",
      image: "./images/sciequipimg/Crucible with Cover.png",
      howtouse: "When using a crucible with a cover: <br> - Place the material you wish to heat inside the crucible. <br> - Securely cover the crucible with its lid to control airflow and maintain the desired environment. <br> - Use appropriate heat-resistant tongs to position the crucible on a heat source and remove it safely once it reaches a high temperature. <br> - Always allow the crucible to cool in a safe location before attempting to open or remove the lid.",
      cautions: "Important safety precautions include: <br> - Always use tongs to handle the crucible when it is hot to avoid burns. <br> - Prevent exposing the crucible to rapid temperature changes, as this may cause cracking or breakage. <br> - Ensure there is proper ventilation when heating materials that can produce gas.",
      history: "Crucibles have a long-standing history in both metallurgy and chemistry, dating back to ancient times when they were utilized for melting and refining metals. Their use has played a significant role in the advancements of both alchemy and modern material science, helping scientists understand chemical compositions better.",
      category: "Heating/Cooling Equipments"
    },
    {
      title: "Florence Flask",
      description: "The Florence flask is a laboratory tool characterized by its distinctive rounded body and narrow neck. It is primarily used for heating, boiling, and distilling liquids, making it an essential piece of equipment in various scientific procedures. Its design allows for uniform heating and minimizes the risk of spillage during swirling or mixing, enhancing the accuracy and reliability of chemical reactions. In distillation processes, its shape facilitates condensation due to the cooling neck.",
      image: "./images/sciequipimg/Florence Flask.png",
      howtouse: "To use a Florence flask properly: <br> - Begin by filling the flask with the desired liquid, ensuring it does not exceed the recommended fill line. <br> - Position the flask on a heat source or over a flame to enable even heating. <br> - Secure the flask in place during heating using appropriate clamps or stands. <br> - Swirl the flask carefully when mixing to avoid spillage.",
      cautions: "Caution should be taken to: <br> - Avoid rapid temperature changes to prevent breakage or cracking of the flask. <br> - Handle the flask carefully, especially when it is hot to avoid burns or spills. <br> - Ensure that the neck is not blocked during boiling to prevent pressure build-up.",
      history: "Named after Florence, Italy, the Florence flask became a prominent tool in both glassmaking and chemistry due to its practical design and versatility in various laboratory experiments. Its use has endured in modern laboratories as a primary tool for distillation and heated reactions.",
      category: "Glassware"
    },
    {
      title: "Erlenmeyer Flask",
      description: "The Erlenmeyer flask is a conical laboratory container widely used for mixing and heating liquids. Its unique shape features a flat bottom, a wide mouth, and a neck that narrows to a spout, which allows for safer mixing and reduces the risk of spills. This flask is especially useful in titration processes and for reactions that require swirling without the risk of spillage, making it a staple in both educational and professional labs. The design also allows for efficient heating on hot plates or in water baths.",
      image: "./images/sciequipimg/Erlenmeyer Flask.png",
      howtouse: "To utilize an Erlenmeyer flask: <br> - Add the required liquids to the flask and mix them by swirling or shaking as necessary, ensuring that the neck is kept clean. <br> - Keep the flask securely held if heating, ensuring that you do not use a flame directly under the flask.",
      cautions: "While handling the flask, be sure to: <br> - Use caution when the flask is hot to prevent burns. <br> - Always check for cracks or damage before use, as this can compromise the integrity of the glass.",
      history: "The Erlenmeyer flask was invented by Emil Erlenmeyer in 1861 and has since become a favored piece of laboratory equipment due to its unique capabilities, which facilitate many chemical processes.",
      category: "Glassware"
    },
    {
      title: "Glass Pipette",
      description: "A glass pipette is a narrow, calibrated tube designed specifically for transferring small volumes of liquid with high precision. These pipettes allow users to accurately measure and dispense liquids in laboratory settings, reducing the risk of contamination and ensuring consistent results. They are essential tools for chemistry, biology, and medical laboratories, where precision is critical for experiment validity and response accuracy. Glass pipettes can often be reused after thorough cleaning.",
      image: "./images/sciequipimg/Glass Pipette.png",
      howtouse: "To operate a glass pipette: <br> - Squeeze the bulb at the top, dip the tip of the pipette into the liquid to be transferred, <br> - Release the bulb slowly to draw the liquid into the pipette, and then dispense it into the desired container by squeezing the bulb again.",
      cautions: "Always handle with care to: <br> - Avoid breakage, as shards can be hazardous. <br> - Ensure that the pipette is cleaned properly between uses to prevent cross-contamination.",
      history: "Developed in the 19th century, glass pipettes revolutionized liquid measurement in labs, becoming crucial to accuracy and standardization in laboratory practice.",
      category: "Pipetting"
    },
    {
      title: "Volumetric Flask",
      description: "The volumetric flask is a laboratory instrument specifically designed for making solutions of precise volumes. It features a long neck with a single calibration mark, allowing users to fill it to a specific volume accurately. Volumetric flasks are essential for analytical chemistry, where precise measurements of liquid concentrations are required for experiments and reactions. Their design minimizes the errors commonly associated with other types of glassware.",
      image: "./images/sciequipimg/Volumetric Flask.png",
      howtouse: "To utilize a volumetric flask effectively: <br> - Carefully fill the flask with liquid until it reaches the calibration mark to prepare the desired solution with accuracy. <br> - Use a dropper or pipette to add liquid slowly as you approach the mark for greater precision.",
      cautions: "Be sure to: <br> - Keep the neck of the flask and the calibration line clean to ensure accurate measurements. <br> - Avoid shaking or vigorous mixing, as this can alter concentration in delicate solutions.",
      history: "The volumetric flask was developed in the late 19th century and has subsequently become a standard piece of lab equipment for chemists and researchers needing accuracy in their work, particularly in analytical applications.",
      category: "Glassware"
    },
    {
      title: "Watch Glass",
      description: "A watch glass is a shallow, concave glass dish often used in laboratories for various purposes, including the evaporation of small amounts of liquid, holding solids, or as a lid for beakers. Its design allows it to create a surface tension for liquid samples and minimize contamination from external sources. Watch glasses are versatile tools useful in both education and professional labs. Additionally, they are effective for observing chemical reactions when placed over beakers.",
      image: "./images/sciequipimg/Watch Glass.png",
      howtouse: "To use a watch glass effectively: <br> - Place the substance you wish to observe or evaporate on the watch glass and use it as needed. <br> - You can also place it over a beaker to minimize loss of vapors during reaction.",
      cautions: "Please avoid applying heat directly to the watch glass to prevent cracking. <br> - Do not use it to hold hot liquids unless you are sure it can withstand the temperature.",
      history: "The watch glass gets its name from its resemblance to the glass cover of a pocket watch, and it has been utilized for scientific purposes since the 18th century. Over the years, it has become an essential part of laboratory equipment.",
      category: "Glassware"
    },
    {
      title: "Test Tube",
      description: "A test tube is a small, cylindrical glass container used primarily for holding liquids during experiments. Its design allows for safe mixing and heating of samples, making it a fundamental piece of glassware in scientific laboratories. Test tubes are often used in conjunction with test tube racks to keep them stable and organized, facilitating efficient laboratory practices. They may also be used for chemical reactions or observations.",
      image: "./images/sciequipimg/test-tube.png",
      howtouse: "To use a test tube: <br> - Add the sample or liquid into the tube and place it on a test tube rack for stability or securely hold it with tongs during heating. <br> - For heating, make sure the test tube is angled safely away from yourself and others.",
      cautions: "When heating, be sure to use designated test tube holders for safety. <br> - Always ensure test tubes are clean and free of previous residues to avoid unwanted reactions.",
      history: "The concept of the test tube emerged in the 19th century, allowing for controlled experiments and chemical reactions in a manageable format. They were pivotal during the development of modern chemistry.",
      category: "Glassware"
    },
    {
      title: "Tongs",
      description: "Laboratory tongs are tools designed for gripping and lifting various objects in lab settings. They come in various forms and sizes, enabling users to handle hot or hazardous materials safely and aid in experiments without direct contact. Tongs provide a vital function in maintaining safety and precision when working with lab equipment and materials. Different types of tongs are designed for specific tasks, such as Beaker tongs or crucible tongs.",
      image: "./images/sciequipimg/Tongs.png",
      howtouse: "To use laboratory tongs: <br> - Open the tongs wide, grip the object firmly to maintain a secure hold, and lift it carefully to prevent accidents or drops. <br> - Ensure that you choose the appropriate type of tongs for the object being handled.",
      cautions: "Always ensure a secure grip to avoid dropping objects, which can cause damage or injury. <br> - Be aware of the weight and temperature of the object to avoid injury.",
      history: "The design of tongs has evolved from ancient gripping tools used in metalwork to the specialized tongs found in modern laboratories. They have become an essential item for safety in lab environments.",
      category: "Tools"
    },
    {
      title: "Compass Drawing",
      description: "A compass drawing tool is a drafting instrument specifically used for drawing precise circles or arcs. It typically consists of two arms, one with a pointed tip for anchoring and the other fitted with a pencil for drawing. This tool is essential for various mathematical and artistic applications, providing accuracy and consistency in circular measurements. The versatility of a compass extends to geometry, architecture, and various crafts.",
      image: "./images/sciequipimg/Compass Drawing.png",
      howtouse: "To use a compass for drawing: <br> - Adjust the radius by setting the distance between the pencil and the point. <br> - Anchor the pointed end at the center of your desired circle and rotate the pencil end around to create a perfect arc. <br> - Make sure to hold the anchor point steadily to maintain the radius.",
      cautions: "No specific cautions apply; however, handle it with care to prevent damage. <br> - Ensure that the pencil is sharp to achieve precise lines.",
      history: "Comprehensively utilized since ancient times, advancements in compass designs occurred during the Renaissance, specifically for geometric and drafting purposes, aiding in the development of accurate maps and architectural plans.",
      category: "Drafting"
    },
    {
      title: "Graphing Calculator",
      description: "A graphing calculator is a sophisticated handheld device used to plot graphs, solve equations, and perform intricate mathematical operations. Equipped with capabilities for calculus, algebra, and statistics, it is essential for students and professionals in mathematics, engineering, and scientific disciplines. Unlike basic calculators, graphing calculators support multi-variable functions and create visual representations of data.",
      image: "./images/sciequipimg/Graphing Calculator.png",
      howtouse: "To use a graphing calculator: <br> - Input the desired equations or functions using the keypad. <br> - Select the graphing function to visualize the data and utilize other analytical features, such as finding roots or intersections.",
      cautions: "No specific cautions apply; however, ensure proper usage according to the device's manual. <br> - Be mindful of battery life as complex operations may drain batteries quickly.",
      history: "Graphing calculators were introduced in the late 20th century and have significantly enriched advanced mathematics education by enabling complex problem-solving, thus bridging the gap between theoretical concepts and practical applications.",
      category: "Calculators"
    },
    {
      title: "Magnifying Glass",
      description: "A magnifying glass is a small optical device featuring a convex lens mounted in a frame, commonly equipped with a handle. It is used to magnify objects, allowing for detailed observation and aiding in examining smaller items such as text, insects, or intricate mechanisms. This tool is widely employed in various fields, including education, biology, and craftsmanship, making it an indispensable aid for those requiring heightened visual clarity.",
      image: "./images/sciequipimg/Magnifying Glass.png",
      howtouse: "To utilize a magnifying glass effectively: <br> - Hold the lens over the object you wish to examine, adjusting the distance until the image appears clear and focused. <br> - Ensure adequate lighting to enhance visibility during inspection.",
      cautions: "Avoid focusing sunlight through the lens, as this can create intense heat and potentially start a fire. <br> - Take care not to press the lens against the object to avoid scratches.",
      history: "The magnifying glass, often attributed to Roger Bacon in the 13th century, has served educational and scientific purposes for centuries, significantly aiding in the field of optics.",
      category: "Optical"
    },
    {
      title: "Measuring Cups",
      description: "Measuring cups are calibrated containers specifically designed for accurately measuring liquid or powdered substances. They come in various sizes and often feature measurement markings. Measuring cups are essential tools in both culinary and scientific domains, enabling precise ingredient quantities for recipes or experiments. Various types may include graduated or non-graduated versions designed for specific applications.",
      image: "./images/sciequipimg/Measuring Cups.png",
      howtouse: "To use measuring cups: <br> - Fill the cup to the desired measurement mark, ensuring that the liquid or powder is level with the top of the marking. <br> - For dry ingredients, ensure to level off the top for accuracy.",
      cautions: "No specific cautions apply; however, maintain cleanliness to prevent cross-contamination. <br> - Avoid using utensils that can scratch or damage the measuring cup, especially if made of glass.",
      history: "The standardization of measuring cups began in the 19th century and has become integral in cooking and scientific practices, improving the accuracy of ingredient measurements.",
      category: "Measurement"
    },
    {
      title: "Premium Spring Balances",
      description: "Premium spring balances are devices designed to measure the force exerted on an object, expressed in terms of weight. Utilizing a spring mechanism that responds to tension or compression, these balances provide a straightforward method for weighing various items. Commonly found in educational settings, these instruments help illustrate principles of mass and force in physics and chemistry.",
      image: "./images/sciequipimg/Premium Spring Balances.png",
      howtouse: "To use a premium spring balance: <br> - Attach the object to the hook at the bottom, and simply read the scale to determine the weight. <br> - Ensure the balance is on a stable surface to obtain accurate readings.",
      cautions: "Be cautious not to exceed the weight limit specified by the device, as this may cause damage. <br> - Regularly check for any signs of wear on the spring to ensure accurate readings.",
      history: "Developed in the 17th century by Robert Hooke, spring balances have played a pivotal role in the study of physics and mass measurement, contributing to the foundational understanding of gravity and force.",
      category: "Measurement"
    },
    {
      title: "Protractors",
      description: "A protractor is a semicircular tool specifically designed for measuring and drawing angles. Often equipped with both degree markings and a baseline for alignment, protractors are vital tools in geometry and drafting tasks. They facilitate calculations and design work in various fields, including engineering, architecture, and education. Some protractors are also transparent, allowing for versatile applications during drafting.",
      image: "./images/sciequipimg/Protractor.png",
      howtouse: "To effectively use a protractor: <br> - Align the base with one side of the angle you wish to measure. <br> - Read the scale to determine the angle or use it to draw the other side accurately. <br> - Ensure that the protractor lies flat to avoid measurement errors.",
      cautions: "No specific cautions apply; however, ensure clear visibility for accurate readings. <br> - Always verify that the protractor is clean and free from obstructions on the measuring edge.",
      history: "Protractors have been widely utilized in geometric studies since ancient Greece, illustrating the importance of angle measurements in both academic and practical applications.",
      category: "Drafting"
    },
    {
      title: "Scientific Calculator",
      description: "A scientific calculator is designed to perform both basic and advanced mathematical functions, including trigonometry, logarithms, and statistical analysis. These calculators are essential tools in academics, engineering, and scientific research, offering functionality required for complex problem-solving. They include features such as programmable functions and graphing capabilities, facilitating learning and comprehension in mathematics.",
      image: "./images/sciequipimg/Scientific Calculator.png",
      howtouse: "To use a scientific calculator: <br> - Input equations and numbers using the keypad, <br> - Utilize the function keys to access advanced calculations as needed. <br> - Review the manual for specific key functions to maximize usage.",
      cautions: "No specific cautions apply; however, refer to the user manual for optimal use. <br> - Ensure that the calculator has fresh batteries to maintain performance.",
      history: "Scientific calculators emerged in the mid-20th century, becoming a critical asset in mathematical education and professional fields, enabling complex calculations on the go.",
      category: "Calculators"
    }, 
    {
      title: "Tape Measure",
      description: "A tape measure is a flexible measuring tool used to obtain linear measurements of lengths and distances. The tape usually consists of a long strip of metal or cloth that features printed measurements. It is an essential tool in construction, tailoring, and various design applications, providing versatility for both professionals and DIY enthusiasts. Many tape measures also include locking mechanisms for ease of use.",
      image: "./images/sciequipimg/Tape Measure.png",
      howtouse: "To use a tape measure: <br> - Extend the tape and place it along the object you wish to measure. <br> - Read the measurement indicated on the tape for accuracy. <br> - Lock the tape in position for added stability while marking.",
      cautions: "Retract the tape slowly to avoid injuries from recoil. <br> - Ensure the tape does not twist, as this can lead to inaccuracy in measurements.",
      history: "Invented by Alvin J. Fellows in 1868, the tape measure has since transformed both construction and design practices, adapting to various fields such as woodworking and tailoring.",
      category: "Measurement"
    },
    {
      title: "Triple Beam Balance",
      description: "A triple beam balance is a mechanical scale designed to measure the mass of objects accurately. It features three sliding weights along a beam that can be adjusted to achieve equilibrium, providing a reliable method for weighing various materials. This type of balance is favored in educational settings for teaching mass measurement and comparative analysis, as it visually demonstrates the principles of physics and mechanics.",
      image: "./images/sciequipimg/Triple Beam Balance.png",
      howtouse: "To operate a triple beam balance: <br> - Place the object to be weighed on the pan. <br> - Adjust the sliders until the beam is balanced, indicating the mass on the scale. <br> - Ensure all weights are properly reset after use to maintain accuracy.",
      cautions: "Handle the balance carefully to maintain calibration and prevent misreading. <br> - Avoid placing excessively heavy objects that may cause strain on the beam.",
      history: "Triple beam balances were introduced in the 19th century, providing a fundamental tool for accurate mass measurements in laboratories and classrooms, forming the basis of many scientific experiments.",
      category: "Measurement"
    },
    {
      title: "Gloves",
      description: "Laboratory gloves are protective handwear designed to prevent contamination and to safeguard hands from hazardous substances. They come in various materials and sizes, such as latex, nitrile, and vinyl, suitable for different laboratory tasks. Wearing gloves is essential in laboratory environments to ensure personal safety and to maintain sample integrity during handling. Specialty gloves may also be used to protect against specific chemicals.",
      image: "./images/sciequipimg/Gloves.png",
      howtouse: "When using gloves: <br> - Wear gloves before handling any substances, ensuring a snug fit for maximum protection. <br> - Dispose of single-use gloves after your tasks are complete, following proper waste disposal guidelines. <br> - Always wash hands thoroughly before and after using gloves.",
      cautions: "Avoid reusing disposable gloves and always check for tears or damage before use to ensure effectiveness. <br> - Be aware of the limitations of the glove material, as some chemicals can penetrate certain types.",
      history: "Latex gloves were first introduced by William Stewart Halsted in 1894 for surgical procedures and have since become standard in laboratories for their effectiveness in providing safety against chemicals and contaminants.",
      category: "Safety Gear"
    },
    {
      title: "Goggles",
      description: "Laboratory goggles are specialized safety eyewear intended to shield the eyes from chemical splashes, debris, or harmful light. Their design ensures a snug fit while providing full coverage to protect the eyes effectively. Goggles are critical for maintaining safety in laboratory environments, particularly in chemistry or biology labs where eye protection is paramount. Some models may also include anti-fogging features for enhanced visibility.",
      image: "./images/sciequipimg/Goggles.png",
      howtouse: "To use goggles properly: <br> - Place your goggles securely over your eyes and adjust the strap for a comfortable and secure fit. <br> - Check for any damages before each use to ensure they provide adequate protection.",
      cautions: "Always clean goggles regularly after use to prevent fogging or contamination. <br> - Avoid using scratched or damaged goggles, as they can impair vision and protection.",
      history: "The first protective goggles were developed during the late 19th century, catering to the requirements of industrial and laboratory safety. They've since become a standard safety item in educational and research facilities.",
      category: "Safety Gear"
    },
    {
      title: "Microscope",
      description: "A microscope is an optical instrument designed for magnifying and studying samples that are too small for the naked eye. By using a combination of lenses, it allows users to observe fine details of specimens, making it an essential tool in biology, material science, and medicine. Microscopes have evolved over time, leading to advanced versions like electron and digital microscopes, which allow for even greater magnification and detailed imaging.",
      image: "./images/sciequipimg/microscope.png",
      howtouse: "To use a microscope: <br> - Place the specimen on a slide and adjust it in the specimen holder. <br> - Adjust the focus knobs carefully and observe through the eyepiece for a clear view. <br> - Use appropriate lenses for different magnification levels, ensuring proper light adjustment.",
      cautions: "Handle the microscope with care to avoid damaging the lenses or delicate parts. <br> - Always clean the lenses before and after use to maintain optical clarity.",
      history: "The invention of the microscope is attributed to Zacharias Janssen in the late 16th century, paving the way for modern cellular biology and many significant discoveries in science and medicine.",
      category: "Optical"
    },
    {
      title: "Microscope Slides",
      description: "Microscope slides are thin glass or plastic plates specifically designed to hold specimens for observation under a microscope. They facilitate the study of small biological samples or prepared slides in research and educational settings, allowing for detailed examination of microscopic features. Slides may come in various sizes and can be pre-treated depending on the sample type.",
      image: "./images/sciequipimg/Microscope Slides.png",
      howtouse: "To prepare a specimen with microscope slides: <br> - Place the specimen on the slide, add a cover slip if necessary, and position it under the microscope for viewing. <br> - For biological samples, ensure that the coverslip is thin enough to avoid crushing cells.",
      cautions: "Always handle slides carefully to avoid breakage, as they are fragile. <br> - Ensure that slides are cleaned properly after use to prevent contamination in subsequent observations.",
      history: "Microscope slides were developed concurrently with early microscopes in the 17th century to support advancements in microscopy, revolutionizing the study of samples at a cellular level.",
      category: "Glassware"
    },
    {
      title: "Mikro-Hämatokit Kapillaren",
      description: "Mikro-Hämatokit capillaries are specialized capillary tubes designed for the collection of blood samples intended for centrifugation and hematocrit level measurement. These tubes ensure accurate and efficient sample collection, particularly in clinical and laboratory environments for blood testing and analysis. Many kits come with pre-calibrated marks for easy measurement of sample volume.",
      image: "./images/sciequipimg/Mikro - Hamatokit Kapillaren.png",
      howtouse: "To use these capillary tubes: <br> - Collect the blood sample directly into the capillary tube and proceed to use it with a centrifuge as directed for testing. <br> - Follow safety protocols when handling biological materials.",
      cautions: "Always handle biological samples with care and ensure proper disposal of used tubes to maintain safety standards. <br> - Avoid overfilling the capillaries to prevent spillage during processing.",
      history: "These tubes were developed in the 20th century, significantly enhancing the accuracy and efficiency of hematological studies, allowing for quicker diagnoses and better patient outcomes.",
      category: "Laboratory Equipment"
    },
    {
      title: "Specimen Container",
      description: "A specimen container is a secure vessel utilized for collecting, storing, and transporting biological or chemical samples. These containers are specially designed to prevent contamination and ensure samples' integrity until analysis, making them essential in clinical and research environments. Containers are available in various sizes and materials to suit different types of samples.",
      image: "./images/sciequipimg/Specimen Container.png",
      howtouse: "To use a specimen container: <br> - Place the specimen inside the container, seal it tightly to prevent leaks, and label it appropriately for identification and tracking. <br> - Ensure the container is sterile before use to avoid contamination.",
      cautions: "Always ensure that the container is sterile and leak-proof before use. <br> - Follow guidelines for proper disposal of hazardous materials as per institutional protocols.",
      history: "Specimen containers were introduced in the 20th century as part of laboratory safety standards, emphasizing the importance of proper sample handling and storage to maintain sample integrity.",
      category: "Laboratory Equipment"
    },
    {
      title: "Stopwatch",
      description: "A stopwatch is a handheld timepiece specifically designed for measuring elapsed time with precision. Featuring start, stop, and reset functions, stopwatches are invaluable tools in various settings, including sports performance, laboratory experiments, and educational activities, where accurate time measurements are crucial. Many modern stopwatches also have advanced features like split timing, lap recording, and memory storage.",
      image: "./images/sciequipimg/Stopwatch.png",
      howtouse: "To operate a stopwatch: <br> - Press the start button to begin timing; use the stop button to halt and reset to clear the previous measurement for the next time trial. <br> - Utilize split features to capture intermediate times during events.",
      cautions: "No specific cautions apply; ensure to keep it safe from impacts to maintain its functionality and accuracy.",
      history: "The stopwatch was patented by Samuel Watson in 1698 for timing horse races, showcasing early applications of precise timekeeping. Over time, it has evolved into various designs for sports, science, and other applications.",
      category: "Time Keeping"
    },
    {
      title: "Chloroplast Model",
      description: "The chloroplast model is a labeled representation that illustrates the structure and function of chloroplasts within plant cells. It is designed to demonstrate the chloroplast's role in photosynthesis and energy production, providing learners with a clear understanding of how plants convert sunlight into chemical energy. The model typically emphasizes parts such as the thylakoids and stroma.",
      image: "./images/sciequipimg/Chloroplast Model.png",
      howtouse: "To use the chloroplast model: <br> - Examine the labeled parts to understand their functions in photosynthesis and energy production in plant cells. <br> - Utilize it to engage in discussions about plant biology and the significance of chloroplasts.",
      cautions: "To preserve the integrity of the model, store it in a safe location, avoiding exposure to extreme temperatures or moisture, which may degrade the materials. <br> - Avoid direct sunlight to prevent fading labels.",
      history: "The understanding of chloroplasts and their functions in photosynthesis has evolved since the 19th century, with models like these providing practical educational tools to illustrate these complex processes.",
      category: "Models"
    },
    {
      title: "Animal Meiosis Model",
      description: "The animal meiosis model serves as a visual representation designed to demonstrate the stages of meiosis in animals. It aids both students and researchers in understanding the complex cell division process, showcasing key phases and mechanisms involved in genetic variation. This model visually illustrates stages such as prophase, metaphase, anaphase, and telophase.",
      image: "./images/sciequipimg/Animal Meiosis Model.png",
      howtouse: "To study the model: <br> - Observe the structure and the sequence of meiotic stages depicted in the model. <br> - Use it as a visual aid to reinforce learning about genetic diversity and reproduction.",
      cautions: "Handle the model with care to avoid breaking or damaging its small and delicate parts. <br> - Ensure it is placed on a stable surface when used.",
      history: "Developed in the 20th century as a teaching aid, this model aims to improve biology education and understanding of genetic mechanisms, particularly in educational and research contexts.",
      category: "Models"
    },
    {
      title: "Celestial Globe",
      description: "A celestial globe is a three-dimensional spherical model representing stars, planets, and constellations visible in the night sky. It is utilized during astronomy studies to help learners identify celestial objects and understand their positions, thus making it an integral part of celestial navigation education. The globe often features constellations and planetary orbits marked, along with ecliptic lines for visual reference.",
      image: "./images/sciequipimg/Celestial Globe.png",
      howtouse: "To utilize a celestial globe: <br> - Rotate the globe to locate and identify various celestial objects and constellations. <br> - Use it in conjunction with a star chart for enhanced learning during evening observations.",
      cautions: "Prevent prolonged exposure to direct sunlight to avoid fading of the globe's printed details. <br> - Avoid dropping or rough handling to maintain its structural integrity.",
      history: "Originating from ancient Greek astronomy as early as 150 BCE, celestial globes have served humanity’s curiosity about the cosmos throughout history, evolving into educational tools for understanding our place in the universe.",
      category: "Models"
    },
    {
      title: "Globe",
      description: "A globe is a three-dimensional model of Earth that illustrates continents, oceans, and various geographic features. Its spherical design offers an accurate representation of Earth's geographical layout, and it serves as a crucial educational resource for understanding global geography, culture, and navigation. Globes can vary in scale and detail, and some are designed for specific educational purposes, such as political boundaries or climate.",
      image: "./images/sciequipimg/Globe.png",
      howtouse: "To use a globe: <br> - Rotate it gently to locate specific countries, regions, and geographic features of interest. <br> - Utilize it as a reference for geography lessons or to plan travel routes.",
      cautions: "No specific cautions apply; however, handle it with care to maintain its integrity. <br> - Avoid placing it in direct sunlight for extended periods to prevent colors from fading.",
      history: "The first modern globe was created by Martin Behaim in 1492, marking significant advancements in cartography and navigation. Since then, globes have become vital tools in education and exploration.",
      category: "Geography Models"
    },
    {
      title: "Sun Moon Earth Orbit Model Kit",
      description: "The Sun, Moon, Earth orbit model kit is a dynamic model that illustrates the relative motions of the Sun, Moon, and Earth within their orbits. This educational tool allows students to visualize concepts such as eclipses and the phases of the Moon, making it an indispensable resource in astronomy education. The kit often includes movable parts to demonstrate the movements accurately.",
      image: "./images/sciequipimg/Sun Moon Earth Orbit Model Kit.png",
      howtouse: "To utilize the orbit model: <br> - Adjust the components to simulate the orbits and demonstrate various celestial events such as eclipses. <br> - Use this kit to facilitate discussions in astronomy classes about celestial mechanics.",
      cautions: "Handle moving parts with care to avoid breakage or misalignment. <br> - Ensure all components are correctly attached before demonstrating to avoid accidents.",
      history: "Developed as an educational tool during the 20th century, this model enhances understanding of orbital dynamics, fostering a foundational comprehension of astronomy in students.",
      category: "Models"
    },
    {
      title: "Volcanic Model",
      description: "The volcanic model is a miniature representation designed to simulate volcanic eruptions for educational purposes. It offers a visual and interactive way to understand volcanic activity, helping learners grasp fundamental geological concepts such as lava flow, eruption dynamics, tectonic activity, and plate interactions. Typically, the model includes components for simulating ash clouds and lava flows during demonstrations.",
      image: "./images/sciequipimg/Volcanic Model.png",
      howtouse: "To simulate a volcanic eruption using the model: <br> - Add the specified chemical components as instructed to initiate the eruption demonstration. <br> - Use this model in educational settings to engage students in discussions about geology and earth's processes.",
      cautions: "Ensure the chemicals used are safe, and strictly follow the provided instructions for operation. <br> - Conduct demonstrations in a well-ventilated area to avoid inhalation of any fumes.",
      history: "The use of volcanic models became popular in schools as a teaching aid during the 19th century, enhancing geology education. Such models have continuously evolved to include more interactive and visually representative features.",
      category: "Models"
    },
    {
      title: "Human Ear Model",
      description: "The human ear model is a detailed 3D anatomical representation of the ear, displaying its external, middle, and inner structures. This model highlights essential parts such as the ear canal, eardrum, ossicles, cochlea, and auditory nerve, which all play crucial roles in hearing and balance. It is an excellent educational tool for visualizing how sound waves travel through the ear and are transformed into signals interpreted by the brain. The model is often used in auditory studies and health classes.",
      image: "./images/sciequipimg/Human Ear.png",
      howtouse: "To learn about the structures of the ear using the model: <br> - Study the labeled parts carefully to gain insight into their functions within the auditory system. <br> - Use this model to discuss auditory processing and common hearing disorders.",
      cautions: "Handle the model with care to prevent damage to delicate components, and store it securely when not in use. <br> - Keep it away from children to prevent accidental damage.",
      history: "Models of the human ear have been utilized in medical education since the 17th century, emphasizing their role in anatomy learning and acoustics.",
      category: "Models"
    },
    {
      title: "Anatomical Fish Model",
      description: "The anatomical fish model is a detailed 3D representation highlighting the internal structures of a fish, including its digestive system, respiratory system, and circulatory system. This model offers an in-depth view of essential organs such as gills, heart, liver, intestines, and swim bladder, which play crucial roles in a fish's survival and function within aquatic ecosystems. This model is particularly useful in biology classrooms for understanding vertebrate anatomy and function.",
      image: "./images/sciequipimg/Eisco Labs Fish Dissection Model.png",
      howtouse: "To explore its anatomy: <br> - Use the fish model to identify organs like the gills, fins, and heart while studying fish biology. <br> - Integrate this model in discussions about aquatic life adaptations.",
      cautions: "Handle the anatomical model with care to avoid damaging the intricate details or structures. <br> - Ensure it is not exposed to excessive heat or moisture during storage.",
      history: "The anatomical fish model has been valuable in biological education, allowing students to study organisms in a context that minimizes ethical concerns associated with live dissections.",
      category: "Models"
    },
    {
      title: "Male Reproductive System",
      description: "The male reproductive system model is a detailed anatomical replica that aims to educate users about the structure and function of male reproductive organs. It includes essential components such as the testes, epididymis, vas deferens, seminal vesicles, prostate gland, urethra, and penis. Constructed from durable materials, this model offers a tactile learning experience in classrooms, medical training, and healthcare education, making it essential for understanding human reproductive health.",
      image: "./images/sciequipimg/Male Reproductive System Model.png",
      howtouse: "To understand male reproductive anatomy: <br> - Study the model to explore the organ structures like the testes, prostate, and penis. <br> - Discuss the physiological and anatomical functions throughout educational sessions.",
      cautions: "This model is intended strictly for educational purposes and should not be used in medical procedures outside of a controlled learning environment. <br> - Ensure the model is stored appropriately to maintain its condition.",
      history: "Models of reproductive systems have been essential in education, particularly in medical and biology studies, providing insightful knowledge about human anatomy and reproductive health.",
      category: "Models"
    },
    {
      title: "Human Endocrine Model",
      description: "The human endocrine system model is an educational tool that illustrates the structure and function of the body's hormone-producing glands. It typically includes representations of major glands such as the pituitary, thyroid, adrenal glands, pancreas, and reproductive organs. This model helps students and healthcare trainees visualize the anatomical locations and interconnections of the endocrine glands, thereby enhancing their understanding of hormone regulation and physiological processes. Additionally, it can illustrate how various hormones affect metabolism, growth, and mood.",
      image: "./images/sciequipimg/Human Endocrine System Model.png",
      howtouse: "Using the model: <br> - Identify the glands and hormones involved in the human endocrine system while studying their functions. <br> - Integrate discussions about endocrine disorders and their physiological effects.",
      cautions: "When using the model, ensure it is clean and free from dust for clarity and hygiene during demonstrations. <br> - Handle with care to maintain its structural integrity.",
      history: "As knowledge of the endocrine system expanded through the 20th century, educational models became crucial for teaching anatomy and physiology, helping students connect theoretical concepts with real-world biology.",
      category: "Models"
    },
    {
      title: "Mitochondria Model",
      description: "The mitochondria model is a 3D representation of a mitochondrion, an essential organelle found in eukaryotic cells responsible for producing energy in the form of ATP through cellular respiration. The model highlights key structures such as the outer membrane, inner membrane, cristae, and matrix, showcasing their roles in energy conversion and metabolic processes. This model serves as an excellent tool for teaching students about cellular energy production and the importance of mitochondria in various biological functions.",
      image: "",
      howtouse: "To understand its structure and function: <br> - Examine the labeled parts of the mitochondrion model closely, discussing how they contribute to ATP production. <br> - Use the model in conjunction with lessons on cellular respiration and metabolism.",
      cautions: "Handle the model carefully to avoid damage to intricate structures, and store it in a cool, dry location away from direct sunlight. <br> - Prevent exposure to excessive heat, which may warp the model.",
      history: "The study of mitochondria has been fundamental to the fields of biochemistry and cell biology since the mid-20th century. Models like these have aided in enhancing educational understanding of cellular processes.",
      category: "Models"
    },
    {
      title: "Graduated Cylinder",
      description: "A graduated cylinder is a cylindrical container marked with precise measurements for accurately measuring liquid volumes. Its vertical design and clear markings make it an essential tool for laboratories in experiments where measurement accuracy is critical. Graduated cylinders can come in many different sizes, allowing for versatile applications ranging from small-scale experiments to larger volume measurements. They are often made from high-quality glass or plastic to provide durability.",
      image: "./images/sciequipimg/Graduated Cylinder.png",
      howtouse: "To use a graduated cylinder: <br> - Pour the liquid into the cylinder and carefully read the measurement at eye level to ensure accuracy. <br> - Avoid overfilling the cylinder and use a funnel if necessary to prevent spills.",
      cautions: "Avoid tipping over the graduated cylinder, as this can lead to spills and loss of valuable samples. <br> - Ensure that the cylinder is placed on a stable, flat surface during measurements.",
      history: "Graduated cylinders became standard in laboratories during the 19th century, reinforcing the importance of precise volumetric measurements in science and facilitating better experimental outcomes.",
      category: "Glassware"
    },
    {
      title: "Plant Tissue Model",
      description: "The plant tissue model is a three-dimensional representation designed to depict different types of plant tissues, such as epidermis, parenchyma, collenchyma, and xylem/phloem. This model serves as an educational tool to illustrate the structure and function of plant tissues, aiding students in understanding how these tissues contribute to the overall health and efficiency of plants. It helps visualize the differences in function and structure among various types of tissues.",
      image: "",
      howtouse: "To study the plant tissue model: <br> - Examine the labeled parts to understand their specific structures and functions within plant biology. <br> - Use it to facilitate discussions about plant growth, photosynthesis, and overall cellular organization.",
      cautions: "Handle the model carefully to prevent damage to its delicate structures, and store it appropriately to maintain its condition. <br> - Avoid exposing it to moisture to prevent degradation.",
      history: "The study of plant tissues has enhanced our understanding of botany and plant biology since ancient times, with such models being developed as teaching aids in educational settings.",
      category: "Models"
    },
    {
      title: "Inorganic/Organic Molecular Model",
      description: "The inorganic/organic molecular model is an educational set of models used to represent the molecular structures of inorganic and organic compounds. These models illustrate the arrangement of atoms and bonds in molecules, facilitating a better understanding of molecular geometry and interactions in chemistry. They help visualize concepts that are crucial for learning about chemical bonding, molecular shape, and chemical reactions.",
      image: "",
      howtouse: "To utilize the molecular model: <br> - Examine the structures and connections of atoms as represented in the model to better understand molecular formation. <br> - Use the model to demonstrate concepts such as isomerism, molecular polarity, and stereochemistry.",
      cautions: "Handle the models with care to prevent damage to their intricate structures, and store them in a cool, dry place away from direct sunlight. <br> - Regularly check for any loose connections or parts.",
      history: "The 3D representation of molecular structures emerged with the rise of modern chemistry, providing students with visual tools to grasp abstract concepts and facilitating deeper engagement in chemical education.",
      category: "Models"
    },
    {
      title: "Plant Cell Model",
      description: "The plant cell model is a detailed, three-dimensional representation showcasing various organelles such as the cell wall, chloroplasts, vacuole, nucleus, and mitochondria. This model assists in the study of plant cell functions, highlighting the unique features that differentiate plant cells from animal cells and emphasizing their roles in photosynthesis and nutrient storage. The model often includes components that illustrate cellular processes such as osmosis and diffusion.",
      image: "",
      howtouse: "To study the plant cell model: <br> - Examine the labeled parts to understand the specific structures and functions of the organelles within the plant cell. <br> - Use this model in educational discussions about photosynthesis and cellular respiration.",
      cautions: "Handle the model carefully to avoid damage to intricate structures, and store it properly to maintain its condition. <br> - Prevent exposure to excessive heat or moisture, as this may warp or degrade parts of the model.",
      history: "No specific history is provided for the plant cell model; however, models of cellular structures have enhanced botanical education and research since the development of the microscope.",
      category: "Models"
    },
    {
      title: "Reproductive System Model",
      description: "The reproductive system model visually represents both male and female reproductive organs, including structures such as the uterus, ovaries, testes, and sperm ducts. This detailed model serves as an educational resource to explain reproductive processes, sexual health, and anatomy, providing insight into how these systems function in human biology. It is frequently used in classrooms to promote discussions about human development and reproductive health.",
      image: "",
      howtouse: "To learn about the reproductive system: <br> - Examine the labeled parts of the model to understand the anatomy and functions of the reproductive organs. <br> - Use it in discussions about reproductive health, development, and sexual education.",
      cautions: "Handle the model carefully to avoid damage to its intricate structures, and store it securely when not in use. <br> - Ensure the model does not get exposed to harmful substances that may degrade its materials.",
      history: "Models of reproductive systems have been essential in education, particularly in medical and biology studies, providing insightful knowledge about human anatomy and reproductive health education.",
      category: "Models"
    },
    {
      title: "Respiratory System Model",
      description: "The respiratory system model serves as a depiction of the human respiratory system, featuring components such as the trachea, lungs, bronchi, and diaphragm. This educational tool aids in demonstrating the processes of breathing and gas exchange, making it a valuable resource in understanding respiratory anatomy and physiology. Often, such models may include removable parts for an immersive learning experience.",
      image: "",
      howtouse: "To utilize the respiratory system model: <br> - Examine the labeled parts to study the anatomy and functions of the respiratory components. <br> - Use this model to facilitate discussions on pulmonary health and the mechanics of breathing.",
      cautions: "Handle the model carefully to avoid damaging its intricate structures, and store it properly to ensure longevity. <br> - Regularly clean the model to prevent dust accumulation.",
      history: "The respiratory system has been studied extensively in the fields of medicine and biology, and models have evolved to better assist educational endeavors, enhancing comprehension of human physiological processes.",
      category: "Models"
    },
    {
      title: "Skeletal System Model",
      description: "The skeletal system model represents a human skeleton in either a life-size or miniature form. It illustrates the bones, joints, and their connections, making it a useful tool for studying human anatomy, movement, and the skeletal system's role in overall bodily functions. This model aids both students and healthcare professionals in their understanding of bone structures and health. Some skeletal models may also include muscular overlays for a comprehensive look at human anatomy.",
      image: "",
      howtouse: "To engage with the skeletal system model: <br> - Examine the labeled parts to understand the various bones and joints of the human body. <br> - Utilize this model to discuss how bones support, protect, and work with muscles to facilitate movement.",
      cautions: "Handle the model carefully to prevent damage to delicate components, and store it in a secure location when not in use. <br> - Keep it away from extreme temperatures, as they may affect joint mobility.",
      history: "Skeletal models have been instrumental in anatomy education for centuries, providing students with a clear visual reference for understanding human structure and function. Their educational use dates back to the earlier days of medical studies in the Renaissance period.",
      category: "Models"
    },
    {
      title: "Frog Dissection Model",
      description: "The frog dissection model represents the internal anatomy of a frog, highlighting systems such as the digestive, circulatory, and nervous systems. This educational resource allows for biological studies without the need for actual dissection, facilitating an in-depth understanding of amphibian biology and anatomy. It is particularly useful in high school biology and introductory courses, promoting ethical learning practices.",
      image: "",
      howtouse: "To study the frog model: <br> - Carefully examine the labeled parts to learn about the organ systems and their functions within the frog's biology. <br> - Use it as a tool for discussions about vertebrate evolution and ecological roles.",
      cautions: "Handle the model with care to avoid damage to intricate components, and store it properly to maintain quality. <br> - Ensure that it is cleaned after each use to prevent contamination.",
      history: "No specific history is provided for the frog dissection model, but its use has enhanced biology education by allowing for ethical and informative study of anatomical functions.",
      category: "Models"
    },
    {
      title: "Digestive System Model",
      description: "The digestive system model provides an overview of the human digestive system, including organs such as the mouth, esophagus, stomach, intestines, liver, and pancreas. This model demonstrates the processes of digestion and nutrient absorption, serving as an important educational tool for biology and health studies. It can illustrate both the mechanical and chemical processes of digestion.",
      image: "",
      howtouse: "To utilize the digestive system model: <br> - Examine the labeled parts to understand the functions of various organs in the digestive process. <br> - Integrate discussions on dietary health and nutrition while using the model.",
      cautions: "Handle the model carefully to avoid damage to intricate structures, and ensure it is stored properly for longevity. <br> - Regular cleaning is recommended to prevent dirt accumulation.",
      history: "No specific history is provided for the digestive system model; however, its development coincides with the advancements in nutritional science and gastroenterology education since the 19th century.",
      category: "Models"
    },
    {
      title: "Human Embryo Model",
      description: "The human embryo model illustrates the various stages of human embryonic development, making it an essential resource in biology and medical studies. This model helps learners understand fetal growth and development during early stages of life, highlighting critical processes involved in human reproduction. Many models include detailed representations of structures that develop during each stage, such as the neural tube and limb buds.",
      image: "",
      howtouse: "To study the embryo model: <br> - Examine the labeled parts to learn about the different stages and developmental processes involved in forming a human embryo. <br> - Use it as a reference for discussing prenatal development and associated health practices.",
      cautions: "Handle the model carefully to prevent damage, and store it in a secure place to maintain its quality. <br> - Keep it away from areas where it could be exposed to excessive movement or impacts.",
      history: "The understanding of human embryonic development has improved significantly over the last century, and models like these have become crucial in teaching not just anatomy but also the implications of human health and disease.",
      category: "Models"
    },
    {
      title: "Human Anatomy Model",
      description: "The human anatomy model is a detailed representation of the human body, often featuring removable organs, displaying systems such as muscular, circulatory, nervous, and skeletal for anatomical studies. This comprehensive model aids in educating students by enabling hands-on exploration of body systems and functions, making it invaluable in medical training and biology education. Some models may also represent pathological conditions to help illustrate various health issues.",
      image: "",
      howtouse: "To engage with the anatomy model: <br> - Examine the labeled parts and removable components to understand the structures and interactions of various bodily systems. <br> - Use the model in discussions regarding anatomy and any associated medical conditions.",
      cautions: "Handle the model carefully to avoid damaging intricate structures, and store it securely to preserve its condition. <br> - Regular maintenance may be needed to ensure it is clean for educational purposes.",
      history: "No specific history is provided for the human anatomy model; however, models like these have been an integral part of medical education and anatomical studies, evolving through advances in both artistic and scientific representation.",
      category: "Models"
    },
    {
      title: "Human Nervous System Model",
      description: "The human nervous system model visually represents the intricate network of the nervous system, illustrating the brain, spinal cord, and peripheral nerves. It emphasizes the body's complex communication and control mechanisms, demonstrating how signals are transmitted throughout the body, thereby controlling various functions such as movement and sensation. This model is crucial for studying neuroanatomy in both medical and educational settings.",
      image: "",
      howtouse: "To study the model effectively: <br> - Examine the brain, spinal cord, and peripheral nerves to understand the structures and functions of the nervous system. <br> - Integrate this model in neuroscience discussions, linking it to various conditions affecting the nervous system.",
      cautions: "Handle the model with care to prevent damaging delicate components such as the nerve structures. <br> - Ensure it is cleaned and stored correctly to maintain its quality.",
      history: "No specific history is provided for the human nervous system model; however, its significance in educational settings continues to grow with advancements in neurobiology and health education.",
      category: "Models"
    },
    {
      title: "Meter Stick",
      description: "A meter stick is a straight measuring tool, typically 1 meter (100 cm) in length, made of wood, plastic, or metal. It is marked with metric (centimeters and millimeters) and sometimes imperial (inches) units for measuring lengths and distances. Meter sticks are essential in educational settings and various trades for precise measurements. They are often lightweight and portable, making them useful in both classroom and field settings.",
      image: "",
      howtouse: "To use the meter stick effectively: <br> - Place the meter stick on a flat surface or hold it against the object to be measured. <br> - Align one end with the starting point and read the measurement at the other end. <br> - Use it carefully to avoid bending or breaking, ensuring accurate readings.",
      cautions: "Avoid dropping or bending the meter stick, as this can lead to inaccurate measurements. <br> Keep it away from extreme heat or moisture, which may warp wooden or plastic meter sticks. <br> - Ensure that the markings are legible before use.",
      history: "The meter stick is based on the metric system, introduced in France in 1799 during the French Revolution. The metric system was designed to create a standardized measurement system, replacing local and inconsistent units, aiding in trade and scientific communication.",
      category: "Measurement"
    },
    {
      title: "Alcohol Thermometer",
      description: "An alcohol thermometer is a temperature-measuring device that contains dyed alcohol instead of mercury. It is commonly used in laboratories and environmental measurements due to its non-toxic nature. Alcohol thermometers can measure a variety of temperature ranges depending on the color and composition of the alcohol used. They provide clear readability, making them ideal for educational demonstrations.",
      image: "",
      howtouse: "To operate the alcohol thermometer: <br> - Place the thermometer in the desired environment (liquid, air, or surface). <br> - Allow the alcohol to stabilize before reading the temperature from the scale. <br> - Avoid touching the bulb while taking measurements to prevent inaccurate readings.",
      cautions: "Do not expose it to temperatures beyond its range, as the alcohol may evaporate or break the glass. <br> Handle it carefully to avoid breakage, as the liquid can stain surfaces. <br> - Ensure that the measuring scale is visible and suitable for your measurement needs.",
      history: "The alcohol thermometer was developed in the 18th century as a safer alternative to mercury thermometers, contributing significantly to temperature measurement technology. Notable scientists like Daniel Gabriel Fahrenheit and Anders Celsius contributed to temperature scale development, leading to its widespread use.",
      category: "Measurement"
    },
    {
      title: "Electrical Conductivity Apparatus",
      description: "This electrical conductivity apparatus is designed to measure a substance's ability to conduct electricity. Usually comprising electrodes, a power source, and a display meter, it is used in laboratories to determine whether a material acts as a conductor or an insulator. Understanding conductivity is vital in various fields, including chemistry, physics, and environmental science.",
      image: "",
      howtouse: "To use the apparatus: <br> - Connect the electrodes to the sample being tested (liquid or solid). <br> - Turn on the device and observe the readings displayed. <br> - Compare the readings to ascertain if the material is a conductor or insulator, noting any surprises for further investigation.",
      cautions: "Never touch live electrodes to avoid electric shock. <br> Ensure the apparatus is dry before use, especially in experiments involving liquids. <br> - Regularly check connections for wear or corrosion to maintain accurate readings.",
      history: "The study of electrical conductivity dates back to the 18th century when scientists like Benjamin Franklin and Alessandro Volta experimented with electricity. Conductivity meters became widely used in the 20th century for various industrial and scientific applications, streamlining testing processes.",
      category: "Measurement"
    },
    {
      title: "Evaporating Dish",
      description: "An evaporating dish is a shallow ceramic or glass dish used in laboratories to heat solutions, allowing the solvent to evaporate and leaving behind solid residues. Often designed with low profile and a wide surface area, these dishes are commonly used in chemical laboratories for separation tasks and concentration processes. They provide efficient sample handling and allow for careful observation of changes during evaporation.",
      image: "",
      howtouse: "To use an evaporating dish: <br> - Pour the liquid sample into the dish. <br> - Place it on a heat source (such as a Bunsen burner or hot plate). <br> - Heat gently until the liquid evaporates, leaving solid materials. <br> - Pay attention to the temperature to avoid excessive heating that can cause undesired reactions.",
      cautions: "When using the dish for heating, handle it with heat-resistant gloves to avoid burns. <br> Avoid sudden temperature changes to prevent cracking. <br> - Always monitor closely to prevent overheating of sensitive materials.",
      history: "Evaporating dishes have been used in chemistry since the 19th century. Early alchemists and scientists used similar tools to separate substances through evaporation, establishing fundamental chemistry principles.",
      category: "Laboratory Equipment"
    },
    {
      title: "Mortar and Pestle",
      description: "A mortar and pestle is a fundamental laboratory tool used for grinding and mixing substances. The mortar is a bowl, typically made of porcelain or stone, while the pestle is a club-shaped tool used to crush materials into fine powders or pastes. This time-honored tool aids in preparing samples in both biological and chemical laboratories, allowing for the accurate mixing of reagents and homogenizing samples.",
      image: "",
      howtouse: "To use a mortar and pestle: <br> - Place the substance inside the mortar. <br> - Use the pestle to grind the material in circular or pounding motions until the desired consistency is achieved. <br> - You may use a small amount of liquid if needed to create a paste or suspension.",
      cautions: "Ensure the mortar and pestle are clean before and after use to avoid cross-contamination. <br> Apply appropriate force to prevent breaking fragile mortars, especially those made of porcelain. <br> - Avoid using the mortar for substances that can react with the material.",
      history: "Mortars and pestles have been important tools since ancient times, dating back to approximately 35,000 BCE. They were utilized by early civilizations for grinding grains, creating medicines, and mixing pigments, establishing their utility across numerous cultures.",
      category: "Laboratory Equipment"
    },
    {
      title: "Thermometer",
      description: "A thermometer is a device utilized to measure temperature and may be digital or analog. It often contains mercury or alcohol, or uses electronic sensors to provide accurate temperature readings. Thermometers are critical tools in scientific, culinary, and medical applications for monitoring temperature variations. They can come in various forms, including infrared thermometers for non-contact measurements.",
      image: "",
      howtouse: "To use a thermometer: <br> - Insert the thermometer into the environment or object whose temperature needs to be measured. <br> - Wait for the reading to stabilize before recording it for accuracy. <br> - Regularly calibrate the instrument according to manufacturer recommendations to ensure accuracy.",
      cautions: "Handle mercury thermometers carefully to prevent toxic spills if broken. <br> Always store thermometers in a safe location away from direct sunlight or high-impact areas. <br> - Keep digital thermometers updated as per their calibration guidelines.",
      history: "The first thermometer was invented by Galileo Galilei in the late 16th century. Daniel Fahrenheit and Anders Celsius later developed more precise temperature scales, leading to modern thermometers' widespread adoption, greatly influencing temperature measurement in various fields.",
      category: "Measurement"
    },
    {
      title: "Test Tube Rack",
      description: "A test tube rack is specifically designed to hold multiple test tubes upright during laboratory experiments, facilitating easy handling and organization. It ensures stability during mixing, heating, and cooling processes, making it a vital accessory in educational and professional laboratory settings. Many racks are made from durable materials such as plastic or metal, allowing for easy cleaning and long-term use.",
      image: "",
      howtouse: "To use a test tube rack: <br> - Place the test tubes in the rack for support. <br> - Utilize the rack to hold test tubes while adding chemicals, mixing, or heating materials. <br> - Store cleaned test tubes in the rack to allow them to dry properly.",
      cautions: "Do not overload the rack to reduce the risk of tipping over and breaking test tubes. <br> Ensure all test tubes are securely placed to prevent spills or accidents. <br> - Check for integrity regularly to ensure that the rack remains stable and effective.",
      history: "Test tube racks gained popularity in the 19th century as laboratory glassware became more widely used, serving as a crucial tool in chemistry and biology labs, streamlining processes involving multiple sample handling.",
      category: "Laboratory Equipment"
    },
    {
      title: "Reagent Bottles",
      description: "Reagent bottles are glass or plastic containers designed to hold chemicals in either liquid or powder form. They are equipped with special caps or stoppers ensuring airtight sealing. Reagent bottles are essential in laboratories for the safe storage and handling of chemicals, facilitating proper management and organization for various experiments. Many bottles are also designed for specific types of reagents, ensuring compatibility and safety.",
      image: "",
      howtouse: "After using a reagent bottle: <br> - Securely close it, return it to its appropriate storage area, and maintain a clean workspace. <br> - Dispose of any waste according to your instructor's guidelines and wash your hands afterward. Additionally, report any spills or hazards to your instructor immediately.",
      cautions: "Never handle more than one reagent bottle at a time to avoid cross-contamination. <br> Always use a spatula instead of fingers to handle chemicals. <br> Avoid lifting the glass bottle by the neck alone to prevent accidents.",
      history: "The first reagent bottles were manufactured by DURAN in 1972, and they were pioneers of this practical design. Initially designed for reagent storage, their improved design has made it possible to store various other chemicals as well, becoming critical in laboratory operations.",
      category: "Laboratory Equipment"
    }
  ]; 
  let TLEcatalogData = [
    {
      title: "Electric Stove",
      description: "A cooking appliance powered by electricity, used to prepare food by providing heat. It is commonly found in households and comes in various styles like coil, glass-top, or induction. It is efficient and easy to use for different cooking tasks.",
      image: "./images/tlelab/electric stove.png",
      howtouse: "1. Press the power button or turn the setting knob to the 'on' position.<br>2. Select the desired temperature level; some electric stoves have numerical settings, while others use low, medium, and high.<br>3. Adjust the temperature according to the type of dish you will be cooking.",
      cautions: "Ensure the stove is properly installed and regularly maintained.",
      history: "The electric stove became common in homes in the late 19th and early 20th centuries.",
      category: "Heating/Cooling Equipment"
    },
    {
      title: "Non-stick Wok Pan",
      description: "A pan with a special coating that prevents food from sticking to its surface. It is perfect for stir-frying or cooking with minimal oil. This pan is easy to clean and helps achieve smooth, even cooking.",
      image: "./images/tlelab/nonstick pan.png",
      howtouse: "1. Cook on low to medium heat when using a non-stick wok.<br>2. Avoid high heat, as it can degrade the non-stick coating over time.<br>3. Use wooden or silicone utensils to avoid damaging the coating.",
      cautions: "Use wooden or silicone utensils to avoid damaging the non-stick coating.",
      history: "The wok originated in China and has been used for centuries. Non-stick coatings became popular in the 20th century to make cooking and cleaning easier.",
      category: "Cookware"
    },
    {
      title: "Oven Toaster",
      description: "A compact appliance ideal for toasting, baking, and reheating small portions of food. It heats up quickly and is energy-efficient compared to a full-sized oven. Perfect for quick meals or snacks, it is a kitchen essential.",
      image: "./images/tlelab/oven toaster.png",
      howtouse: "1. Plug the toaster oven into an outlet. <br>2. Turn the ON/OFF Control Dial to 450°F.<br>3. Heat at this temperature for 10 minutes. <br>4. The odor should not be present after this initial preheating.",
      cautions: "Never place items that are too large or that can overheat inside.",
      history: "The toaster oven was invented in the 1900s, providing an efficient method for toasting bread and baking small items.",
      category: "Heating/Cooling Equipment"
    },
    {
      title: "Portable Gas Stove",
      description: "A small, lightweight stove that uses portable gas canisters for fuel. It is often used for outdoor cooking or camping trips. Its compact design makes it easy to carry and set up.",
      image: "./images/tlelab/portable gas stove.png",
      howtouse: "1. Ensure the dial is in the off position.<br>2. Open the Butane Cartridge Compartment.<br>3. Locate the latch stove and line it up with the divot on the canister.<br>4. Close the Butane Cartridge Compartment and press down on the lock lever.<br>5. Turn the dial clockwise until you hear a 'click'.",
      cautions: "Always ensure the gas supply is properly connected and that no leaks are present.",
      history: "Portable gas stoves became widely used in the mid-20th century for camping and small kitchens, providing a compact cooking solution with easy-to-use gas fuel.",
      category: "Heating/Cooling Equipment"
    },
    {
      title: "Round-bottom Cooking Pan",
      description: "A round-bottomed, versatile pan commonly used in Asian cooking for stir-frying, steaming, or deep-frying. Its shape ensures even heat distribution for quick cooking. It is a favorite tool for making flavorful dishes.",
      image: "./images/tlelab/round bottom cooking pan.png",
      howtouse: "1. Set up at least two burners of varying heat. Let the wok preheat for about 10 minutes.<br>2. Apply oil after preheating your wok.<br>3. Keep your food moving in the pan constantly to prevent burning.",
      cautions: "Ensure the pan is stable on your stove to prevent tipping.",
      history: "Round-bottom pans, such as woks, have been used in Asia for centuries for stir-frying, steaming, and braising.",
      category: "Cookware"
    },
    {
      title: "Saucepan",
      description: "A small, deep pan with a long handle and a lid, used for boiling or simmering liquids. It is perfect for making soups, sauces, and gravies. The lid helps retain heat and moisture for efficient cooking.",
      image: "./images/tlelab/saucepan.png",
      howtouse: "1. Use the right heat setting for your saucepan. High heat is ideal for boiling water, while low heat is suitable for simmering sauces.<br>2. Always use a lid when simmering to prevent splattering.",
      cautions: "Always use a lid when simmering to prevent splattering.",
      history: "The saucepan has been in use since the 17th century and is a staple in European and American kitchens for boiling, simmering, and making sauces.",
      category: "Cookware"
    },
    {
      title: "Steamer",
      description: "A kitchen tool designed to cook food by steaming, preserving its nutrients and natural flavors. It often consists of stacked trays or baskets that allow steam to circulate. It is ideal for healthy cooking.",
      image: "./images/tlelab/steamer.png",
      howtouse: "1. Place your dish into the steamer and cover it with a lid.<br>2. Set a timer and check the temperature. A steady stream of steam should be visible. Adjust the heat as necessary.",
      cautions: "Be cautious of hot steam when opening the lid.",
      history: "Steam cooking dates back to ancient China and Japan, where steamers were used for cooking delicate foods like dumplings, buns, and fish.",
      category: "Cookware"
    },
    {
      title: "Food Chopper",
      description: "A kitchen tool used for finely chopping ingredients like vegetables, nuts, or herbs. It saves time and ensures consistent cuts for even cooking. Some models are manual, while others are electric.",
      image: "./images/tlelab/food chopper.png",
      howtouse: "1. Press the 'pulse' button for optimal control over ingredients. <br>2. A drizzle basin is located on top of the lid for adding liquid ingredients for dressings or sauces.",
      cautions: "Keep hands clear of the chopping blade.",
      history: "The food chopper became popular in the 19th century as a time-saving tool for chopping vegetables and meat.",
      category: "Food Preparation"
    },
    {
      title: "Egg Molder",
      description: "A utensil used to shape cooked eggs into fun or decorative forms. It is commonly used in bento box presentations or creative plating. This tool makes mealtime more enjoyable, especially for kids.",
      image: "./images/tlelab/egg molder.png",
      howtouse: "1. Heat a flat iron to medium heat and place the egg rings on the surface.<br>2. Allow the egg rings to preheat, then either mix your eggs before pouring or crack one egg into each ring.",
      cautions: "Ensure the egg molder is clean and dry before use to avoid contamination.",
      history: "The egg molder has been used for shaping boiled eggs for decorative or uniform purposes, popularized in Japanese cuisine and other East Asian countries.",
      category: "Food Preparation"
    },
    {
      title: "Dough Cutter",
      description: "A flat, handled tool used for dividing or scraping dough during baking preparation. It also helps clean and smooth work surfaces. Bakers often use it to handle sticky dough more efficiently.",
      image: "./images/tlelab/dough cutter.png",
      howtouse: "1. Use the fine edge to pick up traces of dough on surfaces.<br>2. Also use it to knead dough without getting your hands messy.",
      cautions: "Always use on a flat, stable surface to prevent injury or uneven cuts.",
      history: "The dough cutter dates back centuries, used by bakers for dividing and shaping dough.",
      category: "Baking Tools"
    },
    {
      title: "Dumpling Molder",
      description: "A handy tool for folding and sealing dumplings quickly and uniformly. It simplifies the process of making dumplings, wontons, or empanadas. Perfect for beginners, it ensures professional-looking results.",
      image: "./images/tlelab/dumpling molder.png",
      howtouse: "1. Put the dough on the surface, add your filling to the dough, then close the mold and press to seal a perfect package.",
      cautions: "Clean thoroughly after every use to avoid leftover dough or filling from sticking, which can lead to bacteria growth.",
      history: "Dumpling molders became widespread in various cultures to help form uniform shapes.",
      category: "Food Preparation"
    },
    {
      title: "Chopping Board",
      description: "Used as a protective surface on which to cut or slice food. Cutting boards are often made of wood, plastic, or cork. Glass cutting boards are also available, and though easy to clean, may dull or damage a knife during use.",
      image: "./images/tlelab/chopping board.png",
      howtouse: "1. Lay the chopping board on a flat, stable surface.<br>2. Place food on the board, using a sharp knife to chop while keeping the knife tip on or just above the board.",
      cautions: "Always use a separate board for raw meat and vegetables to avoid cross-contamination.",
      history: "The chopping board has been used since ancient times.",
      category: "Food Preparation"
    },
    {
      title: "Citrus Reamer",
      description: "A cone-shaped tool used to extract juice from lemons, oranges, or other citrus fruits. It efficiently separates juice from seeds and pulp. This tool makes preparing fresh juices or marinades easier.",
      image: "./images/tlelab/citrus reamer.png",
      howtouse: "1. Hold half a citrus fruit in one hand and the reamer in the other.<br>2. Push the reamer into the center of the fruit and start gently twisting.",
      cautions: "Avoid applying excessive force to prevent injury.",
      history: "The citrus reamer, developed in the 19th century, was designed to extract juice from fruits like lemons, oranges, and limes.",
      category: "Food Preparation"
    },
    {
      title: "Colander/Pasta Strainer",
      description: "A perforated bowl used to drain liquids from cooked pasta, vegetables, or washed produce. It is typically made of metal or plastic and has a sturdy base.",
      image: "./images/tlelab/colander pasta strainer.png",
      howtouse: "1. Place the colander in the sink, then pour contents from the pot into the colander to drain liquid.<br>2. Use caution when handling hot liquids.",
      cautions: "Be cautious when handling hot liquids and ensure the colander is stable while straining.",
      history: "Colanders date back to Ancient Rome and Greece, where they were used to drain liquids from food.",
      category: "Food Preparation"
    },
    {
      title: "Cheese Grater",
      description: "A tool with sharp surfaces for shredding, grating, or slicing ingredients like cheese, vegetables, or chocolate. It often has multiple sides for different textures.",
      image: "./images/tlelab/cheese grater.png",
      howtouse: "1. Hold the handle of the grater near you and grate cheese away from you.<br>2. The grated cheese will be collected in the container below the grater.",
      cautions: "Use care when grating cheese to avoid injury.",
      history: "Graters became popular in the 16th century as people sought ways to shred cheese more efficiently.",
      category: "Food Preparation"
    },
    {
      title: "French Knife",
      description: "A multipurpose kitchen knife used for slicing, dicing, chopping, and mincing. It is sharp, durable, and a favorite among chefs for its versatility.",
      image: "./images/tlelab/french knife.png",
      howtouse: "1. Keep fingertips curled under the hand that is holding the food.<br>2. Point the blade away from your body when cutting.",
      cautions: "Always use a sharp knife to reduce the risk of accidents.",
      history: "The French knife, also known as a chef's knife, originated in France and is a versatile kitchen tool.",
      category: "Cutlery"
    },
    {
      title: "Mixing Bowl",
      description: "A deep, round bowl used for mixing or blending ingredients during food preparation. It is a versatile kitchen staple.",
      image: "./images/tlelab/mixing bowl.png",
      howtouse: "1. Use the mixing bowl for combining ingredients or whipping cream.<br>2. Some multifunctional bowls have lids for food storage.",
      cautions: "Avoid using very hot liquids or acidic substances in plastic bowls.",
      history: "Mixing bowls have been used since the Middle Ages, evolving from simple pottery and wood to glass and plastic.",
      category: "Food Preparation"
    },
    {
      title: "Peeler",
      description: "A handheld tool used to remove the skin from fruits and vegetables. Its sharp blade makes peeling quick and efficient.",
      image: "./images/tlelab/peeler.png",
      howtouse: "1. Hold the peeler in your dominant hand, with the blade facing away. <br>2. Apply gentle pressure and glide the peeler down the surface of the produce.",
      cautions: "Always peel away from your hands to avoid injury.",
      history: "The peeler, patented in the early 19th century, revolutionized the way people prepared fruits and vegetables.",
      category: "Food Preparation"
    },
    {
      title: "Strainer",
      description: "A fine mesh tool used to separate liquids from solids or sift dry ingredients like flour.",
      image: "./images/tlelab/strainer.png",
      howtouse: "1. Place the strainer over a large bowl, then pour liquid through to separate solids. <br>2. Ensure a good grip to prevent spills.",
      cautions: "Strainers with fine mesh may clog easily.",
      history: "Strainers were used by cooks in ancient civilizations to separate solids from liquids.",
      category: "Food Preparation"
    },
    {
      title: "Rotary Egg Beater",
      description: "A handheld tool with rotating blades used to beat eggs or blend ingredients manually.",
      image: "./images/tlelab/rotary egg beater.png",
      howtouse: "1. Place the egg beater in a bowl containing eggs and crank the handle.<br>2. Continue until eggs reach desired fluffiness.",
      cautions: "Be careful of moving parts and sharp edges.",
      history: "The rotary egg beater was invented in the late 19th century, increasing efficiency in mixing eggs.",
      category: "Food Preparation"
    },
    {
      title: "Liquid Measuring Cup",
      description: "A cup with markings for accurately measuring liquid ingredients.",
      image: "./images/tlelab/liquid measuring cup.png",
      howtouse: "1. Bend down to eye level with the measuring cup. <br>2. Pour liquid while observing the level for accuracy.",
      cautions: "Ensure the measuring cup is on a flat surface for accurate measurement.",
      history: "Liquid measuring cups emerged in the 19th century as the need for accurate measurements grew.",
      category: "Measuring Tools"
    },
    {
      title: "Manual Kitchen Weighing Scale",
      description: "A device used to weigh ingredients for precise measurement in cooking and baking.",
      image: "./images/tlelab/manual kitchen weighing scale.png",
      howtouse: "1. Adjust the balance until the arrow is level to read the weight.<br>2. Add the ingredient to the platform for measurement.",
      cautions: "Ensure the scale is properly calibrated for accuracy.",
      history: "Manual kitchen scales have been used since the 18th century, especially for baking.",
      category: "Measuring Tools"
    },
    {
      title: "Metric-Style Measuring Cup",
      description: "Small scoops used for measuring liquid or dry ingredients in specific quantities.",
      image: "./images/tlelab/metric style measuring cup.png",
      howtouse: "1. Pour ingredients into the cup until level with the graduation mark. <br>2. Ensure you are at eye level for an accurate measurement.",
      cautions: "Use the correct measuring cup for dry or liquid ingredients.",
      history: "Metric measuring cups became standardized in the 19th century.",
      category: "Measuring Tools"
    },
    {
      title: "Ice Cream Scooper/Dipper",
      description: "A tool designed for serving uniform scoops of ice cream or soft foods.",
      image: "./images/tlelab/ice cream scooper.png",
      howtouse: "1. Wash hands before using the ice cream scoop.<br>2. Use the handle to scoop and serve ice cream portions.",
      cautions: "Be careful, as the scooper can be sharp.",
      history: "The ice cream scooper was invented in the 19th century to make serving ice cream neater.",
      category: "Kitchen Tools"
    },
    {
      title: "Kitchen Shears",
      description: "Heavy-duty scissors used for cutting herbs, poultry, or food packaging.",
      image: "./images/tlelab/kitchen shears.png",
      howtouse: "1. Hold the kitchen shears with one hand and use pressing motions to cut.<br>2. Always cut away from your body.",
      cautions: "These scissors are sharp; keep them away from children.",
      history: "Kitchen shears have ancient origins, with modern designs evolving to handle various tasks in the kitchen.",
      category: "Kitchen Tools"
    },
    {
      title: "Manual Food Chopper",
      description: "A versatile kitchen appliance for chopping, slicing, dicing, and shredding ingredients quickly.",
      image: "./images/tlelab/manual food chopper.png",
      howtouse: "1. Place ingredients in the container, secure the lid, and pull the string to chop.<br>2. Detachable parts make cleaning easy.",
      cautions: "Keep fingers away from the chopping mechanism.",
      history: "Popularized in the 19th and 20th centuries, manual food choppers simplified vegetable preparation.",
      category: "Food Preparation"
    },
    {
      title: "Silicone Brush",
      description: "A heat-resistant brush with flexible silicone bristles, used for spreading or basting sauces.",
      image: "./images/tlelab/silicone brush.png",
      howtouse: "1. Use it for applying oil or sauces while cooking.<br>2. It's also great for basting in the oven or on the grill.",
      cautions: "Ensure the brush is food-grade and heat-resistant.",
      history: "Silicone brushes were developed as durable alternatives to traditional bristle brushes in the late 20th century.",
      category: "Kitchen Tools"
    },
    {
      title: "Digital Kitchen Scale",
      description: "A compact device for measuring ingredients accurately by weight.",
      image: "./images/tlelab/digital kitchen scale.png",
      howtouse: "1. Place the container on the scale and tare it to zero before adding ingredients.<br>2. Ensure the scale is on a flat surface.",
      cautions: "Always check the batteries and calibrate for accurate measurements.",
      history: "Digital kitchen scales emerged in the late 20th century, replacing mechanical scales.",
      category: "Measuring Tools"
    },
    {
      title: "Egg Slicer",
      description: "A tool used to evenly slice boiled eggs into thin, uniform pieces.",
      image: "./images/tlelab/egg slicer.png",
      howtouse: "1. Open the slicer and place the boiled egg in the holder.<br>2. Close the lid to slice through the egg.",
      cautions: "The blades are sharp; handle with care.",
      history: "The egg slicer became popular in the 1960s for its ability to slice hard-boiled eggs uniformly.",
      category: "Food Preparation"
    },
    {
      title: "Garlic Press",
      description: "A small handheld tool used to crush garlic cloves into a fine paste.",
      image: "./images/tlelab/garlic press.png",
      howtouse: "1. Place the garlic clove in the chamber and squeeze the handle to crush.<br>2. Scrape away excess garlic from the grid.",
      cautions: "Be mindful of the pressure applied to avoid breaking the tool.",
      history: "The garlic press was invented in the late 19th century to simplify the task of mincing garlic.",
      category: "Kitchen Tools"
    },
    {
      title: "Llanera",
      description: "A smooth, heat-resistant mold used for making Filipino desserts like leche flan.",
      image: "./images/tlelab/llanera.png",
      howtouse: "1. Heat sugar in the llanera until melted and caramelized.<br>2. Set aside to cool before adding custard mixture.",
      cautions: "Avoid overfilling to prevent spillage when steaming. The mold gets very hot.",
      history: "Llanera is a traditional mold used in Filipino cuisine, especially for leche flan, tracing its roots back to Spanish influence.",
      category: "Baking Tools"
    },
    {
      title: "Polvoron Molder",
      description: "A small tool for shaping polvoron, a Filipino powdered milk candy.",
      image: "./images/tlelab/polvoron molder.png",
      howtouse: "1. Scoop the mixture into the molder, press to shape, and wrap tightly in pre-cut paper.",
      cautions: "Handle with care; small parts may break or crack under pressure.",
      history: "The polvoron molder is rooted in Spanish and Filipino cultures, facilitating the creation of uniform treats.",
      category: "Food Preparation"
    },
    {
      title: "Tube Pan",
      description: "A round baking pan with a hollow tube in the center, used for baking cakes like angel food or Bundt cakes.",
      image: "./images/tlelab/tube pan.png",
      howtouse: "1. Prepare the batter, pour into the pan and bake according to recipe instructions.<br>2. Let cool before removing.",
      cautions: "Be cautious when removing from the oven, as the tube pan retains heat longer.",
      history: "Tube pans were introduced in the 19th century, gaining popularity for baking angel food and chiffon cakes.",
      category: "Baking Tools"
    },
    {
      title: "Tong",
      description: "A gripping tool used for lifting, flipping, or serving food during cooking.",
      image: "./images/tlelab/tong.png",
      howtouse: "1. Use tongs to handle hot food safely, gripping the item securely with the tips.<br>2. Turn food in a pan or serve directly onto plates.",
      cautions: "Be careful of hot surfaces and foods when using tongs.",
      history: "Tongs date back to the Roman Empire, having evolved in design for various culinary applications.",
      category: "Kitchen Tools"
    },
    {
      title: "Whisk",
      description: "A handheld tool with loops of wire used for mixing or whipping ingredients.",
      image: "./images/tlelab/whisk.png",
      howtouse: "1. Use a side-to-side motion to agitate the mixture while whisking.<br>2. Continue until the desired texture is achieved.",
      cautions: "Be careful, as wire loops can be sharp.",
      history: "Whisks have been used since the 16th century, originally made from twigs and evolving into metal designs.",
      category: "Kitchen Tools"
    },
    {
      title: "Saucer",
      description: "A small, flat dish placed under a cup to catch drips or hold a spoon.",
      image: "./images/tlelab/saucer.png",
      howtouse: "1. Place the saucer underneath a mug or cup for catching spills.",
      cautions: "Ensure the saucer is on a stable surface to avoid spills.",
      history: "Saucers have been used since the 17th century, often paired with teacups in European cultures.",
      category: "Tableware"
    },
    {
      title: "Mug",
      description: "A large, sturdy cup with a handle, used for drinking hot beverages.",
      image: "./images/tlelab/mug.png",
      howtouse: "1. Hold the mug by its handle to enjoy your drink without burning your fingers.",
      cautions: "Avoid using in a microwave if the mug has metallic decorations.",
      history: "Mugs have been in use for thousands of years, evolving from simple pottery to modern designs.",
      category: "Tableware"
    },
    {
      title: "Glass Bottle",
      description: "A container with a narrow neck, used for storing liquids.",
      image: "./images/tlelab/glass bottle.png",
      howtouse: "1. Use the glass bottle to store and serve liquids like water, juices or homemade beverages.",
      cautions: "Glass bottles can break easily when dropped; handle with care.",
      history: "Glass bottles date back to around 1500 BCE, first used by ancient Egyptians, becoming more common in Europe by the 17th century.",
      category: "Storage"
    },
    {
      title: "Fork",
      description: "A utensil with multiple prongs, used for eating, holding, or picking up food.",
      image: "./images/tlelab/fork.png",
      howtouse: "1. Grip the fork by its handle to pierce and lift food items.",
      cautions: "Be mindful of the prongs as they can cause injury.",
      history: "The fork originated in ancient civilizations and became more widely used in Europe during the Middle Ages.",
      category: "Tableware"
    },
    {
      title: "Spoon",
      description: "A rounded utensil with a bowl-like end, used for eating or scooping food.",
      image: "./images/tlelab/spoon.png",
      howtouse: "1. Hold the spoon by the handle to scoop liquid or semi-liquid foods, such as soups.",
      cautions: "Metal spoons can become hot with hot foods; use caution to prevent burns.",
      history: "Spoons are one of the oldest utensils, dating back to ancient Egypt around 1000 BCE.",
      category: "Tableware"
    },
    {
      title: "Dinner Plate",
      description: "A large, flat plate used for serving main meals.",
      image: "./images/tlelab/dinner plate.png",
      howtouse: "1. Arrange your meal on the dinner plate by placing larger portions in the center and smaller sides around it.",
      cautions: "Avoid sudden temperature changes to prevent cracking.",
      history: "Dinner plates have transitioned from simple clay to fine china and porcelain over thousands of years.",
      category: "Tableware"
    },
    {
      title: "Soup Spoon",
      description: "A spoon designed specifically for eating soups and broths.",
      image: "./images/tlelab/soup spoon.png",
      howtouse: "1. Use the soup spoon for sipping or scooping up liquids like soup.",
      cautions: "Do not use with hard objects as it may damage the spoon.",
      history: "Soup spoons were popularized in Europe during the 17th century as soups became a staple.",
      category: "Tableware"
    },
    {
      title: "Ceramic Bowl",
      description: "A ceramic bowl adds elegance to any dining table, ideal for serving salads or soups.",
      image: "./images/tlelab/ceramic bowl.png",
      howtouse: "1. Use for serving smaller portions of food like salads.<br>2. Its sturdy design accommodates both hot and cold dishes.",
      cautions: "Avoid using very hot foods to prevent uneven heating.",
      history: "Ceramic bowls have been used since ancient times, evolving in design and glazes.",
      category: "Tableware"
    },
    {
      title: "Pasta Ladle",
      description: "A specialized tool designed to scoop and serve pasta.",
      image: "./images/tlelab/pasta ladle.png",
      howtouse: "1. Lift and drain pasta from boiling water using the slotted design to let water drain away.",
      cautions: "Be careful not to burn yourself with hot water.",
      history: "The pasta ladle emerged as pasta became popular in Italy and other Mediterranean regions.",
      category: "Cooking Tools"
    },
    {
      title: "Sandok",
      description: "A traditional wooden spoon used for serving or stirring food in large pots.",
      image: "./images/tlelab/sandok.png",
      howtouse: "1. Hold the sandok by its long handle to serve food like rice from a pot.",
      cautions: "Avoid using sharp objects to preserve its surface.",
      history: "The sandok has been used in Filipino households for centuries, reflecting the importance of rice in the local diet.",
      category: "Cooking Tools"
    },
    {
      title: "Skimmer",
      description: "A kitchen tool for removing solid ingredients from hot liquids.",
      image: "./images/tlelab/skimmer.png",
      howtouse: "1. Use the skimmer to scoop out food from boiling liquid, leaving the liquid behind.",
      cautions: "Avoid using in very hot oil or boiling water unless heat-resistant.",
      history: "Skimmers have been used since the 18th century to remove solid components from liquids.",
      category: "Cooking Tools"
    },
    {
      title: "Soup Ladle",
      description: "A deep, long-handled spoon for serving soups, stews, and other liquids.",
      image: "./images/tlelab/soup ladle.png",
      howtouse: "1. Hold the handle to scoop and serve portions from pots into bowls.",
      cautions: "Avoid using with excessively hot soup with long exposure to prevent burns.",
      history: "Ladles date back to the Middle Ages for serving soups; traditionally made of wood or metal.",
      category: "Serving Tools"
    },
    {
      title: "Wooden Spatula",
      description: "A versatile cooking tool used for stirring, flipping, and scraping food.",
      image: "./images/tlelab/wooden spatula.png",
      howtouse: "1. Grip and use the wooden spatula to stir or flip food while cooking.",
      cautions: "Avoid soaking in water to prevent warping.",
      history: "Wooden spatulas have been used for centuries, particularly in European kitchens.",
      category: "Cooking Tools"
    },
    {
      title: "Wooden Spoon",
      description: "A classic kitchen utensil known for its strength and versatility.",
      image: "./images/tlelab/wooden spoon.png",
      howtouse: "1. Stir or mix ingredients using the robust handle and round bowl.",
      cautions: "Avoid using on very hot pans to prevent burns.",
      history: "Wooden spoons date back to ancient times, with evidence in Egyptian and Roman sites.",
      category: "Cooking Tools"
    }
  ]; 
  let ComcatalogData =
    [
        {
            title: "Cat 6 Cable",
            description: "Category 6 cable (Cat 6) is a standardized twisted pair cable for Ethernet and other network physical layers that is backward compatible with the Category 5/5e and Category 3 cable standards. It supports higher frequencies and faster data rates, reaching speeds up to 10 Gbps over limited distances.",
            howtouse: "Plug one end into a router, switch, or modem. <br> Insert the other end into a computer or network device.",
            cautions: "Avoid excessive bending or twisting to prevent signal loss. Keep away from power cables to reduce crosstalk.",
            history: "Cat 6 cables were introduced in the early 2000s as an improvement over Cat 5e cables, offering better performance and reduced crosstalk.",
            category: "Networking Equipment",
            image: "./images/comlab/6 Cable.png"
        },
        {
            title: "Manfrotto 060 Light Stand",
            description: "This is a Manfrotto 060 light stand, a compact stand that extends to a height of 7 feet. It is designed to support lighting equipment, reflectors, or other accessories securely during photo and video shoots.",
            howtouse: "Extend the legs for stability. <br> Adjust the height by loosening and tightening the knobs. <br> Mount the light or accessory securely on the stand’s top.",
            cautions: "Ensure the stand is placed on a stable surface to prevent tipping over. Always balance the load to reduce the risk of accidents.",
            history: "Manfrotto has been a leading manufacturer of photography equipment since the 1970s, designing professional-grade tripods and stands.",
            category: "Lighting Equipment",
            image: "./images/comlab/Manfrotto 060 light.png"
        },
        {
            title: "Yunteng VCT-668 Tripod",
            description: "This is a Yunteng VCT-668 tripod. It's a lightweight, portable tripod made of aluminum alloy and plastic, suitable for most cameras and digital video devices. It features adjustable height and angle settings to capture a variety of shots.",
            howtouse: "Unfold the legs to set it up. <br> Adjust the height using the leg locks. <br> Secure the camera using the mounting screw on the top plate.",
            cautions: "Do not overload the tripod beyond its weight capacity to prevent damage. Ensure legs are locked securely before use.",
            history: "Yunteng tripods became popular in the 2010s as affordable yet functional solutions for photographers and videographers.",
            category: "Camera Equipment",
            image: "./images/comlab/Tripod 2.png"
        },
        {
            title: "Console Cable",
            description: "This is a console cable, also known as a rollover cable. It's used to connect a computer to a device's console port, like a router, for configuration and management purposes.",
            howtouse: "Connect one end to the router’s console port. <br> Connect the other end to a computer, often requiring a serial port or USB-to-serial adapter.",
            cautions: "Ensure proper drivers are installed on the computer to recognize the cable. Handle with care to avoid damaging the connectors.",
            history: "Console cables have been widely used in IT networking since the 1990s for device configuration and troubleshooting.",
            category: "Networking Equipment",
            image: "./images/comlab/Console Cable.png"
        },
        {
            title: "Ethernet Cable",
            description: "This is an Ethernet cable, also known as a network cable or RJ45 cable. It is used to connect devices to a network, such as a computer to a router or modem, for internet access and data transfer. It can support various speeds and distances.",
            howtouse: "Insert one end into a modem, router, or switch. <br> Insert the other end into a computer or network device.",
            cautions: "Avoid placing heavy objects on the cable to prevent damage. Ensure connections are secure to avoid loss of signal.",
            history: "Ethernet cables were developed in the 1980s and have evolved into multiple categories with faster data transmission speeds.",
            category: "Networking Equipment",
            image: "./images/comlab/Ethernet Cable.png"
        },
        {
            title: "Ring Light",
            description: "This is a ring light. It's a type of lighting fixture that's shaped like a circle, providing even illumination with minimal shadows, primarily used for photography and video applications.",
            howtouse: "Plug in the power source. <br> Turn it on. <br> Adjust the brightness and color temperature as needed.",
            cautions: "Do not look directly into the light for extended periods to avoid eye strain. Ensure it is placed securely to prevent falls.",
            history: "Ring lights were originally developed for medical and dental applications but gained popularity in the 2010s for content creation.",
            category: "Lighting Equipment",
            image: "./images/comlab/Ring Light.png"
        },
        {
            title: "Power Cord",
            description: "This appears to be a power cord for a Thrustmaster T300 or TX series racing wheel base. It connects the racing wheel to a power outlet to charge and operate the device.",
            howtouse: "Connect the power adapter to the racing wheel base. <br> Plug it into a power outlet.",
            cautions: "Ensure the voltage matches the power adapter’s rating to avoid electrical damage. Inspect for any wear before use.",
            history: "Thrustmaster has been producing gaming peripherals since the 1990s, with the T300 and TX series launching in the 2010s.",
            category: "Power Accessories",
            image: "./images/comlab/Power Cord.png"
        },
        {
            title: "HC-1000SB LED Video Light",
            description: "This is a NiceFoto HC-1000SB II Photography LED Video Light, allowing the illuminated area to reflect accurate colors. It is adjustable for brightness and color temperature for varied applications.",
            howtouse: "Mount the light on a stand. <br> Power it on. <br> Adjust brightness and color temperature as needed for desired effect.",
            cautions: "Avoid exposure to moisture to prevent electrical damage. Ensure adequate ventilation to avoid overheating.",
            history: "LED video lights became widely used in the 2000s as energy-efficient lighting solutions for professional photography and videography.",
            category: "Lighting Equipment",
            image: "./images/comlab/LED Video Light"
        },
        {
            title: "YN-300 III Camera Photo LED Video Light",
            description: "YONGNUO YN300 III Camera Photo LED Video Light Panel + Remote Control 3200K-5600K. Offers adjustable brightness and color temperature, making it great for photography and videography.",
            howtouse: "Attach to a camera or stand. <br> Turn on. <br> Adjust the brightness using the remote control.",
            cautions: "Use only the recommended power source to avoid short circuits. Handle with care to avoid damage to the light.",
            history: "Yongnuo introduced the YN-300 series in the 2010s as a budget-friendly alternative for videographers and photographers.",
            category: "Lighting Equipment",
            image: "./images/comlab/Camera Photo LED Video Light"
        },
        {
            title: "YN300 Air II LED Video Light",
            description: "This is a Yongnuo YN300 Air II LED Video Light. It can be used on or off-camera to provide soft key light indoors or outdoors, with adjustable features for different lighting settings.",
            howtouse: "Mount on a stand or attach to a camera. <br> Adjust brightness and color temperature as needed.",
            cautions: "Do not use in extreme temperatures to prevent overheating. Ensure proper handling to avoid falling.",
            history: "The YN300 Air II was released in the 2010s, offering a lightweight and portable lighting solution for photographers and videographers.",
            category: "Lighting Equipment",
            image: "./images/comlab/Air LED Video Light"
        },
        {
            title: "Logitech 960 USB Computer Headset",
            description: "This is a Logitech 960 USB Computer Headset. It's a plug-and-play headset with a noise-canceling microphone, ideal for video conferencing and online meetings.",
            howtouse: "Plug the USB connector into a computer. <br> Adjust the volume and fit as needed.",
            cautions: "Avoid excessive bending of the cable to prevent damage. Ensure a comfortable fit to avoid strain during long use.",
            history: "Logitech introduced its 900-series headsets in the 2000s, catering to business professionals and remote workers.",
            category: "Audio Equipment",
            image: "./images/comlab/Headset.png"
        },
        {
            title: "Spring Clamp",
            description: "This is a spring clamp. They are commonly used to hold items together while glue sets, secure backdrops for photography, and organize cables.",
            howtouse: "Squeeze the handles to open the clamp. <br> Position it on the object. <br> Release to secure it.",
            cautions: "Use appropriate force to prevent damaging delicate materials. When holding heavier items, be sure to check the clamp's load capacity.",
            history: "Spring clamps have been used in woodworking and photography since the early 20th century as a simple yet effective holding tool.",
            category: "General Accessories",
            image: "./images/comlab/Sprig Clamp.png"
        },
        {
            title: "Microphone",
            description: "This is a wired microphone. It is a device that converts sound waves into electrical signals for recording or amplification, ensuring clear audio capture in various settings.",
            howtouse: "1. Connect the microphone to an audio input device. <br> 2. Position it close to the sound source for best quality.",
            cautions: "Do not expose to extreme moisture or water, as it can damage internal components. Use with care to avoid dropping.",
            history: "The history of microphones dates back to the 19th century, with their development accelerating through the 1920s for radio, recording, and broadcasting purposes. The modern microphone is key in audio recording and live performance.",
            category: "Audio Equipment",
            image: "./images/comlab/Wired Microphone.png"
        },
        {
            title: "HDMI Splitter",
            description: "This is an HDMI splitter. It takes one HDMI input and splits it into multiple identical outputs, allowing you to display the same content on multiple screens simultaneously, commonly used in educational and entertainment venues.",
            howtouse: "1. Connect the input device to the splitter’s input port. <br> 2. Connect the output devices to the splitter’s output ports.",
            cautions: "Ensure all devices are powered off before connecting to avoid electrical surges. Check that the HDMI version is compatible with all devices.",
            history: "HDMI splitters emerged with the rise of HDMI technology in the early 2000s, enabling users to send a single HDMI signal to multiple displays simultaneously, commonly used in home entertainment setups.",
            category: "Video Equipment",
            image: "./images/comlab/HDMI Splitter.png"
        },
        {
            title: "Tamiya Connector",
            description: "This is a Tamiya connector, a type of DC power connector commonly used for battery packs in radio-controlled model vehicles, drones, and chargers, offering a reliable connection with good conductivity.",
            howtouse: "1. Plug the connector into the corresponding port on the device. <br> 2. Ensure the connection is secure and correctly oriented.",
            cautions: "Ensure proper orientation when connecting to avoid short circuits. Regularly inspect for wear and tear.",
            history: "Tamiya connectors, often used in RC vehicles and model kits, were first introduced in the 1970s by the Japanese company Tamiya. They are known for their durability and ease of use.",
            category: "Power Accessories",
            image: "./images/comlab/Tamiya Connector"
        },
        {
            title: "2-Prong Power Cord",
            description: "This is a 2-prong power cord. It's typically used to connect electronic devices, like printers or scanners, to a power outlet.",
            howtouse: "1. Insert one end into the device's power input. <br> 2. Plug the other end into an outlet.",
            cautions: "Never use the cord with devices that require a 3-prong grounding plug. Inspect for frays or damage before use.",
            history: "2-prong power cords have been in use since the early 20th century, particularly for lower-voltage appliances, with standard configurations evolving as electrical safety protocols advanced.",
            category: "Power Accessories",
            image: "./images/comlab/2 Prong Power Cord.png"
        },
        {
            title: "LED Rechargeable Flashlight",
            description: "Sofitec brand LED rechargeable flashlight, model SRF-9122, used for emergency purposes and everyday life. It provides bright illumination in a durable and compact form.",
            howtouse: "1. Charge the flashlight using the provided charger. <br> 2. Turn it on using the power button.",
            cautions: "Do not leave the flashlight on for extended periods to avoid overheating. Store it in a cool, dry place.",
            history: "LED technology revolutionized flashlights in the early 2000s by offering brighter and longer-lasting lighting. Rechargeable models quickly became popular for their convenience and environmental benefits.",
            category: "Lighting Equipment",
            image: "./images/comlab/Flashlight.png"
        },
        {
            title: "45W AC Adapter Charger",
            description: "This is a 45W AC adapter charger for a Dell XPS 13 laptop. It's used to power the laptop and charge its battery efficiently.",
            howtouse: "1. Connect the adapter to the device's charging port. <br> 2. Plug the adapter into an electrical outlet.",
            cautions: "Ensure the adapter is compatible with the device you're charging. Do not overload the outlet.",
            history: "AC adapters, especially for laptops and portable devices, have evolved alongside personal computing since the 1980s. The 45W adapter is a common power solution for smaller laptops and electronic devices.",
            category: "Power Accessories",
            image: "./images/comlab/AC Adapter Charger.png"
        },
        {
            title: "Mouse Pad",
            description: "A mouse pad is used to provide a smooth surface for a computer mouse to move on, allowing for more accurate and precise cursor control. It also helps to protect the mouse's underside and the surface of the desk from wear and tear.",
            howtouse: "1. Place the mouse pad on a flat surface. <br> 2. Use the mouse on top of the pad.",
            cautions: "Keep the mouse pad clean and free of debris to maintain smooth tracking. Avoid exposing it to water or extreme heat.",
            history: "Mouse pads were introduced in the early 1980s alongside the widespread use of computer mice. They have since evolved into ergonomically designed accessories, with modern versions often incorporating wrist rests and wireless charging features.",
            category: "Computer Accessories",
            image: "./images/comlab/Mousepad.png"
        },
        {
            title: "Computer Mouse",
            description: "A computer mouse, like the Asus mouse pictured, is used to interact with a computer by controlling the cursor on the screen.",
            howtouse: "1. Connect the mouse to the computer via USB or Bluetooth. <br> 2. Use it to navigate the computer interface.",
            cautions: "Clean the sensor area regularly to ensure optimal tracking. Avoid dropping the mouse to maintain its integrity.",
            history: "The computer mouse was developed in the 1960s by Douglas Engelbart and became widely popular in the 1980s with the personal computer boom. It has since become a fundamental input device for computing.",
            category: "Computer Accessories",
            image: "./images/comlab/Computer Mouse.png"
        },
        {
            title: "Laptop Bag",
            description: "This is a laptop bag, used to carry and protect a laptop computer. Designed with compartments for accessories, it provides convenience and organization for the user.",
            howtouse: "1. Place the laptop inside the bag. <br> 2. Close securely and use the straps for carrying.",
            cautions: "Ensure the bag is made of durable material to prevent tearing or wear. Avoid overloading it to maintain structural integrity.",
            history: "Laptop bags became a standard accessory in the 1990s as portable computing grew in popularity. Early bags were simple sleeves, but modern designs focus on carrying convenience, protection, and style.",
            category: "Computer Accessories",
            image: "./images/comlab/Laptop Bag.png"
        },
        {
            title: "VGA (Video Graphics Array)",
            description: "VGA stands for Video Graphics Array. At its core, VGA is an analog interface standard for computer video output. It defines both a display hardware specification and a 15-pin connector type used to connect video sources (like computers) to display devices (like monitors).",
            howtouse: "1. Connect one end of the VGA cable to the computer. <br> 2. Connect the other end to the monitor.",
            cautions: "Be careful when handling VGA connectors, as they have pins that may bend or break. Ensure a secure connection to avoid signal loss.",
            history: "VGA was introduced in 1987 by IBM, becoming the standard for computer graphics displays. It supported a resolution of 640x480 pixels, which was revolutionary at the time.",
            category: "Video Equipment",
            image: "./images/comlab/Video Graphics Array.png"
        },
        {
            title: "Scotch Double-Sided Tape",
            description: "Scotch Double-Sided Tape is the neat, clean, strong, and long-lasting way to take care of school projects, scrapbooks, photo albums, and presentations. It is easy to use and won't create a mess like glue.",
            howtouse: "1. Cut the desired length of tape. <br> 2. Place it between two objects and press firmly.",
            cautions: "Avoid using the tape on delicate surfaces, as it may leave adhesive residue. Store in a cool place to maintain adhesive quality.",
            history: "Scotch brand tape has been in production since 1930, with double-sided tape being introduced in the 1980s. It is widely used for crafts, office work, and mounting lightweight objects.",
            category: "General Accessories",
            image: "./images/comlab/Double Sided Tape.png"
        },
        {
            title: "Dynamic Microphone XM180PS",
            description: "The DYNAMIC MICROPHONE XM1800S is a high-quality dynamic microphone for vocal and instrumental applications. It is designed for musicians, DJs, and entertainers seeking professional sound performance on a budget.",
            howtouse: "1. Connect the microphone to an audio input device. <br> 2. Position it close to the sound source.",
            cautions: "Avoid exposing the microphone to moisture, which can cause damage. Check for cable integrity before use.",
            history: "The XM180PS dynamic microphone, often used in professional audio environments, belongs to a family of microphones developed to handle high sound pressure levels, typically used for broadcasting and live sound.",
            category: "Audio Equipment",
            image: "./images/comlab/Dynamic Microphone.png"
        },
        {
            title: "Tripod",
            description: "This is a tripod, used to stabilize and support cameras, video cameras, or other equipment like fishing lights.",
            howtouse: "1. Extend the legs and secure them. <br> 2. Mount the camera or equipment and adjust the angle.",
            cautions: "Always ensure the tripod is securely set up before mounting any equipment. Use tripod feet on a flat surface for stability.",
            history: "Tripods have been used since the 19th century in photography and videography. Early models were heavy, but modern versions are lightweight and more versatile for use with digital cameras and smartphones.",
            category: "Camera Equipment",
            image: "./images/comlab/Tripod.png"
        },
        {
            title: "Extension Cord",
            description: "An extension cord with rubber insulation, used for connecting electrical appliances such as lawnmowers, power tools, vacuum cleaners, and garden equipment. Suitable for both indoor and outdoor use, including construction sites and workshops.",
            howtouse: "1. Plug the extension cord into an outlet. <br> 2. Plug devices into the extension cord’s outlets.",
            cautions: "Avoid running cords under heavy furniture or across high-traffic areas to prevent tripping hazards. Regularly inspect for wear and tear.",
            history: "Extension cords were first introduced in the early 20th century as a solution for reaching distant electrical outlets. Over the years, they’ve become more flexible and come in various lengths and configurations.",
            category: "Power Accessories",
            image: "./images/comlab/Extension Cord.png"
        },
        { 
            title: "Power Adapter",
            description: "A power adapter converts AC voltage to a single DC voltage for a computer or other devices. It functions as an external battery, allowing the computer to remain compact. Computers typically use multiple DC voltages for different components.",
            howtouse: "1. Connect the adapter to the device. <br> 2. Plug it into a power source.",
            cautions: "Only use the adapter with devices that match its voltage and current ratings. Ensure secure connections to prevent damage.",
            history: "Power adapters have been essential for electronics since the 1970s, converting voltage from power outlets into usable formats for various devices. They have become more compact and energy-efficient over the years.",
            category: "Power Accessories",
            image: "./images/comlab/Power Adapter Server.png"
        },
        {
            title: "Charging Cart",
            description: "This is a charging cart used to store and charge multiple electronic devices like laptops or tablets simultaneously. These carts are commonly used in schools, offices, and other settings where multiple devices need to be charged and stored securely.",
            howtouse: "1. Place devices in the cart and connect them to the charging ports. <br> 2. Plug the cart into a power source.",
            cautions: "Always check the maximum capacity before inserting devices to avoid overheating. Ensure proper ventilation.",
            history: "Charging carts have been developed in the 2000s as solutions for managing multiple devices, particularly in educational or corporate environments, providing safe charging stations for laptops and tablets.",
            category: "Computer Accessories",
            image: "./images/comlab/Charging Cart.png"
        }
  ]; 
  let ExpcatalogData = []; 

let favorites = JSON.parse(localStorage.getItem("SciFavorites")) || [];
let TLEfavorites = JSON.parse(localStorage.getItem("TLEfavorites")) || [];
let Comfavorites = JSON.parse(localStorage.getItem("Comfavorites")) || [];

 
   
class AudioManager {
    constructor() {
        var Click2 = new Audio("./audio/click2.wav");
        var BGM = new Audio("./audio/bgm.mp3");
        
      this.bgMusic = BGM
      this.bgMusic.loop = true;
      this.sfx = Click2
      this.isBgMusicMuted = false;
      this.isSfxMuted = false;


      document.addEventListener("click", () => this.playBgMusic(), { once: true });
  }

  playBgMusic() {
    if (!this.isBgMusicMuted && this.bgMusic.paused) {
      this.bgMusic.play().catch((e) => {
        console.warn("Autoplay blocked. User interaction needed.", e);
      });
    }
  }

  toggleBgMusic(isMuted) {
    this.isBgMusicMuted = isMuted;
    this.bgMusic.muted = this.isBgMusicMuted;
    if (!this.isBgMusicMuted && this.bgMusic.paused) {
      this.bgMusic.play();
    }
  }
  
    toggleSfx(isMuted) {
      this.isSfxMuted = isMuted;
      this.sfx.muted = this.isSfxMuted;
    }
  
    playClick2Sfx() {
      if (!this.isSfxMuted) {
        this.sfx.currentTime = 0; // Restart SFX if already playing
        this.sfx.play();
      }
    }
  }

  const audioManager = new AudioManager();
  
  document.getElementById("SFXcheckbox").addEventListener("change", (event) => {
    audioManager.toggleSfx(!event.target.checked);
    setTimeout(function(){
        audioManager.playClick2Sfx();
    }, 100);
}); // Ensure this matches the opening block
   
    document.getElementById("BGMcheckbox").addEventListener("change", (event) => {
        audioManager.toggleBgMusic(!event.target.checked);
        audioManager.playClick2Sfx();
      });
      
 

  loadEquipCatalog();

  // Navigation event listeners
  document.getElementById("to-science-menu-button").addEventListener("click", () => {
     audioManager.playClick2Sfx();
     homePage.style.display = "none";
      ScienceMenu.style.display = "block";
  });

  document.getElementById("to-science-button").addEventListener("click", () => {
      ScienceMenu.style.display = "none";
      ScienceCatalog.style.display = "block";
      resetSearchAndSort();
      loadEquipCatalog();
  });

  document.getElementById("to-scienceexp-button").addEventListener("click", () => {
    ScienceMenu.style.display = "none";
    ScienceExperimentsCatalog.style.display = "block";
    loadExperimentCatalog();
});

document.getElementById("science-b-expdetails-to-catalog").addEventListener("click", () => {
    ScienceExpDetails.style.display = "none";
    ScienceExperimentsCatalog.style.display = "block";
    loadExperimentCatalog();
});

document.getElementById("experiment-b-expcatalog-to-menu").addEventListener("click", () => {
    ScienceExperimentsCatalog.style.display = "none";
    ScienceMenu.style.display = "block";
}); 

  document.getElementById("science-b-menu-to-home").addEventListener("click", () => {
      ScienceMenu.style.display = "none";
      homePage.style.display = "block";
  });

  document.getElementById("quiz-to-home").addEventListener("click", () => {
    ScoreSection.style.display = "none";
    homePage.style.display = "block";
});

  document.getElementById("science-b-catalog-to-menu").addEventListener("click", () => {
    ScienceCatalog.style.display = "none";
    ScienceMenu.style.display = "block";
});

  document.getElementById("science-b-details-to-catalog").addEventListener("click", () => {
      ScienceDetails.style.display = "none";
      ScienceCatalog.style.display = "block";
      resetSearchAndSort();
      loadEquipCatalog();
  });

  document.getElementById("science-to-fav").addEventListener("click", () => {
      ScienceMenu.style.display = "none";
      ScienceFavorites.style.display = "block";
      displayFavorites();
      console.log(favorites);
  });

  document.getElementById("science-b-fav-to-home").addEventListener("click", () => {
      ScienceFavorites.style.display = "none";
      ScienceMenu.style.display = "block";
  });

//tle

  document.getElementById("to-tle-menu-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    homePage.style.display = "none";
    TLEMenu.style.display = "block";
});

document.getElementById("to-tle-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    TLEMenu.style.display = "none";
    TLECatalog.style.display = "block";
    TLEresetSearchAndSort();
    loadTLEEquipCatalog();
});

document.getElementById("tle-to-fav").addEventListener("click", () => {
    TLEMenu.style.display = "none";
    TLEFavoritesPage.style.display = "block";
    displayTLEFavorites();
});

document.getElementById("tle-b-fav-to-home").addEventListener("click", () => {
    TLEFavoritesPage.style.display = "none";
    TLEMenu.style.display = "block";
});

document.getElementById("tle-b-menu-to-home").addEventListener("click", () => {
    TLEMenu.style.display = "none";
     homePage.style.display = "block";
    });
  
    document.getElementById("tle-b-details-to-catalog").addEventListener("click", () => {
        TLECatalog.style.display = "block";
        TLEDetails.style.display = "none";
        TLEresetSearchAndSort();
 });

 document.getElementById("tle-b-to-menu").addEventListener("click", () => {
    TLECatalog.style.display = "none";
     TLEMenu.style.display = "block";
    });


    //Com

document.getElementById("to-Com-menu-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    homePage.style.display = "none";
    ComMenu.style.display = "block";
});

document.getElementById("to-Com-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    ComMenu.style.display = "none";
    ComCatalog.style.display = "block";
    ComresetSearchAndSort();
    loadComEquipCatalog();
});

document.getElementById("Com-to-fav").addEventListener("click", () => {
    ComMenu.style.display = "none";
    ComFavoritesPage.style.display = "block";
    displayComFavorites();
});

document.getElementById("Com-b-fav-to-home").addEventListener("click", () => {
    ComFavoritesPage.style.display = "none";
    ComMenu.style.display = "block";
});

document.getElementById("Com-b-menu-to-home").addEventListener("click", () => {
    ComMenu.style.display = "none";
     homePage.style.display = "block";
    });
  
    document.getElementById("Com-b-details-to-catalog").addEventListener("click", () => {
        ComCatalog.style.display = "block";
        ComDetails.style.display = "none";
        ComresetSearchAndSort();
 });

 document.getElementById("Com-b-to-menu").addEventListener("click", () => {
    ComCatalog.style.display = "none";
     ComMenu.style.display = "block";
    });


 //aboutus

  document.getElementById("to-about-us-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    homePage.style.display = "none";
    AboutUs.style.display = "block";
});

document.getElementById("about-to-home").addEventListener("click", () => {
  homePage.style.display = "block";
  AboutUs.style.display = "none";
});

//aboutus

document.getElementById("to-settings-button").addEventListener("click", () => {
    audioManager.playClick2Sfx();
    homePage.style.display = "none";
    Settings.style.display = "block";
});

document.getElementById("settings-to-home").addEventListener("click", () => {
  homePage.style.display = "block";
  Settings.style.display = "none";
});

  // Load equipment catalog data
  async function loadEquipCatalog() {
    try {
        populateCategorySorter(catalogData);
        displayScienceCatalog();
    } catch (error) {
        console.error("Error loading catalog data:", error);
        ScienceCatalogContainer.innerHTML = "<p>Error loading catalog data. Please try again later.</p>";
    }
}

  function populateCategorySorter(data) {
    const categories = new Set(data.map(item => item.category));

    const sortedCategories = Array.from(categories).sort();

    categorySorter.innerHTML = '<option value="all">All Equipments</option>';

    sortedCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySorter.appendChild(option);
    });
}

function getFilteredAndSortedScienceData() {
    const searchTerm = ScisearchInput.value.toLowerCase();
    const selectedCategory = categorySorter.value;

    // Filter
    let filteredData = catalogData.filter(item => {
        return (!searchTerm || item.title.toLowerCase().includes(searchTerm)) &&
               (selectedCategory === "all" || item.category === selectedCategory);
    });

    // Sort
    const sortOrder = sorter.value;
    filteredData.sort((a, b) => {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });
    
    console.log(filteredData);

    return filteredData;
} 


function displayScienceCatalog() {
    const dataToDisplay = getFilteredAndSortedScienceData();
    ScienceCatalogContainer.innerHTML = ""; 

    if (dataToDisplay.length === 0) {
        ScienceCatalogContainer.innerHTML = "<p>No equipment found.</p>";
        return;
    }

    dataToDisplay.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title;

          const h2 = document.createElement("h2");
          h2.textContent = item.title;

          // Favorite star icon
          const favButton = document.createElement("span");
          const isFavorite = favorites.includes(item.title);
          favButton.innerHTML = isFavorite ? "★" : "☆"; // Full star if favorite, empty star if not
          favButton.style.color = isFavorite ? "gold" : "gray";
          favButton.classList.add("fav-button");

          favButton.addEventListener("click", (e) => {
              e.stopPropagation(); // Prevent triggering showDetails when clicking the star
              toggleFavorite(item.title);
              favButton.innerHTML = favorites.includes(item.title) ? "★" : "☆";
              favButton.style.color = favorites.includes(item.title) ? "gold" : "gray";
              showNotification(favorites.includes(item.title) ? "Bookmarked!" : "Removed from Bookmarks.");
          });

          // Append everything to the itemDiv
          itemDiv.appendChild(img);
          itemDiv.appendChild(h2);
          itemDiv.appendChild(favButton);
          ScienceCatalogContainer.appendChild(itemDiv);

          // Open item details on click
          itemDiv.addEventListener("click", () => showDetails(item));
      });
  }

  function showDetails(item) {
    ScienceCatalog.style.display = "none";
    ScienceFavorites.style.display = "none";
    ScienceDetails.style.display = "block";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const isFavorite = favorites.includes(item.title);
    const favButton = document.createElement("span");
    favButton.innerHTML = isFavorite ? "★" : "☆";
    favButton.classList.add("fav-button");
    favButton.style.color = isFavorite ? "gold" : "gray";

    favButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(item.title);
        const nowFavorite = favorites.includes(item.title);
        favButton.innerHTML = nowFavorite ? "★" : "☆";
        favButton.style.color = nowFavorite ? "gold" : "gray";
        showNotification(nowFavorite ? "Bookmarked!" : "Removed from bookmarks.");
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(favButton);

    equipmentDetails.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <p style="font-size:1.8rem"><b>Description</b></p>
    <p style="font-size:1.1rem">${item.description}</p>
    <p style="font-size:1.3rem"><b>How to Use</b></p>
    <p style="font-size:1rem">${item.howtouse}</p>  
    <p style="font-size:1.3rem"><b>Reminder</b></p>
    <p style="font-size:1rem">${item.cautions}</p> 
    <p style="font-size:1.3rem"><b>Date of Discovery</b></p>
    <p style="font-size:1rem">${item.history}</p>
`;
    equipmentDetails.prepend(titleContainer);
}

  function showNotification(message) {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => {
          notification.style.opacity = "0";
          setTimeout(() => notification.remove(), 500);
      }, 1500);
  }

  // Display the -favorites
  function displayFavorites() {
      scifavoritesContainer.innerHTML = ""; // Clear existing content

      if (favorites.length === 0) {
          scifavoritesContainer.innerHTML = "<p>No bookmarks added.</p>";
          return;
      }

      // Iterate over -favorites and add to scifavoritesContainer
      favorites.forEach(favTitle => {
          const item = catalogData.find(e => e.title === favTitle);
          if (item) {
              const itemDiv = document.createElement("div");
              itemDiv.classList.add("item");

              const img = document.createElement("img");
              img.src = item.image;
              img.alt = item.title;

              const h2 = document.createElement("h2");
              h2.textContent = item.title;

              // Favorite star icon for -favorites page
              const favButton = document.createElement("span");
              favButton.innerHTML = "★"; // Always filled star since it's a favorite
              favButton.style.color = "gold";
              favButton.classList.add("fav-button");

              itemDiv.appendChild(img);
              itemDiv.appendChild(h2);
              itemDiv.appendChild(favButton);
              scifavoritesContainer.appendChild(itemDiv);

              // Show item details on click
              itemDiv.addEventListener("click", () => showDetails(item));
          }
      });
  }

  function toggleFavorite(itemTitle) {
    const index = favorites.indexOf(itemTitle);
    if (index === -1) {
        favorites.push(itemTitle);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem("SciFavorites", JSON.stringify(favorites));
}

  function resetSearchAndSort() {
      ScisearchInput.value = "";
      sorter.value = "asc"; // Reset to ascending
      categorySorter.value = "all"; // Reset to all categories
      displayScienceCatalog(); // Update catalog display
  }

  function TLEresetSearchAndSort() {
    TLEsearchInput.value = "";
    sorter.value = "asc"; // Reset to ascending
    categorySorter.value = "all"; // Reset to all categories
    displayTLECatalog(); // Update catalog display
}

function ComresetSearchAndSort() {
    ComsearchInput.value = "";
    sorter.value = "asc"; // Reset to ascending
    categorySorter.value = "all"; // Reset to all categories
    displayComCatalog(); // Update catalog display
}


  // Load equipment catalog data
  async function loadExperimentCatalog() {
    try {
        const response = await fetch("./json/sciexperiments.json?nocache=" + new Date().getTime());
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        ExpcatalogData = await response.json();
        displayScienceExperimentCatalog(ExpcatalogData);
        console.log("h")
    } catch (error) {
        console.error("Error loading catalog data:", error);
        ScienceExperimentsCatalogContainer.innerHTML = "<p>Error loading catalog data. Please try again later.</p>";
    } 
}

function displayScienceExperimentCatalog() {
    const dataToDisplay = ExpegetFilteredAndSortedData();
    ScienceExperimentsCatalogContainer.innerHTML = ""; 

    if (dataToDisplay.length === 0) {
        ScienceExperimentsCatalogContainer.innerHTML = "<p>No experiment found.</p>";
        return;
    }

    dataToDisplay.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title;

          const h2 = document.createElement("h2");
          h2.textContent = item.title;

          // Append everything to the itemDiv
          itemDiv.appendChild(img);
          itemDiv.appendChild(h2);
          ScienceExperimentsCatalogContainer.appendChild(itemDiv);

          // Open item details on click
          itemDiv.addEventListener("click", () => showExperimentsDetails(item));
      });
  }

  function ExpegetFilteredAndSortedData() {
    const searchTerm = TLEsearchInput.value.toLowerCase();
    const selectedCategory = TLEcategorySorter.value;

    // Filter
    let filteredData = ExpcatalogData.filter(item => {
        return (!searchTerm || item.title.toLowerCase().includes(searchTerm)) &&
               (selectedCategory === "all" || item.category === selectedCategory);
    });

    // Sort
    const sortOrder = TLEsorter.value;
    filteredData.sort((a, b) => {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });

    console.log(filteredData);

    return filteredData;
} 


  
  function showExperimentsDetails(item) {
    ScienceExperimentsCatalog.style.display = "none";
    ScienceExpDetails.style.display = "block";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h2");
    title.textContent = item.title;

    titleContainer.appendChild(title);

    experimentDetails.innerHTML = `
    <p style="font-size:1.8rem"><b>Objectives</b></p>
    <p style="font-size:1.1rem">${item.objectives}</p>
    <p style="font-size:1.3rem"><b>Materials</b></p>
    <p style="font-size:1rem">${item.materials}</p>  
    <img src="${item.image1}" alt="${item.title}">
    <p style="font-size:1rem">${item.instruction1}</p> 
          <img src="${item.image2}" alt="${item.title}">
    <p style="font-size:1rem">${item.instruction2}</p> 
        <img src="${item.image3}" alt="${item.title}">
  <p style="font-size:1.3rem"><b>Guide Questions</b></p>
    <p style="font-size:1rem">${item.guidequestions}</p> 
                    <p style="font-size:1rem"><b>References</b></p>
    <p style="font-size:0.8rem">${item.references}</p> 
`;
experimentDetails.prepend(titleContainer);
} 

 

  

//tle

  async function loadTLEEquipCatalog() {

    try {
        TLEpopulateCategorySorter(TLEcatalogData);
        displayTLECatalog();
    } catch (error) {
        console.error("Error loading catalog data:", error);
        TLECatalog.innerHTML = "<p>Error loading catalog data. Please try again later.</p>";
    }
}

function TLEpopulateCategorySorter(data) {
    const categories = new Set(data.map(item => item.category));

    const sortedCategories = Array.from(categories).sort();

    TLEcategorySorter.innerHTML = '<option value="all">All Equipments</option>';

    sortedCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        TLEcategorySorter.appendChild(option);
    });
}

  function TLEgetFilteredAndSortedData() {
      const searchTerm = TLEsearchInput.value.toLowerCase();
      const selectedCategory = TLEcategorySorter.value;

      // Filter
      let filteredData = TLEcatalogData.filter(item => {
          return (!searchTerm || item.title.toLowerCase().includes(searchTerm)) &&
                 (selectedCategory === "all" || item.category === selectedCategory);
      });

      // Sort
      const sortOrder = TLEsorter.value;
      filteredData.sort((a, b) => {
          return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      });

      console.log(filteredData);

      return filteredData;
  } 
 
 


function displayTLECatalog() {
    const dataToDisplay = TLEgetFilteredAndSortedData();
    TLECatalogContainer.innerHTML = ""; 

    if (dataToDisplay.length === 0) {
        TLECatalogContainer.innerHTML = "<p>No equipment found.</p>";
        return;
    }
    dataToDisplay.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const h2 = document.createElement("h2");
        h2.textContent = item.title;

        // Favorite star icon
        const favButton = document.createElement("span");
        const isFavorite = TLEfavorites.includes(item.title);
        favButton.innerHTML = isFavorite ? "★" : "☆"; // Full star if favorite, empty star if not
        favButton.style.color = isFavorite ? "gold" : "gray";
        favButton.classList.add("fav-button");
 
        favButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering showDetails when clicking the star
            toggleTLEFavorites(item.title);
            favButton.innerHTML = TLEfavorites.includes(item.title) ? "★" : "☆";
            favButton.style.color = TLEfavorites.includes(item.title) ? "gold" : "gray";
            showNotification(TLEfavorites.includes(item.title) ? "Bookmarked!" : "Removed from Bookmarks.");
        });

        // Append everything to the itemDiv
        itemDiv.appendChild(img);
        itemDiv.appendChild(h2);
        itemDiv.appendChild(favButton);
        TLECatalogContainer.appendChild(itemDiv);
   
        // Open item details on click
        itemDiv.addEventListener("click", () => showTLEDetails(item));
    });
}


  // Display the -favorites
  function displayTLEFavorites() {
    TLEfavoritesContainer.innerHTML = ""; // Clear existing content

    if (TLEfavorites.length === 0) {
        TLEfavoritesContainer.innerHTML = "<p>No bookmarks added.</p>";
        return;
    }

    // Iterate over -favorites and add to scifavoritesContainer
    TLEfavorites.forEach(favTitle => {
        const item = TLEcatalogData.find(e => e.title === favTitle);
        if (item) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title;

            const h2 = document.createElement("h2");
            h2.textContent = item.title;

            // Favorite star icon for -favorites page
            const favButton = document.createElement("span");
            favButton.innerHTML = "★"; // Always filled star since it's a favorite
            favButton.style.color = "gold";
            favButton.classList.add("fav-button");

            itemDiv.appendChild(img);
            itemDiv.appendChild(h2);
            itemDiv.appendChild(favButton);
            TLEfavoritesContainer.appendChild(itemDiv);

            // Show item details on click
            itemDiv.addEventListener("click", () => showTLEDetails(item));
        }
    });
}

function showTLEDetails(item) {
    TLECatalog.style.display = "none";
    TLEFavoritesPage.style.display = "none";
    TLEDetails.style.display = "block";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const isFavorite = TLEfavorites.includes(item.title);
    const favButton = document.createElement("span");
    favButton.innerHTML = isFavorite ? "★" : "☆";
    favButton.classList.add("fav-button");
    favButton.style.color = isFavorite ? "gold" : "gray";

    favButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleTLEFavorites (item.title);
        const nowFavorite = TLEfavorites.includes(item.title);
        favButton.innerHTML = nowFavorite ? "★" : "☆";
        favButton.style.color = nowFavorite ? "gold" : "gray";
        showNotification(nowFavorite ? "Bookmarked!" : "Removed from bookmarks.");
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(favButton);

    TLEequipmentDetails.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <p style="font-size:1.8rem"><b>Description</b></p>
    <p style="font-size:1.1rem">${item.description}</p>
    <p style="font-size:1.3rem"><b>How to Use</b></p>
    <p style="font-size:1rem">${item.howtouse}</p>  
    <p style="font-size:1.3rem"><b>Reminder</b></p>
    <p style="font-size:1rem">${item.cautions}</p> 
    <p style="font-size:1.3rem"><b>Date of Discovery</b></p>
    <p style="font-size:1rem">${item.history}</p>
`; 
    TLEequipmentDetails.prepend(titleContainer);
}

function toggleTLEFavorites (itemTitle) {
    const index = TLEfavorites.indexOf(itemTitle);
    if (index === -1) {
        TLEfavorites.push(itemTitle);
    } else {
        TLEfavorites.splice(index, 1);
    }
    localStorage.setItem("TLEfavorites", JSON.stringify(TLEfavorites));
}
 


async function loadComEquipCatalog() {

    try {
        CompopulateCategorySorter(ComcatalogData);
        displayComCatalog();
    } catch (error) {
        console.error("Error loading catalog data:", error);
        ComCatalog.innerHTML = "<p>Error loading catalog data. Please try again later.</p>";
    }
} 

function CompopulateCategorySorter(data) {
    const categories = new Set(data.map(item => item.category));

    const sortedCategories = Array.from(categories).sort();

    ComcategorySorter.innerHTML = '<option value="all">All Equipments</option>';

    sortedCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        ComcategorySorter.appendChild(option);
    });
}


function ComgetFilteredAndSortedData() {
    const searchTerm = ComsearchInput.value.toLowerCase();
    const selectedCategory = ComcategorySorter.value;

    // Filter
    let filteredData = ComcatalogData.filter(item => {
        return (!searchTerm || item.title.toLowerCase().includes(searchTerm)) &&
               (selectedCategory === "all" || item.category === selectedCategory);
    });
 
    // Sort
    const sortOrder = Comsorter.value;
    filteredData.sort((a, b) => {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });

    console.log(filteredData);

    return filteredData;
} 


function displayComCatalog() {
    const dataToDisplay = ComgetFilteredAndSortedData();
    ComCatalogContainer.innerHTML = ""; 

    if (dataToDisplay.length === 0) {
        ComCatalogContainer.innerHTML = "<p>No equipment found.</p>";
        return;
    }
    dataToDisplay.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const h2 = document.createElement("h2");
        h2.textContent = item.title;

        // Favorite star icon
        const favButton = document.createElement("span");
        const isFavorite = Comfavorites.includes(item.title);
        favButton.innerHTML = isFavorite ? "★" : "☆"; // Full star if favorite, empty star if not
        favButton.style.color = isFavorite ? "gold" : "gray";
        favButton.classList.add("fav-button");
 
        favButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering showDetails when clicking the star
            toggleComFavorites(item.title);
            favButton.innerHTML = Comfavorites.includes(item.title) ? "★" : "☆";
            favButton.style.color = Comfavorites.includes(item.title) ? "gold" : "gray";
            showNotification(Comfavorites.includes(item.title) ? "Bookmarked!" : "Removed from Bookmarks.");
        });

        // Append everything to the itemDiv
        itemDiv.appendChild(img);
        itemDiv.appendChild(h2);
        itemDiv.appendChild(favButton);
        ComCatalogContainer.appendChild(itemDiv);
   
        // Open item details on click
        itemDiv.addEventListener("click", () => showComDetails(item));
    });
}


  // Display the -favorites
  function displayComFavorites() {
    ComfavoritesContainer.innerHTML = ""; // Clear existing content

    if (Comfavorites.length === 0) {
        ComfavoritesContainer.innerHTML = "<p>No bookmarks added.</p>";
        return;
    }

    // Iterate over -favorites and add to scifavoritesContainer
    Comfavorites.forEach(favtitle => {
        const item = ComcatalogData.find(e => e.title === favtitle);
        if (item) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title;

            const h2 = document.createElement("h2");
            h2.textContent = item.title;

            // Favorite star icon for -favorites page
            const favButton = document.createElement("span");
            favButton.innerHTML = "★"; // Always filled star since it's a favorite
            favButton.style.color = "gold";
            favButton.classList.add("fav-button");

            itemDiv.appendChild(img);
            itemDiv.appendChild(h2);
            itemDiv.appendChild(favButton);
            ComfavoritesContainer.appendChild(itemDiv);

            // Show item details on click
            itemDiv.addEventListener("click", () => showComDetails(item));
        }
    });
}

function showComDetails(item) {
    ComCatalog.style.display = "none";
    ComFavoritesPage.style.display = "none";
    ComDetails.style.display = "block";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const isFavorite = Comfavorites.includes(item.title);
    const favButton = document.createElement("span");
    favButton.innerHTML = isFavorite ? "★" : "☆";
    favButton.classList.add("fav-button");
    favButton.style.color = isFavorite ? "gold" : "gray";

    favButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleComFavorites (item.title);
        const nowFavorite = Comfavorites.includes(item.title);
        favButton.innerHTML = nowFavorite ? "★" : "☆";
        favButton.style.color = nowFavorite ? "gold" : "gray";
        showNotification(nowFavorite ? "Bookmarked!" : "Removed from bookmarks.");
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(favButton);

    ComequipmentDetails.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <p style="font-size:1.8rem"><b>Description</b></p>
    <p style="font-size:1.1rem">${item.description}</p>
    <p style="font-size:1.3rem"><b>How to Use</b></p>
    <p style="font-size:1rem">${item.howtouse}</p>  
    <p style="font-size:1.3rem"><b>Reminder</b></p>
    <p style="font-size:1rem">${item.cautions}</p> 
    <p style="font-size:1.3rem"><b>Date of Discovery</b></p>
    <p style="font-size:1rem">${item.history}</p>
`; 
    ComequipmentDetails.prepend(titleContainer);
}

function toggleComFavorites (itemtitle) {
    const index = Comfavorites.indexOf(itemtitle);
    if (index === -1) {
        Comfavorites.push(itemtitle);
    } else {
        Comfavorites.splice(index, 1);
    }
    localStorage.setItem("Comfavorites", JSON.stringify(Comfavorites));
}


categorySorter.addEventListener("change", () => {
    displayScienceCatalog(); // Re-render based on the current category selection
});
TLEcategorySorter.addEventListener("change", () => {
    displayTLECatalog(); // Re-render based on the current category selection
});
ComcategorySorter.addEventListener("change", () => {
    displayComCatalog(); // Re-render based on the current category selection
});

sorter.addEventListener("change", () => {
    displayScienceCatalog(); // Re-render based on the current category selection
});
TLEsorter.addEventListener("change", () => {
    displayTLECatalog(); // Re-render based on the current category selection
});
Comsorter.addEventListener("change", () => {
    displayComCatalog(); // Re-render based on the current category selection
});

ScisearchInput.addEventListener("input", () => {
    const searchTerm = ScisearchInput.value.toLowerCase();
    const filteredData = catalogData.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );
    displayScienceCatalog(filteredData); // Re-render with filtered data
});
TLEsearchInput.addEventListener("input", () => {
    const searchTerm = ScisearchInput.value.toLowerCase();
    const filteredData = catalogData.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );
    displayTLECatalog(filteredData); // Re-render with filtered data
});
ComsearchInput.addEventListener("input", () => {
    const searchTerm = ScisearchInput.value.toLowerCase();
    const filteredData = catalogData.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );
    displayComCatalog(filteredData); // Re-render with filtered data
});

 // Sample Questions
let questions = [
  {
      question: "What type of lamp is commonly used in laboratories for heating and combustion, typically containing a wick that burns alcohol?",
      options: ["Beaker", "Alcohol Lamp", "Bunsen Burner", "Crucible"],
      answer: "Alcohol Lamp"
  },
  {
      question: "Which laboratory container, known for its cylindrical shape, is primarily used for mixing and heating liquids and often includes graduated markings?",
      options: ["Florence Flask", "Erlenmeyer Flask", "Test Tube", "Beaker"],
      answer: "Beaker"
  },
  {
      question: "What is the name of the laboratory tool that produces a single open flame, adjustable for intensity and color, typically used for heating and sterilization?",
      options: ["Alcohol Lamp", "Bunsen Burner", "Hot Plate", "Crucible"],
      answer: "Bunsen Burner"
  },
  {
      question: "Which small, heat-resistant container is used in labs to heat chemical compounds to very high temperatures and often comes with a cover?",
      options: ["Beaker", "Crucible with Cover", "Erlenmeyer Flask", "Volumetric Flask"],
      answer: "Crucible with Cover"
  },
  {
      question: "What laboratory flask has a distinctive rounded body and narrow neck, primarily used for heating, boiling, and distilling liquids?",
      options: ["Erlenmeyer Flask", "Florence Flask", "Graduated Cylinder", "Test Tube"],
      answer: "Florence Flask"
  },
  {
      question: "Which type of flask, with its conical shape and narrow neck, is particularly useful for safely mixing and heating solutions without spillage?",
      options: ["Erlenmeyer Flask", "Florence Flask", "Graduated Cylinder", "Volumetric Flask"],
      answer: "Erlenmeyer Flask"
  },
  {
      question: "What instrument is a narrow, calibrated tube specifically designed for transferring small volumes of liquid with precision?",
      options: ["Glass Pipette", "Measuring Cup", "Graduated Cylinder", "Beaker"],
      answer: "Glass Pipette"
  },
  {
      question: "What apparatus is used to accurately measure liquid volumes and is marked with precise measurements?",
      options: ["Graduated Cylinder", "Bunsen Burner", "Test Tube", "Crucible"],
      answer: "Graduated Cylinder"
  },
  {
      question: "Which device is used to observe microscopic specimens, utilizing a combination of lenses to magnify small details?",
      options: ["Bunsen Burner", "Microscope", "Pipette", "Glove"],
      answer: "Microscope"
  },
  {
      question: "What is the purpose of a watch glass, which is a shallow, concave glass dish in laboratory settings?",
      options: ["Holding liquids", "Evaporating samples", "Lid for beakers", "All of the above"],
      answer: "All of the above"
  },
  {
      question: "What tool is commonly used in laboratories for grinding and mixing substances, consisting of a bowl and a club-shaped tool?",
      options: ["Mortar and Pestle", "Bunsen Burner", "Evaporating Dish", "Crucible"],
      answer: "Mortar and Pestle"
  },
  {
      question: "Which model assists in visualizing the stages of meiosis in animals, designed for educational purposes in biology?",
      options: ["Animal Meiosis Model", "Human Reproductive Model", "Mitochondria Model", "Human Ear Model"],
      answer: "Animal Meiosis Model"
  },
  {
      question: "What is a common use of a specimen container in laboratory settings?",
      options: ["Holding chemicals", "Transportation of samples", "Storing equipment", "Measuring lengths"],
      answer: "Transportation of samples"
  },
  {
      question: "What device allows scientists to measure elapsed time accurately and is used in various settings such as sports and lab experiments?",
      options: ["Stopwatch", "Timer", "Clock", "Chronometer"],
      answer: "Stopwatch"
  },
  {
      question: "What type of safety eyewear is essential for protecting the eyes from chemical splashes and harmful light in laboratories?",
      options: ["Goggles", "Glasses", "Masks", "Face shields"],
      answer: "Goggles"
  },
  {
      question: "Which structure in plant cells is responsible for photosynthesis and contains thylakoids and stroma?",
      options: ["Chloroplast", "Mitochondria", "Nucleus", "Cell Wall"],
      answer: "Chloroplast"
  },
  {
      question: "The human respiratory system model illustrates which of the following components?",
      options: ["Brain", "Trachea", "Heart", "Stomach"],
      answer: "Trachea"
  },
  {
      question: "Which model represents both male and female reproductive organs and is used for educational discussions about human anatomy?",
      options: ["Reproductive System Model", "Circulatory System Model", "Digestive System Model", "Nervous System Model"],
      answer: "Reproductive System Model"
  },
  {
      question: "What early tool for measuring temperature often contained mercury or alcohol and is critical in laboratory settings?",
      options: ["Barometer", "Thermometer", "Anemometer", "Sphygmomanometer"],
      answer: "Thermometer"
  },
  {
      question: "What type of laboratory tool consists of three sliding weights on a beam for accurately measuring mass?",
      options: ["Triple Beam Balance", "Digital Scale", "Pan Scale", "Graduated Cylinder"],
      answer: "Triple Beam Balance"
  },
  {
      question: "Which model illustrates the various stages of human embryonic development and is crucial in biology studies?",
      options: ["Human Embryo Model", "Mitochondria Model", "Prostate Model", "Skeletal Model"],
      answer: "Human Embryo Model"
  },
  {
      question: "What laboratory equipment can enhance precision when mixing and measuring liquids and is essential in both culinary and scientific fields?",
      options: ["Measuring Cups", "Beakers", "Flasks", "Test Tubes"],
      answer: "Measuring Cups"
  },
  {
      question: "What is the primary function of a protractor in geometry and drafting tasks?",
      options: ["Measuring angles", "Drawing straight lines", "Calculating areas", "Creating graphs"],
      answer: "Measuring angles"
  },
  {
      question: "Which device is often used to hold and secure multiple test tubes during laboratory experiments?",
      options: ["Test Tube Rack", "Beaker", "Graduated Cylinder", "Flask"],
      answer: "Test Tube Rack"
  },
  {
      question: "The anatomical fish model highlights what type of systems within its structure for educational purposes?",
      options: ["Respiratory and Digestive", "Circulatory and Nervous", "Digestive and Reproductive", "All of the above"],
      answer: "All of the above"
  },
  {
      question: "What type of glassware is specifically designed to hold chemicals safely during reactions and typically features an airtight seal?",
      options: ["Reagent Bottle", "Test Tube", "Graduated Cylinder", "Flask"],
      answer: "Reagent Bottle"
  },
  {
      question: "In the context of laboratory safety, what type of gloves should be used to prevent contamination and protect hands from hazards?",
      options: ["Latex Gloves", "Nitrile Gloves", "Vinyl Gloves", "All of the above"],
      answer: "All of the above"
  },
  {
      question: "What tool is specifically designed for measuring a substance's ability to conduct electricity in laboratory settings?",
      options: ["Multimeter", "Spring Scale", "Electrical Conductivity Apparatus", "Voltmeter"],
      answer: "Electrical Conductivity Apparatus"
  },
  {
      question: "Which model depicts the sequence of stages of human digestion and is an important tool for understanding the digestive process?",
      options: ["Digestive System Model", "Respiratory System Model", "Muscular System Model", "Skeletal Model"],
      answer: "Digestive System Model"
  },
  {
      question: "What laboratory equipment, characterized by its low profile and wide surface area, is used to heat solutions while allowing for easy observation?",
      options: ["Evaporating Dish", "Graduated Cylinder", "Crucible", "Beaker"],
      answer: "Evaporating Dish"
  },
  {
      question: "Which model represents the important structures involved in the human endocrine system, including glands like the thyroid and adrenal glands?",
      options: ["Human Endocrine Model", "Nervous System Model", "Digestive Model", "Reproductive Model"],
      answer: "Human Endocrine Model"
  },
  
  {
      question: "To properly use a microscope, what needs to be placed on a slide before positioning it under the lens?",
      options: ["Liquid", "Tissue Sample", "Dust", "Petri Dish"],
      answer: "Tissue Sample"
  },
  {
      question: "The lunar model in educational settings, which helps illustrate celestial objects' movements, is known as what?",
      options: ["Celestial Globe", "Solar System Model", "Lunar Phase Chart", "Earth Orbit Model"],
      answer: "Celestial Globe"
  },
  {
      question: "What is a detailed anatomical replica designed to educate about the male reproductive organs, such as testes and prostate?",
      options: ["Male Reproductive System Model", "Frog Dissection Model", "Human Anatomy Model", "Animal Meiosis Model"],
      answer: "Male Reproductive System Model"
  },
  {
      question: "What device allows for the accurate and precise measurement of various lengths and typically features a flexible tape?",
      options: ["Meter Stick", "Ruler", "Protractor", "Caliper"],
      answer: "Meter Stick"
  },
  {
      question: "Which smaller, portable device simulates volcanic eruptions to help learners understand geological concepts?",
      options: ["Test Tube", "Volcanic Model", "Crucible", "Bunsen Burner"],
      answer: "Volcanic Model"
  },
  {
      question: "What laboratory model assists students in understanding the important process of photosynthesis through the representation of chloroplasts?",
      options: ["Plant Cell Model", "Chloroplast Model", "Animal Cell Model", "Human Anatomy Model"],
      answer: "Chloroplast Model"
  },
  {
      question: "Which model demonstrates the intricate structure of mitochondria, which are crucial for cellular energy production?",
      options: ["Cellular Model", "Mitochondria Model", "Chloroplast Model", "DNA Model"],
      answer: "Mitochondria Model"
  }
];

//tle
let tlequestions = [
  {
      question: "A tool used with sharp surfaces for shredding, grating, or slicing ingredients.",
      options: ["Knife", "Grater", "Citrus Reamer", "Colander"],
      answer: "Grater"
  },
  {
      question: "A tool that adds elegance to any dining table, ideal for serving salads or soups.",
      options: ["Wooden Spoon", "Plastic Cup", "Ceramic Bowl", "Metal Tray"],
      answer: "Ceramic Bowl"
  },
  {
      question: "A tool used as a protective surface on which to cut or slice food.",
      options: ["Chopping Board", "Plastic Lunch Box", "Colander", "Dinner Plate"],
      answer: "Chopping Board"
  },
  {
      question: "A tool used to evenly slice boiled eggs into thin, uniform pieces.",
      options: ["Dough Cutter", "Egg Slicer", "Egg Molder", "Fork"],
      answer: "Egg Slicer"
  },
  {
      question: "A heavy duty scissors used for cutting herbs, poultry, or food packaging.",
      options: ["Kitchen Shears", "Garlic Press", "French Knife", "Food Chopper"],
      answer: "Kitchen Shears"
  },
  {
      question: "A utensil with multiple prongs, used for eating, holding, or picking up food.",
      options: ["Digital Kitchen Scale", "Fork", "Dumpling Molder", "Peeler"],
      answer: "Fork"
  },
  {
      question: "A small, deep pan with a long handle and a lid, for boiling or simmering liquids.",
      options: ["Sauce Pan", "Mixing Bowl", "Portable Gas Stove", "Saucer"],
      answer: "Sauce Pan"
  },
  {
      question: "A rounded utensil with a bowl-like end, used for eating or scooping food.",
      options: ["Tong", "Whisk", "Spoon", "Wooden Spatula"],
      answer: "Spoon"
  },
  {
      question: "A kitchen tool designed to cook food by steaming, preserving its nutrients and natural flavors.",
      options: ["Liquid Measuring Cup", "Tube Pan", "Strainer", "Skimmer"],
      answer: "Strainer"
  },
  {
      question: "A perforated bowl used to drain liquids from cooked pasta, vegetables, or washed produce.",
      options: ["Strainer", "Colander", "Spatula", "Grater"],
      answer: "Colander"
  },
  {
      question: "A multipurpose kitchen knife used for slicing, dicing, chopping, and mincing.  It is a sharp, durable, and a favorite among chefs for its versatility.",
      options: ["Knife", "Kitchen Knife", "French Knife", "Plate"],
      answer: "French Knife"
  },
  {
      question: "A cone-shaped tool used to extract juice from citrus fruits such as lemons, oranges, etc.",
      options: ["Citrus Reamer", "Garlic Press", "Glass Bottle", "Mixing Bowl"],
      answer: "Citrus Reamer"
  },
]

//Com
let Comquestions = [
  {
      question: "It is used to interact with the computer by controlling the cursor on the screen.",
      options: ["Computer Mouse", "Charging Cart", "Ethernal Cable", "Extension Cord"],
      answer: "Computer Mouse"
  },
  {
      question: "It is used to connect a computer to a device's console port, like a router, for configuration and management purposes.",
      options: ["Charging Cart", "Console Cable", "HDMI Splitter", "Power Adaptor"],
      answer: "Console Cable"
  },
  {
      question: "It is used to stabilize and support cameras, video cameras, or other equipment like fishing lights.",
      options: ["Tripod", "Mouse Pod", "Micro Phone", "Power Cord"],
      answer: "Tripod"
  },
  {
      question: "It is used for connecting electrical appliances such as lawnmowers, power tools, vacuum cleaner, and garden equipment.",
      options: ["Cat 6 Cable", "Power Adaptor", "Extension Cord", "Ethernal Cable"],
      answer: "Extension Cord"
  },
  {
      question: "It is used to carry and protect a laptop computer.",
      options: ["Mouse Pad", "Microphone", "Power Cord", "Laptop Bag"],
      answer: "Laptop Bag"
  },
  {
      question: "It connects the racing wheel to a power outlet to charge and operate the device.",
      options: ["Extention Cord", "Power Cord", "Ring Light", "Power Adaptor"],
      answer: "Power Cord"
  },
  {
      question: "It is a device that converts sound waves into electrical signals for recording or amplification.",
      options: ["Spring Clamp", "Tripod", "Tamiya Connector", "Microphone"],
      answer: "Microphone"
  },
  {
      question: "It is a type of lightning fixture that shape like a circle.",
      options: ["Charging Cart", "Ring Light", "Console Cable", "Extension Cord"],
      answer: "Ring Light"
  },
  {
      question: "It is typically used to connect electronic devices, like printers or scanners, to a power outlet.",
      options: ["Computer Mouse", "Ethernal Cable", "2-Prong Power Cord", "Laptop Bag"],
      answer: "2-Prong Power Cord"
  },
  {
      question: "It is designed for musicians,  DJ’s, and entertainers seeking professional sound performance on a budget.",
      options: ["Dynamic Microphone XM180PS", "HDMI Splitter", "Power Adaptor", "Spring Clamp"],
      answer: "Dynamic Microphone XM180PS"
  },
]

let shuffledQuestions = [];
let questionIndex = 0;
let score = 0;
let highestScore = localStorage.getItem('highestScore') ? parseInt(localStorage.getItem('highestScore'), 10) : 0;

let tleshuffledQuestions = [];
let tlequestionIndex = 0;
let tlescore = 0;
let tlehighestScore = localStorage.getItem('tlehighestScore') ? parseInt(localStorage.getItem('highestScore'), 10) : 0;

let ComshuffledQuestions = [];
let ComquestionIndex = 0;
let Comscore = 0;
let ComhighestScore = localStorage.getItem('ComhighestScore') ? parseInt(localStorage.getItem('highestScore'), 10) : 0;
// Shuffle questions randomly
function shuffleQuestions() {
  shuffledQuestions = [...questions];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }
}
function tleshuffleQuestions() {
  tleshuffledQuestions = [...tlequestions];
  for (let i = tleshuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tleshuffledQuestions[i], tleshuffledQuestions[j]] = [tleshuffledQuestions[j], tleshuffledQuestions[i]];
  }
}
function ComshuffleQuestions() {
  ComshuffledQuestions = [...Comquestions];
  for (let i = ComshuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ComshuffledQuestions[i], ComshuffledQuestions[j]] = [ComshuffledQuestions[j], ComshuffledQuestions[i]];
  }
}

// Function to display the next question
function displayQuestion() {
  if (shuffledQuestions.length === 0 || questionIndex < 0 || questionIndex >= shuffledQuestions.length) {
      console.error("No questions available to display.");
      return;
  }

  const currentQuestion = shuffledQuestions[questionIndex];
  document.getElementById("question-container").textContent = `Question ${questionIndex + 1}: ${currentQuestion.question}`;
  
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.className = "option";
      optionElement.addEventListener('click', () => selectAnswer(option, currentQuestion.answer, optionElement));
      optionsContainer.appendChild(optionElement);
  });

  document.getElementById("next-button").disabled = true;
}
function displaytleQuestion() {
  if (tleshuffledQuestions.length === 0 || tlequestionIndex < 0 || tlequestionIndex >= tleshuffledQuestions.length) {
      console.error("No questions available to display.");
      return;
  }

  const currentQuestion = tleshuffledQuestions[tlequestionIndex];
  document.getElementById("question-container").textContent = `Question ${tlequestionIndex + 1}: ${currentQuestion.question}`;
  
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.className = "option";
      optionElement.addEventListener('click', () => selectAnswer(option, currentQuestion.answer, optionElement));
      optionsContainer.appendChild(optionElement);
  });

  document.getElementById("next-button").disabled = true;
}
function displayComQuestion() {
  if (ComshuffledQuestions.length === 0 || ComquestionIndex < 0 || ComquestionIndex >= ComshuffledQuestions.length) {
      console.error("No questions available to display.");
      return;
  }

  const currentQuestion = ComshuffledQuestions[ComquestionIndex];
  document.getElementById("question-container").textContent = `Question ${ComquestionIndex + 1}: ${currentQuestion.question}`;
  
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.className = "option";
      optionElement.addEventListener('click', () => selectAnswer(option, currentQuestion.answer, optionElement));
      optionsContainer.appendChild(optionElement);
  });

  document.getElementById("next-button").disabled = true;
}

// Function to handle answer selection
function selectAnswer(selectedOption, correctAnswer, optionElement) {
  if (selectedOption === correctAnswer) {
      score++;
      optionElement.classList.add('correct');
      CorrectAudio.play();
  } else {
      optionElement.classList.add('wrong');
      WrongAudio.play();
      
      document.querySelectorAll(".option").forEach(option => {
          if (option.textContent === correctAnswer) {
              setTimeout(() => option.classList.add('correct'), 300);
          }
      });
  }

  document.querySelectorAll(".option").forEach(option => {
      option.style.pointerEvents = "none";
  });

  document.getElementById("next-button").disabled = false;
}

// Function to proceed to the next question
function nextQuestion() {
  questionIndex++;
  if (questionIndex < 10) {
      displayQuestion();
  } else {
      showScore();
  }
}
function nexttleQuestion() {
  tlequestionIndex++;
  if (tlequestionIndex < 10) {
      displaytleQuestion();
  } else {
      showtleScore();
  }
}
function nextComQuestion() {
  ComquestionIndex++;
  if (ComquestionIndex < 10) {
      displayComQuestion();
  } else {
      showComScore();
  }
}

// Display the final score
function showScore() {
  SciGame.style.display = "none";
  ScoreSection.style.display = "block";
  CorrectAudio.play();

  if (score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
  }

  ScoreContainer.innerHTML = `
      <p style="font-size:2rem"><b>Your Score:</b></p>
      <p style="font-size:1.5rem">${score} / 10</p>
      <p style="font-size:1.3rem"><b>Highest Score:</b></p>
      <p style="font-size:1rem">${highestScore}</p>
  `;
}
function showScore() {
  TLEGame.style.display = "none";
  ScoreSection.style.display = "block";
  CorrectAudio.play();

  if (score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
  }

  ScoreContainer.innerHTML = `
      <p style="font-size:2rem"><b>Your Score:</b></p>
      <p style="font-size:1.5rem">${score} / 10</p>
      <p style="font-size:1.3rem"><b>Highest Score:</b></p>
      <p style="font-size:1rem">${highestScore}</p>
  `;
}
function showScore() {
  ComGame.style.display = "none";
  ScoreSection.style.display = "block";
  CorrectAudio.play();

  if (score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
  }

  ScoreContainer.innerHTML = `
      <p style="font-size:2rem"><b>Your Score:</b></p>
      <p style="font-size:1.5rem">${score} / 10</p>
      <p style="font-size:1.3rem"><b>Highest Score:</b></p>
      <p style="font-size:1rem">${highestScore}</p>
  `;
}

// Initialize the quiz
function initSciQuiz() {
  console.log("Initializing quiz...");
  score = 0;
  questionIndex = 0;
  shuffleQuestions();
  console.log("Shuffled Questions:", shuffledQuestions);
  if (shuffledQuestions.length > 0) {
      displayQuestion();
  } else {
      console.error("No questions available!");
  }
}
function initTLEQuiz() {
  console.log("Initializing tle quiz...");
  score = 0;
  tlequestionIndex = 0;
  tleshuffleQuestions();
  console.log("Shuffled tle Questions:", tleshuffledQuestions);
  if (tleshuffledQuestions.length > 0) {
      displaytleQuestion();
  } else {
      console.error("No tle questions available!");
  }
}
function initComQuiz() {
  console.log("Initializing quiz...");
  score = 0;
  ComquestionIndex = 0;
  ComshuffleQuestions();
  console.log("Shuffled Questions:", ComshuffledQuestions);
  if (ComshuffledQuestions.length > 0) {
      displayComQuestion();
  } else {
      console.error("No questions available!");
  }
}

// Event Listeners
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("to-science-game-button").addEventListener("click", () => {
  ScienceMenu.style.display = "none";
  SciGame.style.display = "block";
  initSciQuiz();
});
document.getElementById("next-button").addEventListener("click", nexttleQuestion);
document.getElementById("to-tle-game-button").addEventListener("click", () => {
  TLEMenu.style.display = "none";
  TLEGame.style.display = "block";
  initTLEQuiz();
});
document.getElementById("next-button").addEventListener("click", nextComQuestion);
document.getElementById("to-Com-game-button").addEventListener("click", () => {
  ComMenu.style.display = "none";
  ComGame.style.display = "block";
  initComQuiz();
})});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.error("Service Worker failed:", err));
}