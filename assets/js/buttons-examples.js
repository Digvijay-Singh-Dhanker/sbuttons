$(document).ready(function () {
  //default button class
  var defaultClass = "sbtn";
  //button color variations
  var buttonColors = [
    "blue-btn",
    "pink-btn",
    "red-btn",
    "green-btn",
    "yellow-btn",
    "orange-btn",
    "purple-btn",
    "black-btn",
    "white-btn",
  ];
  /**buttons is a list of button type objects tht will be rendered on the page load
   * with their respective class names, labels, children and types.
   *
   * properties with [] are optional
   * @property {string} type  - denotes the type of button and used as the id of the section of that type
   * @property {string} label - denotes the title of the button section, which will also be shown in the sidebar menu
   * @property {string} [classes] - denotes the class that will be assigned to the button on render
   * @property {list} [children] - contains the list of sub-types of a certain type
   * @property {string} [text] - denotes the text to be shown on the button, defaults to default text
   * @property {list} [variations] - contains the button types that don't use buttonColors or don't have normal and rounded button styling
   * @property {boolean} [shouldHaveRoundedType] - indicates if rounded button type should hidden or not, defaults to true
   * @property {boolean} [shouldHaveBlockType] - indicates if block button type should hidden or not, defaults to true
   */
  var buttons = [
    {
      type: "basic",
      label: "Basic Buttons",
      classes: "basic-btn",
      children: [],
      shouldHaveRoundedType: true,
    },
    {
      type: "animated",
      label: "Animated Buttons",
      classes: "",
      children: [
        {
          type: "bounce",
          label: "Bounce",
          classes: "bouncy-btn",
        },
        {
          type: "click",
          label: "Click",
          classes: "click-btn",
        },
        {
          type: "fill-color-down",
          label: "Fill Color - Down",
          classes: "fill-color-btn down-fill",
        },
        {
          type: "fill-color-left",
          label: "Fill Color - Left",
          classes: "fill-color-btn",
        },
        {
          type: "fill-color-right",
          label: "Fill Color - Right",
          classes: "fill-color-btn right-fill",
        },
        {
          type: "fill-color-up",
          label: "Fill Color - Up",
          classes: "fill-color-btn up-fill",
        },
        {
          type: "glow",
          label: "Glow",
          classes: "glow-btn",
        },
        {
          type: "hinge",
          label: "Hinge",
          classes: "hinge-btn",
        },
        {
          type: "invert",
          label: "Invert",
          classes: "invert-btn",
        },
        {
          type: "neon",
          label: "Neon",
          classes: "neon-btn",
        },
        {
          type: "next",
          label: "Next Button",
          classes: "next-arrow-btn",
        },
        {
          type: "nudge",
          label: "Nudge",
          classes: "nudge-btn",
        },
        {
          type: "previous",
          label: "Previous Button",
          classes: "previous-arrow-btn",
        },
        {
          type: "pudding",
          label: "Pudding",
          classes: "pudding-btn",
        },
        {
          type: "pulse",
          label: "Pulse",
          classes: "pulse-btn",
        },
        {
          type: "snake",
          label: "Snake Border",
          classes: "snake-btn",
        },
        {
          type: "ripple",
          label: "Ripple",
          classes: "ripple-btn",
        },
        {
          type: "scale",
          label: "Scale",
          classes: "scale-btn",
        },
        {
          type: "shake",
          label: "Shake",
          classes: "shake-btn",
        },
        {
          type: "shine",
          label: "Shine",
          classes: "shine-btn",
        },
        {
          type: "skew",
          label: "Skew",
          classes: "skew-btn",
        },
        {
          type: "splash",
          label: "Splash",
          classes: "splash-btn",
        },
        {
          type: "transparent",
          label: "Transparent On Hover",
          classes: "transparent-btn",
        },
      ],
    },
    {
      type: "dashed",
      label: "Dashed Buttons",
      classes: "dashed-btn",
      children: [],
    },
    {
      type: "disable",
      classes: "disabled-btn",
      label: "Disabled Buttons",
    },
    {
      type: "hover",
      label: "Hover Buttons",
      classes: "hover-btn",
      children: [],
    },
    {
      type: "icon",
      label: "Icon Buttons",
      classes: "",
      children: [
        {
          type: "add-to-cart",
          label: "Add To Cart Button",
          classes: "add-to-cart-btn",
          text: "Add To Cart",
        },
        {
          type: "appstore",
          label: "App Store Button",
          classes: "appstore-btn",
          variations: [
            {
              classes: "applestore",
              text: "App Store",
            },
            {
              classes: "playstore",
              text: "Google Play",
            },
          ],
        },

        {
          type: "buy-me-coffee",
          label: "Buy Me Coffee Button",
          classes: "buy-me-coffee-btn",
          text: "Buy me coffee",
        },
        {
          type: "chat",
          label: "Chat Box Button",
          classes: "chat-btn",
          text: "",
        },
        {
          type: "download",
          label: "Download Button",
          classes: "download-btn",
          text: "Download",
        },
        {
          type: "drop-down",
          label: "Dropdown Button",
          classes: "drop-down-btn",
          text: "Dropdown Button",
        },
        {
          type: "like",
          label: "Like Button",
          classes: "like-btn",
          text: "",
        },
        {
          type: "play",
          label: "Play Button",
          classes: "play-btn",
          text: "",
        },
        {
          type: "plus",
          label: "Plus Button",
          classes: "plus-btn",
          text: "",
        },
        {
          type: "scroll-to-top",
          label: "Scroll-to-Top Button",
          classes: "scroll-to-top-btn",
          text: "",
        },
        {
          type: "star",
          label: "Star Button",
          classes: "star-btn",
          text: "",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
          variations: [
            {
              classes: "",
              text: "",
            },
          ],
        },
      ],
    },
    {
      type: "outline",
      label: "Outline Buttons",
      classes: "outline-btn",
      children: [],
    },
    {
      type: "social",
      label: "Social Buttons",
      classes: "social-btn",
      variations: [
        {
          classes: "apple",
          text: "Login with Apple",
        },
        {
          classes: "facebook",
          text: "Login with Facebook",
        },
        {
          classes: "flickr",
          text: "Login with Flickr",
        },
        {
          classes: "github",
          text: "Login with Github",
        },
        {
          classes: "google",
          text: "Login with Google",
        },
        {
          classes: "instagram",
          text: "Login with Instagram",
        },
        {
          classes: "linkedin",
          text: "Login with LinkedIn",
        },
        {
          classes: "snapchat",
          text: "Login with Snapchat",
        },
        {
          classes: "twitter",
          text: "Login with Twitter",
        },
        {
          classes: "tumblr",
          text: "Login with Tumblr",
        },
        {
          classes: "weibo",
          text: "Login with Weibo",
        },
      ],
      children: [],
    },
    {
      type: "special",
      label: "Special Buttons",
      classes: "",
      children: [
        {
          type: "play-game",
          label: "Play game Button",
          classes: "play-game-btn",
          text: "",
        },
        {
          type: "retro",
          label: "Retro",
          classes: "retro-btn",
          variations: [
            {
              classes: "",
              text: "Continue",
            },
            {
              classes: "retro-btn-proceed",
              text: "Proceed",
            },
            {
              classes: "retro-btn-reset",
              text: "Reset",
            },
          ],
        },
        {
          type: "rounded-diagonal-tl",
          label: "Rounded Diagonal (Top Left)",
          classes: "rounded-diagonal-tl-btn",
          text: "TopLeft-BottomRight",
          shouldHaveRoundedType: false,
        },
        {
          type: "rounded-diagonal-tr",
          label: "Rounded Diagonal (Top Right)",
          classes: "rounded-diagonal-tr-btn",
          text: "TopRight-BottomLeft",
          shouldHaveRoundedType: false,
        },
      ],
    },
  ];

  var sidebar = $(".sidebar-list"),
    content = $("#content");

  /**
   * getButttonHtml generates the required html for each button to be rendered
   *
   * @param {string} classes - refers to the class applied to the button element
   * @param {string} textClasses - refers to the text written below each button
   * @param {string} buttonText - refers to text written in each button
   * @param {boolean} isBlock - indicates if it should be a block button or not
   * @param {boolean} isDisabled - indicates if the button is diplayed as disabled or not
   *
   * @returns {string} - the required button item's html
   */
  function getButtonHtml(
    classes,
    textClasses,
    buttonText,
    isBlock,
    isDisabled
  ) {
    if (buttonText === false) {
      buttonText = "Button";
    }
    return `
            <div class="button-container">
                <button class="${classes}" role="Button"
                  ${isDisabled ? 'aria-disabled="true" tabindex="-1"' : ""}
                  >${buttonText}</button>
                ${!isBlock ? "<br>" : ""}
                <small class="button-caption-sub">${textClasses}</small><br>
            </div>
        `;
  }
  /**
   * getMenuLinkHtml generates each link inside the sidebar menu
   *
   * @param {string} type - refers to the type of button and section's ID it links to
   * @param {string} label - refers to the text written in the link
   * @param {boolean} isSubMenu - indicates if the link is a subLink to any other link
   *
   * @returns {string} - the required menu item's html for sidebar
   */
  function getMenuLinkHtml(type, label, isSubMenu) {
    return (
      '<a href="#' +
      type +
      '" ' +
      (isSubMenu ? 'class="submenu-link" ' : "") +
      ">" +
      label +
      "</a>"
    );
  }

  /**
   * createSection seperates each type of button from others by creating a section
   * and adds those types of buttons to it
   *
   * @param {object} button - the button object section of which has to be created
   * @param {boolean} shouldAddToSidebar - indicates if it will be added to the sidebar or not
   *
   * @returns {string} - the required section's html with all the buttons
   */
  function createSection(button, shouldAddToSidebar) {
    var heading = "h1",
      //if shouldHaveRoundedType is set set the value to it, else by default show rounded buttons
      roundedClass =
        !button.hasOwnProperty("shouldHaveRoundedType") ||
        button.shouldHaveRoundedType,
      //if shouldHaveBlockType is set set the value to it, else by default show block buttons
      blockClass =
        !button.hasOwnProperty("shouldHaveBlockType") ||
        button.shouldHaveBlockType;
    if (shouldAddToSidebar) {
      // add link to sidebar
      sidebar.append(getMenuLinkHtml(button.type, button.label, false));
    } else {
      heading = "h3";
    }

    // Create a new section with same id as the button type
    var section = $('<section id="' + button.type + '">');
    // Adding the required heading to the section
    section.append(
      "<" +
        heading +
        ' class="section-header">' +
        button.label +
        "</" +
        heading +
        ">"
    );

    if (button.hasOwnProperty("children") && button.children.length) {
      // Add children buttons to the section concerned
      var submenu = $('<div class="submenu-links">');
      for (var j = 0; j < button.children.length; j++) {
        var childSection = createSection(button.children[j], false);
        childSection.appendTo(section);
        if (j !== 0) {
          childSection.before('<hr class="secondary-hr">');
        }
        submenu.append(
          getMenuLinkHtml(
            button.children[j].type,
            button.children[j].label,
            true
          )
        );
      }
      sidebar.append(submenu);
    } else {
      var buttonArr = buttonColors;
      var isDisabled = false;
      if (button.hasOwnProperty("variations")) {
        buttonArr = button.variations;
      } else {
        if (button.type === "disable") {
          isDisabled = true;
        }
      }

      // Add buttons to the type's button grid
      var normalButtonsGrid = $('<div class="button-grid">'),
        buttonText = button.hasOwnProperty("text") ? button.text : false;

      // If rounded class is allowed for this button, create a button grid for it
      if (roundedClass) {
        var roundedButtonsGrid = $('<div class="button-grid">');
      }
      // If block class is allowed for this button, create a button grid for it
      if (blockClass) {
        var blockButtonsGrid = $('<div class="button-grid">');
      }
      for (var j = 0; j < buttonArr.length; j++) {
        var thisButtonText =
          buttonText !== false
            ? buttonText
            : buttonArr[j].hasOwnProperty("text")
            ? buttonArr[j].text
            : false;
        var thisButtonClasses = buttonArr[j].hasOwnProperty("classes")
          ? buttonArr[j].classes
          : buttonArr[j];

        // add normal button grid for button
        normalButtonsGrid.append(
          getButtonHtml(
            `${defaultClass} ${button.classes} ${thisButtonClasses}`,
            `.${defaultClass} .${button.classes} .${thisButtonClasses}`,
            thisButtonText,
            false,
            isDisabled
          )
        );
        if (roundedButtonsGrid) {
          //add rounded button grid if enabled for button
          roundedButtonsGrid.append(
            getButtonHtml(
              `${defaultClass} ${button.classes} rounded-btn ${thisButtonClasses}`,
              `.${defaultClass} .${button.classes} .rounded-btn .${thisButtonClasses}`,
              thisButtonText,
              false,
              isDisabled
            )
          );
        }
        if (blockButtonsGrid) {
          //add block button grid if enabled for button
          blockButtonsGrid.append(
            getButtonHtml(
              `${defaultClass} ${button.classes} block-btn ${thisButtonClasses}`,
              `.${defaultClass} .${button.classes} .block-btn .${thisButtonClasses}`,
              thisButtonText,
              true,
              isDisabled
            )
          );
        }
      }
      section.append(normalButtonsGrid);
      roundedClass && roundedButtonsGrid
        ? section.append(roundedButtonsGrid)
        : "";
      blockClass && blockButtonsGrid ? section.append(blockButtonsGrid) : "";
    }
    return section;
  }

  // Main loop that creates all the section and buttons
  for (var i = 0; i < buttons.length; i++) {
    var section = createSection(buttons[i], true);
    // Append all the button sections to the main body
    section.appendTo(content);
  }
  $("#loading_wheel").remove();
});
