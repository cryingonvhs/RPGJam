//=============================================================================
// VisuStella MZ - Battle System - STB - Standard Turn Battle
// VisuMZ_2_BattleSystemSTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemSTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemSTB = VisuMZ.BattleSystemSTB || {};
VisuMZ.BattleSystemSTB.version = 1.21;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.21] [BattleSystemSTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_STB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Standard Turn Battle (STB) system uses RPG Maker MZ's default non-TPB
 * battle system as a base. Action orders are determined by the battler's AGI
 * values and they go from highest to lowest. However, actions are not selected
 * at the start of the turn. Instead, as the turn progresses, actions are then
 * picked as each battler's turn comes up and is executed immediately.
 * 
 * Optional to the battle system but fine tuned to it is the Exploit System.
 * When landing an elemental weakness or critical hit against a foe, the
 * battler can gain bonuses as well as an extra turn while the foe will become
 * stunned or gain any desired state(s). When all enemies are exploited in a
 * single turn, a common event can also be played, too.
 * 
 * A Turn Order Display will also appear on the screen to show the order the
 * battlers will take their turns in. This lets the player plan in advance on
 * how to go about the rest of the turn.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "stb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * A Turn Order Display to show the player when each battler will have its
 *   turn to perform an action.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * An optional Exploit System that can be disabled if desired, but otherwise,
 *   fine tuned to make use of STB's highly compatible nature.
 * * Landing an elemental weakness or critical hit can allow the active battler
 *   to gain bonuses, ranging from states to extra actions to custom effects
 *   that can be added on through JavaScript plugin parameters.
 * * An exploited enemy can suffer from states and/or custom effects added
 *   through JavaScript plugin parameters.
 * * If all enemies are exploited, a common event can run to allow for a custom
 *   follow up action.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
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
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Turn Order Display
 * 
 * The Turn Order Display will capture the battle's currently active battler
 * and any battlers found in the active battlers array for the BattleManager.
 * This does not overwrite any functions, but the Turn Order Display may or may
 * not conflict with any existing HUD elements that are already positioned on
 * the screen. If so, you can choose to offset the Turn Order Display or move
 * it to a different part of the screen through the plugin parameters.
 * 
 * ---
 *
 * Action Speed
 * 
 * For skills and items, action speeds now behave differently now. Because
 * actions are now decided after a turn starts, positioning will no longer be
 * decided from the selected skill/item's action speed for the current turn.
 * 
 * Instead, the action speed used by a skill or item will determine the bonus
 * speed (or speed penalty if negative) for the following turn. Using a Guard
 * action with a +2000 Action Speed will raise the following turn's speed by
 * +2000, whereas what is originally a long charge time skill with -1000 speed
 * will decrease the following action's speed by -1000.
 * 
 * You can also customize how speed is calculated through JS Plugin Parameters
 * found in the Mechanics Settings.
 *
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Exploit System
 * 
 * This is an optional system. If you wish to turn it off, you can do so in the
 * plugin parameters.
 * 
 * There are two main ways that battlers can be exploited. One is by receiving
 * damage that strikes an elemental weakness. The other is by receiving damage
 * from a Critical Hit. Exploited battlers can receive penalty states. These
 * states can be adjusted in the plugin parameters. The default penalty state
 * is the Stunned state.
 * 
 * The battler doing the exploiting can receive bonuses instead. This is to
 * reward a power play. These bonuses can range from added states to receiving
 * an extra action and allowing the active battler to immediately attack again.
 * 
 * Each battler can only be exploited once per turn. This means if an enemy
 * would receive multiple attacks to its elemental weakness(es), the exploited
 * effect will only occur once per turn, meaning the penalty states won't stack
 * multiple times over. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * Each action can also exploit only once per use and against an unexploited
 * target. This means battlers cannot use the same elemental attacks against
 * the same foes over and over to stack up an infinite amount of turns. If the
 * player wants to gain more bonuses, the player would have to strike against
 * unexploited foes. This limitation is for the sake of game balance, but if
 * you so wish, you can turn off this limitation in the plugin parameters.
 * 
 * When all members of a party/troop are exploited, a common event can be
 * triggered to run, allowing for potential follow up actions. How you wish to
 * make these common events is up to you.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins. Here is a list
 * of the ones this plugin is not compatible with.
 *
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Standard Turn Battle
 * is in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
 * 
 * ---
 *
 * VisuMZ_4_BreakShields
 * 
 * The Break Shields plugin can be used together with Battle System - STB.
 * However, it cannot be used together with the STB Exploit system. This is
 * because both Break Shields and the Exploit system function under similar
 * mechanics and will conflict. However, if STB's Exploit system is turned off,
 * then you can use all of the Break Shield plugin's features fully.
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
 * ---
 * 
 * === General STB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <STB Help>
 *  description
 *  description
 * </STB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under STB.
 * - This is primarily used if the skill behaves differently in STB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to STB.
 *
 * ---
 * 
 * === STB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the STB Turn Order Display
 * 
 * ---
 *
 * <STB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <STB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <STB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <STB Instant>
 * <STB Instant Use>
 * <STB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Exploit-Related Notetags ===
 * 
 * ---
 *
 * <STB Exploited Gain State: id>
 * <STB Exploited Gain State: id, id, id>
 * 
 * <STB Exploited Gain State: name>
 * <STB Exploited Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy is exploited via elemental
 *   weaknesses or critical hits, apply the listed penalty state(s).
 * - Replace 'id' with a number representing the penalty state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple penalty states at once.
 * - Replace 'name' with the name of the penalty state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple penalty states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploited>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from being exploited via elemental
 *   weaknesses or critical hits.
 *
 * ---
 *
 * <STB Exploiter Gain State: id>
 * <STB Exploiter Gain State: id, id, id>
 * 
 * <STB Exploiter Gain State: name>
 * <STB Exploiter Gain State: name, name, name>
 *
 * - Used for: Class, Enemy Notetags
 * - If an actor (with the specified class) or enemy exploits an opponent with
 *   an elemental weakness or critical hit, apply the listed bonus state(s).
 * - Replace 'id' with a number representing the bonus state ID's you wish
 *   to apply to the exploited battler.
 * - Insert multiple 'id' values to apply multiple bonus states at once.
 * - Replace 'name' with the name of the bonus state you wish to apply to the
 *   exploited battler.
 * - Insert multiple 'name' entries to apply multiple bonus states at once.
 *
 * ---
 *
 * <STB Cannot Be Exploiter>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This prevents the affected battler from exploiting any opponents via
 *   elemental weaknesses or critical hits.
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
 * Actor: Change STB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the STB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change STB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the STB Turn Order.
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
 * Actor: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the actor(s).
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
 * Enemy: Change STB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the STB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change STB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the STB Turn Order.
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
 * Enemy: Clear STB Turn Order Graphic
 * - Clears the STB Turn Order graphics for the enemy(ies).
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
 * System: STB Turn Order Visibility
 * - Determine the visibility of the STB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the STB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the STB Battle System.
 *
 * ---
 *
 * Speed
 * 
 *   JS: Finalized Speed:
 *   - Code used to calculate the finalized speed at the start of each turn.
 * 
 *   JS: Next Turn Speed:
 *   - Code used to calculate speed for a following turn.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploit System Settings
 * ============================================================================
 *
 * Here, you can adjust the main settings for the Exploit System, including
 * where you can turn it on/off. The Exploited and Exploiter settings are
 * extensions of the Exploit System and are better off with their own sections.
 *
 * ---
 *
 * Settings
 * 
 *   Enable System?:
 *   - Enable the exploit system? 
 *   - If disabled, ignore all the  mechanics regarding the Exploit System.
 * 
 *   Critical Hits:
 *   - Do critical hits exploit the opponent?
 * 
 *   Elemental Weakness:
 *   - Do elemental weaknesses exploit the opponent?
 * 
 *     Minimum Rate:
 *     - What's the minimum rate needed to count as an elemental weakness?
 * 
 *   Forced Actions:
 *   - Apply exploit system to Forced Actions?
 *   - We added this function because forced actions can disrupt player
 *     strategies when used with the exploit system.
 * 
 *   Reset Each Turn:
 *   - Reset exploits at the end of each turn?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploited Effects Settings
 * ============================================================================
 *
 * These are effects for the exploited battlers (the receiving end). Change how
 * you want exploited battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a target is exploited.
 * 
 *   Full Exploit Events:
 *   vs Actors Event:
 *   vs Enemies Event:
 *   - If all actors/enemies have been fully exploited, run this common event.
 *   - Does not work with unlimited exploits.
 * 
 *   Unlimited Exploits:
 *   - Can battlers be exploited endlessly?
 * 
 *   JS: On Exploited:
 *   - Code used when the target has been exploited.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Exploiter Effects Settings
 * ============================================================================
 *
 * These are effects for the battlers doing the exploiting. Change how you want
 * exploiter battlers to behave here.
 *
 * ---
 *
 * Mechanics
 * 
 *   Added States:
 *   - A list of the states that are added when a user exploits a foe.
 * 
 *   Extra Actions:
 *   - Successfully exploiting an enemy will grant the user this many
 *     extra actions.
 * 
 *   Multiple Exploits:
 *   - Can battlers exploit opponents multiple times with one action?
 * 
 *   JS: On Exploiting:
 *   - Code used when the user is exploiting a foe's weakness.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Settings
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System STB. These adjust how the
 * visible turn order appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Center Horizontal?:
 *   - Reposition the Turn Order Display to always be centered if it is a
 *     'top' or 'bottom' position?
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *   Reposition Log?:
 *   - If the display position is at the top, reposition the Battle Log Window
 *     to be lower?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *   - Settings may vary depending on position.
 *   - Left to Right / Down to Up
 *   - Right to Left / Up to Down
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's coordinates by this much when the Help Window
 *     is visible.
 *
 * ---
 *
 * Slots
 * 
 *   Max Horizontal:
 *   - Maximum slots you want to display for top and bottom Turn Order Display
 *     positions?
 * 
 *   Max Vertical:
 *   - Maximum slots you want to display for left and right Turn Order Display
 *     positions?
 * 
 *   Length:
 *   - How many pixels long should the slots be on the Turn Order display?
 * 
 *   Thin:
 *   - How many pixels thin should the slots be on the Turn Order display?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
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
 * Slot Sprites
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
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
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
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
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
 * Version 1.21: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where auto-battle would not give ONE MORE! bonus to actors.
 *    Fix made by Olivia.
 * 
 * Version 1.20: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug involving auto-battle that would give infinite actions if
 *    cancelled at specific timings. Fix made by Olivia.
 * 
 * Version 1.19: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the STB Turn Order faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.16: July 7, 2022
 * * Compatibility Update!
 * ** Plugin is now updated to support larger than 8 troop sizes.
 * 
 * Version 1.15: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Exploit System Settings > Forced Actions
 * **** Apply exploit system to Forced Actions?
 * **** We added this function because forced actions can disrupt player
 *      strategies when used with the exploit system.
 * 
 * Version 1.14: March 3, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.13: November 11, 2021
 * * Bug Fixes!
 * ** Critical hits for enemies with only one action per turn should now
 *    properly allow for the exploited effect to occur. Fix made by Olivia.
 * 
 * Version 1.12: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.11: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that altered the current action choice when enemies are using
 *    a skill that utilizes instants when there is only enough MP left for one
 *    of those actions. Fix made by Olivia.
 * 
 * Version 1.10: July 2, 2021
 * * Bug Fixes!
 * ** Dead battlers will no longer reappear in the turn order on subsequent
 *    turns. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** "Mechanics Settings" Plugin Parameters has been updated into
 *    "Speed Mechanics" with updated formulas that will now correlate any
 *    adjusted AGI changes made to battlers to alter the following turn
 *    properly. Update made by Olivia.
 * 
 * Version 1.09: March 26, 2021
 * * Bug Fixes!
 * ** Enemy exploit actions should now associate A.I. properly. Fix by Yanfly.
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.08: March 19, 2021
 * * Feature Update!
 * ** Turn Order Window calculations slightly tweaked for times when the window
 *    layer is bigger than it should be. Update made by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Feature Update!
 * ** A different kind of end battle check is now made to determine hiding the
 *    turn order display. Update made by Olivia.
 * 
 * Version 1.06: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Bug Fixes!
 * ** Starting battle from a surprise attack will no longer skip turn 1. And
 *    starting battle without any inputtable actors will no longer skip turn 1.
 *    Fix made by Yanfly.
 * 
 * Version 1.04: December 18, 2020
 * * Feature Update!
 * ** Enemies can now benefit from <STB Instant> skills. Update made by Olivia.
 * ** Action End States updating are now handled by Skills and States Core
 *    v1.07+ for proper intended usage. Change from Battle System - STB v1.02
 *    is reverted here to prevent triggering the update twice.
 * 
 * Version 1.03: December 4, 2020
 * * Bug Fixes!
 * ** Select Next Command no longer returns undefined. Fix made by Olivia.
 * 
 * Version 1.02: November 22, 2020
 * * Bug Fixes!
 * ** Action End States now update at the end of each individual action.
 *    Fix made by Yanfly.
 * 
 * Version 1.01: November 15, 2020
 * * Bug Fixes!
 * ** Now compatible with Party Command Window Disable from the Battle Core.
 *    Fix made by Yanfly.
 *
 * Version 1.00 Official Release Date: November 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderActorIcon
 * @text Actor: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the STB Turn Order.
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
 * @command StbTurnOrderActorFace
 * @text Actor: Change STB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the STB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StbTurnOrderClearActorGraphic
 * @text Actor: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the actor(s).
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
 * @command StbTurnOrderEnemyIcon
 * @text Enemy: Change STB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the STB Turn Order.
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
 * @command StbTurnOrderEnemyFace
 * @text Enemy: Change STB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the STB Turn Order.
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
 * @command StbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear STB Turn Order Graphic
 * @desc Clears the STB Turn Order graphics for the enemy(ies).
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
 * @command SystemTurnOrderVisibility
 * @text System: STB Turn Order Visibility
 * @desc Determine the visibility of the STB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the STB Turn Order Display.
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
 * @param BattleSystemSTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Speed:struct
 * @text Speed Mechanics
 * @type struct<Speed>
 * @desc Determines the mechanics of the STB Battle System.
 * @default {"Speed":"","InitialSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst agi = user.agi;\\n\\n// Create Base Speed\\nlet speed = agi;\\n\\n// Random Speed Check\\nif (user.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Add Saved Speed Modifiers from Previous Round\\nspeed += user.getSTBNextTurnSpeed();\\n\\n// Return Speed\\nreturn speed;\"","NextTurnSavedSpeedJS:func":"\"// Create Speed\\nconst action = this;\\nlet speed = 0;\\n\\n// Check Object\\nif (action.item()) {\\n    speed += action.item().speed;\\n}\\n\\n// Check Attack\\nif (action.isAttack()) {\\n    speed += action.subject().attackSpeed();\\n}\\n\\n// Return Speed\\nreturn speed;\""}
 *
 * @param Exploit:struct
 * @text Exploit System
 * @type struct<Exploit>
 * @desc Settings for the STB's Exploit System.
 * @default {"EnableExploit:eval":"true","ExploitCritical:eval":"true","ExploitEleWeakness:eval":"true","ExploitEleRate:num":"1.05","TurnResetExploits:eval":"true"}
 *
 * @param Exploited:struct
 * @text Exploited Effects
 * @parent Exploit:struct
 * @type struct<Exploited>
 * @desc Settings for targets being Exploited.
 * @default {"Mechanics":"","AddedStates:arraynum":"[\"13\"]","FullExploitEvents":"","vsActorsFullExploit:num":"0","vsEnemiesFullExploit:num":"0","UnlimitedExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst target = this;\\nconst user = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"0","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"","TextColor:str":"0","FlashColor:eval":"[255, 255, 255, 160]","FlashDuration:num":"60"}
 *
 * @param Exploiter:struct
 * @text Exploiter Effects
 * @parent Exploit:struct
 * @type struct<Exploiter>
 * @desc Settings for users doing the Exploiting.
 * @default {"Mechanics":"","AddedStates:arraynum":"[]","ExtraActions:num":"1","MultipleExploits:eval":"false","CustomJS:func":"\"// Declare Constants\\nconst user = this;\\nconst target = arguments[0];\\nconst action = arguments[1];\\n\\n// Perform Actions\\n\"","Animation":"","AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"ONE MORE!","TextColor:str":"0","FlashColor:eval":"[255, 255, 128, 160]","FlashDuration:num":"60"}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System STB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","CenterHorz:eval":"true","RepositionTopForHelp:eval":"true","RepositionLogWindow:eval":"true","OrderDirection:eval":"true","SubjectDistance:num":"8","ScreenBuffer:num":"20","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"96","Slots":"","MaxHorzSprites:num":"16","MaxVertSprites:num":"10","SpriteLength:num":"72","SpriteThin:num":"36","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","EnemyBgColor2:str":"18","EnemySystemBg:str":""}
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
 * Speed Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Speed:
 *
 * @param Speed
 *
 * @param InitialSpeedJS:func
 * @text JS: Finalized Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst user = this;\nconst agi = user.agi;\n\n// Create Base Speed\nlet speed = agi;\n\n// Random Speed Check\nif (user.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Add Saved Speed Modifiers from Previous Round\nspeed += user.getSTBNextTurnSpeed();\n\n// Return Speed\nreturn speed;"
 *
 * @param NextTurnSavedSpeedJS:func
 * @text JS: Next Turn Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate speed for a following turn.
 * @default "// Create Speed\nconst action = this;\nlet speed = 0;\n\n// Check Object\nif (action.item()) {\n    speed += action.item().speed;\n}\n\n// Check Attack\nif (action.isAttack()) {\n    speed += action.subject().attackSpeed();\n}\n\n// Return Speed\nreturn speed;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Exploit System Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploit:
 *
 * @param EnableExploit:eval
 * @text Enable System?
 * @parent Exploit
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the exploit system? If disabled, ignore all the 
 * mechanics regarding the Exploit System.
 * @default true
 *
 * @param ExploitCritical:eval
 * @text Critical Hits
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do critical hits exploit the opponent?
 * @default true
 *
 * @param ExploitEleWeakness:eval
 * @text Elemental Weakness
 * @parent Exploit
 * @type boolean
 * @on Exploit
 * @off Don't Exploit
 * @desc Do elemental weaknesses exploit the opponent?
 * @default true
 *
 * @param ExploitEleRate:num
 * @text Minimum Rate
 * @parent ExploitEleWeakness:eval
 * @desc What's the minimum rate needed to count as an elemental weakness?
 * @default 1.05
 *
 * @param ForcedActions:eval
 * @text Forced Actions
 * @parent Exploit
 * @type boolean
 * @on Apply
 * @off Don't Apply
 * @desc Apply exploit system to Forced Actions?
 * @default false
 *
 * @param TurnResetExploits:eval
 * @text Reset Each Turn
 * @parent Exploit
 * @type boolean
 * @on Reset Exploits
 * @off Don't Reset
 * @desc Reset exploits at the end of each turn?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Exploited Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploited:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a target is exploited.
 * @default ["13"]
 * 
 * @param FullExploitEvents
 * @text Full Exploit Events
 * @parent Mechanics
 * 
 * @param vsActorsFullExploit:num
 * @text vs Actors Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all actors have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 * 
 * @param vsEnemiesFullExploit:num
 * @text vs Enemies Event
 * @parent FullExploitEvents
 * @type common_event
 * @desc If all enemies have been fully exploited, run this common
 * event. Does not work with unlimited exploits.
 * @default 0
 *
 * @param UnlimitedExploits:eval
 * @text Unlimited Exploits
 * @parent Mechanics
 * @type boolean
 * @on Unlimited
 * @off Once Per Turn
 * @desc Can battlers be exploited endlessly?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploited
 * @parent Mechanics
 * @type note
 * @desc Code used when the target has been exploited.
 * @default "// Declare Constants\nconst target = this;\nconst user = arguments[0];\nconst action = arguments[1];\n\n// Perform Actions\n"
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 0
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default 
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Exploiter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exploiter:
 *
 * @param Mechanics
 * 
 * @param AddedStates:arraynum
 * @text Added States
 * @parent Mechanics
 * @type state[]
 * @desc A list of the states that are added when a user exploits a foe.
 * @default []
 * 
 * @param ExtraActions:num
 * @text Extra Actions
 * @parent Mechanics
 * @type number
 * @desc Successfully exploiting an enemy will grant the user this many extra actions.
 * @default 1
 *
 * @param MultipleExploits:eval
 * @text Multiple Exploits
 * @parent Mechanics
 * @type boolean
 * @on Multiple
 * @off Once Per Action
 * @desc Can battlers exploit opponents multiple times with one action?
 * @default false
 *
 * @param CustomJS:func
 * @text JS: On Exploiting
 * @parent Mechanics
 * @type note
 * @desc Code used when the user is exploiting a foe's weakness.
 * @default ""
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default ONE MORE!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 128, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Turn Order will appear on the screen.
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
 * @param CenterHorz:eval
 * @text Center Horizontal?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Center
 * @off Stay
 * @desc Reposition the Turn Order Display to always be centered
 * if it is a 'top' or 'bottom' position?
 * @default true
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Down to Up
 * @off Right to Left / Up to Down
 * @desc Decide on the direction of the Turn Order.
 * Settings may vary depending on position.
 * @default true
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 8
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 20
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 96
 * 
 * @param Slots
 *
 * @param MaxHorzSprites:num
 * @text Max Horizontal
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for top and
 * bottom Turn Order Display positions?
 * @default 16
 *
 * @param MaxVertSprites:num
 * @text Max Vertical
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for left and
 * right Turn Order Display positions?
 * @default 10
 *
 * @param SpriteLength:num
 * @text Length
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels long should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteThin:num
 * @text Thin
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels thin should the slots be on the
 * Turn Order display?
 * @default 36
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
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
 * @text Slot Sprites
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
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
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
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
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
 * @default 19
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
 * @default 19
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
 */
//=============================================================================

function _0x52c0(_0x316f0d,_0x24125d){const _0x37b288=_0x37b2();return _0x52c0=function(_0x52c01e,_0x25d961){_0x52c01e=_0x52c01e-0x105;let _0x4bfd7f=_0x37b288[_0x52c01e];return _0x4bfd7f;},_0x52c0(_0x316f0d,_0x24125d);}function _0x37b2(){const _0x344a73=['MaxVertSprites','calculateTargetPositions','voGRd','_stbTurnOrderVisible','test','faceWidth','exit','_fullHeight','makeActionOrders','%1BgColor2','_windowLayer','Enemies','CvGqT','SpriteThin','performActionEnd','createTurnOrderSTBGraphicFaceName','ceil','_unit','areAllEnemiesExploited','Actors','isPartyCommandWindowDisabled','startFade','kzJiU','Window_Help_setItem','round','FVWjd','ExploitCritical','Exploit','StbTurnOrderClearActorGraphic','_homeX','BattleManager_makeActionOrders','BattleManager_isActiveTpb','bitmap','createBattlerSprites','removeActor','canMove','top','createBorderSprite','_graphicSv','left','tBror','ScreenBuffer','padding','ActorBattlerIcon','vuQKa','critical','BattleManager_isTpb','tUrxS','setup','Game_Battler_performCollapse','status','CenterHorz','isActionValid','ARRAYNUM','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','KDawU','parse','fontSize','bbyGc','startActorCommandSelection','_stbTurnOrderWindow','iconWidth','updateTurnOrder','RepositionTopHelpY','Actor','_stbExploited','_homeY','Olzkf','compareBattlerSprites','_subject','TextColor','ActorBattlerType','selectNextCommand','createGraphicSprite','brmKd','battler','EnemyBattlerDrawLetter','return\x200','_turnOrderInnerSprite','Game_Action_applyGlobal','createBackgroundSprite','commandFight','BattleManager_finishActorInput','unshift','%1BorderColor','8SNUiyC','isSTBExploited','_phase','TurnOrderSTBGraphicIconIndex','subject','drawText','min','updateSidePosition','endAction','_graphicType','createInitialPositions','version','362kbFKuY','isBattleSystemSTBTurnOrderVisible','isActor','setItem','updateGraphicHue','973203PLMyNy','Game_Battler_onTurnEnd','createAllWindows','AddedStates','fBPRb','_targetHomeY','TurnOrderSTBGraphicType','length','executeDamageSTB','changeEnemyGraphicBitmap','faceIndex','StbTurnOrderEnemyFace','createTurnOrderSTBGraphicIconIndex','loadSvEnemy','setSTBGraphicIconIndex','CannotBeExploited','allowRandomSpeed','clearSTB','mhnnj','Scene_Battle_createActorCommandWindow','format','_actionBattlers','hasSTBExploited','BattleManager_battleSys','ybCEZ','addSTBNextTurnSpeed','TurnOrderSTBGraphicFaceIndex','Game_Action_executeDamage','mainSprite','initialize','wUAeV','selectNextActorSTB','setSTBExploited','MultipleExploits','TurnOrder','DisplayOffsetY','calcElementRate','loadFace','createTurnOrderSTBGraphicFaceIndex','_fullWidth','_graphicFaceName','KMXaa','updateLetter','processUpdateGraphic','isImmortal','EVAL','_stateIDs','filter','battlerName','SystemTurnOrderVisibility','_currentActor','UrSHd','Visible','Game_BattlerBase_initMembers','bitmapWidth','makeSpeed','_letter','setSTBExploitedFlag','getStateTooltipBattler','_positionTargetY','areAllActorsExploited','JOUVg','createLetterSprite','onBattleStartSTB','updateBattleContainerOrder','clearRect','AavsC','#000000','updatePosition','_containerHeight','children','DMThk','setAutoBattleStb','isAlive','_isAlive','EQGaz','EnemyBattlerFontSize','bitmapHeight','initMembers','getSTBNextTurnSpeed','prototype','BorderThickness','ImkTT','recalculateHome','svActorVertCells','changeFaceGraphicBitmap','ttjzG','ySBpW','SubjectDistance','setBlendColor','selectNextActor','5983128gkTGBT','Mechanics','Game_Actor_isAutoBattle','STB','jwaJk','TurnResetExploits','IconIndex','InitialSpeedJS','_blendColor','_scene','Exploiter','eHxfb','_statusWindow','canInput','startInput','remove','name','isSTB','5255131UXaBzl','BattleManager_processTurn','anchor','_stbExploitAdvantageFlag','MzhYv','isAppeared','fillRect','JPILo','_graphicEnemy','jlted','_helpWindow','BBjPs','loadSystem','%1SystemBg','startInputSTB','face','push','hide','_graphicHue','split','FKfRt','Game_Party_removeActor','_isAppeared','QjQMW','blt','_logWindow','xYkBr','vpuky','setSTBNextTurnSpeed','ConvertParams','FUNC','stbCannotBeExploiter','appear','_actorCommandWindow','_forcing','TAujM','Mirror','iconHeight','UpdateFrames','some','currentAction','EnemyBattlerFontFace','CustomJS','map','becomeSTBExploited','setBattleSystemSTBTurnOrderVisible','includes','isSTBExploitSystemEnabled','getColor','_stbTurnOrderFaceIndex','changeIconGraphicBitmap','Scene_Battle_commandFight','EnemyBattlerType','boxWidth','isSceneBattle','AllowRandomSpeed','BattleManager_selectNextActor','updateTurnOrderSTB','jwdXw','enemy','constructor','SpriteLength','ARRAYJSON','ExploitEleRate','_letterSprite','selectAllActions','isActiveTpb','3323leYXID','onBattleStart','djJiK','JSON','containerPosition','EnemyBattlerFaceName','350QsMtSp','FaceName','VtHql','actor','Game_System_initialize','RSrwM','Game_Action_clear','yyLRS','Exploited','QWCQM','yGCjV','icon','QIiTA','max','stbExploitedStates','match','11232948wxiQgQ','reserveCommonEvent','setHue','DisplayPosition','getChildIndex','BattleSystemSTB','_actions','_stbTurnOrderFaceName','vTzDw','WFQwQ','note','VNzXz','_positionTargetX','removeActionBattlersSTB','stepForward','center','displayExploitedEffects','initMembersBattleSystemSTB','GUPAu','mainFontFace','changeSvActorGraphicBitmap','ParseStateData','_partyCommandWindow','checkTargetPositions','Enemy','currentClass','_fadeDuration','_plural','bottom','getBattleSystem','allBattleMembers','ecryW','LaRHI','_forcedBattlers','addInnerChild','updateOpacity','ARRAYEVAL','vkuxT','result','MulSm','svactor','windowRect','svBattlerName','call','toUpperCase','height','maxBattleMembers','clearTurnOrderSTBGraphics','_turnOrderContainer','1806baDodF','addLoadListener','MaxHorzSprites','Yebmp','_graphicFaceIndex','checkPosition','XtjEj','opacity','EnemyBattlerFaceIndex','tXaEM','VmRmr','AnimationID','_fadeTarget','ShowMarkerBorder','createBattlerRect','createActorCommandWindowSTB','_stbTurnOrderIconIndex','loadEnemy','BattleCore','endActionSTB','OrderDirection','JTZuO','EnemyBattlerIcon','isTpb','rMNrs','_position','performActionEndSTB','_backgroundSprite','_speed','isTurnBased','_stbNextTurnSpeed','WahVn','checkOpacity','processTurnSTB','executeDamage','applyGlobal','stbCannotBeExploited','containerWindow','8eDMGqe','_targetHomeX','5883450huIFKA','Game_Action_speed','update','_stbTurnOrderGraphicType','HxkcR','%1\x20%2\x20%3','_graphicSprite','RegExp','rZZPY','battleSys','hFKXm','_stbAutoBattle','Settings','11nGvcan','boxHeight','updateSelectionEffect','TurnOrderSTBGraphicFaceName','Speed','svActorHorzCells','ARRAYSTR','_ogWindowLayerY','PopupText','battleEnd','loadSvActor','RepositionTopForHelp','isHorz','isAutoBattle','RepositionLogWindow','processTurn','stbExploiterStates','traitObjects','_isBattleOver','Game_Battler_onBattleStart','_handlers','cancel','repositionLogWindowSTB','getNextSubject','clearNextTurnSpeedSTB','commandCancelSTB','aliveMembers','AvgpE','JTBfU','%1BgColor1','defaultPosition','item','applyGlobalBattleSystemSTB','JNITU','updateVisibility','onTurnEnd','commandCancel','stbGainInstant','vcZGV','close','HUrxF','isEnemy','_graphicIconIndex','_index','EBfIu','width','BattleManager_isTurnBased','ODwws','Game_BattlerBase_hide','initBattleSystemSTB','UtLzf','bind','ShowMarkerBg','indexOf','Scene_Battle_commandCancel','Game_BattlerBase_appear','LxOTh','Game_Actor_selectNextCommand','gradientFillRect','addState','Mute','BattleManager_endAction','friendsUnit','faceHeight','yXbNU','battlerHue','FlashColor','_positionDuration','fontFace','createSTBTurnOrderWindow','setupTextPopup','performSTBExploiter','visible','clear','clearSTBNextTurnSpeed','Scene_Battle_createAllWindows','numActions','initHomePositions','trim','floor','KvAZJ','FlashDuration','faceName','STRUCT','right','updateGraphic','description','_homeDuration','isAutoBattleStb','JyMqI','parameters','createActorCommandWindow','_containerWidth','ARRAYFUNC','ARRAYSTRUCT','Game_Battler_makeSpeed','FaceIndex','_forceAction','addChildAt','requestFauxAnimation','clearSTBExploit','Game_Battler_performActionEnd','IconSet','speed','addChild','MbJEK','getStateIdWithName','registerCommand','updateHomePosition','BcRLC','members','ExtraActions','finishActorInput','Game_Actor_makeAutoBattleActions','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','makeAutoBattleActions','createTurnOrderSTBGraphicType','CannotBeExploiter','EWbAM','sort'];_0x37b2=function(){return _0x344a73;};return _0x37b2();}const _0x5f466c=_0x52c0;(function(_0x38e5d2,_0x6f343e){const _0x4f68e9=_0x52c0,_0x870937=_0x38e5d2();while(!![]){try{const _0x59612a=parseInt(_0x4f68e9(0x196))/0x1*(-parseInt(_0x4f68e9(0x2eb))/0x2)+-parseInt(_0x4f68e9(0x2f0))/0x3*(-parseInt(_0x4f68e9(0x203))/0x4)+parseInt(_0x4f68e9(0x19c))/0x5*(-parseInt(_0x4f68e9(0x1dd))/0x6)+-parseInt(_0x4f68e9(0x153))/0x7*(-parseInt(_0x4f68e9(0x2df))/0x8)+-parseInt(_0x4f68e9(0x141))/0x9+-parseInt(_0x4f68e9(0x205))/0xa+parseInt(_0x4f68e9(0x212))/0xb*(parseInt(_0x4f68e9(0x1ac))/0xc);if(_0x59612a===_0x6f343e)break;else _0x870937['push'](_0x870937['shift']());}catch(_0x244fa5){_0x870937['push'](_0x870937['shift']());}}}(_0x37b2,0x704a8));var label=_0x5f466c(0x1b1),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5f466c(0x115)](function(_0x575e65){const _0x520115=_0x5f466c;return _0x575e65[_0x520115(0x2bc)]&&_0x575e65[_0x520115(0x268)][_0x520115(0x181)]('['+label+']');})[0x0];VisuMZ[label][_0x5f466c(0x211)]=VisuMZ[label][_0x5f466c(0x211)]||{},VisuMZ[_0x5f466c(0x170)]=function(_0x1ec473,_0x4f7cc5){const _0x1cee30=_0x5f466c;for(const _0x51114e in _0x4f7cc5){if(_0x1cee30(0x20d)!==_0x1cee30(0x20d))_0x3d7403[_0x1cee30(0x2aa)]=_0x1e6d7e[_0x1cee30(0x15f)](_0x395e84[_0x5679be]);else{if(_0x51114e[_0x1cee30(0x1ab)](/(.*):(.*)/i)){if(_0x1cee30(0x1d3)===_0x1cee30(0x241))return this[_0x1cee30(0x2cb)]===_0x5813e9&&this['initMembersBattleSystemSTB'](),this['_stbExploited'];else{const _0x2aa143=String(RegExp['$1']),_0x453b43=String(RegExp['$2'])[_0x1cee30(0x1d8)]()[_0x1cee30(0x260)]();let _0x35b8b9,_0xf2225c,_0x936370;switch(_0x453b43){case'NUM':_0x35b8b9=_0x4f7cc5[_0x51114e]!==''?Number(_0x4f7cc5[_0x51114e]):0x0;break;case _0x1cee30(0x2bf):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON['parse'](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x4e4858=>Number(_0x4e4858));break;case _0x1cee30(0x113):_0x35b8b9=_0x4f7cc5[_0x51114e]!==''?eval(_0x4f7cc5[_0x51114e]):null;break;case _0x1cee30(0x1d0):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x510df4=>eval(_0x510df4));break;case _0x1cee30(0x199):_0x35b8b9=_0x4f7cc5[_0x51114e]!==''?JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e]):'';break;case _0x1cee30(0x191):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON['parse'](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x271492=>JSON['parse'](_0x271492));break;case _0x1cee30(0x171):_0x35b8b9=_0x4f7cc5[_0x51114e]!==''?new Function(JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e])):new Function(_0x1cee30(0x2d7));break;case _0x1cee30(0x26f):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON['parse'](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x29cb07=>new Function(JSON['parse'](_0x29cb07)));break;case'STR':_0x35b8b9=_0x4f7cc5[_0x51114e]!==''?String(_0x4f7cc5[_0x51114e]):'';break;case _0x1cee30(0x218):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x2d5a24=>String(_0x2d5a24));break;case _0x1cee30(0x265):_0x936370=_0x4f7cc5[_0x51114e]!==''?JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e]):{},_0x35b8b9=VisuMZ[_0x1cee30(0x170)]({},_0x936370);break;case _0x1cee30(0x270):_0xf2225c=_0x4f7cc5[_0x51114e]!==''?JSON[_0x1cee30(0x2c2)](_0x4f7cc5[_0x51114e]):[],_0x35b8b9=_0xf2225c[_0x1cee30(0x17e)](_0x53f126=>VisuMZ[_0x1cee30(0x170)]({},JSON[_0x1cee30(0x2c2)](_0x53f126)));break;default:continue;}_0x1ec473[_0x2aa143]=_0x35b8b9;}}}}return _0x1ec473;},(_0x2fb1b5=>{const _0x4b2647=_0x5f466c,_0x34d1e4=_0x2fb1b5['name'];for(const _0xaabcbd of dependencies){if(!Imported[_0xaabcbd]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4b2647(0x304)](_0x34d1e4,_0xaabcbd)),SceneManager[_0x4b2647(0x290)]();break;}}const _0x18cc38=_0x2fb1b5[_0x4b2647(0x268)];if(_0x18cc38['match'](/\[Version[ ](.*?)\]/i)){const _0x5ce895=Number(RegExp['$1']);_0x5ce895!==VisuMZ[label][_0x4b2647(0x2ea)]&&(alert(_0x4b2647(0x284)[_0x4b2647(0x304)](_0x34d1e4,_0x5ce895)),SceneManager[_0x4b2647(0x290)]());}if(_0x18cc38[_0x4b2647(0x1ab)](/\[Tier[ ](\d+)\]/i)){const _0x213a08=Number(RegExp['$1']);_0x213a08<tier?(alert(_0x4b2647(0x2c0)[_0x4b2647(0x304)](_0x34d1e4,_0x213a08,tier)),SceneManager[_0x4b2647(0x290)]()):_0x4b2647(0x1b4)==='aMmFN'?this[_0x4b2647(0x30d)](...arguments):tier=Math[_0x4b2647(0x1a9)](_0x213a08,tier);}VisuMZ[_0x4b2647(0x170)](VisuMZ[label][_0x4b2647(0x211)],_0x2fb1b5[_0x4b2647(0x26c)]);})(pluginData),PluginManager[_0x5f466c(0x27d)](pluginData[_0x5f466c(0x151)],'StbTurnOrderActorIcon',_0x4e52cb=>{const _0x3ec0f7=_0x5f466c;VisuMZ['ConvertParams'](_0x4e52cb,_0x4e52cb);const _0x7fc297=_0x4e52cb['Actors'],_0x429e15=_0x4e52cb[_0x3ec0f7(0x147)];for(const _0x5904bd of _0x7fc297){if(_0x3ec0f7(0x123)===_0x3ec0f7(0x2b2)){const _0x20f1ca=this['bitmapWidth'](),_0x41bc28=this[_0x3ec0f7(0x133)](),_0x4f1c3e=_0x19664b[_0x3ec0f7(0x2e5)](_0x20f1ca,_0x41bc28);this[_0x3ec0f7(0x20b)][_0x3ec0f7(0x2aa)]=new _0x2ae236(_0x20f1ca,_0x41bc28);const _0x3d42fa=this[_0x3ec0f7(0x20b)][_0x3ec0f7(0x2aa)],_0xb99bb7=this[_0x3ec0f7(0x2b0)][_0x3ec0f7(0x1ab)](/\$/i),_0x3faf0c=_0xb99bb7?0x1:_0xb29331[_0x3ec0f7(0x217)],_0x40bbf6=_0xb99bb7?0x1:_0x5a3984[_0x3ec0f7(0x13a)],_0xe3c539=_0x2b4fa7['width']/_0x3faf0c,_0x1274fb=_0x1f7a28[_0x3ec0f7(0x1d9)]/_0x40bbf6,_0x3cb667=_0x15dc19[_0x3ec0f7(0x2e5)](0x1,_0x4f1c3e/_0xe3c539,_0x4f1c3e/_0x1274fb),_0x53a32e=_0xe3c539*_0x3cb667,_0x24c72f=_0x1274fb*_0x3cb667,_0x15cded=_0x599fdb[_0x3ec0f7(0x2a2)]((_0x20f1ca-_0x53a32e)/0x2),_0xfb22eb=_0xadb623['round']((_0x41bc28-_0x24c72f)/0x2);_0x3d42fa[_0x3ec0f7(0x16b)](_0x3553ce,0x0,0x0,_0xe3c539,_0x1274fb,_0x15cded,_0xfb22eb,_0x53a32e,_0x24c72f);}else{const _0x5314a1=$gameActors[_0x3ec0f7(0x19f)](_0x5904bd);if(!_0x5314a1)continue;_0x5314a1[_0x3ec0f7(0x208)]=_0x3ec0f7(0x1a7),_0x5314a1[_0x3ec0f7(0x1ed)]=_0x429e15;}}}),PluginManager['registerCommand'](pluginData['name'],'StbTurnOrderActorFace',_0x4941a3=>{const _0xf91036=_0x5f466c;VisuMZ[_0xf91036(0x170)](_0x4941a3,_0x4941a3);const _0x1c2778=_0x4941a3[_0xf91036(0x29d)],_0x23d235=_0x4941a3[_0xf91036(0x19d)],_0x4088ab=_0x4941a3[_0xf91036(0x272)];for(const _0x52b972 of _0x1c2778){if(_0xf91036(0x296)!==_0xf91036(0x296))_0xe83f39=!![];else{const _0x522006=$gameActors[_0xf91036(0x19f)](_0x52b972);if(!_0x522006)continue;_0x522006['_stbTurnOrderGraphicType']=_0xf91036(0x162),_0x522006[_0xf91036(0x1b3)]=_0x23d235,_0x522006[_0xf91036(0x184)]=_0x4088ab;}}}),PluginManager[_0x5f466c(0x27d)](pluginData[_0x5f466c(0x151)],_0x5f466c(0x2a6),_0x586ceb=>{const _0x117b3c=_0x5f466c;VisuMZ[_0x117b3c(0x170)](_0x586ceb,_0x586ceb);const _0x5b526e=_0x586ceb[_0x117b3c(0x29d)];for(const _0x275e48 of _0x5b526e){const _0x93f483=$gameActors[_0x117b3c(0x19f)](_0x275e48);if(!_0x93f483)continue;_0x93f483[_0x117b3c(0x1db)]();}}),PluginManager[_0x5f466c(0x27d)](pluginData[_0x5f466c(0x151)],'StbTurnOrderEnemyIcon',_0x1c3c4e=>{const _0x4cd9a3=_0x5f466c;VisuMZ[_0x4cd9a3(0x170)](_0x1c3c4e,_0x1c3c4e);const _0x304943=_0x1c3c4e[_0x4cd9a3(0x295)],_0x13c7f0=_0x1c3c4e[_0x4cd9a3(0x147)];for(const _0x60b9ce of _0x304943){const _0x31f1c3=$gameTroop[_0x4cd9a3(0x280)]()[_0x60b9ce];if(!_0x31f1c3)continue;_0x31f1c3[_0x4cd9a3(0x208)]=_0x4cd9a3(0x1a7),_0x31f1c3['_stbTurnOrderIconIndex']=_0x13c7f0;}}),PluginManager[_0x5f466c(0x27d)](pluginData['name'],_0x5f466c(0x2fb),_0x24be4e=>{const _0x2fcc66=_0x5f466c;VisuMZ[_0x2fcc66(0x170)](_0x24be4e,_0x24be4e);const _0x523da9=_0x24be4e['Enemies'],_0x6fe67d=_0x24be4e[_0x2fcc66(0x19d)],_0x1b4fd4=_0x24be4e[_0x2fcc66(0x272)];for(const _0x278235 of _0x523da9){if('izoUk'!=='izoUk')this[_0x2fcc66(0x1fe)]();else{const _0x3cefdf=$gameTroop[_0x2fcc66(0x280)]()[_0x278235];if(!_0x3cefdf)continue;_0x3cefdf[_0x2fcc66(0x208)]=_0x2fcc66(0x162),_0x3cefdf[_0x2fcc66(0x1b3)]=_0x6fe67d,_0x3cefdf[_0x2fcc66(0x184)]=_0x1b4fd4;}}}),PluginManager['registerCommand'](pluginData['name'],'StbTurnOrderClearEnemyGraphic',_0x1d2bdb=>{const _0x7c8943=_0x5f466c;VisuMZ[_0x7c8943(0x170)](_0x1d2bdb,_0x1d2bdb);const _0x155c27=_0x1d2bdb[_0x7c8943(0x295)];for(const _0x1f3ea4 of _0x155c27){if(_0x7c8943(0x252)===_0x7c8943(0x20f)){if(this[_0x7c8943(0x152)]())return _0x7c8943(0x144);return _0x38b6d7[_0x7c8943(0x1b1)]['BattleManager_battleSys']['call'](this);}else{const _0x51e3cd=$gameTroop[_0x7c8943(0x280)]()[_0x1f3ea4];if(!_0x51e3cd)continue;_0x51e3cd[_0x7c8943(0x1db)]();}}}),PluginManager[_0x5f466c(0x27d)](pluginData['name'],_0x5f466c(0x117),_0x269efb=>{const _0x45677c=_0x5f466c;VisuMZ[_0x45677c(0x170)](_0x269efb,_0x269efb);const _0x2e0de3=_0x269efb[_0x45677c(0x11a)];$gameSystem[_0x45677c(0x180)](_0x2e0de3);}),VisuMZ[_0x5f466c(0x1b1)]['RegExp']={'Instant':/<STB (?:INSTANT|INSTANT CAST|Instant Use)>/i,'CannotBeExploited':/<STB CANNOT BE EXPLOITED>/i,'CannotBeExploiter':/<STB CANNOT BE EXPLOITER>/i,'ExploitedStates':/<STB EXPLOITED GAIN (?:STATE|STATES):[ ](.*)>/i,'ExploiterStates':/<STB EXPLOITER GAIN (?:STATE|STATES):[ ](.*)>/i},DataManager['getStateIdWithName']=function(_0x270287){const _0x10a709=_0x5f466c;_0x270287=_0x270287[_0x10a709(0x1d8)]()['trim'](),this[_0x10a709(0x114)]=this[_0x10a709(0x114)]||{};if(this['_stateIDs'][_0x270287])return this[_0x10a709(0x114)][_0x270287];for(const _0x34c09a of $dataStates){if(!_0x34c09a)continue;this[_0x10a709(0x114)][_0x34c09a[_0x10a709(0x151)][_0x10a709(0x1d8)]()[_0x10a709(0x260)]()]=_0x34c09a['id'];}return this[_0x10a709(0x114)][_0x270287]||0x0;},ImageManager['svActorHorzCells']=ImageManager[_0x5f466c(0x217)]||0x9,ImageManager['svActorVertCells']=ImageManager[_0x5f466c(0x13a)]||0x6,SceneManager[_0x5f466c(0x189)]=function(){const _0x3b283a=_0x5f466c;return this[_0x3b283a(0x14a)]&&this[_0x3b283a(0x14a)][_0x3b283a(0x18f)]===Scene_Battle;},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x307)]=BattleManager[_0x5f466c(0x20e)],BattleManager['battleSys']=function(){const _0x23bc7e=_0x5f466c;if(this[_0x23bc7e(0x152)]())return _0x23bc7e(0x144);return VisuMZ[_0x23bc7e(0x1b1)][_0x23bc7e(0x307)]['call'](this);},BattleManager[_0x5f466c(0x152)]=function(){const _0x5ef88b=_0x5f466c;return $gameSystem[_0x5ef88b(0x1c9)]()==='STB';},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2b8)]=BattleManager[_0x5f466c(0x1f4)],BattleManager[_0x5f466c(0x1f4)]=function(){const _0x13c215=_0x5f466c;if(this[_0x13c215(0x152)]())return![];return VisuMZ['BattleSystemSTB']['BattleManager_isTpb'][_0x13c215(0x1d7)](this);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2a9)]=BattleManager['isActiveTpb'],BattleManager[_0x5f466c(0x195)]=function(){const _0x2735b7=_0x5f466c;if(this['isSTB']())return![];return VisuMZ[_0x2735b7(0x1b1)][_0x2735b7(0x2a9)]['call'](this);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x240)]=BattleManager[_0x5f466c(0x1fa)],BattleManager[_0x5f466c(0x1fa)]=function(){const _0x2c2fc9=_0x5f466c;if(this[_0x2c2fc9(0x152)]())return!![];return VisuMZ['BattleSystemSTB'][_0x2c2fc9(0x240)]['call'](this);},VisuMZ[_0x5f466c(0x1b1)]['BattleManager_startInput']=BattleManager[_0x5f466c(0x14f)],BattleManager['startInput']=function(){const _0xe0c961=_0x5f466c;VisuMZ[_0xe0c961(0x1b1)]['BattleManager_startInput'][_0xe0c961(0x1d7)](this);if(this[_0xe0c961(0x152)]()&&$gameParty['canInput']()&&!this['_surprise'])this[_0xe0c961(0x161)]();},BattleManager['startInputSTB']=function(){this['startTurn']();},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x154)]=BattleManager[_0x5f466c(0x221)],BattleManager[_0x5f466c(0x221)]=function(){const _0x1b1f1d=_0x5f466c;this['isSTB']()?this[_0x1b1f1d(0x1fe)]():VisuMZ[_0x1b1f1d(0x1b1)][_0x1b1f1d(0x154)]['call'](this);},BattleManager[_0x5f466c(0x1fe)]=function(){const _0x1e5e92=_0x5f466c,_0x4f1dc9=this[_0x1e5e92(0x2cf)];if(_0x4f1dc9[_0x1e5e92(0x2ed)]()&&_0x4f1dc9[_0x1e5e92(0x14e)]()){const _0x40f910=_0x4f1dc9[_0x1e5e92(0x17b)]();if(!_0x40f910)_0x1e5e92(0x1d1)===_0x1e5e92(0x1d1)?VisuMZ[_0x1e5e92(0x1b1)][_0x1e5e92(0x154)]['call'](this):!this[_0x1e5e92(0x305)][_0x1e5e92(0x181)](this[_0x1e5e92(0x2cf)])&&this[_0x1e5e92(0x305)][_0x1e5e92(0x2dd)](this[_0x1e5e92(0x2cf)]);else _0x40f910[_0x1e5e92(0x273)]?_0x1e5e92(0x198)==='djJiK'?VisuMZ[_0x1e5e92(0x1b1)][_0x1e5e92(0x154)][_0x1e5e92(0x1d7)](this):_0x48060e[_0x1e5e92(0x2aa)]=_0x2d4a70[_0x1e5e92(0x15f)](_0x4f00d9[_0x39ce57]):_0x1e5e92(0x23a)!==_0x1e5e92(0x157)?(this[_0x1e5e92(0x118)]=_0x4f1dc9,this['startActorInput']()):(_0x2bb5d3[_0x1e5e92(0x136)][_0x1e5e92(0x207)][_0x1e5e92(0x1d7)](this),this[_0x1e5e92(0x27e)](),this[_0x1e5e92(0x12a)](),this[_0x1e5e92(0x2e6)](),this[_0x1e5e92(0x126)](),this[_0x1e5e92(0x234)]());}else VisuMZ[_0x1e5e92(0x1b1)][_0x1e5e92(0x154)][_0x1e5e92(0x1d7)](this);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2dc)]=BattleManager[_0x5f466c(0x282)],BattleManager[_0x5f466c(0x282)]=function(){const _0x29d4af=_0x5f466c;if(this[_0x29d4af(0x152)]()){if(_0x29d4af(0x15a)!=='JPILo')return this[_0x29d4af(0x1fb)]===_0x140ca5&&this[_0x29d4af(0x1bd)](),this[_0x29d4af(0x1fb)];else VisuMZ['BattleSystemSTB'][_0x29d4af(0x154)][_0x29d4af(0x1d7)](this);}else VisuMZ[_0x29d4af(0x1b1)]['BattleManager_finishActorInput'][_0x29d4af(0x1d7)](this);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x18b)]=BattleManager[_0x5f466c(0x140)],BattleManager[_0x5f466c(0x140)]=function(){const _0x3a85ad=_0x5f466c;this[_0x3a85ad(0x152)]()?this[_0x3a85ad(0x105)]():VisuMZ[_0x3a85ad(0x1b1)][_0x3a85ad(0x18b)]['call'](this);},BattleManager['selectNextActorSTB']=function(){const _0x23b4f1=_0x5f466c;this[_0x23b4f1(0x118)]=null,this['_inputting']=![];},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x24f)]=BattleManager[_0x5f466c(0x2e7)],BattleManager[_0x5f466c(0x2e7)]=function(){const _0x458e79=_0x5f466c;VisuMZ[_0x458e79(0x1b1)]['BattleManager_endAction'][_0x458e79(0x1d7)](this),this[_0x458e79(0x1f0)]();},BattleManager['endActionSTB']=function(){const _0x23e8b7=_0x5f466c;if(!this['isSTB']())return;this[_0x23e8b7(0x1b9)]();this[_0x23e8b7(0x1cd)]['length']>0x0&&(_0x23e8b7(0x13c)!==_0x23e8b7(0x10f)?(this[_0x23e8b7(0x2cf)]&&(!this[_0x23e8b7(0x305)][_0x23e8b7(0x181)](this[_0x23e8b7(0x2cf)])&&this[_0x23e8b7(0x305)][_0x23e8b7(0x2dd)](this[_0x23e8b7(0x2cf)])),this['_subject']=this[_0x23e8b7(0x229)]()):this[_0x23e8b7(0x106)](!![]));;},BattleManager[_0x5f466c(0x182)]=function(){const _0x28fd68=_0x5f466c;return VisuMZ[_0x28fd68(0x1b1)][_0x28fd68(0x211)][_0x28fd68(0x2a5)]['EnableExploit'];},BattleManager[_0x5f466c(0x122)]=function(){const _0x250e91=_0x5f466c,_0x57ae4a=$gameParty[_0x250e91(0x22c)]()[_0x250e91(0x115)](_0x39416e=>_0x39416e[_0x250e91(0x158)]()),_0x378975=_0x57ae4a[_0x250e91(0x115)](_0x3948eb=>_0x3948eb[_0x250e91(0x2e0)]());return _0x57ae4a['length']===_0x378975[_0x250e91(0x2f7)];},BattleManager[_0x5f466c(0x29c)]=function(){const _0x563758=_0x5f466c,_0x2614ae=$gameTroop[_0x563758(0x22c)]()[_0x563758(0x115)](_0x5b495b=>_0x5b495b['isAppeared']()),_0x3a69bc=_0x2614ae[_0x563758(0x115)](_0x13acda=>_0x13acda[_0x563758(0x2e0)]());return _0x2614ae['length']===_0x3a69bc[_0x563758(0x2f7)];},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2a8)]=BattleManager[_0x5f466c(0x292)],BattleManager[_0x5f466c(0x292)]=function(){const _0x349557=_0x5f466c;VisuMZ['BattleSystemSTB'][_0x349557(0x2a8)][_0x349557(0x1d7)](this),this[_0x349557(0x152)]()&&(this[_0x349557(0x1b9)](),this[_0x349557(0x18c)](),this['clearNextTurnSpeedSTB']());},BattleManager[_0x5f466c(0x1b9)]=function(){const _0x5221b0=_0x5f466c;if(!this[_0x5221b0(0x152)]())return;this[_0x5221b0(0x305)]=this['_actionBattlers']||[],this[_0x5221b0(0x305)]=this[_0x5221b0(0x305)][_0x5221b0(0x115)](_0x504c52=>_0x504c52&&_0x504c52[_0x5221b0(0x158)]()&&_0x504c52[_0x5221b0(0x12f)]()),this[_0x5221b0(0x18c)]();},BattleManager[_0x5f466c(0x18c)]=function(_0x3c7340){const _0x628e22=_0x5f466c;if(!this[_0x628e22(0x152)]())return;const _0x3ecc04=SceneManager[_0x628e22(0x14a)][_0x628e22(0x2c6)];if(!_0x3ecc04)return;_0x3ecc04[_0x628e22(0x2c8)](_0x3c7340);},BattleManager[_0x5f466c(0x22a)]=function(){const _0x41e6c8=_0x5f466c;for(const _0x4dfc6f of this[_0x41e6c8(0x1ca)]()){if(!_0x4dfc6f)continue;_0x4dfc6f['setSTBNextTurnSpeed'](0x0);}},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x1a0)]=Game_System['prototype'][_0x5f466c(0x30d)],Game_System[_0x5f466c(0x136)][_0x5f466c(0x30d)]=function(){const _0x35a5d9=_0x5f466c;VisuMZ[_0x35a5d9(0x1b1)]['Game_System_initialize'][_0x35a5d9(0x1d7)](this),this[_0x35a5d9(0x243)]();},Game_System[_0x5f466c(0x136)][_0x5f466c(0x243)]=function(){const _0x143bfe=_0x5f466c;this[_0x143bfe(0x28d)]=!![];},Game_System[_0x5f466c(0x136)][_0x5f466c(0x2ec)]=function(){const _0x52e361=_0x5f466c;return this[_0x52e361(0x28d)]===undefined&&this['initBattleSystemSTB'](),this['_stbTurnOrderVisible'];},Game_System[_0x5f466c(0x136)][_0x5f466c(0x180)]=function(_0x3a3b1a){const _0x18305c=_0x5f466c;this[_0x18305c(0x28d)]===undefined&&this[_0x18305c(0x243)](),this['_stbTurnOrderVisible']=_0x3a3b1a;},VisuMZ['BattleSystemSTB'][_0x5f466c(0x206)]=Game_Action[_0x5f466c(0x136)][_0x5f466c(0x279)],Game_Action[_0x5f466c(0x136)][_0x5f466c(0x279)]=function(){const _0x780c96=_0x5f466c;if(BattleManager[_0x780c96(0x152)]()){if(_0x780c96(0x233)===_0x780c96(0x244)){const _0x5ab24d=_0x28a10[_0x780c96(0x21a)],_0x55b3ba={'textColor':_0x2b13a6[_0x780c96(0x183)](_0x34ba01[_0x780c96(0x2d0)]),'flashColor':_0x3ca3a3['FlashColor'],'flashDuration':_0x4b1892[_0x780c96(0x263)]};this[_0x780c96(0x258)](_0x5ab24d,_0x55b3ba);}else return 0x0;}else return _0x780c96(0x1a6)!==_0x780c96(0x1a6)?_0x780c96(0x162):VisuMZ[_0x780c96(0x1b1)][_0x780c96(0x206)]['call'](this);},VisuMZ['BattleSystemSTB'][_0x5f466c(0x2d9)]=Game_Action[_0x5f466c(0x136)][_0x5f466c(0x200)],Game_Action[_0x5f466c(0x136)][_0x5f466c(0x200)]=function(){const _0x4c75ed=_0x5f466c;VisuMZ[_0x4c75ed(0x1b1)][_0x4c75ed(0x2d9)][_0x4c75ed(0x1d7)](this),this['applyGlobalBattleSystemSTB']();},Game_Action[_0x5f466c(0x136)][_0x5f466c(0x232)]=function(){const _0x599109=_0x5f466c;if(!SceneManager[_0x599109(0x189)]())return;if(!BattleManager[_0x599109(0x152)]())return;const _0x47f402=this[_0x599109(0x231)](),_0x3d730f=VisuMZ[_0x599109(0x1b1)][_0x599109(0x20c)],_0x2c2d3f=VisuMZ[_0x599109(0x1b1)][_0x599109(0x211)]['Speed'];_0x47f402&&_0x47f402[_0x599109(0x1b6)][_0x599109(0x1ab)](_0x3d730f['Instant'])&&this['subject']()[_0x599109(0x237)](0x1);const _0x275182=_0x2c2d3f['NextTurnSavedSpeedJS'][_0x599109(0x1d7)](this);this[_0x599109(0x2e3)]()[_0x599109(0x309)](_0x275182);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x1a2)]=Game_Action[_0x5f466c(0x136)][_0x5f466c(0x25b)],Game_Action[_0x5f466c(0x136)]['clear']=function(){const _0x180118=_0x5f466c;VisuMZ[_0x180118(0x1b1)][_0x180118(0x1a2)][_0x180118(0x1d7)](this),this[_0x180118(0x301)]();},Game_Action['prototype'][_0x5f466c(0x301)]=function(){const _0x49efc4=_0x5f466c;this[_0x49efc4(0x156)]=![],this[_0x49efc4(0x210)]=![];},Game_Action[_0x5f466c(0x136)]['hasSTBExploited']=function(){const _0x13b486=_0x5f466c;return this[_0x13b486(0x156)]===undefined&&this[_0x13b486(0x301)](),this['_stbExploitAdvantageFlag'];},Game_Action[_0x5f466c(0x136)]['setSTBExploitedFlag']=function(_0x34ac16){const _0x13ba54=_0x5f466c;this[_0x13ba54(0x156)]===undefined&&this[_0x13ba54(0x301)](),this['_stbExploitAdvantageFlag']=_0x34ac16;},VisuMZ['BattleSystemSTB']['Game_Action_executeDamage']=Game_Action['prototype'][_0x5f466c(0x1ff)],Game_Action[_0x5f466c(0x136)]['executeDamage']=function(_0x3f36d8,_0x108961){const _0x17a9c8=_0x5f466c;VisuMZ[_0x17a9c8(0x1b1)][_0x17a9c8(0x30b)]['call'](this,_0x3f36d8,_0x108961),this[_0x17a9c8(0x2f8)](_0x3f36d8);},Game_Action[_0x5f466c(0x136)][_0x5f466c(0x2f8)]=function(_0xb82aa5){const _0x2444da=_0x5f466c;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x2444da(0x152)]())return;if(!BattleManager[_0x2444da(0x182)]())return;if(_0xb82aa5['friendsUnit']()===this['subject']()[_0x2444da(0x250)]())return;const _0x5713d1=VisuMZ[_0x2444da(0x1b1)][_0x2444da(0x211)]['Exploit'],_0x4b36d0=_0xb82aa5[_0x2444da(0x1d2)]();if(!_0x5713d1['ForcedActions']&&this[_0x2444da(0x175)])return;_0x5713d1[_0x2444da(0x2a4)]&&_0x4b36d0[_0x2444da(0x2b7)]&&(_0x2444da(0x27b)!==_0x2444da(0x27b)?this[_0x2444da(0x2c5)]():(this[_0x2444da(0x2e3)]()[_0x2444da(0x259)](_0xb82aa5,this),_0xb82aa5[_0x2444da(0x17f)](this[_0x2444da(0x2e3)](),this)));if(_0x5713d1['ExploitEleWeakness']){const _0x4430db=this[_0x2444da(0x10a)](_0xb82aa5);_0x4430db>=_0x5713d1[_0x2444da(0x192)]&&(this[_0x2444da(0x2e3)]()[_0x2444da(0x259)](_0xb82aa5,this),_0xb82aa5['becomeSTBExploited'](this['subject'](),this));}},VisuMZ[_0x5f466c(0x1b1)]['Game_BattlerBase_initMembers']=Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x134)],Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x134)]=function(){const _0x20df33=_0x5f466c;VisuMZ[_0x20df33(0x1b1)][_0x20df33(0x11b)][_0x20df33(0x1d7)](this),this[_0x20df33(0x1bd)]();},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x1bd)]=function(){const _0x586c55=_0x5f466c;this[_0x586c55(0x25c)](),this[_0x586c55(0x276)]();},Game_BattlerBase['prototype'][_0x5f466c(0x25c)]=function(){this['_stbNextTurnSpeed']=0x0;},Game_BattlerBase['prototype']['getSTBNextTurnSpeed']=function(){const _0x5071d6=_0x5f466c;if(this[_0x5071d6(0x1fb)]===undefined){if(_0x5071d6(0x119)===_0x5071d6(0x119))this[_0x5071d6(0x1bd)]();else{const _0x1a2117=_0x33a889[_0x5071d6(0x22c)]()['filter'](_0x54baf1=>_0x54baf1[_0x5071d6(0x158)]()),_0x124b2a=_0x1a2117['filter'](_0x269c82=>_0x269c82[_0x5071d6(0x2e0)]());return _0x1a2117[_0x5071d6(0x2f7)]===_0x124b2a[_0x5071d6(0x2f7)];}}return this['_stbNextTurnSpeed'];},Game_BattlerBase['prototype'][_0x5f466c(0x16f)]=function(_0x330875){const _0x428ab2=_0x5f466c;this[_0x428ab2(0x1fb)]===undefined&&this[_0x428ab2(0x1bd)](),this['_stbNextTurnSpeed']=_0x330875;},Game_BattlerBase[_0x5f466c(0x136)]['addSTBNextTurnSpeed']=function(_0x5ab100){const _0x4048ef=_0x5f466c;this[_0x4048ef(0x1fb)]===undefined&&this[_0x4048ef(0x1bd)](),_0x5ab100+=this[_0x4048ef(0x135)](),this['setSTBNextTurnSpeed'](_0x5ab100);},Game_BattlerBase['prototype'][_0x5f466c(0x276)]=function(){this['_stbExploited']=![];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x2e0)]=function(){const _0x2316c7=_0x5f466c;return this['_stbExploited']===undefined&&this[_0x2316c7(0x1bd)](),this[_0x2316c7(0x2cb)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x106)]=function(_0x12c25c){const _0x4056b1=_0x5f466c;this['_stbExploited']===undefined&&this[_0x4056b1(0x1bd)](),this[_0x4056b1(0x2cb)]=_0x12c25c;},Game_BattlerBase[_0x5f466c(0x136)]['stbCannotBeExploited']=function(){const _0x56dac3=_0x5f466c,_0x2027e8=VisuMZ[_0x56dac3(0x1b1)][_0x56dac3(0x20c)][_0x56dac3(0x2ff)];return this[_0x56dac3(0x223)]()['some'](_0x10b94e=>_0x10b94e[_0x56dac3(0x1b6)]['match'](_0x2027e8));},Game_BattlerBase[_0x5f466c(0x136)]['stbCannotBeExploiter']=function(){const _0x403427=_0x5f466c,_0x34f2f2=VisuMZ[_0x403427(0x1b1)][_0x403427(0x20c)][_0x403427(0x287)];return this[_0x403427(0x223)]()[_0x403427(0x17a)](_0x110583=>_0x110583['note'][_0x403427(0x1ab)](_0x34f2f2));},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x1db)]=function(){const _0x26feef=_0x5f466c;delete this[_0x26feef(0x208)],delete this[_0x26feef(0x1b3)],delete this[_0x26feef(0x184)],delete this['_stbTurnOrderIconIndex'];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x2f6)]=function(){const _0x22596f=_0x5f466c;return this[_0x22596f(0x208)]===undefined&&(_0x22596f(0x2b6)===_0x22596f(0x2b6)?this['_stbTurnOrderGraphicType']=this[_0x22596f(0x286)]():(_0x3cb429[_0x22596f(0x1b1)][_0x22596f(0x303)][_0x22596f(0x1d7)](this),_0x4fcb40[_0x22596f(0x152)]()&&this[_0x22596f(0x1ec)]())),this[_0x22596f(0x208)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x286)]=function(){const _0x160ef9=_0x5f466c;return Window_STB_TurnOrder[_0x160ef9(0x211)]['EnemyBattlerType'];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x215)]=function(){const _0x4d9fa2=_0x5f466c;return this[_0x4d9fa2(0x1b3)]===undefined&&(_0x4d9fa2(0x2f4)!==_0x4d9fa2(0x2f4)?(this[_0x4d9fa2(0x2e3)]()[_0x4d9fa2(0x259)](_0x4f424a,this),_0x2685cd[_0x4d9fa2(0x17f)](this['subject'](),this)):this[_0x4d9fa2(0x1b3)]=this[_0x4d9fa2(0x299)]()),this[_0x4d9fa2(0x1b3)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x299)]=function(){const _0x24ba3c=_0x5f466c;return Window_STB_TurnOrder[_0x24ba3c(0x211)][_0x24ba3c(0x19b)];},Game_BattlerBase['prototype']['TurnOrderSTBGraphicFaceIndex']=function(){const _0x1e9c07=_0x5f466c;return this[_0x1e9c07(0x184)]===undefined&&(this[_0x1e9c07(0x184)]=this['createTurnOrderSTBGraphicFaceIndex']()),this[_0x1e9c07(0x184)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x10c)]=function(){const _0x360a6e=_0x5f466c;return Window_STB_TurnOrder[_0x360a6e(0x211)][_0x360a6e(0x1e5)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x2e2)]=function(){const _0x107638=_0x5f466c;return this[_0x107638(0x1ed)]===undefined&&(this[_0x107638(0x1ed)]=this[_0x107638(0x2fc)]()),this[_0x107638(0x1ed)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x2fc)]=function(){const _0xbb0dfa=_0x5f466c;return Window_STB_TurnOrder[_0xbb0dfa(0x211)][_0xbb0dfa(0x1f3)];},Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x2fe)]=function(_0x5b6c75){const _0x4e2207=_0x5f466c;this[_0x4e2207(0x1ed)]=_0x5b6c75;},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x242)]=Game_BattlerBase[_0x5f466c(0x136)]['hide'],Game_BattlerBase['prototype'][_0x5f466c(0x164)]=function(){const _0x39b039=_0x5f466c;VisuMZ[_0x39b039(0x1b1)][_0x39b039(0x242)][_0x39b039(0x1d7)](this),BattleManager[_0x39b039(0x1b9)]();},VisuMZ[_0x5f466c(0x1b1)]['Game_BattlerBase_appear']=Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x173)],Game_BattlerBase[_0x5f466c(0x136)][_0x5f466c(0x173)]=function(){const _0x405004=_0x5f466c;VisuMZ[_0x405004(0x1b1)][_0x405004(0x249)][_0x405004(0x1d7)](this),BattleManager[_0x405004(0x1b9)]();},VisuMZ['BattleSystemSTB'][_0x5f466c(0x2bb)]=Game_Battler['prototype']['performCollapse'],Game_Battler[_0x5f466c(0x136)]['performCollapse']=function(){const _0x42f688=_0x5f466c;VisuMZ[_0x42f688(0x1b1)][_0x42f688(0x2bb)][_0x42f688(0x1d7)](this),BattleManager[_0x42f688(0x1b9)]();},VisuMZ['BattleSystemSTB'][_0x5f466c(0x225)]=Game_Battler['prototype'][_0x5f466c(0x197)],Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x197)]=function(_0x53b5b6){const _0x70d6b9=_0x5f466c;VisuMZ[_0x70d6b9(0x1b1)][_0x70d6b9(0x225)][_0x70d6b9(0x1d7)](this,_0x53b5b6),this[_0x70d6b9(0x125)](_0x53b5b6);},Game_Battler[_0x5f466c(0x136)]['onBattleStartSTB']=function(_0x266dc8){const _0x21a398=_0x5f466c;if(!BattleManager[_0x21a398(0x152)]())return;this['clearSTBExploit']();const _0x53ee49=new Game_Action(this);this[_0x21a398(0x16f)](0x0);},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2f1)]=Game_Battler['prototype']['onTurnEnd'],Game_Battler['prototype'][_0x5f466c(0x235)]=function(){const _0x1e0053=_0x5f466c;VisuMZ['BattleSystemSTB'][_0x1e0053(0x2f1)]['call'](this),BattleManager['isSTB']()&&VisuMZ[_0x1e0053(0x1b1)][_0x1e0053(0x211)]['Exploit'][_0x1e0053(0x146)]&&this[_0x1e0053(0x276)]();},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x277)]=Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x298)],Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x298)]=function(){const _0x59cf0d=_0x5f466c;VisuMZ[_0x59cf0d(0x1b1)]['Game_Battler_performActionEnd'][_0x59cf0d(0x1d7)](this),BattleManager[_0x59cf0d(0x152)]()&&this[_0x59cf0d(0x1f7)]();},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x1f7)]=function(){const _0x23628b=_0x5f466c;if(this[_0x23628b(0x25e)]()>0x0&&this===BattleManager[_0x23628b(0x2cf)]){if(_0x23628b(0x2c1)!=='KDawU')this[_0x23628b(0x152)]()?_0x2ce234[_0x23628b(0x1b1)]['BattleManager_processTurn'][_0x23628b(0x1d7)](this):_0x5de801[_0x23628b(0x1b1)]['BattleManager_finishActorInput']['call'](this);else{const _0x367cc3=BattleManager[_0x23628b(0x1cd)];if(_0x367cc3[_0x23628b(0x2f7)]>0x0&&_0x367cc3[0x0]!==this)return;const _0x4a62bd=this[_0x23628b(0x2d5)]();if(_0x4a62bd)_0x4a62bd[_0x23628b(0x1ba)]();}}},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x300)]=function(){const _0x2beaca=_0x5f466c;return VisuMZ[_0x2beaca(0x1ef)][_0x2beaca(0x211)][_0x2beaca(0x142)][_0x2beaca(0x18a)];},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x271)]=Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x11d)],Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x11d)]=function(){const _0x583644=_0x5f466c;BattleManager[_0x583644(0x152)]()?_0x583644(0x12d)==='DMThk'?this['makeSTBSpeed']():(_0x39429f[_0x583644(0x1b1)][_0x583644(0x249)][_0x583644(0x1d7)](this),_0x997678[_0x583644(0x1b9)]()):VisuMZ['BattleSystemSTB'][_0x583644(0x271)][_0x583644(0x1d7)](this);},Game_Battler['prototype']['makeSTBSpeed']=function(){const _0x17c30d=_0x5f466c;this[_0x17c30d(0x1f9)]=VisuMZ[_0x17c30d(0x1b1)][_0x17c30d(0x211)][_0x17c30d(0x216)][_0x17c30d(0x148)][_0x17c30d(0x1d7)](this);},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x1aa)]=function(){const _0x5f1f68=_0x5f466c,_0x24acd4=this[_0x5f1f68(0x2ed)]()?this[_0x5f1f68(0x1c5)]()['note']:this[_0x5f1f68(0x18e)]()[_0x5f1f68(0x1b6)];if(_0x24acd4[_0x5f1f68(0x1ab)](VisuMZ[_0x5f1f68(0x1b1)]['RegExp']['ExploitedStates'])){if('NMSIP'===_0x5f1f68(0x128)){const _0x10188a=_0x565941[_0x5f1f68(0x305)]['indexOf'](_0x522e8b)+0x1;return _0x10188a;}else return VisuMZ[_0x5f1f68(0x1b1)][_0x5f1f68(0x1c1)](RegExp['$1']);}return VisuMZ['BattleSystemSTB']['Settings'][_0x5f1f68(0x1a4)][_0x5f1f68(0x2f3)]||[];},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x222)]=function(){const _0x315b70=_0x5f466c,_0x244e05=this[_0x315b70(0x2ed)]()?this[_0x315b70(0x1c5)]()['note']:this[_0x315b70(0x18e)]()[_0x315b70(0x1b6)];if(_0x244e05[_0x315b70(0x1ab)](VisuMZ['BattleSystemSTB'][_0x315b70(0x20c)]['ExploiterStates']))return VisuMZ[_0x315b70(0x1b1)]['ParseStateData'](RegExp['$1']);return VisuMZ[_0x315b70(0x1b1)][_0x315b70(0x211)][_0x315b70(0x14b)][_0x315b70(0x2f3)]||[];},VisuMZ['BattleSystemSTB'][_0x5f466c(0x1c1)]=function(_0x3820f3){const _0x2db45f=_0x5f466c,_0x13bfba=_0x3820f3[_0x2db45f(0x166)](','),_0xb93249=[];for(let _0x2e25a7 of _0x13bfba){if(_0x2db45f(0x1e7)!==_0x2db45f(0x1e7)){const _0x4037e4=this['bitmapWidth'](),_0xfbbfae=this[_0x2db45f(0x133)]();_0x3ac07f[_0x2db45f(0x2aa)]=new _0x59f2c4(_0x4037e4,_0xfbbfae);const _0x1d1bfe=_0x2dff46[_0x2db45f(0x183)](_0x290277[_0x2db45f(0x22f)[_0x2db45f(0x304)](_0x26d795)]),_0x12b4a5=_0x444b49['getColor'](_0x4f8e7b[_0x2db45f(0x293)['format'](_0x47b60c)]);_0x126424[_0x2db45f(0x2aa)]['gradientFillRect'](0x0,0x0,_0x4037e4,_0xfbbfae,_0x1d1bfe,_0x12b4a5,!![]);}else{_0x2e25a7=(String(_0x2e25a7)||'')[_0x2db45f(0x260)]();const _0x109838=/^\d+$/[_0x2db45f(0x28e)](_0x2e25a7);_0x109838?_0xb93249[_0x2db45f(0x163)](Number(_0x2e25a7)):_0xb93249[_0x2db45f(0x163)](DataManager[_0x2db45f(0x27c)](_0x2e25a7));}}return _0xb93249;},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x17f)]=function(_0x3e2b89,_0x3e6ab6){const _0x5643f7=_0x5f466c;if(!BattleManager['isSTB']())return;if(!BattleManager[_0x5643f7(0x182)]())return;if(this[_0x5643f7(0x2e0)]())return;const _0x10dce0=VisuMZ[_0x5643f7(0x1b1)][_0x5643f7(0x211)]['Exploited'];!_0x10dce0['UnlimitedExploits']&&this[_0x5643f7(0x106)](!![]);if(this[_0x5643f7(0x201)]())return;if(this['hp']<=0x0)return;this[_0x5643f7(0x1bc)](_0x10dce0);if(this['hp']>0x0||!this[_0x5643f7(0x112)]())for(const _0x3cdcea of this['stbExploitedStates']()){if(_0x5643f7(0x18d)===_0x5643f7(0x18d)){if(!$dataStates[_0x3cdcea])continue;this[_0x5643f7(0x24d)](_0x3cdcea);}else{if(this[_0x5643f7(0x25e)]()>0x0&&this===_0x5969ff[_0x5643f7(0x2cf)]){const _0x5224dc=_0x439182[_0x5643f7(0x1cd)];if(_0x5224dc[_0x5643f7(0x2f7)]>0x0&&_0x5224dc[0x0]!==this)return;const _0x5f53a7=this[_0x5643f7(0x2d5)]();if(_0x5f53a7)_0x5f53a7[_0x5643f7(0x1ba)]();}}}_0x10dce0[_0x5643f7(0x17d)]&&_0x10dce0[_0x5643f7(0x17d)][_0x5643f7(0x1d7)](this,_0x3e2b89,_0x3e6ab6);if(this['isActor']()&&BattleManager[_0x5643f7(0x122)]()){if('BcRLC'===_0x5643f7(0x27f)){const _0x1af412=_0x10dce0['vsActorsFullExploit'];_0x1af412>0x0&&$dataCommonEvents[_0x1af412]&&(_0x5643f7(0x1a8)!==_0x5643f7(0x1a8)?(this['_graphicEnemy']=_0x2ab57a[_0x5643f7(0x116)](),_0x3fd3a2=_0x20d4e1[_0x5643f7(0x2fd)](this[_0x5643f7(0x15b)]),_0xd9dc70[_0x5643f7(0x1de)](this[_0x5643f7(0x2f9)][_0x5643f7(0x245)](this,_0x312e9b))):$gameTemp[_0x5643f7(0x1ad)](_0x1af412));}else{_0x2e83a0=(_0x3e89b9(_0x40ef6f)||'')['trim']();const _0x5d7c61=/^\d+$/['test'](_0x567dcb);_0x5d7c61?_0x5b1ca7[_0x5643f7(0x163)](_0x463024(_0x5a634b)):_0x3019b0[_0x5643f7(0x163)](_0xd75472[_0x5643f7(0x27c)](_0x1e32d3));}}else{if(this[_0x5643f7(0x23b)]()&&BattleManager[_0x5643f7(0x29c)]()){const _0x195183=_0x10dce0['vsEnemiesFullExploit'];_0x195183>0x0&&$dataCommonEvents[_0x195183]&&$gameTemp['reserveCommonEvent'](_0x195183);}}},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x259)]=function(_0x2093b4,_0x3ced4b){const _0x23a04a=_0x5f466c;if(!BattleManager[_0x23a04a(0x152)]())return;if(!BattleManager[_0x23a04a(0x182)]())return;if(_0x3ced4b[_0x23a04a(0x306)]())return;if(_0x2093b4[_0x23a04a(0x2e0)]())return;const _0x36e049=VisuMZ[_0x23a04a(0x1b1)]['Settings']['Exploiter'];!_0x36e049[_0x23a04a(0x107)]&&_0x3ced4b[_0x23a04a(0x11f)](!![]);if(this[_0x23a04a(0x172)]())return;this[_0x23a04a(0x1bc)](_0x36e049);if(_0x36e049[_0x23a04a(0x281)]>0x0){if(_0x23a04a(0x1cb)===_0x23a04a(0x1cb))this[_0x23a04a(0x237)](_0x36e049[_0x23a04a(0x281)]);else{if(!this['isHorz']())return;const _0x341638=_0x33d7f1[_0x23a04a(0x1b1)]['Settings'][_0x23a04a(0x108)];if(!_0x341638[_0x23a04a(0x2bd)])return;const _0x101558=_0x6a8096[_0x23a04a(0x280)]()['filter'](_0xb1fd3a=>_0xb1fd3a&&_0xb1fd3a['isAlive']()&&_0xb1fd3a[_0x23a04a(0x158)]())['length'],_0x5a20e9=_0x49fc89[_0x23a04a(0x280)]()[_0x23a04a(0x115)](_0x355f95=>_0x355f95&&_0x355f95['isAlive']()&&_0x355f95[_0x23a04a(0x158)]())[_0x23a04a(0x2f7)],_0x576d42=this[_0x23a04a(0x1eb)](_0x101558,_0x5a20e9);this['_targetHomeX']=_0x576d42['x'],this[_0x23a04a(0x2f5)]=_0x576d42['y'],(this['_targetHomeX']!==this['_homeX']||this[_0x23a04a(0x2f5)]!==this[_0x23a04a(0x2cc)])&&(this[_0x23a04a(0x269)]=_0x341638['UpdateFrames']);}}for(const _0x17e616 of this[_0x23a04a(0x222)]()){if(!$dataStates[_0x17e616])continue;this[_0x23a04a(0x24d)](_0x17e616);}_0x36e049[_0x23a04a(0x17d)]&&_0x36e049[_0x23a04a(0x17d)][_0x23a04a(0x1d7)](this,_0x2093b4,_0x3ced4b);},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x1bc)]=function(_0x6b9c6){const _0x1dd791=_0x5f466c;if(!_0x6b9c6)return;if(_0x6b9c6[_0x1dd791(0x1e8)]){if('FZSMT'!==_0x1dd791(0x30e)){const _0x5a7ec9=_0x6b9c6[_0x1dd791(0x1e8)],_0x26a3b1=_0x6b9c6[_0x1dd791(0x177)],_0x5950e9=_0x6b9c6[_0x1dd791(0x24e)];$gameTemp[_0x1dd791(0x275)]([this],_0x5a7ec9,_0x26a3b1,_0x5950e9);}else return this['processUpdateGraphic']();}if(this[_0x1dd791(0x2d5)]()&&_0x6b9c6[_0x1dd791(0x21a)][_0x1dd791(0x2f7)]>0x0){if(_0x1dd791(0x308)!==_0x1dd791(0x24a)){const _0xc49ad7=_0x6b9c6[_0x1dd791(0x21a)],_0x5576a8={'textColor':ColorManager[_0x1dd791(0x183)](_0x6b9c6[_0x1dd791(0x2d0)]),'flashColor':_0x6b9c6[_0x1dd791(0x254)],'flashDuration':_0x6b9c6[_0x1dd791(0x263)]};this['setupTextPopup'](_0xc49ad7,_0x5576a8);}else return _0x500416[_0x1dd791(0x1b1)][_0x1dd791(0x1c1)](_0x596806['$1']);}},Game_Battler[_0x5f466c(0x136)][_0x5f466c(0x237)]=function(_0x2ff976){const _0x5a9ecb=_0x5f466c;if(!this[_0x5a9ecb(0x2ad)]())return;this['_actions']=this[_0x5a9ecb(0x1b2)]||[];const _0x5a7174=this[_0x5a9ecb(0x1b2)][_0x5a9ecb(0x2f7)]<=0x0;for(let _0x4fea01=0x0;_0x4fea01<_0x2ff976;_0x4fea01++){this[_0x5a9ecb(0x1b2)][_0x5a9ecb(0x163)](new Game_Action(this));}this[_0x5a9ecb(0x2ed)]()&&this[_0x5a9ecb(0x21f)]()&&this[_0x5a9ecb(0x285)]();if(!this[_0x5a9ecb(0x23b)]())return;const _0x257343=this[_0x5a9ecb(0x18e)]()['actions'][_0x5a9ecb(0x115)](_0xc7ac04=>this[_0x5a9ecb(0x2be)](_0xc7ac04));if(_0x257343[_0x5a9ecb(0x2f7)]>0x0){let _0x335344;if(!_0x5a7174){if(_0x5a9ecb(0x1f5)===_0x5a9ecb(0x16a))return _0x3c86fc['getBattleSystem']()===_0x5a9ecb(0x144);else _0x335344=this[_0x5a9ecb(0x1b2)]['shift']();}this[_0x5a9ecb(0x194)](_0x257343),!_0x5a7174&&this[_0x5a9ecb(0x1b2)][_0x5a9ecb(0x2dd)](_0x335344);}},VisuMZ['BattleSystemSTB'][_0x5f466c(0x24b)]=Game_Actor['prototype'][_0x5f466c(0x2d2)],Game_Actor[_0x5f466c(0x136)][_0x5f466c(0x2d2)]=function(){const _0x531e95=_0x5f466c;if(BattleManager['isSTB']()){if(this[_0x531e95(0x2d5)]())this[_0x531e95(0x2d5)]()['stepForward']();return![];}return VisuMZ[_0x531e95(0x1b1)]['Game_Actor_selectNextCommand']['call'](this);},Game_Actor[_0x5f466c(0x136)][_0x5f466c(0x286)]=function(){const _0x57d4bb=_0x5f466c,_0x5be6ad=this[_0x57d4bb(0x19f)]()[_0x57d4bb(0x1b6)];if(_0x5be6ad['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x57d4bb(0x1cc)!==_0x57d4bb(0x1f2))return'face';else _0x21dec7[_0x57d4bb(0x152)]()?this['commandCancelSTB']():_0x56f710[_0x57d4bb(0x1b1)][_0x57d4bb(0x248)][_0x57d4bb(0x1d7)](this);}else{if(_0x5be6ad[_0x57d4bb(0x1ab)](/<STB TURN ORDER ICON:[ ](\d+)>/i)){if(_0x57d4bb(0x145)!==_0x57d4bb(0x1e0))return'icon';else this[_0x57d4bb(0x1b9)](),this[_0x57d4bb(0x18c)](),this[_0x57d4bb(0x22a)]();}}return Window_STB_TurnOrder[_0x57d4bb(0x211)][_0x57d4bb(0x2d1)];},Game_Actor[_0x5f466c(0x136)][_0x5f466c(0x299)]=function(){const _0x3a89c1=_0x5f466c,_0x11d7ee=this[_0x3a89c1(0x19f)]()[_0x3a89c1(0x1b6)];if(_0x11d7ee[_0x3a89c1(0x1ab)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x3a89c1(0x264)]();},Game_Actor[_0x5f466c(0x136)]['createTurnOrderSTBGraphicFaceIndex']=function(){const _0x421cc2=_0x5f466c,_0x2a2977=this[_0x421cc2(0x19f)]()[_0x421cc2(0x1b6)];if(_0x2a2977[_0x421cc2(0x1ab)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x421cc2(0x2fa)]();},Game_Actor[_0x5f466c(0x136)]['createTurnOrderSTBGraphicIconIndex']=function(){const _0x346a08=_0x5f466c,_0x1ce725=this[_0x346a08(0x19f)]()[_0x346a08(0x1b6)];if(_0x1ce725['match'](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder['Settings'][_0x346a08(0x2b5)];},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x143)]=Game_Actor[_0x5f466c(0x136)]['isAutoBattle'],Game_Actor['prototype'][_0x5f466c(0x21f)]=function(){const _0x485bb0=_0x5f466c;if(BattleManager['isSTB']()){if(this[_0x485bb0(0x17b)]()&&this['currentAction']()['isAutoBattleStb']())return!![];}return VisuMZ['BattleSystemSTB'][_0x485bb0(0x143)][_0x485bb0(0x1d7)](this);},Game_Action[_0x5f466c(0x136)][_0x5f466c(0x12e)]=function(){const _0x33e5fa=_0x5f466c;this[_0x33e5fa(0x210)]=!![];},Game_Action[_0x5f466c(0x136)][_0x5f466c(0x26a)]=function(){return this['_stbAutoBattle'];},VisuMZ[_0x5f466c(0x1b1)]['Game_Actor_makeAutoBattleActions']=Game_Actor[_0x5f466c(0x136)]['makeAutoBattleActions'],Game_Actor['prototype'][_0x5f466c(0x285)]=function(){const _0x25ac60=_0x5f466c;VisuMZ['BattleSystemSTB'][_0x25ac60(0x283)][_0x25ac60(0x1d7)](this);if(BattleManager['isSTB']())for(const _0x1969b9 of this[_0x25ac60(0x1b2)]){if(!_0x1969b9)continue;_0x1969b9['setAutoBattleStb']();}},Game_Enemy[_0x5f466c(0x136)][_0x5f466c(0x286)]=function(){const _0x5c0fb4=_0x5f466c,_0x1bd8e7=this[_0x5c0fb4(0x18e)]()[_0x5c0fb4(0x1b6)];if(_0x1bd8e7[_0x5c0fb4(0x1ab)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if('eHxfb'!==_0x5c0fb4(0x14c))this[_0x5c0fb4(0x28b)]();else return'face';}else{if(_0x1bd8e7['match'](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x5c0fb4(0x23e)===_0x5c0fb4(0x23e)?_0x5c0fb4(0x1a7):_0x545258['y']-_0x14fe99['y'];}return Window_STB_TurnOrder['Settings'][_0x5c0fb4(0x187)];},Game_Enemy[_0x5f466c(0x136)]['createTurnOrderSTBGraphicFaceName']=function(){const _0x4b0f8e=_0x5f466c,_0x661684=this[_0x4b0f8e(0x18e)]()[_0x4b0f8e(0x1b6)];if(_0x661684['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x4b0f8e(0x1a5)!==_0x4b0f8e(0x1a5)?_0x26e8f1(_0x3a5740['$1']):String(RegExp['$1']);return Window_STB_TurnOrder[_0x4b0f8e(0x211)]['EnemyBattlerFaceName'];},Game_Enemy[_0x5f466c(0x136)][_0x5f466c(0x10c)]=function(){const _0x30595b=_0x5f466c,_0xea0cf5=this[_0x30595b(0x18e)]()[_0x30595b(0x1b6)];if(_0xea0cf5['match'](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)){if(_0x30595b(0x209)==='HxkcR')return Number(RegExp['$2']);else _0x459377[_0x30595b(0x1b1)][_0x30595b(0x154)][_0x30595b(0x1d7)](this);}return Window_STB_TurnOrder[_0x30595b(0x211)][_0x30595b(0x1e5)];},Game_Enemy[_0x5f466c(0x136)][_0x5f466c(0x2fc)]=function(){const _0x5b082d=_0x5f466c,_0x30970f=this['enemy']()[_0x5b082d(0x1b6)];if(_0x30970f[_0x5b082d(0x1ab)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_STB_TurnOrder['Settings'][_0x5b082d(0x1f3)];},VisuMZ['BattleSystemSTB'][_0x5f466c(0x168)]=Game_Party[_0x5f466c(0x136)]['removeActor'],Game_Party[_0x5f466c(0x136)][_0x5f466c(0x2ac)]=function(_0x3428f8){const _0x5ec1d6=_0x5f466c;VisuMZ[_0x5ec1d6(0x1b1)][_0x5ec1d6(0x168)][_0x5ec1d6(0x1d7)](this,_0x3428f8),SceneManager['isSceneBattle']()&&BattleManager['isSTB']()&&BattleManager['_actionBattlers'][_0x5ec1d6(0x150)]($gameActors['actor'](_0x3428f8));},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x303)]=Scene_Battle['prototype'][_0x5f466c(0x26d)],Scene_Battle['prototype'][_0x5f466c(0x26d)]=function(){const _0x55f417=_0x5f466c;VisuMZ[_0x55f417(0x1b1)][_0x55f417(0x303)][_0x55f417(0x1d7)](this),BattleManager[_0x55f417(0x152)]()&&this[_0x55f417(0x1ec)]();},Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x1ec)]=function(){const _0xd730eb=_0x5f466c,_0x2add08=this[_0xd730eb(0x174)];this[_0xd730eb(0x29e)]()&&delete _0x2add08[_0xd730eb(0x226)][_0xd730eb(0x227)];},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x248)]=Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x236)],Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x236)]=function(){const _0x44e2da=_0x5f466c;BattleManager[_0x44e2da(0x152)]()?this[_0x44e2da(0x22b)]():VisuMZ[_0x44e2da(0x1b1)]['Scene_Battle_commandCancel'][_0x44e2da(0x1d7)](this);},Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x22b)]=function(){const _0x520e10=_0x5f466c;this[_0x520e10(0x1c2)][_0x520e10(0x2ba)](),this[_0x520e10(0x174)][_0x520e10(0x239)]();},VisuMZ['BattleSystemSTB']['Scene_Battle_commandFight']=Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x2db)],Scene_Battle['prototype'][_0x5f466c(0x2db)]=function(){const _0x283e93=_0x5f466c;BattleManager['isSTB']()?this[_0x283e93(0x2c5)]():_0x283e93(0x1b5)==='WFQwQ'?VisuMZ['BattleSystemSTB'][_0x283e93(0x186)][_0x283e93(0x1d7)](this):(this[_0x283e93(0x2e9)](),this['createBackgroundSprite'](),this[_0x283e93(0x2d3)](),this[_0x283e93(0x2af)](),this[_0x283e93(0x124)]());},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x25d)]=Scene_Battle['prototype'][_0x5f466c(0x2f2)],Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x2f2)]=function(){const _0x5e78b0=_0x5f466c;VisuMZ[_0x5e78b0(0x1b1)]['Scene_Battle_createAllWindows'][_0x5e78b0(0x1d7)](this),this[_0x5e78b0(0x257)]();},Scene_Battle['prototype'][_0x5f466c(0x257)]=function(){const _0x52b354=_0x5f466c;if(!BattleManager[_0x52b354(0x152)]())return;this[_0x52b354(0x2c6)]=new Window_STB_TurnOrder();const _0x3c92cb=this[_0x52b354(0x1b0)](this[_0x52b354(0x294)]);this[_0x52b354(0x274)](this[_0x52b354(0x2c6)],_0x3c92cb),this[_0x52b354(0x228)](),BattleManager['updateTurnOrderSTB'](!![]);},Scene_Battle[_0x5f466c(0x136)][_0x5f466c(0x228)]=function(){const _0x258071=_0x5f466c,_0x20599f=Window_STB_TurnOrder[_0x258071(0x211)];if(_0x20599f[_0x258071(0x1af)]!=='top')return;if(!_0x20599f[_0x258071(0x220)])return;if(!this[_0x258071(0x16c)])return;const _0xe4791e=this[_0x258071(0x2c6)]['y']-Math['round']((Graphics['height']-Graphics[_0x258071(0x213)])/0x2),_0x147e83=_0xe4791e+this['_stbTurnOrderWindow']['height'];this['_logWindow']['y']=_0x147e83+_0x20599f[_0x258071(0x2b3)];};function Sprite_STB_TurnOrder_Battler(){const _0x5207dd=_0x5f466c;this[_0x5207dd(0x30d)](...arguments);}Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)]=Object['create'](Sprite_Clickable[_0x5f466c(0x136)]),Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x18f)]=Sprite_STB_TurnOrder_Battler,Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)]['initialize']=function(_0x154fab,_0x80362f){const _0x3e947e=_0x5f466c;this[_0x3e947e(0x134)](_0x154fab,_0x80362f),Sprite_Clickable['prototype'][_0x3e947e(0x30d)][_0x3e947e(0x1d7)](this),this[_0x3e947e(0x1e4)]=0x0,this['createChildren'](),this[_0x3e947e(0x1fd)]();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x134)]=function(_0xddaf2e,_0x252b6f){const _0x47f7fd=_0x5f466c;this['_unit']=_0xddaf2e,this[_0x47f7fd(0x23d)]=_0x252b6f;const _0x1618ad=Window_STB_TurnOrder[_0x47f7fd(0x211)],_0x4c9d1c=this[_0x47f7fd(0x21e)](),_0x5f0386=this[_0x47f7fd(0x230)]();this['_positionDuration']=0x0,this[_0x47f7fd(0x1b8)]=_0x4c9d1c?_0x1618ad[_0x47f7fd(0x297)]*_0x5f0386:0x0,this[_0x47f7fd(0x121)]=_0x4c9d1c?0x0:_0x1618ad['SpriteThin']*_0x5f0386,this[_0x47f7fd(0x1c6)]=0x0,this[_0x47f7fd(0x1e9)]=0xff,this['_isAlive']=![],this[_0x47f7fd(0x169)]=![],this[_0x47f7fd(0x26e)]=0x0,this[_0x47f7fd(0x12b)]=0x0;},Sprite_STB_TurnOrder_Battler['prototype']['createChildren']=function(){const _0x3a1fbb=_0x5f466c;this[_0x3a1fbb(0x2e9)](),this['createBackgroundSprite'](),this['createGraphicSprite'](),this[_0x3a1fbb(0x2af)](),this[_0x3a1fbb(0x124)]();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2e9)]=function(){const _0x143d6d=_0x5f466c;this['x']=this[_0x143d6d(0x1b8)],this['y']=this[_0x143d6d(0x121)];},Sprite_STB_TurnOrder_Battler['prototype'][_0x5f466c(0x21e)]=function(){const _0x2291ed=_0x5f466c,_0x1885b3=Window_STB_TurnOrder[_0x2291ed(0x211)],_0x204f56=[_0x2291ed(0x2ae),_0x2291ed(0x1c8)][_0x2291ed(0x181)](_0x1885b3[_0x2291ed(0x1af)]);return _0x204f56;},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x11c)]=function(){const _0x231585=_0x5f466c,_0x50ebbb=Window_STB_TurnOrder[_0x231585(0x211)];return this[_0x231585(0x21e)]()?_0x50ebbb['SpriteThin']:_0x50ebbb[_0x231585(0x190)];},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x133)]=function(){const _0x39c293=_0x5f466c,_0xe8cd5e=Window_STB_TurnOrder[_0x39c293(0x211)];return this['isHorz']()?_0xe8cd5e['SpriteLength']:_0xe8cd5e[_0x39c293(0x297)];},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)]['createTestBitmap']=function(){const _0x2f61cd=_0x5f466c;this['bitmap']=new Bitmap(0x48,0x24);const _0x4be7a3=this[_0x2f61cd(0x2d5)]()?this[_0x2f61cd(0x2d5)]()[_0x2f61cd(0x151)]():_0x2f61cd(0x20a)[_0x2f61cd(0x304)](this['_unit'],this['_index']);this['bitmap']['drawText'](_0x4be7a3,0x0,0x0,0x48,0x24,_0x2f61cd(0x1bb));},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2da)]=function(){const _0x2512b2=_0x5f466c;if(!Window_STB_TurnOrder['Settings'][_0x2512b2(0x246)])return;const _0x288ea3=Window_STB_TurnOrder[_0x2512b2(0x211)],_0x2c3f0b=this['_unit']===$gameParty?_0x2512b2(0x2ca):_0x2512b2(0x1c4),_0x4ed211=_0x2512b2(0x160)[_0x2512b2(0x304)](_0x2c3f0b),_0x5d60e8=new Sprite();_0x5d60e8[_0x2512b2(0x155)]['x']=this[_0x2512b2(0x155)]['x'],_0x5d60e8[_0x2512b2(0x155)]['y']=this[_0x2512b2(0x155)]['y'];if(_0x288ea3[_0x4ed211])_0x5d60e8[_0x2512b2(0x2aa)]=ImageManager[_0x2512b2(0x15f)](_0x288ea3[_0x4ed211]);else{const _0x487ab1=this[_0x2512b2(0x11c)](),_0x54b4c4=this[_0x2512b2(0x133)]();_0x5d60e8[_0x2512b2(0x2aa)]=new Bitmap(_0x487ab1,_0x54b4c4);const _0x4f7fd6=ColorManager[_0x2512b2(0x183)](_0x288ea3['%1BgColor1'[_0x2512b2(0x304)](_0x2c3f0b)]),_0x7b10df=ColorManager[_0x2512b2(0x183)](_0x288ea3[_0x2512b2(0x293)[_0x2512b2(0x304)](_0x2c3f0b)]);_0x5d60e8[_0x2512b2(0x2aa)][_0x2512b2(0x24c)](0x0,0x0,_0x487ab1,_0x54b4c4,_0x4f7fd6,_0x7b10df,!![]);}this['_backgroundSprite']=_0x5d60e8,this['addChild'](this[_0x2512b2(0x1f8)]),this[_0x2512b2(0x23f)]=this[_0x2512b2(0x1f8)]['width'],this[_0x2512b2(0x1d9)]=this[_0x2512b2(0x1f8)][_0x2512b2(0x1d9)];},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2d3)]=function(){const _0x4c7235=_0x5f466c,_0x4a4a8c=new Sprite();_0x4a4a8c[_0x4c7235(0x155)]['x']=this[_0x4c7235(0x155)]['x'],_0x4a4a8c[_0x4c7235(0x155)]['y']=this[_0x4c7235(0x155)]['y'],this['_graphicSprite']=_0x4a4a8c,this[_0x4c7235(0x27a)](this['_graphicSprite']),this[_0x4c7235(0x111)]();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2af)]=function(){const _0x86994b=_0x5f466c;if(!Window_STB_TurnOrder[_0x86994b(0x211)][_0x86994b(0x1ea)])return;const _0x298e20=Window_STB_TurnOrder[_0x86994b(0x211)],_0x32ceff=this['_unit']===$gameParty?'Actor':_0x86994b(0x1c4),_0x591150='%1SystemBorder'[_0x86994b(0x304)](_0x32ceff),_0x5e905d=new Sprite();_0x5e905d[_0x86994b(0x155)]['x']=this[_0x86994b(0x155)]['x'],_0x5e905d[_0x86994b(0x155)]['y']=this[_0x86994b(0x155)]['y'];if(_0x298e20[_0x591150]){if(_0x86994b(0x167)!=='aTNGq')_0x5e905d[_0x86994b(0x2aa)]=ImageManager[_0x86994b(0x15f)](_0x298e20[_0x591150]);else return _0x5de92e[_0x86994b(0x211)][_0x86994b(0x187)];}else{let _0x431af3=this[_0x86994b(0x11c)](),_0x380bb7=this[_0x86994b(0x133)](),_0x304a17=_0x298e20[_0x86994b(0x137)];_0x5e905d[_0x86994b(0x2aa)]=new Bitmap(_0x431af3,_0x380bb7);const _0x199090=_0x86994b(0x129),_0x4f36e=ColorManager[_0x86994b(0x183)](_0x298e20[_0x86994b(0x2de)[_0x86994b(0x304)](_0x32ceff)]);_0x5e905d[_0x86994b(0x2aa)][_0x86994b(0x159)](0x0,0x0,_0x431af3,_0x380bb7,_0x199090),_0x431af3-=0x2,_0x380bb7-=0x2,_0x5e905d[_0x86994b(0x2aa)][_0x86994b(0x159)](0x1,0x1,_0x431af3,_0x380bb7,_0x4f36e),_0x431af3-=_0x304a17*0x2,_0x380bb7-=_0x304a17*0x2,_0x5e905d[_0x86994b(0x2aa)][_0x86994b(0x159)](0x1+_0x304a17,0x1+_0x304a17,_0x431af3,_0x380bb7,_0x199090),_0x431af3-=0x2,_0x380bb7-=0x2,_0x304a17+=0x1,_0x5e905d[_0x86994b(0x2aa)][_0x86994b(0x127)](0x1+_0x304a17,0x1+_0x304a17,_0x431af3,_0x380bb7);}this[_0x86994b(0x1f8)]=_0x5e905d,this[_0x86994b(0x27a)](this['_backgroundSprite']);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x124)]=function(){const _0x384708=_0x5f466c,_0x2762ff=Window_STB_TurnOrder[_0x384708(0x211)];if(!_0x2762ff[_0x384708(0x2d6)])return;if(this['_unit']===$gameParty)return;const _0x1a75df=this[_0x384708(0x11c)](),_0x15dc91=this[_0x384708(0x133)](),_0x41d94a=new Sprite();_0x41d94a['anchor']['x']=this['anchor']['x'],_0x41d94a[_0x384708(0x155)]['y']=this[_0x384708(0x155)]['y'],_0x41d94a['bitmap']=new Bitmap(_0x1a75df,_0x15dc91),this[_0x384708(0x193)]=_0x41d94a,this[_0x384708(0x27a)](this[_0x384708(0x193)]);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2d5)]=function(){const _0x896ffd=_0x5f466c;return this[_0x896ffd(0x29b)]?this['_unit'][_0x896ffd(0x280)]()[this[_0x896ffd(0x23d)]]:null;},Sprite_STB_TurnOrder_Battler['prototype'][_0x5f466c(0x207)]=function(){const _0x48f0e5=_0x5f466c;Sprite_Clickable[_0x48f0e5(0x136)][_0x48f0e5(0x207)][_0x48f0e5(0x1d7)](this),this['checkPosition'](),this['updatePosition'](),this['checkOpacity'](),this[_0x48f0e5(0x1cf)](),this[_0x48f0e5(0x267)](),this[_0x48f0e5(0x2ef)](),this[_0x48f0e5(0x110)](),this[_0x48f0e5(0x214)]();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x1e2)]=function(){const _0x13f14d=_0x5f466c,_0x53797b=this[_0x13f14d(0x19a)]();if(this[_0x13f14d(0x1f6)]===_0x53797b)return;this[_0x13f14d(0x1f6)]=_0x53797b;this[_0x13f14d(0x1e4)]<0xff&&this[_0x13f14d(0x2d5)]()&&_0x53797b!==this[_0x13f14d(0x230)]()&&this['startFade'](0xff);if(_0x53797b===this[_0x13f14d(0x230)]()&&this[_0x13f14d(0x1c6)]<=0x0&&this[_0x13f14d(0x1e4)]>0x0)this['startFade'](0x0);else{if(this[_0x13f14d(0x1c6)]<=0x0&&this['opacity']<0xff){if(_0x13f14d(0x16e)!==_0x13f14d(0x16e))return _0x13f14d(0x162);else this[_0x13f14d(0x1fd)]();}}this['calculateTargetPositions']();},Sprite_STB_TurnOrder_Battler['prototype'][_0x5f466c(0x1c3)]=function(){const _0x758a78=_0x5f466c,_0x422e90=this['containerWindow']();if(!_0x422e90)return;let _0x2a9747=![];if(this[_0x758a78(0x26e)]!==_0x422e90[_0x758a78(0x23f)])_0x2a9747=!![];else{if(this['_containerHeight']!==_0x422e90[_0x758a78(0x1d9)]){if('UJaHH'===_0x758a78(0x1e3)){this['_turnOrderInnerSprite']=new _0x5ca9f7(),this[_0x758a78(0x1ce)](this[_0x758a78(0x2d8)]),this[_0x758a78(0x1dc)]=[];for(let _0x2b55c7=0x0;_0x2b55c7<_0x43d66d['maxBattleMembers']();_0x2b55c7++){const _0x41834b=new _0x3b2a76(_0xdfdb8f,_0x2b55c7);this['_turnOrderInnerSprite'][_0x758a78(0x27a)](_0x41834b),this['_turnOrderContainer']['push'](_0x41834b);}for(let _0x2751a4=0x0;_0x2751a4<_0x4a1962[_0x758a78(0x280)]()[_0x758a78(0x2f7)];_0x2751a4++){const _0x3021ef=new _0x1d11cf(_0x59cc32,_0x2751a4);this['_turnOrderInnerSprite'][_0x758a78(0x27a)](_0x3021ef),this[_0x758a78(0x1dc)][_0x758a78(0x163)](_0x3021ef);}}else _0x2a9747=!![];}}_0x2a9747&&this[_0x758a78(0x28b)]();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x28b)]=function(){const _0x3753df=_0x5f466c,_0x413038=Window_STB_TurnOrder[_0x3753df(0x211)],_0x48d9fa=this['isHorz'](),_0x5ae218=_0x413038[_0x3753df(0x1f1)],_0x2bcf50=_0x413038[_0x3753df(0x13e)],_0x4e47d1=SceneManager[_0x3753df(0x14a)][_0x3753df(0x2c6)];if(!_0x4e47d1)return;const _0x35de53=this[_0x3753df(0x19a)]();this[_0x3753df(0x255)]=_0x413038['UpdateFrames'],this[_0x3753df(0x1b8)]=_0x48d9fa?_0x413038['SpriteThin']*_0x35de53:0x0,this['_positionTargetY']=_0x48d9fa?0x0:_0x413038['SpriteThin']*_0x35de53;if(_0x35de53>0x0){if(_0x3753df(0x138)===_0x3753df(0x22e)){this[_0x3753df(0x29b)]=_0xe0e63b,this[_0x3753df(0x23d)]=_0x2a5c27;const _0x34d4b=_0x33b719[_0x3753df(0x211)],_0x5c24c9=this[_0x3753df(0x21e)](),_0x79b2a=this[_0x3753df(0x230)]();this[_0x3753df(0x255)]=0x0,this[_0x3753df(0x1b8)]=_0x5c24c9?_0x34d4b['SpriteThin']*_0x79b2a:0x0,this['_positionTargetY']=_0x5c24c9?0x0:_0x34d4b[_0x3753df(0x297)]*_0x79b2a,this[_0x3753df(0x1c6)]=0x0,this[_0x3753df(0x1e9)]=0xff,this[_0x3753df(0x130)]=![],this[_0x3753df(0x169)]=![],this[_0x3753df(0x26e)]=0x0,this[_0x3753df(0x12b)]=0x0;}else this[_0x3753df(0x1b8)]+=_0x48d9fa?_0x2bcf50:0x0,this['_positionTargetY']+=_0x48d9fa?0x0:_0x2bcf50;}_0x5ae218?_0x3753df(0x2d4)===_0x3753df(0x1fc)?this[_0x3753df(0x301)]():this[_0x3753df(0x1b8)]=_0x48d9fa?_0x4e47d1['width']-this['_positionTargetX']-_0x413038[_0x3753df(0x297)]:0x0:this[_0x3753df(0x121)]=_0x48d9fa?0x0:_0x4e47d1[_0x3753df(0x1d9)]-this['_positionTargetY']-_0x413038[_0x3753df(0x297)];},Sprite_STB_TurnOrder_Battler['prototype']['updatePosition']=function(){const _0x17915a=_0x5f466c;if(this[_0x17915a(0x1c6)]>0x0)return;if(this[_0x17915a(0x255)]>0x0){if(_0x17915a(0x28c)!==_0x17915a(0x19e)){const _0x594324=this[_0x17915a(0x255)];this['x']=(this['x']*(_0x594324-0x1)+this[_0x17915a(0x1b8)])/_0x594324,this['y']=(this['y']*(_0x594324-0x1)+this[_0x17915a(0x121)])/_0x594324,this[_0x17915a(0x255)]--;}else this[_0x17915a(0x276)]();}if(this[_0x17915a(0x255)]<=0x0){if(_0x17915a(0x302)==='mhnnj'){this['x']=this[_0x17915a(0x1b8)],this['y']=this[_0x17915a(0x121)];if(this[_0x17915a(0x1e4)]<0xff&&!this[_0x17915a(0x224)]&&this['_fadeDuration']<=0x0){const _0x234d50=this[_0x17915a(0x2d5)]();if(_0x234d50){if('GUPAu'!==_0x17915a(0x1be)){const _0x4c568a=this[_0x17915a(0x19a)]();if(this[_0x17915a(0x1f6)]===_0x4c568a)return;this[_0x17915a(0x1f6)]=_0x4c568a;this[_0x17915a(0x1e4)]<0xff&&this[_0x17915a(0x2d5)]()&&_0x4c568a!==this[_0x17915a(0x230)]()&&this[_0x17915a(0x29f)](0xff);if(_0x4c568a===this[_0x17915a(0x230)]()&&this[_0x17915a(0x1c6)]<=0x0&&this[_0x17915a(0x1e4)]>0x0)this[_0x17915a(0x29f)](0x0);else this[_0x17915a(0x1c6)]<=0x0&&this['opacity']<0xff&&this['checkOpacity']();this[_0x17915a(0x28b)]();}else this[_0x17915a(0x1e9)]=_0x234d50[_0x17915a(0x12f)]()&&_0x234d50[_0x17915a(0x158)]()?0xff:0x0;}}}else{const _0x308afa=this['enemy']()[_0x17915a(0x1b6)];if(_0x308afa[_0x17915a(0x1ab)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x3dd552(_0x490954['$1']);return _0x527036[_0x17915a(0x211)][_0x17915a(0x1f3)];}}},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)]['defaultPosition']=function(){const _0x4e1085=_0x5f466c,_0x3abc67=Window_STB_TurnOrder['Settings'],_0x71b4ad=this[_0x4e1085(0x21e)]()?_0x3abc67['MaxHorzSprites']:_0x3abc67['MaxVertSprites'];return _0x71b4ad+0x1;},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x202)]=function(){const _0x3da633=_0x5f466c;return SceneManager[_0x3da633(0x14a)]['_stbTurnOrderWindow'];},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x19a)]=function(){const _0x3bc37f=_0x5f466c,_0xd42210=this[_0x3bc37f(0x2d5)]();if(!_0xd42210)return this[_0x3bc37f(0x230)]();if(_0xd42210===BattleManager[_0x3bc37f(0x2cf)])return 0x0;if(BattleManager[_0x3bc37f(0x305)]['includes'](_0xd42210)){const _0x4e68bb=BattleManager[_0x3bc37f(0x305)][_0x3bc37f(0x247)](_0xd42210)+0x1;return _0x4e68bb;}return this['defaultPosition']();},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x29f)]=function(_0x2d9b68){const _0x1937b6=_0x5f466c,_0xb2f871=Window_STB_TurnOrder[_0x1937b6(0x211)];this[_0x1937b6(0x1c6)]=_0xb2f871[_0x1937b6(0x179)],this['_fadeTarget']=_0x2d9b68;},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)]['checkOpacity']=function(){const _0x5f0021=_0x5f466c,_0x43b6fc=this['battler']();if(!_0x43b6fc)return;if(this[_0x5f0021(0x130)]===_0x43b6fc[_0x5f0021(0x12f)]()&&this[_0x5f0021(0x169)]===_0x43b6fc[_0x5f0021(0x158)]())return;this[_0x5f0021(0x130)]=_0x43b6fc[_0x5f0021(0x12f)](),this[_0x5f0021(0x169)]=_0x43b6fc[_0x5f0021(0x158)]();let _0x1825a9=this[_0x5f0021(0x130)]&&this[_0x5f0021(0x169)]?0xff:0x0;this[_0x5f0021(0x29f)](_0x1825a9);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x1cf)]=function(){const _0x4f261c=_0x5f466c;if(this['_fadeDuration']>0x0){if(_0x4f261c(0x131)===_0x4f261c(0x131)){const _0x26e59d=this[_0x4f261c(0x1c6)];this['opacity']=(this[_0x4f261c(0x1e4)]*(_0x26e59d-0x1)+this[_0x4f261c(0x1e9)])/_0x26e59d,this[_0x4f261c(0x1c6)]--,this[_0x4f261c(0x1c6)]<=0x0&&(this[_0x4f261c(0x1e2)](),this[_0x4f261c(0x255)]=0x0,this[_0x4f261c(0x12a)](),this[_0x4f261c(0x1e4)]=this[_0x4f261c(0x1e9)]);}else _0x2c3fdf[_0x4f261c(0x1b1)][_0x4f261c(0x248)][_0x4f261c(0x1d7)](this);}if(this['_isBattleOver'])return;if(BattleManager[_0x4f261c(0x2e1)]===_0x4f261c(0x21b)){if(_0x4f261c(0x1a1)!==_0x4f261c(0x238))this[_0x4f261c(0x224)]=!![],this[_0x4f261c(0x29f)](0x0);else return this[_0x4f261c(0x1b3)]===_0xb603d5&&(this[_0x4f261c(0x1b3)]=this[_0x4f261c(0x299)]()),this[_0x4f261c(0x1b3)];}},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x267)]=function(){const _0x2c4f35=_0x5f466c,_0x677168=this[_0x2c4f35(0x2d5)]();if(!_0x677168)return;const _0x35867f=Window_STB_TurnOrder[_0x2c4f35(0x211)],_0x262c88=this[_0x2c4f35(0x29b)]===$gameParty?_0x2c4f35(0x2ca):_0x2c4f35(0x1c4);let _0x12a8e7=_0x677168[_0x2c4f35(0x2f6)]();if(_0x677168[_0x2c4f35(0x2ed)]()&&_0x12a8e7===_0x2c4f35(0x18e)){if('FVWjd'!==_0x2c4f35(0x2a3))return _0x2c4f35(0x1a7);else _0x12a8e7=_0x2c4f35(0x162);}else _0x677168[_0x2c4f35(0x23b)]()&&_0x12a8e7==='svactor'&&(_0x2c4f35(0x176)==='TAujM'?_0x12a8e7='enemy':this[_0x2c4f35(0x301)]());if(this['_graphicType']!==_0x12a8e7){if(_0x2c4f35(0x1a3)!==_0x2c4f35(0x262))return this['processUpdateGraphic']();else this[_0x2c4f35(0x22b)]();}switch(this['_graphicType']){case _0x2c4f35(0x162):if(this[_0x2c4f35(0x10e)]!==_0x677168[_0x2c4f35(0x215)]()){if(_0x2c4f35(0x1b7)===_0x2c4f35(0x1b7))return this['processUpdateGraphic']();else{const _0x504256=_0x156c69['Settings'];if(!_0x504256[_0x2c4f35(0x2d6)])return;if(this[_0x2c4f35(0x29b)]===_0x36bf8a)return;const _0x919f21=this['bitmapWidth'](),_0xcb465b=this['bitmapHeight'](),_0x100400=new _0x49bb9e();_0x100400[_0x2c4f35(0x155)]['x']=this[_0x2c4f35(0x155)]['x'],_0x100400['anchor']['y']=this[_0x2c4f35(0x155)]['y'],_0x100400[_0x2c4f35(0x2aa)]=new _0x189fd2(_0x919f21,_0xcb465b),this[_0x2c4f35(0x193)]=_0x100400,this[_0x2c4f35(0x27a)](this[_0x2c4f35(0x193)]);}}if(this[_0x2c4f35(0x1e1)]!==_0x677168[_0x2c4f35(0x30a)]()){if(_0x2c4f35(0x2a0)==='kzJiU')return this['processUpdateGraphic']();else this[_0x2c4f35(0x2b0)]=_0x4108c4[_0x2c4f35(0x1d6)](),_0x514d4b=_0x174914['loadSvActor'](this[_0x2c4f35(0x2b0)]),_0x4f5c73[_0x2c4f35(0x1de)](this[_0x2c4f35(0x1c0)]['bind'](this,_0x2aeb26));}break;case'icon':if(this[_0x2c4f35(0x23c)]!==_0x677168['TurnOrderSTBGraphicIconIndex']())return this[_0x2c4f35(0x111)]();break;case'enemy':if(_0x677168['hasSvBattler']()){if(this['_graphicSv']!==_0x677168['svBattlerName']())return _0x2c4f35(0x2b9)===_0x2c4f35(0x2b9)?this['processUpdateGraphic']():(this[_0x2c4f35(0x28d)]===_0x57bdab&&this[_0x2c4f35(0x243)](),this[_0x2c4f35(0x28d)]);}else{if(this['_graphicEnemy']!==_0x677168[_0x2c4f35(0x116)]()){if(_0x2c4f35(0x15e)===_0x2c4f35(0x15c))this[_0x2c4f35(0x269)]=_0x3f073b[_0x2c4f35(0x179)];else return this[_0x2c4f35(0x111)]();}}break;case _0x2c4f35(0x1d4):if(_0x677168[_0x2c4f35(0x2ed)]()){if('Olzkf'!==_0x2c4f35(0x2cd)){const _0xaff94=_0x5fad3e[_0x2c4f35(0x22c)]()[_0x2c4f35(0x115)](_0xbd1dd6=>_0xbd1dd6['isAppeared']()),_0x18ddae=_0xaff94[_0x2c4f35(0x115)](_0x3fb5c7=>_0x3fb5c7[_0x2c4f35(0x2e0)]());return _0xaff94[_0x2c4f35(0x2f7)]===_0x18ddae['length'];}else{if(this['_graphicSv']!==_0x677168[_0x2c4f35(0x116)]())return this[_0x2c4f35(0x111)]();}}else{if(this[_0x2c4f35(0x15b)]!==_0x677168[_0x2c4f35(0x116)]()){if('hkwFJ'!=='ZCmCi')return this[_0x2c4f35(0x111)]();else _0x380928=_0x3d5c99[_0x2c4f35(0x1a9)](_0x3ed888,_0x34247f);}}break;}},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x111)]=function(){const _0x42f936=_0x5f466c,_0x50252f=this[_0x42f936(0x2d5)]();if(!_0x50252f)return;this[_0x42f936(0x2e8)]=_0x50252f['TurnOrderSTBGraphicType']();if(_0x50252f[_0x42f936(0x2ed)]()&&this[_0x42f936(0x2e8)]===_0x42f936(0x18e))this['_graphicType']=_0x42f936(0x162);else _0x50252f[_0x42f936(0x23b)]()&&this[_0x42f936(0x2e8)]===_0x42f936(0x1d4)&&(this['_graphicType']=_0x42f936(0x18e));let _0x347ed3;switch(this[_0x42f936(0x2e8)]){case'face':this[_0x42f936(0x10e)]=_0x50252f[_0x42f936(0x215)](),this['_graphicFaceIndex']=_0x50252f[_0x42f936(0x30a)](),_0x347ed3=ImageManager[_0x42f936(0x10b)](this[_0x42f936(0x10e)]),_0x347ed3[_0x42f936(0x1de)](this[_0x42f936(0x13b)][_0x42f936(0x245)](this,_0x347ed3));break;case'icon':this[_0x42f936(0x23c)]=_0x50252f[_0x42f936(0x2fc)](),_0x347ed3=ImageManager['loadSystem'](_0x42f936(0x278)),_0x347ed3[_0x42f936(0x1de)](this[_0x42f936(0x185)]['bind'](this,_0x347ed3));break;case _0x42f936(0x18e):if(_0x50252f['hasSvBattler']()){if(_0x42f936(0x22d)==='AvgpE')this[_0x42f936(0x2b0)]=_0x50252f[_0x42f936(0x1d6)](),_0x347ed3=ImageManager[_0x42f936(0x21c)](this[_0x42f936(0x2b0)]),_0x347ed3[_0x42f936(0x1de)](this[_0x42f936(0x1c0)][_0x42f936(0x245)](this,_0x347ed3));else return this['processUpdateGraphic']();}else $gameSystem['isSideView']()?(this['_graphicEnemy']=_0x50252f[_0x42f936(0x116)](),_0x347ed3=ImageManager[_0x42f936(0x2fd)](this[_0x42f936(0x15b)]),_0x347ed3[_0x42f936(0x1de)](this['changeEnemyGraphicBitmap'][_0x42f936(0x245)](this,_0x347ed3))):(this[_0x42f936(0x15b)]=_0x50252f[_0x42f936(0x116)](),_0x347ed3=ImageManager[_0x42f936(0x1ee)](this['_graphicEnemy']),_0x347ed3[_0x42f936(0x1de)](this[_0x42f936(0x2f9)]['bind'](this,_0x347ed3)));break;case _0x42f936(0x1d4):this[_0x42f936(0x2b0)]=_0x50252f[_0x42f936(0x116)](),_0x347ed3=ImageManager['loadSvActor'](this[_0x42f936(0x2b0)]),_0x347ed3[_0x42f936(0x1de)](this[_0x42f936(0x1c0)][_0x42f936(0x245)](this,_0x347ed3));break;}},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x13b)]=function(_0x1b2b18){const _0x3827b1=_0x5f466c,_0xfcc5aa=this[_0x3827b1(0x1e1)],_0x13d648=this[_0x3827b1(0x11c)](),_0x253e33=this['bitmapHeight'](),_0x23902d=Math[_0x3827b1(0x1a9)](_0x13d648,_0x253e33);this['_graphicSprite'][_0x3827b1(0x2aa)]=new Bitmap(_0x13d648,_0x253e33);const _0x2a252e=this[_0x3827b1(0x20b)][_0x3827b1(0x2aa)],_0x4d7bca=ImageManager[_0x3827b1(0x28f)],_0x566d06=ImageManager['faceHeight'],_0xf0bc62=_0x23902d/Math[_0x3827b1(0x1a9)](_0x4d7bca,_0x566d06),_0x285f9c=ImageManager['faceWidth'],_0x156524=ImageManager[_0x3827b1(0x251)],_0x2bcf7c=_0xfcc5aa%0x4*_0x4d7bca+(_0x4d7bca-_0x285f9c)/0x2,_0x17d6b7=Math['floor'](_0xfcc5aa/0x4)*_0x566d06+(_0x566d06-_0x156524)/0x2,_0x30cb73=(_0x13d648-_0x4d7bca*_0xf0bc62)/0x2,_0x50079f=(_0x253e33-_0x566d06*_0xf0bc62)/0x2;_0x2a252e[_0x3827b1(0x16b)](_0x1b2b18,_0x2bcf7c,_0x17d6b7,_0x285f9c,_0x156524,_0x30cb73,_0x50079f,_0x23902d,_0x23902d);},Sprite_STB_TurnOrder_Battler['prototype'][_0x5f466c(0x185)]=function(_0x5c2e0a){const _0x990744=_0x5f466c,_0x8591d7=this['_graphicIconIndex'],_0x384b8d=this[_0x990744(0x11c)](),_0x3cd9ed=this[_0x990744(0x133)]();this[_0x990744(0x20b)]['bitmap']=new Bitmap(_0x384b8d,_0x3cd9ed);const _0x3e9e8d=this[_0x990744(0x20b)][_0x990744(0x2aa)],_0x5cb5c5=ImageManager[_0x990744(0x2c7)],_0x593563=ImageManager[_0x990744(0x178)],_0x17047e=Math[_0x990744(0x2e5)](_0x5cb5c5,_0x593563,_0x384b8d,_0x3cd9ed),_0x3a1092=_0x8591d7%0x10*_0x5cb5c5,_0x5c698b=Math[_0x990744(0x261)](_0x8591d7/0x10)*_0x593563,_0x1b7bea=Math[_0x990744(0x261)](Math['max'](_0x384b8d-_0x17047e,0x0)/0x2),_0xf04e90=Math[_0x990744(0x261)](Math[_0x990744(0x1a9)](_0x3cd9ed-_0x17047e,0x0)/0x2);_0x3e9e8d[_0x990744(0x16b)](_0x5c2e0a,_0x3a1092,_0x5c698b,_0x5cb5c5,_0x593563,_0x1b7bea,_0xf04e90,_0x17047e,_0x17047e);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x1c0)]=function(_0x3475b2){const _0x409a75=_0x5f466c,_0x3ec233=this['bitmapWidth'](),_0x2e94f5=this[_0x409a75(0x133)](),_0x247ea0=Math['min'](_0x3ec233,_0x2e94f5);this[_0x409a75(0x20b)][_0x409a75(0x2aa)]=new Bitmap(_0x3ec233,_0x2e94f5);const _0x3938c8=this[_0x409a75(0x20b)][_0x409a75(0x2aa)],_0x4ffe75=this[_0x409a75(0x2b0)]['match'](/\$/i),_0x18ffaa=_0x4ffe75?0x1:ImageManager[_0x409a75(0x217)],_0x41b5ac=_0x4ffe75?0x1:ImageManager['svActorVertCells'],_0x5aa9e7=_0x3475b2[_0x409a75(0x23f)]/_0x18ffaa,_0x210c26=_0x3475b2['height']/_0x41b5ac,_0x5966b9=Math[_0x409a75(0x2e5)](0x1,_0x247ea0/_0x5aa9e7,_0x247ea0/_0x210c26),_0x3e933b=_0x5aa9e7*_0x5966b9,_0x9968fe=_0x210c26*_0x5966b9,_0x2716b4=Math[_0x409a75(0x2a2)]((_0x3ec233-_0x3e933b)/0x2),_0x570da9=Math[_0x409a75(0x2a2)]((_0x2e94f5-_0x9968fe)/0x2);_0x3938c8[_0x409a75(0x16b)](_0x3475b2,0x0,0x0,_0x5aa9e7,_0x210c26,_0x2716b4,_0x570da9,_0x3e933b,_0x9968fe);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2f9)]=function(_0x5e436e){const _0x3c794f=_0x5f466c,_0x3a0a57=Window_STB_TurnOrder['Settings'],_0x5edcad=this[_0x3c794f(0x11c)](),_0x4e00bd=this[_0x3c794f(0x133)](),_0x547dae=Math[_0x3c794f(0x2e5)](_0x5edcad,_0x4e00bd);this['_graphicSprite']['bitmap']=new Bitmap(_0x5edcad,_0x4e00bd);const _0xd854a8=this[_0x3c794f(0x20b)][_0x3c794f(0x2aa)],_0x18c186=Math[_0x3c794f(0x2e5)](0x1,_0x547dae/_0x5e436e['width'],_0x547dae/_0x5e436e[_0x3c794f(0x1d9)]),_0x280f6d=_0x5e436e[_0x3c794f(0x23f)]*_0x18c186,_0x223f35=_0x5e436e[_0x3c794f(0x1d9)]*_0x18c186,_0x14d92f=Math[_0x3c794f(0x2a2)]((_0x5edcad-_0x280f6d)/0x2),_0x3f9097=Math[_0x3c794f(0x2a2)]((_0x4e00bd-_0x223f35)/0x2);_0xd854a8[_0x3c794f(0x16b)](_0x5e436e,0x0,0x0,_0x5e436e[_0x3c794f(0x23f)],_0x5e436e[_0x3c794f(0x1d9)],_0x14d92f,_0x3f9097,_0x280f6d,_0x223f35);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x2ef)]=function(){const _0x58c28e=_0x5f466c,_0x444cc2=this[_0x58c28e(0x2d5)]();if(!_0x444cc2)return;if(!_0x444cc2['isEnemy']())return;if(this['_graphicHue']===_0x444cc2[_0x58c28e(0x253)]())return;this[_0x58c28e(0x165)]=_0x444cc2[_0x58c28e(0x253)](),this['_graphicSprite'][_0x58c28e(0x1ae)](_0x444cc2['hasSvBattler']()?0x0:this[_0x58c28e(0x165)]);},Sprite_STB_TurnOrder_Battler['prototype'][_0x5f466c(0x110)]=function(){const _0x12260e=_0x5f466c;if(!this[_0x12260e(0x193)])return;const _0x17aabc=this[_0x12260e(0x2d5)]();if(!_0x17aabc)return;if(this[_0x12260e(0x11e)]===_0x17aabc[_0x12260e(0x11e)]&&this[_0x12260e(0x1c7)]===_0x17aabc[_0x12260e(0x1c7)])return;this[_0x12260e(0x11e)]=_0x17aabc[_0x12260e(0x11e)],this[_0x12260e(0x1c7)]=_0x17aabc['_plural'];const _0x444827=Window_STB_TurnOrder['Settings'],_0xa78ddd=this[_0x12260e(0x21e)](),_0x812c1a=this[_0x12260e(0x11c)](),_0x3578df=this[_0x12260e(0x133)](),_0x114164=this[_0x12260e(0x193)][_0x12260e(0x2aa)];_0x114164['clear']();if(!this[_0x12260e(0x1c7)])return;_0x114164[_0x12260e(0x256)]=_0x444827[_0x12260e(0x17c)]||$gameSystem['mainFontFace'](),_0x114164[_0x12260e(0x2c3)]=_0x444827[_0x12260e(0x132)]||0x10;if(_0xa78ddd)_0x114164[_0x12260e(0x2e4)](this[_0x12260e(0x11e)][_0x12260e(0x260)](),0x0,_0x3578df/0x2,_0x812c1a,_0x3578df/0x2,_0x12260e(0x1bb));else{if(_0x12260e(0x16d)==='xYkBr')_0x114164[_0x12260e(0x2e4)](this['_letter'][_0x12260e(0x260)](),0x0,0x2,_0x812c1a-0x8,_0x3578df-0x4,_0x12260e(0x266));else{if(!this['_letterSprite'])return;const _0x490462=this[_0x12260e(0x2d5)]();if(!_0x490462)return;if(this[_0x12260e(0x11e)]===_0x490462[_0x12260e(0x11e)]&&this[_0x12260e(0x1c7)]===_0x490462[_0x12260e(0x1c7)])return;this[_0x12260e(0x11e)]=_0x490462['_letter'],this[_0x12260e(0x1c7)]=_0x490462[_0x12260e(0x1c7)];const _0x4a51c6=_0x5a32ee[_0x12260e(0x211)],_0x5c105e=this[_0x12260e(0x21e)](),_0x50657d=this['bitmapWidth'](),_0x273e60=this[_0x12260e(0x133)](),_0x2ab296=this[_0x12260e(0x193)][_0x12260e(0x2aa)];_0x2ab296[_0x12260e(0x25b)]();if(!this[_0x12260e(0x1c7)])return;_0x2ab296[_0x12260e(0x256)]=_0x4a51c6['EnemyBattlerFontFace']||_0x5ce716[_0x12260e(0x1bf)](),_0x2ab296[_0x12260e(0x2c3)]=_0x4a51c6[_0x12260e(0x132)]||0x10,_0x5c105e?_0x2ab296[_0x12260e(0x2e4)](this[_0x12260e(0x11e)][_0x12260e(0x260)](),0x0,_0x273e60/0x2,_0x50657d,_0x273e60/0x2,_0x12260e(0x1bb)):_0x2ab296[_0x12260e(0x2e4)](this[_0x12260e(0x11e)]['trim'](),0x0,0x2,_0x50657d-0x8,_0x273e60-0x4,_0x12260e(0x266));}}},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x214)]=function(){const _0x249345=_0x5f466c,_0x1e1530=this[_0x249345(0x2d5)]();if(!_0x1e1530)return;const _0xd7694e=_0x1e1530[_0x249345(0x2d5)]();if(!_0xd7694e)return;const _0x359d6e=_0xd7694e[_0x249345(0x30c)]();if(!_0x359d6e)return;this[_0x249345(0x13f)](_0x359d6e[_0x249345(0x149)]);},Sprite_STB_TurnOrder_Battler[_0x5f466c(0x136)][_0x5f466c(0x120)]=function(){const _0x28820d=_0x5f466c;return this[_0x28820d(0x2d5)]();},VisuMZ[_0x5f466c(0x1b1)][_0x5f466c(0x2a1)]=Window_Help['prototype'][_0x5f466c(0x2ee)],Window_Help[_0x5f466c(0x136)][_0x5f466c(0x2ee)]=function(_0x27a4bf){const _0x59cd13=_0x5f466c;BattleManager[_0x59cd13(0x152)]()&&_0x27a4bf&&_0x27a4bf[_0x59cd13(0x1b6)]&&_0x27a4bf[_0x59cd13(0x1b6)][_0x59cd13(0x1ab)](/<(?:STB) HELP>\s*([\s\S]*)\s*<\/(?:STB) HELP>/i)?this['setText'](String(RegExp['$1'])):'PotRH'===_0x59cd13(0x26b)?this[_0x59cd13(0x210)]=!![]:VisuMZ['BattleSystemSTB'][_0x59cd13(0x2a1)][_0x59cd13(0x1d7)](this,_0x27a4bf);};function Window_STB_TurnOrder(){const _0x3fdeae=_0x5f466c;this[_0x3fdeae(0x30d)](...arguments);}Window_STB_TurnOrder['prototype']=Object['create'](Window_Base['prototype']),Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x18f)]=Window_STB_TurnOrder,Window_STB_TurnOrder[_0x5f466c(0x211)]=VisuMZ[_0x5f466c(0x1b1)]['Settings'][_0x5f466c(0x108)],Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x30d)]=function(){const _0x7a6db1=_0x5f466c,_0x5bd6e5=this[_0x7a6db1(0x1d5)]();this[_0x7a6db1(0x25f)](_0x5bd6e5),Window_Base[_0x7a6db1(0x136)][_0x7a6db1(0x30d)][_0x7a6db1(0x1d7)](this,_0x5bd6e5),this['createBattlerSprites'](),this['updateVisibility'](),this[_0x7a6db1(0x1e4)]=0x0;},Window_STB_TurnOrder[_0x5f466c(0x136)]['windowRect']=function(){const _0x5ce47d=_0x5f466c;return this[_0x5ce47d(0x1eb)]($gameParty[_0x5ce47d(0x1da)](),0x9,!![]);},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x25f)]=function(_0x3ec7e9){const _0x534f4e=_0x5f466c;this['_targetHomeX']=this[_0x534f4e(0x2a7)]=_0x3ec7e9['x'],this[_0x534f4e(0x2f5)]=this[_0x534f4e(0x2cc)]=_0x3ec7e9['y'],this[_0x534f4e(0x10d)]=_0x3ec7e9['width'],this[_0x534f4e(0x291)]=_0x3ec7e9[_0x534f4e(0x1d9)],this[_0x534f4e(0x269)]=0x0;},Window_STB_TurnOrder[_0x5f466c(0x136)]['createBattlerRect']=function(_0x43d99b,_0x5d96d4,_0x5eddf7){const _0x359c61=_0x5f466c,_0x97adcf=Window_STB_TurnOrder['Settings'],_0x44462c=this[_0x359c61(0x21e)]()?_0x97adcf[_0x359c61(0x1df)]:_0x97adcf[_0x359c61(0x28a)],_0x5562c2=Math[_0x359c61(0x2e5)](_0x44462c,_0x43d99b+_0x5d96d4),_0xacc868=SceneManager[_0x359c61(0x14a)][_0x359c61(0x14d)][_0x359c61(0x1d9)],_0x291d5f=SceneManager['_scene'][_0x359c61(0x15d)]['height'],_0x6ff954=_0x97adcf[_0x359c61(0x13e)],_0xdead7f=Graphics[_0x359c61(0x1d9)]-_0xacc868-_0x291d5f;let _0x18c984=0x0,_0x54ac28=0x0,_0x1941eb=0x0,_0x3c5506=0x0;switch(_0x97adcf[_0x359c61(0x1af)]){case'top':_0x18c984=_0x97adcf['SpriteThin']*_0x5562c2+_0x6ff954,_0x54ac28=_0x97adcf[_0x359c61(0x190)],_0x1941eb=Math[_0x359c61(0x29a)]((Graphics[_0x359c61(0x23f)]-_0x18c984)/0x2),_0x3c5506=_0x97adcf[_0x359c61(0x2b3)];break;case _0x359c61(0x1c8):_0x18c984=_0x97adcf[_0x359c61(0x297)]*_0x5562c2+_0x6ff954,_0x54ac28=_0x97adcf[_0x359c61(0x190)],_0x1941eb=Math[_0x359c61(0x29a)]((Graphics['width']-_0x18c984)/0x2),_0x3c5506=Graphics[_0x359c61(0x1d9)]-_0xacc868-_0x54ac28-_0x97adcf[_0x359c61(0x2b3)];break;case _0x359c61(0x2b1):_0x18c984=_0x97adcf['SpriteLength'],_0x54ac28=_0x97adcf[_0x359c61(0x297)]*_0x5562c2+_0x6ff954,_0x1941eb=_0x97adcf[_0x359c61(0x2b3)],_0x3c5506=Math['ceil']((_0xdead7f-_0x54ac28)/0x2),_0x3c5506+=_0x291d5f;break;case _0x359c61(0x266):_0x18c984=_0x97adcf[_0x359c61(0x190)],_0x54ac28=_0x97adcf['SpriteThin']*_0x5562c2+_0x6ff954,_0x1941eb=Graphics[_0x359c61(0x23f)]-_0x18c984-_0x97adcf[_0x359c61(0x2b3)],_0x3c5506=Math[_0x359c61(0x29a)]((_0xdead7f-_0x54ac28)/0x2),_0x3c5506+=_0x291d5f;break;}if(!_0x5eddf7){const _0x57d48e=Window_STB_TurnOrder[_0x359c61(0x211)][_0x359c61(0x1f1)];let _0x542955=Math[_0x359c61(0x2e5)](_0x44462c,Math[_0x359c61(0x2e5)]($gameParty['maxBattleMembers']()+0x8)-_0x5562c2);switch(_0x97adcf['DisplayPosition']){case _0x359c61(0x2ae):case'bottom':_0x57d48e&&(_0x1941eb-=_0x542955*_0x97adcf[_0x359c61(0x297)]);break;}}return _0x1941eb+=_0x97adcf['DisplayOffsetX'],_0x3c5506+=_0x97adcf[_0x359c61(0x109)],new Rectangle(_0x1941eb,_0x3c5506,_0x18c984,_0x54ac28);},Window_STB_TurnOrder['prototype']['updatePadding']=function(){const _0xa68d5e=_0x5f466c;this[_0xa68d5e(0x2b4)]=0x0;},Window_STB_TurnOrder['prototype'][_0x5f466c(0x21e)]=function(){const _0x236dcd=_0x5f466c,_0xcd38fd=Window_STB_TurnOrder['Settings'],_0x2f7ccd=['top',_0x236dcd(0x1c8)]['includes'](_0xcd38fd[_0x236dcd(0x1af)]);return _0x2f7ccd;},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x2ab)]=function(){const _0x593ad6=_0x5f466c;this[_0x593ad6(0x2d8)]=new Sprite(),this[_0x593ad6(0x1ce)](this['_turnOrderInnerSprite']),this[_0x593ad6(0x1dc)]=[];for(let _0x4a1501=0x0;_0x4a1501<$gameParty[_0x593ad6(0x1da)]();_0x4a1501++){const _0x57c634=new Sprite_STB_TurnOrder_Battler($gameParty,_0x4a1501);this[_0x593ad6(0x2d8)]['addChild'](_0x57c634),this[_0x593ad6(0x1dc)][_0x593ad6(0x163)](_0x57c634);}for(let _0x323a94=0x0;_0x323a94<$gameTroop[_0x593ad6(0x280)]()[_0x593ad6(0x2f7)];_0x323a94++){const _0x2c9060=new Sprite_STB_TurnOrder_Battler($gameTroop,_0x323a94);this[_0x593ad6(0x2d8)]['addChild'](_0x2c9060),this[_0x593ad6(0x1dc)][_0x593ad6(0x163)](_0x2c9060);}},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x207)]=function(){const _0x478c5f=_0x5f466c;Window_Base[_0x478c5f(0x136)][_0x478c5f(0x207)][_0x478c5f(0x1d7)](this),this[_0x478c5f(0x27e)](),this['updatePosition'](),this[_0x478c5f(0x2e6)](),this[_0x478c5f(0x126)](),this[_0x478c5f(0x234)]();},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x27e)]=function(){const _0x10f84f=_0x5f466c;if(this[_0x10f84f(0x269)]>0x0){if('zLYFJ'==='zEEXA')_0x519312-=_0xefa24a*_0x312ee7[_0x10f84f(0x297)];else{const _0x1ee532=this[_0x10f84f(0x269)];this[_0x10f84f(0x2a7)]=(this[_0x10f84f(0x2a7)]*(_0x1ee532-0x1)+this[_0x10f84f(0x204)])/_0x1ee532,this['_homeY']=(this['_homeY']*(_0x1ee532-0x1)+this[_0x10f84f(0x2f5)])/_0x1ee532,this[_0x10f84f(0x269)]--,this['_homeDuration']<=0x0&&(_0x10f84f(0x13d)===_0x10f84f(0x13d)?(this[_0x10f84f(0x2a7)]=this['_targetHomeX'],this[_0x10f84f(0x2cc)]=this[_0x10f84f(0x2f5)]):_0x14a2ab=this['_actions']['shift']());}}},Window_STB_TurnOrder[_0x5f466c(0x136)]['updatePosition']=function(){const _0x240ba7=_0x5f466c,_0x472b6f=Window_STB_TurnOrder[_0x240ba7(0x211)];if(_0x472b6f[_0x240ba7(0x1af)]!=='top')return;if(!_0x472b6f[_0x240ba7(0x21d)])return;const _0x63bc43=SceneManager[_0x240ba7(0x14a)][_0x240ba7(0x15d)];if(!_0x63bc43)return;if(_0x63bc43['visible']){if(_0x240ba7(0x1e6)===_0x240ba7(0x1e6))this['x']=this[_0x240ba7(0x2a7)]+(_0x472b6f['RepositionTopHelpX']||0x0),this['y']=this[_0x240ba7(0x2cc)]+(_0x472b6f[_0x240ba7(0x2c9)]||0x0);else{const _0x117521=this[_0x240ba7(0x19f)]()['note'];if(_0x117521[_0x240ba7(0x1ab)](/<STB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x240ba7(0x162);else{if(_0x117521[_0x240ba7(0x1ab)](/<STB TURN ORDER ICON:[ ](\d+)>/i))return _0x240ba7(0x1a7);}return _0x42eb0b[_0x240ba7(0x211)][_0x240ba7(0x2d1)];}}else this['x']=this[_0x240ba7(0x2a7)],this['y']=this[_0x240ba7(0x2cc)];const _0x53ec1a=SceneManager[_0x240ba7(0x14a)][_0x240ba7(0x294)];if(Window_STB_TurnOrder['_ogWindowLayerX']===undefined){if(_0x240ba7(0x2c4)===_0x240ba7(0x2c4))Window_STB_TurnOrder['_ogWindowLayerX']=Math[_0x240ba7(0x2a2)]((Graphics[_0x240ba7(0x23f)]-Math['min'](Graphics[_0x240ba7(0x188)],_0x53ec1a[_0x240ba7(0x23f)]))/0x2),Window_STB_TurnOrder[_0x240ba7(0x219)]=Math['round']((Graphics[_0x240ba7(0x1d9)]-Math[_0x240ba7(0x2e5)](Graphics[_0x240ba7(0x213)],_0x53ec1a['height']))/0x2);else{const _0x2b3251=_0x46b093[_0x240ba7(0x211)];return this[_0x240ba7(0x21e)]()?_0x2b3251[_0x240ba7(0x190)]:_0x2b3251[_0x240ba7(0x297)];}}this['x']+=_0x53ec1a['x']-Window_STB_TurnOrder['_ogWindowLayerX'],this['y']+=_0x53ec1a['y']-Window_STB_TurnOrder[_0x240ba7(0x219)];},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x2e6)]=function(){const _0x5898ee=_0x5f466c,_0x3b824a=Window_STB_TurnOrder[_0x5898ee(0x211)];if([_0x5898ee(0x2ae)][_0x5898ee(0x181)](_0x3b824a['DisplayPosition']))return;this['x']=this[_0x5898ee(0x2a7)],this['y']=this['_homeY'];const _0x56328d=SceneManager[_0x5898ee(0x14a)][_0x5898ee(0x294)];this['x']+=_0x56328d['x'],this['y']+=_0x56328d['y'];},Window_STB_TurnOrder[_0x5f466c(0x136)]['updateBattleContainerOrder']=function(){const _0x165526=_0x5f466c;if(!this[_0x165526(0x2d8)])return;const _0x2a0b63=this[_0x165526(0x2d8)][_0x165526(0x12c)];if(!_0x2a0b63)return;_0x2a0b63[_0x165526(0x289)](this['compareBattlerSprites']['bind'](this));},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x2ce)]=function(_0x7ed7d,_0x594bd8){const _0x169337=_0x5f466c,_0x52c3d7=this[_0x169337(0x21e)](),_0x1bb03d=Window_STB_TurnOrder[_0x169337(0x211)][_0x169337(0x1f1)];if(_0x52c3d7&&!_0x1bb03d)return _0x7ed7d['x']-_0x594bd8['x'];else{if(_0x52c3d7&&_0x1bb03d)return _0x594bd8['x']-_0x7ed7d['x'];else{if(!_0x52c3d7&&_0x1bb03d)return _0x7ed7d['y']-_0x594bd8['y'];else{if(!_0x52c3d7&&!_0x1bb03d)return _0x594bd8['y']-_0x7ed7d['y'];}}}},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x234)]=function(){const _0x5d7fba=_0x5f466c;this[_0x5d7fba(0x25a)]=$gameSystem['isBattleSystemSTBTurnOrderVisible']();},Window_STB_TurnOrder[_0x5f466c(0x136)][_0x5f466c(0x2c8)]=function(_0x29673e){const _0x3a9028=_0x5f466c;this[_0x3a9028(0x1dc)][_0x3a9028(0x289)]((_0x2e8350,_0x1013d8)=>{const _0x386c18=_0x3a9028;return _0x2e8350[_0x386c18(0x19a)]()-_0x1013d8[_0x386c18(0x19a)]();}),this[_0x3a9028(0x139)]();if(!_0x29673e)return;for(const _0x20cb3f of this['_turnOrderContainer']){if('EWbAM'===_0x3a9028(0x288)){if(!_0x20cb3f)continue;_0x20cb3f['update'](),_0x20cb3f['_positionDuration']=0x0;}else return _0x1259ba['y']-_0x77c93d['y'];}},Window_STB_TurnOrder[_0x5f466c(0x136)]['recalculateHome']=function(){const _0x4c1b96=_0x5f466c;if(!this[_0x4c1b96(0x21e)]())return;const _0x574edf=VisuMZ[_0x4c1b96(0x1b1)]['Settings'][_0x4c1b96(0x108)];if(!_0x574edf[_0x4c1b96(0x2bd)])return;const _0x2c2384=$gameParty[_0x4c1b96(0x280)]()['filter'](_0x4419b3=>_0x4419b3&&_0x4419b3['isAlive']()&&_0x4419b3[_0x4c1b96(0x158)]())['length'],_0x2e7906=$gameTroop[_0x4c1b96(0x280)]()[_0x4c1b96(0x115)](_0x4cb17b=>_0x4cb17b&&_0x4cb17b[_0x4c1b96(0x12f)]()&&_0x4cb17b[_0x4c1b96(0x158)]())['length'],_0x337b16=this['createBattlerRect'](_0x2c2384,_0x2e7906);this[_0x4c1b96(0x204)]=_0x337b16['x'],this[_0x4c1b96(0x2f5)]=_0x337b16['y'],(this[_0x4c1b96(0x204)]!==this['_homeX']||this[_0x4c1b96(0x2f5)]!==this[_0x4c1b96(0x2cc)])&&(this['_homeDuration']=_0x574edf[_0x4c1b96(0x179)]);};