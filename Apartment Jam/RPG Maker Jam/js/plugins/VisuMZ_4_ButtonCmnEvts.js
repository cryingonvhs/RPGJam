//=============================================================================
// VisuStella MZ - Button Common Events
// VisuMZ_4_ButtonCmnEvts.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ButtonCmnEvts = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ButtonCommonEvents = VisuMZ.ButtonCommonEvents || {};
VisuMZ.ButtonCommonEvents.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.07] [ButtonCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Button_Common_Events_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, there's only a few keys on your keyboard that perform any kind
 * of action when pressed on the map screen. This plugin allows you to bind
 * Common Events to various other keys to expand the keyboard's functionality.
 * Plugin Commands can be used during the middle of a playthrough to change up
 * which Common Events are bound to each key as well, allowing you, the game
 * dev, to have full control over which keys can be used during the map screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to bind Common Events to the number keys, alphabet keys,
 *   symbols, numpad, and more.
 * * Change which Common Events run during a playthrough.
 * * Clear Common Events from keys to remove any bindings.
 * * Show visible buttons on the screen to indicate which buttons can be
 *   pressed on the keyboard (or with the mouse on the screen).
 * * Apply icons to the visible buttons and change them over time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * alters keystrokes or makes use of them through a different manner. If you
 * are using another plugin that does something with keystrokes on the map
 * screen, the likelihood of clashing can occur if these plugins utilize the
 * same keystrokes and we will not be held accountable for that as it is
 * something within your power to change by simply picking different keys.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the Plugin Parameters, you will see a list of all the keys that you can
 * bind to a Common Event. If that number is something other than 0, then the
 * number associated with it will be the Common Event that will run. If you
 * assign it to a Common Event ID that does not exist, you will get an error so
 * please be wary of that.
 *
 * You may also notice that some of the keys have in parenthesis a word like
 * (OK) or (Cancel) next to them. What this means is that those keys already
 * have a function assigned to them by the game. If you assign a Common Event
 * to these keys and the 'Forbid Default Bound Keys?' Plugin Parameter is set
 * to 'false', then the native function of the key will be removed in favor of
 * the Common Event you've assigned.
 *
 * Here is a list of the keys that already have a command assigned:
 *
 * Key - What they're assigned to
 *   - Q         - Assigned to PageUp
 *   - W         - Assigned to PageDown
 *   - Shift     - Assigned to Dash
 *   - Z         - Assigned to OK
 *   - X         - Assigned to Cancel
 *   - Space     - Assigned to OK
 *   - Left      - Assigned to moving left
 *   - Up        - Assigned to moving up
 *   - Right     - Assigned to moving right
 *   - Down      - Assigned to moving down
 *   - Insert    - Assigned to Cancel
 *   - Page Up   - Assigned to PageUp
 *   - Page Down - Assigned to PageDown
 *   - Numpad 0  - Assigned to Cancel
 *   - Numpad 2  - Assigned to moving down
 *   - Numpad 4  - Assigned to moving left
 *   - Numpad 6  - Assigned to moving right
 *   - Numpad 8  - Assigned to moving up
 *
 * Once again, if you assign Common Events to these keys, the Common Event will
 * removing the binding the key had natively. However, this will only apply
 * while the player is in the field map and if the 'Forbid Default Bound Keys?'
 * Plugin Parameter is set to 'false'. Being inside of a menu or battle system
 * will restore the previously native functions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Assign Button-Related Notetags ===
 * 
 * ---
 *
 * <Assign Button Common Event: id>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Makes this object selectable in the Item scene or Skill scene and have it
 *   become assignable to a button slot.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'id' with a number representing the ID of the Common Event you
 *   wish to assign to a button.
 * - This needs to be used together with the <Assign Button Slots: x, x, x>
 *   notetag in order to have any effect.
 *
 * ---
 *
 * <Assign Button Slot: x>
 * <Assign Button Slot: x, x, x>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Lists the keyboard keys that can be assigned a Common Event when pressed.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'x' with a number or letter representing the button you wish to
 *   assign a Common Event to.
 * - This needs to be used together with the <Assign Button Common Event: id>
 *   notetag in order to have any effect.
 * - The choices that become available will be listed in the order found in
 *   this notetag.
 * - Forbidden, non-existent, and non-valid keys will be filtered out of this
 *   list and cannot be assigned a Common Event.
 * 
 *   Example:
 * 
 *   <Assign Button Slot: A, S, D, F>
 *   <Assign Button Slot: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0>
 *
 * ---
 * 
 * <Assign Button Show Cost>
 * 
 * - Used for: Skill Notetags
 * - If a skill can be assigned, show the cost of the skill if it has one.
 * - Using this assigned button will not pay the cost. If you want to the pay
 *   the cost, use the following notetag.
 * 
 * ---
 * 
 * <Assign Button Pay Cost>
 * 
 * - Used for: Skill Notetags
 * - If a skill can be assigned, show the cost of the skill if it has one and
 *   pays the cost when pressed and activated.
 *   - If the cost cannot be paid, due to lacking resources or other reasons,
 *     then the button will be disabled.
 * - The actor that will pay the cost will be the actor that the button was
 *   assigned from in the first place.
 *   - As such, if the actor is not in the party, this will also be disabled.
 * 
 * ---
 * 
 * <Assign Button Show Quantity>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - If an item, weapon, or armor can be assigned, show the quantity of the
 *   party has of that item, weapon, or armor.
 * - Using this assigned button will not consume the item, weapon, or armor.
 *   If you want to consume the quantity, use the following notetag.
 * 
 * ---
 * 
 * <Assign Button Consume Quantity>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - If an item, weapon, or armor can be assigned, show the quantity of the
 *   party has of that item, weapon, or armor. This will also consume one of
 *   the item, weapon, or armor when pressed.
 *   - This also applies to Key Items. If you don't want Key Items to be
 *     consumed but have their quantity displayed, use the previous notetag.
 *   - If the cost cannot be paid, due to lacking resources or other reasons,
 *     then the button will be disabled.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Change Button Common Event
 * - Change the Common Event bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to change.
 *
 *   Common Event ID:
 *   - Change the Common Event bound to specific key(s).
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 *
 * ---
 * 
 * System: Change Visibility
 * - Determines whether or not buttons are shown on screen.
 * 
 *   Visible?
 *   - Show or hide the visible Button Common Events on the screen?
 * 
 * ---
 *
 * System: Clear All Button Common Events
 * - Clears Common Events from all keys.
 *
 * ---
 *
 * System: Clear Button Common Event
 * - Clears any Common Events bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to clear.
 *
 * ---
 *
 * System: Clear Common Event ID(s)
 * - Clears any keys with the marked Common Event ID(s).
 * 
 *   Common Event ID(s):
 *   - Clears any keys with the marked Common Event ID(s).
 *
 * ---
 * 
 * System: Run Stored Button Common Event
 * - Run the Common Event stored on a specific key.
 * 
 *   Target Key:
 *   - Run the Common Event stored in this key.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the Plugin Parameters for this plugin. They manage all the key
 * bindings and which Common Events are linked by default to which keys. These
 * links are not permanent as they can be changed/cleared with Plugin Commands.
 *
 * ---
 *
 * Restriction
 * 
 *   Forbid Default Bound Keys?:
 *   - Forbid already bound input keys?
 *   - Allowing them may cause clashes.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show On Screen?:
 *   - Show buttons on screen by default?
 * 
 *   Change Tone on Hover?:
 *   - Change the tone of the button on hover?
 * 
 *   Hover Tone:
 *   - Tone settings upon hovering.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Button Width:
 *   - The width of the visible button on screen.
 * 
 *   Button Height:
 *   - The height of the visible button on screen.
 * 
 *   Picture Filename:
 *   - Picture used as a button background.
 *   - If left empty, ignore drawing a picture.
 * 
 *   Undeclared Icons:
 *   - If a Button Common Event doesn't have an assigned icon,
 *     use one of these instead.
 * 
 *   JS: Draw Data:
 *   - JavaScript code that determines how to draw the visible button.
 *
 * ---
 * 
 * Button Positions
 * 
 *   JS: Bottom Point:
 *   JS: Above Point:
 *   JS: Left Point:
 *   JS: Right Point:
 *   - The X and Y coordinates for where the specific side buttons start.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Assignment Settings
 * ============================================================================
 *
 * The Assignment Settings Plugin Parameters apply to whenever you use the
 * Assign Button-Related Notetags in-game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Instructions:
 *   - The instruction text that appears when assigning a Common Event to
 *     a button.
 *
 * ---
 *
 * Window
 * 
 *   Key Align:
 *   - Text alignment for the button assignment window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the button assignment window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Cost Settings
 * ============================================================================
 *
 * Adjust the settings involving button press costs.
 *
 * ---
 *
 * Item Cost Offsets:
 * 
 *   Offset X:
 *   - Offsets the cost x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cost y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Skill Cost Offsets:
 * 
 *   Offset X:
 *   - Offsets the cost x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cost y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Misc Settings:
 * 
 *   Disabled Opacity:
 *   - Opacity used for buttons that are unable to meet cost requirements.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Key Settings
 * ============================================================================
 *
 * The Key Settings allow you to adjust the Common Event you want to bind to
 * each keyboard key along with whether or not you want the said key to appear
 * visibly on the screen.
 *
 * ---
 *
 * Key Settings
 * 
 *   Common Event ID:
 *   - The default common event tied to this key.
 *   - Leave it at 0 for no common event.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show Button?:
 *   - Show the button visibly on the screen?
 * 
 *   Requires Bind?:
 *   - If the button is shown, does it require a Common Event to be shown?
 * 
 *   Button Label:
 *   - What text do you want to display as the button label?
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 * 
 *   JS: Position:
 *   - The X and Y coordinates for where this button is positioned.
 *
 * ---
 * 
 * Custom Settings
 * 
 *   Custom Width:
 *   Custom Height:
 *   - Change the width/height of this button specifically.
 *   - Use 0 for the default size.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.07: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a crash that would occur upon mouse click. Fix made by Arisu.
 * 
 * Version 1.06: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** Skill: <Assign Button Show Cost>
 * *** Skill: <Assign Button Pay Cost>
 * *** Items, Weapon, Armor: <Assign Button Show Quantity>
 * *** Items, Weapon, Armor: <Assign Button Consume Quantity>
 * **** Read the helpfile for more information.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Cost Settings
 * **** Adjust how costs are displayed for the plugin.
 * *** Parameters > Key Settings > Custom Settings > Custom Width
 * *** Parameters > Key Settings > Custom Settings > Custom Height
 * **** Allows buttons to have custom width and height.
 * 
 * Version 1.05: September 1, 2022
 * * Bug Fixes!
 * ** System: Run Stored Button Common Event plugin command should now be
 *    working properly. Fix made by Irina.
 * 
 * Version 1.04: January 20, 2022
 * * Feature Update!
 * ** Button Common Event key presses on top of below priority touch events
 *    will only be forbidden in the context of a common event assigned to the
 *    usual OK buttons instead. Update made by Arisu.
 * 
 * Version 1.03: February 12, 2021
 * * Bug Fixes!
 * ** Pressing a Button Common Event key while stepping onto a below priority
 *    touch event will no longer give priority to the Button Common Event. Fix
 *    made by Arisu.
 * 
 * Version 1.02: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When pressing Button Common Events with the keyboard, any visible buttons
 *    on the screen will also flash their color tone briefly to show that they
 *    are being pressed. This is only if the Hover Tone Plugin Parameter is
 *    enabled. Update made by Yanfly.
 * * New Features!
 * ** New Notetags Added by Yanfly!
 * *** <Assign Button Common Event: id>
 * *** <Assign Button Slot: x, x, x>
 * ** New Plugin Command added by Yanfly!
 * *** System: Clear Common Event ID(s)
 * **** Clears any keys with the marked Common Event ID(s).
 * *** System: Run Stored Button Common Event
 * **** Run the Common Event stored on a specific key.
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Assignment Settings
 * 
 * Version 1.01: December 4, 2020
 * * Feature Update!
 * ** Plugin Command "System: Change Button Common Event" can now use code for
 *    icons. You can insert $gameVariables.value(50) in it and it will use
 *    whichever number is stored inside it as an icon. Update made by Irina.
 *
 * Version 1.00: August 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeButtonCommonEvent
 * @text System: Change Button Common Event
 * @desc Change the Common Event bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to change.
 * @default []
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Change the Common Event bound to specific key(s).
 * @default 0
 *
 * @arg Icon:eval
 * @text Button Icon
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ButtonCommonEventsVisibility
 * @text System: Change Visibility
 * @desc Determines whether or not buttons are shown on screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the visible Button Common Events on the screen?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearAllButtonCommonEvents
 * @text System: Clear All Button Common Events
 * @desc Clears Common Events from all keys.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEvent
 * @text System: Clear Button Common Event
 * @desc Clears any Common Events bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to clear.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEventID
 * @text System: Clear Common Event ID(s)
 * @desc Clears any keys with the marked Common Event ID(s).
 *
 * @arg CommonEventID:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Clears any keys with the marked Common Event ID(s).
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RunButtonCommonEvent
 * @text System: Run Stored Button Common Event
 * @desc Run the Common Event stored on a specific key.
 *
 * @arg Key:str
 * @text Target Key
 * @type combo
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Run the Common Event stored in this key.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ButtonCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Adjust the general settings for this plugin.
 * @default {"ForbidInputKeys:eval":"true","Buttons":"","ShowButtonsOnScreen:eval":"true","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","ButtonWidth:num":"60","ButtonHeight:num":"60","ButtonFilename:str":"","IconsUsed:arraynum":"[\"160\",\"161\",\"162\",\"163\",\"164\",\"165\"]","DrawJS:func":"\"// Declare Constants\\nconst w = this.width;\\nconst h = this.height;\\n\\n// Draw Background\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\\n\\n// Draw Picture\\nif (this.pictureBitmap()) {\\n    const picBitmap = this.pictureBitmap();\\n    const pw = picBitmap.width;\\n    const ph = picBitmap.height;\\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\\n}\\n\\n// Draw Icon\\nconst iconIndex = this.buttonIcon();\\nconst iconBitmap = ImageManager.loadSystem(\\\"IconSet\\\");\\nconst iw = ImageManager.iconWidth;\\nconst ih = ImageManager.iconHeight;\\nconst ix = (iconIndex % 16) * iw;\\nconst iy = Math.floor(iconIndex / 16) * ih;\\nconst jw = Math.floor(this.width / iw) * iw;\\nconst jh = Math.floor(this.height / ih) * ih;\\nconst jx = Math.floor((this.width - jw) / 2);\\nconst jy = Math.floor((this.height - jh) / 2);\\nthis.bitmap._context.imageSmoothingEnabled = false;\\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\\nthis.bitmap._context.imageSmoothingEnabled = true;\\n\\n// Draw Button Label\\nconst text = this.buttonLabel();\\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');\"","Positions":"","BottomPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\\nlet y = container.height - buttonHeight;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","AbovePointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\\nlet y = container.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","LeftPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","RightPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.width;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param Assign:struct
 * @text Assignment Settings
 * @type struct<Assign>
 * @desc Adjust the assignment settings for this plugin.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Cost:struct
 * @text Cost Settings
 * @type struct<Cost>
 * @desc Adjust the settings involving button press costs.
 * @default {"ItemOffsets":"","ItemOffsetX:num":"+0","ItemOffsetY:num":"+0","SkillOffsets":"","SkillOffsetX:num":"+0","SkillOffsetY:num":"+0","Misc":"","DisabledOpacity:num":"160"}
 *
 * @param NumberKeys
 * @text Number Keys
 *
 * @param KeyCode49:struct
 * @text Key: 1
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 0;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode50:struct
 * @text Key: 2
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode51:struct
 * @text Key: 3
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 2;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode52:struct
 * @text Key: 4
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 3;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode53:struct
 * @text Key: 5
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 4;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode54:struct
 * @text Key: 6
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 5;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode55:struct
 * @text Key: 7
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 6;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode56:struct
 * @text Key: 8
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 7;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode57:struct
 * @text Key: 9
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 8;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode48:struct
 * @text Key: 0
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 9;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param LetterKeys
 * @text Letter Keys
 *
 * @param KeyCode65:struct
 * @text Key: A
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"A","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode66:struct
 * @text Key: B
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"B","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode67:struct
 * @text Key: C
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"C","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode68:struct
 * @text Key: D
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"D","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode69:struct
 * @text Key: E
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"E","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode70:struct
 * @text Key: F
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"F","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode71:struct
 * @text Key: G
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"G","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode72:struct
 * @text Key: H
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"H","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode73:struct
 * @text Key: I
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"I","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode74:struct
 * @text Key: J
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"J","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode75:struct
 * @text Key: K
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"K","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode76:struct
 * @text Key: L
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"L","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode77:struct
 * @text Key: M
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"M","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode78:struct
 * @text Key: N
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"N","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode79:struct
 * @text Key: O
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"O","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode80:struct
 * @text Key: P
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"P","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode81:struct
 * @text Key: Q (PgUp)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Q","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode82:struct
 * @text Key: R
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"R","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode83:struct
 * @text Key: S
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"S","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode84:struct
 * @text Key: T
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"T","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode85:struct
 * @text Key: U
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"U","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode86:struct
 * @text Key: V
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"V","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode87:struct
 * @text Key: W (PgDn)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"W","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode88:struct
 * @text Key: X (Cancel)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"X","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode89:struct
 * @text Key: Y
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Y","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode90:struct
 * @text Key: Z (OK)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Z","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param SymbolKeys
 * @text Symbol Keys
 *
 * @param KeyCode192:struct
 * @text Key: ` ~
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"~","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x - buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode189:struct
 * @text Key: - _
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 10;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode187:struct
 * @text Key: = +
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 11;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode219:struct
 * @text Key: [ {
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"[","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode221:struct
 * @text Key: ] }
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"]","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 11;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode220:struct
 * @text Key: \ |
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\\","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 12;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode186:struct
 * @text Key: ; :
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":";","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode222:struct
 * @text Key: ' "
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\"","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode188:struct
 * @text Key: , <
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode190:struct
 * @text Key: . >
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode191:struct
 * @text Key: / ?
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"?","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param MiscKeys
 * @text Misc Keys
 *
 * @param KeyCode32:struct
 * @text Key: Space (OK)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Space","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode37:struct
 * @text Key: Left (Left)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 3;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode38:struct
 * @text Key: Up (Up)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"^","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode39:struct
 * @text Key: Right (Right)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">>","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 1;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode40:struct
 * @text Key: Down (Down)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"v","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode45:struct
 * @text Key: Insert
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Ins","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode46:struct
 * @text Key: Delete
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Del","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode36:struct
 * @text Key: Home
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Home","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode35:struct
 * @text Key: End
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"End","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode33:struct
 * @text Key: Page Up (PgUp)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgUp","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode34:struct
 * @text Key: Page Down (PgDn)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgDn","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param NumPadKeys
 * @text NumPad Keys
 *
 * @param KeyCode96:struct
 * @text Key: NumPad 0 (Cancel)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode97:struct
 * @text Key: NumPad 1
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode98:struct
 * @text Key: NumPad 2 (Down)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode99:struct
 * @text Key: NumPad 3
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode100:struct
 * @text Key: NumPad 4 (Left)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode101:struct
 * @text Key: NumPad 5
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode102:struct
 * @text Key: NumPad 6 (Right)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode103:struct
 * @text Key: NumPad 7
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode104:struct
 * @text Key: NumPad 8 (Up)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode105:struct
 * @text Key: NumPad 9
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode110:struct
 * @text Key: NumPad .
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":".","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode107:struct
 * @text Key: NumPad +
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode109:struct
 * @text Key: NumPad -
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode106:struct
 * @text Key: NumPad *
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"*","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode111:struct
 * @text Key: NumPad /
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"/","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param ForbidInputKeys:eval
 * @text Forbid Default Keys?
 * @parent Forbidden
 * @type boolean
 * @on Forbid
 * @off Allow
 * @desc Forbid already bound input keys?
 * Allowing them may cause clashes.
 * @default true
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButtonsOnScreen:eval
 * @text Show On Screen?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show buttons on screen by default?
 * @default true
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Buttons
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the button on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param ButtonWidth:num
 * @text Button Width
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The width of the visible button on screen.
 * @default 80
 *
 * @param ButtonHeight:num
 * @text Button Height
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The height of the visible button on screen.
 * @default 80
 *
 * @param ButtonFilename:str
 * @text Picture Filename
 * @parent Buttons
 * @type file
 * @dir img/pictures/
 * @desc Picture used as a button background.
 * If left empty, ignore drawing a picture.
 * @default 
 *
 * @param IconsUsed:arraynum
 * @text Undeclared Icons
 * @parent Buttons
 * @type string[]
 * @desc If a Button Common Event doesn't have an assigned icon, use one of these instead.
 * @default ["160","161","162","163","164","165"]
 *
 * @param DrawJS:func
 * @text JS: Draw Data
 * @parent Buttons
 * @type note
 * @desc JavaScript code that determines how to draw the visible button.
 * @default "// Declare Constants\nconst w = this.width;\nconst h = this.height;\n\n// Draw Background\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\n\n// Draw Picture\nif (this.pictureBitmap()) {\n    const picBitmap = this.pictureBitmap();\n    const pw = picBitmap.width;\n    const ph = picBitmap.height;\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\n}\n\n// Draw Icon\nconst iconIndex = this.buttonIcon();\nconst iconBitmap = ImageManager.loadSystem(\"IconSet\");\nconst iw = ImageManager.iconWidth;\nconst ih = ImageManager.iconHeight;\nconst ix = (iconIndex % 16) * iw;\nconst iy = Math.floor(iconIndex / 16) * ih;\nconst jw = Math.floor(this.width / iw) * iw;\nconst jh = Math.floor(this.height / ih) * ih;\nconst jx = Math.floor((this.width - jw) / 2);\nconst jy = Math.floor((this.height - jh) / 2);\nthis.bitmap._context.imageSmoothingEnabled = false;\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\nthis.bitmap._context.imageSmoothingEnabled = true;\n\n// Draw Button Label\nconst text = this.buttonLabel();\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');"
 * 
 * @param Positions
 * @text Button Positions
 *
 * @param BottomPointJS:func
 * @text JS: Bottom Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the bottom buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\nlet y = container.height - buttonHeight;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param AbovePointJS:func
 * @text JS: Above Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the upper buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\nlet y = container.y;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param LeftPointJS:func
 * @text JS: Left Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the left-side buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.x;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param RightPointJS:func
 * @text JS: Right Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the right-side buttons end.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.width;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 */
/* ----------------------------------------------------------------------------
 * Assign Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Assign:
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Instruction:str
 * @text Instructions
 * @parent Vocab
 * @desc The instruction text that appears when assigning a Common Event to a button.
 * @default Assign to which button slot?
 * 
 * @param Window
 *
 * @param AssignWindow_KeyAlign:str
 * @text Key Align
 * @parent Window
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the button assignment window?
 * @default center
 *
 * @param AssignWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window
 * @type note
 * @desc Code used to determine the dimensions for the button assignment window.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param ItemOffsets
 * @text Item Cost Offsets
 *
 * @param ItemOffsetX:num
 * @text Offset X
 * @parent ItemOffsets
 * @desc Offsets the cost x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ItemOffsetY:num
 * @text Offset Y
 * @parent ItemOffsets
 * @desc Offsets the cost y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param SkillOffsets
 * @text Skill Cost Offsets
 *
 * @param SkillOffsetX:num
 * @text Offset X
 * @parent SkillOffsets
 * @desc Offsets the cost x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SkillOffsetY:num
 * @text Offset Y
 * @parent SkillOffsets
 * @desc Offsets the cost y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Misc
 * @text Misc Settings
 *
 * @param DisabledOpacity:num
 * @text Disabled Opacity
 * @parent Misc
 * @desc Opacity used for buttons that are unable to meet cost requirements.
 * @default 160
 *
 */
/* ----------------------------------------------------------------------------
 * Key Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeySettings:
 *
 * @param CommonEventID:num
 * @text Common Event ID
 * @parent NeededData
 * @type common_event
 * @desc The default common event tied to this key.
 * Leave it at 0 for no common event.
 * @default 0
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButton:eval
 * @text Show Button?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the button visibly on the screen?
 * @default false
 *
 * @param ShowOnlyIfCePresent:eval
 * @text Requires Bind?
 * @parent ShowButton:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If the button is shown, does it require a Common Event to be shown?
 * @default true
 *
 * @param ButtonText:str
 * @text Button Label
 * @parent Buttons
 * @desc What text do you want to display as the button label?
 * @default Untitled
 *
 * @param ButtonIcon:num
 * @text Button Icon
 * @parent Buttons
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @param PositionJS:func
 * @text JS: Position
 * @parent Buttons
 * @type note
 * @desc The X and Y coordinates for where this button is positioned.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\nconst bottomPoint = this.bottomPoint();\nconst abovePoint = this.abovePoint();\nconst leftPoint = this.leftPoint();\nconst rightPoint = this.rightPoint();\n\n// Calculate Coordinates\nlet x = 0;\nlet y = 0;\n\n// Return Coordinates\nreturn new Point(x, y);"
 * 
 * @param Custom
 * @text Custom Settings
 *
 * @param CustomWidth:num
 * @text Custom Width
 * @parent Custom
 * @desc Change the width of this button specifically.
 * Use 0 for the default size.
 * @default 0
 *
 * @param CustomHeight:num
 * @text Custom Height
 * @parent Custom
 * @desc Change the height of this button specifically.
 * Use 0 for the default size.
 * @default 0
 *
 */
//=============================================================================

//=============================================================================
// Setup Plugin Parameters
//=============================================================================

var label = 'ButtonCommonEvents';
var tier = tier || 0;
var dependencies = [];
var pluginData = $plugins.filter(function(p) { return p.status && p.description.includes('['+label+']') })[0];
VisuMZ[label].Settings = VisuMZ[label].Settings || {};

VisuMZ.ConvertParams = function(obj, data) {
    for (const key in data) {
        if (key.match(/(.*):(.*)/i)) {
            // Key and Type
            const objKey = String(RegExp.$1);
            const objType = String(RegExp.$2).toUpperCase().trim();

            // Parse Data
            let value; let arr; let newData;
            switch (objType) {
                case 'NUM':
                    value = data[key] !== '' ? Number(data[key]) : 0;
                    break;
                case 'ARRAYNUM':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => Number(i));
                    break;
                case 'EVAL':
                    value = data[key] !== '' ? eval(data[key]) : null;
                    break;
                case 'ARRAYEVAL':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => eval(i));
                    break;
                case 'JSON':
                    value = data[key] !== '' ? JSON.parse(data[key]) : '';
                    break;
                case 'ARRAYJSON':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => JSON.parse(i));
                    break;
                case 'FUNC':
                    value = data[key] !== '' ? new Function(JSON.parse(data[key])) : new Function('return 0');
                    break;
                case 'ARRAYFUNC':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => new Function(JSON.parse(i)));
                    break;
                case 'STR':
                    value = data[key] !== '' ? String(data[key]) : '';
                    break;
                case 'ARRAYSTR':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => String(i));
                    break;
                case 'STRUCT':
                    newData = data[key] !== '' ? JSON.parse(data[key]) : {};
                    value = VisuMZ.ConvertParams({}, newData);
                    break;
                case 'ARRAYSTRUCT':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => VisuMZ.ConvertParams({}, JSON.parse(i)));
                    break;
                default:
                    continue;
            }

            // Set Value
            obj[objKey] = value;
        }
    }
    return obj;
};

((pluginData) => {
    const name = pluginData.name;
    // Dependency Check
    for (const dependency of dependencies) {
        if (!Imported[dependency]) {
            alert('%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.'.format(name, dependency));
            SceneManager.exit();
            break;
        }
    }
    // Description Check
    const desc = pluginData.description;
    // Version Check
    if (desc.match(/\[Version[ ](.*?)\]/i)) {
        const descVersion = Number(RegExp.$1);
        if (descVersion !== VisuMZ[label].version) {
            alert('%1\'s version does not match plugin\'s. Please update it in the Plugin Manager.'.format(name, descVersion));
            SceneManager.exit();
        }
    }
    // Tier Order Check
    if (desc.match(/\[Tier[ ](\d+)\]/i)) {
        const descTier = Number(RegExp.$1);
        if (descTier < tier) {
            alert('%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.'.format(name, descTier, tier));
            SceneManager.exit();
        } else {
            tier = Math.max(descTier, tier);
        }
    }
    // Convert Plugin Parameters
    VisuMZ.ConvertParams(VisuMZ[label].Settings, pluginData.parameters);

})(pluginData);

//-----------------------------------------------------------------------------
// Plugin Commands
//
// Register new plugin commands here.

PluginManager.registerCommand(pluginData.name, "ChangeButtonCommonEvent", args => {
    // Convert Arguments
    VisuMZ.ConvertParams(args, args);

    // Declare Constants
    const keys = args.Keys;
    const commonEventID = args.CommonEventID;
    const icon = args.Icon;
    
    // Perform
    for (let key of keys) {
        key = key.replace(/\s*\(.*?\)\s*/g, '').toUpperCase().trim();
        const keyCode = TextManager.stringKeyMap.indexOf(key);
        if (keyCode > 0) {
            $gameSystem.setButtonCommonEvent(keyCode, commonEventID);
            $gameSystem.setButtonCommonEventIcon(keyCode, icon);
        }
    }
});

PluginManager.registerCommand(pluginData.name, "ButtonCommonEventsVisibility", args => {
    // Convert Arguments
    VisuMZ.ConvertParams(args, args);

    // Declare Constants
    const visible = args.Visible;
    
    // Perform
    $gameSystem.setShowButtonCommonEventButtons(visible);
});

PluginManager.registerCommand(pluginData.name, "ClearButtonCommonEvent", args => {
    // Convert Arguments
    VisuMZ.ConvertParams(args, args);

    // Declare Constants
    const keys = args.Keys;
    
    // Perform
    for (let key of keys) {
        key = key.replace(/\s*\(.*?\)\s*/g, '').toUpperCase().trim();
        const keyCode = TextManager.stringKeyMap.indexOf(key);
        if (keyCode > 0) $gameSystem.setButtonCommonEvent(keyCode, 0);
    }
});

PluginManager.registerCommand(pluginData.name, "ClearAllButtonCommonEvents", args => {
    // Perform
    $gameSystem._buttonCommonEventKeyCodes = {};
});

PluginManager.registerCommand(pluginData.name, "ClearButtonCommonEventID", args => {
    // Convert Arguments
    VisuMZ.ConvertParams(args, args);

    // Declare Constants
    const idArray = args.CommonEventID;
    
    // Perform
    for (const id of idArray) {
        $gameSystem.clearButtonCommonEventID(id);
    }
});

PluginManager.registerCommand(pluginData.name, "RunButtonCommonEvent", args => {
    // Convert Arguments
    VisuMZ.ConvertParams(args, args);

    // Declare Constants
    let key = args.Key.toUpperCase().trim();
    key = key.replace(/\s*\(.*?\)\s*/g, '').toUpperCase().trim();
    const keyCode = TextManager.stringKeyMap.indexOf(key); // v1.05 fixed by Irina
    
    // Perform
    const commonEventID = $gameSystem.getButtonCommonEvent(keyCode);
    if (commonEventID > 0) {
        $gameTemp.reserveCommonEvent(commonEventID);
    }
});

//-----------------------------------------------------------------------------
// RegExp
//
// The regular expressions used for this plugin.

VisuMZ.ButtonCommonEvents.RegExp = {
    // Items, Weapons, Armors
    AssignCommonEvent: /<ASSIGN BUTTON COMMON EVENT:[ ](.*)>/i,
    AssignButtonSlots: /<ASSIGN BUTTON (?:SLOT|SLOTS):[ ](.*)>/i,

    // v1.06 added by Arisu
    // Skills
    AssignSkillShowQuantity: /<ASSIGN BUTTON SHOW COST>/i,
    AssignSkillPayCost: /<ASSIGN BUTTON PAY COST>/i,

    // v1.06 added by Arisu
    // Items
    AssignItemShowQuantity: /<ASSIGN BUTTON SHOW (?:COST|QUANTITY)>/i,
    AssignItemPayCost: /<ASSIGN BUTTON (?:CONSUME QUANTITY|PAY COST)>/i,
};

//-----------------------------------------------------------------------------
// Scene_Boot
//
// The scene class for initializing the entire game.

VisuMZ.ButtonCommonEvents.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function() {
    VisuMZ.ButtonCommonEvents.Scene_Boot_onDatabaseLoaded.call(this);
    this.process_VisuMZ_ButtonCommonEvents_Parameters();
    ImageManager.loadButtomCommonEventImage();
};

Scene_Boot.prototype.process_VisuMZ_ButtonCommonEvents_Parameters = function() {
    const arr = [];

    // Number Keys
    for (let i = 48; i <= 57; i++) {
        arr.push(i);
    }

    // Letter Keys
    for (let i = 65; i <= 90; i++) {
        arr.push(i);
    }

    // Symbols
    for (let i = 186; i <= 192; i++) {
        arr.push(i);
    }
    for (let i = 219; i <= 222; i++) {
        arr.push(i);
    }

    // Misc
    for (let i = 32; i <= 40; i++) {
        arr.push(i);
    }
    for (let i = 45; i <= 46; i++) {
        arr.push(i);
    }

    // NumPad
    for (let i = 96; i <= 111; i++) {
        arr.push(i);
    }

    VisuMZ.ButtonCommonEvents.KeysArray = arr;
};

//-----------------------------------------------------------------------------
// Input
//
// The static class that handles input data from the keyboard and gamepads.

Input.isButtonCommonEventForbidden = function(keyCode) {
    if (!VisuMZ.ButtonCommonEvents.Settings.General.ForbidInputKeys) return false;
    return !!Input.keyMapper[keyCode];
};

//-----------------------------------------------------------------------------
// ImageManager
//
// The static class that loads images, creates bitmap objects and retains them.

ImageManager.loadButtomCommonEventImage = function() {
    const filename = VisuMZ.ButtonCommonEvents.Settings.General.ButtonFilename;
    this._buttomCommonEventImage = filename ? ImageManager.loadPicture(filename) : new Bitmap(1,1);
};

//-----------------------------------------------------------------------------
// TextManager
//
// The static class that handles terms and messages.

TextManager.stringKeyMap = ["","","","CANCEL","","","HELP","","BACKSPACE","TAB","","","CLEAR","ENTER","ENTER_SPECIAL","","SHIFT","CTRL","ALT","PAUSE","CAPSLOCK","KANA","EISU","JUNJA","FINAL","HANJA","","ESC","CONVERT","NONCONVERT","ACCEPT","MODECHANGE","SPACE","PGUP","PGDN","END","HOME","LEFT","UP","RIGHT","DOWN","SELECT","PRINT","EXECUTE","PRINTSCREEN","INSERT","DELETE","","0","1","2","3","4","5","6","7","8","9","COLON","SEMICOLON","LESS_THAN","EQUALS","GREATER_THAN","QUESTION_MARK","AT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","OS_KEY","","CONTEXT_MENU","","SLEEP","NUMPAD0","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD4","NUMPAD5","NUMPAD6","NUMPAD7","NUMPAD8","NUMPAD9","MULTIPLY","ADD","SEPARATOR","SUBTRACT","DECIMAL","DIVIDE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","","","","","","","","","NUM_LOCK","SCROLL_LOCK","WIN_OEM_FJ_JISHO","WIN_OEM_FJ_MASSHOU","WIN_OEM_FJ_TOUROKU","WIN_OEM_FJ_LOYA","WIN_OEM_FJ_ROYA","","","","","","","","","","CIRCUMFLEX","EXCLAMATION","DOUBLE_QUOTE","HASH","DOLLAR","PERCENT","AMPERSAND","UNDERSCORE","OPEN_PAREN","CLOSE_PAREN","ASTERISK","PLUS","PIPE","HYPHEN_MINUS","OPEN_CURLY_BRACKET","CLOSE_CURLY_BRACKET","TILDE","","","","","VOLUME_MUTE","VOLUME_DOWN","VOLUME_UP","","","SEMICOLON","EQUALS","COMMA","MINUS","PERIOD","SLASH","BACK_QUOTE","","","","","","","","","","","","","","","","","","","","","","","","","","","OPEN_BRACKET","BACK_SLASH","CLOSE_BRACKET","QUOTE","","META","ALTGR","","WIN_ICO_HELP","WIN_ICO_00","","WIN_ICO_CLEAR","","","WIN_OEM_RESET","WIN_OEM_JUMP","WIN_OEM_PA1","WIN_OEM_PA2","WIN_OEM_PA3","WIN_OEM_WSCTRL","WIN_OEM_CUSEL","WIN_OEM_ATTN","WIN_OEM_FINISH","WIN_OEM_COPY","WIN_OEM_AUTO","WIN_OEM_ENLW","WIN_OEM_BACKTAB","ATTN","CRSEL","EXSEL","EREOF","PLAY","ZOOM","","PA1","WIN_OEM_CLEAR",""];

//-----------------------------------------------------------------------------
// SceneManager
//
// The static class that manages scene transitions.

VisuMZ.ButtonCommonEvents.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
    if (this.isSceneMap() && this.isKeyButtonCommonEventValid(event)) {
        this._scene.processButtonCommonEvent(event.keyCode);
    }
    VisuMZ.ButtonCommonEvents.SceneManager_onKeyDown.call(this, event);
};

SceneManager.isSceneMap = function() {
    return this._scene && this._scene.constructor === Scene_Map;
};

SceneManager.isKeyButtonCommonEventValid = function(event) {
    return !Input.isButtonCommonEventForbidden(event.keyCode);
};

//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.

VisuMZ.ButtonCommonEvents.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    VisuMZ.ButtonCommonEvents.Game_System_initialize.call(this);
    this.initButtonCommonEvents();
};

Game_System.prototype.initButtonCommonEvents = function() {
    this._buttonCommonEventKeyCodes = {};
    this._buttonCommonEventIcons = {};
    this._buttonCommonEventShowButtons = VisuMZ.ButtonCommonEvents.Settings.General.ShowButtonsOnScreen;
    this.makeDefaultButtonCommonEvents();
};

Game_System.prototype.makeDefaultButtonCommonEvents = function() {
    // Declare Constants
    const settings = VisuMZ.ButtonCommonEvents.Settings;
    const fmt = 'KeyCode%1';

    for (const i of VisuMZ.ButtonCommonEvents.KeysArray) {
        const key = fmt.format(i);
        if (!!settings[key]) {
            this.setButtonCommonEvent(i, settings[key].CommonEventID);
            this.setButtonCommonEventIcon(i, settings[key].ButtonIcon);
        }
    }
};

Game_System.prototype.getButtonCommonEvent = function(keyCode) {
    if (this._buttonCommonEventKeyCodes === undefined) this.initButtonCommonEvents();
    return this._buttonCommonEventKeyCodes[keyCode] || 0;
};

Game_System.prototype.setButtonCommonEvent = function(keyCode, commonEventId) {
    if (this._buttonCommonEventKeyCodes === undefined) this.initButtonCommonEvents();

    // Alert Check
    if ($gameTemp.isPlaytest() && Input.isButtonCommonEventForbidden(keyCode) && commonEventId !== 0) {
        const msg = '!! ERROR VisuMZ_4_ButtonCmnEvts ERROR !!\nKey %1 cannot be bound!\nIt is a forbidden keybased on\nyour Plugin Parameter settings!'.format(TextManager.stringKeyMap[keyCode]);
        alert(msg);
        return;
    }

    this._buttonCommonEventKeyCodes[keyCode] = commonEventId;
};

Game_System.prototype.clearButtonCommonEvent = function(keyCode) {
    if (this._buttonCommonEventKeyCodes === undefined) this.initButtonCommonEvents();
    delete this._buttonCommonEventKeyCodes[keyCode];

    // v1.06 added by Arisu
    this.clearButtonCommonEventDisplayFor(keyCode);
};

Game_System.prototype.getButtonCommonEventIcon = function(keyCode) {
    if (this._buttonCommonEventIcons === undefined) this.initButtonCommonEvents();
    return this._buttonCommonEventIcons[keyCode] || 0;
};

Game_System.prototype.setButtonCommonEventIcon = function(keyCode, icon) {
    if (this._buttonCommonEventIcons === undefined) this.initButtonCommonEvents();
    this._buttonCommonEventIcons[keyCode] = icon;
};

Game_System.prototype.clearButtonCommonEventIcon = function(keyCode) {
    if (this._buttonCommonEventIcons === undefined) this.initButtonCommonEvents();
    delete this._buttonCommonEventIcons[keyCode];
};

Game_System.prototype.isShowButtonCommonEventButtons = function() {
    if (this._buttonCommonEventShowButtons === undefined) this.initButtonCommonEvents();
    return this._buttonCommonEventShowButtons;
};

Game_System.prototype.setShowButtonCommonEventButtons = function(value) {
    if (this._buttonCommonEventShowButtons === undefined) this.initButtonCommonEvents();
    this._buttonCommonEventShowButtons = value;
};

// v1.02 added by Yanfly
Game_System.prototype.clearButtonCommonEventID = function(id, displayData) {
    for (const keyCode of VisuMZ.ButtonCommonEvents.KeysArray) {
        if (!this.checkMatchingButtonCommonEventDisplayTypeClear(displayData, keyCode)) continue; // v1.06 added by Arisu
        if (this.getButtonCommonEvent(keyCode) === id) {
            // Original
            this.clearButtonCommonEvent(keyCode);
            this.clearButtonCommonEventIcon(keyCode);

            // v1.06 added by Arisu
            this.clearButtonCommonEventDisplayFor(keyCode);
        }
    }
};

// v1.06 added by Arisu
Game_System.prototype.checkMatchingButtonCommonEventDisplayTypeClear = function(checkedData, keyCode) {
    if (!checkedData) return true;
    const displayData = this.getButtonCommonEventDisplayData(keyCode);
    if (!displayData) return true;

    for (const key in displayData) {
        if (displayData[key] !== checkedData[key]) return false;
    }

    return true;
};

// v1.06 added by Arisu
// Old
// Game_System.prototype.setupButtonCommonEventDisplays = function(keyCode, obj) {
//     // Return Check
//     if (!obj) return;

//     // Default Display Type
//     this._buttonCommonEventDisplay = this._buttonCommonEventDisplay || {};
//     this._buttonCommonEventDisplay[keyCode] = undefined;

//     // Declare Constants
//     const regexp = VisuMZ.ButtonCommonEvents.RegExp;
//     const note = obj.note || '';
//     let tag = '';
//     let type = '';

//     // Check Object Type
//     if (DataManager.isSkill(obj)) {
//         type = 'skill';
//         if (Imported.VisuMZ_1_SkillsStatesCore) {
//             tag = regexp.AssignSkillShowQuantity;
//         }
//     } else {
//         if (DataManager.isItem(obj)) {
//             type = 'item';
//         } else if (DataManager.isWeapon(obj)) {
//             type = 'weapon';
//         } else if (DataManager.isArmor(obj)) {
//             type = 'armor';
//         }
//         if (Imported.VisuMZ_1_ItemsEquipsCore) {
//             tag = regexp.AssignItemShowQuantity;
//         }
//     }

//     // Assign Display Type
//     if (tag && type && note.match(tag)) {
//         this._buttonCommonEventDisplay[keyCode] = {
//             type: type,
//             id: obj.id,
//         }
//         if (type === 'skill') {
//             const actor = SceneManager._scene._actor;
//             this._buttonCommonEventDisplay[keyCode].actorID = actor ? actor.actorId() : 0;
//         }
//     }
// };

// v1.06 added by Arisu
// New
Game_System.prototype.setupButtonCommonEventDisplays = function(keyCode, obj) {
    // Return Check
    if (!obj) return;

    // Default Display Type
    this._buttonCommonEventDisplay = this._buttonCommonEventDisplay || {};
    this._buttonCommonEventDisplay[keyCode] = undefined;

    // Declare Constants
    const regexp = VisuMZ.ButtonCommonEvents.RegExp;
    const note = obj.note || '';
    let type = '';

    // Check Object Type
    if (DataManager.isSkill(obj)) {
        type = 'skill';
    } else {
        if (DataManager.isItem(obj)) {
            type = 'item';
        } else if (DataManager.isWeapon(obj)) {
            type = 'weapon';
        } else if (DataManager.isArmor(obj)) {
            type = 'armor';
        }
    }
    if (!type) return;

    // Assign Display Type
    // Skill
    if (type === 'skill') {
        const actor = SceneManager._scene._actor;
        if (note.match(regexp.AssignSkillShowQuantity)) {
            this._buttonCommonEventDisplay[keyCode] = {
                type: type,
                id: obj.id,
                actorID: actor ? actor.actorId() : 0,
            }
        }
        if (note.match(regexp.AssignSkillPayCost)) {
            this._buttonCommonEventDisplay[keyCode] = {
                type: type,
                id: obj.id,
                actorID: actor ? actor.actorId() : 0,
                payCost: true,
            }
        }
    // Item, Weapon, Armor
    } else {
        if (note.match(regexp.AssignItemShowQuantity)) {
            this._buttonCommonEventDisplay[keyCode] = {
                type: type,
                id: obj.id,
            }
        }
        if (note.match(regexp.AssignItemPayCost) && obj.consumable !== false) {
            this._buttonCommonEventDisplay[keyCode] = {
                type: type,
                id: obj.id,
                payCost: true,
            }
        }
    }
};

// v1.06 added by Arisu
Game_System.prototype.getButtonCommonEventDisplayData = function(keyCode) {
    this._buttonCommonEventDisplay = this._buttonCommonEventDisplay || {};
    return this._buttonCommonEventDisplay[keyCode];
};

// v1.06 added by Arisu
Game_System.prototype.clearButtonCommonEventDisplayFor = function(keyCode) {
    this._buttonCommonEventDisplay = this._buttonCommonEventDisplay || {};
    delete this._buttonCommonEventDisplay[keyCode];
};

// v1.06 added by Arisu
Game_System.prototype.buttonCommonEventRequiresCost = function(keyCode) {
    const displayData = this.getButtonCommonEventDisplayData(keyCode);
    if (!displayData) return false;
    if (displayData.payCost) return true;
    return false;
};

// v1.06 added by Arisu
Game_System.prototype.buttonCommonEventCanPayCost = function(keyCode) {
    // Return Check
    if (!this.buttonCommonEventRequiresCost(keyCode)) return true;

    // Declare Display Data
    const displayData = this.getButtonCommonEventDisplayData(keyCode);
    if (!displayData) return true;
    
    // Get Object
    const type = displayData.type;
    const id = displayData.id;
    const obj = VisuMZ.ButtonCommonEvents.GetObject(type, id);
    if (!obj) return false;
    
    // Skill Check
    if (type === 'skill') {
        const actor = $gameActors.actor(displayData.actorID);
        if (!actor) return false;
        if (!actor.canPaySkillCost(obj)) return false;
        if (!$gameParty.allMembers().includes(actor)) return false;
        
        // Item, Weapon, Armor Check
    } else {
        const quantity = $gameParty.numItems(obj);
        if (quantity <= 0) return false;
    }
    
    // Return True
    return true;
};

// v1.06 added by Arisu
Game_System.prototype.buttonCommonEventPayCost = function(keyCode) {
    // Return Check
    if (!this.buttonCommonEventRequiresCost(keyCode)) return;

    // Declare Display Data
    const displayData = this.getButtonCommonEventDisplayData(keyCode);
    if (!displayData) return;
    
    // Get Object
    const type = displayData.type;
    const id = displayData.id;
    const obj = VisuMZ.ButtonCommonEvents.GetObject(type, id);
    if (!obj) return;
    
    // Skill Check
    if (type === 'skill') {
        const actor = $gameActors.actor(displayData.actorID);
        if (actor) actor.paySkillCost(obj);
        
        // Item, Weapon, Armor Check
    } else {
        $gameParty.loseItem(obj, 1);
    }
    
    // Return True
    return true;
};

//-----------------------------------------------------------------------------
// Scene_Map
//
// The scene class of the map screen.

VisuMZ.ButtonCommonEvents.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
    VisuMZ.ButtonCommonEvents.Scene_Map_createSpriteset.call(this);
    this.createButtonCommonEventsSpriteContainer();
};

Scene_Map.prototype.createButtonCommonEventsSpriteContainer = function() {
    if (this.constructor !== Scene_Map) return;
    this._buttonCommonEventsSpriteContainer = new Sprite_ButtonCommonEventsContainer();
    this.addChild(this._buttonCommonEventsSpriteContainer);
};

Scene_Map.prototype.processButtonCommonEvent = function(keyCode) {
    if (!this.isButtonCommonEventOk(keyCode)) return;
    if ($gameMap && $gameMap.isEventRunning()) return;
    const id = $gameSystem.getButtonCommonEvent(keyCode) || 0;
    if (id > 0 && $dataCommonEvents[id]) {
        if ($gameSystem.buttonCommonEventCanPayCost(keyCode)) { // v1.06 added by Arisu
            $gameSystem.buttonCommonEventPayCost(keyCode); // v1.06 added by Arisu
            $gameTemp.reserveCommonEvent(id); // Original
        }
        this._buttonCommonEventsSpriteContainer.flashButtonPress(keyCode);
    }
};

Scene_Map.prototype.isButtonCommonEventOk = function(keyCode) {
    if (!this.isActive()) return false;
    if ($gameMessage.isBusy()) return false;
    if (SceneManager.isSceneChanging()) return false;
    
    // v1.04 added by Arisu
    if (Input.keyMapper[keyCode] === 'ok') {
        // v1.03 added by Arisu
        if ($gamePlayer.checkEventTriggerTouchInForwardLocation()) return false;
    }
    return true;
};

VisuMZ.ButtonCommonEvents.Scene_Map_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
Scene_Map.prototype.isAnyButtonPressed = function() {
    const container = this._buttonCommonEventsSpriteContainer;
    if (container) {
        if (container.isAnyButtonPressed()) return true;
    }
    return VisuMZ.ButtonCommonEvents.Scene_Map_isAnyButtonPressed.call(this);
};

// v1.03 added by Arisu
Game_Player.prototype.checkEventTriggerTouchInForwardLocation = function() {
    let x = this.x;
    let y = this.y;

    /*
    if ($gamePlayer.isMoving()) {
        const d = this.direction();
        if ([7, 4, 1].includes(d)) x -= 1;
        if ([9, 6, 3].includes(d)) x += 1;
        if ([7, 8, 9].includes(d)) y -= 1;
        if ([1, 2, 3].includes(d)) y += 1;
        console.log(d, 'x: ', this.x, x, 'y: ', this.y, y);
    }
    */

    for (const ev of $gameMap.eventsXy(x, y)) {
        if (!ev) continue;
        if (ev.isTriggerIn([1,2])) return true;
    }
    
    return false;
};

//-----------------------------------------------------------------------------
// Sprite_ButtonCommonEventsContainer
//
// The sprite class with click handling functions.

function Sprite_ButtonCommonEventsContainer() {
    this.initialize(...arguments);
}

Sprite_ButtonCommonEventsContainer.prototype = Object.create(Sprite.prototype);
Sprite_ButtonCommonEventsContainer.prototype.constructor = Sprite_ButtonCommonEventsContainer;

Sprite_ButtonCommonEventsContainer.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.initMembers();
    this.createButtonSprites();
};

Sprite_ButtonCommonEventsContainer.prototype.initMembers = function() {
    this.width = Graphics.width;
    this.height = Graphics.height;
};

// v1.06 added by Arisu
Sprite_ButtonCommonEventsContainer.prototype.keySettings = function() {
    if (!this._currentKey) return {};
    return VisuMZ.ButtonCommonEvents.Settings[this._currentKey || ''] || {};
};

Sprite_ButtonCommonEventsContainer.prototype.buttonWidth = function() {
    return this.keySettings().CustomWidth || // v1.06 added by Arisu
        VisuMZ.ButtonCommonEvents.Settings.General.ButtonWidth;
};

Sprite_ButtonCommonEventsContainer.prototype.buttonHeight = function() {
    return this.keySettings().CustomHeight || // v1.06 added by Arisu
        VisuMZ.ButtonCommonEvents.Settings.General.ButtonHeight;
};

Sprite_ButtonCommonEventsContainer.prototype.bottomPoint = function() {
    try {
        return VisuMZ.ButtonCommonEvents.Settings.General.BottomPointJS.call(this);
    } catch (e) {
        if ($gameTemp.isPlaytest()) console.log(e);
        return new Point(0,0);
    }
};

Sprite_ButtonCommonEventsContainer.prototype.leftPoint = function() {
    try {
        return VisuMZ.ButtonCommonEvents.Settings.General.LeftPointJS.call(this);
    } catch (e) {
        if ($gameTemp.isPlaytest()) console.log(e);
        return new Point(0,0);
    }
};

Sprite_ButtonCommonEventsContainer.prototype.rightPoint = function() {
    try {
        return VisuMZ.ButtonCommonEvents.Settings.General.RightPointJS.call(this);
    } catch (e) {
        if ($gameTemp.isPlaytest()) console.log(e);
        return new Point(0,0);
    }
};

Sprite_ButtonCommonEventsContainer.prototype.abovePoint = function() {
    try {
        return VisuMZ.ButtonCommonEvents.Settings.General.AbovePointJS.call(this);
    } catch (e) {
        if ($gameTemp.isPlaytest()) console.log(e);
        return new Point(0,0);
    }
};

Sprite_ButtonCommonEventsContainer.prototype.createButtonSprites = function() {
    const settings = VisuMZ.ButtonCommonEvents.Settings;
    const fmt = 'KeyCode%1';

    for (const i of VisuMZ.ButtonCommonEvents.KeysArray) {
        const key = fmt.format(i);
        if (!settings[key]) continue;
        if (!settings[key].ShowButton) continue;
        const sprite = new Sprite_ButtonCommonEvent(i);
        this.addChild(sprite);
        this._currentKey = key; // v1.06 added by Arisu
        const position = sprite.settings().PositionJS.call(this) || (new Point(0, 0));
        sprite.x = position.x;
        sprite.y = position.y;
    }
};

Sprite_ButtonCommonEventsContainer.prototype.isAnyButtonPressed = function() {
    return this.children.some(sprite => sprite.isCommonEventPressed());
};

Sprite_ButtonCommonEventsContainer.prototype.flashButtonPress = function(keyCode) {
    const sprites = this.children.filter(sprite => sprite && sprite._key === keyCode);
    for (const sprite of sprites) {
        if (!sprite) continue;
        sprite.flashColorTone();
    }
};

//-----------------------------------------------------------------------------
// Sprite_ButtonCommonEvent
//
// The sprite for displaying a Button Common Event button.

function Sprite_ButtonCommonEvent() {
    this.initialize(...arguments);
}

Sprite_ButtonCommonEvent.prototype = Object.create(Sprite_Clickable.prototype);
Sprite_ButtonCommonEvent.prototype.constructor = Sprite_ButtonCommonEvent;

Sprite_ButtonCommonEvent.prototype.initialize = function(key) {
    this._key = key;
    Sprite_Clickable.prototype.initialize.call(this);
    this.createBitmap();
    this.opacity = this.targetOpacity();
};

Sprite_ButtonCommonEvent.prototype.settings = function() {
    const key = 'KeyCode%1'.format(this._key);
    return VisuMZ.ButtonCommonEvents.Settings[key] || {};
};

Sprite_ButtonCommonEvent.prototype.createBitmap = function() {
    // Original
    const genSettings = VisuMZ.ButtonCommonEvents.Settings.General;

    // v1.06 added by Arisu
    const keySettings = this.settings();
    const width = keySettings.CustomWidth || genSettings.ButtonWidth;
    const height = keySettings.CustomHeight || genSettings.ButtonHeight;

    // v1.06 updated by Arisu
    this.bitmap = new Bitmap(width, height);

    // Original
    this._icon = this.buttonIcon();
    this.refresh();
};

Sprite_ButtonCommonEvent.prototype.pictureBitmap = function() {
    return ImageManager._buttomCommonEventImage;
};

Sprite_ButtonCommonEvent.prototype.commonEventID = function() {
    return $gameSystem.getButtonCommonEvent(this._key);
};

Sprite_ButtonCommonEvent.prototype.buttonLabel = function() {
    if (!this.settings()) return '';
    return this.settings().ButtonText;
};

Sprite_ButtonCommonEvent.prototype.buttonIcon = function() {
    if (!this.commonEventID()) return 0;

    const icon = $gameSystem.getButtonCommonEventIcon(this._key);
    if (icon !== 0) return icon;

    const generalSettings = VisuMZ.ButtonCommonEvents.Settings.General;
    const icons = generalSettings.IconsUsed;
    const length = Math.max(icons.length, 1);
    let iconIndex = icons[this._key % length] || 0;
    return iconIndex;
};

Sprite_ButtonCommonEvent.prototype.refresh = function() {
    this.bitmap.clear();

    // v1.06 disabled by Arisu
    // const settings = VisuMZ.ButtonCommonEvents.Settings.General;
    // settings.DrawJS.call(this);

    // v1.06 added by Arisu
    this.setupPaintOpacity();
    this.drawBaseJS();
    this.drawDisplayType();
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.setupPaintOpacity = function() {
    let paintOpacity = 255;
    if (this.requiresCost()) {
        if (!this.canPayCost()) {
            const settings = VisuMZ.ButtonCommonEvents.Settings.Cost || {};
            paintOpacity = settings.DisabledOpacity ?? 160;
        }
    }
    this.bitmap.paintOpacity = paintOpacity;
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.drawBaseJS = function() {
    const settings = VisuMZ.ButtonCommonEvents.Settings.General;
    settings.DrawJS.call(this);
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.drawDisplayType = function() {
    // Return Check
    const displayData = $gameSystem.getButtonCommonEventDisplayData(this._key);
    if (!displayData) return;

    // Declare Object
    const id = displayData.id || 0;
    const type = displayData.type;
    let obj = VisuMZ.ButtonCommonEvents.GetObject(type, id);
    if (!obj) return;

    // Draw Skill Cost
    if (DataManager.isSkill(obj) && Imported.VisuMZ_1_SkillsStatesCore) {
        this.drawDisplaySkillCost(obj, displayData.actorID);
        
    // Draw Item Cost
    } else if (!DataManager.isSkill(obj) && Imported.VisuMZ_1_ItemsEquipsCore) {
        this.drawDisplayItemQuantity(obj);
    }
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.drawDisplaySkillCost = function(obj, actorID) {
    // Return Check
    if (!obj) return;
    if (!Imported.VisuMZ_1_SkillsStatesCore) return;

    // Declare Actor
    const actor = $gameActors.actor(actorID);
    if (!actor) return;

    // Create Temp Window
    const bw = this.bitmap.width;
    const bh = this.bitmap.height;
    const padding = $gameSystem.windowPadding();
    const rect = new Rectangle(0, 0, bw + (padding * 2), bh + (padding * 2));
    const tempWindow = new Window_Base(rect);

    // Create Text
    if (!tempWindow.createAllSkillCostText) return;
    let costText = tempWindow.createAllSkillCostText(actor, obj);
    if (!costText) return;

    // Determine Data
    const costSize = tempWindow.textSizeEx(costText);
    const x = Math.floor((bw - costSize.width) / 2);
    const y = bh - costSize.height;

    // Draw Temp Window
    tempWindow.drawTextEx(costText, x, y);

    // Transfer to Current Bitmap
    const costSettings = VisuMZ.ButtonCommonEvents.Settings.Cost || {};
    let dx = costSettings.SkillOffsetX || 0;
    let dy = costSettings.SkillOffsetY || 0;
    this.bitmap.blt(tempWindow.contents, 0, 0, bw, bh, dx, dy);
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.drawDisplayItemQuantity = function(obj) {
    // Return Check
    if (!obj) return;
    if (!Imported.VisuMZ_1_ItemsEquipsCore) return;

    // Declare Dimensions
    const bw = this.bitmap.width;
    const bh = this.bitmap.height;

    // Get Item and Equips Core Settings
    const settings = VisuMZ.ItemsEquipsCore.Settings.ItemScene;
    const fmt = settings.ItemQuantityFmt;
    const text = fmt.format($gameParty.numItems(obj));

    // Declare Location
    const costSettings = VisuMZ.ButtonCommonEvents.Settings.Cost || {};
    let x = costSettings.ItemOffsetX || 0;
    let y = (costSettings.ItemOffsetY || 0) + Math.floor(bh / 2);

    // Draw
    this.bitmap.fontFace = $gameSystem.mainFontFace();
    this.bitmap.fontSize = settings.ItemQuantityFontSize;
    this.bitmap.drawText(text, x, y, bw, Math.floor(bh / 2), 'center');
    this.bitmap.fontFace = $gameSystem.numberFontFace();
    this.bitmap.fontSize = $gameSystem.mainFontSize();
};

Sprite_ButtonCommonEvent.prototype.isClickEnabled = function() {
    // Original
    if (this.opacity < 255) return false;
    if (this.commonEventID() <= 0) return false;

    // Original
    return true;
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.requiresCost = function() {
    return $gameSystem.buttonCommonEventRequiresCost(this._key);
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.canPayCost = function() {
    return $gameSystem.buttonCommonEventCanPayCost(this._key);
};

// v1.07 added by Arisu
Sprite_ButtonCommonEvent.prototype.payCost = function() {
    return $gameSystem.buttonCommonEventPayCost(this._key);
};

Sprite_ButtonCommonEvent.prototype.onMouseEnter = function() {
    Sprite_Clickable.prototype.onMouseEnter.call(this);
    this.onColorTone(); // v1.02 changed by Yanfly
};

Sprite_ButtonCommonEvent.prototype.onMouseExit = function() {
    Sprite_Clickable.prototype.onMouseExit.call(this);
    this.clearColorTone(); // v1.02 changed by Yanfly
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.onPress = function() {
    Sprite_Clickable.prototype.onPress.call(this);
    this.onColorTone();
};

Sprite_ButtonCommonEvent.prototype.onClick = function() {
    Sprite_Clickable.prototype.onClick.call(this);
    if (this.canPayCost()) { // v1.06 added by Arisu
        this.payCost(); // v1.06 added by Arisu
        this.callCommonEvent();
    }
    TouchInput.clear(); // v1.06 added by Arisu
    this.onMouseExit();
};

 // v1.02 added by Yanfly
Sprite_ButtonCommonEvent.prototype.onColorTone = function() {
    const settings = VisuMZ.ButtonCommonEvents.Settings.General;
    if (settings.ChangeTone) {
        this.setColorTone(settings.HoverTone);
    }
};

// v1.02 added by Yanfly
Sprite_ButtonCommonEvent.prototype.clearColorTone = function() {
    this.setColorTone([0, 0, 0, 0]);
};

// v1.02 added by Yanfly
Sprite_ButtonCommonEvent.prototype.flashColorTone = function() {
    this.onColorTone();
    setTimeout(this.clearColorTone.bind(this), 100);
};

Sprite_ButtonCommonEvent.prototype.callCommonEvent = function() {
    if (!SceneManager._scene.isButtonCommonEventOk()) return;
    if ($gameMap && $gameMap.isEventRunning()) return;
    const commonEventId = this.commonEventID();
    $gameTemp.reserveCommonEvent(commonEventId);
    this.onMouseExit();
    this.flashColorTone(); // v1.02 added by Yanfly
};

Sprite_ButtonCommonEvent.prototype.isCommonEventPressed = function() {
    if (!this.isPressed()) return false;
    if (this.commonEventID() <= 0) return false; // v1.06 fixed by Arisu
    return true;
};

Sprite_ButtonCommonEvent.prototype.update = function() {
    Sprite_Clickable.prototype.update.call(this);

    // v1.06 added by Arisu
    if (this.needsRefresh()) {
        this.updateRefreshCache();
        this.refresh();
    }

    // Original
    this.updateOpacity();
    this.updateIcon();
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.needsRefresh = function() {
    const displayData = $gameSystem.getButtonCommonEventDisplayData(this._key);
    if (displayData) {
        const id = displayData.id || 0;
        const type = displayData.type || '';
        if (['item','weapon','armor'].includes(displayData.type)) {
            const obj = VisuMZ.ButtonCommonEvents.GetObject(type, id);
            if (obj) {
                const quantity = $gameParty.numItems(obj);
                if (this._lastDisplayQuantity !== quantity) return true;
            }
        }
        if (this.requiresCost()) {
            if (this._lastDisplayCanPay !== this.canPayCost()) return true;
        }
    }
    return false;
};

// v1.06 added by Arisu
Sprite_ButtonCommonEvent.prototype.updateRefreshCache = function() {
    const displayData = $gameSystem.getButtonCommonEventDisplayData(this._key);
    if (!displayData) return;
    const id = displayData.id || 0;
    const type = displayData.type || '';
    if (['item','weapon','armor'].includes(displayData.type)) {
        const obj = VisuMZ.ButtonCommonEvents.GetObject(type, id);
        if (obj) {
            const quantity = $gameParty.numItems(obj);
            this._lastDisplayQuantity = quantity;
        }
    }
    if (this.requiresCost()) {
        this._lastDisplayCanPay = this.canPayCost();
    }
};

Sprite_ButtonCommonEvent.prototype.updateOpacity = function() {
    const target = this.targetOpacity();
    if (this.opacity > target) {
        this.opacity -= 16;
    } else if (this.opacity < target) {
        this.opacity += 16;
    }
};

Sprite_ButtonCommonEvent.prototype.targetOpacity = function() {
    if ($gameMessage && $gameMessage.isBusy()) return 0;

    if (!$gameSystem.isShowButtonCommonEventButtons()) return 0;

    if (this.settings().ShowOnlyIfCePresent) {
        const commonEventId = this.commonEventID();
        if (!$dataCommonEvents[commonEventId]) return 0;
    }
    return 255;
};

Sprite_ButtonCommonEvent.prototype.updateIcon = function() {
    if (this._icon === this.buttonIcon()) return;

    this._icon = this.buttonIcon();
    this.refresh();
};

VisuMZ.ButtonCommonEvents.drawData = function() {

    // Declare Constants
    const w = this.width;
    const h = this.height;
    
    // Draw Background
    const c1 = ColorManager.itemBackColor1();
    const c2 = ColorManager.itemBackColor2();
    this.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);
    this.bitmap.strokeRect(1, 1, w-2, h-2, c1);
    
    // Draw Picture
    if (this.pictureBitmap()) {
        const picBitmap = this.pictureBitmap();
        const pw = picBitmap.width;
        const ph = picBitmap.height;
        this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);
    }
    
    // Draw Icon
    const iconIndex = this.buttonIcon();
    const iconBitmap = ImageManager.loadSystem("IconSet");
    const iw = ImageManager.iconWidth;
    const ih = ImageManager.iconHeight;
    const ix = (iconIndex % 16) * iw;
    const iy = Math.floor(iconIndex / 16) * ih;
    const jw = Math.floor(this.width / iw) * iw;
    const jh = Math.floor(this.height / ih) * ih;
    const jx = Math.floor((this.width - jw) / 2);
    const jy = Math.floor((this.height - jh) / 2);
    this.bitmap._context.imageSmoothingEnabled = false;
    this.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);
    this.bitmap._context.imageSmoothingEnabled = true;
    
    // Draw Button Label
    const text = this.buttonLabel();
    this.bitmap.fontFace = $gameSystem.numberFontFace();
    this.bitmap.fontSize = $gameSystem.mainFontSize();
    this.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');
    
}; // End Function

//=============================================================================
// Assign From Item Scene
//=============================================================================

VisuMZ.ButtonCommonEvents.CanAssignButtonCommonEvent = function(item) {
    if (!item) return false;
    if (!['Scene_Item','Scene_Skill'].includes(SceneManager._scene.constructor.name)) return false;
    const regexp = VisuMZ.ButtonCommonEvents.RegExp;
    const note = item.note;
    return note.match(regexp.AssignCommonEvent) && note.match(regexp.AssignButtonSlots);
};

//-----------------------------------------------------------------------------
// TextManager
//
// The static class that handles terms and messages.

TextManager.assignButtonCommonEventWindowTitle = VisuMZ.ButtonCommonEvents.Settings.Assign.Instruction;

//-----------------------------------------------------------------------------
// Scene_ItemBase
//
// The superclass of Scene_Item and Scene_Skill.

Scene_ItemBase.prototype.createAssignButtonCommonEventsWindow = function() {
    // Declare Variables
    const regexp = VisuMZ.ButtonCommonEvents.RegExp;
    const note = this.item().note;

    note.match(regexp.AssignButtonSlots);
    const slots = String(RegExp.$1).split(',').
        map(i => String(i).toUpperCase().trim()).
        filter(i => TextManager.stringKeyMap.includes(i)).
        filter(i => VisuMZ.ButtonCommonEvents.KeysArray.includes(TextManager.stringKeyMap.indexOf(i))).
        filter(i => !Input.isButtonCommonEventForbidden(TextManager.stringKeyMap.indexOf(i)));

    note.match(regexp.AssignCommonEvent);
    const commonEventID = eval(RegExp.$1);

    // Create Window
    const rect = this.assignButtonCommonEventsWindowRect(slots);
    const newWindow = new Window_AssignButtonCommonEvent(rect);
    newWindow.setData(commonEventID, slots);
    this.addChild(newWindow);
    this._assignButtonCommonEventsWindow = newWindow;

    // Set Handlers
    newWindow.setHandler('assign', this.onButtonAssistAssign.bind(this));
    newWindow.setHandler('cancel', this.onButtonAssistCancel.bind(this));
};

Scene_ItemBase.prototype.assignButtonCommonEventsWindowRect = function(slots) {
    const settings = VisuMZ.ButtonCommonEvents.Settings.Assign;
    if (settings && settings.AssignWindow_RectJS) {
        return settings.AssignWindow_RectJS.call(this, slots);
    }

    const cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;
    let ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);
    ww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);
    let wh = this.calcWindowHeight(3, true);
    let wx = Math.round((Graphics.boxWidth - ww) / 2);
    let wy = Math.round((Graphics.boxHeight - wh) / 2);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_ItemBase.prototype.onButtonAssistAssign = function() {
    const keyCode = this._assignButtonCommonEventsWindow.currentExt();
    const commonEventID = this._assignButtonCommonEventsWindow._commonEventID;
    const icon = this.item().iconIndex;
    
    $gameSystem.setupButtonCommonEventDisplays(keyCode, this.item()); // v1.06 added by Arisu
    const displayData = $gameSystem.getButtonCommonEventDisplayData(keyCode);
    if (displayData && displayData.type) {
        $gameSystem.clearButtonCommonEventID(commonEventID, displayData);
    } else {
        $gameSystem.clearButtonCommonEventID(commonEventID);
    }

    $gameSystem.setButtonCommonEvent(keyCode, commonEventID);
    $gameSystem.setButtonCommonEventIcon(keyCode, icon);
    this._assignButtonCommonEventsWindow.refresh();

    setTimeout(this.onButtonAssistCancel.bind(this), 500);
};

Scene_ItemBase.prototype.onButtonAssistCancel = function() {
    this._windowLayer.removeChild(this._assignButtonCommonEventsWindow);
    this._assignButtonCommonEventsWindow.destroy();
    this._assignButtonCommonEventsWindow = undefined;
    this._itemWindow.activate();
    this._itemWindow.callUpdateHelp();
};

//-----------------------------------------------------------------------------
// Scene_Item
//
// The scene class of the item screen.

VisuMZ.ButtonCommonEvents.Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
Scene_Item.prototype.onItemOk = function() {
    if (VisuMZ.ButtonCommonEvents.CanAssignButtonCommonEvent(this.item())) {
        this.createAssignButtonCommonEventsWindow();
    } else {
        VisuMZ.ButtonCommonEvents.Scene_Item_onItemOk.call(this);
    }
};

VisuMZ.ButtonCommonEvents.Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
Scene_Skill.prototype.onItemOk = function() {
    if (VisuMZ.ButtonCommonEvents.CanAssignButtonCommonEvent(this.item())) {
        this.createAssignButtonCommonEventsWindow();
    } else {
        VisuMZ.ButtonCommonEvents.Scene_Skill_onItemOk.call(this);
    }
};

//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.

VisuMZ.ButtonCommonEvents.Window_ItemList_isEnabled = Window_ItemList.prototype.isEnabled;
Window_ItemList.prototype.isEnabled = function(item) {
    if (VisuMZ.ButtonCommonEvents.CanAssignButtonCommonEvent(item)) {
        return true;
    } else {
        return VisuMZ.ButtonCommonEvents.Window_ItemList_isEnabled.call(this, item);
    }
};

//-----------------------------------------------------------------------------
// Window_SkillList
//
// The window for selecting a skill on the skill screen.

VisuMZ.ButtonCommonEvents.Window_SkillList_isEnabled = Window_SkillList.prototype.isEnabled;
Window_SkillList.prototype.isEnabled = function(item) {
    if (VisuMZ.ButtonCommonEvents.CanAssignButtonCommonEvent(item)) {
        return true;
    } else {
        return VisuMZ.ButtonCommonEvents.Window_SkillList_isEnabled.call(this, item);
    }
};

//-----------------------------------------------------------------------------
// Window_AssignButtonCommonEvent
//
// The window for assigning Button Common Events.

function Window_AssignButtonCommonEvent() {
    this.initialize(...arguments);
}

Window_AssignButtonCommonEvent.prototype = Object.create(Window_HorzCommand.prototype);
Window_AssignButtonCommonEvent.prototype.constructor = Window_AssignButtonCommonEvent;

Window_AssignButtonCommonEvent.BUTTON_LABEL_ALIGN = VisuMZ.ButtonCommonEvents.Settings.Assign.AssignWindow_KeyAlign;

Window_AssignButtonCommonEvent.prototype.initialize = function(rect) {
    this._commonEventID = 0;
    this._slots = [];
    Window_HorzCommand.prototype.initialize.call(this, rect);
};

Window_AssignButtonCommonEvent.prototype.maxCols = function() {
    return this._slots.length || 1;
};

Window_AssignButtonCommonEvent.prototype.colSpacing = function() {
    return 0;
};

Window_AssignButtonCommonEvent.prototype.itemHeight = function() {
    return (Window_Scrollable.prototype.itemHeight.call(this) * 2) + 8;
};

Window_AssignButtonCommonEvent.prototype.setData = function(commonEventID, slots) {
    this._commonEventID = commonEventID;
    this._slots = slots;
    this.refresh();

    let index = 0;
    for (const letter of this._slots) {
        const keyCode = TextManager.stringKeyMap.indexOf(letter);
        if ($gameSystem.getButtonCommonEvent(keyCode) === this._commonEventID) {
            index = this._slots.indexOf(letter);
        }
    }

    this.forceSelect(index);
    this.refreshCursor();
};

Window_AssignButtonCommonEvent.prototype.makeCommandList = function() {
    if (!this._slots) return;
    for (const letter of this._slots) {
        const keyCode = TextManager.stringKeyMap.indexOf(letter);
        const settings = VisuMZ.ButtonCommonEvents.Settings['KeyCode%1'.format(keyCode)];
        const name = settings.ButtonText;
        this.addCommand(name, 'assign', true, keyCode);
    }
};

Window_AssignButtonCommonEvent.prototype.itemRect = function(index) {
    const rect = Window_HorzCommand.prototype.itemRect.call(this, index);
    rect.y += this.lineHeight() + 8 - this.rowSpacing() / 2 - this.scrollBaseY();
    return rect;
};

Window_AssignButtonCommonEvent.prototype.refresh = function() {
    Window_HorzCommand.prototype.refresh.call(this);
    if (!this._slots) return;
    this.drawTitle();
};

Window_AssignButtonCommonEvent.prototype.drawTitle = function() {
    this.resetFontSettings();
    this.changePaintOpacity(true);
    const text = TextManager.assignButtonCommonEventWindowTitle;
    this.drawText(text, 0, 0, this.innerWidth, 'center');
};

Window_AssignButtonCommonEvent.prototype.drawItem = function(index) {
    // Declare Constants
    const rect = this.itemRectWithPadding(index);
    const keyCode = this._list[index].ext;

    // Draw Icon
    const iconIndex = $gameSystem.getButtonCommonEventIcon(keyCode);
    const ix = rect.x + Math.round((rect.width - ImageManager.iconWidth) / 2);
    const iy = rect.y + Math.round((rect.height - ImageManager.iconHeight/2) / 2);
    this.drawIcon(iconIndex, ix, iy);
    
    // Draw Text
    this.resetFontSettings();
    this.contents.fontFace = $gameSystem.numberFontFace();
    this.contents.fontSize = $gameSystem.mainFontSize();
    this.changePaintOpacity(this.isCommandEnabled(index));
    const align = Window_AssignButtonCommonEvent.BUTTON_LABEL_ALIGN;
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

Window_AssignButtonCommonEvent.prototype.playOkSound = function() {
    SoundManager.playEquip();
};

//-----------------------------------------------------------------------------
// New Category
//
// ....

// v1.06 added by Arisu
VisuMZ.ButtonCommonEvents.GetObject = function(type, id) {
    if (type === 'skill') return $dataSkills[id];
    if (type === 'item') return $dataItems[id];
    if (type === 'weapon') return $dataWeapons[id];
    if (type === 'armor') return $dataArmors[id];
    return null;
};

//=============================================================================
// End of File
//=============================================================================