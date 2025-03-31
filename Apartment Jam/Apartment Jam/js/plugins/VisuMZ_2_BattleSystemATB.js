//=============================================================================
// VisuStella MZ - Battle System ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.31;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.31] [BattleSystemATB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ATB_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The RPG Maker MZ Time Progress Battle (TPB) system is only a few steps away
 * from the acclaimed Active Turn Battle (ATB) system. This plugin will grant
 * it the various features needed to turn it from TPB into ATB.
 * 
 * This plugin will grant control over how the various mechanics work, ranging
 * from penalties to calculations, to actions that can manipulate the ATB gauge
 * of battlers. Battlers that are in the middle of casting a spell can also be
 * interrupted with specific notetag traits.
 * 
 * ATB Gauges can also be displayed on enemies and/or allies, giving the player
 * full access to the current battle state. The ATB Gauges are also improved,
 * showing different colors for different states and showing a new gauge for
 * the casting state.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB/ATB mechanics such as speed, calculations, etc.
 * * Notetags that give skills and items access to ATB Gauge manipulation, by
 *   altering how filled they are.
 * * Interrupts can be used on battlers in the middle of casting a skill.
 * * Visual ATB Gauges can be displayed over battlers' heads.
 * * ATB Gauges have extra coloring options added to them to let the player
 *   quickly know the current speed state of the ATB Gauge.
 * * A field-wide ATB Gauge that positions actor and enemy markers on it to
 *   show how far along actors and enemies are relative to each other's turns.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * ATB Gauges
 * 
 * The gauges are now revamped to show different colors to depict the various
 * ATB states a battler can be in. These various states include the following:
 * 
 * - When a battler's speed is fully stopped.
 * - When a battler's speed is slower/faster past a specific rating.
 * - When a battler is ready for an action.
 * - When a battler is casting an action (those with negative speed values).
 * 
 * The colors used for these states can be found and altered in the Plugin
 * Parameters under Gauge Color Settings.
 *
 * ---
 * 
 * Skill & Item Speeds
 * 
 * With TPB, skills and items with negative speed values will cause the battler
 * to enter a "casting" state, meaning they have to wait extra time before the
 * action takes off. With this delayed action execution, one might assume that
 * if there is a positive speed value, the battler would require less time for
 * their next turn.
 * 
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to ATB,
 * skills and items with positive speed values will have an impact on how full
 * their ATB Gauges will be in the following turn. A value of 2000 will put the
 * gauge at 50% full, 1000 will put the gauge at 25% full, 500 will put it at
 * 12.5% full, and so on. Notetags can also be used to influence this.
 * 
 * ---
 * 
 * JS Calculation Mechanics
 * 
 * While the calculation mechanics aren't changed from their original RPG Maker
 * MZ formulas, the functions for them have been overwritten to allow you, the
 * game developer, to alter them as you see fit.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine
 *
 * - ATB Interrupts can have animations played when they trigger if the
 * VisuStella Core Engine is installed.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * - Having the VisuStella Options Core available will allow you to adjust the
 * speed at which the ATB gauges fill up.
 * 
 * - The VisuStella Options Core also gives the player the option to toggle
 * between Active and Wait-based ATB.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * === General ATB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 *
 * ---
 * 
 * <ATB Help>
 *  description
 *  description
 * </ATB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under TPB/ATB.
 * - This is primarily used if the skill behaves differently in TPB/ATB versus
 *   any other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to TPB/ATB.
 * 
 * ---
 *
 * <Hide ATB Gauge>
 *
 * - Used for: Enemy Notetags
 * - If you don't want an enemy to show their ATB Gauge, use this notetag.
 * 
 * ---
 * 
 * === ATB Field Gauge-Related Notetags ===
 * 
 * These notetags only work if the ATB Field Gauge is enabled.
 * 
 * ---
 *
 * <ATB Field Gauge Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <ATB Field Gauge Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <ATB Field Gauge Face: Monster, 1>
 * 
 * ---
 * 
 * === ATB Gauge Manipulation-Related Notetags ===
 * 
 * These notetags are used for ATB Gauge manipulation purposes.
 * 
 * ---
 *
 * <ATB After Gauge: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's ATB Gauge will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   ATB Gauge to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <ATB Charge Gauge: x%>
 * <ATB Charge Gauge: +x%>
 * <ATB Charge Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <ATB Cast Gauge: x%>
 * <ATB Cast Gauge: +x%>
 * <ATB Cast Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 *
 * <ATB Interrupt>
 *
 * - Used for: Skill, Item Notetags
 * - If this skill/item hits a target who is in a casting state, interrupt that
 *   action to cancel it and reset the target's ATB Gauge to 0%.
 * 
 * ---
 *
 * <ATB Cannot Be Interrupted>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the skill/item immune to ATB Interruptions.
 * 
 * ---
 * 
 * <ATB Battle Start Gauge: +x%>
 * <ATB Battle Start Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determine how much extra or less ATB Gauge the battler will start with if
 *   associated with one of these database objects.
 * - Replace 'x' with a percentile value determining how much extra or less ATB
 *   Gauge value the battler will start battle with.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * <ATB After Gauge: +x%>
 * <ATB After Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Determine how much influence there is on the ATB Gauge after finishing a
 *   skill/item. Increase or decrease the amount after each action.
 * - Replace 'x' with a percentile value determining how much influence there
 *   is on the ATB Gauge after the skill/item has finished performing.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * === JavaScript Notetags: ATB Gauge Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional ATB Gauge Manipulation.
 * 
 * ---
 * 
 * <JS ATB Charge Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Charge Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a charging state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS ATB Cast Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Cast Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a casting state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS ATB After Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB After Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to after performing this skill/item action.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to 0.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Field Gauge Icon
 * - Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change Field Gauge Face
 * - Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Face Name:
 *   - This is the filename for the target face graphic.
 * 
 *   Face Index:
 *   - This is the index for the target face graphic.
 * 
 * ---
 *
 * Actor: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Field Gauge Icon
 * - Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change Field Gauge Face
 * - Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: ATB Field Gauge Visibility
 * - Determine the visibility of the ATB Field Gauge.
 * 
 *   Visibility:
 *   - Changes the visibility of the ATB Field Gauge.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System ATB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * Mechanics
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 * 
 *   Stuns Reset Gauge?:
 *   - Should stuns reset the ATB Gauge?
 * 
 *   JS: Initial Gauge:
 *   - JavaScript code to determine how much ATB gauge to give each battler at
 *     the start of battle.
 * 
 *   JS: Speed:
 *   - JavaScript code to determine how much speed a battler has.
 * 
 *   JS: Base Speed:
 *   - JavaScript code to determine how much base speed a battler has.
 * 
 *   JS: Relative Speed:
 *   - JavaScript code to determine what is the relative speed of a battler.
 * 
 *   JS: Acceleration:
 *   - JavaScript code to determine how much gauges accelerate by relative to
 *     reference time.
 * 
 *   JS: Cast Time:
 *   - JavaScript code to determine how much cast time is used for skills/items
 *     with negative speed modifiers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Interrupt Settings
 * ============================================================================
 *
 * Interrupt settings used for Battle System ATB.
 *
 * ---
 *
 * Interrupt
 * 
 *   Animation ID:
 *   - Play this animation when a unit is interrupted.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Text Popup:
 *   - Text used for popup when interrupts happen.
 *   - Leave empty for no popup.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Flash Color:
 *     - Adjust the popup's flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *     Flash Duration:
 *     - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Gauge Settings
 * ============================================================================
 *
 * General gauge settings used for ATB Gauges.
 *
 * ---
 *
 * General
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the ATB Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the ATB Gauge to be scaled?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How many pixels to offset the ATB Gauge's X/Y by?
 *
 * ---
 *
 * AGI Gauge Rates
 * 
 *   Slow Rate:
 *   - How much should the AGI rate be at to be considered slow?
 * 
 *   Fast Rate:
 *   - How much should the AGI rate be at to be considered fast?
 *
 * ---
 *
 * Actors
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the actor sprites' heads?
 *   - Requires SV Actors to be visible.
 * 
 *   Show Status Gauges:
 *   - Show ATB Gauges in the status window?
 *   - Applies only to sideview.
 *
 * ---
 *
 * Enemies
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the enemy sprites' heads?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Field Gauge Settings
 * ============================================================================
 * 
 * The ATB Field Gauge is a large gauge placed on the screen with all of the
 * current battle's active participants shown on it. The participants are
 * represented by a marker. Each marker's position on the gauge indicates its
 * battler's ATB progress towards a turn.
 * 
 * In order for this feature to work, enable "Use Field Gauge?" in the
 * Plugin Parameters.
 *
 * ---
 *
 * General
 * 
 *   Use Field Gauge?:
 *   - This value must be set to true in order for the ATB Field Gauge
 *     to appear.
 *   - This needs to be on in order for this feature to work.
 * 
 *   Display Position:
 *   - Select where the Field Gauge will appear on the screen.
 *   - Top
 *   - Bottom
 *   - Left
 *   - Right
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset the X/Y coordinates by.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the gauge when the
 *     help window is open?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Field Gauge.
 *   - Settings may vary depending on position.
 *   - Left to Right
 *   - Right to Left
 *   - Up to Down
 *   - Down to Up
 *
 * ---
 *
 * Field Gauge Settings
 * 
 *   Gauge Skin:
 *   - Optional. Select an image to place behind the gauge.
 *   - This will be centered on the Field Gauge's position.
 * 
 *   Show Gauge?:
 *   - Decide if you want the gauge to be shown.
 * 
 *   Horizontal Length:
 *   - The length of the Field Gauge if placed horizontally.
 * 
 *   Vertical Length:
 *   - The length of the Field Gauge if placed vertically.
 * 
 *   Thickness:
 *   - The thickness of the Field Gauge for either direction.
 * 
 *   Split Location:
 *   - Determine where the gauge should split.
 *   - Use 0.00 for the start. Use 1.00 for the end.
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actor Marker Side:
 *   - Which side do you want the actor markers to appear?
 * 
 *   Enemy Marker Side:
 *   - Which side do you want the enemy markers to appear?
 * 
 *   Marker Offset:
 *   - How many pixels do you want to offset the markers by?
 * 
 *   Marker Size:
 *   - How pixels wide and tall do you want the markers to be?
 * 
 *   Marker Speed:
 *   - How many pixels maximum can a marker travel in one frame?
 * 
 *   Opacity Rate:
 *   - If a marker has to change opacity, how fast should it change by?
 *
 * ---
 *
 * Marker Border
 * 
 *   Show Border?:
 *   - Show borders for the marker sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Marker Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the marker sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Marker Background
 * 
 *   Show Background?:
 *   - Show the background on the marker sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Arrow
 * 
 *   Show Arrow?:
 *   - Show the arrow sprite pointing towards the Field Gauge?
 * 
 *   Arrow Skin:
 *   - Pick a window skin to draw arrows from.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Color Settings
 * ============================================================================
 *
 * Gauge color settings used for ATB Gauges.
 *
 * ---
 *
 * Colors
 * 
 *   Default Color 1:
 *   Default Color 2:
 *   Full Color 1:
 *   Full Color 2:
 *   Cast Color 1:
 *   Cast Color 2:
 *   Fast Color 1:
 *   Fast Color 2:
 *   Slow Color 1:
 *   Slow Color 2:
 *   Stop Color 1:
 *   Stop Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings used for Battle System ATB.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Show ATB Gauges' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.31: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where sideview battlers would have misplaced ATB gauge
 *    positions. Fix made by Olivia.
 * 
 * Version 1.30: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause multi-actions under restrictions to
 *    desynchronize skill speeds and result in softlocks. Fix made by Olivia.
 * ** Fixed an error that would cause slow speeds to all equal one another.
 *    Fix made by Olivia.
 * 
 * Version 1.29: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an error with casting times for battlers not working properly when
 *    the numeric values are too small. Fix made by Olivia.
 * 
 * Version 1.28: June 15, 2023
 * * Bug Fixes!
 * ** Crash should no longer occur for the end of ATB actions. Fix made
 *    by Olivia.
 * 
 * Version 1.27: May 18, 2023
 * * Bug Fixes!
 * ** Enemies no longer soft-lock themselves if they get stunned via a counter
 *    attack with an attack-state that applies stun. Fix made by Olivia.
 * 
 * Version 1.26: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused a clash when loaded together with certain
 *    combinations of plugins. Fix made by Olivia.
 * 
 * Version 1.25: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented initial ATB Gauge settings and features from
 *    working properly. Fix made by Irina.
 * 
 * Version 1.24: December 15, 2022
 * * Bug Fixes!
 * ** The Battle Core's <JS Pre-Start Turn> and <JS Post-Start Turn> notetags
 *    were previously disabled by this plugin. They should now be working again
 *    without problems. Fix made by Olivia.
 * 
 * Version 1.23: November 10, 2022
 * * Bug Fixes!
 * ** ATB Gauges will now display for ANIMATED sideview enemies depending on
 *    the Show Enemy Gauge setting. Fix made by Olivia.
 * 
 * Version 1.22: September 29, 2022
 * * Bug Fixes!
 * ** After enemies recover from a stun, enemies no longer take an immediate
 *    action regardless of their time gauge state. Fix made by Olivia.
 * 
 * Version 1.21: August 25, 2022
 * * Bug Fixes!
 * ** Restricted enemies will no longer be action-locked after removing the
 *    restriction state. Fix made by Olivia.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the ATB Field Gauge faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 21, 2022
 * * Bug Fixes!
 * ** Battlers under a "Cannot Move" state will no longer reset their ATB gauge
 *    after their "turn" comes up to update it. Fix made by Olivia.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <ATB After Gauge: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS ATB After Gauge> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: August 13, 2021
 * * Bug Fixes!
 * ** Crash prevented with certain Plugin Parameter combinations enabled when
 *    the ATB Gauge is filled up. Fix made by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly for SV Enemies, too. Fix made by Irina.
 * 
 * Version 1.14: July 16, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly. Fix made by Olivia.
 * 
 * Version 1.13: May 21, 2021
 * * Bug Fixes!
 * ** When slip damage is allowed to kill, dying actors will have their TPB
 *    state reset to charging in order to prevent lock-ups. Fix by Olivia.
 * 
 * Version 1.12: May 7, 2021
 * * Feature Update!
 * ** Actions with 0 or positive speed will now act immediately without
 *    allowing a single gauge tick pass through. Update made by Olivia.
 * 
 * Version 1.11: April 16, 2021
 * * Bug Fixes!
 * ** ATB Gauge visibility is now properly updated across various events such
 *    as party removal and other obstruction effects. Fix made by Olivia.
 * 
 * Version 1.10: March 12, 2021
 * * Hot Fix!
 * ** Fixed calculation errors due to field gauge. Fix made by Olivia.
 * * Feature Update!
 * ** Slight change to the way calculations are made for the bottom aligned
 *    field gauge position. Update made by Olivia.
 * 
 * Version 1.09: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.08: November 22, 2020
 * * Feature Update!
 * ** ATB Interrupts will not clear all actions (including queued ones) for
 *    mechanical compatibility. Change made by Yanfly.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change Field Gauge Face
 * **** Changes the faces used for the specific actor(s) on the ATB
 *      Field Gauge.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin should now be compatible with older saves when changing to a save
 *    that didn't use a Field Gauge to one that does. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <ATB Field Gauge Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Documentation Update
 * ** Help file updated with new features.
 * * Feature Update!
 * ** Enemy letters are no longer drawn on the Field Gauge unless there are
 *    multiple enemies of the same type. Added by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and Yanfly.
 * *** Plugin Parameters > Field Gauge > Offset X and Y
 * **** How much to offset the X/Y coordinates of the Field Gauge by.
 * 
 * Version 1.02: October 4, 2020
 * * New Features!
 * ** New Plugin Command added "System: ATB Field Gauge Visibility" to let you
 *    show or hide the Field Gauge during battle. Added by Arisu.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** ATB Cast and Charge notetags no longer cause crashes. Fix made by Olivia.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > Mechanics > Stuns Reset Gauge?
 * **** Should stuns reset the ATB Gauge?
 *
 * Version 1.00: September 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorIcon
 * @text Actor: Change Field Gauge Icon
 * @desc Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorFace
 * @text Actor: Change Field Gauge Face
 * @desc Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearActorGraphic
 * @text Actor: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyIcon
 * @text Enemy: Change Field Gauge Icon
 * @desc Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyFace
 * @text Enemy: Change Field Gauge Face
 * @desc Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearEnemyGraphic
 * @text Enemy: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldGaugeVisibility
 * @text System: ATB Field Gauge Visibility
 * @desc Determine the visibility of the ATB Field Gauge.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ATB Field Gauge.
 * @default true
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
 * @param BattleSystemATB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings used for Battle System ATB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","StunsResetGauge:eval":"false","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.5","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Interrupt:struct
 * @text Interrupt Settings
 * @type struct<Interrupt>
 * @desc Interrupt settings used for Battle System ATB.
 * @default {"Interrupt":"","InterruptAnimationID:num":"11","InterruptMirror:eval":"false","InterruptMute:eval":"false","InterruptText:str":"INTERRUPTED!","InterruptTextColor:str":"0","InterruptFlashColor:eval":"[255, 0, 0, 160]","InterruptFlashDuration:num":"60"}
 *
 * @param Gauge:struct
 * @text General Gauge Settings
 * @type struct<Gauge>
 * @desc General gauge settings used for ATB Gauges.
 * @default {"General":"","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"0","OffsetY:num":"2","AGIGaugeRates":"","SlowRate:num":"0.60","FastRate:num":"1.40","Actors":"","ShowActorGauge:eval":"true","ShowStatusGauge:eval":"false","Enemies":"","ShowEnemyGauge:eval":"true"}
 *
 * @param FieldGauge:struct
 * @text Field Gauge Settings
 * @type struct<FieldGauge>
 * @desc Make a field-wide ATB gauge for all the battlers.
 * @default {"General":"","UseFieldGauge:eval":"false","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","GaugeDirection:eval":"true","Gauge":"","GaugeSystemSkin:str":"","DrawGauge:eval":"true","GaugeLengthHorz:num":"600","GaugeLengthVert:num":"400","GaugeThick:num":"16","GaugeSplit:num":"0.70","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"48","Markers":"","ActorSide:eval":"true","EnemySide:eval":"false","MarkerOffset:num":"28","MarkerSize:num":"32","MarkerSpeed:num":"36","OpacityRate:num":"4","BorderThickness:num":"2","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"1","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"10","EnemyBgColor2:str":"18","EnemySystemBg:str":"","Arrow":"","ShowMarkerArrow:eval":"true","MarkerArrowWindowSkin:str":"Window"}
 *
 * @param Color:struct
 * @text Gauge Color Settings
 * @type struct<Color>
 * @desc Gauge color settings used for ATB Gauges.
 * @default {"default1:str":"26","default2:str":"27","full1:str":"14","full2:str":"6","cast1:str":"2","cast2:str":"10","fast1:str":"27","fast2:str":"18","slow1:str":"22","slow2:str":"23","stop1:str":"7","stop2:str":"8"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings used for Battle System ATB.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show ATB Gauges"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param General
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param StunsResetGauge:eval
 * @text Stuns Reset Gauge?
 * @parent General
 * @type boolean
 * @on Reset Gauge
 * @off Don't Reset
 * @desc Should stuns reset the ATB Gauge?
 * @default false
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Gauge
 * @parent JavaScript
 * @desc JavaScript code to determine how much ATB gauge to give
 * each battler at the start of battle.
 * @default Math.random() * 0.5
 *
 * @param TpbSpeedCalcJS:func
 * @text JS: Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much speed a battler has.
 * @default "// Declare Constants\nconst user = this;\n\n// Process Calculation\nlet speed = Math.sqrt(user.agi) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param TpbBaseSpeedCalcJS:func
 * @text JS: Base Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much base speed a battler has.
 * @default "// Declare Constants\nconst user = this;\nconst baseAgility = user.paramBasePlus(6);\n\n// Process Calculation\nlet speed = Math.sqrt(baseAgility) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param BattlerRelativeSpeedJS:func
 * @text JS: Relative Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine what is the relative speed of a battler.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbSpeed()\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\n\n// Process Calculation\nlet relativeSpeed = speed / partyBaseSpeed;\n\n// Return Value\nreturn relativeSpeed;"
 * 
 * @param TpbAccelerationJS:func
 * @text JS: Acceleration
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much gauges accelerate by relative to reference time.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\n\n// Process Calculation\nlet acceleration = speed / referenceTime;\n\n// Return Value\nreturn acceleration;"
 * 
 * @param TpbCastTimeJS:func
 * @text JS: Cast Time
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much cast time is used for skills/items with negative speed modifiers.
 * @default "// Declare Constants\nconst user = this;\nconst actions = user._actions.filter(action => action.isValid());\nconst items = actions.map(action => action.item());\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\n\n// Process Calculation\nlet time = Math.sqrt(delay) / user.tpbSpeed();\n\n// Return Value\nreturn time;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Interrupt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Interrupt:
 *
 * @param Interrupt
 *
 * @param InterruptAnimationID:num
 * @text Animation ID
 * @parent Interrupt
 * @type animation
 * @desc Play this animation when a unit is interrupted.
 * Requires VisuMZ_0_CoreEngine.
 * @default 11
 *
 * @param InterruptMirror:eval
 * @text Mirror Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptMute:eval
 * @text Mute Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptText:str
 * @text Text Popup
 * @parent Interrupt
 * @desc Text used for popup when interrupts happen.
 * Leave empty for no popup.
 * @default INTERRUPTED!
 *
 * @param InterruptTextColor:str
 * @text Text Color
 * @parent InterruptText:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param InterruptFlashColor:eval
 * @text Flash Color
 * @parent InterruptText:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param InterruptFlashDuration:num
 * @text Flash Duration
 * @parent InterruptText:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param General
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc How large/small do you want the ATB Gauge to be scaled?
 * @default 0.5
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's X by?
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's Y by?
 * @default 2
 *
 * @param AGIGaugeRates
 * @text AGI Gauge Rates
 *
 * @param SlowRate:num
 * @text Slow Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered slow?
 * @default 0.60
 *
 * @param FastRate:num
 * @text Fast Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered fast?
 * @default 1.40
 *
 * @param Actors
 *
 * @param ShowActorGauge:eval
 * @text Show Sprite Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the actor sprites' heads?
 * Requires SV Actors to be visible.
 * @default true
 *
 * @param ShowStatusGauge:eval
 * @text Show Status Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges in the status window?
 * Applies only to sideview.
 * @default false
 *
 * @param Enemies
 *
 * @param ShowEnemyGauge:eval
 * @text Show Sprite Gauges
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the enemy sprites' heads?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param default1:str
 * @text Default Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param default2:str
 * @text Default Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param full1:str
 * @text Full Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param full2:str
 * @text Full Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param cast1:str
 * @text Cast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param cast2:str
 * @text Cast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param fast1:str
 * @text Fast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param fast2:str
 * @text Fast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param slow1:str
 * @text Slow Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param slow2:str
 * @text Slow Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param stop1:str
 * @text Stop Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param stop2:str
 * @text Stop Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show ATB Gauges' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show ATB Gauges
 *
 */
/* ----------------------------------------------------------------------------
 * Field Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FieldGauge:
 *
 * @param General
 *
 * @param UseFieldGauge:eval
 * @text Use Field Gauge?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc This value must be set to true in order for the ATB Field Gauge to appear.
 * @default false
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Field Gauge will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * gauge when the help window is open?
 * @default true
 *
 * @param GaugeDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Up to Down
 * @off Right to Left / Down to Up
 * @desc Decide on the direction of the Field Gauge.
 * Settings may vary depending on position.
 * @default true
 *
 * @param Gauge
 * @text Field Gauge Settings
 *
 * @param GaugeSystemSkin:str
 * @text Gauge Skin
 * @parent Gauge
 * @type file
 * @dir img/system/
 * @desc Optional. Select an image to place behind the gauge.
 * This will be centered on the Field Gauge's position.
 * @default 
 *
 * @param DrawGauge:eval
 * @text Show Gauge?
 * @parent Gauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Decide if you want the gauge to be shown.
 * @default true
 *
 * @param GaugeLengthHorz:num
 * @text Horizontal Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed horizontally.
 * @default 600
 *
 * @param GaugeLengthVert:num
 * @text Vertical Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed vertically.
 * @default 400
 *
 * @param GaugeThick:num
 * @text Thickness
 * @parent Gauge
 * @type number
 * @min 3
 * @desc The thickness of the Field Gauge for either direction.
 * @default 16
 *
 * @param GaugeSplit:num
 * @text Split Location
 * @parent Gauge
 * @desc Determine where the gauge should split.
 * Use 0.00 for the start. Use 1.00 for the end.
 * @default 0.70
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the gauge's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the gauge's Y coordinates by this much when
 * the Help Window is visible.
 * @default 48
 *
 * @param Markers
 * @text Marker Sprites
 *
 * @param ActorSide:eval
 * @text Actor Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the actor markers to appear?
 * @default true
 *
 * @param EnemySide:eval
 * @text Enemy Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the enemy markers to appear?
 * @default false
 *
 * @param MarkerOffset:num
 * @text Marker Offset
 * @parent Markers
 * @desc How many pixels do you want to offset the markers by?
 * @default 28
 *
 * @param MarkerSize:num
 * @text Marker Size
 * @parent Markers
 * @type number
 * @min 10
 * @desc How pixels wide and tall do you want the markers to be?
 * @default 32
 *
 * @param MarkerSpeed:num
 * @text Marker Speed
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels maximum can a marker travel in one frame?
 * @default 36
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent Markers
 * @type number
 * @min 1
 * @desc If a marker has to change opacity, how fast should it change by?
 * @default 4
 *
 * @param Border
 * @text Marker Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the marker sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Marker Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Marker Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the marker sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Marker Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the marker sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 1
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param Arrow
 * @text Marker Arrow
 *
 * @param ShowMarkerArrow:eval
 * @text Show Arrow?
 * @parent Arrow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the arrow sprite pointing towards the Field Gauge?
 * @default true
 *
 * @param MarkerArrowWindowSkin:str
 * @text Arrow Skin
 * @parent Arrow
 * @type file
 * @dir img/system/
 * @desc Pick a window skin to draw arrows from.
 * @default Window
 *
 */
//=============================================================================

const _0x731a2e=_0x5174;(function(_0x280fcc,_0x14eef5){const _0xff3b03=_0x5174,_0x2a386b=_0x280fcc();while(!![]){try{const _0x1ea8be=-parseInt(_0xff3b03(0x17c))/0x1*(parseInt(_0xff3b03(0x2fd))/0x2)+parseInt(_0xff3b03(0x245))/0x3+parseInt(_0xff3b03(0x136))/0x4*(parseInt(_0xff3b03(0x1c9))/0x5)+-parseInt(_0xff3b03(0x1b2))/0x6+parseInt(_0xff3b03(0x2f5))/0x7*(parseInt(_0xff3b03(0x105))/0x8)+-parseInt(_0xff3b03(0x127))/0x9*(-parseInt(_0xff3b03(0x206))/0xa)+parseInt(_0xff3b03(0x30d))/0xb*(parseInt(_0xff3b03(0x21a))/0xc);if(_0x1ea8be===_0x14eef5)break;else _0x2a386b['push'](_0x2a386b['shift']());}catch(_0x5167fa){_0x2a386b['push'](_0x2a386b['shift']());}}}(_0x2328,0x2943e));var label=_0x731a2e(0x1d1),tier=tier||0x0,dependencies=[_0x731a2e(0x2cb)],pluginData=$plugins[_0x731a2e(0x264)](function(_0x4d8783){const _0x249f6e=_0x731a2e;return _0x4d8783[_0x249f6e(0x13d)]&&_0x4d8783[_0x249f6e(0x163)][_0x249f6e(0x2fb)]('['+label+']');})[0x0];function _0x2328(){const _0x4c90d4=['updateMain','Sprite_Battler_update','BorderThickness','_atbGaugeSprite','FaceIndex','fillRect','_graphicFaceName','requestFauxAnimation','clearTpbChargeTime','endBattlerActions','Actor-%1-%2','ulMZv','fontFace','updatePositionOffset','_fieldAtbGaugeFaceIndex','InterruptText','createFieldAtbGraphicFaceIndex','width','Sprite_Gauge_currentValue','_tpbCastTime','Game_Battler_applyTpbPenalty','createGaugeBitmap','addBattleSystemATBShowGaugeCommand','isATB','QjOVF','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','VisuMZ_1_BattleCore','parse','HWRMh','dRJoO','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','yISTU','createArrowSprite','isEnemy','makeData','visible','isActiveTpb','AdjustRect','NzPWw','textColor','ssVon','yZIro','loadSvEnemy','ConfigManager_applyData','GaugeThick','LNGyn','_windowLayer','zQDeH','EVAL','UAtHf','SOgmv','bmQIq','Sprite_Gauge_gaugeColor2','createFieldAtbGraphicFaceName','setBattleSystemATBFieldGaugeVisible','ShowActorGauge','length','_fieldGaugeATB_Container','ARRAYSTRUCT','FieldGaugeClearActorGraphic','XfbId','MarkerSpeed','qYkAp','actor','trim','InterruptMute','qVIdV','Game_Actor_clearActions','28jcOFsX','YkWGy','atbStopped','drawGaugeBitmap','_graphicIconIndex','ParseSkillNotetags','includes','setupTextPopup','2bozTqz','addGeneralOptions','isShowAtbGauge','exit','CKRHo','FihBh','mzCAh','targetPositionOnGauge','blt','lYhGF','FastRate','EnemyBattlerDrawLetter','canMove','gaugeHeight','_atbFieldGaugeVisible','Window_Help_setItem','2761qVNvNB','atbInterrupt','call','setAtbChargeTime','isAlive','_tpbIdleTime','getStateTooltipBattler','Game_Action_applyItemUserEffect','ZwABL','WijbE','_fnord','jPdwj','atbAcceleration','Enemies','_fieldAtbGaugeFaceName','initMembers','iUsUB','sort','fieldAtbGraphicType','addChildAt','loadSvActor','Game_Battler_startTpbCasting','ctGaugeColor1','XKDws','_tpbTurnCount','gaugeColor1','setupAtbGaugeSprite','createGraphicSprite','match','voJSn','VSIjF','%1SystemBorder','tpbBaseSpeed','CyqkV','lineHeight','Scene_Boot_onDatabaseLoaded','RegExp','gLCWj','lZFyM','SystemFieldGaugeVisibility','xjgcz','vlbfM','Weapon-%1-%2','zXhpC','faceName','isTpbCharged','RepositionTopForHelp','LUReg','changeIconGraphicBitmap','createEnemySprites','Window_Options_addGeneralOptions','showVisualAtbGauge','FieldGaugeClearEnemyGraphic','Enemy-%1-%2','INljk','subject','fast','IconIndex','createFieldGaugeContainerATB','create','Game_Unit_updateTpb','isCTB','createFieldGaugeSpriteATB','_helpWindow','atbColor','createBackgroundSprite','mqKZE','updateBattleContainerOrder','GaugeLengthHorz','313304fGBJBc','Settings','Sprite_Gauge_gaugeColor1','Window_BattleStatus','atbCurrentValue','mainFontFace','VisuMZ_2_AggroControlSystem','setText','faceWidth','ShowMarkerBg','Game_Battler_clearTpbChargeTime','_needsAtbClear','addBattleSystemATBCommands','_fieldAtbGaugeGraphicType','Mechanics','(?:ATB|TPB)','opacity','createGaugeSprite','InterruptTextColor','addCommand','bind','Game_Battler_onRestrict','addChild','_fieldAtbGaugeIconIndex','Game_Battler_initTpbChargeTime','svActorHorzCells','setAtbGraphicIconIndex','charging','updateGraphic','time','_graphicFaceIndex','updateGraphicHue','battleMembers','_graphicType','333FuQbUP','isAttack','_unit','_graphicSprite','Armor-%1-%2','LlvvZ','addLoadListener','right','faceHeight','setAtbAfterSpeed','FUNC','tpbAcceleration','registerCommand','allBattleMembers','canMakeTpbActionsAtStartTpbTurn','404872RWfiSb','fieldAtbGraphicFaceIndex','gaugeRate','tpbRequiredCastTime','ibLXg','updateTpb','enemy','status','ceil','Game_BattlerBase_die','EnemyBattlerType','IwYgH','After','face','EnemyBattlerFontSize','SlowRate','battleUIOffsetY','removeState','GaugeSplit','applyATBPenalty','maxCommands','ActorBattlerType','_blendColor','paramRate','toUpperCase','MarkerArrowWindowSkin','Class-%1-%2','_homeY','#%1','Parse_Notetags_CreateJS','isAtbChargingState','wYPQO','InterruptMirror','State-%1-%2','onAtbInterrupt','toLowerCase','createLetterSprite','battlerName','yvbEt','AddOption','updateAtbGaugeSpritePosition','KoDHZ','startEffect','Scene_Options_maxCommands','updateVisibility','description','isDead','createJS','svBattlerName','xJcGi','trimG','YfipK','IXVmE','createStateIconSprite','qsSGx','concat','dPCjg','DisplayPosition','TpbSpeedCalcJS','applyData','hkjlA','setBattler','svactor','targetOpacity','setup','createBattlerSprite','updateLetter','isSideView','clearFieldAtbGraphics','cast1','310096SIBwGx','checkAggroControlSystemOffsetYAdjustment','BattleManager_isActiveTpb','setupArrowSprite','loadWindowskin','Game_Battler_tpbSpeed','OffsetX','_battler','_arrowSprite','_tpbTurnEnd','_skinSprite','TpbCastTimeJS','baQGO','revive','boxWidth','sitKd','isStateAffected','DisplayOffsetY','isGaugeHorizontal','QMQRs','_statusWindow','cast%1','ARRAYJSON','InterruptFlashColor','Window_SideviewUiBattleStatus','applyBattleSystemATBUserEffect','full%1','VisuMZ_0_CoreEngine','bHfFL','%1Side','gaugeColor2','PreStartTurnJS','isSceneBattle','IBnZJ','UqOyN','MarkerSize','default%1','clear','GaugeLengthVert','drawText','pXpTh','_tpbState','svActorVertCells','IconSet','NtrNi','InterruptFlashDuration','UseFieldGauge','cast','_letter','boxHeight','tpbRelativeSpeed','setActionState','FKoeg','initialize','764292BfmcHS','updatePosition','Game_Battler_removeState','Actor','rhJcC','Sprite_Battler_updateMain','makeTpbActions','_scene','Scene_Battle_createAllWindows','GzkbV','EthFk','abs','updateOpacity','createChildren','die','FpDIx','createBorderSprite','process_VisuMZ_BattleSystemATB_JS_Notetags','Etwau','Scale','children','QqKtn','hTfnw','10bSNSbb','%1BorderColor','updatePositionOnGauge','_letterSprite','Item-%1-%2','FieldGaugeActorFace','anchor','initTpbChargeTime','BattleSystemATB','Sprite_Actor_createStateSprite','createKeyJS','createFieldGaugeSkin','skills','EnemyBattlerFaceName','createAllWindows','prototype','onDatabaseLoaded','fieldAtbGraphicIconIndex','cast2','Sprite_Battler_setBattler','Enemy','paramBuffRate','NUM','_graphicHue','Cast','Game_BattlerBase_appear','getColor','fPmww','EscapeFailPenalty','loadSystem','lPLnH','createBattlerContainer','DPiQr','numActions','_fieldGaugeATB','_tpbChargeTime','Actors','casting','TubWU','Sprite_Gauge_currentMaxValue','PBMGZ','loadFace','hasSvBattler','constructor','undecided','%1BgColor1','scale','setupBattleSystemATBColors','parameters','_backgroundSprite','TpbBaseSpeedCalcJS','Gauge','STR','BattlerRelativeSpeedJS','TpbAccelerationJS','Game_Battler_tpbBaseSpeed','OffsetY','ewRYW','StunsResetGauge','iconWidth','item','31350jennld','speed','FaceName','appear','_statusType','HdjhN','createFieldAtbGraphicType','Game_Battler_tpbRequiredCastTime','ShowStatusGauge','AnchorX','visualAtbGauge','floor','_plural','setFrame','NpSzR','fontSize','makeActions','svBattlerData','OpacityRate','update','300OkCIDf','PHIHq','_svBattlerSprite','_graphicSv','_subject','getAtbCastTimeRate','getChildIndex','Charge','ParseItemNotetags','EnemyBattlerFontFace','LHkgA','PwUbm','isActor','fyBGY','Game_Battler_tpbAcceleration','format','round','YdcgV','default','note','createAtbGaugeSprite','makeDeepCopy','fast%1','Sprite_Enemy_createStateIconSprite','isAtbCastingState','_actions','Color','changeAtbChargeTime','clearRect','ConvertParams','ParseAllNotetags','icon','applyGlobalBattleSystemATBEffects','applyItemUserEffect','aggroGauge','RepositionTopHelpY','FieldGaugeEnemyFace','process_VisuMZ_BattleSystemATB_CreateRegExp','bitmap','battler','ctGaugeColor2','traitObjects','tpbChargeTime','375426HeYNCW','_gaugeSprite','battleUIOffsetX','ActorBattlerIcon','setAtbCastTime','_index','XUgnr','wcYKK','Game_System_initialize','clearActions','VisuMZ_2_BattleSystemCTB','ShowMarkerArrow','atbGaugeColor','gebyL','applyTpbPenalty','fieldAtbGraphicFaceName','_battlerContainer','_horz','members','createActorSprites','DAYGT','ConfigManager_makeData','ready','Sprite_Enemy_startEffect','reduce','battlerHue','#000000','RepositionTopHelpX','startTpbCasting','_originalSpeed','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','filter','Game_Battler_tpbRelativeSpeed','_forcing','initBattleSystemATB','initTpbChargeTimeATB','min','createStateSprite','placeGauge','AnchorY','updateSelectionEffect','_atbColors','bottom','ARRAYFUNC','compareBattlerSprites','isHidden','acting','max','TXjNB','currentAction','changeAtbCastTime','BattleManager_endBattlerActions','LxuAA','clamp','createFieldAtbGraphicIconIndex','tpbSpeed','_atbAfterSpeed','processBattleCoreJS','Window_StatusBase_placeGauge','_onRestrictBypassAtbReset','setBlendColor','_homeX','slow%1','changeSvActorGraphicBitmap','left','Options','applyItemBattleSystemATBUserEffect','ShowEnemyGauge','InitialGaugeJS','name','changeEnemyGraphicBitmap','sSovW','gTVkX','GaugeDirection','iconHeight','ColorManager_loadWindowskin','createBattlerSprites','updateAtbGaugeSpriteVisibility','removeChild','maxBattleMembers','onRestrict','ShowMarkerBorder','PostStartTurnJS','ZBJpN','IpwEH','processUpdateGraphic','setHue','currentMaxValue','ARRAYEVAL','eDyly','(?:GAUGE|TIME|SPEED)','gradientFillRect','Interrupt','GaugeSystemSkin','isTpb','top','stop%1','EnemyBattlerFaceIndex','height','EnemyBattlerIcon','atbSpeed','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Upgos','AggroControlSystem','_graphicEnemy','setItem','DzJOd','map'];_0x2328=function(){return _0x4c90d4;};return _0x2328();}VisuMZ[label][_0x731a2e(0x106)]=VisuMZ[label][_0x731a2e(0x106)]||{},VisuMZ[_0x731a2e(0x237)]=function(_0x320eb4,_0x12a43a){const _0x49d49f=_0x731a2e;for(const _0xd8930e in _0x12a43a){if(_0x49d49f(0x15c)!=='yvbEt')return this[_0x49d49f(0x2bf)]===_0x30fc39&&(this[_0x49d49f(0x2bf)]=this['createFieldAtbGraphicFaceIndex']()),this[_0x49d49f(0x2bf)];else{if(_0xd8930e['match'](/(.*):(.*)/i)){const _0x22cc2e=String(RegExp['$1']),_0x5726b1=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x11ca04,_0x9591f3,_0x2c0f4d;switch(_0x5726b1){case _0x49d49f(0x1df):_0x11ca04=_0x12a43a[_0xd8930e]!==''?Number(_0x12a43a[_0xd8930e]):0x0;break;case'ARRAYNUM':_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3[_0x49d49f(0x2b0)](_0x42bfd6=>Number(_0x42bfd6));break;case _0x49d49f(0x2e1):_0x11ca04=_0x12a43a[_0xd8930e]!==''?eval(_0x12a43a[_0xd8930e]):null;break;case _0x49d49f(0x29d):_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3[_0x49d49f(0x2b0)](_0x57936b=>eval(_0x57936b));break;case'JSON':_0x11ca04=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):'';break;case _0x49d49f(0x192):_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3[_0x49d49f(0x2b0)](_0x2ba603=>JSON['parse'](_0x2ba603));break;case _0x49d49f(0x131):_0x11ca04=_0x12a43a[_0xd8930e]!==''?new Function(JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e])):new Function('return\x200');break;case _0x49d49f(0x270):_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3[_0x49d49f(0x2b0)](_0x3aee14=>new Function(JSON[_0x49d49f(0x2cc)](_0x3aee14)));break;case _0x49d49f(0x1fd):_0x11ca04=_0x12a43a[_0xd8930e]!==''?String(_0x12a43a[_0xd8930e]):'';break;case'ARRAYSTR':_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON['parse'](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3['map'](_0x35259e=>String(_0x35259e));break;case'STRUCT':_0x2c0f4d=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):{},_0x11ca04=VisuMZ[_0x49d49f(0x237)]({},_0x2c0f4d);break;case _0x49d49f(0x2eb):_0x9591f3=_0x12a43a[_0xd8930e]!==''?JSON[_0x49d49f(0x2cc)](_0x12a43a[_0xd8930e]):[],_0x11ca04=_0x9591f3['map'](_0x552289=>VisuMZ['ConvertParams']({},JSON[_0x49d49f(0x2cc)](_0x552289)));break;default:continue;}_0x320eb4[_0x22cc2e]=_0x11ca04;}}}return _0x320eb4;},(_0x2a8aed=>{const _0x4811dc=_0x731a2e,_0x5903e2=_0x2a8aed[_0x4811dc(0x28a)];for(const _0x14641d of dependencies){if(!Imported[_0x14641d]){if('GzkbV'===_0x4811dc(0x1bb)){alert(_0x4811dc(0x263)[_0x4811dc(0x229)](_0x5903e2,_0x14641d)),SceneManager[_0x4811dc(0x300)]();break;}else _0xcfc8f0=_0x5cc16e(_0x1ffc7a['$1'])*0.01;}}const _0x416eba=_0x2a8aed[_0x4811dc(0x163)];if(_0x416eba['match'](/\[Version[ ](.*?)\]/i)){const _0x329791=Number(RegExp['$1']);if(_0x329791!==VisuMZ[label]['version']){if(_0x4811dc(0x227)!==_0x4811dc(0x227))return _0x355d7f['BattleSystemATB'][_0x4811dc(0x20d)][_0x4811dc(0x30f)](this);else alert(_0x4811dc(0x2ca)['format'](_0x5903e2,_0x329791)),SceneManager[_0x4811dc(0x300)]();}}if(_0x416eba[_0x4811dc(0xdc)](/\[Tier[ ](\d+)\]/i)){const _0x2710ff=Number(RegExp['$1']);if(_0x2710ff<tier){if('ZKuna'!=='TCPmS')alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x5903e2,_0x2710ff,tier)),SceneManager['exit']();else return this['processUpdateGraphic']();}else tier=Math[_0x4811dc(0x274)](_0x2710ff,tier);}VisuMZ[_0x4811dc(0x237)](VisuMZ[label][_0x4811dc(0x106)],_0x2a8aed[_0x4811dc(0x1f9)]);})(pluginData),PluginManager[_0x731a2e(0x133)](pluginData[_0x731a2e(0x28a)],'FieldGaugeActorIcon',_0x56e2af=>{const _0x55c83a=_0x731a2e;VisuMZ['ConvertParams'](_0x56e2af,_0x56e2af);const _0x134e2d=_0x56e2af[_0x55c83a(0x1ed)],_0x5e324a=_0x56e2af[_0x55c83a(0xf9)];for(const _0x20641e of _0x134e2d){const _0x362816=$gameActors[_0x55c83a(0x2f0)](_0x20641e);if(!_0x362816)continue;_0x362816[_0x55c83a(0x112)]='icon',_0x362816[_0x55c83a(0x11c)]=_0x5e324a;}}),PluginManager[_0x731a2e(0x133)](pluginData['name'],_0x731a2e(0x1ce),_0x424774=>{const _0x380c87=_0x731a2e;VisuMZ[_0x380c87(0x237)](_0x424774,_0x424774);const _0x1e0b1d=_0x424774['Actors'],_0x4ee6c0=_0x424774[_0x380c87(0x208)],_0x2d64d3=_0x424774[_0x380c87(0x2b5)];for(const _0x2c3fb7 of _0x1e0b1d){const _0x17ddd8=$gameActors[_0x380c87(0x2f0)](_0x2c3fb7);if(!_0x17ddd8)continue;_0x17ddd8[_0x380c87(0x112)]=_0x380c87(0x143),_0x17ddd8[_0x380c87(0x31b)]=_0x4ee6c0,_0x17ddd8['_fieldAtbGaugeFaceIndex']=_0x2d64d3;}}),PluginManager[_0x731a2e(0x133)](pluginData[_0x731a2e(0x28a)],_0x731a2e(0x2ec),_0x101b66=>{const _0x33131e=_0x731a2e;VisuMZ['ConvertParams'](_0x101b66,_0x101b66);const _0x5a1e1f=_0x101b66[_0x33131e(0x1ed)];for(const _0x2fe55d of _0x5a1e1f){if(_0x33131e(0x1a8)==='NtrNi'){const _0x33aca9=$gameActors[_0x33131e(0x2f0)](_0x2fe55d);if(!_0x33aca9)continue;_0x33aca9[_0x33131e(0x17a)]();}else{if(!this[_0x33131e(0x2b4)])return;const _0x5d20f3=this[_0x33131e(0x183)]&&this[_0x33131e(0x183)]['isAppeared']()&&!this[_0x33131e(0x183)][_0x33131e(0x272)]();this[_0x33131e(0x2b4)][_0x33131e(0x2d4)]=_0x5d20f3,this['_svBattlerSprite']&&this['_svBattlerSprite'][_0x33131e(0x2b4)]&&(this[_0x33131e(0x21c)]['_atbGaugeSprite']['visible']=_0x5d20f3);}}}),PluginManager[_0x731a2e(0x133)](pluginData[_0x731a2e(0x28a)],'FieldGaugeEnemyIcon',_0x162339=>{const _0x1c745b=_0x731a2e;VisuMZ[_0x1c745b(0x237)](_0x162339,_0x162339);const _0x31fdab=_0x162339[_0x1c745b(0x31a)],_0x3c98f5=_0x162339['IconIndex'];for(const _0x4d19fa of _0x31fdab){if('MbnXm'!==_0x1c745b(0x2e4)){const _0x40de15=$gameTroop[_0x1c745b(0x257)]()[_0x4d19fa];if(!_0x40de15)continue;_0x40de15[_0x1c745b(0x112)]='icon',_0x40de15[_0x1c745b(0x11c)]=_0x3c98f5;}else _0x33a34a=_0x49aba4[_0x1c745b(0x274)](_0x329fdd,_0x58bff4);}}),PluginManager[_0x731a2e(0x133)](pluginData[_0x731a2e(0x28a)],_0x731a2e(0x23e),_0x5d55a6=>{const _0x338b3a=_0x731a2e;VisuMZ['ConvertParams'](_0x5d55a6,_0x5d55a6);const _0x16769e=_0x5d55a6['Enemies'],_0x33484c=_0x5d55a6[_0x338b3a(0x208)],_0x3cd989=_0x5d55a6[_0x338b3a(0x2b5)];for(const _0x50f5f3 of _0x16769e){if('IpwEH'!==_0x338b3a(0x299)){if(this['x']>_0x4ea34a)this['x']=_0x83d6f9[_0x338b3a(0x274)](_0x45b5cc,this['x']-_0x12d16d);if(this['x']<_0x33e381)this['x']=_0x6e735d[_0x338b3a(0x269)](_0x4b8392,this['x']+_0x57367a);}else{const _0x302079=$gameTroop['members']()[_0x50f5f3];if(!_0x302079)continue;_0x302079[_0x338b3a(0x112)]='face',_0x302079[_0x338b3a(0x31b)]=_0x33484c,_0x302079[_0x338b3a(0x2bf)]=_0x3cd989;}}}),PluginManager[_0x731a2e(0x133)](pluginData['name'],_0x731a2e(0xf4),_0x50d6fc=>{const _0x5c2287=_0x731a2e;VisuMZ['ConvertParams'](_0x50d6fc,_0x50d6fc);const _0x45e362=_0x50d6fc['Enemies'];for(const _0x5c30ae of _0x45e362){const _0x267cf1=$gameTroop[_0x5c2287(0x257)]()[_0x5c30ae];if(!_0x267cf1)continue;_0x267cf1[_0x5c2287(0x17a)]();}}),PluginManager[_0x731a2e(0x133)](pluginData[_0x731a2e(0x28a)],_0x731a2e(0xe7),_0x2ec1a1=>{const _0x29f81f=_0x731a2e;VisuMZ[_0x29f81f(0x237)](_0x2ec1a1,_0x2ec1a1);const _0x5f42a5=_0x2ec1a1['Visible'];$gameSystem[_0x29f81f(0x2e7)](_0x5f42a5);}),VisuMZ['BattleSystemATB']['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x731a2e(0x1d8)][_0x731a2e(0x1d9)],Scene_Boot['prototype'][_0x731a2e(0x1d9)]=function(){const _0x45a6f2=_0x731a2e;this[_0x45a6f2(0x23f)](),VisuMZ[_0x45a6f2(0x1d1)][_0x45a6f2(0xe3)][_0x45a6f2(0x30f)](this),this['process_VisuMZ_BattleSystemATB_JS_Notetags']();},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0xe4)]={},Scene_Boot[_0x731a2e(0x1d8)]['process_VisuMZ_BattleSystemATB_CreateRegExp']=function(){const _0x11edaf=_0x731a2e,_0x24ca9e=VisuMZ['BattleCore'][_0x11edaf(0xe4)],_0x349b3f=_0x11edaf(0x2cf),_0x33f5ee=[_0x11edaf(0x221),_0x11edaf(0x1e1),_0x11edaf(0x142)];for(const _0x3fef23 of _0x33f5ee){const _0x44ce2b=_0x349b3f['format'](_0x3fef23[_0x11edaf(0x14e)]()[_0x11edaf(0x2f1)](),_0x11edaf(0x114),_0x11edaf(0x29f)),_0x21a7c1=new RegExp(_0x44ce2b,'i');VisuMZ[_0x11edaf(0x1d1)]['RegExp'][_0x3fef23]=_0x21a7c1;}},Scene_Boot[_0x731a2e(0x1d8)][_0x731a2e(0x1c3)]=function(){const _0x46c86d=_0x731a2e;if(VisuMZ[_0x46c86d(0x238)])return;const _0x1b0cfa=$dataSkills[_0x46c86d(0x16d)]($dataItems);for(const _0x3dcb4a of _0x1b0cfa){if(!_0x3dcb4a)continue;VisuMZ[_0x46c86d(0x1d1)][_0x46c86d(0x153)](_0x3dcb4a);}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x2fa)]=VisuMZ['ParseSkillNotetags'],VisuMZ['ParseSkillNotetags']=function(_0x62329c){const _0x5e31f1=_0x731a2e;VisuMZ[_0x5e31f1(0x1d1)][_0x5e31f1(0x2fa)][_0x5e31f1(0x30f)](this,_0x62329c),VisuMZ[_0x5e31f1(0x1d1)][_0x5e31f1(0x153)](_0x62329c);},VisuMZ['BattleSystemATB']['ParseItemNotetags']=VisuMZ['ParseItemNotetags'],VisuMZ[_0x731a2e(0x222)]=function(_0x47a229){const _0x2fada5=_0x731a2e;VisuMZ['BattleSystemATB']['ParseItemNotetags'][_0x2fada5(0x30f)](this,_0x47a229),VisuMZ['BattleSystemATB']['Parse_Notetags_CreateJS'](_0x47a229);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x153)]=function(_0x402a26){const _0x40d59d=_0x731a2e,_0x5731f6=[_0x40d59d(0x221),_0x40d59d(0x1e1),'After'];for(const _0x5213d3 of _0x5731f6){if(_0x40d59d(0x1c1)!=='WtQdy')VisuMZ[_0x40d59d(0x1d1)]['createJS'](_0x402a26,_0x5213d3);else{if(!_0x3b8b10)return;if(!this['_atbGaugeSprite'])return;if(_0x46bce6['isActor']()){}else{if(_0x39ca43[_0x40d59d(0x2d2)]()){if(this[_0x40d59d(0x1f4)]===_0x3a256b&&_0x5c7dcd[_0x40d59d(0x1f3)]())return;if(this[_0x40d59d(0x1f4)]===_0x31dca6&&!_0x3ad387[_0x40d59d(0x1f3)]())return;}}this[_0x40d59d(0x2b4)][_0x40d59d(0x176)](_0x50a280,_0x40d59d(0x122));}}},VisuMZ[_0x731a2e(0x1d1)]['JS']={},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x165)]=function(_0x11650d,_0x319a77){const _0x2d8339=_0x731a2e,_0x9406b0=_0x11650d['note'];if(_0x9406b0[_0x2d8339(0xdc)](VisuMZ[_0x2d8339(0x1d1)][_0x2d8339(0xe4)][_0x319a77])){const _0x20dcd9=String(RegExp['$1']),_0x5c72e2=_0x2d8339(0x2aa)[_0x2d8339(0x229)](_0x20dcd9,_0x319a77),_0x36157b=VisuMZ[_0x2d8339(0x1d1)][_0x2d8339(0x1d3)](_0x11650d,_0x319a77);VisuMZ[_0x2d8339(0x1d1)]['JS'][_0x36157b]=new Function(_0x5c72e2);}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x1d3)]=function(_0x19eb23,_0x58fcbb){const _0x31d1e0=_0x731a2e;if(VisuMZ[_0x31d1e0(0x1d3)])return VisuMZ[_0x31d1e0(0x1d3)](_0x19eb23,_0x58fcbb);let _0x7002a3='';if($dataActors[_0x31d1e0(0x2fb)](_0x19eb23))_0x7002a3=_0x31d1e0(0x2bb)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataClasses[_0x31d1e0(0x2fb)](_0x19eb23))_0x7002a3='Class-%1-%2'[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataSkills['includes'](_0x19eb23))_0x7002a3='Skill-%1-%2'[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataItems[_0x31d1e0(0x2fb)](_0x19eb23))_0x7002a3=_0x31d1e0(0x1cd)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataWeapons[_0x31d1e0(0x2fb)](_0x19eb23))_0x7002a3=_0x31d1e0(0xea)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataArmors['includes'](_0x19eb23))_0x7002a3=_0x31d1e0(0x12b)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataEnemies['includes'](_0x19eb23))_0x7002a3=_0x31d1e0(0xf5)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);if($dataStates['includes'](_0x19eb23))_0x7002a3=_0x31d1e0(0x157)[_0x31d1e0(0x229)](_0x19eb23['id'],_0x58fcbb);return _0x7002a3;},ConfigManager['visualAtbGauge']=!![],VisuMZ[_0x731a2e(0x1d1)]['ConfigManager_makeData']=ConfigManager[_0x731a2e(0x2d3)],ConfigManager[_0x731a2e(0x2d3)]=function(){const _0x4da2bf=_0x731a2e,_0x5b3a82=VisuMZ[_0x4da2bf(0x1d1)]['ConfigManager_makeData']['call'](this);return _0x5b3a82[_0x4da2bf(0x210)]=this[_0x4da2bf(0x210)],_0x5b3a82;},VisuMZ['BattleSystemATB'][_0x731a2e(0x2dc)]=ConfigManager[_0x731a2e(0x171)],ConfigManager[_0x731a2e(0x171)]=function(_0xdeeb43){const _0x5f59e2=_0x731a2e;VisuMZ['BattleSystemATB']['ConfigManager_applyData'][_0x5f59e2(0x30f)](this,_0xdeeb43);if(_0x5f59e2(0x210)in _0xdeeb43)this['visualAtbGauge']=_0xdeeb43[_0x5f59e2(0x210)];else{if('RGCut'!==_0x5f59e2(0x1bc))this[_0x5f59e2(0x210)]=!![];else return _0x5f59e2(0x152)[_0x5f59e2(0x229)](_0x16f521(_0x340683['$1']));}},ImageManager[_0x731a2e(0x11e)]=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x731a2e(0x1a6)]=ImageManager['svActorVertCells']||0x6,TextManager[_0x731a2e(0x210)]=VisuMZ['BattleSystemATB'][_0x731a2e(0x106)]['Options']['Name'],VisuMZ[_0x731a2e(0x1d1)]['ColorManager_loadWindowskin']=ColorManager[_0x731a2e(0x180)],ColorManager['loadWindowskin']=function(){const _0x3cf992=_0x731a2e;VisuMZ[_0x3cf992(0x1d1)][_0x3cf992(0x290)][_0x3cf992(0x30f)](this),this['_windowskin']['addLoadListener'](this[_0x3cf992(0x1f8)][_0x3cf992(0x119)](this));},ColorManager['getColor']=function(_0x281757){const _0x514c72=_0x731a2e;_0x281757=String(_0x281757);if(_0x281757[_0x514c72(0xdc)](/#(.*)/i)){if(_0x514c72(0x315)!=='ZwABL'){if(this['numActions']()!==0x0)return![];if(_0x18d810[_0x514c72(0x2c8)]()){if(this['isEnemy']()){if(!this[_0x514c72(0xed)]())return![];}}return!![];}else return _0x514c72(0x152)['format'](String(RegExp['$1']));}else return this[_0x514c72(0x2d8)](Number(_0x281757));},ColorManager[_0x731a2e(0x1f8)]=function(){const _0x97a52f=_0x731a2e,_0x5cec83=[_0x97a52f(0x22c),'full',_0x97a52f(0x1ab),_0x97a52f(0xf8),'slow','stop'],_0x9fcb0c=VisuMZ[_0x97a52f(0x1d1)]['Settings'][_0x97a52f(0x234)];this['_atbColors']={};for(const _0x5b0880 of _0x5cec83){for(let _0x5a7188=0x1;_0x5a7188<=0x2;_0x5a7188++){const _0x2ebeee=_0x5b0880+_0x5a7188;this[_0x97a52f(0x26e)][_0x2ebeee]=this[_0x97a52f(0x1e3)](_0x9fcb0c[_0x2ebeee]);}}},ColorManager[_0x731a2e(0x100)]=function(_0x447c70){const _0x134ca3=_0x731a2e;if(this[_0x134ca3(0x26e)]===undefined)this[_0x134ca3(0x1f8)]();return this[_0x134ca3(0x26e)][_0x447c70]||_0x134ca3(0x25f);},SceneManager[_0x731a2e(0x19c)]=function(){const _0x5ab91b=_0x731a2e;return this[_0x5ab91b(0x1b9)]&&this[_0x5ab91b(0x1b9)][_0x5ab91b(0x1f4)]===Scene_Battle;},BattleManager['isATB']=function(){const _0x469bc8=_0x731a2e;if(Imported[_0x469bc8(0x24f)]&&this[_0x469bc8(0xfd)]())return![];return this['isTpb']();},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x17e)]=BattleManager[_0x731a2e(0x2d5)],BattleManager[_0x731a2e(0x2d5)]=function(){const _0x55dffb=_0x731a2e;if(!this[_0x55dffb(0x2a3)]()){if(_0x55dffb(0x225)==='PwUbm')return![];else this[_0x55dffb(0x310)](this['_tpbChargeTime']+_0x345d57);}else{if(ConfigManager&&ConfigManager['atbActive']!==undefined){if('vlbfM'!==_0x55dffb(0xe9))this[_0x55dffb(0x115)]=_0x551792[_0x55dffb(0x269)](_0x55cd64,this[_0x55dffb(0x115)]+_0x234e1);else return ConfigManager['atbActive'];}else return _0x55dffb(0x16a)!==_0x55dffb(0x16a)?this[_0x55dffb(0x129)]===_0x5ab7e9?_0x512b91[_0x55dffb(0x125)]()[this['_index']]:_0x12ba34['members']()[this[_0x55dffb(0x24a)]]:VisuMZ['BattleSystemATB'][_0x55dffb(0x17e)][_0x55dffb(0x30f)](this);}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x24d)]=Game_System[_0x731a2e(0x1d8)][_0x731a2e(0x1b1)],Game_System[_0x731a2e(0x1d8)][_0x731a2e(0x1b1)]=function(){const _0x4d4837=_0x731a2e;VisuMZ[_0x4d4837(0x1d1)][_0x4d4837(0x24d)][_0x4d4837(0x30f)](this),this['initBattleSystemATB']();},Game_System[_0x731a2e(0x1d8)][_0x731a2e(0x267)]=function(){const _0x54baa5=_0x731a2e;this[_0x54baa5(0x30b)]=!![];},Game_System[_0x731a2e(0x1d8)]['isBattleSystemATBFieldGaugeVisible']=function(){const _0x208726=_0x731a2e;if(this[_0x208726(0x30b)]===undefined){if(_0x208726(0x2e2)===_0x208726(0x2da))return _0x457497[_0x208726(0x257)]()[this[_0x208726(0x24a)]];else this[_0x208726(0x267)]();}return this[_0x208726(0x30b)];},Game_System[_0x731a2e(0x1d8)][_0x731a2e(0x2e7)]=function(_0x27f10f){this['_atbFieldGaugeVisible']===undefined&&this['initBattleSystemATB'](),this['_atbFieldGaugeVisible']=_0x27f10f;},VisuMZ['BattleSystemATB'][_0x731a2e(0x314)]=Game_Action[_0x731a2e(0x1d8)][_0x731a2e(0x23b)],Game_Action[_0x731a2e(0x1d8)][_0x731a2e(0x23b)]=function(_0x19e3aa){const _0xbb6d86=_0x731a2e;VisuMZ[_0xbb6d86(0x1d1)][_0xbb6d86(0x314)][_0xbb6d86(0x30f)](this,_0x19e3aa),this[_0xbb6d86(0x195)](_0x19e3aa);},Game_Action[_0x731a2e(0x1d8)][_0x731a2e(0x195)]=function(_0xc53c3){const _0x5aef4d=_0x731a2e;if(!SceneManager[_0x5aef4d(0x19c)]())return;if(!BattleManager[_0x5aef4d(0x2c8)]())return;if(this[_0x5aef4d(0x205)]())this[_0x5aef4d(0x287)](_0xc53c3);},Game_Action[_0x731a2e(0x1d8)][_0x731a2e(0x287)]=function(_0x27f16e){const _0x3f4419=_0x731a2e,_0x515a5a=this['item']()[_0x3f4419(0x22d)];if(_0x27f16e['isAtbChargingState']()){const _0x562c71=VisuMZ[_0x3f4419(0x1d1)][_0x3f4419(0x1d3)](this[_0x3f4419(0x205)](),'Charge');if(VisuMZ[_0x3f4419(0x1d1)]['JS'][_0x562c71]){const _0x5e3a2e=VisuMZ[_0x3f4419(0x1d1)]['JS'][_0x562c71][_0x3f4419(0x30f)](this,this[_0x3f4419(0xf7)](),_0x27f16e);_0x27f16e[_0x3f4419(0x310)](_0x5e3a2e);}if(_0x515a5a['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)){if(_0x3f4419(0xde)!=='VSIjF')return this['_tpbState']===_0x3f4419(0x120);else _0x27f16e[_0x3f4419(0x310)](Number(RegExp['$1'])*0.01);}if(_0x515a5a[_0x3f4419(0xdc)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)){if(_0x3f4419(0x24b)!==_0x3f4419(0xdd))_0x27f16e[_0x3f4419(0x235)](Number(RegExp['$1'])*0.01);else return this[_0x3f4419(0x1a5)]===_0x3f4419(0x1ee)&&this[_0x3f4419(0x276)]()&&this['currentAction']()[_0x3f4419(0x205)]()&&this['currentAction']()[_0x3f4419(0x205)]()['speed']<0x0;}}else{if(_0x27f16e[_0x3f4419(0x232)]()){const _0x32a481=VisuMZ[_0x3f4419(0x1d1)][_0x3f4419(0x1d3)](this[_0x3f4419(0x205)](),_0x3f4419(0x1e1));if(VisuMZ[_0x3f4419(0x1d1)]['JS'][_0x32a481]){const _0x56973e=VisuMZ['BattleSystemATB']['JS'][_0x32a481]['call'](this,this[_0x3f4419(0xf7)](),_0x27f16e);_0x27f16e['setAtbCastTime'](_0x56973e);}_0x515a5a[_0x3f4419(0xdc)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&('doXtp'!==_0x3f4419(0x198)?_0x27f16e[_0x3f4419(0x249)](Number(RegExp['$1'])*0.01):(this['_index']=_0x22c9c8,this[_0x3f4419(0x129)]=_0x33033b,this[_0x3f4419(0x246)]=_0x3b66e0,_0xa252bb['prototype']['initialize'][_0x3f4419(0x30f)](this),this[_0x3f4419(0x31c)](),this[_0x3f4419(0x1bf)](),this['opacity']=this[_0x3f4419(0x175)]())),_0x515a5a['match'](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x27f16e[_0x3f4419(0x277)](Number(RegExp['$1'])*0.01),_0x515a5a['match'](/<(?:ATB|TPB) INTERRUPT>/i)&&_0x27f16e[_0x3f4419(0x30e)]();}}},VisuMZ[_0x731a2e(0x1d1)]['Game_Action_applyGlobal']=Game_Action['prototype']['applyGlobal'],Game_Action[_0x731a2e(0x1d8)]['applyGlobal']=function(){const _0x2f8dde=_0x731a2e;VisuMZ['BattleSystemATB']['Game_Action_applyGlobal'][_0x2f8dde(0x30f)](this),this[_0x2f8dde(0x23a)]();},Game_Action[_0x731a2e(0x1d8)][_0x731a2e(0x23a)]=function(){const _0xddbdd6=_0x731a2e;if(!this[_0xddbdd6(0x205)]())return;if(!BattleManager[_0xddbdd6(0x2c8)]())return;const _0x5f2fbe=this[_0xddbdd6(0x205)]()['note'];let _0x4e7c45=0x0;this[_0xddbdd6(0x266)]&&(_0x4e7c45=this['subject']()['_tpbChargeTime']);const _0x6a47c=VisuMZ['BattleSystemATB']['createKeyJS'](this[_0xddbdd6(0x205)](),_0xddbdd6(0x142));VisuMZ['BattleSystemATB']['JS'][_0x6a47c]&&(_0xddbdd6(0x1c7)!==_0xddbdd6(0x1c7)?(!_0x301b1[_0xddbdd6(0x1d1)]['Settings'][_0xddbdd6(0x113)][_0xddbdd6(0x203)]&&(this[_0xddbdd6(0x280)]=_0x29b529[_0xddbdd6(0x2c8)]()),_0xc3f06c[_0xddbdd6(0x1d1)]['Game_Battler_onRestrict'][_0xddbdd6(0x30f)](this),_0xed92ae[_0xddbdd6(0x2a3)]()&&this[_0xddbdd6(0x1a5)]===_0xddbdd6(0x273)&&this['isEnemy']()&&(this['_needsAtbClear']=!![]),this['_onRestrictBypassAtbReset']=_0x98b732):_0x4e7c45=VisuMZ['BattleSystemATB']['JS'][_0x6a47c][_0xddbdd6(0x30f)](this,this[_0xddbdd6(0xf7)](),this[_0xddbdd6(0xf7)]()));let _0x21557e=this[_0xddbdd6(0x205)]()['speed']>0x0?this[_0xddbdd6(0x205)]()[_0xddbdd6(0x207)]:0x0;if(this[_0xddbdd6(0x128)]())_0x21557e+=this[_0xddbdd6(0xf7)]()['attackSpeed']();_0x4e7c45+=(_0x21557e/0xfa0)[_0xddbdd6(0x27a)](0x0,0x1);if(this[_0xddbdd6(0x205)]()[_0xddbdd6(0x22d)][_0xddbdd6(0xdc)](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)){if(_0xddbdd6(0x1b6)===_0xddbdd6(0x2f6)){const _0x313b27=_0x391698[_0xddbdd6(0x106)],_0x17bd10=_0x313b27[_0xddbdd6(0x19f)];this[_0xddbdd6(0x12a)][_0xddbdd6(0x240)]=new _0x66531d(_0x17bd10,_0x17bd10);const _0x321f2d=this[_0xddbdd6(0x12a)][_0xddbdd6(0x240)],_0x87e254=_0x27204d[_0xddbdd6(0x269)](0x1,_0x17bd10/_0x570253[_0xddbdd6(0x2c2)],_0x17bd10/_0x474560[_0xddbdd6(0x2a7)]),_0x4d18fe=_0x4976f6['width']*_0x87e254,_0x92226a=_0x5c85b2[_0xddbdd6(0x2a7)]*_0x87e254,_0x4d673=_0x46fa9b['round']((_0x17bd10-_0x4d18fe)/0x2),_0x185d4c=_0x5b976a[_0xddbdd6(0x22a)]((_0x17bd10-_0x92226a)/0x2);_0x321f2d[_0xddbdd6(0x305)](_0x5a6985,0x0,0x0,_0x8aaf91[_0xddbdd6(0x2c2)],_0x35991a[_0xddbdd6(0x2a7)],_0x4d673,_0x185d4c,_0x4d18fe,_0x92226a);}else _0x4e7c45=Number(RegExp['$1'])*0.01;}const _0x128b1b=this[_0xddbdd6(0xf7)]()[_0xddbdd6(0x243)]()[_0xddbdd6(0x16d)](this[_0xddbdd6(0xf7)]()[_0xddbdd6(0x1d5)]()),_0x43f015=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x1afd7c=_0x128b1b[_0xddbdd6(0x2b0)](_0x74aa62=>_0x74aa62&&_0x74aa62[_0xddbdd6(0x22d)]['match'](_0x43f015)?Number(RegExp['$1'])*0.01:0x0);_0x4e7c45=_0x1afd7c['reduce']((_0x549716,_0x22c133)=>_0x549716+_0x22c133,_0x4e7c45),this[_0xddbdd6(0x205)]()[_0xddbdd6(0x22d)]['match'](/<(?:ATB|TPB) INSTANT>/i)&&(_0xddbdd6(0x259)===_0xddbdd6(0x259)?_0x4e7c45=0xa:(this[_0xddbdd6(0xfa)](),_0x1551a5[_0xddbdd6(0x1d1)][_0xddbdd6(0x1ba)][_0xddbdd6(0x30f)](this),this[_0xddbdd6(0xfe)]())),this[_0xddbdd6(0xf7)]()[_0xddbdd6(0x130)](_0x4e7c45);},Game_BattlerBase[_0x731a2e(0x1d8)]['setAtbChargeTime']=function(_0x50bbff){const _0x4840b4=_0x731a2e;this['_tpbChargeTime']=_0x50bbff[_0x4840b4(0x27a)](0x0,0x1);},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x235)]=function(_0x2be45a){this['setAtbChargeTime'](this['_tpbChargeTime']+_0x2be45a);},Game_BattlerBase['prototype'][_0x731a2e(0x249)]=function(_0xe025c0){const _0x4cab49=_0x731a2e,_0x4061d8=this[_0x4cab49(0x139)]();this['_tpbCastTime']=(_0x4061d8*_0xe025c0)['clamp'](0x0,_0x4061d8);},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x277)]=function(_0x442686){const _0xe186c5=_0x731a2e,_0x203ad0=this[_0xe186c5(0x139)](),_0x2ffb39=_0x203ad0*_0x442686;this[_0xe186c5(0x2c4)]=(this[_0xe186c5(0x2c4)]+_0x2ffb39)[_0xe186c5(0x27a)](0x0,_0x203ad0);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x13f)]=Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x1c0)],Game_BattlerBase['prototype'][_0x731a2e(0x1c0)]=function(){const _0x265ee5=_0x731a2e;VisuMZ[_0x265ee5(0x1d1)]['Game_BattlerBase_die'][_0x265ee5(0x30f)](this);if(BattleManager[_0x265ee5(0x2a3)]()){if('PHIHq'!==_0x265ee5(0x21b)){if(_0x58217b['createKeyJS'])return _0x3f2667[_0x265ee5(0x1d3)](_0x44c37f,_0x2ed90a);let _0x456c61='';if(_0x637757['includes'](_0x1cfd14))_0x456c61=_0x265ee5(0x2bb)['format'](_0x529db3['id'],_0x1eb58a);if(_0x5ece25[_0x265ee5(0x2fb)](_0x187383))_0x456c61=_0x265ee5(0x150)[_0x265ee5(0x229)](_0x46f768['id'],_0x413f98);if(_0x2d2b40[_0x265ee5(0x2fb)](_0x110222))_0x456c61='Skill-%1-%2'[_0x265ee5(0x229)](_0x2c85aa['id'],_0x299a27);if(_0x5ca438[_0x265ee5(0x2fb)](_0x22c5d7))_0x456c61=_0x265ee5(0x1cd)['format'](_0x1fe3e1['id'],_0x47e474);if(_0x31db58[_0x265ee5(0x2fb)](_0x59f2ab))_0x456c61=_0x265ee5(0xea)[_0x265ee5(0x229)](_0x30f5e0['id'],_0x49349c);if(_0x17329a['includes'](_0x5810af))_0x456c61='Armor-%1-%2'[_0x265ee5(0x229)](_0x118432['id'],_0x562992);if(_0x39716f[_0x265ee5(0x2fb)](_0x5b90eb))_0x456c61=_0x265ee5(0xf5)['format'](_0x50b62f['id'],_0x259059);if(_0x21cec4['includes'](_0x1cdee9))_0x456c61=_0x265ee5(0x157)[_0x265ee5(0x229)](_0x3a4bf5['id'],_0x1560b3);return _0x456c61;}else this[_0x265ee5(0x2b9)]();}},VisuMZ['BattleSystemATB']['Game_BattlerBase_revive']=Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x189)],Game_BattlerBase['prototype'][_0x731a2e(0x189)]=function(){const _0x489cb7=_0x731a2e;VisuMZ[_0x489cb7(0x1d1)]['Game_BattlerBase_revive'][_0x489cb7(0x30f)](this),BattleManager['isTpb']()&&('LUReg'!==_0x489cb7(0xef)?(_0x1d62b8=_0x56ab91-0x1,_0x3f9755=_0x4c1e34-0x3-_0x283715,_0x2826e5['gradientFillRect'](0x1,0x2+_0x126141,_0x373186-0x2,_0x425aa1,_0x10701a,_0x31fb19,!![]),_0x5c8e3d[_0x489cb7(0x2a0)](0x1,0x1,_0x3e4a12-0x2,_0x3af9c8,_0x4a4d22,_0x3a5c8a,!![])):this['clearTpbChargeTime']());},VisuMZ['BattleSystemATB']['Game_Battler_initTpbChargeTime']=Game_Battler[_0x731a2e(0x1d8)]['initTpbChargeTime'],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x1d0)]=function(_0x2f0d09){const _0x36a5c0=_0x731a2e;BattleManager[_0x36a5c0(0x2c8)]()?this[_0x36a5c0(0x268)](_0x2f0d09):VisuMZ[_0x36a5c0(0x1d1)][_0x36a5c0(0x11d)]['call'](this,_0x2f0d09);},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x268)]=function(_0x207c68){const _0x4a5c07=_0x731a2e,_0x412632=VisuMZ['BattleSystemATB'][_0x4a5c07(0x106)][_0x4a5c07(0x113)];let _0x412963=this[_0x4a5c07(0x1ae)]()*eval(_0x412632[_0x4a5c07(0x289)]);const _0x44b6ec=this[_0x4a5c07(0x243)]()[_0x4a5c07(0x16d)](this[_0x4a5c07(0x1d5)]()),_0x218504=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x5b4d90=_0x44b6ec[_0x4a5c07(0x2b0)](_0x2137fe=>_0x2137fe&&_0x2137fe[_0x4a5c07(0x22d)][_0x4a5c07(0xdc)](_0x218504)?Number(RegExp['$1'])*0.01:0x0);_0x412963=_0x5b4d90[_0x4a5c07(0x25d)]((_0x5dbbfa,_0x4bfdbc)=>_0x5dbbfa+_0x4bfdbc,_0x412963),this[_0x4a5c07(0x1a5)]=_0x4a5c07(0x120),this['_tpbChargeTime']=(_0x207c68?0x1:_0x412963)['clamp'](0x0,0x1),this['isRestricted']()&&(this['_tpbChargeTime']=0x0);},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x154)]=function(){const _0x311d03=_0x731a2e;return this['_tpbState']===_0x311d03(0x120);},Game_Battler['prototype'][_0x731a2e(0x232)]=function(){const _0x514ca2=_0x731a2e;return this[_0x514ca2(0x1a5)]===_0x514ca2(0x1ee)&&this[_0x514ca2(0x276)]()&&this['currentAction']()[_0x514ca2(0x205)]()&&this[_0x514ca2(0x276)]()['item']()[_0x514ca2(0x207)]<0x0;},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x21f)]=function(){const _0x39ae6b=_0x731a2e;return this[_0x39ae6b(0x232)]()?this[_0x39ae6b(0x2c4)]/this[_0x39ae6b(0x139)]():0x0;},Game_Battler[_0x731a2e(0x1d8)]['atbStopped']=function(){const _0xd83013=_0x731a2e;return!this[_0xd83013(0x309)]();},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x130)]=function(_0x45aa76){const _0x4c0f9a=_0x731a2e;this[_0x4c0f9a(0x27d)]=_0x45aa76;},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x278)]=BattleManager[_0x731a2e(0x2ba)],BattleManager[_0x731a2e(0x2ba)]=function(_0x328338){const _0x5563b6=_0x731a2e;this[_0x5563b6(0x2a3)]()&&!_0x328338['canMove']()&&(_0x5563b6(0x2cd)!==_0x5563b6(0x19e)?_0x328338[_0x5563b6(0x280)]=!![]:(this[_0x5563b6(0x255)]&&this[_0x5563b6(0x246)][_0x5563b6(0x293)](this['_battlerContainer']),this[_0x5563b6(0x255)]=new _0x51bb5e(),this[_0x5563b6(0x246)][_0x5563b6(0x11b)](this[_0x5563b6(0x255)]),this[_0x5563b6(0x291)]())),VisuMZ[_0x5563b6(0x1d1)][_0x5563b6(0x278)][_0x5563b6(0x30f)](this,_0x328338),_0x328338[_0x5563b6(0x2d2)]()&&this[_0x5563b6(0x2a3)]()&&!_0x328338['canMove']()&&(_0x328338['_onRestrictBypassAtbReset']=![]);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x10f)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x2b9)],Game_Battler['prototype'][_0x731a2e(0x2b9)]=function(){const _0x8d9112=_0x731a2e;if(this['_onRestrictBypassAtbReset'])return;VisuMZ[_0x8d9112(0x1d1)][_0x8d9112(0x10f)][_0x8d9112(0x30f)](this),this[_0x8d9112(0x1ec)]+=this['_atbAfterSpeed']||0x0;},Game_Battler['prototype']['atbInterrupt']=function(){const _0x401ddf=_0x731a2e;if(!this[_0x401ddf(0x232)]())return;if(!this[_0x401ddf(0x276)]())return;if(!this[_0x401ddf(0x276)]()[_0x401ddf(0x205)]())return;if(this[_0x401ddf(0x276)]()[_0x401ddf(0x205)]()[_0x401ddf(0x22d)][_0x401ddf(0xdc)](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this['clearActions'](),this['clearTpbChargeTime'](),this[_0x401ddf(0x2c4)]=0x0,this[_0x401ddf(0x158)]();},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x158)]=function(){const _0x2bf207=_0x731a2e,_0x91b726=VisuMZ['BattleSystemATB'][_0x2bf207(0x106)][_0x2bf207(0x2a1)];if(Imported[_0x2bf207(0x197)]){const _0x9e1453=_0x91b726['InterruptAnimationID'],_0x4f8029=_0x91b726[_0x2bf207(0x156)],_0x56a8c6=_0x91b726[_0x2bf207(0x2f2)];$gameTemp[_0x2bf207(0x2b8)]([this],_0x9e1453,_0x4f8029,_0x56a8c6);}if(this[_0x2bf207(0x241)]()&&_0x91b726[_0x2bf207(0x2c0)]['length']>0x0){if('OQUBJ'!==_0x2bf207(0xd7)){const _0x238873=_0x91b726[_0x2bf207(0x2c0)],_0x41a4f7={'textColor':ColorManager['getColor'](_0x91b726[_0x2bf207(0x117)]),'flashColor':_0x91b726[_0x2bf207(0x193)],'flashDuration':_0x91b726[_0x2bf207(0x1a9)]};this[_0x2bf207(0x2fc)](_0x238873,_0x41a4f7);}else{if(this[_0x2bf207(0x280)]){if(!this[_0x2bf207(0x232)]())return;}_0x5ee311['BattleSystemATB']['Game_Actor_clearActions'][_0x2bf207(0x30f)](this);}}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0xd5)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x261)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x261)]=function(){const _0xaa67df=_0x731a2e;VisuMZ['BattleSystemATB']['Game_Battler_startTpbCasting'][_0xaa67df(0x30f)](this);if(BattleManager[_0xaa67df(0x2c8)]()){if(_0xaa67df(0x2e3)===_0xaa67df(0x19d))return _0xaa67df(0x143);else this[_0xaa67df(0x2c4)]>=this['tpbRequiredCastTime']()&&(this['_tpbState']='ready');}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0xfc)]=Game_Unit[_0x731a2e(0x1d8)][_0x731a2e(0x13b)],Game_Unit[_0x731a2e(0x1d8)][_0x731a2e(0x13b)]=function(){const _0xa5b10d=_0x731a2e;if(BattleManager[_0xa5b10d(0x2c8)]()){if(BattleManager[_0xa5b10d(0x134)]()['some'](_0x4128b2=>_0x4128b2&&_0x4128b2[_0xa5b10d(0x311)]()&&_0x4128b2['isAppeared']()&&_0x4128b2['_tpbState']===_0xa5b10d(0x25b)))return;}VisuMZ[_0xa5b10d(0x1d1)][_0xa5b10d(0xfc)][_0xa5b10d(0x30f)](this);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x11a)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x295)],Game_Battler['prototype'][_0x731a2e(0x295)]=function(){const _0x2496ef=_0x731a2e;!VisuMZ[_0x2496ef(0x1d1)][_0x2496ef(0x106)][_0x2496ef(0x113)][_0x2496ef(0x203)]&&(this[_0x2496ef(0x280)]=BattleManager[_0x2496ef(0x2c8)]()),VisuMZ['BattleSystemATB'][_0x2496ef(0x11a)][_0x2496ef(0x30f)](this),BattleManager[_0x2496ef(0x2a3)]()&&this[_0x2496ef(0x1a5)]==='acting'&&this[_0x2496ef(0x2d2)]()&&(_0x2496ef(0x24c)==='LvTLg'?(_0xf9979a['BattleSystemATB'][_0x2496ef(0x1e2)][_0x2496ef(0x30f)](this),this['isEnemy']()&&_0xf91867[_0x2496ef(0x2c8)]()&&this[_0x2496ef(0x241)]()&&(this['battler']()[_0x2496ef(0x317)]=!![],this[_0x2496ef(0x241)]()['updateAtbGaugeSpriteVisibility']())):this['_needsAtbClear']=!![]),this[_0x2496ef(0x280)]=undefined;},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x2f4)]=Game_Actor['prototype']['clearActions'],Game_Actor['prototype'][_0x731a2e(0x24e)]=function(){const _0x400764=_0x731a2e;if(this[_0x400764(0x280)]){if(_0x400764(0x31d)!==_0x400764(0x2ef)){if(!this[_0x400764(0x232)]())return;}else this[_0x400764(0x30b)]===_0x11ea83&&this[_0x400764(0x267)](),this[_0x400764(0x30b)]=_0x4b8767;}VisuMZ[_0x400764(0x1d1)]['Game_Actor_clearActions'][_0x400764(0x30f)](this);},VisuMZ[_0x731a2e(0x1d1)]['Game_Battler_removeState']=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x147)],Game_Battler['prototype'][_0x731a2e(0x147)]=function(_0x28d74c){const _0x2c2a96=_0x731a2e,_0x7ad52=!this['canMove']()&&BattleManager[_0x2c2a96(0x2a3)](),_0x663cd=this[_0x2c2a96(0x18c)](_0x28d74c);VisuMZ[_0x2c2a96(0x1d1)][_0x2c2a96(0x1b4)]['call'](this,_0x28d74c);if(this['isEnemy']()&&_0x663cd&&!this[_0x2c2a96(0x18c)](_0x28d74c)){if('CHBCJ'!==_0x2c2a96(0x2ab))_0x7ad52&&this['canMove']()&&this[_0x2c2a96(0x110)]&&(_0x2c2a96(0x2e0)!==_0x2c2a96(0x2e0)?(delete this['_fieldAtbGaugeGraphicType'],delete this['_fieldAtbGaugeFaceName'],delete this[_0x2c2a96(0x2bf)],delete this['_fieldAtbGaugeIconIndex']):(this[_0x2c2a96(0x2b9)](),this[_0x2c2a96(0x24e)](),this['_tpbCastTime']=0x0)),this[_0x2c2a96(0x1af)](_0x2c2a96(0x1f5));else{const _0x50a0b2=_0x3145f6['BattleSystemATB'][_0x2c2a96(0x25a)][_0x2c2a96(0x30f)](this);return _0x50a0b2[_0x2c2a96(0x210)]=this['visualAtbGauge'],_0x50a0b2;}}else{if(_0x7ad52&&this[_0x2c2a96(0x309)]()&&this[_0x2c2a96(0x1ea)]()<=0x0){if('llwJo'!==_0x2c2a96(0x20b))this[_0x2c2a96(0x216)](),this[_0x2c2a96(0x1a5)]=_0x2c2a96(0x120),this['_onRestrictBypassAtbReset']=undefined;else return _0x5f35d9[_0x2c2a96(0x1d1)][_0x2c2a96(0x17e)]['call'](this);}}},Game_Battler['prototype']['startTpbTurn']=function(){const _0x17ddbe=_0x731a2e;this['processBattleCoreJS'](_0x17ddbe(0x19b)),this[_0x17ddbe(0x185)]=![],this[_0x17ddbe(0xd8)]++,this[_0x17ddbe(0x312)]=0x0,this[_0x17ddbe(0x135)]()&&this[_0x17ddbe(0x1b8)](),this[_0x17ddbe(0x27e)](_0x17ddbe(0x297));},Game_Battler['prototype'][_0x731a2e(0x135)]=function(){const _0x41e24a=_0x731a2e;if(this[_0x41e24a(0x1ea)]()!==0x0)return![];if(BattleManager[_0x41e24a(0x2c8)]()){if(_0x41e24a(0x301)===_0x41e24a(0x301)){if(this['isEnemy']()){if(_0x41e24a(0x2d9)!==_0x41e24a(0x168)){if(!this[_0x41e24a(0xed)]())return![];}else return this[_0x41e24a(0x29a)]();}}else this[_0x41e24a(0x11c)]=this[_0x41e24a(0x27b)]();}return!![];},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x2c5)]=Game_Battler['prototype'][_0x731a2e(0x253)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x253)]=function(){const _0x199c20=_0x731a2e;BattleManager[_0x199c20(0x2c8)]()?_0x199c20(0x188)===_0x199c20(0x188)?this['applyATBPenalty']():(this['x']=_0x17f42d[_0x199c20(0x2dd)]/0x2,this['x']+=_0x5a9907?_0x1b0d5c:-_0x190498):VisuMZ[_0x199c20(0x1d1)][_0x199c20(0x2c5)][_0x199c20(0x30f)](this);},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x149)]=function(){const _0x698068=_0x731a2e;this[_0x698068(0x1a5)]=_0x698068(0x120),this[_0x698068(0x1ec)]+=VisuMZ['BattleSystemATB'][_0x698068(0x106)][_0x698068(0x113)][_0x698068(0x1e5)]||0x0;},VisuMZ['BattleSystemATB'][_0x731a2e(0x181)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x27c)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x27c)]=function(){const _0x7bdb6a=_0x731a2e;if(BattleManager[_0x7bdb6a(0x2c8)]()){if(_0x7bdb6a(0x15f)!==_0x7bdb6a(0x167))return VisuMZ[_0x7bdb6a(0x1d1)][_0x7bdb6a(0x106)][_0x7bdb6a(0x113)][_0x7bdb6a(0x170)]['call'](this,this);else{if(!this[_0x7bdb6a(0x255)])return;const _0x438d52=this[_0x7bdb6a(0x255)][_0x7bdb6a(0x1c6)];if(!_0x438d52)return;_0x438d52[_0x7bdb6a(0x31e)](this[_0x7bdb6a(0x271)][_0x7bdb6a(0x119)](this));}}else return VisuMZ[_0x7bdb6a(0x1d1)][_0x7bdb6a(0x181)][_0x7bdb6a(0x30f)](this);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x200)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0xe0)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0xe0)]=function(){const _0x28644b=_0x731a2e;if(BattleManager['isATB']())return VisuMZ[_0x28644b(0x1d1)]['Settings'][_0x28644b(0x113)][_0x28644b(0x1fb)][_0x28644b(0x30f)](this,this);else{if('ibLXg'===_0x28644b(0x13a))return VisuMZ[_0x28644b(0x1d1)][_0x28644b(0x200)][_0x28644b(0x30f)](this);else{const _0x48aa27=_0x3ebb8f[_0x28644b(0x106)],_0x186db3=this['isGaugeHorizontal'](),_0x9fa3bf=_0x186db3?_0x48aa27['GaugeLengthHorz']:_0x48aa27['GaugeThick'],_0x5bec26=_0x186db3?_0x48aa27[_0x28644b(0x2dd)]:_0x48aa27[_0x28644b(0x1a2)];this[_0x28644b(0x246)][_0x28644b(0x240)]=new _0x4810e0(_0x9fa3bf,_0x5bec26),this[_0x28644b(0x2f8)](),this[_0x28644b(0x246)]['x']=_0x5737dd['ceil'](_0x9fa3bf/-0x2),this[_0x28644b(0x246)]['y']=_0x58d205[_0x28644b(0x13e)](_0x5bec26/-0x2);}}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x265)]=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x1ae)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x1ae)]=function(){const _0x2c21dc=_0x731a2e;return BattleManager[_0x2c21dc(0x2c8)]()?VisuMZ[_0x2c21dc(0x1d1)][_0x2c21dc(0x106)][_0x2c21dc(0x113)][_0x2c21dc(0x1fe)]['call'](this,this):VisuMZ[_0x2c21dc(0x1d1)][_0x2c21dc(0x265)]['call'](this);},VisuMZ['BattleSystemATB']['Game_Battler_tpbAcceleration']=Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x132)],Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x132)]=function(){const _0x4f8f58=_0x731a2e;if(BattleManager[_0x4f8f58(0x2c8)]()){if(_0x4f8f58(0x141)!==_0x4f8f58(0x141)){const _0x245eb4=this[_0x4f8f58(0x13c)]()[_0x4f8f58(0x22d)];if(_0x245eb4[_0x4f8f58(0xdc)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x4f8f58(0x143);else{if(_0x245eb4['match'](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x4f8f58(0x239);}return _0x1f1afb[_0x4f8f58(0x106)][_0x4f8f58(0x140)];}else return this['atbAcceleration']();}else{if(_0x4f8f58(0xe1)===_0x4f8f58(0xe1))return VisuMZ[_0x4f8f58(0x1d1)][_0x4f8f58(0x228)][_0x4f8f58(0x30f)](this);else{if(this['_statusType']===_0x4f8f58(0x122))return this[_0x4f8f58(0x251)](0x1);return _0x2bc6a5[_0x4f8f58(0x1d1)][_0x4f8f58(0x107)][_0x4f8f58(0x30f)](this);}}},Game_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x319)]=function(){const _0xba7502=_0x731a2e;let _0x22193c=VisuMZ[_0xba7502(0x1d1)]['Settings'][_0xba7502(0x113)]['TpbAccelerationJS'][_0xba7502(0x30f)](this,this);if(ConfigManager&&ConfigManager['atbSpeed']!==undefined){if(_0xba7502(0x2f3)!==_0xba7502(0x2f3))this[_0xba7502(0xf1)](),this[_0xba7502(0x258)]();else{const _0x1b1372=ConfigManager[_0xba7502(0x2a9)]-0x3;if(_0x1b1372>0x0)return _0x22193c*(_0x1b1372*0x2);else{if(_0x1b1372<0x0)return _0x22193c*(0x1/(_0x1b1372*-0x2));}}}return _0x22193c;},VisuMZ['BattleSystemATB'][_0x731a2e(0x20d)]=Game_Battler['prototype'][_0x731a2e(0x139)],Game_Battler['prototype'][_0x731a2e(0x139)]=function(){const _0x365ee0=_0x731a2e;if(BattleManager[_0x365ee0(0x2c8)]()){if(_0x365ee0(0x172)!==_0x365ee0(0x102)){const _0x32d582=this[_0x365ee0(0x233)]['map'](_0x4f6e91=>_0x4f6e91[_0x365ee0(0x205)]());for(const _0x1f376b of _0x32d582){if(_0x365ee0(0x18b)==='sitKd'){if(!_0x1f376b)continue;_0x1f376b[_0x365ee0(0x262)]=_0x1f376b[_0x365ee0(0x262)]??_0x1f376b[_0x365ee0(0x207)];}else _0x25207f['setFrame'](_0x432b89+_0x4ca3ce,_0x3f305d,_0x2090f0,_0x3de459),_0x5713cb['y']-=_0x17dd3f,_0x38bc80[_0x365ee0(0x1cf)]['y']=0x1;}let _0x3116a3=VisuMZ[_0x365ee0(0x1d1)][_0x365ee0(0x106)]['Mechanics'][_0x365ee0(0x187)][_0x365ee0(0x30f)](this,this);for(const _0x225192 of _0x32d582){if(!_0x225192)continue;_0x225192['speed']=_0x225192[_0x365ee0(0x262)];}return _0x3116a3;}else this['createAtbGaugeSprite']();}else{if(_0x365ee0(0x1e4)===_0x365ee0(0x2af)){if(!_0x99a6cb[_0x365ee0(0x2c8)]())return;if(!_0x1071db[_0x365ee0(0x106)][_0x365ee0(0x1aa)])return;if(!_0x5cc3db[_0x365ee0(0x210)])return;this['_fieldGaugeATB_Container']=new _0x231330(new _0x250a92(0x0,0x0,0x0,0x0));const _0x29cd1d=this[_0x365ee0(0x220)](this['_windowLayer']);this[_0x365ee0(0xd3)](this[_0x365ee0(0x2ea)],_0x29cd1d);}else return VisuMZ[_0x365ee0(0x1d1)]['Game_Battler_tpbRequiredCastTime'][_0x365ee0(0x30f)](this);}},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x161)]=Scene_Options[_0x731a2e(0x1d8)][_0x731a2e(0x14a)],Scene_Options['prototype'][_0x731a2e(0x14a)]=function(){const _0x35e37d=_0x731a2e;let _0x3e7a5a=VisuMZ[_0x35e37d(0x1d1)][_0x35e37d(0x161)][_0x35e37d(0x30f)](this);const _0x49c972=VisuMZ[_0x35e37d(0x1d1)]['Settings'];if(_0x49c972[_0x35e37d(0x286)][_0x35e37d(0x15d)]&&_0x49c972['Options'][_0x35e37d(0x2d6)]&&BattleManager[_0x35e37d(0x2c8)]())_0x3e7a5a++;return _0x3e7a5a;},Sprite_Battler[_0x731a2e(0x1d8)]['createAtbGaugeSprite']=function(){const _0xc8602c=_0x731a2e;if(!BattleManager[_0xc8602c(0x2c8)]())return;if(!ConfigManager[_0xc8602c(0x210)])return;const _0x549408=VisuMZ[_0xc8602c(0x1d1)][_0xc8602c(0x106)][_0xc8602c(0x1fc)],_0x40a97b=new Sprite_Gauge();_0x40a97b[_0xc8602c(0x1cf)]['x']=_0x549408[_0xc8602c(0x20f)],_0x40a97b[_0xc8602c(0x1cf)]['y']=_0x549408[_0xc8602c(0x26c)],_0x40a97b[_0xc8602c(0x1f7)]['x']=_0x40a97b[_0xc8602c(0x1f7)]['y']=_0x549408[_0xc8602c(0x1c5)],this['_atbGaugeSprite']=_0x40a97b,this['addChild'](this[_0xc8602c(0x2b4)]);},VisuMZ['BattleSystemATB']['Sprite_Battler_setBattler']=Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x173)],Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x173)]=function(_0x2a00c8){const _0x365c59=_0x731a2e;VisuMZ[_0x365c59(0x1d1)][_0x365c59(0x1dc)]['call'](this,_0x2a00c8),this[_0x365c59(0xda)](_0x2a00c8),this[_0x365c59(0x292)]();},Sprite_Battler['prototype'][_0x731a2e(0xda)]=function(_0x66c4e){const _0x2da2c8=_0x731a2e;if(!_0x66c4e)return;if(!this[_0x2da2c8(0x2b4)])return;if(_0x66c4e['isActor']()){}else{if(_0x66c4e['isEnemy']()){if('ALUui'!==_0x2da2c8(0x303)){if(this[_0x2da2c8(0x1f4)]===Sprite_Enemy&&_0x66c4e['hasSvBattler']())return;if(this[_0x2da2c8(0x1f4)]===Sprite_SvEnemy&&!_0x66c4e[_0x2da2c8(0x1f3)]())return;}else{const _0x23eb8e=this[_0x2da2c8(0x2f0)]()[_0x2da2c8(0x22d)];if(_0x23eb8e[_0x2da2c8(0xdc)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x2da2c8(0x143);else{if(_0x23eb8e[_0x2da2c8(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x2da2c8(0x239);}return _0x42efac[_0x2da2c8(0x106)][_0x2da2c8(0x14b)];}}}this[_0x2da2c8(0x2b4)][_0x2da2c8(0x176)](_0x66c4e,'time');},Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x292)]=function(){const _0x2096a0=_0x731a2e;if(!this[_0x2096a0(0x2b4)])return;const _0xb8e5dd=this['_battler']&&this['_battler']['isAppeared']()&&!this['_battler'][_0x2096a0(0x272)]();this[_0x2096a0(0x2b4)]['visible']=_0xb8e5dd,this[_0x2096a0(0x21c)]&&this[_0x2096a0(0x21c)][_0x2096a0(0x2b4)]&&(this[_0x2096a0(0x21c)]['_atbGaugeSprite'][_0x2096a0(0x2d4)]=_0xb8e5dd);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x1b7)]=Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x2b1)],Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x2b1)]=function(){const _0x4d4397=_0x731a2e;VisuMZ['BattleSystemATB'][_0x4d4397(0x1b7)][_0x4d4397(0x30f)](this),this[_0x4d4397(0x15e)]();},Sprite_Battler['prototype'][_0x731a2e(0x15e)]=function(){const _0x5f1fc1=_0x731a2e;if(!this[_0x5f1fc1(0x183)])return;if(!this[_0x5f1fc1(0x2b4)])return;if(this[_0x5f1fc1(0x183)]&&this[_0x5f1fc1(0x183)][_0x5f1fc1(0x2d2)]()&&this['_battler'][_0x5f1fc1(0x1f3)]()){if(this[_0x5f1fc1(0x1f4)]===Sprite_Enemy)return;}const _0x596a2a=VisuMZ[_0x5f1fc1(0x1d1)][_0x5f1fc1(0x106)][_0x5f1fc1(0x1fc)],_0x205e51=this['_atbGaugeSprite'];let _0x40fe2a=_0x596a2a['OffsetX'];this[_0x5f1fc1(0x183)][_0x5f1fc1(0x247)]&&(_0x5f1fc1(0x169)==='bhgTf'?_0x58513d[_0x5f1fc1(0x277)](_0x2da06c(_0x656710['$1'])*0.01):_0x40fe2a+=this['_battler'][_0x5f1fc1(0x247)]());let _0x56dba3=_0x596a2a[_0x5f1fc1(0x201)];this['_battler'][_0x5f1fc1(0x146)]&&(_0x56dba3+=this[_0x5f1fc1(0x183)][_0x5f1fc1(0x146)]());_0x205e51['x']=_0x40fe2a;let _0x3f8899=this[_0x5f1fc1(0x2a7)];this['_battler']&&this[_0x5f1fc1(0x183)][_0x5f1fc1(0x2d2)]()&&this[_0x5f1fc1(0x183)][_0x5f1fc1(0x1f3)]()&&(_0x3f8899=this['_battler'][_0x5f1fc1(0x217)]()['height']||0x1),_0x205e51['y']=-_0x3f8899+_0x56dba3,this['_battler'][_0x5f1fc1(0x2d2)]()&&(this[_0x5f1fc1(0x183)][_0x5f1fc1(0x13c)]()[_0x5f1fc1(0x22d)][_0x5f1fc1(0xdc)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0x5f1fc1(0x2ce)!==_0x5f1fc1(0x29e)?_0x205e51[_0x5f1fc1(0x2d4)]=![]:_0x35ca3f[_0x5f1fc1(0x2c8)]()?this[_0x5f1fc1(0x149)]():_0x449f0c[_0x5f1fc1(0x1d1)][_0x5f1fc1(0x2c5)]['call'](this))),this[_0x5f1fc1(0x17d)]()&&(_0x205e51['y']+=_0x205e51[_0x5f1fc1(0x30a)]()*_0x596a2a[_0x5f1fc1(0x1c5)]-0x1),this['scale']['x']<0x0&&('ygRHE'===_0x5f1fc1(0x1f1)?_0x54e406[_0x5f1fc1(0x30e)]():_0x205e51[_0x5f1fc1(0x1f7)]['x']=-Math[_0x5f1fc1(0x1bd)](_0x205e51[_0x5f1fc1(0x1f7)]['x']));},Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x17d)]=function(){const _0x3cc8bd=_0x731a2e;if(!Imported[_0x3cc8bd(0x10b)])return![];if(this[_0x3cc8bd(0x183)]&&this[_0x3cc8bd(0x183)]['isEnemy']())return![];const _0x366d36=VisuMZ[_0x3cc8bd(0x2ac)][_0x3cc8bd(0x106)]['Aggro'];if(!_0x366d36['VisibleGauge'])return![];if(!ConfigManager[_0x3cc8bd(0x23c)])return![];const _0x24608c=VisuMZ[_0x3cc8bd(0x1d1)]['Settings'][_0x3cc8bd(0x1fc)];return _0x366d36[_0x3cc8bd(0x1c5)]===_0x24608c[_0x3cc8bd(0x1c5)]&&_0x366d36[_0x3cc8bd(0x20f)]===_0x24608c[_0x3cc8bd(0x20f)]&&_0x366d36[_0x3cc8bd(0x26c)]===_0x24608c['AnchorY']&&_0x366d36[_0x3cc8bd(0x182)]===_0x24608c[_0x3cc8bd(0x182)]&&_0x366d36[_0x3cc8bd(0x201)]===_0x24608c[_0x3cc8bd(0x201)]&&!![];},VisuMZ[_0x731a2e(0x1d1)]['Sprite_Battler_update']=Sprite_Battler[_0x731a2e(0x1d8)][_0x731a2e(0x219)],Sprite_Battler['prototype'][_0x731a2e(0x219)]=function(){const _0x3bea60=_0x731a2e;VisuMZ[_0x3bea60(0x1d1)][_0x3bea60(0x2b2)][_0x3bea60(0x30f)](this);if(!this[_0x3bea60(0x183)]&&this[_0x3bea60(0x2b4)]){this[_0x3bea60(0x2b4)][_0x3bea60(0x2d4)]=![];if(this[_0x3bea60(0x21c)]){if(_0x3bea60(0x2ed)!==_0x3bea60(0x2ed))return this[_0x3bea60(0x1b9)]&&this[_0x3bea60(0x1b9)][_0x3bea60(0x1f4)]===_0x3851f4;else this[_0x3bea60(0x21c)]['_atbGaugeSprite']['visible']=![];}}},VisuMZ['BattleSystemATB']['Sprite_Actor_createStateSprite']=Sprite_Actor['prototype'][_0x731a2e(0x26a)],Sprite_Actor['prototype'][_0x731a2e(0x26a)]=function(){const _0x36b52c=_0x731a2e;VisuMZ['BattleSystemATB'][_0x36b52c(0x1d2)][_0x36b52c(0x30f)](this);if(this[_0x36b52c(0x2ff)]()){if(_0x36b52c(0x16c)!=='qsSGx'){const _0x36e3da=this[_0x36b52c(0x13c)]()[_0x36b52c(0x22d)];if(_0x36e3da[_0x36b52c(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x497f96(_0x48c95b['$1']);return _0xf05063[_0x36b52c(0x106)][_0x36b52c(0x2a8)];}else this[_0x36b52c(0x22e)]();}},Sprite_Actor['prototype'][_0x731a2e(0x2ff)]=function(){const _0x98ef88=_0x731a2e;return VisuMZ[_0x98ef88(0x1d1)]['Settings'][_0x98ef88(0x1fc)][_0x98ef88(0x2e8)];},Sprite_SvEnemy[_0x731a2e(0x1d8)][_0x731a2e(0x2ff)]=function(){const _0x71461f=_0x731a2e;return VisuMZ[_0x71461f(0x1d1)][_0x71461f(0x106)]['Gauge'][_0x71461f(0x288)];},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x231)]=Sprite_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x16b)],Sprite_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x16b)]=function(){const _0x11f72b=_0x731a2e;VisuMZ[_0x11f72b(0x1d1)][_0x11f72b(0x106)]['Gauge'][_0x11f72b(0x288)]&&this[_0x11f72b(0x22e)](),VisuMZ[_0x11f72b(0x1d1)][_0x11f72b(0x231)]['call'](this);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x25c)]=Sprite_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x160)],Sprite_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x160)]=function(_0x482275){const _0x3641e0=_0x731a2e;VisuMZ[_0x3641e0(0x1d1)][_0x3641e0(0x25c)][_0x3641e0(0x30f)](this,_0x482275);if(_0x482275===_0x3641e0(0x209)||'disappear'){if('OJewL'==='NiVLf'){if(this[_0x3641e0(0x21d)]!==_0x317d5c['battlerName']())return this[_0x3641e0(0x29a)]();}else this['updateAtbGaugeSpriteVisibility']();}},VisuMZ['BattleSystemATB']['Game_BattlerBase_appear']=Game_BattlerBase['prototype'][_0x731a2e(0x209)],Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x209)]=function(){const _0x3b2ac4=_0x731a2e;VisuMZ[_0x3b2ac4(0x1d1)]['Game_BattlerBase_appear'][_0x3b2ac4(0x30f)](this);if(this[_0x3b2ac4(0x2d2)]()&&BattleManager[_0x3b2ac4(0x2c8)]()&&this[_0x3b2ac4(0x241)]()){if(_0x3b2ac4(0x306)===_0x3b2ac4(0x306))this['battler']()['_fnord']=!![],this[_0x3b2ac4(0x241)]()[_0x3b2ac4(0x292)]();else return _0x342964(_0x2ff58e['$2']);}},VisuMZ['BattleSystemATB'][_0x731a2e(0x107)]=Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0xd9)],Sprite_Gauge[_0x731a2e(0x1d8)]['gaugeColor1']=function(){const _0x542553=_0x731a2e;if(this[_0x542553(0x20a)]===_0x542553(0x122))return this[_0x542553(0x251)](0x1);return VisuMZ[_0x542553(0x1d1)][_0x542553(0x107)][_0x542553(0x30f)](this);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x2e5)]=Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0x19a)],Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0x19a)]=function(){const _0x32bca0=_0x731a2e;if(this[_0x32bca0(0x20a)]===_0x32bca0(0x122))return this['atbGaugeColor'](0x2);return VisuMZ['BattleSystemATB'][_0x32bca0(0x2e5)]['call'](this);},Sprite_Gauge[_0x731a2e(0x1d8)]['atbGaugeColor']=function(_0x371a9a){const _0x4c48ef=_0x731a2e;if(!this['_battler'])return ColorManager['atbColor']('default%1'[_0x4c48ef(0x229)](_0x371a9a));if(this[_0x4c48ef(0x183)][_0x4c48ef(0x2f7)]())return ColorManager[_0x4c48ef(0x100)](_0x4c48ef(0x2a5)[_0x4c48ef(0x229)](_0x371a9a));if(this[_0x4c48ef(0x183)]['isAtbCastingState']())return ColorManager['atbColor'](_0x4c48ef(0x191)[_0x4c48ef(0x229)](_0x371a9a));if(this[_0x4c48ef(0x138)]()>=0x1)return ColorManager['atbColor'](_0x4c48ef(0x196)[_0x4c48ef(0x229)](_0x371a9a));const _0x51e26d=VisuMZ[_0x4c48ef(0x1d1)][_0x4c48ef(0x106)][_0x4c48ef(0x1fc)],_0xf7d58f=this[_0x4c48ef(0x183)][_0x4c48ef(0x14d)](0x6)*this[_0x4c48ef(0x183)][_0x4c48ef(0x1de)](0x6);if(_0xf7d58f<=_0x51e26d[_0x4c48ef(0x145)])return ColorManager[_0x4c48ef(0x100)](_0x4c48ef(0x283)[_0x4c48ef(0x229)](_0x371a9a));if(_0xf7d58f>=_0x51e26d[_0x4c48ef(0x307)])return ColorManager[_0x4c48ef(0x100)](_0x4c48ef(0x230)[_0x4c48ef(0x229)](_0x371a9a));return ColorManager['atbColor'](_0x4c48ef(0x1a0)['format'](_0x371a9a));},VisuMZ[_0x731a2e(0x1d1)]['Sprite_Gauge_currentValue']=Sprite_Gauge['prototype']['currentValue'],Sprite_Gauge[_0x731a2e(0x1d8)]['currentValue']=function(){const _0x1b4bdd=_0x731a2e;if(this[_0x1b4bdd(0x183)]&&this[_0x1b4bdd(0x20a)]==='time')return this[_0x1b4bdd(0x109)]();return VisuMZ[_0x1b4bdd(0x1d1)]['Sprite_Gauge_currentValue'][_0x1b4bdd(0x30f)](this);},Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0x109)]=function(){const _0x37c06a=_0x731a2e;return this['_battler'][_0x37c06a(0x232)]()?Math[_0x37c06a(0x274)](this[_0x37c06a(0x183)]['_tpbCastTime'],0x0):VisuMZ['BattleSystemATB'][_0x37c06a(0x2c3)][_0x37c06a(0x30f)](this);},VisuMZ['BattleSystemATB'][_0x731a2e(0x1f0)]=Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0x29c)],Sprite_Gauge[_0x731a2e(0x1d8)][_0x731a2e(0x29c)]=function(){const _0x4894c8=_0x731a2e;if(this['_battler']&&this[_0x4894c8(0x20a)]===_0x4894c8(0x122))return this['atbCurrentMaxValue']();return VisuMZ[_0x4894c8(0x1d1)]['Sprite_Gauge_currentMaxValue'][_0x4894c8(0x30f)](this);},Sprite_Gauge[_0x731a2e(0x1d8)]['atbCurrentMaxValue']=function(){const _0x3f02ef=_0x731a2e;if(this[_0x3f02ef(0x183)][_0x3f02ef(0x232)]()){if(_0x3f02ef(0x12c)===_0x3f02ef(0x12c))return Math[_0x3f02ef(0x274)](this[_0x3f02ef(0x183)][_0x3f02ef(0x139)](),1e-9);else this[_0x3f02ef(0x1b1)](...arguments);}else return VisuMZ['BattleSystemATB'][_0x3f02ef(0x1f0)][_0x3f02ef(0x30f)](this);},VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x30c)]=Window_Help[_0x731a2e(0x1d8)][_0x731a2e(0x2ae)],Window_Help['prototype']['setItem']=function(_0x5bee2c){const _0x12cb48=_0x731a2e;BattleManager[_0x12cb48(0x2c8)]()&&_0x5bee2c&&_0x5bee2c[_0x12cb48(0x22d)]&&_0x5bee2c[_0x12cb48(0x22d)][_0x12cb48(0xdc)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this[_0x12cb48(0x10c)](String(RegExp['$1'])):VisuMZ['BattleSystemATB'][_0x12cb48(0x30c)][_0x12cb48(0x30f)](this,_0x5bee2c);},VisuMZ[_0x731a2e(0x1d1)]['Window_StatusBase_placeGauge']=Window_StatusBase[_0x731a2e(0x1d8)][_0x731a2e(0x26b)],Window_StatusBase[_0x731a2e(0x1d8)][_0x731a2e(0x26b)]=function(_0x5ac7b9,_0x4ff4a2,_0x3c5366,_0x2a753b){const _0x1837b6=_0x731a2e;if(!this['showVisualAtbGauge'](_0x4ff4a2))return;VisuMZ[_0x1837b6(0x1d1)][_0x1837b6(0x27f)][_0x1837b6(0x30f)](this,_0x5ac7b9,_0x4ff4a2,_0x3c5366,_0x2a753b);},Window_StatusBase[_0x731a2e(0x1d8)][_0x731a2e(0xf3)]=function(_0x2f52d8){const _0x206806=_0x731a2e;if(_0x2f52d8!==_0x206806(0x122))return!![];if(![_0x206806(0x108),_0x206806(0x194)][_0x206806(0x2fb)](this[_0x206806(0x1f4)][_0x206806(0x28a)]))return![];if(!BattleManager[_0x206806(0x2c8)]())return![];if(!ConfigManager[_0x206806(0x210)])return![];return VisuMZ[_0x206806(0x1d1)][_0x206806(0x106)][_0x206806(0x1fc)][_0x206806(0x20e)];},VisuMZ[_0x731a2e(0x1d1)]['Window_Options_addGeneralOptions']=Window_Options[_0x731a2e(0x1d8)][_0x731a2e(0x2fe)],Window_Options[_0x731a2e(0x1d8)][_0x731a2e(0x2fe)]=function(){const _0x4ffe2b=_0x731a2e;VisuMZ['BattleSystemATB'][_0x4ffe2b(0xf2)][_0x4ffe2b(0x30f)](this),this['addBattleSystemATBCommands']();},Window_Options[_0x731a2e(0x1d8)][_0x731a2e(0x111)]=function(){const _0x583818=_0x731a2e;if(!BattleManager[_0x583818(0x2c8)]())return;VisuMZ[_0x583818(0x1d1)][_0x583818(0x106)][_0x583818(0x286)]['AddOption']&&(_0x583818(0x1e7)===_0x583818(0x1e7)?this[_0x583818(0x2c7)]():_0x5ecf76=_0x48110b[_0x583818(0x1d1)]['JS'][_0x317f34][_0x583818(0x30f)](this,this[_0x583818(0xf7)](),this['subject']()));},Window_Options[_0x731a2e(0x1d8)][_0x731a2e(0x2c7)]=function(){const _0x3d9f00=_0x731a2e,_0x506c9b=TextManager[_0x3d9f00(0x210)],_0x22b98d=_0x3d9f00(0x210);this[_0x3d9f00(0x118)](_0x506c9b,_0x22b98d);},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x17a)]=function(){const _0xee3c64=_0x731a2e;delete this[_0xee3c64(0x112)],delete this[_0xee3c64(0x31b)],delete this[_0xee3c64(0x2bf)],delete this[_0xee3c64(0x11c)];},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0xd2)]=function(){const _0x1ac9e3=_0x731a2e;return this['_fieldAtbGaugeGraphicType']===undefined&&(this[_0x1ac9e3(0x112)]=this[_0x1ac9e3(0x20c)]()),this['_fieldAtbGaugeGraphicType'];},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x20c)]=function(){const _0x305e63=_0x731a2e;return Sprite_FieldGaugeATB[_0x305e63(0x106)][_0x305e63(0x140)];},Game_BattlerBase['prototype'][_0x731a2e(0x254)]=function(){const _0x253263=_0x731a2e;if(this['_fieldAtbGaugeFaceName']===undefined){if(_0x253263(0x2c9)!=='QjOVF'){if(_0xc943c8['VisuMZ_2_BattleSystemCTB']&&this['isCTB']())return![];return this[_0x253263(0x2a3)]();}else this[_0x253263(0x31b)]=this[_0x253263(0x2e6)]();}return this['_fieldAtbGaugeFaceName'];},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x2e6)]=function(){const _0x3951aa=_0x731a2e;return Sprite_FieldGaugeATB[_0x3951aa(0x106)][_0x3951aa(0x1d6)];},Game_BattlerBase['prototype']['fieldAtbGraphicFaceIndex']=function(){const _0x233f5f=_0x731a2e;return this[_0x233f5f(0x2bf)]===undefined&&('lZFyM'!==_0x233f5f(0xe6)?(this[_0x233f5f(0x23f)](),_0x25dbbe[_0x233f5f(0x1d1)][_0x233f5f(0xe3)][_0x233f5f(0x30f)](this),this['process_VisuMZ_BattleSystemATB_JS_Notetags']()):this[_0x233f5f(0x2bf)]=this['createFieldAtbGraphicFaceIndex']()),this['_fieldAtbGaugeFaceIndex'];},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x2c1)]=function(){const _0x5e4e7c=_0x731a2e;return Sprite_FieldGaugeATB['Settings'][_0x5e4e7c(0x2a6)];},Game_BattlerBase[_0x731a2e(0x1d8)]['fieldAtbGraphicIconIndex']=function(){const _0x3d7bd0=_0x731a2e;return this['_fieldAtbGaugeIconIndex']===undefined&&(this[_0x3d7bd0(0x11c)]=this[_0x3d7bd0(0x27b)]()),this[_0x3d7bd0(0x11c)];},Game_BattlerBase[_0x731a2e(0x1d8)]['createFieldAtbGraphicIconIndex']=function(){const _0x3aa23f=_0x731a2e;return Sprite_FieldGaugeATB['Settings'][_0x3aa23f(0x2a8)];},Game_BattlerBase[_0x731a2e(0x1d8)][_0x731a2e(0x11f)]=function(_0xf5ddc7){const _0x5b8414=_0x731a2e;this[_0x5b8414(0x11c)]=_0xf5ddc7;},Game_Actor[_0x731a2e(0x1d8)][_0x731a2e(0x20c)]=function(){const _0x40c0a7=_0x731a2e,_0x202142=this[_0x40c0a7(0x2f0)]()[_0x40c0a7(0x22d)];if(_0x202142['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if(_0x40c0a7(0x202)!=='UQLXR')return _0x40c0a7(0x143);else this['opacity']=_0x49a71f[_0x40c0a7(0x274)](_0x2ba115,this[_0x40c0a7(0x115)]-_0x6b7008);}else{if(_0x202142[_0x40c0a7(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x40c0a7(0x239);}return Sprite_FieldGaugeATB['Settings'][_0x40c0a7(0x14b)];},Game_Actor[_0x731a2e(0x1d8)][_0x731a2e(0x2e6)]=function(){const _0x580f32=_0x731a2e,_0x19e6e5=this[_0x580f32(0x2f0)]()[_0x580f32(0x22d)];if(_0x19e6e5[_0x580f32(0xdc)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x580f32(0xec)]();},Game_Actor[_0x731a2e(0x1d8)][_0x731a2e(0x2c1)]=function(){const _0x444da7=_0x731a2e,_0x276917=this['actor']()[_0x444da7(0x22d)];if(_0x276917[_0x444da7(0xdc)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this['faceIndex']();},Game_Actor[_0x731a2e(0x1d8)][_0x731a2e(0x27b)]=function(){const _0x5679aa=_0x731a2e,_0xfc6c49=this[_0x5679aa(0x2f0)]()[_0x5679aa(0x22d)];if(_0xfc6c49[_0x5679aa(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x5679aa(0x106)][_0x5679aa(0x248)];},Game_Enemy[_0x731a2e(0x1d8)]['createFieldAtbGraphicType']=function(){const _0x5a1ff8=_0x731a2e,_0x35c65d=this[_0x5a1ff8(0x13c)]()[_0x5a1ff8(0x22d)];if(_0x35c65d['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if('sSovW'!==_0x5a1ff8(0x28c)){const _0x2d72f6=_0x34c2cf[_0x5a1ff8(0x1d1)][_0x5a1ff8(0x1d3)](this[_0x5a1ff8(0x205)](),'Charge');if(_0x4c667d[_0x5a1ff8(0x1d1)]['JS'][_0x2d72f6]){const _0x97e255=_0x1ea4ce[_0x5a1ff8(0x1d1)]['JS'][_0x2d72f6][_0x5a1ff8(0x30f)](this,this[_0x5a1ff8(0xf7)](),_0x45eebb);_0x4ca562['setAtbChargeTime'](_0x97e255);}_0xe71b10[_0x5a1ff8(0xdc)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0xb57a91[_0x5a1ff8(0x310)](_0x4dc78c(_0x1925f8['$1'])*0.01),_0x4da2f3[_0x5a1ff8(0xdc)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x4850dd['changeAtbChargeTime'](_0x44c434(_0x24e0b3['$1'])*0.01);}else return _0x5a1ff8(0x143);}else{if(_0x35c65d[_0x5a1ff8(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i)){if('lRuAc'!==_0x5a1ff8(0xeb))return _0x5a1ff8(0x239);else this[_0x5a1ff8(0x216)](),this[_0x5a1ff8(0x1a5)]='charging',this[_0x5a1ff8(0x280)]=_0x2a62db;}}return Sprite_FieldGaugeATB[_0x5a1ff8(0x106)][_0x5a1ff8(0x140)];},Game_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x2e6)]=function(){const _0x623909=_0x731a2e,_0x4475f7=this[_0x623909(0x13c)]()[_0x623909(0x22d)];if(_0x4475f7[_0x623909(0xdc)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if(_0x623909(0xf6)!==_0x623909(0xf6)){let _0x4d580e=_0x30eab7[_0x623909(0x1d1)][_0x623909(0x106)][_0x623909(0x113)][_0x623909(0x1ff)]['call'](this,this);if(_0x2dadc2&&_0xf1a69d[_0x623909(0x2a9)]!==_0xf0d3ef){const _0x235d48=_0x8350b[_0x623909(0x2a9)]-0x3;if(_0x235d48>0x0)return _0x4d580e*(_0x235d48*0x2);else{if(_0x235d48<0x0)return _0x4d580e*(0x1/(_0x235d48*-0x2));}}return _0x4d580e;}else return String(RegExp['$1']);}return Sprite_FieldGaugeATB[_0x623909(0x106)][_0x623909(0x1d6)];},Game_Enemy['prototype'][_0x731a2e(0x2c1)]=function(){const _0x565dcd=_0x731a2e,_0x5eed17=this[_0x565dcd(0x13c)]()[_0x565dcd(0x22d)];if(_0x5eed17['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB['Settings']['EnemyBattlerFaceIndex'];},Game_Enemy[_0x731a2e(0x1d8)][_0x731a2e(0x27b)]=function(){const _0x83c68b=_0x731a2e,_0x9767f8=this[_0x83c68b(0x13c)]()[_0x83c68b(0x22d)];if(_0x9767f8[_0x83c68b(0xdc)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x83c68b(0x106)][_0x83c68b(0x2a8)];},VisuMZ['BattleSystemATB']['Scene_Battle_createAllWindows']=Scene_Battle[_0x731a2e(0x1d8)][_0x731a2e(0x1d7)],Scene_Battle['prototype'][_0x731a2e(0x1d7)]=function(){const _0x1d4af3=_0x731a2e;this[_0x1d4af3(0xfa)](),VisuMZ[_0x1d4af3(0x1d1)][_0x1d4af3(0x1ba)][_0x1d4af3(0x30f)](this),this[_0x1d4af3(0xfe)]();},Scene_Battle[_0x731a2e(0x1d8)][_0x731a2e(0xfa)]=function(){const _0x1dd972=_0x731a2e;if(!BattleManager[_0x1dd972(0x2c8)]())return;if(!Sprite_FieldGaugeATB[_0x1dd972(0x106)][_0x1dd972(0x1aa)])return;if(!ConfigManager[_0x1dd972(0x210)])return;this[_0x1dd972(0x2ea)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x13d22e=this[_0x1dd972(0x220)](this['_windowLayer']);this[_0x1dd972(0xd3)](this['_fieldGaugeATB_Container'],_0x13d22e);},Scene_Battle['prototype']['createFieldGaugeSpriteATB']=function(){const _0x485bcf=_0x731a2e;if(!BattleManager[_0x485bcf(0x2c8)]())return;if(!Sprite_FieldGaugeATB[_0x485bcf(0x106)][_0x485bcf(0x1aa)])return;if(!ConfigManager['visualAtbGauge'])return;this[_0x485bcf(0x1eb)]=new Sprite_FieldGaugeATB(),this['_fieldGaugeATB_Container'][_0x485bcf(0x11b)](this['_fieldGaugeATB']);};function Sprite_FieldGaugeATB(){const _0x2386bc=_0x731a2e;this[_0x2386bc(0x1b1)](...arguments);}Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]=Object[_0x731a2e(0xfb)](Sprite[_0x731a2e(0x1d8)]),Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x1f4)]=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0x731a2e(0x106)]=JsonEx[_0x731a2e(0x22f)](VisuMZ[_0x731a2e(0x1d1)][_0x731a2e(0x106)]['FieldGauge']),Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x1b1)]=function(){const _0x4bbca7=_0x731a2e;Sprite[_0x4bbca7(0x1d8)][_0x4bbca7(0x1b1)][_0x4bbca7(0x30f)](this),this[_0x4bbca7(0x31c)](),this['setHomeLocation'](),this[_0x4bbca7(0x1bf)]();},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x31c)]=function(){const _0x4817bf=_0x731a2e;this[_0x4817bf(0x1cf)]['x']=0.5,this[_0x4817bf(0x1cf)]['y']=0.5;},Sprite_FieldGaugeATB['prototype'][_0x731a2e(0x18e)]=function(){const _0x46fe60=_0x731a2e;if(this[_0x46fe60(0x256)]!==undefined)return this['_horz'];const _0x2e7017=Sprite_FieldGaugeATB[_0x46fe60(0x106)][_0x46fe60(0x16f)];return this['_horz']=[_0x46fe60(0x2a4),'bottom']['includes'](_0x2e7017),this[_0x46fe60(0x256)];},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['setHomeLocation']=function(){const _0x171d3c=_0x731a2e,_0x4931cb=Sprite_FieldGaugeATB['Settings']['DisplayPosition'][_0x171d3c(0x159)]()[_0x171d3c(0x2f1)](),_0x19301c=Window_Base[_0x171d3c(0x1d8)][_0x171d3c(0xe2)](),_0x4a770a=SceneManager['_scene'][_0x171d3c(0x190)][_0x171d3c(0x2a7)]+Math[_0x171d3c(0x22a)](_0x19301c*0.5);this[_0x171d3c(0x282)]=0x0,this[_0x171d3c(0x151)]=0x0;switch(_0x4931cb){case _0x171d3c(0x2a4):this[_0x171d3c(0x282)]=Math[_0x171d3c(0x22a)](Graphics[_0x171d3c(0x18a)]*0.5),this[_0x171d3c(0x151)]=0x60;break;case _0x171d3c(0x26f):this['_homeX']=Math['round'](Graphics[_0x171d3c(0x18a)]*0.5),this[_0x171d3c(0x151)]=Graphics['boxHeight']-_0x4a770a;break;case _0x171d3c(0x285):this['_homeX']=0x50,this[_0x171d3c(0x151)]=Math[_0x171d3c(0x22a)]((Graphics[_0x171d3c(0x1ad)]-_0x4a770a)/0x2);break;case _0x171d3c(0x12e):this['_homeX']=Graphics[_0x171d3c(0x18a)]-0x50,this[_0x171d3c(0x151)]=Math[_0x171d3c(0x22a)]((Graphics[_0x171d3c(0x1ad)]-_0x4a770a)/0x2);break;}this['_homeX']+=Sprite_FieldGaugeATB['Settings']['DisplayOffsetX']||0x0,this['_homeY']+=Sprite_FieldGaugeATB[_0x171d3c(0x106)][_0x171d3c(0x18d)]||0x0,this['x']=this['_homeX'],this['y']=this[_0x171d3c(0x151)];},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x1bf)]=function(){const _0x5e7342=_0x731a2e;this[_0x5e7342(0x1d4)](),this[_0x5e7342(0x116)](),this[_0x5e7342(0x1e8)]();},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['createFieldGaugeSkin']=function(){const _0x493bf4=_0x731a2e;this[_0x493bf4(0x186)]=new Sprite(),this[_0x493bf4(0x186)]['anchor']['x']=0.5,this[_0x493bf4(0x186)][_0x493bf4(0x1cf)]['y']=0.5,this[_0x493bf4(0x11b)](this['_skinSprite']);const _0x3d9064=Sprite_FieldGaugeATB[_0x493bf4(0x106)][_0x493bf4(0x2a2)];if(_0x3d9064)this[_0x493bf4(0x186)][_0x493bf4(0x240)]=ImageManager['loadSystem'](_0x3d9064);},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x116)]=function(){const _0x5b294c=_0x731a2e;this['_gaugeSprite']=new Sprite(),this[_0x5b294c(0x11b)](this[_0x5b294c(0x246)]),this['createGaugeBitmap']();},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x2c6)]=function(){const _0x28542b=_0x731a2e,_0x2a569a=Sprite_FieldGaugeATB[_0x28542b(0x106)],_0x521474=this[_0x28542b(0x18e)](),_0x3c3a10=_0x521474?_0x2a569a[_0x28542b(0x104)]:_0x2a569a['GaugeThick'],_0x18b5b2=_0x521474?_0x2a569a['GaugeThick']:_0x2a569a[_0x28542b(0x1a2)];this['_gaugeSprite']['bitmap']=new Bitmap(_0x3c3a10,_0x18b5b2),this[_0x28542b(0x2f8)](),this['_gaugeSprite']['x']=Math[_0x28542b(0x13e)](_0x3c3a10/-0x2),this[_0x28542b(0x246)]['y']=Math[_0x28542b(0x13e)](_0x18b5b2/-0x2);},Sprite_FieldGaugeATB['prototype']['drawGaugeBitmap']=function(){const _0x4ffae4=_0x731a2e;if(!Sprite_FieldGaugeATB['Settings']['DrawGauge'])return;const _0x3e7d9b=Sprite_FieldGaugeATB[_0x4ffae4(0x106)],_0x103261=this[_0x4ffae4(0x246)][_0x4ffae4(0x240)],_0x31f18d=_0x103261['width'],_0x149bae=_0x103261[_0x4ffae4(0x2a7)],_0x46b8c9=ColorManager['gaugeBackColor'](),_0x3385bf=ColorManager[_0x4ffae4(0xd6)](),_0x37e332=ColorManager[_0x4ffae4(0x242)](),_0x5c7251=ColorManager[_0x4ffae4(0x100)](_0x4ffae4(0x17b)),_0x6071af=ColorManager[_0x4ffae4(0x100)](_0x4ffae4(0x1db)),_0x3839c3=this['isGaugeHorizontal'](),_0x3bf0cf=_0x3e7d9b[_0x4ffae4(0x28e)],_0x3c1075=_0x3e7d9b[_0x4ffae4(0x148)][_0x4ffae4(0x27a)](0x0,0x1),_0x5179d9=Math[_0x4ffae4(0x13e)](((_0x3839c3?_0x31f18d:_0x149bae)-0x2)*_0x3c1075);_0x103261[_0x4ffae4(0x2b6)](0x0,0x0,_0x31f18d,_0x149bae,_0x46b8c9);let _0x2891b7=0x0,_0x5a67f0=0x0,_0x45f5cb=0x0,_0x39630e=0x0;if(_0x3839c3&&_0x3bf0cf){if(_0x4ffae4(0x18f)===_0x4ffae4(0x18f))_0x2891b7=_0x5179d9-0x1,_0x45f5cb=_0x31f18d-0x3-_0x2891b7,_0x103261['gradientFillRect'](0x1,0x1,_0x2891b7,_0x149bae-0x2,_0x3385bf,_0x37e332,![]),_0x103261[_0x4ffae4(0x2a0)](0x2+_0x2891b7,0x1,_0x45f5cb,_0x149bae-0x2,_0x5c7251,_0x6071af,![]);else{if(this[_0x4ffae4(0x26e)]===_0x5b0fe8)this[_0x4ffae4(0x1f8)]();return this['_atbColors'][_0x458930]||_0x4ffae4(0x25f);}}else{if(_0x3839c3&&!_0x3bf0cf)_0x2891b7=_0x5179d9-0x1,_0x45f5cb=_0x31f18d-0x3-_0x2891b7,_0x103261[_0x4ffae4(0x2a0)](0x2+_0x45f5cb,0x1,_0x2891b7,_0x149bae-0x2,_0x3385bf,_0x37e332,![]),_0x103261[_0x4ffae4(0x2a0)](0x1,0x1,_0x45f5cb,_0x149bae-0x2,_0x5c7251,_0x6071af,![]);else{if(!_0x3839c3&&_0x3bf0cf)_0x5a67f0=_0x5179d9-0x1,_0x39630e=_0x149bae-0x3-_0x5a67f0,_0x103261[_0x4ffae4(0x2a0)](0x1,0x1,_0x31f18d-0x2,_0x5a67f0,_0x3385bf,_0x37e332,!![]),_0x103261[_0x4ffae4(0x2a0)](0x1,0x2+_0x5a67f0,_0x31f18d-0x2,_0x39630e,_0x5c7251,_0x6071af,!![]);else!_0x3839c3&&!_0x3bf0cf&&(_0x5a67f0=_0x5179d9-0x1,_0x39630e=_0x149bae-0x3-_0x5a67f0,_0x103261[_0x4ffae4(0x2a0)](0x1,0x2+_0x39630e,_0x31f18d-0x2,_0x5a67f0,_0x3385bf,_0x37e332,!![]),_0x103261[_0x4ffae4(0x2a0)](0x1,0x1,_0x31f18d-0x2,_0x39630e,_0x5c7251,_0x6071af,!![]));}}},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x1e8)]=function(){const _0x355a48=_0x731a2e;this[_0x355a48(0x255)]&&(_0x355a48(0x316)===_0x355a48(0x2d7)?this[_0x355a48(0x210)]=!![]:this[_0x355a48(0x246)]['removeChild'](this[_0x355a48(0x255)])),this[_0x355a48(0x255)]=new Sprite(),this['_gaugeSprite']['addChild'](this['_battlerContainer']),this['createBattlerSprites']();},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['createBattlerSprites']=function(){const _0x5644ed=_0x731a2e;this[_0x5644ed(0xf1)](),this[_0x5644ed(0x258)]();},Sprite_FieldGaugeATB['prototype'][_0x731a2e(0xf1)]=function(){const _0x190c7b=_0x731a2e,_0x200751=$gameTroop[_0x190c7b(0x257)](),_0x39d94d=_0x200751[_0x190c7b(0x2e9)];for(let _0x1d8cde=0x0;_0x1d8cde<_0x39d94d;_0x1d8cde++){this[_0x190c7b(0x177)](_0x1d8cde,$gameTroop);}},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['createActorSprites']=function(){const _0x15c893=_0x731a2e,_0x236563=$gameParty[_0x15c893(0x294)]();for(let _0xb73418=0x0;_0xb73418<_0x236563;_0xb73418++){this['createBattlerSprite'](_0xb73418,$gameParty);}},Sprite_FieldGaugeATB['prototype'][_0x731a2e(0x177)]=function(_0x56ec48,_0x3a6200){const _0x107022=_0x731a2e,_0x4adad8=new Sprite_FieldMarkerATB(_0x56ec48,_0x3a6200,this[_0x107022(0x246)]);this[_0x107022(0x255)]['addChild'](_0x4adad8);},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['update']=function(){const _0x123dff=_0x731a2e;Sprite[_0x123dff(0x1d8)][_0x123dff(0x219)][_0x123dff(0x30f)](this),this[_0x123dff(0x1b3)](),this[_0x123dff(0x103)](),this['updateVisibility']();},Sprite_FieldGaugeATB['prototype'][_0x731a2e(0x1b3)]=function(){const _0xe6af33=_0x731a2e,_0x1262bc=Sprite_FieldGaugeATB[_0xe6af33(0x106)];if(_0x1262bc[_0xe6af33(0x16f)]!==_0xe6af33(0x2a4))return;if(!_0x1262bc[_0xe6af33(0xee)])return;const _0x1f91c9=SceneManager['_scene'][_0xe6af33(0xff)];if(!_0x1f91c9)return;if(_0x1f91c9[_0xe6af33(0x2d4)]){if(_0xe6af33(0x155)!==_0xe6af33(0x279))this['x']=this[_0xe6af33(0x282)]+(_0x1262bc[_0xe6af33(0x260)]||0x0),this['y']=this[_0xe6af33(0x151)]+(_0x1262bc[_0xe6af33(0x23d)]||0x0);else return _0x1a0516['BattleSystemATB']['Game_Battler_tpbRelativeSpeed'][_0xe6af33(0x30f)](this);}else _0xe6af33(0x224)==='PrNzl'?this[_0xe6af33(0x1ec)]=0x0:(this['x']=this[_0xe6af33(0x282)],this['y']=this[_0xe6af33(0x151)]);const _0x41d0c6=SceneManager[_0xe6af33(0x1b9)][_0xe6af33(0x2df)];this['x']+=_0x41d0c6['x'],this['y']+=_0x41d0c6['y'];},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)][_0x731a2e(0x103)]=function(){const _0x4880f0=_0x731a2e;if(!this[_0x4880f0(0x255)])return;const _0x1d0b58=this['_battlerContainer']['children'];if(!_0x1d0b58)return;_0x1d0b58[_0x4880f0(0x31e)](this[_0x4880f0(0x271)][_0x4880f0(0x119)](this));},Sprite_FieldGaugeATB[_0x731a2e(0x1d8)]['compareBattlerSprites']=function(_0x449774,_0xab7950){const _0x28ac9e=_0x731a2e,_0x4d01b2=this[_0x28ac9e(0x18e)](),_0x44da13=Sprite_FieldGaugeATB['Settings'][_0x28ac9e(0x28e)];if(_0x4d01b2&&_0x44da13){if(_0x28ac9e(0x1e9)===_0x28ac9e(0x1e9))return _0x449774['x']-_0xab7950['x'];else{if(this['constructor']===_0x4699ac&&_0x34c69f[_0x28ac9e(0x1f3)]())return;if(this[_0x28ac9e(0x1f4)]===_0x5e3243&&!_0x1acf3b[_0x28ac9e(0x1f3)]())return;}}else{if(_0x4d01b2&&!_0x44da13){if('Etwau'===_0x28ac9e(0x1c4))return _0xab7950['x']-_0x449774['x'];else _0x42d219[_0x28ac9e(0x1d1)][_0x28ac9e(0x30c)][_0x28ac9e(0x30f)](this,_0x279fa9);}else{if(!_0x4d01b2&&_0x44da13)return _0x449774['y']-_0xab7950['y'];else{if(!_0x4d01b2&&!_0x44da13){if(_0x28ac9e(0x214)!==_0x28ac9e(0x214))_0x544cb9[_0x28ac9e(0x1f7)]['x']=-_0x753786[_0x28ac9e(0x1bd)](_0x2881c8['scale']['x']);else return _0xab7950['y']-_0x449774['y'];}}}}},Sprite_FieldGaugeATB['prototype'][_0x731a2e(0x162)]=function(){const _0x348e93=_0x731a2e;this[_0x348e93(0x2d4)]=$gameSystem['isBattleSystemATBFieldGaugeVisible']();};function _0x5174(_0x371fff,_0x4cdd85){const _0x2328a0=_0x2328();return _0x5174=function(_0x517440,_0x3782f6){_0x517440=_0x517440-0xd2;let _0x4209ec=_0x2328a0[_0x517440];return _0x4209ec;},_0x5174(_0x371fff,_0x4cdd85);}function Sprite_FieldMarkerATB(){const _0x4ae741=_0x731a2e;this[_0x4ae741(0x1b1)](...arguments);}Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]=Object[_0x731a2e(0xfb)](Sprite_Clickable[_0x731a2e(0x1d8)]),Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]['constructor']=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x1b1)]=function(_0x56e103,_0x2179c6,_0x81a965){const _0x1af5bf=_0x731a2e;this[_0x1af5bf(0x24a)]=_0x56e103,this[_0x1af5bf(0x129)]=_0x2179c6,this[_0x1af5bf(0x246)]=_0x81a965,Sprite_Clickable['prototype']['initialize'][_0x1af5bf(0x30f)](this),this[_0x1af5bf(0x31c)](),this[_0x1af5bf(0x1bf)](),this['opacity']=this[_0x1af5bf(0x175)]();},Sprite_FieldMarkerATB['prototype']['initMembers']=function(){const _0x41fa2e=_0x731a2e;this[_0x41fa2e(0x1cf)]['x']=0.5,this[_0x41fa2e(0x1cf)]['y']=0.5;},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x1bf)]=function(){const _0x277d01=_0x731a2e;this[_0x277d01(0x101)](),this[_0x277d01(0xdb)](),this[_0x277d01(0x1c2)](),this[_0x277d01(0x15a)](),this[_0x277d01(0x2d1)](),this[_0x277d01(0x1cb)](!![]);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x101)]=function(){const _0x454b08=_0x731a2e;if(!Sprite_FieldGaugeATB[_0x454b08(0x106)][_0x454b08(0x10e)])return;const _0x4104cf=Sprite_FieldGaugeATB[_0x454b08(0x106)],_0x502250=this[_0x454b08(0x129)]===$gameParty?'Actor':_0x454b08(0x1dd),_0xcca578='%1SystemBg'[_0x454b08(0x229)](_0x502250),_0x39ce1d=new Sprite();_0x39ce1d[_0x454b08(0x1cf)]['x']=this['anchor']['x'],_0x39ce1d[_0x454b08(0x1cf)]['y']=this[_0x454b08(0x1cf)]['y'];if(_0x4104cf[_0xcca578])_0x39ce1d[_0x454b08(0x240)]=ImageManager[_0x454b08(0x1e6)](_0x4104cf[_0xcca578]);else{if(_0x454b08(0x22b)!==_0x454b08(0x2de)){const _0x2765b3=_0x4104cf[_0x454b08(0x19f)];_0x39ce1d[_0x454b08(0x240)]=new Bitmap(_0x2765b3,_0x2765b3);const _0x68eb5a=ColorManager[_0x454b08(0x1e3)](_0x4104cf[_0x454b08(0x1f6)[_0x454b08(0x229)](_0x502250)]),_0x4d6f2c=ColorManager['getColor'](_0x4104cf['%1BgColor2'[_0x454b08(0x229)](_0x502250)]);_0x39ce1d[_0x454b08(0x240)]['gradientFillRect'](0x0,0x0,_0x2765b3,_0x2765b3,_0x68eb5a,_0x4d6f2c,!![]);}else{if(_0x299557!==_0x454b08(0x122))return!![];if(![_0x454b08(0x108),_0x454b08(0x194)][_0x454b08(0x2fb)](this[_0x454b08(0x1f4)]['name']))return![];if(!_0x7ccaa5['isATB']())return![];if(!_0x205abb[_0x454b08(0x210)])return![];return _0x11e16e[_0x454b08(0x1d1)][_0x454b08(0x106)][_0x454b08(0x1fc)][_0x454b08(0x20e)];}}this[_0x454b08(0x1fa)]=_0x39ce1d,this[_0x454b08(0x11b)](this[_0x454b08(0x1fa)]),this[_0x454b08(0x2c2)]=this['_backgroundSprite']['width'],this[_0x454b08(0x2a7)]=this[_0x454b08(0x1fa)][_0x454b08(0x2a7)];},Sprite_FieldMarkerATB['prototype'][_0x731a2e(0xdb)]=function(){const _0x215ba4=_0x731a2e,_0x41df1b=new Sprite();_0x41df1b['anchor']['x']=this[_0x215ba4(0x1cf)]['x'],_0x41df1b[_0x215ba4(0x1cf)]['y']=this[_0x215ba4(0x1cf)]['y'],this[_0x215ba4(0x12a)]=_0x41df1b,this['addChild'](this[_0x215ba4(0x12a)]),this[_0x215ba4(0x29a)]();},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x1c2)]=function(){const _0x3aedc9=_0x731a2e;if(!Sprite_FieldGaugeATB['Settings'][_0x3aedc9(0x296)])return;const _0x30efc1=Sprite_FieldGaugeATB[_0x3aedc9(0x106)],_0x4c16a3=this[_0x3aedc9(0x129)]===$gameParty?_0x3aedc9(0x1b5):'Enemy',_0x46eba5=_0x3aedc9(0xdf)[_0x3aedc9(0x229)](_0x4c16a3),_0x4b64a8=new Sprite();_0x4b64a8['anchor']['x']=this['anchor']['x'],_0x4b64a8[_0x3aedc9(0x1cf)]['y']=this[_0x3aedc9(0x1cf)]['y'];if(_0x30efc1[_0x46eba5])_0x4b64a8['bitmap']=ImageManager['loadSystem'](_0x30efc1[_0x46eba5]);else{if(_0x3aedc9(0x252)==='gebyL'){let _0x2b6b85=_0x30efc1[_0x3aedc9(0x19f)],_0x6f5be4=_0x30efc1[_0x3aedc9(0x2b3)];_0x4b64a8[_0x3aedc9(0x240)]=new Bitmap(_0x2b6b85,_0x2b6b85);const _0x4c8f19='#000000',_0x405be6=ColorManager[_0x3aedc9(0x1e3)](_0x30efc1[_0x3aedc9(0x1ca)[_0x3aedc9(0x229)](_0x4c16a3)]);_0x4b64a8[_0x3aedc9(0x240)][_0x3aedc9(0x2b6)](0x0,0x0,_0x2b6b85,_0x2b6b85,_0x4c8f19),_0x2b6b85-=0x2,_0x4b64a8[_0x3aedc9(0x240)][_0x3aedc9(0x2b6)](0x1,0x1,_0x2b6b85,_0x2b6b85,_0x405be6),_0x2b6b85-=_0x6f5be4*0x2,_0x4b64a8[_0x3aedc9(0x240)][_0x3aedc9(0x2b6)](0x1+_0x6f5be4,0x1+_0x6f5be4,_0x2b6b85,_0x2b6b85,_0x4c8f19),_0x2b6b85-=0x2,_0x6f5be4+=0x1,_0x4b64a8[_0x3aedc9(0x240)][_0x3aedc9(0x236)](0x1+_0x6f5be4,0x1+_0x6f5be4,_0x2b6b85,_0x2b6b85);}else{const _0x1f26fd=!this[_0x3aedc9(0x309)]()&&_0x381278['isTpb'](),_0x2c4418=this[_0x3aedc9(0x18c)](_0x2eddad);_0x5f16f3[_0x3aedc9(0x1d1)][_0x3aedc9(0x1b4)][_0x3aedc9(0x30f)](this,_0xe3ee18);if(this['isEnemy']()&&_0x2c4418&&!this['isStateAffected'](_0x75452))_0x1f26fd&&this[_0x3aedc9(0x309)]()&&this[_0x3aedc9(0x110)]&&(this[_0x3aedc9(0x2b9)](),this[_0x3aedc9(0x24e)](),this[_0x3aedc9(0x2c4)]=0x0),this['setActionState'](_0x3aedc9(0x1f5));else _0x1f26fd&&this['canMove']()&&this['numActions']()<=0x0&&(this[_0x3aedc9(0x216)](),this[_0x3aedc9(0x1a5)]=_0x3aedc9(0x120),this['_onRestrictBypassAtbReset']=_0x51c8eb);}}this[_0x3aedc9(0x1fa)]=_0x4b64a8,this['addChild'](this[_0x3aedc9(0x1fa)]);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x15a)]=function(){const _0x1a1c44=_0x731a2e,_0x13d844=Sprite_FieldGaugeATB['Settings'];if(!_0x13d844[_0x1a1c44(0x308)])return;if(this[_0x1a1c44(0x129)]===$gameParty)return;const _0x161a99=_0x13d844[_0x1a1c44(0x19f)],_0x2e00ae=new Sprite();_0x2e00ae[_0x1a1c44(0x1cf)]['x']=this[_0x1a1c44(0x1cf)]['x'],_0x2e00ae[_0x1a1c44(0x1cf)]['y']=this[_0x1a1c44(0x1cf)]['y'],_0x2e00ae[_0x1a1c44(0x240)]=new Bitmap(_0x161a99,_0x161a99),this[_0x1a1c44(0x1cc)]=_0x2e00ae,this[_0x1a1c44(0x11b)](this[_0x1a1c44(0x1cc)]);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x2d1)]=function(){const _0x33fb2c=_0x731a2e,_0x5106b9=Sprite_FieldGaugeATB[_0x33fb2c(0x106)];if(!_0x5106b9[_0x33fb2c(0x250)])return;const _0x20c8e6=new Sprite();_0x20c8e6[_0x33fb2c(0x1cf)]['x']=this[_0x33fb2c(0x1cf)]['x'],_0x20c8e6['anchor']['y']=this[_0x33fb2c(0x1cf)]['y'],this[_0x33fb2c(0x17f)](_0x20c8e6),this['_arrowSprite']=_0x20c8e6,this['addChild'](this[_0x33fb2c(0x184)]);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x17f)]=function(_0x23d327){const _0x2e9c75=_0x731a2e,_0x1e22a1=Sprite_FieldGaugeATB[_0x2e9c75(0x106)],_0x5b1811=_0x1e22a1[_0x2e9c75(0x19f)],_0x4738bc=Math['round'](_0x5b1811/0x2),_0x336a33=this[_0x2e9c75(0x18e)](),_0x96393a=this[_0x2e9c75(0x129)]===$gameParty?_0x2e9c75(0x1b5):'Enemy',_0x1c43c1=_0x1e22a1[_0x2e9c75(0x199)['format'](_0x96393a)];_0x23d327[_0x2e9c75(0x240)]=ImageManager['loadSystem'](_0x1e22a1[_0x2e9c75(0x14f)]);const _0x207835=0x18,_0x5471fe=_0x207835/0x2,_0x4bcab5=0x60+_0x207835,_0x161b3f=0x0+_0x207835;if(_0x336a33&&_0x1c43c1)_0x23d327[_0x2e9c75(0x213)](_0x4bcab5+_0x5471fe,_0x161b3f+_0x5471fe+_0x207835,_0x207835,_0x5471fe),_0x23d327['y']+=_0x4738bc,_0x23d327[_0x2e9c75(0x1cf)]['y']=0x0;else{if(_0x336a33&&!_0x1c43c1){if(_0x2e9c75(0x298)==='kowXk'){if(this[_0x2e9c75(0x280)])return;_0x2415a2[_0x2e9c75(0x1d1)]['Game_Battler_clearTpbChargeTime']['call'](this),this[_0x2e9c75(0x1ec)]+=this[_0x2e9c75(0x27d)]||0x0;}else _0x23d327[_0x2e9c75(0x213)](_0x4bcab5+_0x5471fe,_0x161b3f,_0x207835,_0x5471fe),_0x23d327['y']-=_0x4738bc,_0x23d327['anchor']['y']=0x1;}else{if(!_0x336a33&&_0x1c43c1)_0x23d327[_0x2e9c75(0x213)](_0x4bcab5,_0x161b3f+_0x5471fe,_0x5471fe,_0x207835),_0x23d327['x']-=Math[_0x2e9c75(0x13e)](_0x4738bc*1.75),_0x23d327[_0x2e9c75(0x1cf)]['x']=0x0;else{if(!_0x336a33&&!_0x1c43c1){if('xoRww'!=='xoRww'){const _0x16deb6=_0x1c7ab7(_0x25e30c['$1']),_0x41b24d=_0x2e9c75(0x2aa)['format'](_0x16deb6,_0x44a3e7),_0xbdecbf=_0x5d7565['BattleSystemATB'][_0x2e9c75(0x1d3)](_0x5eaf25,_0x1c6d21);_0x2490d3[_0x2e9c75(0x1d1)]['JS'][_0xbdecbf]=new _0x38f788(_0x41b24d);}else _0x23d327['setFrame'](_0x4bcab5+_0x207835+_0x5471fe,_0x161b3f+_0x5471fe,_0x5471fe,_0x207835),_0x23d327['x']+=Math[_0x2e9c75(0x13e)](_0x4738bc*1.75),_0x23d327['anchor']['x']=0x1;}}}}},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x241)]=function(){const _0x2cf3f1=_0x731a2e;if(this[_0x2cf3f1(0x129)]===$gameParty){if('WZfVI'!=='WZfVI')this[_0x2cf3f1(0x31b)]=this[_0x2cf3f1(0x2e6)]();else return $gameParty[_0x2cf3f1(0x125)]()[this['_index']];}else return _0x2cf3f1(0x2d0)!=='gPjEO'?$gameTroop['members']()[this[_0x2cf3f1(0x24a)]]:!this[_0x2cf3f1(0x309)]();},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x219)]=function(){const _0x10e107=_0x731a2e;Sprite_Clickable['prototype'][_0x10e107(0x219)][_0x10e107(0x30f)](this),this[_0x10e107(0x1be)](),this[_0x10e107(0x2be)](),this[_0x10e107(0x1cb)](),this[_0x10e107(0x121)](),this['updateGraphicHue'](),this[_0x10e107(0x178)](),this[_0x10e107(0x26d)]();},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]['updateOpacity']=function(){const _0x18f190=_0x731a2e,_0x5cc297=this['targetOpacity'](),_0x1d0b8b=Sprite_FieldGaugeATB[_0x18f190(0x106)][_0x18f190(0x218)];if(this[_0x18f190(0x115)]>_0x5cc297)_0x18f190(0x28d)!==_0x18f190(0x16e)?this[_0x18f190(0x115)]=Math['max'](_0x5cc297,this[_0x18f190(0x115)]-_0x1d0b8b):(_0xf7855c=_0x48b763-0x1,_0x5d09d5=_0x396862-0x3-_0x5e33a8,_0x9e0ee7['gradientFillRect'](0x1,0x1,_0x1b4bd9-0x2,_0xa1dde4,_0x13f278,_0xa0bb23,!![]),_0x405f27['gradientFillRect'](0x1,0x2+_0x320ae2,_0x28d19c-0x2,_0xc21cdf,_0xb386ee,_0x5bfdfa,!![]));else this[_0x18f190(0x115)]<_0x5cc297&&(this[_0x18f190(0x115)]=Math['min'](_0x5cc297,this['opacity']+_0x1d0b8b));},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]['targetOpacity']=function(){const _0x108f72=_0x731a2e,_0x47cb13=this[_0x108f72(0x241)]();if(!_0x47cb13)return 0x0;if(_0x47cb13[_0x108f72(0x272)]())return 0x0;if(_0x47cb13[_0x108f72(0x164)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]['isGaugeHorizontal']=function(){const _0x5bbe0c=_0x731a2e;if(this[_0x5bbe0c(0x256)]!==undefined)return this[_0x5bbe0c(0x256)];const _0x484375=Sprite_FieldGaugeATB[_0x5bbe0c(0x106)][_0x5bbe0c(0x16f)];return this[_0x5bbe0c(0x256)]=[_0x5bbe0c(0x2a4),_0x5bbe0c(0x26f)]['includes'](_0x484375),this[_0x5bbe0c(0x256)];},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x2be)]=function(){const _0x17a55b=_0x731a2e,_0x2478f9=Sprite_FieldGaugeATB['Settings'],_0x9d1884=this[_0x17a55b(0x18e)](),_0x171b61=this[_0x17a55b(0x129)]===$gameParty?'Actor':'Enemy',_0x25bb83=_0x2478f9['MarkerOffset'],_0x59351c=_0x2478f9[_0x17a55b(0x199)['format'](_0x171b61)];if(_0x9d1884){if(_0x17a55b(0x1c8)===_0x17a55b(0x1c8))this['y']=_0x2478f9['GaugeThick']/0x2,this['y']+=_0x59351c?-_0x25bb83:_0x25bb83;else{const _0x576462=_0x4c8c80[_0x17a55b(0x294)]();for(let _0x32b445=0x0;_0x32b445<_0x576462;_0x32b445++){this[_0x17a55b(0x177)](_0x32b445,_0x580c4d);}}}else this['x']=_0x2478f9[_0x17a55b(0x2dd)]/0x2,this['x']+=_0x59351c?_0x25bb83:-_0x25bb83;},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x1cb)]=function(_0x2c4100){const _0x55baa0=_0x731a2e,_0x3eaa61=this[_0x55baa0(0x241)]();if(!_0x3eaa61)return;const _0x42fd35=Sprite_FieldGaugeATB['Settings'],_0x58f875=this[_0x55baa0(0x18e)](),_0x3756d9=this[_0x55baa0(0x304)](),_0x47c832=_0x2c4100?Infinity:_0x42fd35[_0x55baa0(0x2ee)];if(_0x58f875&&this['x']!==_0x3756d9){if(this['x']>_0x3756d9)this['x']=Math[_0x55baa0(0x274)](_0x3756d9,this['x']-_0x47c832);if(this['x']<_0x3756d9)this['x']=Math[_0x55baa0(0x269)](_0x3756d9,this['x']+_0x47c832);}else{if(!_0x58f875&&this['x']!==_0x3756d9){if(this['y']>_0x3756d9)this['y']=Math[_0x55baa0(0x274)](_0x3756d9,this['y']-_0x47c832);if(this['y']<_0x3756d9)this['y']=Math[_0x55baa0(0x269)](_0x3756d9,this['y']+_0x47c832);}}},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x304)]=function(){const _0x150bc6=_0x731a2e,_0x2d86b1=Sprite_FieldGaugeATB[_0x150bc6(0x106)],_0x19bb8d=this[_0x150bc6(0x241)](),_0x266500=this[_0x150bc6(0x18e)](),_0x559a94=this[_0x150bc6(0x246)][_0x150bc6(0x240)][_0x150bc6(0x2c2)],_0x566225=this[_0x150bc6(0x246)][_0x150bc6(0x240)][_0x150bc6(0x2a7)],_0x19aeed=_0x2d86b1[_0x150bc6(0x148)][_0x150bc6(0x27a)](0x0,0x1),_0x2712b4=_0x2d86b1[_0x150bc6(0x28e)];let _0x41c99b=_0x19bb8d[_0x150bc6(0x244)]()*_0x19aeed;_0x41c99b+=(0x1-_0x19aeed)*_0x19bb8d[_0x150bc6(0x21f)]();if(_0x19bb8d===BattleManager[_0x150bc6(0x21e)])_0x41c99b=0x1;if(!_0x2712b4)_0x41c99b=0x1-_0x41c99b;let _0x46e4e9=0x0;if(_0x266500)_0x46e4e9=_0x41c99b*_0x559a94;else{if(!_0x266500){if('ulMZv'===_0x150bc6(0x2bc))_0x46e4e9=_0x41c99b*_0x566225;else{const _0x590ec7=_0x52d395+_0x35d93e;this[_0x150bc6(0x26e)][_0x590ec7]=this['getColor'](_0xfe10ba[_0x590ec7]);}}}return Math[_0x150bc6(0x22a)](_0x46e4e9);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x121)]=function(){const _0x55b4c0=_0x731a2e,_0x2c0718=this[_0x55b4c0(0x241)]();if(!_0x2c0718)return;const _0x47ee6b=Sprite_FieldGaugeATB[_0x55b4c0(0x106)],_0x44f1c6=this[_0x55b4c0(0x129)]===$gameParty?_0x55b4c0(0x1b5):'Enemy';let _0x2fd1ea=_0x2c0718[_0x55b4c0(0xd2)]();if(_0x2c0718[_0x55b4c0(0x226)]()&&_0x2fd1ea===_0x55b4c0(0x13c))_0x2fd1ea=_0x55b4c0(0x143);else _0x2c0718[_0x55b4c0(0x2d2)]()&&_0x2fd1ea===_0x55b4c0(0x174)&&(_0x2fd1ea='enemy');if(this[_0x55b4c0(0x126)]!==_0x2fd1ea)return this['processUpdateGraphic']();switch(this[_0x55b4c0(0x126)]){case _0x55b4c0(0x143):if(this[_0x55b4c0(0x2b7)]!==_0x2c0718[_0x55b4c0(0x254)]()){if(_0x55b4c0(0xe5)===_0x55b4c0(0x1b0))_0x3ef4bd[_0x55b4c0(0x2c8)]()&&_0x2e4679&&_0x4a1e8f[_0x55b4c0(0x22d)]&&_0x51fb04['note'][_0x55b4c0(0xdc)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this[_0x55b4c0(0x10c)](_0x13575a(_0x5e35f0['$1'])):_0x569377[_0x55b4c0(0x1d1)]['Window_Help_setItem']['call'](this,_0xe231db);else return this['processUpdateGraphic']();}if(this[_0x55b4c0(0x123)]!==_0x2c0718[_0x55b4c0(0x137)]()){if(_0x55b4c0(0x1a4)!==_0x55b4c0(0x1a4))_0x826d3c+=this[_0x55b4c0(0x183)][_0x55b4c0(0x146)]();else return this[_0x55b4c0(0x29a)]();}break;case _0x55b4c0(0x239):if(this[_0x55b4c0(0x2f9)]!==_0x2c0718[_0x55b4c0(0x1da)]())return _0x55b4c0(0x318)===_0x55b4c0(0x318)?this[_0x55b4c0(0x29a)]():_0x761e8b(_0x469781['$1']);break;case _0x55b4c0(0x13c):if(_0x2c0718[_0x55b4c0(0x1f3)]()){if(_0x55b4c0(0x302)!==_0x55b4c0(0xe8)){if(this['_graphicSv']!==_0x2c0718[_0x55b4c0(0x166)]())return this[_0x55b4c0(0x29a)]();}else{const _0x51f4b0=_0x4c034f[_0x55b4c0(0x257)](),_0x4e28e1=_0x51f4b0[_0x55b4c0(0x2e9)];for(let _0x54fd43=0x0;_0x54fd43<_0x4e28e1;_0x54fd43++){this[_0x55b4c0(0x177)](_0x54fd43,_0x37ebad);}}}else{if(this[_0x55b4c0(0x2ad)]!==_0x2c0718[_0x55b4c0(0x15b)]()){if('TXjNB'===_0x55b4c0(0x275))return this[_0x55b4c0(0x29a)]();else _0xf6e5d7['y']+=_0x2a8b48[_0x55b4c0(0x30a)]()*_0x403acc[_0x55b4c0(0x1c5)]-0x1;}}break;case _0x55b4c0(0x174):if(_0x2c0718[_0x55b4c0(0x226)]()){if(this[_0x55b4c0(0x21d)]!==_0x2c0718[_0x55b4c0(0x15b)]())return this['processUpdateGraphic']();}else{if(this[_0x55b4c0(0x2ad)]!==_0x2c0718[_0x55b4c0(0x15b)]())return this[_0x55b4c0(0x29a)]();}break;}},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x29a)]=function(){const _0x1bbb8c=_0x731a2e,_0x5e89c7=this[_0x1bbb8c(0x241)]();if(!_0x5e89c7)return;this[_0x1bbb8c(0x126)]=_0x5e89c7[_0x1bbb8c(0xd2)]();if(_0x5e89c7['isActor']()&&this[_0x1bbb8c(0x126)]==='enemy')'Aewsy'!=='Aewsy'?(this['battler']()[_0x1bbb8c(0x317)]=!![],this[_0x1bbb8c(0x241)]()['updateAtbGaugeSpriteVisibility']()):this[_0x1bbb8c(0x126)]='face';else{if(_0x5e89c7['isEnemy']()&&this['_graphicType']===_0x1bbb8c(0x174)){if(_0x1bbb8c(0x1ef)!==_0x1bbb8c(0x1ef)){if(!this[_0x1bbb8c(0x1cc)])return;const _0xb3b5b6=this[_0x1bbb8c(0x241)]();if(!_0xb3b5b6)return;if(this[_0x1bbb8c(0x1ac)]===_0xb3b5b6[_0x1bbb8c(0x1ac)]&&this['_plural']===_0xb3b5b6[_0x1bbb8c(0x212)])return;this[_0x1bbb8c(0x1ac)]=_0xb3b5b6[_0x1bbb8c(0x1ac)],this['_plural']=_0xb3b5b6[_0x1bbb8c(0x212)];const _0x255349=_0x2eae39['Settings'],_0x2efb50=_0x255349[_0x1bbb8c(0x19f)],_0x5ad82c=_0x145d90[_0x1bbb8c(0x211)](_0x2efb50/0x2),_0xe81f2f=this[_0x1bbb8c(0x1cc)][_0x1bbb8c(0x240)];_0xe81f2f[_0x1bbb8c(0x1a1)]();if(!this[_0x1bbb8c(0x212)])return;_0xe81f2f[_0x1bbb8c(0x2bd)]=_0x255349['EnemyBattlerFontFace']||_0x36de90['mainFontFace'](),_0xe81f2f[_0x1bbb8c(0x215)]=_0x255349[_0x1bbb8c(0x144)]||0x10,_0xe81f2f['drawText'](this[_0x1bbb8c(0x1ac)],0x2,_0x5ad82c,_0x2efb50-0x4,_0x5ad82c-0x2,_0x1bbb8c(0x12e));}else this['_graphicType']=_0x1bbb8c(0x13c);}}let _0x30547c;switch(this['_graphicType']){case _0x1bbb8c(0x143):this[_0x1bbb8c(0x2b7)]=_0x5e89c7['fieldAtbGraphicFaceName'](),this['_graphicFaceIndex']=_0x5e89c7[_0x1bbb8c(0x137)](),_0x30547c=ImageManager[_0x1bbb8c(0x1f2)](this[_0x1bbb8c(0x2b7)]),_0x30547c[_0x1bbb8c(0x12d)](this['changeFaceGraphicBitmap'][_0x1bbb8c(0x119)](this,_0x30547c));break;case _0x1bbb8c(0x239):this['_graphicIconIndex']=_0x5e89c7[_0x1bbb8c(0x1da)](),_0x30547c=ImageManager[_0x1bbb8c(0x1e6)](_0x1bbb8c(0x1a7)),_0x30547c['addLoadListener'](this[_0x1bbb8c(0xf0)]['bind'](this,_0x30547c));break;case _0x1bbb8c(0x13c):if(_0x5e89c7['hasSvBattler']())this[_0x1bbb8c(0x21d)]=_0x5e89c7[_0x1bbb8c(0x166)](),_0x30547c=ImageManager[_0x1bbb8c(0xd4)](this[_0x1bbb8c(0x21d)]),_0x30547c[_0x1bbb8c(0x12d)](this[_0x1bbb8c(0x284)]['bind'](this,_0x30547c));else $gameSystem[_0x1bbb8c(0x179)]()?(this[_0x1bbb8c(0x2ad)]=_0x5e89c7[_0x1bbb8c(0x15b)](),_0x30547c=ImageManager[_0x1bbb8c(0x2db)](this[_0x1bbb8c(0x2ad)]),_0x30547c[_0x1bbb8c(0x12d)](this[_0x1bbb8c(0x28b)][_0x1bbb8c(0x119)](this,_0x30547c))):(this[_0x1bbb8c(0x2ad)]=_0x5e89c7['battlerName'](),_0x30547c=ImageManager['loadEnemy'](this[_0x1bbb8c(0x2ad)]),_0x30547c[_0x1bbb8c(0x12d)](this[_0x1bbb8c(0x28b)]['bind'](this,_0x30547c)));break;case _0x1bbb8c(0x174):this['_graphicSv']=_0x5e89c7[_0x1bbb8c(0x15b)](),_0x30547c=ImageManager['loadSvActor'](this[_0x1bbb8c(0x21d)]),_0x30547c[_0x1bbb8c(0x12d)](this[_0x1bbb8c(0x284)]['bind'](this,_0x30547c));break;}},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)]['changeFaceGraphicBitmap']=function(_0x42cdae){const _0x858ce6=_0x731a2e,_0x3af46a=Sprite_FieldGaugeATB[_0x858ce6(0x106)],_0x1ed9d1=_0x3af46a['MarkerSize'],_0x384860=this[_0x858ce6(0x123)];this[_0x858ce6(0x12a)][_0x858ce6(0x240)]=new Bitmap(_0x1ed9d1,_0x1ed9d1);const _0x48113b=this[_0x858ce6(0x12a)]['bitmap'],_0x127d33=ImageManager[_0x858ce6(0x10d)],_0x47993a=ImageManager[_0x858ce6(0x12f)],_0x5058ac=ImageManager[_0x858ce6(0x10d)],_0x262416=ImageManager[_0x858ce6(0x12f)],_0x5b741e=_0x384860%0x4*_0x127d33+(_0x127d33-_0x5058ac)/0x2,_0x308f47=Math[_0x858ce6(0x211)](_0x384860/0x4)*_0x47993a+(_0x47993a-_0x262416)/0x2;_0x48113b[_0x858ce6(0x305)](_0x42cdae,_0x5b741e,_0x308f47,_0x5058ac,_0x262416,0x0,0x0,_0x1ed9d1,_0x1ed9d1);},Sprite_FieldMarkerATB['prototype'][_0x731a2e(0xf0)]=function(_0x2e9b08){const _0x565581=_0x731a2e,_0x38efb=Sprite_FieldGaugeATB['Settings'],_0xcf2828=_0x38efb[_0x565581(0x19f)],_0x3b7bf3=this['_graphicIconIndex'];this[_0x565581(0x12a)]['bitmap']=new Bitmap(_0xcf2828,_0xcf2828);const _0x315c4b=this[_0x565581(0x12a)][_0x565581(0x240)],_0x1ac7d8=ImageManager[_0x565581(0x204)],_0x42dc10=ImageManager[_0x565581(0x28f)],_0xb835c9=_0x3b7bf3%0x10*_0x1ac7d8,_0x8a900b=Math['floor'](_0x3b7bf3/0x10)*_0x42dc10;_0x315c4b['blt'](_0x2e9b08,_0xb835c9,_0x8a900b,_0x1ac7d8,_0x42dc10,0x0,0x0,_0xcf2828,_0xcf2828);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x284)]=function(_0x909435){const _0x1dd6b9=_0x731a2e,_0x5d49ee=Sprite_FieldGaugeATB[_0x1dd6b9(0x106)],_0x1eb8ea=_0x5d49ee[_0x1dd6b9(0x19f)];this[_0x1dd6b9(0x12a)][_0x1dd6b9(0x240)]=new Bitmap(_0x1eb8ea,_0x1eb8ea);const _0xca1461=this[_0x1dd6b9(0x12a)][_0x1dd6b9(0x240)],_0x3638c5=this['_graphicSv'][_0x1dd6b9(0xdc)](/\$/i),_0x5d36e9=_0x3638c5?0x1:ImageManager['svActorHorzCells'],_0x5b5eed=_0x3638c5?0x1:ImageManager[_0x1dd6b9(0x1a6)],_0x2fc48b=_0x909435[_0x1dd6b9(0x2c2)]/_0x5d36e9,_0x354add=_0x909435[_0x1dd6b9(0x2a7)]/_0x5b5eed,_0x11c329=Math[_0x1dd6b9(0x269)](0x1,_0x1eb8ea/_0x2fc48b,_0x1eb8ea/_0x354add),_0x2b442e=_0x2fc48b*_0x11c329,_0x1e8b77=_0x354add*_0x11c329,_0x2e6fe9=Math['round']((_0x1eb8ea-_0x2b442e)/0x2),_0x3173b7=Math[_0x1dd6b9(0x22a)]((_0x1eb8ea-_0x1e8b77)/0x2);_0xca1461[_0x1dd6b9(0x305)](_0x909435,0x0,0x0,_0x2fc48b,_0x354add,_0x2e6fe9,_0x3173b7,_0x2b442e,_0x1e8b77);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x28b)]=function(_0xa6e24d){const _0x3b1438=_0x731a2e,_0x2efb8f=Sprite_FieldGaugeATB[_0x3b1438(0x106)],_0x8ea24f=_0x2efb8f[_0x3b1438(0x19f)];this[_0x3b1438(0x12a)][_0x3b1438(0x240)]=new Bitmap(_0x8ea24f,_0x8ea24f);const _0x440fb7=this[_0x3b1438(0x12a)][_0x3b1438(0x240)],_0x48df6f=Math[_0x3b1438(0x269)](0x1,_0x8ea24f/_0xa6e24d['width'],_0x8ea24f/_0xa6e24d[_0x3b1438(0x2a7)]),_0x297881=_0xa6e24d[_0x3b1438(0x2c2)]*_0x48df6f,_0x45d17b=_0xa6e24d['height']*_0x48df6f,_0x296f5f=Math[_0x3b1438(0x22a)]((_0x8ea24f-_0x297881)/0x2),_0x487a04=Math[_0x3b1438(0x22a)]((_0x8ea24f-_0x45d17b)/0x2);_0x440fb7[_0x3b1438(0x305)](_0xa6e24d,0x0,0x0,_0xa6e24d['width'],_0xa6e24d['height'],_0x296f5f,_0x487a04,_0x297881,_0x45d17b);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x124)]=function(){const _0x45c821=_0x731a2e,_0x3ee6ef=this[_0x45c821(0x241)]();if(!_0x3ee6ef)return;if(!_0x3ee6ef['isEnemy']())return;if(this[_0x45c821(0x1e0)]===_0x3ee6ef[_0x45c821(0x25e)]())return;this['_graphicHue']=_0x3ee6ef['battlerHue'](),this[_0x45c821(0x12a)][_0x45c821(0x29b)](_0x3ee6ef['hasSvBattler']()?0x0:this[_0x45c821(0x1e0)]);},Sprite_FieldMarkerATB['prototype'][_0x731a2e(0x178)]=function(){const _0x415f7f=_0x731a2e;if(!this[_0x415f7f(0x1cc)])return;const _0x4e7c3a=this[_0x415f7f(0x241)]();if(!_0x4e7c3a)return;if(this['_letter']===_0x4e7c3a[_0x415f7f(0x1ac)]&&this[_0x415f7f(0x212)]===_0x4e7c3a[_0x415f7f(0x212)])return;this[_0x415f7f(0x1ac)]=_0x4e7c3a[_0x415f7f(0x1ac)],this[_0x415f7f(0x212)]=_0x4e7c3a[_0x415f7f(0x212)];const _0x167ee5=Sprite_FieldGaugeATB['Settings'],_0xd9375e=_0x167ee5[_0x415f7f(0x19f)],_0x59252b=Math[_0x415f7f(0x211)](_0xd9375e/0x2),_0xa5efde=this[_0x415f7f(0x1cc)]['bitmap'];_0xa5efde[_0x415f7f(0x1a1)]();if(!this[_0x415f7f(0x212)])return;_0xa5efde[_0x415f7f(0x2bd)]=_0x167ee5[_0x415f7f(0x223)]||$gameSystem[_0x415f7f(0x10a)](),_0xa5efde[_0x415f7f(0x215)]=_0x167ee5[_0x415f7f(0x144)]||0x10,_0xa5efde[_0x415f7f(0x1a3)](this[_0x415f7f(0x1ac)],0x2,_0x59252b,_0xd9375e-0x4,_0x59252b-0x2,_0x415f7f(0x12e));},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x26d)]=function(){const _0x3c0a61=_0x731a2e,_0x11ef5b=this['battler']();if(!_0x11ef5b)return;const _0x461b21=_0x11ef5b[_0x3c0a61(0x241)]();if(!_0x461b21)return;const _0x3e3201=_0x461b21['mainSprite']();if(!_0x3e3201)return;this[_0x3c0a61(0x281)](_0x3e3201[_0x3c0a61(0x14c)]);},Sprite_FieldMarkerATB[_0x731a2e(0x1d8)][_0x731a2e(0x313)]=function(){const _0x57e510=_0x731a2e;return this[_0x57e510(0x241)]();};